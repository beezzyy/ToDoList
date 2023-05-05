import React, { useState } from 'react';
import TickIcon from './TickIcon';
import ProgressBar from './ProgressBar';
import Button from '@mui/material/Button';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CustomModal from './CustomModal';

const ListItem = ({ task, getData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };
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
          onClick={handleEditClick}
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
        </Button>{' '}
        <CustomModal
          mode={'edit'}
          open={isModalOpen}
          handleClose={handleClose}
          task={task}
          getData={getData}
        />
      </div>
    </li>
  );
};

export default ListItem;
