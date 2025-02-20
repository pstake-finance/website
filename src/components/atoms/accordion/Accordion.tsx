import { useState } from "react";
import { AccordionData } from "./types";
import AccordionItem from "./AccordionItem";

function Accordion({
  items,
  showChevron = false,
}: {
  items: Array<AccordionData>;
  showChevron?: boolean;
}) {
  const [currentIdx, setCurrentIdx] = useState(-1);
  const btnOnClick = (idx: number) => {
    setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1));
  };

  return (
    <ul>
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          data={item}
          isOpen={idx === currentIdx}
          btnOnClick={() => btnOnClick(idx)}
          showChevron={showChevron}
        />
      ))}
    </ul>
  );
}

export default Accordion;
