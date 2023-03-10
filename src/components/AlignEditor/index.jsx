import React, { useContext, useState } from "react";
// import { FiAlignLeft, FiAlignCenter, FiAlignRight } from "react-icons/fi";
import { CgAlignBottom, CgAlignCenter, CgAlignTop } from "react-icons/cg";
import { themes } from "../../themes/themes";
import { Wrapper } from "../Container/styles";
import { Button } from "./styles";
import { EditorContext } from "../../contexts/EditorContext";

export function AlignEditor({ justify, containerName, onSave, ...props }) {
  const { containers, setContainers } = useContext(EditorContext);
  const container = containers[containerName];
  const [selectedJustify, setSelectedJustify] = useState(justify);
  const items = [
    {
      position: "flex-start",
      icon: <CgAlignTop size={26} color={themes.light.colors.light500} />,
    },
    {
      position: "center",
      icon: <CgAlignCenter size={26} color={themes.light.colors.light500} />,
    },
    {
      position: "flex-end",
      icon: <CgAlignBottom size={26} color={themes.light.colors.light500} />,
    },
  ];

  function handleSave(item) {
    setSelectedJustify(item.position);
    onSave({ align: item.position });
    setContainers({
      ...containers,
      [containerName]: { ...container, justify: item.position },
    });
  }

  return (
    <div className="align-icons" style={{ display: "flex" }}>
      {items.map((item) => (
        <Wrapper key={item.position}>
          <Button
            onClick={() => handleSave(item)}
            style={
              selectedJustify === item.position
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
