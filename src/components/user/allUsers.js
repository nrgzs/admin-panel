import React from 'react';
import UserCart from './userCart';
import { type } from 'os';



const AllUsers= () => {

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-bold">All Admins</h2>

      <div className="flex flex-col items-center">
        {/* {admins?.map((user) => (
          <UserCart key={user.name} admin={user} />
        ))} */}
      </div>
    </div>
  );
};

export default AllUsers;
