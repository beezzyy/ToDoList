import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import CustomModal from './CustomModal';

const ListHeader = ({ listName }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const signOut = () => {
    console.log('sign out');
  };

  const handleAddClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="list-header">
      <h1>{listName}</h1>
      <div className="button-container">
        <Button
          sx={{
            padding: '5px',
            minWidth: '40px',
            borderRadius: '12px',
            color: 'green',
          }}
          onClick={handleAddClick}
        >
          <AddCircleOutlineIcon fontSize="large" />
        </Button>
        <Button
          sx={{
            padding: '5px',
            minWidth: '40px',
            borderRadius: '12px',
            color: 'grey',
          }}
          onClick={signOut}
        >
          <LogoutIcon />
        </Button>
        <CustomModal open={isModalOpen} handleClose={handleClose} />
      </div>
    </div>
  );
};

export default ListHeader;
