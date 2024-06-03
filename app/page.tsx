// "use client"

import Sidebar from "./core/SideBar";
import Page from "./utils/Page";
export default async function Home() {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4YmNiMmJkZTM1MTUxNjc2MWY0YzEiLCJpYXQiOjE3MTU1NzQyMjMsImV4cCI6MTcxODk1ODIyM30.GC6LKCG2-K3JYH8h_8lvS5fZd0D_GjOJiJKKHCBJ7G4"; // Replace with your actual JWT token

    console.log("hlo")
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/get-web-preview/www.survey-box.com`,
    {
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    }
  );

  const data = await res.json();
  return (
    <main className=" min-h-screen min-w-screen bg-white text-black flex flex-col ">
      <Sidebar navdata={data?.pageNevigation} />

      <Page pageData={data.pages[0]} pageStyle={data?.pages[0]?.style} />
    </main>
  );
}
