// import { useEffect, useState } from 'react';
// import { useGetManagerQuery } from '../../../../../slices/writers/writerApiSlice';

// const MyManagers = () => {
//   // Get 'manager' from localStorage
//   const [managerId, setManagerId] = useState(null);

//   useEffect(() => {
//     const savedManagerId = localStorage.getItem('manager');
//     if (savedManagerId) {
//       setManagerId(savedManagerId);
//     }
//   }, []); 

//   // Fetch manager data using the ID from localStorage
//   const { data: managerData, error } = useGetManagerQuery(managerId);

//   if (error) {
//     return <div>Error fetching manager details</div>;
//   }

//   return (
//     <div>
//       My managers
//       {/* You can render managerData here */}
//       {managerData && <div>Manager Info: {JSON.stringify(managerData)}</div>}
//     </div>
//   );
// };

// export default MyManagers;

import { useParams } from 'react-router-dom';

const ManagerOrder = () => {
  const { managerId } = useParams();  // Grab the managerId from the URL
  console.log('Manager ID:', managerId);  // For debugging

  return (
    <div>
      <h1>Manager Details for ID: {managerId}</h1>
      {/* Render manager details */}
    </div>
  );
};

export default ManagerOrder;


