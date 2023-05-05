import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  padding: '40px',
  bgcolor: 'background.paper',
  boxShadow: 'rgba(0, 0, 0, 0.05) 0 6px 24px 0, rgba(0, 0, 0, 0.08) 0 0 0 1px',
  borderRadius: '12px',
};

export default function CustomModal({ open, handleClose }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: '10px',
              right: '10px',
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography
            sx={{ textAlign: 'center' }}
            variant="h5"
            component="h2"
            mb={2}
          >
            Let's create your task!
          </Typography>
          <form
            onSubmit={''}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <TextField
              label="Task Name"
              value={''}
              onChange={''}
              fullWidth
              mb={2}
            />
            <Button
              sx={{
                margin: '10px',
                width: '100%',
              }}
              type="submit"
              variant="outlined"
              color="primary"
            >
              SUBMIT
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
