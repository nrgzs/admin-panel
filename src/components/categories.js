import CategoryCart from "./categoryCart";

export default function AllCategories() {
  return (
    <div className="flex flex-col  items-center">
      <h2 className="font-bold">All Categories</h2>
      
      <div className="flex flex-col  items-center">
        <CategoryCart/>
      </div>
    </div>
  );
}
