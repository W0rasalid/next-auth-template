'use client';

import { Button, Typography } from '@mui/material';
import { SxProps } from '@mui/system';
import { useRouter } from 'next/navigation';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { FormattedMessage } from 'react-intl';
import React from 'react';

export type ButtonBackProps = {
  children?: React.ReactNode | string;
  sx?: SxProps;
  others?: any;
  onClick?: () => void;
};

const ButtonBack: React.FC<ButtonBackProps> = ({ children, sx, others, onClick }) => {
  const router = useRouter();
  return (
    <Button
      variant="contained"
      startIcon={<ChevronLeftIcon />}
      sx={{
        background: 'linear-gradient(180deg, #3E3D45 0%, #202020 100%)',
        color: 'white',
        ...sx
      }}
      {...others}
      onClick={() => {
        if (onClick) {
          onClick();
        } else {
          router.back();
        }
      }}
    >
      {!children ? (
        <Typography>
          <FormattedMessage id="back" />
        </Typography>
      ) : (
        <React.Fragment>{children}</React.Fragment>
      )}
    </Button>
  );
};

export default ButtonBack;
