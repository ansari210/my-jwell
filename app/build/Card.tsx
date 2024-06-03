import generateGradientString from "../function/generateGradientString";
import ComponentProvider from "../utils/ComponentProvider";

interface Props {
  data?: any;
  componentId?: string;
}

const Card: React.FC<Props> = ({ data, componentId }) => {
  const SliderData = ({
    content: data?.data[0]?.content,
    style: data?.data[0]?.style,
  });




  const radious = SliderData?.style?.advStyle?.boxradius;
  const color = SliderData?.style?.color ? SliderData?.style?.color : "#000";
  const border = SliderData?.style?.advStyle?.boxborder;
  const backgroundColor = SliderData?.style?.backgroundColor;
  const transformation = SliderData?.style?.advStyle?.transformation;
  const gradient = SliderData?.style?.advStyle?.gradient;
  const sliderPayload = {
    parentComponentId: data?._id,
    type: "slider",
  };

  
const toStyle = (direction:any)=>{
  return  ( Boolean(direction) ?direction:"row" )
}
  

  return (
    <div
      className={`relative rounded-xl hover:shadow-lg shadow-xl overflow-hidden h-[450px] group/card 
      w-80 border-4 duration-300  outline-none border-transparent   `}
      style={{
        marginTop: `${SliderData?.style?.margin?.top}px`,
        marginRight: `${SliderData?.style?.margin?.right}px`,
        marginBottom: `${SliderData?.style?.margin?.bottom}px`,
        marginLeft: `${SliderData?.style?.margin?.left}px`,
        paddingTop: `${SliderData?.style?.padding?.top}px`,
        paddingRight: `${SliderData?.style?.padding?.right}px`,
        paddingBottom: `${SliderData?.style?.padding?.bottom}px`,
        paddingLeft: `${SliderData?.style?.padding?.left}px`,
        height: SliderData?.style?.height,
        width: SliderData?.style?.width,
        backgroundImage: `${gradient ? generateGradientString(gradient) : ""}`,
        transform: `rotate(${transformation?.rotate}deg) scale(${transformation?.scale}) skewX(${transformation?.skewX}deg) skewY(${transformation?.skewY}deg) translateX(${transformation?.translateX}px) translateY(${transformation?.translateY}px)`,
        backgroundColor: `${
          backgroundColor
            ? `hsla(${backgroundColor?.hue}, ${backgroundColor?.brightness}%, ${backgroundColor?.saturation}%, ${backgroundColor?.alpha})`
            : "#fff"
        }`,
        borderTop: `${border?.topBorderWidth}px ${border?.topBorderStyle} ${border?.topBorderColor}`,
        borderRight: `${border?.rightBorderWidth}px ${border?.rightBorderStyle} ${border?.rightBorderColor}`,
        borderBottom: `${border?.bottomBorderWidth}px ${border?.bottomBorderStyle} ${border?.bottomBorderColor}`,
        borderLeft: `${border?.leftBorderWidth}px ${border?.leftBorderStyle} ${border?.leftBorderColor}`,
        color: `${color}`,
        borderRadius: `${
          SliderData?.style?.advStyle?.boxradius?.topLeft || 5
        }px ${SliderData?.style?.advStyle?.boxradius?.topRight || 5}px ${
          SliderData?.style?.advStyle?.boxradius?.bottomRight || 5
        }px ${SliderData?.style?.advStyle?.boxradius?.bottomLeft || 5}px`,

        boxShadow: `${SliderData?.style?.advStyle?.boxShadow?.xOffset}px ${
          SliderData?.style?.advStyle?.boxShadow?.yOffset
        }px ${SliderData?.style?.advStyle?.boxShadow?.blur}px ${
          SliderData?.style?.advStyle?.boxShadow?.spread
        }px ${SliderData?.style?.advStyle?.boxShadow?.color} ${
          SliderData?.style?.advStyle?.boxShadow?.isInset ? "inset" : ""
        }`,
      }}
    >
  
      {SliderData?.content?.map((el: any, index: number) => {
        return (
          <div
            // className="h-full"
            key={el._id}
            style={{
              display: `${SliderData?.style?.display?.display}`,
              flexDirection: toStyle(SliderData?.style?.display?.direction),
              alignItems: `${SliderData?.style?.display?.alignItems}`,
              justifyContent: `${SliderData?.style?.display?.justifyContent}`,
              gap: `${SliderData?.style?.display?.customGap}px`,
            }}
          >
            {el?.components?.map((item: any, i: number) => {
              return (
                <ComponentProvider
                  data={item}
                  componentId={item?._id}
                  parant={{ ...sliderPayload, index: index }}
                  key={item._id}
                />
              );
            })}
           
          </div>
        );
      })}
    </div>
  );
};

export default Card;


