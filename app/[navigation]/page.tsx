import { useParams, useRouter } from "next/navigation";
import Sidebar from "../core/SideBar";
import Page from "../utils/Page";

import { getData } from "./server";
import { useEffect, useState } from "react";
import Provider from "../component/Dataprovider";

export default function Pages() {
  return <Provider />;
}
