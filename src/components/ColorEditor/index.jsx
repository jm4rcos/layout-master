import React, { useContext, useState } from "react";
import { EditorContext } from "../../contexts/EditorContext";
import { Input } from "../Input";
import { FaCheck, FaTimes } from "react-icons/fa";
import { themes } from "../../themes/themes";

export function ColorEditor({ component, onSave }) {
  const { containers, setContainers } = useContext(EditorContext);
  console.log(component);
  const [tempColor, setTempColor] = useState(component.color);
  const [editing, setEditing] = useState(false)


  function handleSave() {
    onSave({ color: tempColor });
    setContainers({
      ...containers,
      [component]: { ...component, color: tempColor },
    });
  }

  function handleCancel() {
    setTempColor(component.color);
    setEditing(false);
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        width: editing ? 60 : "auto",
        justifyContent: "space-between",
      }}
    >
      <input
        style={{ width: 30, height: 30, cursor: "pointer" }}
        value={tempColor}
        type="color"
        onChange={(e) => setTempColor(e.target.value)}
        onClick={() => setEditing(true)}
      />
      {editing && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <FaCheck
            size={16}
            color={themes.dark.colors.success}
            onClick={handleSave}
            style={{ cursor: "pointer" }}
          />
          <FaTimes
            size={16}
            color={themes.dark.colors.danger}
            onClick={handleCancel}
            style={{ cursor: "pointer" }}
          />
        </div>
      )}
    </div>
  );
}
