import { useContext, useState } from "react";
import { EditorContext } from "../../contexts/EditorContext";
import { StyledContainer } from "../Container/styles";
import { ContainerEditor } from "../../components/ContainerEditor";

export function MainContainer({ containerName, cantSize, children, ...props }) {
  const { containers, setContainers } = useContext(EditorContext);
  const container = containers[containerName];

  const [isEditing, setIsEditing] = useState(false);

  function handleSave(updatedProperties) {
    setContainers({
      ...containers,
      [containerName]: { ...container, ...updatedProperties },
    });
  }
  return (
    <StyledContainer
      {...container}
      {...props}
      onMouseEnter={() => setIsEditing(true)}
      onMouseLeave={() => setIsEditing(false)}
    >
      {children}
      {isEditing && (
        <ContainerEditor
          cantSize={cantSize}
          containerName={containerName}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
        />
      )}
    </StyledContainer>
  );
}
