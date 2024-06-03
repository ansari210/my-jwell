interface Props {
  data: any;
}

const Image: React.FC<Props> = ({ data }) => {
  const imageByteCode = data?.data[0]?.image;
  const styleData = data?.data[0]?.style || {};
  const advStyle = styleData?.advStyle || {};

  const divStyle = {
    backgroundColor: styleData.backgroundColor,
    backgroundImage: styleData.backgroundImage,
    objectFit: styleData.objectFit || "cover",
  };

  const transformation = advStyle.transformation || {};
  const borderRadius = advStyle.boxradius || {};
  const border = advStyle.boxborder || {};
  const shadow = advStyle.boxShadow || {};
  const imageFilter = advStyle.imagefilter || {};

  const styles = {
    filter: `
      grayscale(${imageFilter.grayscale ? imageFilter.grayscale / 100 : 0})
      sepia(${imageFilter.sepia || 0}%)
      blur(${imageFilter.blur || 0}px)
      brightness(${imageFilter.brightness || 100}%)
      hue-rotate(${imageFilter.hue || 0}deg)
      saturate(${imageFilter.saturate || 100}%)
      opacity(${imageFilter.opacity || 100}%)
      contrast(${imageFilter.contrast || 100}%)
    `,
    objectFit: divStyle.objectFit,
    borderTop: `${border.topBorderWidth || 0}px ${border.topBorderStyle || "solid"} ${border.topBorderColor || "transparent"}`,
    borderRight: `${border.rightBorderWidth || 0}px ${border.rightBorderStyle || "solid"} ${border.rightBorderColor || "transparent"}`,
    borderBottom: `${border.bottomBorderWidth || 0}px ${border.bottomBorderStyle || "solid"} ${border.bottomBorderColor || "transparent"}`,
    borderLeft: `${border.leftBorderWidth || 0}px ${border.leftBorderStyle || "solid"} ${border.leftBorderColor || "transparent"}`,
    boxShadow: `${shadow.xOffset || 0}px ${shadow.yOffset || 0}px ${shadow.blur || 0}px ${shadow.spread || 0}px ${shadow.color || "transparent"} ${shadow.isInset ? "inset" : ""}`,
    width: styleData.width || '100%',
    height: styleData.height,
    margin: styleData.margin ? `${styleData.margin}px` : undefined,
    padding: styleData.padding ? `${styleData.padding}px` : undefined,
    borderRadius: `${borderRadius.topLeft || 0}px ${borderRadius.topRight || 0}px ${borderRadius.bottomRight || 0}px ${borderRadius.bottomLeft || 0}px`,
    position: styleData.position,
    display: styleData.display,
    clipPath: advStyle.shape?.shapeStyle,
    transform: `
      rotate(${transformation.rotate || 0}deg)
      scale(${transformation.scale || 1})
      skewX(${transformation.skewX || 0}deg)
      skewY(${transformation.skewY || 0}deg)
      translateX(${transformation.translateX || 0}px)
      translateY(${transformation.translateY || 0}px)
    `,
  };

  return <img style={styles} src={imageByteCode} alt="" />;
};

export default Image;
