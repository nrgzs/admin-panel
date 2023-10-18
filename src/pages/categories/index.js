import AddCategory from '@/components/category/addCategory';
import AllCategories from '@/components/category/categories';
import CategoryCart from '@/components/category/categoryCart';
import axios from 'axios';



const CategoryPage = () => {
  return (
    <div>
      <h2 className="font-bold text-2xl text-center">All Categories</h2>
      <div className="flex flex-col lg:flex-row gap-4">
        <AddCategory />
        <AllCategories />
      </div>
    </div>
  );
};

export default CategoryPage;
