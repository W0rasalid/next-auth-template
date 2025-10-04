import type { Meta, StoryObj } from "@storybook/react";
import React, { FC } from "react";
import { Button, Typography } from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import ButtonDownload, {
  ButtonDownloadProps,
} from "@/components/button/ButtonDownLoad";

const meta = {
  title: "Component/Button/ButtonDownload",
  component: ButtonDownload,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonDownload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Download",
    disable: false,
    onClick: () => {},
  },
  argTypes: {
    disable: {
      control: "boolean",
    },
  },
  render: ({ disable, onClick, text }: ButtonDownloadProps) => {
    return (
      <ButtonDownload
        disable={disable}
        onClick={() => {
          onClick;
        }}
        text={text}
      />
    );
  },
};

export const Disable: Story = {
  args: {
    text: "load",
    disable: true,
    onClick: () => {},
  },
  argTypes: {
    disable: {
      control: "boolean",
    },
  },
  render: ({ disable, onClick, text }: ButtonDownloadProps) => {
    return (
      <ButtonDownload
        disable={disable}
        onClick={() => {
          onClick;
        }}
        text={text}
      />
    );
  },
};

export const Code: Story = {
  args: {
    text: "Download",
    onClick: () => {},
  },
  render: ({ disable, onClick, text }: ButtonDownloadProps) => {
    return (
      <Button
        variant="contained"
        color="primary"
        disabled={disable}
        onClick={() => {
          if (onClick) {
            onClick();
          }
        }}
        sx={{
          color: "white",
        }}
      >
        <FileDownloadOutlinedIcon />
        <Typography>{text}</Typography>
      </Button>
    );
  },
};
