// import { BsPersonFill, BsArrowBarRight } from "react-icons/bs";

import Navbar from "./Nav";
// import React, { useContext } from "react";

// import { useSelector } from "react-redux";

interface navdatrend {
  navdata:any
}
const Sidebar = ({ navdata }: navdatrend) => {
  // const { navdata } = useSelector((state: any) => state.nav);
  // const { navigationArr } = useSelector((el: any) => el.appPages);

  return (
    <nav className="w-full">
      {/* <section className="flex items-center justify-between w-full px-2 text-center shadow font-montserrat ">
        <div className="flex p-2 duration-200 rounded shadow cursor-pointer">
          <div className="w-12 h-12 p-1 border-2 rounded-full border-slate-500 ">
            <BsPersonFill className="text-4xl text-slate-500" />
          </div>

          <BsArrowBarRight
            onClick={() => setOpenSidebar(false)}
            className="text-2xl text-red-500 cursor-pointer hover:text-red-700"
          />
        </div>
        <div></div>
      </section> */}
        {/* {<SideBarNav navArr={navdata.navigationArr} />} */}
        <Navbar navArr={navdata?.navigationArr} ProductData={navdata}/>
    </nav>
  );
};

export default Sidebar;
