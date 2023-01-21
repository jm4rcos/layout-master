import React, { useState } from "react";
import { FaPen, FaCheck, FaTimes } from "react-icons/fa";

export function ContainerEditor({ onSave, ...props }) {
  const [bgColor, setBgColor] = useState(props.bgColor || "");
  const [height, setHeight] = useState(props.height);
  const [width, setWidth] = useState(props.width);
  const [radius, setRadius] = useState(props.radius);
  const [maxHeight, setMaxHeight] = useState(props.maxHeight);
  const [maxWidth, setMaxWidth] = useState(props.maxWidth);
  const [showEditor, setShowEditor] = useState(true);

  const [editingHeight, setEditingHeight] = useState(false);
  const [editingWidth, setEditingWidth] = useState(false);
  const [editingColor, setEditingColor] = useState(false);

  function handleSave() {
    onSave({
      bgColor,
      height,
      width,
      radius,
      maxHeight,
      maxWidth,
    });
  }

  return (
    <div>
      <FaPen
        onClick={() => setEditingColor(true)}
        style={{ cursor: "pointer" }}
      />
      {editingColor && (
        <div className="container-editor-color">
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          />
          <FaCheck
            onClick={() => {
              setEditingColor(false);
              handleSave();
            }}
            style={{ cursor: "pointer" }}
          />
          <FaTimes
            onClick={() => setEditingColor(false)}
            style={{ cursor: "pointer" }}
          />
        </div>
      )}
    </div>
    // <div
    // onMouseOver={() => setShowEditor(true)}
    // onMouseLeave={() => setShowEditor(false)}
    // >
    //   {showEditor && (
    //     <div className="container-editor">
    //       <FaPen
    //         onClick={() => setEditingColor(true)}
    //         style={{ cursor: "pointer" }}
    //       />
    //       {editingColor && (
    //         <div className="container-editor-color">
    //           <input
    //             type="color"
    //             value={bgColor}
    //             onChange={(e) => setBgColor(e.target.value)}
    //           />
    //           <FaCheck
    //             onClick={() => {
    //               setEditingColor(false);
    //               handleSave();
    //             }}
    //             style={{ cursor: "pointer" }}
    //           />
    //           <FaTimes
    //             onClick={() => setEditingColor(false)}
    //             style={{ cursor: "pointer" }}
    //           />
    //         </div>
    //       )}
    //       <FaPen
    //         onClick={() => setEditingHeight(true)}
    //         style={{ cursor: "pointer" }}
    //       />
    //       {editingHeight && (
    //         <div className="container-editor-height">
    //           <input
    //             type="number"
    //             value={height}
    //             onChange={(e) => setHeight(e.target.value)}
    //           />
    //           <FaCheck
    //             onClick={() => {
    //               setEditingHeight(false);
    //               handleSave();
    //             }}
    //             style={{ cursor: "pointer" }}
    //           />
    //           <FaTimes
    //             onClick={() => setEditingHeight(false)}
    //             style={{ cursor: "pointer" }}
    //           />
    //         </div>
    //       )}
    //       <FaPen
    //         onClick={() => setEditingWidth(true)}
    //         style={{ cursor: "pointer" }}
    //       />
    //       {editingWidth && (
    //         <div className="container-editor-width">
    //           <input
    //             type="number"
    //             value={width}
    //             onChange={(e) => setEditingWidth(e.target.value)}
    //           />
    //           <FaCheck
    //             onClick={() => {
    //               setEditingWidth(false);
    //               handleSave();
    //             }}
    //             style={{ cursor: "pointer" }}
    //           />
    //           <FaTimes
    //             onClick={() => setEditingWidth(false)}
    //             style={{ cursor: "pointer" }}
    //           />
    //         </div>
    //       )} </div>
    //   )}
    //   </div>
  );}
