import React, { useContext, useState } from "react";
import { JustifyEditor } from "../JustifyEditor";
import { ColorEditor } from "../ColorEditor";
import { SizeEditor } from "../SizeEditor";
import { AlignEditor } from "../AlignEditor";
import { EditorContext } from "../../contexts/EditorContext";
import {
  EditorPanel,
  IconContainer,
  StyledEditor,
} from "../ContainerEditor/styles";
import { FaTimes } from "react-icons/fa";
import { Button } from "../JustifyEditor/styles";
import { themes } from "../../themes/themes";
import { Input } from "../Input";

export function SidebarEditor({ setNewName, containerName, handleSelect }) {
  const { containers, setContainers } = useContext(EditorContext);

  const container = containers[containerName];
  const [selectedAlign, setSelectedAlign] = useState(container.align);
  const [selectedJustify, setSelectedJustify] = useState(container.justify);
  const [height, setHeight] = useState(500);
  const [width, setWidth] = useState(600);
  const [color, setColor] = useState(container.color);

  function handleSave() {
    setContainers({
      ...containers,
      [containerName]: {
        ...containers[containerName],
        align: selectedAlign,
        justify: selectedJustify,
        height: height + "px",
        width: width + "px",
        color: color,
      },
    });
    console.log(container);
  }

  return (
    <StyledEditor>
      <EditorPanel>
        <IconContainer color={themes.dark.colors.danger}>
          <FaTimes
            style={{ width: "24px" }}
            onClick={() => handleSelect(null)}
            color={themes.light.colors.light500}
          />
        </IconContainer>
        <AlignEditor
          containerName={containerName}
          name="Align"
          selectedAlign={selectedAlign}
          setSelectedAlign={setSelectedAlign}
          onSave={handleSave}
        />
        <JustifyEditor
          containerName={containerName}
          name="Justify"
          selectedJustify={selectedJustify}
          setSelectedJustify={setSelectedJustify}
          onSave={handleSave}
        />
        <SizeEditor
          containerName={containerName}
          name="Size"
          height={500}
          setHeight={300}
          width={600}
          setWidth={800}
          onSave={handleSave}
        />
        <ColorEditor
          name="Color"
          color={color}
          setColor={setColor}
          containerName={containerName}
          onSave={handleSave}
        />
        <IconContainer>
          <Input
            placeholder={containerName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </IconContainer>

        {/* Enviar para a APi em SAVE!!! */}
      </EditorPanel>
    </StyledEditor>
  );
}
