"use client"
import Image from "next/image";
import Sidebar from "./SideBar";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface navdata {
  navArr: any;
  ProductData: any;
}

const Navbar = ({ navArr, ProductData }: navdata) => {
  
  // console.log(ProductData)
  const router = useRouter();

  const Navigation = (path: string, navigationId: string) => {
    if (path === "home") {
      router.push("/");
    } else {
      router.push(`/${path}:${navigationId}`);
    }
  };


  const navItemsSiteLink = (el: any, type: any) => {
    const navtextstyle = ProductData?.style?.navtext?.normalText;
    return type === "child" ? (
      <div
        style={{
          color: navtextstyle?.color
            ? `hsla(${navtextstyle?.color?.hue}, ${navtextstyle?.color?.brightness}%, ${navtextstyle?.color?.saturation}%, ${navtextstyle?.color?.alpha})`
            : "#000",
          textAlign: navtextstyle?.position,
          fontSize: navtextstyle?.size,
          fontFamily: navtextstyle?.fontFamily,
          fontWeight: navtextstyle?.fontweight,
          lineHeight: navtextstyle?.lineHeight,
          wordSpacing: navtextstyle?.wordSpacing,
          backgroundColor: `${
            navtextstyle?.backgroundColor
              ? `hsla(${navtextstyle?.backgroundColor?.hue}, ${navtextstyle?.backgroundColor?.brightness}%, ${navtextstyle?.backgroundColor?.saturation}%, ${navtextstyle?.backgroundColor?.alpha})`
              : "#f8f8f800"
          }`,
        }}
        // href={el.path}
        rel="noreferrer"
        className="flex items-center justify-between px-5 py-3 rounded hover:bg-slate-100 hover:text-sky-500"
        key={el.path}
        // target="_blank"
        onClick={()=>Navigation(el.path,el._id)}
      >
        <span className="flex">{el.name}</span>
      </div>
    ) : (
      <div
        style={{
          color: navtextstyle?.color
            ? `hsla(${navtextstyle?.color?.hue}, ${navtextstyle?.color?.brightness}%, ${navtextstyle?.color?.saturation}%, ${navtextstyle?.color?.alpha})`
            : "#000",
          textAlign: navtextstyle?.position,
          fontSize: navtextstyle?.size,
          fontFamily: navtextstyle?.fontFamily,
          fontWeight: navtextstyle?.fontweight,
          lineHeight: navtextstyle?.lineHeight,
          wordSpacing: navtextstyle?.wordSpacing,
          backgroundColor: `${
            navtextstyle?.backgroundColor
              ? `hsla(${navtextstyle?.backgroundColor?.hue}, ${navtextstyle?.backgroundColor?.brightness}%, ${navtextstyle?.backgroundColor?.saturation}%, ${navtextstyle?.backgroundColor?.alpha})`
              : "#f8f8f800"
          }`,
        }}
        // href={el.path}
        key={el.path}
        rel="noreferrer"
        // target="_blank"
        onClick={()=>Navigation(el.path,el._id)}
        className="relative px-3 py-3 text-base duration-200 border-b-2 cursor-pointer group border-b-transparent hover:border-b-sky-500"
      >
        <span className="flex text-blue-400 items-center group-hover:text-sky-500 duration-200 text-[15px] ">
          {el.name}
          {/* <LuExternalLink className="mx-1" /> */}
        </span>
      </div>
    );

  };

  const navItems = (el: any, type: any) => {
    const navtextstyle = ProductData?.style?.navtext?.normalText;
    console.log("Text logo style value>>>", navtextstyle);
    return type === "child" ? (
      <div
        style={{
          color: navtextstyle?.color
            ? `hsla(${navtextstyle?.color?.hue}, ${navtextstyle?.color?.brightness}%, ${navtextstyle?.color?.saturation}%, ${navtextstyle?.color?.alpha})`
            : "#000",
          textAlign: navtextstyle?.position,

          fontFamily: navtextstyle?.fontFamily,
          fontWeight: navtextstyle?.fontweight,
          lineHeight: navtextstyle?.lineHeight,
          wordSpacing: navtextstyle?.wordSpacing,
          backgroundColor: `${
            navtextstyle?.backgroundColor
              ? `hsla(${navtextstyle?.backgroundColor?.hue}, ${navtextstyle?.backgroundColor?.brightness}%, ${navtextstyle?.backgroundColor?.saturation}%, ${navtextstyle?.backgroundColor?.alpha})`
              : "#f8f8f800"
          }`,
        }}
        onClick={()=>Navigation(el.path,el._id)}
        className="flex items-center justify-between px-5 py-3 rounded hover:bg-slate-100 hover:text-sky-500"
        key={el?.path}
        // to={`/builder/${productId}/${el.path}/${el?._id}`}
        // onClick={() => {
        //   dispatch(handleNavPath(el.path));
        // }}
      >
        <span style={{ fontSize: navtextstyle?.size }} className="flex">
          {el.name}
        </span>
      </div>
    ) : (
      <div
      onClick={()=>Navigation(el?.path,el?._id)}
        style={{
          color: navtextstyle?.color
            ? `hsla(${navtextstyle?.color?.hue}, ${navtextstyle?.color?.brightness}%, ${navtextstyle?.color?.saturation}%, ${navtextstyle?.color?.alpha})`
            : "#000",
          textAlign: navtextstyle?.position,
          fontSize: navtextstyle?.size,
          fontFamily: navtextstyle?.fontFamily,
          fontWeight: navtextstyle?.fontweight,
          lineHeight: navtextstyle?.lineHeight,
          wordSpacing: navtextstyle?.wordSpacing,
          backgroundColor: `${
            navtextstyle?.backgroundColor
              ? `hsla(${navtextstyle?.backgroundColor?.hue}, ${navtextstyle?.backgroundColor?.brightness}%, ${navtextstyle?.backgroundColor?.saturation}%, ${navtextstyle?.backgroundColor?.alpha})`
              : "#f8f8f800"
          }`,
        }}
       
        // to={`/builder/${productId}/${el.path}/${el?._id}`}
        key={el.path}
        className="relative px-3 py-3 text-base duration-200 border-b-2 cursor-pointer group border-b-transparent hover:border-b-sky-500"
      >
        <span className="flex items-center group-hover:text-sky-500 duration-200 text-[15px] ">
          {el.name}
        </span>
      </div>
    );
  };

  const navGroup = (el: any, type: any) => {
    const navtextstyle = ProductData?.style?.navtext?.normalText;

    return (
      <div
        key={el.path}
        style={{
          color: navtextstyle?.color
            ? `hsla(${navtextstyle?.color?.hue}, ${navtextstyle?.color?.brightness}%, ${navtextstyle?.color?.saturation}%, ${navtextstyle?.color?.alpha})`
            : "#000",
          textAlign: navtextstyle?.position,
          fontSize: navtextstyle?.size,
          fontFamily: navtextstyle?.fontFamily,
          fontWeight: navtextstyle?.fontweight,
          lineHeight: navtextstyle?.lineHeight,
          wordSpacing: navtextstyle?.wordSpacing,
          backgroundColor: `${
            navtextstyle?.backgroundColor
              ? `hsla(${navtextstyle?.backgroundColor?.hue}, ${navtextstyle?.backgroundColor?.brightness}%, ${navtextstyle?.backgroundColor?.saturation}%, ${navtextstyle?.backgroundColor?.alpha})`
              : "#f8f8f800"
          }`,
        }}
      >
        {type === "parent" ? (
          <div className="relative px-3 py-2 text-base duration-200 border-b-2 cursor-pointer group border-b-transparent hover:border-b-sky-500">
            <span className="flex items-center duration-200 group-hover:text-sky-500">
              <span
                style={{ fontSize: navtextstyle?.size }}
                className="md:text-[15px] "
                onClick={()=>Navigation(el.path,el._id)}
                // onClick={() =>
                //   el?.type === "externalWeb"
                //     ? window.open(el?.path, "_blank")
                //     : navigate(`/builder/${productId}/${el.path}/${el?._id}`)
                // }
              >
                {el.name}
              </span>
              {/* {el?.items?.length > 0 && (
                // <MdOutlineKeyboardArrowDown className="duration-200 group-hover:-rotate-180 text-sky-500" />
              )} */}
            </span>

            {
              <ul className="absolute top-[40px] group-hover:top-[49.6px] duration-100 invisible group-hover:visible opacity-0 group-hover:opacity-100 left-0 rounded text-sm bg-white  shadow min-w-[100%] w-max">
                {el.items.map((el: any) =>
                  el.items
                    ? navGroup(el, "child")
                    // : el.navType === "site"
                    // ? navItemsSiteLink(el, "child")
                    : navItems(el, "child")
                )}
              </ul>
            }
          </div>
        ) : (
          <li
            // onMouseEnter={() => setSubMenu((prev) => [...prev, el?.name])}
            // onMouseLeave={() => setSubMenu([])}
            className={`px-3 py-3 flex items-center relative rounded justify-between z-auto ${
              // subMenu.includes(el?.name) ? "bg-slate-100 text-sky-500" : ""'*:
              ''
            }`}
          >
            <span
              className="z-auto flex"
              // onClick={() =>
              //   navigate(`/builder/${productId}/${el.path}/${el?._id}`)
              // }
              onClick={()=>Navigation(el.path,el._id)}
            >
              {el.name}
            </span>
            {/* {el?.items?.length > 0 && (
              <MdOutlineKeyboardArrowDown
                className={` ${
                  subMenu.includes(el?.name) ? "rotate-90" : "-rotate-90"
                } text-base text-sky-500`}
              />
            )} */}

            {
              <ul
                className={`absolute left-[100%] top-[0px] rounded  bg-white text-black overflow-hidden shadow w-max
                  ${
                  // subMenu.includes(el.name)
                  //   ? "visible opacity-100"
                  //   : "invisible opacity-0"
                  ''
                }
                `
              }
              >
                {el.items.map((el: any) =>
                  el.items
                    ? navGroup(el, "child")
                    : el.navType === "site"
                    ? navItemsSiteLink(el, "child")
                    : navItems(el, "child")
                )}
              </ul>
            }
          </li>
        )}
      </div>
    );
  };
  const HandleNavController = () => {
    // console.log(navArr, ProductData, "<<navLogo>>");
    // dispatch(
    //   HandleComponentController({
    //     // navController: { isActive: true, data: { ...ProductData } },
    //     navController: true,
    //   })
    // );
  };
  const normalText = ProductData?.style?.textlogostyle?.normalText;
  const boxradius = normalText?.advStyle?.boxradius;
  const boxShadow = normalText?.advStyle?.boxShadow;
  const boxborder = normalText?.advStyle?.boxborder;
  const transformation = normalText?.advStyle?.transformation;

  const imageLogoStyling = ProductData?.style?.imagelogostyle?.style;
  const advanceStyling = imageLogoStyling?.advStyle;
  const imageHeight = imageLogoStyling?.height || "70px";
  const imageWidth = imageLogoStyling?.width || "70px";
  const imageMargin = imageLogoStyling?.margin;
  const imagePadding = imageLogoStyling?.padding;
  const imageFit = imageLogoStyling?.objectFit || "cover";

  // console.log(
  //   // ProductData,
  //   advanceStyling,
  //   // advanceStyling?.transformation,
  //   imageMargin,
  //   // imageLogoStyling,
  //   "<<navLogo>>"
  // );

  return (
    <nav
      style={{
        backgroundColor: `${
          ProductData?.style?.backgroundColor
            ? `hsla(${ProductData?.style?.backgroundColor?.hue}, ${ProductData?.style?.backgroundColor?.brightness}%, ${ProductData?.style?.backgroundColor?.saturation}%, ${ProductData?.style?.backgroundColor?.alpha})`
            : "white z-[1000]"
        }`,
      }}
      className={`flex border-dashed hover:border-teal-400 border-[3px] border-transparent   justify-between items-center font-montserrat z-20   xl:px-20 sticky top-0 
       h-[49.6px] w-full select-none text-black bg-white`}
      onClick={HandleNavController}
    >
      <div className="flex items-center pl-3 text-3xl cursor-pointer font-cookie text-sky-500">
        {ProductData?.islogo ? (
          <Image
          quality={100}
          priority
          height={`${imageHeight || "70px"}`}
          width={`${imageWidth}`}
            src={ProductData?.title}
            // className="w-[70px] h-[70px]"
            alt="logo"
            style={{
              width: `${imageWidth}`,
              // width: `${100}px`,
              // height: `${imageHeight || "70px"}`,
              filter: `grayscale(${
                advanceStyling?.imagefilter?.grascale / 100
              }) sepia(${advanceStyling?.imagefilter?.sepia}%) blur(${
                advanceStyling?.imagefilter?.blur
              }px) brightness(${
                advanceStyling?.imagefilter?.brighness
              }%) hue-rotate(${advanceStyling?.imagefilter?.hue}deg) saturate(${
                advanceStyling?.imagefilter?.saturate
              }%) opacity(${advanceStyling?.imagefilter?.opacity}%) contrast(${
                advanceStyling?.imagefilter?.contrast
              }%)`,

              objectFit: imageFit,
              borderTop: `${advanceStyling?.boxborder?.topBorderWidth}px ${advanceStyling?.boxborder?.topBorderStyle} ${advanceStyling?.boxborder?.topBorderColor}`,
              borderRight: `${advanceStyling?.boxborder?.rightBorderWidth}px ${advanceStyling?.boxborder?.rightBorderStyle} ${advanceStyling?.boxborder?.rightBorderColor}`,
              borderBottom: `${advanceStyling?.boxborder?.bottomBorderWidth}px ${advanceStyling?.boxborder?.bottomBorderStyle} ${advanceStyling?.boxborder?.bottomBorderColor}`,
              borderLeft: `${advanceStyling?.boxborder?.leftBorderWidth}px ${advanceStyling?.boxborder?.leftBorderStyle} ${advanceStyling?.boxborder?.leftBorderColor}`,
              boxShadow: `${advanceStyling?.boxShadow?.xOffset}px ${
                advanceStyling?.boxShadow?.yOffset
              }px ${advanceStyling?.boxShadow?.blur}px ${
                advanceStyling?.boxShadow?.spread
              }px ${advanceStyling?.boxShadow?.color} ${
                advanceStyling?.boxShadow?.isInset ? "inset" : ""
              }`,

              marginTop: `${imageMargin?.top}px `,
              marginRight: ` ${imageMargin?.right}px`,
              marginBottom: `${imageMargin?.bottom}px `,
              marginLeft: `${imageMargin?.left}px`,
              paddingTop: `${imagePadding?.top}px `,
              paddingRight: `${imagePadding?.right}px `,
              paddingBottom: `${imagePadding?.bottom}px `,
              paddingLeft: `${imagePadding?.left}px`,
              borderRadius: `${advanceStyling?.boxradius?.topLeft}px ${advanceStyling?.boxradius?.topRight}px ${advanceStyling?.boxradius?.bottomRight}px ${advanceStyling?.boxradius?.bottomLeft}px`,
              // position: `${divStyle?.style?.position}`,
              // display: `${divStyle?.style?.display}`,
              clipPath: `${advanceStyling?.shape?.shapeStyle}`,
              transform: `rotate(${advanceStyling?.transformation?.rotate}deg) scale(${advanceStyling?.transformation?.scale}) skewX(${advanceStyling?.transformation?.skewX}deg) skewY(${advanceStyling?.transformation?.skewY}deg) translateX(${advanceStyling?.transformation?.translateX}px) translateY(${advanceStyling?.transformation?.translateY}px)`,
            }}
          />
        ) : (
          <span
            style={{
              color: normalText?.color
                ? `hsla(${normalText?.color?.hue}, ${normalText?.color?.brightness}%, ${normalText?.color?.saturation}%, ${normalText?.color?.alpha})`
                : "#000",
              textAlign: normalText?.position,
              fontSize: normalText?.size,
              fontFamily: normalText?.fontFamily,
              fontWeight: normalText?.fontweight,
              lineHeight: normalText?.lineHeight,
              wordSpacing: normalText?.wordSpacing,
              backgroundColor: `${
                normalText?.backgroundColor
                  ? `hsla(${normalText?.backgroundColor?.hue}, ${normalText?.backgroundColor?.brightness}%, ${normalText?.backgroundColor?.saturation}%, ${normalText?.backgroundColor?.alpha})`
                  : "#f8f8f800"
              }`,
              width: `${normalText?.width}`,
              height: `${normalText?.height}`,
              margin: `${normalText?.margin}px`,
              padding: `${normalText?.padding}px`,
              borderRadius: `${boxradius?.topLeft}px ${boxradius?.topRight}px ${boxradius?.bottomRight}px ${boxradius?.bottomLeft}px`,
              boxShadow: `${boxShadow?.xOffset}px ${boxShadow?.yOffset}px ${
                boxShadow?.blur
              }px ${boxShadow?.spread}px ${boxShadow?.color} ${
                boxShadow?.isInset ? "inset" : ""
              }`,
              borderTop: `${boxborder?.topBorderWidth}px ${boxborder?.topBorderStyle} ${boxborder?.topBorderColor}`,
              borderRight: `${boxborder?.rightBorderWidth}px ${boxborder?.rightBorderStyle} ${boxborder?.rightBorderColor}`,
              borderBottom: `${boxborder?.bottomBorderWidth}px ${boxborder?.bottomBorderStyle} ${boxborder?.bottomBorderColor}`,
              borderLeft: `${boxborder?.leftBorderWidth}px ${boxborder?.leftBorderStyle} ${boxborder?.leftBorderColor}`,
            }}
            className="text-black"
          >
            {ProductData?.title}
          </span>
        )}
      </div>
      <div className="flex items-center h-full px-3 font-montserrat ">
        <div className="hidden lg:flex" onClick={HandleNavController}>
          {navArr?.map((el: any) =>
            el?.items
              ? navGroup(el, "parent")
              : el?.navType === "site"
              ? navItemsSiteLink(el, "parent")
              : navItems(el, "parent")
          )}
        </div>

        <section className="relative group ">
          {/* <AiOutlineMenuFold
            onClick={() => setOpenSidebar(true)}
            className="ml-5 text-2xl cursor-pointer text-sky-500"
          /> */}
        </section>

        <section
          // className={`absolute top-0  left-0 w-full h-[100vh] bg-black/50    ${
          //   openSidebar ? "visible " : "invisible"
          // }`}
        >
          {/* <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} /> */}
        </section>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
