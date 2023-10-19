import React from 'react';
import UserCart from './userCart';

import { useGetAllUsersQuery } from '@/services/UserRTK';

const AllUsers = () => {
  const { data, error, isLoading, isSuccess } = useGetAllUsersQuery();
  if (isSuccess) {
    console.log('🚀 ~ file: categories.tsx:14 ~ data:', data);
  }
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-bold">All Admins</h2>
      <div className="flex flex-col items-center">
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : isSuccess ? (
          data?.admins?.map((user) => {
            return <UserCart key={user.name} admin={user} />;
          })
        ) : null}
      </div>
    </div>
  );
};

export default AllUsers;
