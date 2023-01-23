import React, { useContext, useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { MdOutlinePalette } from "react-icons/md";
import { EditorContext } from "../../contexts/EditorContext";
import { themes } from "../../themes/themes";
import { Wrapper } from "./styles";

export function ColorEditor({ onSave, initialColor }) {
  const { color, setColor } = useContext(EditorContext);
  const [editingColor, setEditingColor] = useState(false);
  const [tempColor, setTempColor] = useState(initialColor);

  function handleSave() {
    onSave(tempColor);
    setEditingColor(false);
    console.log(color);
  }


  function handleCancel() {
    setTempColor(color);
    setEditingColor(false);
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
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              paddingRight: '14px',
              gap: '10px'
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
         <input
            value={tempColor}
            type="color"
            onChange={(e) => setTempColor(e.target.value)}
          />
          
        </div>
      )}
    </Wrapper>
  );
}
