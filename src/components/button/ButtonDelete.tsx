'use client';

import React from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import { IconButton } from '@mui/material';

export type ButtonDeleteProps = {
  icon?: React.ReactNode;
  disable?: boolean;
  others?: any;
  onClick?: () => void;
};

const ButtonDelete: React.FC<ButtonDeleteProps> = ({ icon = <DeleteOutlined />, onClick, disable = false }) => {
  return (
    <IconButton
      disabled={disable}
      color="error"
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      {icon}
    </IconButton>
  );
};

export default ButtonDelete;
