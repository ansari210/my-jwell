import React from "react";
import Image from "../build/Image";
// import Writing from "../build/Writing";
import Slider from "../build/Slider";
import ParaGrapg from "../build/paragraph";
import Button from "../build/Button";
import List from "../build/List";
// import DivElement from "../build/DivElement";
// import Tabs from "../build/Tabs";
// import ToggleText from "../screen/Core/toggletext/ToggleText";
// import Form from "../build/form";
// import Toggle from "../build/Toggle";
// import ToggleTextDropdown from "../build/ToggleTextDropDown";
// import TabsNew from "../build/TabsNew";
// import CardGenerator from "../../../src/Controller/CardGenerator/CardGenerator";
import CardSupreme from "../build/CardSupreme";
import Card from "../build/Card";

type Props = {
  componentId?: string;
  data: any;
  parant?: any;
};

const ComponentProvider: React.FC<Props> = ({ data, componentId, parant }) => {
  
  // const D = React.useMemo(() => {
    switch (data.varient) {
      case 1:
        return <Button data={data} componentId={componentId||''} parent={parant} />;
      // case 2:
      //   return <Comment data={data} componentId={componentId}  />;
      case 3:       
      return <Image data={data}  />;
      // case 4:
        // return (
        //   <Writing
        //     locationPathName={"iu"}
        //     id={"hfhf"}
        //     data={data}
        //     //@ts-ignore
        //     componentId={componentId}
        //     parent={parant}
        //   />
        // );
      case 5:
        return <Slider sliderNum={4} data={data} componentId={componentId} />;
      case 6:
        return (
          <ParaGrapg data={data} componentId={componentId} parent={parant} />
        );
      case 7:
        // return <CardSupreme data={data} componentId={componentId} />;
        return (
          <CardSupreme sliderNum={4} data={data} componentId={componentId} />
        );

      // case 8:
      //   return <List data={data} componentId={componentId} />;

      // case 9:
      //   return <Tabs data={data} componentId={componentId} />;
      // case 10:
      //   return <ToggleText data={data} componentId={componentId} />;

      // case 11:
      //   return <Form data={data} componentId={componentId} />;

      case 12:
        return <Card data={data} componentId={componentId} />;
      // case 9:
      //   return <TabsNew data={data} componentId={componentId} />;

      // case 10:
      //   return <ToggleTextDropdown data={data} componentId={componentId} />;

      default:
        return null;
    }
  // }, [data]);

};

export default React.memo(ComponentProvider);
