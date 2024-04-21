import styled from "styled-components";
import { theme } from "../../styles/colors";
import { convertPixelsToRem } from "../../utils/convertPixelsToRem";

const { colors } = theme;

export const CommentContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
`;

export const CommentBox = styled.div`
  flex: 1;

  footer {
    margin-top: ${convertPixelsToRem(16)};

    button {
      background: transparent;
      border: 0;
      color: ${colors.gray400};
      display: flex;
      align-items: center;
      border-radius: ${convertPixelsToRem(2)};

      &:hover {
        color: ${colors.green300};
      }

      svg {
        margin-right: ${convertPixelsToRem(10)};
      }

      > span::before {
        content: "•";
        padding: 0 0.25rem;
      }
    }
  }
`;

export const CommentContent = styled.div`
  background: ${colors.gray700};
  border-radius: ${convertPixelsToRem(8)};
  padding: ${convertPixelsToRem(16)};

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  button {
    background: transparent;
    border: 0;
    color: ${colors.gray400};
    //para a altura do botão em que o ícone esta contido ser a mesma do ícone
    line-height: 0;
    border-radius: 2px;

    &:hover {
      color: ${colors.red500};
    }
  }

  p {
    margin-top: 1rem;
    color: ${colors.gray300};
  }
`;

export const AuthorAndTime = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-size: ${convertPixelsToRem(14)};
    line-height: 1.6;
  }

  time {
    font-size: ${convertPixelsToRem(12)};
    line-height: 1.6;
    color: ${colors.gray400};
  }
`;

export const Time = styled.time`
  font-size: ${convertPixelsToRem(14)};
  color: ${colors.gray400};
`;
