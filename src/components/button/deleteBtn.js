import axios from 'axios';
import { useDeleteProductMutation } from '../../services/ProductRTK';

const DeleteBtn= ({ ID }) => {
  const [deleteProduct, { isLoading, isError }] = useDeleteProductMutation();
  async function deleteItem() {
    try {
      const response = await deleteProduct(ID).unwrap();
      console.log('Delete successful:', response);
    } catch (error) {
      console.error('Delete failed:', error);
    }

    // console.log('asdfghjk');

    // axios.delete(`http://localhost:3000/api/product?ID=${ID}`);
  }
  return (
    <button onClick={deleteItem} className="border-2 border-black">
      Delete
    </button>
  );
};

export default DeleteBtn;
