import type { Meta, StoryObj } from "@storybook/react";
import React, { FC } from "react";
import { Button, IconButton } from "@mui/material";

import { DeleteOutlined } from "@ant-design/icons";
import ButtonDelete, {
  ButtonDeleteProps,
} from "@/components/button/ButtonDelete";

const meta = {
  title: "Component/Button/ButtonDelete",
  component: ButtonDelete,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonDelete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disable: false,
    onClick: () => {},
  },
  argTypes: {
    disable: {
      control: "boolean",
    },
  },
  render: ({ disable, onClick }: ButtonDeleteProps) => {
    return (
      <ButtonDelete
        disable={disable}
        onClick={() => {
          onClick;
        }}
      />
    );
  },
};

export const Disable: Story = {
  args: {
    disable: true,
    onClick: () => {},
  },
  argTypes: {
    disable: {
      control: "boolean",
    },
  },
  render: ({ disable, onClick }: ButtonDeleteProps) => {
    return (
      <ButtonDelete
        disable={disable}
        onClick={() => {
          onClick;
        }}
      />
    );
  },
};

export const Code: Story = {
  args: {
    disable: false,
    onClick: () => {},
  },
  render: ({ disable, onClick, ...props }: ButtonDeleteProps) => {
    return (
      <IconButton
        disabled={disable}
        color="primary"
        {...props}
        onClick={() => {
          if (onClick) {
            onClick();
          }
        }}
      >
        <DeleteOutlined style={{ color: "#ef5350" }} />
      </IconButton>
    );
  },
};
