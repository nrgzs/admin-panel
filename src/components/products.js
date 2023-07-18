import ItemCart from "./itemCart";
import SearchBar from "./searchBar";

export default function AllProducts(){
    return (
      <div className="flex flex-col  items-center">
        <h2 className="font-bold">All products</h2>
        <SearchBar />
        <div className="flex flex-col  items-center">
          <ItemCart />
        </div>
      </div>
    );
}