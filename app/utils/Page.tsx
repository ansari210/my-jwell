import React from "react";
import generateGradientString from "../function/generateGradientString";
import LayoutGrid from "./Layout";

interface AdvStyle {
  gradient?: any;
}

interface BackgroundImage {
  backImage?: string;
}

interface BackgroundColor {
  hue: number;
  brightness: number;
  saturation: number;
  alpha: number;
}

interface PageStyle {
  backgroundImage?: BackgroundImage;
  advStyle?: AdvStyle;
  backgroundColor?: BackgroundColor;
  height?: string;
  width?: string;
  padding?: number;
  margin?: number;
  radious?: number;
}

interface LayoutItem {
  // Define the properties of a layout item if necessary
  style: any; // Define the structure according to your style requirements
  data: any;  // Define the structure according to your data requirements
  // Include other properties if necessary
}

interface PageData {
  layout: LayoutItem[];
}

interface Props {
  pageData: PageData;
  pageStyle: PageStyle;
}

const Page: React.FC<Props> = ({ pageData, pageStyle }) => {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: pageStyle?.backgroundImage?.backImage
          ? `url(${pageStyle?.backgroundImage?.backImage})`
          : pageStyle?.advStyle?.gradient
          ? generateGradientString(pageStyle.advStyle.gradient)
          : "",
        backgroundColor: pageStyle?.backgroundColor
          ? `hsla(${pageStyle.backgroundColor.hue}, ${pageStyle.backgroundColor.brightness}%, ${pageStyle.backgroundColor.saturation}%, ${pageStyle.backgroundColor.alpha})`
          : "#0000",
        maxWidth: pageStyle?.height,
        width: pageStyle?.width,
        padding: pageStyle?.padding ? `${pageStyle.padding}px` : undefined,
        margin: pageStyle?.margin ? `${pageStyle.margin}px` : undefined,
        borderRadius: pageStyle?.radious ? `${pageStyle.radious}px` : undefined,
      }}
    >
      {pageData?.layout?.map((item: LayoutItem, index: number) => (
        <div key={index} className="group relative border-[#fff]">
          <LayoutGrid layoutdata={item} />
        </div>
      ))}
    </div>
  );
};

export default Page;
