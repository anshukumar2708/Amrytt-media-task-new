import React from "react";
import { Button } from "antd";
import {
  BoldOutlined,
  ItalicOutlined,
  UnderlineOutlined,
  OrderedListOutlined,
  UnorderedListOutlined,
  AlignLeftOutlined,
  AlignCenterOutlined,
  AlignRightOutlined,
  LinkOutlined,
  PictureOutlined,
  CodeOutlined,
} from "@ant-design/icons";

interface RichTextEditorProps {
  value?: string;
  onChange?: (value: string) => void;
}

export const RichTextEditor: React.FC<RichTextEditorProps> = ({
  value,
  onChange,
}) => {
  return (
    <div className="rich-text-editor border rounded-md overflow-hidden">
      <div className="toolbar p-2 border-b bg-gray-50 flex flex-wrap gap-1">
        <Button icon={<BoldOutlined />} type="text" size="small" />
        <Button icon={<ItalicOutlined />} type="text" size="small" />
        <Button icon={<UnderlineOutlined />} type="text" size="small" />
        <div className="h-5 w-[1px] bg-gray-300 mx-1"></div>

        <Button icon={<AlignLeftOutlined />} type="text" size="small" />
        <Button icon={<AlignCenterOutlined />} type="text" size="small" />
        <Button icon={<AlignRightOutlined />} type="text" size="small" />
        <div className="h-5 w-[1px] bg-gray-300 mx-1"></div>

        <Button icon={<OrderedListOutlined />} type="text" size="small" />
        <Button icon={<UnorderedListOutlined />} type="text" size="small" />
        <div className="h-5 w-[1px] bg-gray-300 mx-1"></div>

        <Button icon={<LinkOutlined />} type="text" size="small" />
        <Button icon={<PictureOutlined />} type="text" size="small" />
        <Button icon={<CodeOutlined />} type="text" size="small" />
      </div>
      <div className="content">
        <textarea
          className="w-full min-h-[200px] p-3 outline-none resize-none"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder="Write product description here..."
        />
      </div>
    </div>
  );
};
