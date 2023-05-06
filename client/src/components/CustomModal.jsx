import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useCookies } from 'react-cookie';

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

export default function CustomModal({
  mode,
  open,
  handleClose,
  task,
  getData,
}) {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const editMode = mode === 'edit' ? true : false;

  const [data, setData] = React.useState({
    user_email: editMode ? task.user_email : cookies.Email,
    title: editMode ? task.title : null,
    progress: editMode ? task.progress : 50,
    date: editMode ? task.date : new Date(),
  });

  const postData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/todos/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log('success');
        setData({
          user_email: cookies.Email,
          title: null,
          progress: 50,
          date: new Date(),
        });
        handleClose();
        getData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const editData = async (e) => {
    e.preventDefault();
    try {
      if (!task.id) {
        throw new Error('No task id');
      }
      const response = await fetch(`http://localhost:8000/todos/${task.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log('success');
        handleClose();
        getData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((data) => ({ ...data, [name]: value }));
  };
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
            Let's {mode} your task!
          </Typography>
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <TextField
              label="Task Name"
              value={data.title}
              fullWidth
              name="title"
              onChange={handleChange}
              mb={2}
            />
            <label style={{ marginTop: '20px' }} htmlFor="range">
              Drag to select your current progress
            </label>
            <input
              type="range"
              id="range"
              name="progress"
              min="0"
              max="100"
              value={data.progress}
              onChange={handleChange}
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
              onClick={editMode ? editData : postData}
            >
              SUBMIT
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
