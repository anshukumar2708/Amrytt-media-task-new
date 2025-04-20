"use client";
import React, { useState } from "react";
import { Card, Form, Input, Button, Select, Upload, Tag, Checkbox } from "antd";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { RichTextEditor } from "../rich-text-editor/rich-text-editor";
import Link from "next/link";
import RightArrow from "../all-icons/right-arrow";
import SaveIcon from "../all-icons/save-icon";
import CancelIcon from "../all-icons/cancel-icon";
import { useParams } from "next/navigation";
import { addProduct, Product, updateProduct } from "@/app/redux/productSlice";
import moment from "moment";
import { ProductStatus } from "../productList/productList";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const { Option } = Select;

type IVariation = {
  type: string;
  value: string;
};

type IProductFormValues = {
  name: string;
  description: string;
  category: string;
  tags: string[];
  status: string;
  price: string;
  discountType: string;
  discountPercentage: number;
  taxClass: string;
  vatAmount: number;
  sku: string;
  barcode: string;
  quantity: number;
  variationTypes: string[];
  variations: IVariation[];
  isPhysical: boolean;
  weight: number;
  height: number;
  length: number;
  width: number;
};

const ProductForm: React.FC = () => {
  const { id } = useParams();
  const isEditMode = !!id;
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [tags, setTags] = useState<string[]>(["Watch", "Gadget"]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  // Sample product data for edit mode
  // const productData = {
  //   name: "Smartwatch E2",
  //   description:
  //     "Smartwatch for men women notify you incoming calls, SMS notifications, when you connect the smartphone with fitness tracker. Connect fitness tracker with your phone, you will never miss a call and a message. The smart watches for android phones will vibrate to alert you if your phone receives any notifications. You can reject calls and view message directly from your watch. A best gift for family and friends.",
  //   category: "Watch",
  //   tags: ["Watch", "Gadget"],
  //   status: "Published",
  //   price: 400.0,
  //   discountType: "No Discount",
  //   discountPercentage: 0,
  //   taxClass: "Tax Free",
  //   vatAmount: 0,
  //   sku: "302002",
  //   barcode: "0984939101123",
  //   quantity: 124,
  //   variationTypes: ["Color"],
  //   variations: [
  //     { type: "Color", value: "Black" },
  //     { type: "Color", value: "Gray" },
  //   ],
  //   isPhysical: true,
  //   weight: 0.25,
  //   height: 10,
  //   length: 10,
  //   width: 7,
  // };

  // useEffect(() => {
  //   if (isEditMode) {
  //     form.setFieldsValue(productData);
  //   }
  // }, [form, isEditMode]);

  const handleFormSubmit = (values: IProductFormValues) => {
    console.log("Form values:", values);
    const newProduct: Product = {
      id: Math.random(),
      name: values.name,
      variants: 1,
      image: "",
      sku: values.sku,
      category: values.category,
      stock: 10,
      price: `$${Number(values.price).toFixed(2)}`,
      status: values.status as ProductStatus,
      added: moment().format("DD MMM YYYY"),
    };
    console.log("newProduct", newProduct);
    if (isEditMode) {
      dispatch(updateProduct(newProduct));
    } else {
      dispatch(addProduct(newProduct));
    }
    router.push("/product");
    form.resetFields();
  };

  // Handle tag input
  const handleClose = (removedTag: string) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setTags(newTags);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && !tags.includes(inputValue)) {
      setTags([...tags, inputValue]);
    }
    setInputVisible(false);
    setInputValue("");
  };

  // Add new variation
  const addVariation = () => {
    const variations = form.getFieldValue("variations") || [];
    form.setFieldsValue({
      variations: [...variations, { type: "Color", value: "" }],
    });
  };

  // Remove variation
  const removeVariation = (index: number) => {
    const variations = form.getFieldValue("variations") || [];
    form.setFieldsValue({
      variations: variations.filter((_: IVariation, i: number) => i !== index),
    });
  };

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold mb-1">
            {isEditMode ? "Edit Product" : "Add Product"}
          </h1>

          <div className="text-sm text-gray-500 flex items-center">
            <Link
              href="/"
              className="hover:text-blue-500 cursor-pointer text-[#2086BF]"
            >
              Dashboard
            </Link>
            <span className="mx-2">
              <RightArrow />
            </span>
            <Link
              href="/product"
              className="hover:text-blue-500 cursor-pointer text-[#2086BF]"
            >
              Product List
            </Link>
            <span className="mx-2">
              <RightArrow />
            </span>
            <span className="text-gray-800">
              {isEditMode ? "Edit Product" : "Add Product"}
            </span>
          </div>
        </div>
        <div className="flex mt-4 md:mt-0 gap-2">
          <Button>
            <CancelIcon />
            Cancel
          </Button>
          <Button
            // icon={<SaveIcon />}
            type="primary"
            onClick={() => form.submit()}
          >
            <SaveIcon />
            {isEditMode ? "Save Product" : "Add Product"}
          </Button>
        </div>
      </div>

      <Form
        form={form}
        layout="vertical"
        // initialValues={productData}
        onFinish={handleFormSubmit}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* General Information */}
            <Card title="General Information">
              <Form.Item
                name="name"
                label="Product Name"
                rules={[
                  { required: true, message: "Please input product name" },
                ]}
              >
                <Input placeholder="Enter product name" />
              </Form.Item>

              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: "Please input product description",
                  },
                ]}
              >
                <RichTextEditor />
              </Form.Item>
            </Card>

            {/* Media */}
            <Card title="Media">
              <Form.Item name="images" label="Photo">
                <Upload
                  listType="picture-card"
                  fileList={[]}
                  action="/upload.do"
                  maxCount={5}
                >
                  <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </div>
                </Upload>
                <div className="text-xs text-gray-500 mt-2">
                  Drag and drop image here, or click add image
                </div>
              </Form.Item>
            </Card>

            {/* Pricing */}
            <Card title="Pricing">
              <Form.Item
                name="price"
                label="Base Price"
                rules={[{ required: true, message: "Please input price" }]}
              >
                <Input prefix="$" type="number" step="0.01" />
              </Form.Item>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Form.Item name="discountType" label="Discount Type">
                  <Select placeholder="Select discount type">
                    <Option value="No Discount">No Discount</Option>
                    <Option value="Percentage">Percentage</Option>
                    <Option value="Fixed Amount">Fixed Amount</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  name="discountPercentage"
                  label="Discount Percentage (%)"
                >
                  <Input type="number" suffix="%" />
                </Form.Item>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Form.Item name="taxClass" label="Tax Class">
                  <Select placeholder="Select tax class">
                    <Option value="Tax Free">Tax Free</Option>
                    <Option value="Standard">Standard</Option>
                    <Option value="Reduced">Reduced</Option>
                  </Select>
                </Form.Item>

                <Form.Item name="vatAmount" label="VAT Amount (%)">
                  <Input type="number" suffix="%" />
                </Form.Item>
              </div>
            </Card>

            {/* Inventory */}
            <Card title="Inventory">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <Form.Item
                  name="sku"
                  label="SKU"
                  rules={[{ required: true, message: "Please input SKU" }]}
                >
                  <Input placeholder="Enter SKU" />
                </Form.Item>

                <Form.Item name="barcode" label="Barcode">
                  <Input placeholder="Enter Barcode" />
                </Form.Item>

                <Form.Item
                  name="quantity"
                  label="Quantity"
                  rules={[{ required: true, message: "Please input quantity" }]}
                >
                  <Input type="number" min={0} placeholder="Enter Quantity" />
                </Form.Item>
              </div>
            </Card>

            {/* Variation */}
            <Card title="Variation">
              <Form.List name="variations">
                {(fields) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <div
                        key={key}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
                      >
                        <Form.Item
                          {...restField}
                          name={[name, "type"]}
                          label="Variation Type"
                        >
                          <Select placeholder="Select variation type">
                            <Option value="Color">Color</Option>
                            <Option value="Size">Size</Option>
                            <Option value="Material">Material</Option>
                          </Select>
                        </Form.Item>

                        <div className="flex items-end gap-2">
                          <Form.Item
                            {...restField}
                            name={[name, "value"]}
                            label="Variation"
                            className="flex-1"
                          >
                            <Input placeholder="Enter variation value" />
                          </Form.Item>
                          <Button
                            danger
                            icon={<DeleteOutlined />}
                            onClick={() => removeVariation(name)}
                            className="mb-2"
                          />
                        </div>
                      </div>
                    ))}
                    <Button
                      type="dashed"
                      onClick={addVariation}
                      block
                      icon={<PlusOutlined />}
                    >
                      Add Variant
                    </Button>
                  </>
                )}
              </Form.List>
            </Card>

            {/* Shipping */}
            <Card title="Shipping">
              <Form.Item name="isPhysical" valuePropName="checked">
                <Checkbox>This is a physical product</Checkbox>
              </Form.Item>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Form.Item name="weight" label="Weight">
                  <Input suffix="kg" type="number" step="0.01" />
                </Form.Item>

                <Form.Item name="height" label="Height">
                  <Input suffix="cm" type="number" />
                </Form.Item>

                <Form.Item name="length" label="Length">
                  <Input suffix="cm" type="number" />
                </Form.Item>

                <Form.Item name="width" label="Width">
                  <Input suffix="cm" type="number" />
                </Form.Item>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-1 space-y-6">
            {/* Category */}
            <Card title="Category">
              <Form.Item
                name="category"
                label="Product Category"
                rules={[
                  { required: true, message: "Please select product category" },
                ]}
              >
                <Select placeholder="Select a category">
                  <Option value="Watch">Watch</Option>
                  <Option value="Smartphone">Smartphone</Option>
                  <Option value="Laptop">Laptop</Option>
                  <Option value="Tablet">Tablet</Option>
                  <Option value="Audio">Audio</Option>
                  <Option value="Accessories">Accessories</Option>
                  <Option value="Shoes">Shoes</Option>
                  <Option value="Bag & Pouch">Bag & Pouch</Option>
                  <Option value="Toys">Toys</Option>
                  <Option value="Beauty">Beauty</Option>
                </Select>
              </Form.Item>

              <Form.Item name="tags" label="Product Tags">
                <div className="border rounded-md p-2 min-h-[80px]">
                  {tags.map((tag) => (
                    <Tag
                      className="m-1"
                      key={tag}
                      closable
                      onClose={() => handleClose(tag)}
                    >
                      {tag}
                    </Tag>
                  ))}
                  {inputVisible ? (
                    <Input
                      autoFocus
                      type="text"
                      size="small"
                      style={{ width: 78 }}
                      value={inputValue}
                      onChange={handleInputChange}
                      onBlur={handleInputConfirm}
                      onPressEnter={handleInputConfirm}
                    />
                  ) : (
                    <Tag className="m-1 cursor-pointer" onClick={showInput}>
                      <PlusOutlined /> New Tag
                    </Tag>
                  )}
                </div>
              </Form.Item>
            </Card>

            {/* Status */}
            <Card title="Status">
              <Form.Item
                name="status"
                label="Product Status"
                rules={[
                  { required: true, message: "Please select product status" },
                ]}
              >
                <Select placeholder="Select product status">
                  <Option value="Published">Published</Option>
                  <Option value="Draft">Draft</Option>
                  <Option value="Archived">Archived</Option>
                </Select>
              </Form.Item>
            </Card>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default ProductForm;
