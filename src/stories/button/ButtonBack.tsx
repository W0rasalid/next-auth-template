import React from 'react';

import { Button } from '@mui/material';
import { SxProps } from '@mui/system';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export interface ButtonBackProps {
  label?: string;
  sx?: SxProps;
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: string;
  onClick?: () => void;
}

export const ButtonBack = ({ label, sx, size, backgroundColor = '#3E3D45', onClick, ...props }: ButtonBackProps) => {
  return (
    <React.Fragment>
      <Button
        variant="contained"
        startIcon={<ChevronLeftIcon />}
        sx={{
          background: 'linear-gradient(180deg, #3E3D45 0%, #202020 100%)',
          color: 'white',
          ...sx
        }}
        {...props}
        onClick={() => alert()}
      >
        <React.Fragment>{label}</React.Fragment>
      </Button>
    </React.Fragment>
  );
};
