import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import CustomModal from './CustomModal';
import { useCookies } from 'react-cookie';

const ListHeader = ({ listName, getData }) => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const signOut = () => {
    console.log('sign out');
    removeCookie('Email');
    removeCookie('AuthToken');
    window.location.reload();
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
        <CustomModal
          mode={'create'}
          open={isModalOpen}
          handleClose={handleClose}
          getData={getData}
        />
      </div>
    </div>
  );
};

export default ListHeader;
