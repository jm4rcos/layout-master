import React, { useContext, useState } from "react";
// import { FiAlignLeft, FiAlignCenter, FiAlignRight } from "react-icons/fi";
import { CgAlignLeft, CgAlignRight, CgAlignMiddle } from "react-icons/cg";
import { themes } from "../../themes/themes";
import { Wrapper } from "../Container/styles";
import { Button } from "./styles";
import { EditorContext } from "../../contexts/EditorContext";

export function JustifyEditor({ align, containerName, onSave, ...props }) {
  const { containers, setContainers } = useContext(EditorContext);
  const container = containers[containerName];
  const [selectedAlign, setSelectedAlign] = useState(align);
  const items = [
    {
      position: "flex-start",
      icon: <CgAlignLeft size={26} color={themes.light.colors.light500} />,
    },
    {
      position: "center",
      icon: <CgAlignMiddle size={26} color={themes.light.colors.light500} />,
    },
    {
      position: "flex-end",
      icon: <CgAlignRight size={26} color={themes.light.colors.light500} />,
    },
  ];

  function handleSave(item) {
    setSelectedAlign(item.position);
    onSave({ align: item.position });
    setContainers({
      ...containers,
      [containerName]: { ...container, align: item.position },
    });
  }

  return (
    <div className="align-icons" style={{ display: "flex" }}>
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
    </div>
  );
}
