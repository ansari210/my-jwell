"use client"
import React, { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import generateGradientString from "../function/generateGradientString";
import ComponentProvider from "../utils/ComponentProvider";

interface Props {
  sliderNum?: number;
  data?: any;
  componentId?: string;
}

const Slider = ({ sliderNum, data, componentId }: Props) => {
  const [countScroll, setCountScroll] = useState({
    count: 0,
    selectedNum: 0,
  });
  const [SliderData, setSliderData] = React.useState({
    content: data?.data[0]?.content,
    style: data?.data[0]?.style,
  });

  useEffect(() => {
    setSliderData({
      content: data?.data[0]?.content,
      style: data?.data[0]?.style,
    });
  }, [data]);

  const numItems = SliderData?.content?.length;
  const previewSize = SliderData?.style?.preview || 1;
  const itemsToSlide = Math.floor(
    numItems / previewSize / countScroll?.selectedNum
  );
  const arr = new Array(
    SliderData?.content?.length > 0 ? SliderData?.content?.length : 1
  ).fill(1);

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    if (SliderData?.style?.autoplay && SliderData?.style?.loop) {
      interval = setInterval(() => {
        handleNext();
      }, Number(SliderData?.style?.delay));
    }
    return () => clearInterval(interval);
  }, [
    SliderData?.style?.autoplay,
    SliderData?.style?.delay,
    SliderData?.style?.loop,
  ]);

  const handlePrev = () => {
    setCountScroll((prev) => {
      const newCount = prev.count > 0 ? prev.count - 1 : arr.length - 1;
      return { count: newCount, selectedNum: newCount };
    });
  };

  const handleNext = () => {
    setCountScroll((prev) => {
      const newCount = prev.count < arr.length - 1 ? prev.count + 1 : 0;
      return { count: newCount, selectedNum: newCount };
    });
  };

  const validationFun = (count: any, num: any) => {
    return count === num;
  };

  const handleController = (event: any) => {
    event.stopPropagation();
  };
  const handleAddComponent = (e: any, value: any) => {
    e.stopPropagation();
   
  };

  const sliderPayload = {
    parentComponentId: data?._id,
    type: "slider",
  };
  const sliderShado = SliderData?.style?.sliderStyle?.advStyle?.boxShadow;
  const sliderBorder = SliderData?.style?.sliderStyle?.advStyle?.boxborder;
  const sliderRadios = SliderData?.style?.sliderStyle?.advStyle?.boxradius;
  const sliderTransform =
    SliderData?.style?.sliderStyle?.advStyle?.transformation;
  const sliderGradient = SliderData?.style?.sliderStyle?.advStyle?.gradient;
  const sliderBackgroundImage = SliderData?.style?.sliderStyle?.backgroundImage;

  const cardShado = SliderData?.style?.cardStyle?.advStyle?.boxShadow;
  const cardBorder = SliderData?.style?.cardStyle?.advStyle?.boxborder;
  const cardRadios = SliderData?.style?.cardStyle?.advStyle?.boxradius;
  const cardTransform = SliderData?.style?.cardStyle?.advStyle?.transformation;
  const cardGradient = SliderData?.style?.cardStyle?.advStyle?.gradient;
  const cardBackgroundImage = SliderData?.style?.cardStyle?.backgroundImage;
  return (
    <div
      className="relative flex flex-col w-full overflow-x-hidden flex-0"
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
          SliderData?.style?.sliderStyle?.backgroundColor
            ? `hsla(${SliderData?.style?.sliderStyle?.backgroundColor?.hue}, ${SliderData?.style?.sliderStyle?.backgroundColor?.brightness}%, ${SliderData?.style?.sliderStyle?.backgroundColor?.saturation}%, ${SliderData?.style?.sliderStyle?.backgroundColor?.alpha})`
            : "#f8f8f800"
        }`,
        width: `${SliderData?.style?.sliderStyle?.width}`,
        height: `${SliderData?.style?.sliderStyle?.height}`,

        borderRadius: `${sliderRadios?.topLeft}px ${sliderRadios?.topRight}px ${sliderRadios?.bottomRight}px ${sliderRadios?.bottomLeft}px`,

        marginTop: `${SliderData?.style?.sliderStyle?.margin?.top}px`,
        marginBottom: `${SliderData?.style?.sliderStyle?.margin?.bottom}px`,
        marginLeft: `${SliderData?.style?.sliderStyle?.margin?.left}px`,
        marginRight: `${SliderData?.style?.sliderStyle?.margin?.right}px`,
        paddingTop: `${SliderData?.style?.sliderStyle?.padding?.top}px`,
        paddingBottom: `${SliderData?.style?.sliderStyle?.padding?.bottom}px`,
        paddingLeft: `${SliderData?.style?.sliderStyle?.padding?.left}px`,
        paddingRight: `${SliderData?.style?.sliderStyle?.padding?.right}px`,
      }}
      onClick={(e: any) => handleController(e)}
    >
      <div className="h-full overflow-x-hidden border-4 border-transparent border-dashed min-w-92 group/sliderParent hover:border-teal-300">
        {!SliderData?.content && (
          <div className="flex flex-col items-center w-full py-2 overflow-x-hidden transition-all duration-300 rounded-full opacity-0 group-hover/sliderParent:opacity-100">
            <div className="flex justify-center w-full h-full p-2">
              <button
                className=" py-[8px]  px-[8px] text-white bg-teal-500 rounded-full w-fit"
                onClick={(e: any) => handleController(e)}
              >
                <IoAdd />
              </button>
            </div>
          </div>
        )}
        {SliderData?.content?.length < 1 && (
          <div className="flex flex-col items-center w-full py-2 overflow-x-hidden transition-all duration-300 opacity-0 group-hover/sliderParent:opacity-100">
            <div className="flex justify-center w-full h-full p-2">
              <button
                className="py-[8px]  px-[8px] text-white bg-teal-500 rounded-full w-fit"
                onClick={(e: any) => handleController(e)}
              >
                <IoAdd />
              </button>
            </div>
          </div>
        )}
        <div
          className="relative duration-300"
          style={{
            display: "grid",
            gap: `${SliderData?.style?.elementGap}px`,
            gridTemplateColumns: `repeat(${SliderData?.content?.length}, ${
              100 / SliderData?.content?.length
            }%)`,
            right: `${itemsToSlide * 100}%`,
            flexWrap: "wrap",
            transition: `transform ${SliderData?.style?.duration} ${SliderData?.style?.easing}`,
            width: `${
              (SliderData?.content?.length * 100) / SliderData?.style?.preview
            }%`,
          }}
        >
          {SliderData?.content?.map((el: any, index: number) => {
            return (
              <>
                <div
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
                      SliderData?.style?.cardStyle?.backgroundColor
                        ? `hsla(${SliderData?.style?.cardStyle?.backgroundColor?.hue}, ${SliderData?.style?.cardStyle?.backgroundColor?.brightness}%, ${SliderData?.style?.cardStyle?.backgroundColor?.saturation}%, ${SliderData?.style?.cardStyle?.backgroundColor?.alpha})`
                        : "#f8f8f800"
                    }`,
                    width: `${SliderData?.style?.cardStyle?.width}`,
                    height: `${SliderData?.style?.cardStyle?.height}`,

                    borderRadius: `${cardRadios?.topLeft}px ${cardRadios?.topRight}px ${cardRadios?.bottomRight}px ${cardRadios?.bottomLeft}px`,

                    marginTop: `${SliderData?.style?.cardStyle?.margin?.top}px`,
                    marginBottom: `${SliderData?.style?.cardStyle?.margin?.bottom}px`,
                    marginLeft: `${SliderData?.style?.cardStyle?.margin?.left}px`,
                    marginRight: `${SliderData?.style?.cardStyle?.margin?.right}px`,
                    paddingTop: `${SliderData?.style?.cardStyle?.padding?.top}px`,
                    paddingBottom: `${SliderData?.style?.cardStyle?.padding?.bottom}px`,
                    paddingLeft: `${SliderData?.style?.cardStyle?.padding?.left}px`,
                    paddingRight: `${SliderData?.style?.cardStyle?.padding?.right}px`,
                  }}
                  key={index}
                  className={`${
                    index %
                      (SliderData?.style?.preview
                        ? SliderData?.style?.preview
                        : 3) ===
                      0 || index === SliderData?.content?.length
                      ? "px-2"
                      : "pr-2"
                  } w-full py-2 flex items-center flex-col overflow-x-hidden group/slider border-dashed border-2 border-transparent hover:border-teal-300 `}
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

                  <div className="items-center w-full py-2 transition-all duration-300 opacity-0 group-hover/slider:opacity-100">
                    <div className="flex justify-center p-2 ">
                      <button
                        className="p-2 text-white bg-teal-500 rounded-full group.sliderButton w-fit"
                        onClick={(e: any) => handleAddComponent(e, index)}
                      >
                        {/* <p className="text-sm font-semibold opacity-0 group-hover/sliderButton:opacity-100">
                          Add Elements
                        </p> */}
                        <IoAdd />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-center w-full mt-4 ">
        <div className="grid grid-cols-7 place-items-center ">
          {SliderData?.style?.Navigation && (
            <div className="cursor-pointer" onClick={handlePrev}>
              <FaAngleLeft size={"35px"} />
            </div>
          )}
          {SliderData?.style?.Pagination ? (
            SliderData?.style?.type ? (
              <>
                {countScroll.count + 1 == Math.round(arr?.length) && (
                  <div
                    onClick={() => {
                      setCountScroll((prev) => ({
                        ...prev,
                        selectedNum: prev.count,
                      }));
                    }}
                    className={`border  rounded-full h-8 w-8 grid place-items-center
        ${
          validationFun(countScroll.selectedNum, countScroll.count)
            ? "bg-blue-600 text-white"
            : ""
        }`}
                  >
                    {countScroll.count + 1}
                  </div>
                )}
                <div
                  onClick={() => {
                    setCountScroll((prev) => ({
                      ...prev,
                      selectedNum: prev.count + 1,
                    }));
                  }}
                  className={`border h-8 w-8 grid place-items-center   rounded-full
        ${
          validationFun(countScroll.selectedNum, countScroll.count + 1)
            ? "bg-blue-600 text-white"
            : ""
        }
        `}
                >
                  {countScroll.count + 2}
                </div>
                {/* {countScroll.count + 3==Math.round(arr?.length)&& <div
                  onClick={() => {
                    setCountScroll((prev) => ({
                      ...prev,
                      selectedNum: prev.count + 2,
                    }));
                  }}
                  className={`border h-8 w-8 grid place-items-center   rounded-full
          ${
            validationFun(countScroll.selectedNum, countScroll.count + 2)
              ? "bg-blue-600 text-white"
              : ""
          }
        `}
                >
                  {countScroll.count + 3}
                </div>} */}
                {arr?.length > 3 && (
                  <>
                    <div>...</div>
                    <div className="grid w-8 h-8 border rounded-full place-items-center">
                      {Math.round(arr?.length)}
                    </div>
                  </>
                )}
              </>
            ) : (
              <>
                <div
                  onClick={() => {
                    setCountScroll((prev) => ({
                      ...prev,
                      selectedNum: prev.count,
                    }));
                  }}
                  className={`  rounded-full text-[40px] cursor-pointer grid place-items-center
        ${
          validationFun(countScroll.selectedNum, countScroll.count)
            ? "text-blue-600 "
            : ""
        }`}
                >
                  .
                </div>
                <div
                  onClick={() => {
                    setCountScroll((prev) => ({
                      ...prev,
                      selectedNum: prev.count + 1,
                    }));
                  }}
                  className={`  grid place-items-center text-[40px] cursor-pointer rounded-full
        ${
          validationFun(countScroll.selectedNum, countScroll.count + 1)
            ? "text-blue-600 "
            : ""
        }
        `}
                >
                  .
                </div>
                <div
                  onClick={() => {
                    setCountScroll((prev) => ({
                      ...prev,
                      selectedNum: prev.count + 2,
                    }));
                  }}
                  className={`  grid place-items-center text-[40px] cursor-pointer  rounded-full
          ${
            validationFun(countScroll.selectedNum, countScroll.count + 2)
              ? " text-blue-600 "
              : ""
          }
        `}
                >
                  .
                </div>
              </>
            )
          ) : (
            ""
          )}
          {SliderData?.style?.Navigation && (
            <button className="cursor-pointer" onClick={handleNext}>
              <FaAngleLeft className="-rotate-180" size={"35px"} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Slider;
