import React from 'react'
import PageProvider from "./PageProvider"
const Provider =async () => {
  const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4YmNiMmJkZTM1MTUxNjc2MWY0YzEiLCJpYXQiOjE3MTU1NzQyMjMsImV4cCI6MTcxODk1ODIyM30.GC6LKCG2-K3JYH8h_8lvS5fZd0D_GjOJiJKKHCBJ7G4"; // Replace with your actual JWT token

const res = await fetch(
  `${process.env.NEXT_PUBLIC_API_URL}/get-web-preview/vercelApi.com`,
  {
    headers: {
      Authorization: `${token}`,
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  }
);

const data = await res.json();

  return<PageProvider data={data}/>
}

export default Provider