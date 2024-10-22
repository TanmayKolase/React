import React from "react";
import { useState } from "react";

const ToggleHandle = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleToggle = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>
      <button onClick={handleToggle}>
        {isModalVisible ? "Hide Modal" : "Show Modal"}
      </button>
      {isModalVisible && <p>Modal is visible</p>}
    </>
  );
};

export default ToggleHandle;
