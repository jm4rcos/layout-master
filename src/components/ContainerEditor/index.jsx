import React, { useContext, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { EditorContext } from "../../contexts/EditorContext";
import { AlignEditor } from "../AlignEditor";
import { ColorEditor } from '../ColorEditor';
import { StyledEditor, EditorPanel, IconContainer, EditDiv } from "./styles";
import { FaTimes } from "react-icons/fa";

export function ContainerEditor({ onSave, ...props }) {
  const { color, align, setColor, setAlign } = useContext(EditorContext);
  const [editing, setEditing] = useState(false);

  function handleSave() {
    onSave({color, align});
    console.log("ContainerEditor", {color}, {align});
  }

  return (
    <StyledEditor isOpen={editing} className="container-icons">
      {editing ? (
        
          <EditorPanel>
            <IconContainer>
            <ColorEditor 
              initialColor={color}
              onSave={setColor}
              onCancel={() => setEditing(false)}
            />

            </IconContainer>
            <AlignEditor 
              align={align}
              onSave={setAlign} 
              onCancel={() => setEditing(false)}
            />
            <IconContainer><FaTimes size={20} color="#fff" onClick={() => setEditing(!editing)} style={{ cursor: "pointer" }}/></IconContainer>
          </EditorPanel>
        ) : (
          <EditDiv>
            <FaEdit size={20} color="#fff" onClick={() => setEditing(!editing)} style={{ cursor: "pointer" }} />
          </EditDiv>
        )}
    </StyledEditor>
  );
}
