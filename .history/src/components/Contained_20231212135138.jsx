import { useState } from "react";

import { Sidebar } from "./Sidebar";

export const Contained = () => {
  const [activeId, setActiveId] = useState(list[0].id);
  return (
    <>
      <Sidebar></Sidebar>
    </>
  );
};
