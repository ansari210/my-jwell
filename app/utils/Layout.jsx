
import generateGradientString from "../function/generateGradientString";
import ComponentProvider from "./ComponentProvider";


  // interface GridItem {
  //   rowStart: number;
  //   colStart: number;
  //   rowEnd: number;
  //   colEnd: number;
  //   style:any,
  //   component: any[];
  // }

  // interface LayoutData {
  //   style:any,
  //   data:[]
  // }

  // interface LayoutGridProps {
  //   layoutdata: LayoutData
  // }

const LayoutGrid = ({ layoutdata}) => {
  const graphStyle ={
    cols: 6,
    rows: 6,
    cellSize: 50,
    section: 10,
    gap: 0,
  };


  const layoutGridData ={ ...layoutdata };



  // interface Props {
  //   items: GridItem[]
  // }
   
  // dispatch(Client_Layout_set_From_Manager(layoutId, navId));

  const ReusableGrid= ({ items }) => {
   

    // console.log("layout", pageData, "layerSlice>>>");
    // console.log("layout", componentSliceData, "new data>>>page");

    return items?.map((item) => {
      
      const transformation = item?.style?.advStyle?.transformation;
      const borderRadious = item?.style?.advStyle?.boxradius;
      const border = item?.style?.advStyle?.boxborder;
      const shadow = item?.style?.advStyle?.boxShadow;
      const background = item?.style?.backgroundImage;
      const gradient = item?.style?.advStyle?.gradient;
      const marginTop = item?.style?.marginTop;
  

      return (
        <div
          key={item._id}
          className={` relative  border-transparent duration-200 hover:bg-teal-300  bg-white `}
          style={
            item.colStart
              ? {
                  borderTop: `${border?.topBorderWidth}px ${border?.topBorderStyle} ${border?.topBorderColor}`,
                  borderRight: `${border?.rightBorderWidth}px ${border?.rightBorderStyle} ${border?.rightBorderColor}`,
                  borderBottom: `${border?.bottomBorderWidth}px ${border?.bottomBorderStyle} ${border?.bottomBorderColor}`,
                  borderLeft: `${border?.leftBorderWidth}px ${border?.leftBorderStyle} ${border?.leftBorderColor}`,
                  boxShadow: `${shadow?.xOffset}px ${shadow?.yOffset}px ${
                    shadow?.blur
                  }px ${shadow?.spread}px ${shadow?.color} ${
                    shadow?.isInset ? "inset" : ""
                  }`,
                  gridColumn: `${item.colStart}/${item.colEnd + 1}`,
                  gridRow: ` ${item.rowStart}/${item.rowEnd + 1}`,
                  backgroundImage: background?.backImage
                    ? `url(${background?.backImage})`
                    : `${gradient ? generateGradientString(gradient) : ""}`,
                  backgroundSize: `${background?.backSize}`,
                  backgroundRepeat: `${background?.backRepeat}`,
                  backgroundPosition: `${background?.backPosition}`,
                  backgroundColor: `${
                    item?.style?.backgroundColor
                      ? `hsla(${item?.style?.backgroundColor?.hue}, ${item?.style?.backgroundColor?.brightness}%, ${item?.style?.backgroundColor?.saturation}%, ${item?.style?.backgroundColor?.alpha})`
                      : "#f8f8f800"
                  }`,
                  width: `${item?.style?.width}`,
                  height: `${item?.style?.height}`,
                  margin: `${item?.style?.margin}px`,
                  padding: `${item?.style?.padding}px`,
                  borderRadius: `${borderRadious?.topLeft}px ${borderRadious?.topRight}px ${borderRadious?.bottomRight}px ${borderRadious?.bottomLeft}px`,
                  position: `${item?.style?.position}`,
                  marginTop: `${item?.style?.margin?.top}px`,
                  marginBottom: `${item?.style?.margin?.bottom}px`,
                  marginLeft: `${item?.style?.margin?.left}px`,
                  marginRight: `${item?.style?.margin?.right}px`,
                  paddingTop: `${item?.style?.padding?.top}px`,
                  paddingBottom: `${item?.style?.padding?.bottom}px`,
                  paddingLeft: `${item?.style?.padding?.left}px`,
                  paddingRight: `${item?.style?.padding?.right}px`,
                  display: `${item?.style?.display}`,
                  clipPath: `${item?.style?.advStyle?.shape?.shapeStyle}`,
                  transform: `rotate(${transformation?.rotate}deg) scale(${transformation?.scale}) skewX(${transformation?.skewX}deg) skewY(${transformation?.skewY}deg) translateX(${transformation?.translateX}px) translateY(${transformation?.translateY}px)`,
                }
              : { backgroundColor: "#fff" }
          }
        >
          <div
            className="relative "
            style={{
              height: `${item?.style?.height}` || `fit-content`,
              width: `${item?.style?.width}`,
              display: `${item?.style?.display?.display}`,
              flexDirection: item?.style?.display?.direction ||'row',
              flexWrap: "wrap" || `${item?.style?.flexWrap}`,
              alignItems: `${item?.style?.display?.alignItems}`,
              alignContent: `${item?.style?.alignContent}`,
              justifyContent: `${item?.style?.display?.justifyContent}`,
              gap: `${item?.style?.display?.customGap}px`,
            }}
          >
            {item?.component?.length > 0
              ? item?.component?.map((value, index) => {
                  const data =  value;

                  return (
                    <div
                      className="relative group"
                      key={value._id}
                      // style={{
                      //   width: `${item?.style?.width}`,
                      //   height: `${item?.style?.height}`,
                      // }}
                    >
                      
                        <ComponentProvider data={data} componentId={value?._id} />
                    </div>
                  );
                })
              : ""}
          </div>
         
        </div>
      );
    });

  }

 
  return ( <div
        style={{   
          gridTemplateColumns: `repeat(${graphStyle.cols},1fr)`,
          gridTemplateRows: `repeat(${graphStyle.rows},1fr)`,
          gap: `${graphStyle.gap}px`,
          backgroundImage: layoutGridData?.style?.backgroundImage?.backImage
            ? `url(${layoutGridData?.style?.backgroundImage?.backImage})`
            : `${
                layoutGridData?.style?.advStyle?.gradient
                  ? generateGradientString(
                      layoutGridData?.style?.advStyle?.gradient
                    )
                  : ""
              }`,
          backgroundColor: `hsla(${layoutGridData?.style?.backgroundColor?.hue}, ${layoutGridData?.style?.backgroundColor?.brightness}%, ${layoutGridData?.style?.backgroundColor?.saturation}%, ${layoutGridData?.style?.backgroundColor?.alpha})`,
          height: `${layoutGridData?.style?.height}`,
          width: `${layoutGridData?.style?.width}`,
          borderRadius: `${layoutGridData?.style?.radious}px`,
          position: `${layoutGridData?.style?.position}`,
          display: `${layoutGridData?.style?.display || "grid"}`,
          clipPath: `${layoutGridData?.style?.advStyle?.shape?.shapeStyle}`,
          marginTop: `${layoutGridData?.style?.margin?.top}px`,
          marginBottom: `${layoutGridData?.style?.margin?.bottom}px`,
          marginLeft: `${layoutGridData?.style?.margin?.left}px`,
          marginRight: `${layoutGridData?.style?.margin?.right}px`,
          paddingTop: `${layoutGridData?.style?.padding?.top}px`,
          paddingBottom: `${layoutGridData?.style?.padding?.bottom}px`,
          paddingLeft: `${layoutGridData?.style?.padding?.left}px`,
        }}
       
      >
        <ReusableGrid items={layoutGridData?.data}  />
      </div>
  );
};

export default LayoutGrid;
