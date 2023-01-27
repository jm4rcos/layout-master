import React, { useContext, useState } from "react";
// import { FiAlignLeft, FiAlignCenter, FiAlignRight } from "react-icons/fi";
import { BsAlignBottom, BsAlignMiddle, BsAlignTop } from "react-icons/bs";
import { themes } from "../../themes/themes";
import { EditorContent, Wrapper } from "../Container/styles";
import { Button } from "./styles";
import { EditorContext } from "../../contexts/EditorContext";
import { Text } from "../Text";

export function AlignEditor({ align, containerName, onSave, name, ...props }) {
  const { containers, setContainers } = useContext(EditorContext);
  const container = containers[containerName];
  const [selectAlign, setSelectAlign] = useState(align);
  const items = [
    {
      position: "flex-start",
      icon: <BsAlignTop size={24} color={themes.light.colors.light500} />,
    },
    {
      position: "center",
      icon: <BsAlignMiddle size={24} color={themes.light.colors.light500} />,
    },
    {
      position: "flex-end",
      icon: <BsAlignBottom size={24} color={themes.light.colors.light500} />,
    },
  ];

  function handleSave(item) {
    setSelectAlign(item.position);
    onSave({ align: item.position });
    setContainers({
      ...containers,
      [containerName]: { ...container, align: item.position },
    });
  }

  return (
    <div
      className="align-icons"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text content={name} />
      <EditorContent>
        {items.map((item) => (
          <Wrapper key={item.position}>
            <Button
              onClick={() => handleSave(item)}
              style={
                selectAlign === item.position
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
