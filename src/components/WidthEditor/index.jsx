import React, { useContext, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { EditorContext } from "../../contexts/EditorContext";

export function WidthEditor({ containerName }) {
  const { containers, setContainers } = useContext(EditorContext);
  const container = containers[containerName];
  const [width, setWidth] = useState(container.width);

  function handleSave() {
    setContainers({
      ...containers,
      [containerName]: { ...container, width },
    });
  }

  return (
    <div className="width-editor">
      <FaArrowLeft onClick={() => setWidth(width - 10)} />
      <input
        type="number"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
      />
      <FaArrowRight onClick={() => setWidth(width + 10)} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
