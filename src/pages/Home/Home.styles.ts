import styled from "styled-components";
import { convertPixelsToRem } from "../../utils/convertPixelsToRem";

export const ContainerHeader = styled.div``;

export const Wrapper = styled.div`
  max-width: 70rem;
  margin: 2rem auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 256px 1fr;
  gap: 2rem;
  align-items: flex-start;

  > main {
    display: flex;
    flex-direction: column;
    gap: ${convertPixelsToRem(20)};
  }

  @media (max-width: 768px) {
    html {
      //16 => 100%
      //14 => x
      //14*100/16
      font-size: 87.5%;
    }

    grid-template-columns: 1fr;
  }
`;
