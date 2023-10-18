import AddUser from '@/components/user/addUser';
import SignComponent from '@/components/button/signinBtn';
import axios from 'axios';
import AllUsers from '@/components/user/allUsers';


const SettingsPage  = ({
  admins,
}) => {
  return (
    <div>
      <h2>Settings PAGE</h2>;
      <SignComponent />
      <AddUser />
      <AllUsers />
    </div>
  );
};
export default SettingsPage;

// export async function getServerSideProps() {
//   try {
//     const { data } = await axios.get(`http://localhost:3000/api/auth/user`);
//     const { admins } = data;
//     console.log(
//       '🚀 ~ file: settings.tsx:30 ~ getServerSideProps ~  data:',
//       data
//     );
//     // console.log("🚀 ~ file: settings.tsx:30 ~ getServerSideProps ~ admins:", admins)

//     console.log('🚀 ~ file: index.tsx:34 ~ getServerSideProps ~ data:', data);
//     return {
//       props: {
//         admins,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching data:', error);

//     return {
//       props: {
//         admins: [],
//       },
//     };
//   }
// }
