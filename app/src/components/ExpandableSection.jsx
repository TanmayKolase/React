import React, { useState } from "react";

const ExpandableSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <p>Expandable Section</p>
      <h3 onClick={handleToggle} style={{ cursor: "pointer" }}>
        {isExpanded ? "Read Less" : "Read More"}
      </h3>
      {isExpanded && <p>This is the expanded content.</p>}
    </>
  );
};

export default ExpandableSection;
