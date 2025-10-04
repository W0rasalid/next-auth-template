import type { Meta, StoryObj } from "@storybook/react";
import React, { FC } from "react";
import { Button, Typography } from "@mui/material";
import ButtonClear, { ButtonClearProps } from "@/components/button/ButtonClear";

// import { FormattedMessage, IntlProvider } from 'react-intl';

const meta = {
  title: "Component/Button/ButtonClear",
  component: ButtonClear,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonClear>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Clear",
    disable: false,
    onClick: () => {},
  },
  argTypes: {
    disable: {
      control: "boolean",
    },
  },
  render: ({ disable, text, onClick }: ButtonClearProps) => {
    return (
      <ButtonClear
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
    text: "Clear",
    disable: true,
    onClick: () => {},
  },
  argTypes: {
    disable: {
      control: "boolean",
    },
  },
  render: ({ disable, text, onClick }: ButtonClearProps) => {
    return (
      <ButtonClear
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
    text: "Clear",
    disable: false,
    onClick: () => {},
  },
  render: ({ disable, onClick, text }: ButtonClearProps) => {
    return (
      <Button
        disabled={disable}
        variant="contained"
        color="error"
        onClick={() => {
          if (onClick) {
            onClick();
          }
        }}
      >
        <Typography>{text}</Typography>
      </Button>
    );
  },
};
