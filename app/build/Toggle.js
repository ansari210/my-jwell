// import React, { useState } from "react";
// import ToggleText from "../Core/toggletext/ToggleText";

// interface ToggleButtonData {
//   //   headingText: string;
//   data: string;
// }
// const Toggle = () => {
//   const [toggleButtonData, setTogglebuttonData] = useState<ToggleButtonData[]>(
//     []
//   );
//   const addHandler = () => {
//     const predefinedObj: ToggleButtonData = {
//       //   headingText: "Heading First",
//       data: "Hello users i am Maxi millian I am teaching react js",
//     };

//     const completeArray = [predefinedObj, ...toggleButtonData];
//     setTogglebuttonData(completeArray);
//   };
//   return (
//     <div className="max-w-2xl mx-auto mt-6 mb-4">
//       <button
//         onClick={addHandler}
//         className="px-4 py-2 text-white bg-blue-400 rounded-md"
//       >
//         Click +
//       </button>
//       <div className="grid gap-4 mt-4">
//         {toggleButtonData.map((obj, index) => (
//           <ToggleText key={index} text={obj?.data} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Toggle;
