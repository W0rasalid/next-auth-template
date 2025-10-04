'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { IconButton } from '@mui/material';
import { EditOutlined } from '@ant-design/icons';

export type ButtonEditPageProps = {
  icon?: React.ReactNode;
  others?: any;
  path?: string;
  disable?: boolean;
};

const ButtonEditPage: React.FC<ButtonEditPageProps> = ({ icon = <EditOutlined />, others, path, disable = false }) => {
  const router = useRouter();
  return (
    <IconButton disabled={disable} color="primary" {...others} onClick={() => router.push(`${path}`)}>
      {icon}
    </IconButton>
  );
};

export default ButtonEditPage;
