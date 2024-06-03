"use client";
import { useParams, useRouter } from "next/navigation";
import Sidebar from "../core/SideBar";
import Page from "../utils/Page";

interface Props{
    data:any
}
export default function PageProvider({data}:Props) {
  const { navigation } = useParams();
 
  const [_, value] = (typeof navigation ==='string'?navigation:'').split("%3A");
  const filterData = data?.pages?.find((item: any) => {
    return item?.navigationId == value;
  });

  console.log(navigation,data?.pages)

  return (
    <main className=" min-h-screen min-w-screen bg-white text-black flex flex-col ">
      <Sidebar navdata={data?.pageNevigation} />
      <Page pageData={filterData} pageStyle={filterData?.style} />
    </main>
  );
}
