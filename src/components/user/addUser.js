import { useRef } from 'react';
import React from 'react';
import axios from 'axios';
import { useUpdateUserMutation } from '@/services/UserRTK';

const AddUser = () => {
  const userName = useRef(null);
  const userEmail = useRef(null);
  const userPassword = useRef(null);
   const userRole = useRef(null);

  // async function PostAdmin() {
  //   await axios.post(`http://localhost:3000/api/auth/user`, {
  //     name: userName.current?.value,
  //     email: userEmail.current?.value,
  //     password: userPassword.current?.value,
  //   });
  // }

   const [updateUser, { isLoading, isError }] = useUpdateUserMutation();

   async function PostAdmin(e) {
     e.preventDefault();

     const updatedData = {
       name: userName.current?.value,
       email: userEmail.current?.value,
       password: userPassword.current?.value,
       role: userRole.current?.value,
     };
     console.log("🚀 ~ file: addUser.js:31 ~ PostAdmin ~ updatedData:", updatedData)
    

     try {
       const response = await updateUser(updatedData).unwrap();
       console.log('Update successful:', response);
     } catch (error) {
       console.error('Update failed:', error);
     }
   }

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="font-bold">Add New Admin</h2>
      <form>
        <div className="flex flex-col gap-3 justify-center items-center">
          <input
            type="text"
            className=" bg-slate-200 p-2 rounded  w-96 outline-none"
            ref={userName}
            placeholder="User Name"
          ></input>
          <input
            type="email"
            className=" bg-slate-200 p-2 rounded  w-96 outline-none"
            ref={userEmail}
            placeholder="User Email"
          ></input>
          <input
            type="password"
            className=" bg-slate-200 p-2 rounded  w-96 outline-none"
            ref={userPassword}
            placeholder="User Password"
          ></input>
          <input
            type="role"
            className=" bg-slate-200 p-2 rounded  w-96 outline-none"
            ref={userRole}
            placeholder="User Role"
          ></input>
          <button
            onClick={PostAdmin}
            className=" bg-slate-400 rounded-xl w-36 p-2 text-slate-50 font-bold- hover:bg-slate-600"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
