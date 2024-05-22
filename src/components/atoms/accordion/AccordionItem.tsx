import { useEffect, useRef, useState } from "react";
import { AccordionData } from "./types";

import { RefObject } from "react";
import Icon from "../../molecules/Icon";
import { useRouter } from "next/router";

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
  const router = useRouter();
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
    <li className={`mb-2 ${isOpen ? "active" : ""} accordion`}>
      <h2
        className={`${
          router.pathname === "/btc"
            ? "bg-[#1B1B1B]"
            : router.pathname === "/osmo"
            ? "bg-[#201B43]"
            : router.pathname === "/dydx"
            ? "bg-[#232334]"
            : "bg-[#25252a]"
        }  py-3 px-5 mb-4 rounded-md accordion-item-title text-light-high font-medium text-sm leading-normal ${
          data.headerClass
        }`}
      >
        <button className={`flex justify-between w-full`} onClick={btnOnClick}>
          <span className="">{data.title}</span>
          {!data.hideIcon ? (
            <Icon
              viewClass="icon !w-[16px] fill-[#70747C]"
              icon={isOpen ? "minus" : "plus"}
            />
          ) : null}
        </button>
      </h2>
      <div
        className={`text-sm leading-loose text-light-emphasis px-4 overflow-hidden transition-height
         duration-200 ease-in-out ${data.contentClass}`}
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
