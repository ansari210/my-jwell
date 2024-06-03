"use client"
import React from "react";
import generateGradientString from "../function/generateGradientString";
import { useRouter } from "next/navigation";
interface Props {
  data: any;
  componentId: string;
  parent: any;
}
const Button = ({ data, componentId, parent }: Props) => {


  const btnValue ={
    content: data?.data[0]?.content,
    style: data?.data[0]?.style,
  };

const router=useRouter()

  const radious = btnValue?.style?.advStyle?.boxradius;
  const border = btnValue?.style?.normalText?.advStyle?.boxborder;
  const backgroundColor = btnValue?.style?.normalText?.backgroundColor;
  const transformation = btnValue?.style?.normalText?.advStyle?.transformation;
  const gradient = btnValue?.style?.normalText?.advStyle?.gradient;

 

const toStyle = (position:any)=>{
  return  ( Boolean(position) ?position:"start" )
}

  return (
    <React.Fragment>
      <div 
      style={{ textAlign: toStyle(btnValue?.style?.normalText?.position )}}

      >
        <button
        onClick={()=>router.push(btnValue?.content?.link)}
          style={{
            backgroundImage: `${
              gradient ? generateGradientString(gradient) : ""
            }`,
            transform: `rotate(${transformation?.rotate}deg) scale(${transformation?.scale}) skewX(${transformation?.skewX}deg) skewY(${transformation?.skewY}deg) translateX(${transformation?.translateX}px) translateY(${transformation?.translateY}px)`,
            backgroundColor: `${
              backgroundColor
                ? `hsla(${backgroundColor?.hue}, ${backgroundColor?.brightness}%, ${backgroundColor?.saturation}%, ${backgroundColor?.alpha})`
                : "#3498db"
            }`,
            fontFamily: `${btnValue?.style?.normalText?.fontFamily}`,
            fontWeight: `${btnValue?.style?.normalText?.fontweight}`,
            lineHeight: `${btnValue?.style?.normalText?.lineHeight}px`,
            marginTop: `${btnValue?.style?.normalText?.margin?.top}px`,
            marginBottom: `${btnValue?.style?.normalText?.margin?.bottom}px`,
            marginLeft: `${btnValue?.style?.normalText?.margin?.left}px`,
            marginRight: `${btnValue?.style?.normalText?.margin?.right}px`,
            paddingTop: `${btnValue?.style?.normalText?.padding?.top}px`,
            paddingBottom: `${btnValue?.style?.normalText?.padding?.bottom}px`,
            paddingLeft: `${btnValue?.style?.normalText?.padding?.left}px`,
            paddingRight: `${btnValue?.style?.normalText?.padding?.right}px`,
            fontSize: `${btnValue?.style?.normalText?.size}`,
            wordSpacing: `${btnValue?.style?.normalText?.wordSpacing}px`,
            letterSpacing: `${btnValue?.style?.normalText?.letterSpacing}px`,
            textDecoration: btnValue?.style?.normalText?.textDecoration,
            borderTop: `${border?.topBorderWidth}px ${border?.topBorderStyle} ${border?.topBorderColor}`,
            borderRight: `${border?.rightBorderWidth}px ${border?.rightBorderStyle} ${border?.rightBorderColor}`,
            borderBottom: `${border?.bottomBorderWidth}px ${border?.bottomBorderStyle} ${border?.bottomBorderColor}`,
            borderLeft: `${border?.leftBorderWidth}px ${border?.leftBorderStyle} ${border?.leftBorderColor}`,
            height: `${btnValue?.style?.normalText?.height}`,
            width: `${btnValue?.style?.normalText?.width}`,
            color: `hsla(${btnValue?.style?.normalText?.color?.hue}, ${btnValue?.style?.normalText?.color?.brightness}%, ${btnValue?.style?.normalText?.color?.saturation}%, ${btnValue?.style?.normalText?.color?.alpha})`,
            borderRadius: `${btnValue?.style?.normalText?.advStyle?.boxradius?.topLeft}px ${btnValue?.style?.normalText?.advStyle?.boxradius?.topRight}px ${btnValue?.style?.normalText?.advStyle?.boxradius?.bottomRight}px ${btnValue?.style?.normalText?.advStyle?.boxradius?.bottomLeft}px`,

            boxShadow: `${
              btnValue?.style?.normalText?.advStyle?.boxShadow?.xOffset
            }px ${
              btnValue?.style?.normalText?.advStyle?.boxShadow?.yOffset
            }px ${btnValue?.style?.normalText?.advStyle?.boxShadow?.blur}px ${
              btnValue?.style?.normalText?.advStyle?.boxShadow?.spread
            }px ${btnValue?.style?.normalText?.advStyle?.boxShadow?.color} ${
              btnValue?.style?.normalText?.advStyle?.boxShadow?.isInset
                ? "inset"
                : ""
            }`,
          }}
          className="p-2 px-4 text-white rounded-md"
        >
          {btnValue?.content?.name || "Button"}
        </button>
      </div>
    </React.Fragment>
  );
};

export default Button;


