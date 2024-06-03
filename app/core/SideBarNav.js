// // import React, { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // import { BsChevronDown, BsChevronUp } from "react-icons/bs";
// // import { useDispatch } from "react-redux";
// // import { handleNavPath } from "../../../../store/app";

// import Link from "next/link";

// interface nararr {
//   navArr: any;
// }
// const SideBarNav = ({ navArr }: nararr) => {
//   console.log(navArr)
//   // const [selectedNav, setSelectedGroupNev] = useState([]);
//   // const [autoFindActivePath, setAutoFindActivePath] = useState(true);
//   // const dispatch = useDispatch();

//   // function toSetNavView(pathArr: any, type: any) {
//   //   setSelectedGroupNev((prev: any) => {
//   //     if (prev?.length && type !== "Group") {
//   //       return [...pathArr];
//   //     } else if (
//   //       prev?.length >= pathArr.length &&
//   //       pathArr.every((el: any) => prev.includes(el))
//   //     ) {
//   //       return prev.slice(0, prev.indexOf(pathArr.at(-1)));
//   //     } else if (
//   //       type === "Group" &&
//   //       !prev.every((el: any) => pathArr.includes(el))
//   //     ) {
//   //       return [...pathArr];
//   //     } else {
//   //       return [...prev, ...pathArr];
//   //     }
//   //   });
//   // }

//   const sidebarItem = (
//     el: any,
//     pathArr: any,
//     // selectedNavArr: any,
//     index: any
//   ) => {
//     // const vlidation = selectedNavArr.includes(el.path);

//     // if (pathArr.includes(location.pathname) && autoFindActivePath) {
//     //   setAutoFindActivePath(false);
//     //   toSetNavView(pathArr, "item");
//     // }
//     return (
//       <Link
//         key={el.path + index}
//         // onClick={(e) => {
//         //   e.stopPropagation();
//         //   toSetNavView(pathArr, "item");
//         //   dispatch(handleNavPath(el.path));
//         // }}
//         href={el.path}
//         className={`p-4 text-md mx-2 mt-1 rounded cursor-pointer hover:bg-sky-400 
//                  hover:text-white  transition ease-in duration-900 flex border-sky-100 ${
//                   //  vlidation ? "bg-sky-400 text-white" : ""
//                   ''
//                  }
//                  `}
//       >
//         {el.name}
//       </Link>
//     );
//   };

//   const sidebarGroup = (
//     el: any,
//     pathArr: any,
//     // selectedNavArr: any,
//     index: any
//   ) => {
//     // const vlidation = selectedNavArr.includes(el.path);

//     return (
//       <div
//         key={el.path + index}
//         // className={vlidation ? "bg-gray-100 p" : ""}
//         // onClick={(e) => {
//         //   e.stopPropagation();
//         //   toSetNavView(pathArr, "Group");
//         // }}
//       >
//         <div
//           className={`p-4 text-md cursor-pointer hover:bg-sky-400  mx-2 mt-1 rounded flex justify-between
//                  hover:text-white  border-sky-100  transition ease-in duration-900  
//                  `}
//         >
//           <div className="flex">{el.name}</div>
//           {/* {vlidation ? <BsChevronDown /> : <BsChevronUp />} */}
//         </div>

//         <div className={'' ? "block" : "hidden"}>
//           {el.items.map((el: any, i: number) =>
//             el.items
//               ? sidebarGroup(el, [...pathArr, el.path], i)
//               : sidebarItem(el, [...pathArr, el.path], i)
//           )}
//         </div>
//       </div>
//     );
//   };
//   return (
//     <div>
//       {/* {navArr?.map((el: any, i: number) =>
//         el.items
//           ? sidebarGroup(el, [el.path], i)
//           : sidebarItem(el, [el.path], i)
//       )} */}
//     </div>
//   );
// };

// export default SideBarNav;
