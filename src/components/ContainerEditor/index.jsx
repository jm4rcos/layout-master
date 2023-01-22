import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { themes } from "../../themes/themes";
import { AlignEditor } from "../AlignEditor";
import { ColorEditor } from '../ColorEditor';
import { StyledEditor, EditorPanel, IconContainer } from "./styles";

export function ContainerEditor({ onSave, ...props }) {
  const [color, setColor] = useState(props.color || themes.dark.colors.background)
  const [height, setHeight] = useState(props.height);
  const [width, setWidth] = useState(props.width);
  const [radius, setRadius] = useState(props.radius);
  const [align, setAlign] = useState(props.align || 'center');
  const [editing, setEditing] = useState(false);

  function handleSave(color, align) {
    onSave({color, align});
    console.log("ContainerEditor", {color}, {align});
  }
  

  return (
    <StyledEditor isOpen={editing} className="container-icons">
        <FaEdit color="#fff" onClick={() => setEditing(!editing)} style={{ cursor: "pointer" }} />
        {editing && (
          <EditorPanel>
            <IconContainer>
            <ColorEditor 
              color={color}
              onChange={setColor} // Passando a função setColor diretamente
              onSave={handleSave}
              onCancel={() => setEditing(false)}
            />

            </IconContainer>
            <AlignEditor 
              align={align} 
              onSave={(align) => handleSave(color, align)} 
              onCancel={() => setEditing(false)}
            />
          </EditorPanel>
        )}
    </StyledEditor>
  );
}
