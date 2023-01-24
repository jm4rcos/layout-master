import React, { useState, useEffect, useContext } from "react";
import { themes } from "../../themes/themes";
import {
  TbArrowAutofitHeight as HeightIcon,
  TbArrowAutofitWidth as WidthIcon,
} from "react-icons/tb";
import { IconContainer } from "../ContainerEditor/styles";
import { SizeContainer } from "./styles";
import { Input } from "../Input";
import { EditorContext } from "../../contexts/EditorContext";
import { FaCheck, FaTimes } from "react-icons/fa";

export function SizeEditor({ containerName, onSave, height, width, onHeightChange, onWidthChange,  }) {
  const { containers, setContainers } = useContext(EditorContext);
  const container = containers[containerName];

  const [editingHeight, setEditingHeight] = useState(false);
  const [editingWidth, setEditingWidth] = useState(false);

  const [inputHeight, setInputHeight] = useState(height);
  const [inputWidth, setInputWidth] = useState(width);
  const [tempHeight, setTempHeight] = useState(container.height);
  const [tempWidth, setTempWidth] = useState(container.width);


  function handleSave() {
    setContainers({
      ...containers,
      [containerName]: { ...container, height: inputHeight, width: inputWidth },
    });
    onSave && onSave();
  }

  function handleHeightChange(e) {
    setInputHeight(e.target.value);
    onHeightChange && onHeightChange(e.target.value);
  }
  function handleWidthChange(e) {
    setInputWidth(e.target.value);
    onWidthChange && onWidthChange(e.target.value);
  }

  return (
    <SizeContainer>
      <div className="size-icons" style={{ display: "flex", gap: "10px" }}>
        <IconContainer
          onClick={() => {
            setEditingHeight(!editingHeight);
            setEditingWidth(false);
          }}
        >
          <HeightIcon size={26} color={themes.light.colors.light500} />
        </IconContainer>
        {editingHeight && (
          <>
            <Input
              type="number"
              placeholder="Height"
              width={64}
              height={20}
              value={inputHeight}
              onChange={handleHeightChange}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <FaCheck
                size={16}
                color={themes.dark.colors.success}
                onClick={() => {
                  setInputHeight(tempHeight);
                  handleSave();
                  setEditingHeight(false);
                }}
                style={{ cursor: "pointer" }}
              />
              <FaTimes
                size={16}
                color={themes.dark.colors.danger}
                onClick={() => setEditingHeight(false)}
                style={{ cursor: "pointer" }}
              />
            </div>
          </>
        )}
        <IconContainer
          onClick={() => {
            setEditingWidth(!editingWidth);
            setEditingHeight(false);
          }}
        >
          <WidthIcon size={26} color={themes.light.colors.light500} />
        </IconContainer>
        {editingWidth && (
          <>
            <Input
              type="number"
              placeholder="Width"
              width={64}
              height={20}
              value={inputWidth}
              onChange={handleWidthChange}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <FaCheck
                size={16}
                color={themes.dark.colors.success}
                onClick={() => {
                  setInputWidth(tempWidth);
                  handleSave();
                  setEditingWidth(false);
                }}
                style={{ cursor: "pointer" }}
              />
              <FaTimes
                size={16}
                color={themes.dark.colors.danger}
                onClick={() => setEditingWidth(false)}
                style={{ cursor: "pointer" }}
              />
            </div>
          </>
        )}
      </div>
    </SizeContainer>
  );
}
