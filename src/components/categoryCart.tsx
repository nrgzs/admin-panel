import Link from 'next/link';
import React from 'react';

interface CategoryCartProps {
  category: string;
}

 const CategoryCart: React.FC<CategoryCartProps>=({ category })=> {
    category = 'category'
  return (
    <Link href={`categories/${category}`}>
      <div className="rounded-md text-center  text-white bg-slate-300 p-5 w-32 hover:bg-slate-600 font-bold shadow-md">
        {category}
      </div>
    </Link>
  );
}

export default CategoryCart