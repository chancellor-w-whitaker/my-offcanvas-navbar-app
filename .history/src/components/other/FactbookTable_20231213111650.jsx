import { useState } from "react";

import { datasets } from "../../constants/datasets";
import { GridExample } from "./GridExample";

export const FactbookTable = () => {
  const [activeDatasetId, setActiveDatasetId] = useState(datasets[0].id);

  return (
    <div>
      <GridExample></GridExample>
    </div>
  );
};
