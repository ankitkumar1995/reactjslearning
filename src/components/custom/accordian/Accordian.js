import React from "react";
import AccordianItem from "./AccordianItem";

const Accordian = () => {
  const accordionItems = [
    { title: "Item 1", content: "Content for Item 1" },
    { title: "Item 2", content: "Content for Item 2" },
    { title: "Item 3", content: "Content for Item 3" },
  ];
  return (
    <div>
      Accordian
      <div>
        {accordionItems.map((accordi) => (
          <AccordianItem
            key={accordi}
            title={accordi.title}
            content={accordi.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordian;
