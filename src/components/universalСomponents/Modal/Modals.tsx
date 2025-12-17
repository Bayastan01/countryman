import React, { useState } from 'react';
import { Modal, Box, Typography, Button, useMediaQuery } from '@mui/material';

interface ModalsProps {
  children: React.ReactNode;
  open: boolean;
  Close: () => void;
}

const Modals: React.FC<ModalsProps> = ({ children, open, Close }) => {
  // Определяем, используется ли мобильное устройство
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <div>
      <Modal
        open={open}
        onClose={Close}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 99,
        }}
      >
        <Box
          sx={{
            width: isMobile ? '80%' : '80%', // 90% ширины для мобильных, 80% для десктопов
            height: isMobile ? '80%' : '80%', // 90% высоты для мобильных, 80% для десктопов
            bgcolor: 'background.paper',
            borderRadius: isMobile ? '0' : '8px', // Без закруглений на мобильных
            boxShadow: 24,
            p: isMobile ? 2 : 4,
            textAlign: 'center',
            overflow: 'auto', // Убедимся, что контент не выходит за рамки
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {children}
        </Box>
      </Modal>
    </div>
  );
};

export default Modals;