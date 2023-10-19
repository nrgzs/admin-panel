import axios from 'axios';
import { useDeleteUserMutation } from '@/services/UserRTK';

const DeleteUser = ({ ID }) => {
  const [deleteUser, { isLoading, isError }] = useDeleteUserMutation();
  async function deleteIt() {
    try {
      const response = await deleteUser(ID).unwrap();
      console.log('Delete successful:', response);
    } catch (error) {
      console.error('Delete failed:', error);
    }
  }
  return (
    <button onClick={deleteIt} className="border-2 border-black">
      Delete
    </button>
  );
};

export default DeleteUser;
