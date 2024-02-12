import { useContext } from 'react';
import { UserContext } from './userContext';
import axios from 'axios';

const DeleteAccount = () => {
  const { userId, setUserId } = useContext(UserContext);

  const deleteAccount = async () => {
    try {
        if (userId) {
        console.log('userId:', userId);
      console.log('Attempting to delete account...');
      await axios.delete('http://localhost:3003/profile/delete', {
        data: { userId },
        withCredentials: true,
        responseType: 'json',
      });
      console.log('userId:', userId);
      setUserId(null);
      console.log('Account deleted successfully!');
    } else {
        alert("You must be logged in to delete an account!")
    }
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account?')) {
      console.log('User confirmed deletion...');
      deleteAccount();
    }
  };

  return (
    <div>
      <button className='border border-white rounded text-white text-sm p-2' onClick={handleDeleteAccount}>Delete Account</button>
    </div>
  );
};

export default DeleteAccount;
