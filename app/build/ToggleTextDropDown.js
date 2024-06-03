// import React, { useCallback, useEffect, useState } from "react";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import { useDispatch, useSelector } from "react-redux";
// import { HandleComponentController } from "../../../store/controller/ComponentController";
// import ComponentTab from "../../root/test";
// import { savingToggleActiveIndex } from "../../../store/activeindex";

// interface Item {
//   heading: string;
//   content: string;
//   isOpen: boolean;
// }

// const ToggleTextDropdown = ({ data, componentId }: any) => {
//   console.log("toggle", data, componentId, "toggle component>>");

//   const [newToggle, setnewToggle] = useState<any>({
//     content: Array.isArray(data?.data[0]?.content)
//       ? data?.data[0]?.content
//       : [],
//   });

//   const activetabLogic = useSelector((state) => state.activeInd);

//   const dispatch = useDispatch();

//   console.log("outside", newToggle, data?.data[0]?.content, "new toggle>>>");

//   useEffect(() => {
//     if (data?.data[0]?.content) {
//       console.log("inside", newToggle, data?.data[0]?.content, "new toggle>>>");
//       setnewToggle({
//         content: Array.isArray(data?.data[0]?.content)
//           ? data?.data[0]?.content
//           : [],
//       });
//     }
//   }, [data?.data[0]?.content]);

//   useEffect(() => {
//     if (newToggle.content.length === 0) {
//       addToggle();
//     }
//   }, [newToggle.content]);

//   console.log("toggle", data, newToggle, "new toggle cont>>>");

//   const defaultToggleObj = {
//     index: newToggle.content?.length + 1,
//     components: [],
//     title: "Dummy Title",
//     isOpen: false,

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

//   const addToggle = () => {
//     const newTabs = [...newToggle.content, defaultToggleObj];

//     setnewToggle((prev) => ({
//       ...prev,
//       content: newTabs,
//     }));
//   };

//   const handleClickController = (event: any) => {
//     event.stopPropagation();

//     const payload = {
//       _id: data?.data[0]?._id,
//       content: data?.data[0]?.content,
//       //   moveable: data?.moveable,
//     };

//     dispatch(
//       HandleComponentController({
//         toggleTextController: {
//           isActive: true,
//           data: { payload, componentId },
//         },
//       })
//     );
//   };

//   const handleAddComponent = (e: any, value: any) => {
//     e.stopPropagation();
//     dispatch(
//       HandleComponentController({
//         addComponent: {
//           isActive: true,
//           data: { index: value, _id: data?._id, type: "toggle" },
//         },
//       })
//     );
//   };

//   console.log(activetabLogic, "toogle index>>>");

//   const handlingToggleLogic = (index: any) => {
//     const condition =
//       index === activetabLogic.toggleIndexvalue &&
//       activetabLogic.toggleCondition;
//     console.log(index, "toogle index>>>");

//     dispatch(
//       savingToggleActiveIndex({
//         indexValue: index,
//         id: data?.data[0]?._id,
//         condition: !condition,
//       })
//     );

//     //old logic for toggle
//     // const toggleItem = (index: number) => {
//     //   const updatedItems = [...toggle];
//     //   updatedItems[index].isOpen = !updatedItems[index].isOpen;
//     //   setToggle(updatedItems);
//     // };
//   };

//   const tabsPayload = {
//     parentComponentId: data?._id,
//     type: "toggle",
//   };

//   return (
//     <div
//       className=" mx-auto w-full border-[3px]  outline-none border-transparent p-2 mt-2 hover:border-teal-300 border-dashed"
//       onClick={(e: any) => handleClickController(e)}
//     >
//       {Array.isArray(newToggle?.content) &&
//         newToggle?.content?.map((el: any, index: number) => (
//           <>
//             <div
//               className="flex items-center justify-between w-full border-b cursor-pointer hover:bg-gray-200"
//               onClick={() => handlingToggleLogic(index)}
//               style={{
//                 color: `hsla(${el.style?.heading?.color?.hue}, ${el.style?.heading?.color?.brightness}%, ${el.style?.heading?.color?.saturation}%, ${el.style?.heading?.color?.alpha})`,
//                 textAlign: el?.style?.heading?.position,
//                 fontSize: el?.style?.heading?.size,
//                 fontFamily: el?.style?.heading?.fontFamily,
//                 fontWeight: +el?.style?.heading?.fontweight,
//                 wordSpacing: `${el?.style?.heading?.wordSpacing}px`,
//                 letterSpacing: `${el?.style?.heading?.letterSpacing}px`,
//                 textDecoration: el?.style?.heading?.textDecoration,
//                 backgroundColor: `hsla(${el?.style?.heading?.backgroundColor?.hue}, ${el?.style?.heading?.backgroundColor?.brightness}%, ${el?.style?.heading?.backgroundColor?.saturation}%, ${el?.style?.heading?.backgroundColor?.alpha})`,
//               }}
//             >
//               <h2 className={`p-2 px-4  font-medium`}>{el?.title}</h2>
//               <MdOutlineKeyboardArrowDown
//                 className={`${
//                   activetabLogic.toggleIndexvalue === index &&
//                   activetabLogic.togglecompId === data?.data[0]?._id &&
//                   activetabLogic.toggleCondition
//                     ? "rotate-180"
//                     : ""
//                 } transition-transform duration-700 mr-6 `}
//               />
//             </div>
//             {activetabLogic.toggleIndexvalue === index &&
//               activetabLogic.togglecompId === data?.data[0]?._id &&
//               activetabLogic.toggleCondition && (
//                 <div
//                   key={index}
//                   className={` pr-2
//                 w-full py-2   
                
//                  h-full p-2`}
//                   style={{
//                     backgroundColor: `hsla(${el?.style?.content?.backgroundColor?.hue}, ${el?.style?.content?.backgroundColor?.brightness}%, ${el?.style?.content?.backgroundColor?.saturation}%, ${el?.style?.content?.backgroundColor?.alpha})`,
//                   }}
//                 >
//                   {el?.components &&
//                     el?.components?.map((item: any, i: number) => {
//                       return (
//                         <div>
//                           <ComponentTab
//                             data={item}
//                             componentId={item?._id}
//                             parant={{ ...tabsPayload, index: index }}
//                           />
//                         </div>
//                       );
//                     })}
//                   <div className="w-full py-2 ">
//                     <button
//                       className="px-3 py-1 text-white bg-teal-700 rounded-md w-fit disabled:bg-gray-400"
//                       onClick={(e: any) => handleAddComponent(e, index)}
//                       disabled={!data?.data[0]?.content}
//                     >
//                       Add Component+
//                     </button>
//                   </div>
//                 </div>
//               )}
//           </>
//         ))}
//     </div>
//   );
// };

// export default ToggleTextDropdown;
