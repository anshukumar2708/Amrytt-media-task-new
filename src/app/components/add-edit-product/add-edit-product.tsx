"use client";
import React, { useState } from "react";
import {
  Card,
  Form,
  Input,
  Button,
  Select,
  //   Radio,
  Upload,
  Tag,
  Checkbox,
  //   Divider,
  //   InputNumber,
} from "antd";
import {
  //   ArrowLeftOutlined,
  DeleteOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { RichTextEditor } from "../rich-text-editor/rich-text-editor";

const { Option } = Select;

const ProductForm: React.FC = () => {
  //   const navigate = useNavigate();
  //   const { id } = useParams();
  const isEditMode = true;
  const [form] = Form.useForm();
  const [tags, setTags] = useState<string[]>(["Watch", "Gadget"]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // Sample product data for edit mode
  const productData = isEditMode
    ? {
        name: "Smartwatch E2",
        description:
          "Smartwatch for men women notify you incoming calls, SMS notifications, when you connect the smartphone with fitness tracker. Connect fitness tracker with your phone, you will never miss a call and a message. The smart watches for android phones will vibrate to alert you if your phone receives any notifications. You can reject calls and view message directly from your watch. A best gift for family and friends.",
        category: "Watch",
        tags: ["Watch", "Gadget"],
        status: "Published",
        price: 400.0,
        discountType: "No Discount",
        discountPercentage: 0,
        taxClass: "Tax Free",
        vatAmount: 0,
        sku: "302002",
        barcode: "0984939101123",
        quantity: 124,
        variationTypes: ["Color"],
        variations: [
          { type: "Color", value: "Black" },
          { type: "Color", value: "Gray" },
        ],
        isPhysical: true,
        weight: 0.25,
        height: 10,
        length: 10,
        width: 7,
      }
    : undefined;

  // Initialize form with product data if in edit mode
  React.useEffect(() => {
    if (isEditMode && productData) {
      form.setFieldsValue(productData);
    }
  }, [form, isEditMode, productData]);

  const handleFormSubmit = (values: any) => {
    console.log("Form values:", values);
    // navigate("/product");
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
      variations: variations.filter((_: any, i: number) => i !== index),
    });
  };

  return (
    <div className="product-form-page">
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-semibold mb-1">
            {isEditMode ? "Edit Product" : "Add Product"}
          </h1>
        </div>
        <div className="flex mt-4 md:mt-0 gap-2">
          <Button
          //   onClick={() => navigate("/product")}
          >
            Cancel
          </Button>
          <Button type="primary" onClick={() => form.submit()}>
            {isEditMode ? "Save Product" : "Add Product"}
          </Button>
        </div>
      </div>

      <div className="text-sm text-gray-500 flex items-center mb-6">
        <span
          className="hover:text-blue-500 cursor-pointer"
          //   onClick={() => navigate("/")}
        >
          Dashboard
        </span>
        <span className="mx-2">•</span>
        <span
          className="hover:text-blue-500 cursor-pointer"
          //   onClick={() => navigate("/product")}
        >
          Product List
        </span>
        <span className="mx-2">•</span>
        <span className="text-gray-800">
          {isEditMode ? "Edit Product" : "Add Product"}
        </span>
      </div>

      <Form
        form={form}
        layout="vertical"
        initialValues={productData}
        onFinish={handleFormSubmit}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* General Information */}
            <Card bordered={false} title="General Information">
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
            <Card bordered={false} title="Media">
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
            <Card bordered={false} title="Pricing">
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
            <Card bordered={false} title="Inventory">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Form.Item
                  name="sku"
                  label="SKU"
                  rules={[{ required: true, message: "Please input SKU" }]}
                >
                  <Input placeholder="Enter SKU" />
                </Form.Item>

                <Form.Item name="barcode" label="Barcode">
                  <Input placeholder="Enter barcode" />
                </Form.Item>
              </div>

              <Form.Item
                name="quantity"
                label="Quantity"
                rules={[{ required: true, message: "Please input quantity" }]}
              >
                <Input type="number" min={0} />
              </Form.Item>
            </Card>

            {/* Variation */}
            <Card bordered={false} title="Variation">
              <Form.List name="variations">
                {(fields, { add, remove }) => (
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
            <Card bordered={false} title="Shipping">
              <Form.Item name="isPhysical" valuePropName="checked">
                <Checkbox>This is a physical product</Checkbox>
              </Form.Item>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <Card bordered={false} title="Category">
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
            <Card bordered={false} title="Status">
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
