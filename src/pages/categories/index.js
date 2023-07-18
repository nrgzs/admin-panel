import AddCategory from "@/components/addCategory";
import AllCategories from "@/components/categories";
import CategoryCart from "@/components/categoryCart";

export default function CategoryPage (){
    return(
        <div>
            <h2 className="font-bold text-2xl text-center">
                All Categories
            </h2>
            <div className="flex flex-col lg:flex-row gap-4">
                <AddCategory/>
                <AllCategories/>
            </div>
        </div>
    )
}