import AllOrders from "@/components/order/allOrders";

const OrdersPage = () => {
  return  (<div>
      <h2 className=" font-bold text-2xl text-center w-full ">Product Page</h2>
      <div className="main lg:mt-5 flex flex-col lg:flex-row gap-7 ">
     
        <AllOrders />
      </div>
    </div>)
};

export default OrdersPage;


