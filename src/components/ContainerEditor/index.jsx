import React, { useContext, useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { EditorContext } from "../../contexts/EditorContext";
import { JustifyEditor } from "../JustifyEditor";
import { ColorEditor } from "../ColorEditor";
import { StyledEditor, EditorPanel, IconContainer, EditDiv } from "./styles";
import { FaTimes } from "react-icons/fa";
import { SizeEditor } from "../SizeEditor";
import { Wrapper } from "../Container/styles";
import { AlignEditor } from "../AlignEditor";

export function ContainerEditor({ containerName, cantSize, ...props }) {
  const { containers, setContainers } = useContext(EditorContext);
  const container = containers[containerName];
  const [editing, setEditing] = useState(false);

  const [selectedAlign, setSelectedAlign] = useState(container.align);
  const [selectedJustify, setSelectedJustify] = useState(container.justify);
  const [height, setHight] = useState(container.height);
  const [width, setWidth] = useState(container.width)
  const [color, setColor] = useState(container.color)

  function handleSave() {
    setContainers({
      ...containers,
      [containerName]: { ...container, align: selectedAlign, height: height + 'px', width: width + 'px', color: color },
    });
  }

  function handleHeightChange(newHeight) {
    setHight(newHeight);
  }
  function handleWidthChange(newWidth) {
    setWidth(newWidth);
  }


  return (
    <>
      {editing ? (
        <StyledEditor
          className="container-icons"
          containerAlign={containers['mainContainer'].align}
          containerName={containerName}
        >
          <EditorPanel>
            {!cantSize && (
              <SizeEditor
                containerName={containerName}
                onSave={handleSave}
                height={height}
                width={width}
                onHeightChange={handleHeightChange}
                onWidthChange={handleWidthChange}
              />
            )}
            <IconContainer>
              <ColorEditor
                color={color}
                containerName={containerName}
                onSave={handleSave}
                onCancel={() => setEditing(false)}
              />
            </IconContainer>
            <JustifyEditor
              justify={selectedJustify}
              containerName={containerName}
              onSave={handleSave}
              onCancel={() => setEditing(false)}
            />
            <AlignEditor
              align={selectedAlign}
              containerName={containerName}
              onSave={handleSave}
              onCancel={() => setEditing(false)}
            />
            <IconContainer>
              <FaTimes
                size={20}
                color="#fff"
                onClick={() => setEditing(false)}
                style={{ cursor: "pointer" }}
              />
            </IconContainer>
          </EditorPanel>
        </StyledEditor>
      ) : (
        <EditDiv onClick={() => setEditing(true)}>
          <FiEdit size={24} color="#fff" style={{ cursor: "pointer" }} />
        </EditDiv>
      )}
    </>
  );
}
