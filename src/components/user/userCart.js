
import React from 'react';



const UserCart = ({ admin }) => {
  return (
      <div className="rounded-md text-center  text-white bg-slate-300 p-5 w-32 hover:bg-slate-600 font-bold shadow-md">
        <h2>{admin.name}</h2>
        <p>{admin.email}</p>
      </div>
  );
};

export default UserCart;
