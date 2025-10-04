import ButtonExcel, { ButtonExcelProps } from "@/components/button/ButtonExcel";
import { FileExcelOutlined } from "@ant-design/icons";
import { Button } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";

import React from "react";

const meta = {
  title: "Component/Button/ButtonExcel",
  component: ButtonExcel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonExcel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Export Excel",
  },
  // render: ({ ...props }: ButtonExcelProps) => {
  //   return <ButtonExcel>{props.children}</ButtonExcel>;
  // },
};

export const Code: Story = {
  args: {
    children: "Export Excel",
  },
  render: ({ ...props }: ButtonExcelProps) => {
    return (
      <Button
        variant="contained"
        startIcon={<FileExcelOutlined />}
        sx={{
          background: "linear-gradient(180deg, #2E9326 0%, #2E9326 100%)",
          color: "white",
        }}
      >
        {props.children}
      </Button>
    );
  },
};
