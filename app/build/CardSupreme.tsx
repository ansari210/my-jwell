import ComponentProvider from "../utils/ComponentProvider";
import generateGradientString from "../function/generateGradientString";

interface Props {
  sliderNum?: number;
  data?: any;
  componentId?: string;
}

const CardSupreme = ({ data}: Props) => {

  const GroupCard = {
    content: data?.data[0]?.content,
    style: data?.data[0]?.style,
  };


  const sliderPayload = {
    parentComponentId: data?._id,
    type: "slider",
  };
 
  const sliderShado = GroupCard?.style?.groupstyle?.advStyle?.boxShadow;
  const sliderBorder = GroupCard?.style?.groupstyle?.advStyle?.boxborder;
  const sliderRadios = GroupCard?.style?.groupstyle?.advStyle?.boxradius;
  const sliderTransform =
    GroupCard?.style?.groupstyle?.advStyle?.transformation;
  const sliderGradient = GroupCard?.style?.groupstyle?.advStyle?.gradient;
  const sliderBackgroundImage = GroupCard?.style?.groupstyle?.backgroundImage;

  const cardShado = GroupCard?.style?.cardStyle?.advStyle?.boxShadow;
  const cardBorder = GroupCard?.style?.cardStyle?.advStyle?.boxborder;
  const cardRadios = GroupCard?.style?.cardStyle?.advStyle?.boxradius;
  const cardTransform = GroupCard?.style?.cardStyle?.advStyle?.transformation;
  const cardGradient = GroupCard?.style?.cardStyle?.advStyle?.gradient;
  const cardBackgroundImage = GroupCard?.style?.cardStyle?.backgroundImage;
  return (
    <div
      className="relative flex flex-col w-full overflow-x-hidden  flex-0"
      style={{
        borderTop: `${sliderBorder?.topBorderWidth}px ${sliderBorder?.topBorderStyle} ${sliderBorder?.topBorderColor}`,
        borderRight: `${sliderBorder?.rightBorderWidth}px ${sliderBorder?.rightBorderStyle} ${sliderBorder?.rightBorderColor}`,
        borderBottom: `${sliderBorder?.bottomBorderWidth}px ${sliderBorder?.bottomBorderStyle} ${sliderBorder?.bottomBorderColor}`,
        borderLeft: `${sliderBorder?.leftBorderWidth}px ${sliderBorder?.leftBorderStyle} ${sliderBorder?.leftBorderColor}`,
        boxShadow: `${sliderShado?.xOffset}px ${sliderShado?.yOffset}px ${
          sliderShado?.blur
        }px ${sliderShado?.spread}px ${sliderShado?.color} ${
          sliderShado?.isInset ? "inset" : ""
        }`,
        transform: `rotate(${sliderTransform?.rotate}deg) scale(${sliderTransform?.scale}) skewX(${sliderTransform?.skewX}deg) skewY(${sliderTransform?.skewY}deg) translateX(${sliderTransform?.translateX}px) translateY(${sliderTransform?.translateY}px)`,

        backgroundImage: sliderBackgroundImage?.backImage
          ? `url(${sliderBackgroundImage?.backImage})`
          : `${sliderGradient ? generateGradientString(sliderGradient) : ""}`,
        backgroundSize: `${sliderBackgroundImage?.backSize}`,
        backgroundRepeat: `${sliderBackgroundImage?.backRepeat}`,
        backgroundPosition: `${sliderBackgroundImage?.backPosition}`,
        backgroundColor: `${
          GroupCard?.style?.groupstyle?.backgroundColor
            ? `hsla(${GroupCard?.style?.groupstyle?.backgroundColor?.hue}, ${GroupCard?.style?.groupstyle?.backgroundColor?.brightness}%, ${GroupCard?.style?.groupstyle?.backgroundColor?.saturation}%, ${GroupCard?.style?.groupstyle?.backgroundColor?.alpha})`
            : "#f8f8f800"
        }`,
        width: `${GroupCard?.style?.groupstyle?.width}`,
        height: `${GroupCard?.style?.groupstyle?.height}`,

        borderRadius: `${sliderRadios?.topLeft}px ${sliderRadios?.topRight}px ${sliderRadios?.bottomRight}px ${sliderRadios?.bottomLeft}px`,

        marginTop: `${GroupCard?.style?.groupstyle?.margin?.top}px`,
        marginBottom: `${GroupCard?.style?.groupstyle?.margin?.bottom}px`,
        marginLeft: `${GroupCard?.style?.groupstyle?.margin?.left}px`,
        marginRight: `${GroupCard?.style?.groupstyle?.margin?.right}px`,
        paddingTop: `${GroupCard?.style?.groupstyle?.padding?.top}px`,
        paddingBottom: `${GroupCard?.style?.groupstyle?.padding?.bottom}px`,
        paddingLeft: `${GroupCard?.style?.groupstyle?.padding?.left}px`,
        paddingRight: `${GroupCard?.style?.groupstyle?.padding?.right}px`,
      }}
    >
      <div className="h-full min-w-full overflow-x-hidden border-4 border-transparent border-dashed group/sliderParent hover:border-teal-300">
      
        <div
          className="relative duration-300"
          style={{
            display: `${GroupCard?.style?.groupstyle?.display?.display}`,
            flexDirection: GroupCard?.style?.groupstyle?.display?.direction||'row',
            justifyContent: `${GroupCard?.style?.groupstyle?.display?.justifyContent}`,
            alignItems: `${GroupCard?.style?.groupstyle?.display?.alignItems}`,
            gap: `${GroupCard?.style?.groupstyle?.display?.customGap}px`,
          }}
        >
          {GroupCard?.content?.map((el: any, index: number) => {
            return (
              <>
                <div
                  key={index}
                  style={{
                    borderTop: `${cardBorder?.topBorderWidth}px ${cardBorder?.topBorderStyle} ${cardBorder?.topBorderColor}`,
                    borderRight: `${cardBorder?.rightBorderWidth}px ${cardBorder?.rightBorderStyle} ${cardBorder?.rightBorderColor}`,
                    borderBottom: `${cardBorder?.bottomBorderWidth}px ${cardBorder?.bottomBorderStyle} ${cardBorder?.bottomBorderColor}`,
                    borderLeft: `${cardBorder?.leftBorderWidth}px ${cardBorder?.leftBorderStyle} ${cardBorder?.leftBorderColor}`,
                    boxShadow: `${cardShado?.xOffset}px ${
                      cardShado?.yOffset
                    }px ${cardShado?.blur}px ${cardShado?.spread}px ${
                      cardShado?.color
                    } ${cardShado?.isInset ? "inset" : ""}`,
                    transform: `rotate(${cardTransform?.rotate}deg) scale(${cardTransform?.scale}) skewX(${cardTransform?.skewX}deg) skewY(${cardTransform?.skewY}deg) translateX(${cardTransform?.translateX}px) translateY(${cardTransform?.translateY}px)`,

                    backgroundImage: cardBackgroundImage?.backImage
                      ? `url(${cardBackgroundImage?.backImage})`
                      : `${
                          cardGradient
                            ? generateGradientString(cardGradient)
                            : ""
                        }`,
                    backgroundSize: `${cardBackgroundImage?.backSize}`,
                    backgroundRepeat: `${cardBackgroundImage?.backRepeat}`,
                    backgroundPosition: `${cardBackgroundImage?.backPosition}`,
                    backgroundColor: `${
                      GroupCard?.style?.cardStyle?.backgroundColor
                        ? `hsla(${GroupCard?.style?.cardStyle?.backgroundColor?.hue}, ${GroupCard?.style?.cardStyle?.backgroundColor?.brightness}%, ${GroupCard?.style?.cardStyle?.backgroundColor?.saturation}%, ${GroupCard?.style?.cardStyle?.backgroundColor?.alpha})`
                        : "#f8f8f800"
                    }`,
                    width: `${GroupCard?.style?.cardStyle?.width}`,
                    height: `${GroupCard?.style?.cardStyle?.height}`,

                    borderRadius: `${cardRadios?.topLeft}px ${cardRadios?.topRight}px ${cardRadios?.bottomRight}px ${cardRadios?.bottomLeft}px`,

                    marginTop: `${GroupCard?.style?.cardStyle?.margin?.top}px`,
                    marginBottom: `${GroupCard?.style?.cardStyle?.margin?.bottom}px`,
                    marginLeft: `${GroupCard?.style?.cardStyle?.margin?.left}px`,
                    marginRight: `${GroupCard?.style?.cardStyle?.margin?.right}px`,
                    paddingTop: `${GroupCard?.style?.cardStyle?.padding?.top}px`,
                    paddingBottom: `${GroupCard?.style?.cardStyle?.padding?.bottom}px`,
                    paddingLeft: `${GroupCard?.style?.cardStyle?.padding?.left}px`,
                    paddingRight: `${GroupCard?.style?.cardStyle?.padding?.right}px`,
                  }}
                  className={`${
                    index %
                      (GroupCard?.style?.preview
                        ? GroupCard?.style?.preview
                        : 3) ===
                      0 || index === GroupCard?.content?.length
                      ? "px-2"
                      : "pr-2"
                  } w-full py-2 flex items-center flex-col overflow-x-hidden `}
                >
                  {el?.components?.map((item: any, i: number) => {
                    return (
                      <ComponentProvider
                        data={item}
                        componentId={item?._id}
                        parant={{ ...sliderPayload, index: index }}
                        key={i}
                      />
                    );
                  })}

                  {/* <div className="items-center w-full py-2 transition-all duration-300 opacity-0 group-hover/slider:opacity-100"> */}
                  <div className="flex justify-center p-2 ">
                    <button
                      className="p-2 text-white bg-teal-500 rounded-full group.sliderButton w-fit"
                    >
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardSupreme;
