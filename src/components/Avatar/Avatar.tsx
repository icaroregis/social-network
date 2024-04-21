import { IAvatarProps } from "./Avatar.types";
import { ContainerAvatar } from "./Avatar.styles";

export function Avatar({
  imagePath,
  height,
  marginTop,
  width,
  enableStyledBorder = true,
}: IAvatarProps) {
  return (
    <ContainerAvatar
      src={imagePath}
      height={height}
      marginTop={marginTop}
      width={width}
      enableStyledBorder={enableStyledBorder}
    />
  );
}
