import React, { useState } from "react";
import { FaEdit, FaCheck, FaTimes } from "react-icons/fa";

export function ColorEditor({ onSave, ...props }) {
  const [bgColor, setBgColor] = useState(props.bgColor || "");
  const [editingColor, setEditingColor] = useState(false);

  function handleSave() {
    onSave({ bgColor });
  }

  return (
    <div>
      <FaEdit
        onClick={() => setEditingColor(true)}
        style={{ cursor: "pointer" }}
      />
      {editingColor && (
        <div className="color-editor">
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          />
          <FaCheck
            onClick={() => {
              setEditingColor(false);
              handleSave();
            }}
            style={{ cursor: "pointer" }}
          />
          <FaTimes
            onClick={() => setEditingColor(false)}
            style={{ cursor: "pointer" }}
          />
        </div>
      )}
    </div>
  );
}
