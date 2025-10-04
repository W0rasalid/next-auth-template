import type { Meta, StoryObj } from '@storybook/react';
import { ButtonBack, ButtonBackProps } from './ButtonBack';
import React, { FC } from 'react';
import { Button } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ButtonBack, { ButtonBackProps } from 'components/button/ButtonBack';

const meta = {
  title: 'Component/Button/ButtonBack',
  component: ButtonBack,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ButtonBack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Back'
  },
  render: ({ label, ...props }: ButtonBackProps) => {
    return <ButtonBack label={label} />;
  }
};

export const Code: Story = {
  args: {
    label: 'Back'
  },
  render: ({ label, ...props }: ButtonBackProps) => {
    return (
      <Button
        variant="contained"
        startIcon={<ChevronLeftIcon />}
        sx={{
          background: 'linear-gradient(180deg, #3E3D45 0%, #202020 100%)',
          color: 'white'
        }}
        {...props}
      >
        <React.Fragment>{label}</React.Fragment>
      </Button>
    );
  }
};
