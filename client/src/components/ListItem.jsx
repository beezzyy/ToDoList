import React from 'react';
import TickIcon from './TickIcon';
import ProgressBar from './ProgressBar';
import Button from '@mui/material/Button';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const ListItem = ({ task }) => {
  return (
    <li className="list-item">
      <div className="info-container">
        <TickIcon />
        <p className="task-title">{task.title}</p>
        <ProgressBar />
      </div>

      <div className="button-container">
        <Button
          sx={{
            padding: '5px',
            minWidth: '40px',
            borderRadius: '12px',
          }}
        >
          <EditOutlinedIcon />
        </Button>
        <Button
          color="error"
          sx={{
            padding: '5px',
            minWidth: '40px',
            borderRadius: '12px',
          }}
        >
          <DeleteOutlinedIcon />
        </Button>
      </div>
    </li>
  );
};

export default ListItem;
