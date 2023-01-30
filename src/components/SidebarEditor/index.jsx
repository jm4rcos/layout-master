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
import { Button } from "../../components/Button";
import { themes } from "../../themes/themes";
import { Input } from "../Input";

export function SidebarEditor({ selectedContainer, container, setNewName, handleSelect }) {
  const { containers, setContainers } = useContext(EditorContext);

  function handleUpdate(newProps) {
    const newContainers = [...containers];
    newContainers[selectedContainer] = {
      ...newContainers[selectedContainer],
      ...newProps,
    };
    setContainers(newContainers);
    console.log(newProps);
  }

  console.log("sidebar: ", selectedContainer, container);

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
          component={container}
          name="Align"
          onSave={handleUpdate}
        />
        <JustifyEditor
          component={container}
          name="Justify"
          onSave={handleUpdate}
        />
        <SizeEditor
          component={container}
          name="Size"
          onSave={handleUpdate}
        />
        <ColorEditor
          name="Color"
          component={container}
          onSave={handleUpdate}
        />
        <IconContainer>
          <Input
            width={500}
            placeholder={container.id}
            onChange={(e) => setNewName(e.target.value)}
          />
        </IconContainer>
      </EditorPanel>
    </StyledEditor>
  );
}
