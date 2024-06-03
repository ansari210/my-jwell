

interface Pops {
  data: any;
  componentId?: string;
  parent?: any;
}

const ParaGrapg = ({ data, componentId, parent }: Pops) => {
  const textObj ={
    content: data?.data[0]?.content
      ? data?.data[0]?.content
      : "Thank you for visiting! Here's some placeholder text for demonstration purposes. Feel free to replace it with your own content!.",
    innerText: data?.data[0]?.content
      ? data?.data[0]?.content
      : "Thank you for visiting! Here's some placeholder text for demonstration purposes. Feel free to replace it with your own content!.",
    type: "p",
    size: data?.data[0]?.style?.size,
    color: data?.data[0]?.style?.color,
    position: data?.data[0]?.style?.position,
    fontFamily: data?.data[0]?.style?.fontFamily,
    fontweight: data?.data[0]?.style?.fontweight,
    lineHeight: data?.data[0]?.style?.lineHeight,
    wordSpacing: data?.data[0]?.style?.wordSpacing,
    textShadow: data?.data[0]?.style?.textShadow,
    textDecoration: data?.data[0]?.style?.textDecoration,
    letterSpacing: data?.data[0]?.style?.letterSpacing,
  };



 

  const renderElement = () => {
    switch (textObj?.type) {
      case "p":
        return (
          <p
            // ref={inputRef}
            dangerouslySetInnerHTML={{ __html: textObj.innerText }}
            className={`w-full border-[3px]  outline-none border-transparent p-2 mt-2`}
            style={{
              color: textObj?.color
                ? `hsla(${textObj?.color.hue}, ${textObj?.color.brightness}%, ${textObj?.color.saturation}%, ${textObj?.color.alpha})`
                : "#000",
              textAlign: textObj?.position,
              fontSize: textObj?.size,
              fontFamily: textObj?.fontFamily,
              fontWeight: textObj?.fontweight,
              lineHeight: textObj?.lineHeight,
              wordSpacing: textObj?.wordSpacing,
              textShadow: textObj?.textShadow,
              textDecoration: textObj?.textDecoration,
              letterSpacing: `${textObj?.letterSpacing}px`,
            }}
          ></p>
        );
      case "h1":
      case "h2":
      case "h3":
      case "h4":
      case "h5":
      case "h6":
        return (
          <h1
            dangerouslySetInnerHTML={{ __html: textObj.innerText }}
            className="w-full border-[3px] outline-none border-transparent hover:border-teal-300 border-dashed"
          ></h1>
        );
      default:
        return null;
    }
  };

  return <div>{renderElement()}</div>;
};

export default ParaGrapg;
