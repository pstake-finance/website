import { useEffect, useRef, useState } from "react";
import { AccordionData } from "./types";

import { RefObject } from "react";
import Icon from "../../molecules/Icon";

export function getRefValue<C>(ref: RefObject<C>) {
  return ref.current as C;
}

function AccordionItem({
  data,
  isOpen,
  btnOnClick,
}: {
  data: AccordionData;
  isOpen: boolean;
  btnOnClick: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const contentEl = getRefValue(contentRef);
      setHeight(contentEl.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <li className={`mb-2 ${isOpen ? "active" : ""}`}>
      <h2 className="bg-[#25252a] py-3 px-5 mb-4 rounded-xl">
        <button className="flex justify-between w-full" onClick={btnOnClick}>
          <span className="text-light-high font-medium text-sm leading-normal">
            {data.title}
          </span>
          <Icon viewClass="icon w-[20px]" icon={isOpen ? "minus" : "plus"} />
        </button>
      </h2>
      <div
        className="text-sm leading-loose text-light-emphasis px-5 overflow-hidden transition-height
         duration-200 ease-in-out"
        style={{ height }}
      >
        <div ref={contentRef} className="accordion-item-content">
          {data.content}
        </div>
      </div>
    </li>
  );
}

export default AccordionItem;
