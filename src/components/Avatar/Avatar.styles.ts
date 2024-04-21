import styled from "styled-components";
import { theme } from "../../styles/colors";

const { colors } = theme;

interface IAvatarStylesProps {
  width?: string;
  height?: string;
  marginTop?: string;
  enableStyledBorder?: boolean;
}

export const ContainerAvatar = styled.img<IAvatarStylesProps>`
  width: ${({ width }) => (width ? width : "100px")};
  height: ${({ height }) => (height ? height : "100px")};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "-3rem")};
  border-radius: 10px;
  border: ${({ enableStyledBorder }) =>
    enableStyledBorder ? `4px solid ${colors.black}` : ""};
  outline: ${({ enableStyledBorder }) =>
    enableStyledBorder ? `4px solid ${colors.green500}` : ""};
  object-fit: cover;
`;
