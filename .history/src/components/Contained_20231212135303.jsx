import { useState } from "react";

import { data } from "../constants/data";
import { Sidebar } from "./Sidebar";

const list = data.map(({ name, id }) => ({ name, id }));

export const Contained = () => {
  const [activeId, setActiveId] = useState(list[0].id);

  return (
    <>
      <Sidebar setActiveId={setActiveId} activeId={activeId}></Sidebar>
    </>
  );
};
