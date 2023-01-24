import React, { useContext, useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { EditorContext } from "../../contexts/EditorContext";

export function HeightEditor({ containerName }) {
  const { containers, setContainers } = useContext(EditorContext);
  const container = containers[containerName];
  const [height, setHeight] = useState(container.height);

  function handleSave() {
    setContainers({
      ...containers,
      [containerName]: { ...container, height },
    });
  }

  return (
    <div className="height-editor">
      <FaArrowUp onClick={() => setHeight(height + 10)} />
      <input
        type="number"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <FaArrowDown onClick={() => setHeight(height - 10)} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
