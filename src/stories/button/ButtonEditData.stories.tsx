import type { Meta, StoryObj } from "@storybook/react";
import React, { FC } from "react";
import { Button, Typography } from "@mui/material";
import ButtonEditData, {
  ButtonEditDataProps,
} from "@/components/button/ButtonEditData";
// import { FormattedMessage, IntlProvider } from 'react-intl';

const meta = {
  title: "Component/Button/ButtonEditData",
  component: ButtonEditData,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonEditData>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Save",
    disable: false,
    onClick: () => {},
  },
  argTypes: {
    disable: {
      control: "boolean",
    },
  },
  render: ({ disable, text, onClick }: ButtonEditDataProps) => {
    return (
      <ButtonEditData
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
    text: "Save",
    disable: true,
    onClick: () => {},
  },
  argTypes: {
    disable: {
      control: "boolean",
    },
  },
  render: ({ disable, text, onClick }: ButtonEditDataProps) => {
    return (
      <ButtonEditData
        text={text}
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
    text: "Save",
    disable: false,
    onClick: () => {},
  },
  render: ({ disable, onClick, text }: ButtonEditDataProps) => {
    return (
      <Button
        disabled={disable}
        variant="contained"
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
