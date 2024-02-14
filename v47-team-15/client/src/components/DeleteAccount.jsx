import { useContext, useState } from 'react';
import { UserContext } from './userContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DeleteAccount = () => {
  const { userId, setUserId } = useContext(UserContext);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const navigate = useNavigate();

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
        setUserId('');
        navigate('/');
        console.log('Account deleted successfully!');
      } else {
        alert('You must be logged in to delete an account!');
      }
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  };

  const handleDeleteAccount = () => {
    deleteAccount();
  };

  const toggleDeleteModal = () => {
    setDeleteModalOpen(true);
  };

  const closeModal = () => {
    setDeleteModalOpen(false);
    console.log('close');
  };

  return (
    <>
      <div>
        <button
          className="border border-white rounded text-white text-sm p-2"
          onClick={toggleDeleteModal}
        >
          Delete Account
        </button>
      </div>
      <div className={`max-w-2xl mx-auto ${deleteModalOpen ? '' : 'hidden'}`}>
        <div
          className="fixed top-0 left-0 right-0 bottom-0 z-40 bg-gray-500 opacity-40"
          onClick={closeModal}
        ></div>
        <div className="absolute top-32 left-0 right-0 z-50 w-full max-w-2xl px-4 mx-auto">
          <div className="w-full flex flex-col justify-center rounded-lg shadow p-2 bg-[#1A183E]">
            <div className="flex flex-row justify-between align-center">
              <span>&nbsp;</span>
              <h1 className="text-2xl text-white text-center font-bold py-4">
                Delete account
              </h1>
              <button
                onClick={closeModal}
                className="self-start cursor-pointer text-white text-xl "
              >
                x
              </button>
            </div>
            <div>
              <p className="text-center py-4">
                Are you sure you want to delete your account?
              </p>
              <div className="w-full flex flex-row justify-center items-center gap-6 py-4">
                <button
                  onClick={handleDeleteAccount}
                  className="bg-[#00A83E] rounded text-white py-1 px-4"
                >
                  Yes
                </button>
                <button
                  onClick={closeModal}
                  className="border border-white rounded text-white py-1 px-4"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteAccount;
