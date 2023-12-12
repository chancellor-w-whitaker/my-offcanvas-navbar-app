import { useState } from "react";

import { data } from "../constants/data";
import { GridExample } from "./Table";
import { Sidebar } from "./Sidebar";

const sidebarList = data.map(({ name, id }) => ({ name, id }));

export const Contained = () => {
  const [activeId, setActiveId] = useState(sidebarList[0].id);

  return (
    <>
      <Sidebar
        setActiveId={setActiveId}
        activeId={activeId}
        list={sidebarList}
      ></Sidebar>
      <GridExample></GridExample>
    </>
  );
};
