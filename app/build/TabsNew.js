// import React, { useCallback, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { HandleComponentController } from "../../../store/controller/ComponentController";
// import { create_Component_data } from "../../../store/layout-page/layoutAction";
// import generateGradientString from "../../../component/hooks/generateGradientString";
// import ComponentTab from "../../../component/root/test";
// import Content from "src/component/root/SideNavComponent/Content";
// import useActiveTabIndex from "../Core/hook/useCheckingIds";
// import { savingTabActiveIndex } from "../../../store/tab";

// const TabsNew = ({ data, componentId }: any) => {
//   const dispatch = useDispatch();

//   const activeTabState = useSelector((state: any) => state.tab);

//   console.log(activeTabState, data?.data[0], "<<from tab>>");

//   const [newtabs, setnewTabs] = useState<any>({
//     // content: data?.data[0]?.content || [],
//     content: Array.isArray(data?.data[0]?.content)
//       ? data?.data[0]?.content
//       : [],
//   });

//   const defaultTabObj = {
//     // index: newtabs.content?.length + 1,
//     components: [],
//     title: "title",

//     style: {
//       heading: {
//         type: "p",
//         size: "1rem",
//         backgroundColor: {
//           alpha: 0,
//           brightness: 90,
//           hue: 60,
//           saturation: 0,
//         },
//         backgroundImageValue: "",
//         color: {
//           alpha: 1,
//           brightness: 90,
//           hue: 60,
//           saturation: 0,
//         },
//         position: "",
//         fontFamily: "Verdana, sans-serif",
//         fontweight: 300,
//         advStyle: "",
//         wordSpacing: 2,
//         letterSpacing: 1,
//       },
//       content: {
//         type: "p",
//         size: "1rem",
//         backgroundColor: {
//           alpha: 0,
//           brightness: 90,
//           hue: 60,
//           saturation: 0,
//         },
//         backgroundImageValue: "",
//         color: {
//           alpha: 0.35,
//           brightness: 90,
//           hue: 60,
//           saturation: 0,
//         },
//         position: "",
//         fontFamily: "Verdana, sans-serif",
//         fontweight: 300,
//         advStyle: "",
//         lineHeight: 19,
//         wordSpacing: 2,
//       },
//     },
//     // varient: 9,
//   };

//   useEffect(() => {
//     if (data?.data[0]?.content) {
//       setnewTabs((prevTabs: any) => ({
//         ...prevTabs,
//         content: Array.isArray(data?.data[0]?.content)
//           ? data?.data[0]?.content
//           : [],
//       }));
//     }
//   }, [data?.data[0]?.content]);

//   useEffect(() => {
//     if (newtabs.content.length === 0) {
//       addTab();
//     }
//   }, [newtabs.content]);

//   const addTab = () => {
//     const newTabs = [...newtabs.content, defaultTabObj];

//     setnewTabs((prev) => ({
//       ...prev,
//       content: newTabs,
//     }));
//   };

//   console.log("type", newtabs, "new component>>>");

//   const handleClickController = useCallback((event: any) => {
//     event.stopPropagation();

//     const payload = {
//       _id: data?.data[0]?._id,
//       // content: newtabs.content,
//       content: data?.data[0]?.content,
//       //   moveable: data?.moveable,
//     };

//     console.log("from text contoller", payload, "new data>>>page");

//     dispatch(
//       HandleComponentController({
//         tabsController: {
//           isActive: true,
//           data: { payload, componentId },
//         },
//       })
//     );
//   }, []);

//   const handleAddComponent = useCallback(
//     (e: any, value: any) => {
//       e.stopPropagation();
//       dispatch(
//         HandleComponentController({
//           addComponent: {
//             isActive: true,
//             data: { index: value, _id: data?._id, type: "tabs" },
//           },
//         })
//       );
//     },
//     [data?._id]
//   );

//   const handlingTabLogic = useCallback((index: any) => {
//     console.log(index, "<<from tab>>");
//     dispatch(
//       savingTabActiveIndex({
//         indexValue: index,
//         id: data?.data[0]?._id,
//       })
//     );
//   }, []);

//   const tabsPayload = {
//     parentComponentId: data?._id,
//     type: "tabs",
//   };

//   return (
//     <div
//       className=" mx-auto w-full border-[3px]  outline-none border-transparent p-2 mt-2 hover:border-teal-300 border-dashed"
//       onClick={(e: any) => handleClickController(e)}
//     >
//       <div className="flex overflow-x-scroll">
//         {Array.isArray(newtabs?.content) &&
//           newtabs?.content?.map((el: any, index: number) => (
//             <>
//               <button
//                 // className={`p-2 px-4 border-2 font-medium cursor-pointer ${
//                 //   (activetabLogic.compId || data?.data[0]?._id) ===
//                 //     data?.data[0]?._id && activetabLogic.tabIndexvalue === index
//                 //     ? "border-blue-400  border-2 border-b-0 text-blue-600  rounded-tl-md rounded-tr-md  bg-blue-100"
//                 //     : "bg-transparent  border-transparent border-b-blue-400  rounded-tl-none rounded-tr-none border-l-0 border-r-0  border-b-2"
//                 // }

//                 // `}

//                 className={`p-2 px-4 border-2 font-medium cursor-pointer ${
//                   (((activeTabState[data?.data[0]?._id]?.compId ||
//                     data?.data[0]?._id) === data?.data[0]?._id &&
//                     activeTabState[data?.data[0]?._id]?.tabIndexvalue) ||
//                     0) === index
//                     ? "border-blue-400  border-2 border-b-0 text-blue-600  rounded-tl-md rounded-tr-md  bg-blue-100"
//                     : "bg-transparent  border-transparent border-b-blue-400  rounded-tl-none rounded-tr-none border-l-0 border-r-0  border-b-2"
//                 }`}
//                 style={{
//                   color: `hsla(${el.style?.heading?.color?.hue}, ${el.style?.heading?.color?.brightness}%, ${el.style?.heading?.color?.saturation}%, ${el.style?.heading?.color?.alpha})`,
//                   // textAlign: el?.style?.heading?.position,
//                   fontSize: el?.style?.heading?.size,
//                   fontFamily: el?.style?.heading?.fontFamily,
//                   fontWeight: el?.style?.heading?.fontweight,
//                   wordSpacing: `${el?.style?.heading?.wordSpacing}px`,
//                   letterSpacing: `${el?.style?.heading?.letterSpacing}px`,
//                   textDecoration: el?.style?.heading?.textDecoration,

//                   // backgroundColor: `hsla(${el?.style?.heading?.backgroundColor?.hue}, ${el?.style?.heading?.backgroundColor?.brightness}%, ${el?.style?.heading?.backgroundColor?.saturation}%, ${el?.style?.heading?.backgroundColor?.alpha})`,
//                 }}
//                 onClick={() => handlingTabLogic(index)}
//               >
//                 {el?.title}
//               </button>
//             </>
//           ))}
//         <button className="flex-1 w-full border-b-2 border-blue-400"></button>
//       </div>
//       {Array.isArray(newtabs?.content) &&
//         newtabs?.content?.map((el: any, index: number) => (
//           <>
//             <div
//               key={index}
//               className={` pr-2
//               w-full py-2   
//               ${
//                 (activeTabState[data?.data[0]?._id]?.tabIndexvalue || 0) ===
//                   index &&
//                 (activeTabState[data?.data[0]?._id]?.compId ||
//                   data?.data[0]?._id) === data?.data[0]?._id
//                   ? "block"
//                   : "hidden"
//               } h-full p-2`}
//               style={{
//                 backgroundColor: `hsla(${el?.style?.content?.backgroundColor?.hue}, ${el?.style?.content?.backgroundColor?.brightness}%, ${el?.style?.content?.backgroundColor?.saturation}%, ${el?.style?.content?.backgroundColor?.alpha})`,
//               }}
//             >
//               {el?.components &&
//                 el?.components?.map((item: any, i: number) => {
//                   return (
//                     <div key={item._id}>
//                       <ComponentTab
//                         data={item}
//                         componentId={item?._id}
//                         parant={{ ...tabsPayload, index: index }}
//                       />
//                     </div>
//                   );
//                 })}
//               <div className="w-full py-2 ">
//                 <button
//                   className="px-3 py-1 text-white bg-teal-700 rounded-md w-fit disabled:bg-gray-400"
//                   onClick={(e: any) => handleAddComponent(e, index)}
//                   disabled={!data?.data[0]?.content}
//                 >
//                   Add Component+
//                 </button>
//               </div>
//             </div>
//           </>
//         ))}
//     </div>
//   );
// };

// export default React.memo(TabsNew);
