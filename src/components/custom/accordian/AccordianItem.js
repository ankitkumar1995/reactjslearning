import React, { useState } from "react";

const AccordianItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onToggle = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };
  return (
    <div>
      <div>
        <div className={`accordian_item ${isOpen ? "open" : ""}`}>
          <button className="accordian-title" onClick={onToggle}>
            {title}
          </button>
          {isOpen && <div className="accordian-content">{content}</div>}
        </div>
      </div>
    </div>
  );
};

export default AccordianItem;
