
import React from 'react';
import DeleteUser from './deleteUser';



const UserCart = ({ admin }) => {
  console.log("🚀 ~ file: userCart.js:8 ~ UserCart ~ admin :", admin._id )
  
  return (
    
      <div className="rounded-md text-center  text-white bg-slate-300 p-5 w-32 hover:bg-slate-600 font-bold shadow-md">
   
        <h2>{admin.name}</h2>
        <p>{admin.email}</p>
        <DeleteUser ID={admin._id}/>
      </div>
  );
};

export default UserCart;
