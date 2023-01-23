import React, { useState, useEffect } from "react";
import { FiAlignLeft, FiAlignCenter, FiAlignRight } from "react-icons/fi";
import { themes } from "../../themes/themes";
import { Wrapper } from "../Container/styles";
import { Button } from "./styles";

export function AlignEditor({ onSave, align, ...props }) {
  const [selectedAlign, setSelectedAlign] = useState(align);
  const items = [
    {position: 'flex-start', icon:  <FiAlignLeft size={26} color={themes.light.colors.light500}/>},
    {position: 'center', icon: <FiAlignCenter size={26} color={themes.light.colors.light500}/>},
    {position: 'flex-end', icon: <FiAlignRight size={26} color={themes.light.colors.light500}/>}
  ]

  function handleSave(item) {
    setSelectedAlign(item.position);
    onSave(item.position);
    console.log(item.position);
  }

  return (
    <div className="align-icons" style={{ display: "flex" }}>
      {items.map((item) => (
        <Wrapper key={item.position}>
          <Button
            onClick={() => handleSave(item)}
            style={selectedAlign === item.position ? { backgroundColor: themes.dark.colors.dark100 } : {backgroundColor: 'transparent' }}
          >
            {item.icon}
          </Button>
        </Wrapper>
      ))}
    </div>
  );
}
