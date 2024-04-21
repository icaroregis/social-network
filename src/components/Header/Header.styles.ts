import styled from "styled-components";
import { theme } from "../../styles/colors";

const { colors } = theme;

export const ContainerHeader = styled.div`
  background: ${colors.gray800};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 0;

  > img {
    height: 2rem;
  }
`;
