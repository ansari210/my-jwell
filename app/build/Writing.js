
// import Text from "../Core/Text/Text";
// import { useState } from "react";

// interface Props {
//   locationPathName: any;
//   id: any;
//   data: any;
//   componentId: string;
//   parent: any;
// }
// const Writing = ({
//   locationPathName,
//   id,
//   data,
//   componentId,
//   parent,
// }: Props) => {
//   const contentArr = [...data?.data];
//   // const [imageByteCode, setImageByteCode] = useState("");
 

//   const [isVisible, setVisible] = useState(false);


//   // const uploadImgInputRef = useRef();

//   // const handleImageChange = async (event: any) => {
//   //   const selectedFile = event.target.files[0];
//   //   // Read the image file as a data URL
//   //   const reader = new FileReader();
//   //   reader.readAsDataURL(selectedFile);

//   //   reader.onload = () => {
//   //     const imageDataUrl = reader.result;
//   //     setImageByteCode(imageDataUrl);
//   //   };

//   //   reader.onerror = (error) => {
//   //     alert(error);
//   //   };
//   // };

//   // const HandaleClcik = () => {
//   //   uploadImgInputRef.current.click();
//   // };


 

//   return (
//     // <div className="w-full mb-1 min-h-40">
//     <div className="w-full my-2 min-h-fit ">
//       <div className="w-full group ">
//         <div className="border-[4px] border-transparent w-full  m-0 rounded-lg border-dashed group-hover:border-blue-400 p-4 flex justify-center h-full flex-col relative">
//           {contentArr?.map((el: any, i: number) => {
//             return (
//               <div key={i}>
//                 <Text
//                   elementObj={el}
//                   componentId={componentId}
//                   parent={parent}
//                 />
//               </div>
//             );
//           })}

//           <div
//             className="opacity-0 cursor-pointer absolute bottom-4  justify-center items-center h-0  right-1 
//               text-[#fff]     group-hover:flex hidden z-40 transition-opacity
//                duration-700 group-hover:opacity-100"
//             onClick={() => setVisible((prev) => !prev)}
//           >
           
//           </div>
//           <div
//             className={`${
//               isVisible ? "visible" : "hidden"
//             } absolute bottom-4 flex opacity-0 group-hover:opacity-100   justify-end transition-opacity
//             duration-700 items-center h-0 w-full right-9`}
//           >
//             <div
//               className=" cursor-pointer   justify-center items-center h-0   
//               text-[#fff] flex  z-40 transition-opacity
//                duration-700"
//               // onClick={HandaleNewText}
//             >
//             </div>
//             <div
//               className=" cursor-pointer   justify-center items-center h-0   
//               text-[#fff]     flex  z-40 transition-opacity
//                duration-700"
//             >
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// export default Writing
