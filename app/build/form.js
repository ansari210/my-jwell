// interface Props {
//   data: any;
//   componentId?: string;
// }

// const Form = ({ data, componentId }: Props) => {
  
//   const FormData ={
//     content:
//       data?.data[0]?.content?.data?.length > 0
//         ? [...data?.data[0]?.content?.data]
//         : [],
//     style: data?.data[0]?.style,
//     button: data?.data[0]?.content?.button,
//     heading: data?.data[0]?.content?.heading,
//   };




//   const parentborderradius = FormData?.style?.advStyle?.boxradius;
//   const parentborder = FormData?.style?.advStyle?.boxborder;
//   const parentboxshadow = FormData?.style?.advStyle?.boxShadow;

//   return (
//     <>
//       <div
//         className="p-2 duration-300 border-4 border-transparent border-dashed outline-none border-1 hover:border-teal-300"
//         // onClick={(e: any) => handleController(e)}
//         style={{
//           width: FormData?.style?.width,
//           height: FormData?.style?.height,
//           borderRadius: `${parentborderradius?.topLeft}px ${parentborderradius?.topRight}px ${parentborderradius?.bottomRight}px ${parentborderradius?.bottomLeft}px`,
//           backgroundColor: `${
//             FormData?.style?.backgroundColor
//               ? `hsla(${FormData?.style?.backgroundColor?.hue}, ${FormData?.style?.backgroundColor?.brightness}%, ${FormData?.style?.backgroundColor?.saturation}%, ${FormData?.style?.backgroundColor?.alpha})`
//               : "#f8f8f800"
//           }`,
//           display: `${FormData?.style?.display?.display}`,
//           flexDirection: `${FormData?.style?.display?.direction}`,
//           justifyContent: `${FormData?.style?.display?.justifyContent}`,
//           alignItems: `${FormData?.style?.display?.alignItems}`,
//           gap: `${FormData?.style?.display?.customGap}px`,
//           marginTop: `${FormData?.style?.margin?.top}px`,
//           marginRight: `${FormData?.style?.margin?.right}px`,
//           marginBottom: `${FormData?.style?.margin?.bottom}px`,
//           marginLeft: `${FormData?.style?.margin?.left}px`,
//           paddingTop: `${FormData?.style?.padding?.top}px`,
//           paddingRight: `${FormData?.style?.padding?.right}px`,
//           paddingBottom: `${FormData?.style?.padding?.bottom}px`,
//           paddingLeft: `${FormData?.style?.padding?.left}px`,
//           borderTop: `${parentborder?.topBorderWidth}px ${parentborder?.topBorderStyle} ${parentborder?.topBorderColor}`,
//           borderRight: `${parentborder?.rightBorderWidth}px ${parentborder?.rightBorderStyle} ${parentborder?.rightBorderColor}`,
//           borderBottom: `${parentborder?.bottomBorderWidth}px ${parentborder?.bottomBorderStyle} ${parentborder?.bottomBorderColor}`,
//           borderLeft: `${parentborder?.leftBorderWidth}px ${parentborder?.leftBorderStyle} ${parentborder?.leftBorderColor}`,
//           boxShadow: `${parentboxshadow?.xOffset}px ${
//             parentboxshadow?.yOffset
//           }px ${parentboxshadow?.blur}px ${parentboxshadow?.spread}px ${
//             parentboxshadow?.color
//           } ${parentboxshadow?.isInset ? "inset" : ""}`,
//         }}
//       >
//         <h3
//           style={{
//             color: FormData?.heading?.style?.normalText?.color
//               ? `hsla(${FormData?.heading?.style?.normalText?.color.hue}, ${FormData?.heading?.style?.normalText?.color.brightness}%, ${FormData?.heading?.style?.normalText?.color.saturation}%, ${FormData?.heading?.style?.normalText?.color.alpha})`
//               : "#000",
//             width: FormData?.heading?.style?.normalText?.width,
//             height: FormData?.heading?.style?.normalText?.height,
//             textAlign: FormData?.heading?.style?.normalText?.position,
//             fontSize: FormData?.heading?.style?.normalText?.size,
//             fontFamily: FormData?.heading?.style?.normalText?.fontFamily,
//             fontWeight: FormData?.heading?.style?.normalText?.fontweight,
//             lineHeight: `${FormData?.heading?.style?.normalText?.lineHeight}px`,
//             wordSpacing: `${FormData?.heading?.style?.normalText?.wordSpacing}px`,
//             marginTop: `${FormData?.heading?.style?.normalText?.margin?.top}px`,
//             marginRight: `${FormData?.heading?.style?.normalText?.margin?.right}px`,
//             marginBottom: `${FormData?.heading?.style?.normalText?.margin?.bottom}px`,
//             marginLeft: `${FormData?.heading?.style?.normalText?.margin?.left}px`,
//             paddingTop: `${FormData?.heading?.style?.normalText?.padding?.top}px`,
//             paddingRight: `${FormData?.heading?.style?.normalText?.padding?.right}px`,
//             paddingBottom: `${FormData?.heading?.style?.normalText?.padding?.bottom}px`,
//             paddingLeft: `${FormData?.heading?.style?.normalText?.padding?.left}px`,
//             backgroundColor: `${
//               FormData?.heading?.style?.normalText?.backgroundColor
//                 ? `hsla(${FormData?.heading?.style?.normalText?.backgroundColor?.hue}, ${FormData?.heading?.style?.normalText?.backgroundColor?.brightness}%, ${FormData?.heading?.style?.normalText?.backgroundColor?.saturation}%, ${FormData?.heading?.style?.normalText?.backgroundColor?.alpha})`
//                 : "#f8f8f800"
//             }`,
//             borderTop: `${FormData?.heading?.style?.normalText?.advStyle?.boxborder?.topBorderWidth}px ${FormData?.heading?.style?.normalText?.advStyle?.boxborder?.topBorderStyle} ${FormData?.heading?.style?.normalText?.advStyle?.boxborder?.topBorderColor}`,
//             borderRight: `${FormData?.heading?.style?.normalText?.advStyle?.boxborder?.rightBorderWidth}px ${FormData?.heading?.style?.normalText?.advStyle?.boxborder?.rightBorderStyle} ${FormData?.heading?.style?.normalText?.advStyle?.boxborder?.rightBorderColor}`,
//             borderBottom: `${FormData?.heading?.style?.normalText?.advStyle?.boxborder?.bottomBorderWidth}px ${FormData?.heading?.style?.normalText?.advStyle?.boxborder?.bottomBorderStyle} ${FormData?.heading?.style?.normalText?.advStyle?.boxborder?.bottomBorderColor}`,
//             borderLeft: `${FormData?.heading?.style?.normalText?.advStyle?.boxborder?.leftBorderWidth}px ${FormData?.heading?.style?.normalText?.advStyle?.boxborder?.leftBorderStyle} ${FormData?.heading?.style?.normalText?.advStyle?.boxborder?.leftBorderColor}`,
//             borderRadius: `${FormData?.heading?.style?.normalText?.advStyle?.boxradius?.topLeft}px ${FormData?.heading?.style?.normalText?.advStyle?.boxradius?.topRight}px ${FormData?.heading?.style?.normalText?.advStyle?.boxradius?.bottomRight}px ${FormData?.heading?.style?.normalText?.advStyle?.boxradius?.bottomLeft}px`,

//             boxShadow: `${
//               FormData?.heading?.style?.normalText?.advStyle?.boxShadow?.xOffset
//             }px ${
//               FormData?.heading?.style?.normalText?.advStyle?.boxShadow?.yOffset
//             }px ${
//               FormData?.heading?.style?.normalText?.advStyle?.boxShadow?.blur
//             }px ${
//               FormData?.heading?.style?.normalText?.advStyle?.boxShadow?.spread
//             }px ${
//               FormData?.heading?.style?.normalText?.advStyle?.boxShadow?.color
//             } ${
//               FormData?.heading?.style?.normalText?.advStyle?.boxShadow?.isInset
//                 ? "inset"
//                 : ""
//             }`,
//             transform: `rotate(${FormData?.heading?.style?.normalText?.advStyle?.transformation?.rotate}deg) scale(${FormData?.heading?.style?.normalText?.advStyle?.transformation?.scale}) skewX(${FormData?.heading?.style?.normalText?.advStyle?.transformation?.skewX}deg) skewY(${FormData?.heading?.style?.normalText?.advStyle?.transformation?.skewY}deg) translateX(${FormData?.heading?.style?.normalText?.advStyle?.transformation?.translateX}px) translateY(${FormData?.heading?.style?.normalText?.advStyle?.transformation?.translateY}px)`,
//           }}
//         >
//           {FormData?.heading?.name || "Heading"}
//         </h3>
//         <div className="">
//           {FormData?.content?.map((item: any, index: number) => {
//             const labelstyle = item?.stylelabel?.normalText;
//             const border = item?.stylelabel?.normalText?.advStyle?.boxborder;
//             const shadow = item?.stylelabel?.normalText?.advStyle?.boxShadow;
//             const bgColor = item?.stylelabel?.normalText?.backgroundColor;
//             const borderRadious =
//               item?.stylelabel?.normalText?.advStyle?.boxradius;

//             const styleinput = item?.styleinput?.normalText;
//             const styleinputborder =
//               item?.styleinput?.normalText?.advStyle?.boxborder;
//             const styleinputshadow =
//               item?.styleinput?.normalText?.advStyle?.boxShadow;
//             const styleinputbgColor =
//               item?.styleinput?.normalText?.backgroundColor;
//             const styleinputborderRadious =
//               item?.styleinput?.normalText?.advStyle?.boxradius;
//             const divboxshado = item?.style?.advStyle?.boxShadow;
//             const divradious = item?.style?.advStyle?.boxradius;
//             const divborder = item?.style?.advStyle?.boxborder;
//             // console.log(styleinput, "data in Forms>>>>>?>>>?>");
//             return (
//               <React.Fragment>
//                 <div
//                   style={{
//                     width: item?.style?.width,
//                     height: item?.style?.height,
//                     borderTop: `${divborder?.topBorderWidth}px ${divborder?.topBorderStyle} ${divborder?.topBorderColor}`,
//                     borderRight: `${divborder?.rightBorderWidth}px ${divborder?.rightBorderStyle} ${divborder?.rightBorderColor}`,
//                     borderBottom: `${divborder?.bottomBorderWidth}px ${divborder?.bottomBorderStyle} ${divborder?.bottomBorderColor}`,
//                     borderLeft: `${divborder?.leftBorderWidth}px ${divborder?.leftBorderStyle} ${divborder?.leftBorderColor}`,
//                     borderRadius: `${divradious?.topLeft}px ${divradious?.topRight}px ${divradious?.bottomRight}px ${divradious?.bottomLeft}px`,
//                     boxShadow: `${divboxshado?.xOffset}px ${
//                       divboxshado?.yOffset
//                     }px ${divboxshado?.blur}px ${divboxshado?.spread}px ${
//                       divboxshado?.color
//                     } ${divboxshado?.isInset ? "inset" : ""}`,
//                     display: `${item?.style?.display?.display}`,
//                     flexDirection: `${item?.style?.display?.direction}`,
//                     justifyContent: `${item?.style?.display?.justifyContent}`,
//                     alignItems: `${item?.style?.display?.alignItems}`,
//                     gap: `${item?.style?.display?.customGap}px`,
//                     backgroundColor: `${
//                       item?.style?.backgroundColor
//                         ? `hsla(${item?.style?.backgroundColor?.hue}, ${item?.style?.backgroundColor?.brightness}%, ${item?.style?.backgroundColor?.saturation}%, ${item?.style?.backgroundColor?.alpha})`
//                         : "#f8f8f800"
//                     }`,
//                     marginTop: `${item?.style?.margin?.top}px`,
//                     marginRight: `${item?.style?.margin?.right}px`,
//                     marginBottom: `${item?.style?.margin?.bottom}px`,
//                     marginLeft: `${item?.style?.margin?.left}px`,
//                     paddingTop: `${item?.style?.padding?.top}px`,
//                     paddingRight: `${item?.style?.padding?.right}px`,
//                     paddingBottom: `${item?.style?.padding?.bottom}px`,
//                     paddingLeft: `${item?.style?.padding?.left}px`,
//                   }}
//                 >
//                   <label
//                     style={{
//                       marginTop: `${labelstyle?.margin?.top}px`,
//                       marginRight: `${labelstyle?.margin?.right}px`,
//                       marginBottom: `${labelstyle?.margin?.bottom}px`,
//                       marginLeft: `${labelstyle?.margin?.left}px`,
//                       paddingTop: `${labelstyle?.padding?.top}px`,
//                       paddingRight: `${labelstyle?.padding?.right}px`,
//                       paddingBottom: `${labelstyle?.padding?.bottom}px`,
//                       paddingLeft: `${labelstyle?.padding?.left}px`,
//                       width: labelstyle?.width,
//                       height: labelstyle?.height,
//                       textAlign: labelstyle?.position,
//                       fontSize: labelstyle?.size,
//                       fontFamily: labelstyle?.fontFamily,
//                       fontWeight: labelstyle?.fontweight,
//                       lineHeight: labelstyle?.lineHeight,
//                       wordSpacing: labelstyle?.wordSpacing,
//                       letterSpacing: `${labelstyle?.letterSpacing}px`,
//                       textDecoration: labelstyle?.textDecoration,
//                       borderTop: `${border?.topBorderWidth}px ${border?.topBorderStyle} ${border?.topBorderColor}`,
//                       borderRight: `${border?.rightBorderWidth}px ${border?.rightBorderStyle} ${border?.rightBorderColor}`,
//                       borderBottom: `${border?.bottomBorderWidth}px ${border?.bottomBorderStyle} ${border?.bottomBorderColor}`,
//                       borderLeft: `${border?.leftBorderWidth}px ${border?.leftBorderStyle} ${border?.leftBorderColor}`,
//                       borderRadius: `${borderRadious?.topLeft}px ${borderRadious?.topRight}px ${borderRadious?.bottomRight}px ${borderRadious?.bottomLeft}px`,

//                       boxShadow: `${shadow?.xOffset}px ${shadow?.yOffset}px ${
//                         shadow?.blur
//                       }px ${shadow?.spread}px ${shadow?.color} ${
//                         shadow?.isInset ? "inset" : ""
//                       }`,
//                       color: labelstyle?.color
//                         ? `hsla(${labelstyle?.color.hue}, ${labelstyle?.color.brightness}%, ${labelstyle?.color.saturation}%, ${labelstyle?.color.alpha})`
//                         : "#000",
//                       backgroundColor: `${
//                         bgColor
//                           ? `hsla(${bgColor?.hue}, ${bgColor?.brightness}%, ${bgColor?.saturation}%, ${bgColor?.alpha})`
//                           : "#f8f8f800"
//                       }`,
//                     }}
//                   >
//                     {item?.name}
//                   </label>
//                   <input
//                     type={item?.type}
//                     placeholder={item?.placeholder}
//                     className="border border-1 border-[#000]"
//                     style={{
//                       color: styleinput?.color
//                         ? `hsla(${styleinput?.color?.hue}, ${styleinput?.color?.brightness}%, ${styleinput?.color?.saturation}%, ${styleinput?.color?.alpha})`
//                         : "#000",
//                       textAlign: styleinput?.position,
//                       fontSize: styleinput?.size,
//                       fontFamily: styleinput?.fontFamily,
//                       fontWeight: styleinput?.fontweight,
//                       width: styleinput?.width,
//                       height: styleinput?.height,
//                       marginTop: `${styleinput?.margin?.top}px`,
//                       marginRight: `${styleinput?.margin?.right}px`,
//                       marginBottom: `${styleinput?.margin?.bottom}px`,
//                       marginLeft: `${styleinput?.margin?.left}px`,
//                       paddingTop: `${styleinput?.padding?.top}px`,
//                       paddingRight: `${styleinput?.padding?.right}px`,
//                       paddingBottom: `${styleinput?.padding?.bottom}px`,
//                       paddingLeft: `${styleinput?.padding?.left}px`,
//                       lineHeight: styleinput?.lineHeight,
//                       wordSpacing: styleinput?.wordSpacing,
//                       letterSpacing: `${styleinput?.letterSpacing}px`,
//                       textDecoration: styleinput?.textDecoration,
//                       borderTop: `${styleinputborder?.topBorderWidth}px ${styleinputborder?.topBorderStyle} ${styleinputborder?.topBorderColor}`,
//                       borderRight: `${styleinputborder?.rightBorderWidth}px ${styleinputborder?.rightBorderStyle} ${styleinputborder?.rightBorderColor}`,
//                       borderBottom: `${styleinputborder?.bottomBorderWidth}px ${styleinputborder?.bottomBorderStyle} ${styleinputborder?.bottomBorderColor}`,
//                       borderLeft: `${styleinputborder?.leftBorderWidth}px ${styleinputborder?.leftBorderStyle} ${styleinputborder?.leftBorderColor}`,
//                       borderRadius: `${styleinputborderRadious?.topLeft}px ${styleinputborderRadious?.topRight}px ${styleinputborderRadious?.bottomRight}px ${styleinputborderRadious?.bottomLeft}px`,

//                       boxShadow: `${styleinputshadow?.xOffset}px ${
//                         styleinputshadow?.yOffset
//                       }px ${styleinputshadow?.blur}px ${
//                         styleinputshadow?.spread
//                       }px ${styleinputshadow?.color} ${
//                         styleinputshadow?.isInset ? "inset" : ""
//                       }`,
//                       backgroundColor: `${
//                         styleinputbgColor
//                           ? `hsla(${styleinputbgColor?.hue}, ${styleinputbgColor?.brightness}%, ${styleinputbgColor?.saturation}%, ${styleinputbgColor?.alpha})`
//                           : "#f8f8f800"
//                       }`,
//                     }}
//                   />
//                 </div>
//               </React.Fragment>
//             );
//           })}
//         </div>
//         <button
//           className="border-1 border-[#000] bg-[#4179c6] rounded-[5px] p-2"
//           style={{
//             color: FormData?.button?.style?.normalText?.color
//               ? `hsla(${FormData?.button?.style?.normalText?.color.hue}, ${FormData?.button?.style?.normalText?.color.brightness}%, ${FormData?.button?.style?.normalText?.color.saturation}%, ${FormData?.button?.style?.normalText?.color.alpha})`
//               : "#000",
//             width: FormData?.button?.style?.normalText?.width,
//             height: FormData?.button?.style?.normalText?.height,
//             textAlign: FormData?.button?.style?.normalText?.position,
//             fontSize: FormData?.button?.style?.normalText?.size,
//             fontFamily: FormData?.button?.style?.normalText?.fontFamily,
//             fontWeight: FormData?.button?.style?.normalText?.fontweight,
//             lineHeight: FormData?.button?.style?.normalText?.lineHeight,
//             wordSpacing: FormData?.button?.style?.normalText?.wordSpacing,
//             letterSpacing: `${FormData?.button?.style?.normalText?.letterSpacing}px`,
//             textDecoration: FormData?.button?.style?.normalText?.textDecoration,
//             marginTop: `${FormData?.button?.style?.normalText?.margin?.top}px`,
//             marginRight: `${FormData?.button?.style?.normalText?.margin?.right}px`,
//             marginBottom: `${FormData?.button?.style?.normalText?.margin?.bottom}px`,
//             marginLeft: `${FormData?.button?.style?.normalText?.margin?.left}px`,
//             paddingTop: `${FormData?.button?.style?.normalText?.padding?.top}px`,
//             paddingRight: `${FormData?.button?.style?.normalText?.padding?.right}px`,
//             paddingBottom: `${FormData?.button?.style?.normalText?.padding?.bottom}px`,
//             paddingLeft: `${FormData?.button?.style?.normalText?.padding?.left}px`,
//             backgroundColor: `${
//               FormData?.button?.style?.normalText?.backgroundColor
//                 ? `hsla(${FormData?.button?.style?.normalText?.backgroundColor?.hue}, ${FormData?.button?.style?.normalText?.backgroundColor?.brightness}%, ${FormData?.button?.style?.normalText?.backgroundColor?.saturation}%, ${FormData?.button?.style?.normalText?.backgroundColor?.alpha})`
//                 : "#4179c6"
//             }`,
//             borderTop: `${FormData?.button?.style?.normalText?.advStyle?.boxborder?.topBorderWidth}px ${FormData?.button?.style?.normalText?.advStyle?.boxborder?.topBorderStyle} ${FormData?.button?.style?.normalText?.advStyle?.boxborder?.topBorderColor}`,
//             borderRight: `${FormData?.button?.style?.normalText?.advStyle?.boxborder?.rightBorderWidth}px ${FormData?.button?.style?.normalText?.advStyle?.boxborder?.rightBorderStyle} ${FormData?.button?.style?.normalText?.advStyle?.boxborder?.rightBorderColor}`,
//             borderBottom: `${FormData?.button?.style?.normalText?.advStyle?.boxborder?.bottomBorderWidth}px ${FormData?.button?.style?.normalText?.advStyle?.boxborder?.bottomBorderStyle} ${FormData?.button?.style?.normalText?.advStyle?.boxborder?.bottomBorderColor}`,
//             borderLeft: `${FormData?.button?.style?.normalText?.advStyle?.boxborder?.leftBorderWidth}px ${FormData?.button?.style?.normalText?.advStyle?.boxborder?.leftBorderStyle} ${FormData?.button?.style?.normalText?.advStyle?.boxborder?.leftBorderColor}`,
//             borderRadius: `${FormData?.button?.style?.normalText?.advStyle?.boxradius?.topLeft}px ${FormData?.button?.style?.normalText?.advStyle?.boxradius?.topRight}px ${FormData?.button?.style?.normalText?.advStyle?.boxradius?.bottomRight}px ${FormData?.button?.style?.normalText?.advStyle?.boxradius?.bottomLeft}px`,

//             boxShadow: `${
//               FormData?.button?.style?.normalText?.advStyle?.boxShadow?.xOffset
//             }px ${
//               FormData?.button?.style?.normalText?.advStyle?.boxShadow?.yOffset
//             }px ${
//               FormData?.button?.style?.normalText?.advStyle?.boxShadow?.blur
//             }px ${
//               FormData?.button?.style?.normalText?.advStyle?.boxShadow?.spread
//             }px ${
//               FormData?.button?.style?.normalText?.advStyle?.boxShadow?.color
//             } ${
//               FormData?.button?.style?.normalText?.advStyle?.boxShadow?.isInset
//                 ? "inset"
//                 : ""
//             }`,
//             transform: `rotate(${FormData?.button?.style?.normalText?.advStyle?.transformation?.rotate}deg) scale(${FormData?.button?.style?.normalText?.advStyle?.transformation?.scale}) skewX(${FormData?.button?.style?.normalText?.advStyle?.transformation?.skewX}deg) skewY(${FormData?.button?.style?.normalText?.advStyle?.transformation?.skewY}deg) translateX(${FormData?.button?.style?.normalText?.advStyle?.transformation?.translateX}px) translateY(${FormData?.button?.style?.normalText?.advStyle?.transformation?.translateY}px)`,
//           }}
//         >
//           {FormData?.button?.name || "Submit"}`
//         </button>
//       </div>
//     </>
//   );
// };
// export default Form;
