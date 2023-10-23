// import React from 'react';
// // import * as S from './HotBoard.styled';
// import { getHotboard } from '../../api/hotboard';
// import { useQuery } from '@tanstack/react-query';

// const HotBoard = () => {
//   const { data, error, isLoading } = useQuery<any>({
//     queryKey: ['get'],
//     queryFn: () => getHotboard()
//   });
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }
//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       {Array.isArray(data) &&
//         data.map((hotboard: any) => (
//           <div key={hotboard.id}>
//             <div>{hotboard.title}</div>
//             <div>{hotboard.content}</div>
//             <div>{hotboard.createdAt}</div>
//           </div>
//         ))}
//     </div>
//   );
// };
const HotBoard = () => {
  return <></>;
};

export default HotBoard;
