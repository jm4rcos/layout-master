import React, { useContext, useState } from "react";
// import { FiAlignLeft, FiAlignCenter, FiAlignRight } from "react-icons/fi";
import { BsAlignStart, BsAlignEnd, BsAlignCenter } from "react-icons/bs";
import { themes } from "../../themes/themes";
import { EditorContent, Wrapper } from "../Container/styles";
import { Button } from "../Button";
import { EditorContext } from "../../contexts/EditorContext";
import { Text } from "../Text";

export function JustifyEditor({ justify, containerName, onSave, name, ...props }) {
  const { containers, setContainers } = useContext(EditorContext);
  const container = containers[containerName];
  const [selectedAlign, setSelectedAlign] = useState(justify);
  const items = [
    {
      position: "flex-start",
      icon: <BsAlignStart size={24} color={themes.light.colors.light500} />,
    },
    {
      position: "center",
      icon: <BsAlignCenter size={24} color={themes.light.colors.light500} />,
    },
    {
      position: "flex-end",
      icon: <BsAlignEnd size={24} color={themes.light.colors.light500} />,
    },
  ];

  function handleSave(item) {
    setSelectedAlign(item.position);
    onSave({ align: item.position });
    setContainers({
      ...containers,
      [containerName]: { ...container, justify: item.position },
    });
  }

  return (
    <div className="align-icons" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Text content={name} size={themes.dark.font.title}/>
      <EditorContent>
        {items.map((item) => (
          <Wrapper key={item.position}>
            <Button
              onClick={() => handleSave(item)}
              style={
                selectedAlign === item.position
                  ? { backgroundColor: themes.dark.colors.dark100 }
                  : { backgroundColor: "transparent" }
              }
            >
              {item.icon}
            </Button>
          </Wrapper>
        ))}
      </EditorContent>
    </div>
  );
}
