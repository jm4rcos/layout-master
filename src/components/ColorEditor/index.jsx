import React, { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { MdOutlinePalette } from "react-icons/md";
import { themes } from "../../themes/themes";
import { Wrapper } from "./styles";

export function ColorEditor({ onSave, color: initialColor }) {
  const [color, setColor] = useState(initialColor || "");
  const [editingColor, setEditingColor] = useState(false);

  function handleSave() {
    onSave(color);
  }

  return (
    <Wrapper>
      <MdOutlinePalette
        onClick={() => setEditingColor(true)}
        style={{ cursor: "pointer" }}
        size={30}
        color={themes.light.colors.light500}
      />
      {editingColor && (
        <div className="color-editor">
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: '14px',
              gap: '10px'
            }}
          >
            <FaCheck
              size={16}
              color={themes.dark.colors.success}
              onClick={() => {
                handleSave()
                setEditingColor(false)
              }}
              style={{ cursor: "pointer" }}
            />
            <FaTimes
              size={16}
              color={themes.dark.colors.danger}
              onClick={() => setEditingColor(false)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      )}
    </Wrapper>
  );
}
