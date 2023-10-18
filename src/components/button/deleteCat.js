import axios from 'axios';
import { useDeleteCategoryMutation } from '@/services/CategoryRTK';

const DeleteCat = ({ ID }) => {
  const [deleteCategory, { isLoading, isError }] = useDeleteCategoryMutation();
  async function deleteItem() {
    try {
      const response = await deleteCategory(ID).unwrap();
      console.log('Delete successful:', response);
    } catch (error) {
      console.error('Delete failed:', error);
    }
  }
  return (
    <button onClick={deleteItem} className="border-2 border-black">
      Delete
    </button>
  );
};

export default DeleteCat;
