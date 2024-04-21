import styled from "styled-components";
import { theme } from "../../styles/colors";
import { convertPixelsToRem } from "../../utils/convertPixelsToRem";

const { colors } = theme;

export const ContainerPost = styled.article`
  background-color: ${colors.gray800};
  border-radius: 8px;
  padding: 2.5rem;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Header = styled.header``;

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: ${convertPixelsToRem(16)};
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    color: ${colors.gray100};
    line-height: 1.6;
  }

  span {
    font-size: 0.875rem;
    color: ${colors.gray400};
    line-height: 1.6;
  }
`;

export const Time = styled.time`
  font-size: ${convertPixelsToRem(14)};
  color: ${colors.gray400};
`;

export const Content = styled.time`
  line-height: 1.6;
  color: ${colors.gray300};
  margin-top: 1.5rem;
`;

export const Paragraph = styled.p`
  margin-top: ${convertPixelsToRem(16)};

  > a {
    font-weight: bold;
    color: ${colors.green500};
    text-decoration: none;

    &:hover {
      color: ${colors.green300};
    }
  }
`;

export const CommentForm = styled.form`
  width: 100%;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${colors.gray600};

  > strong {
    line-height: 1.6;
    color: ${colors.gray100};
  }

  textarea {
    width: 100%;
    background: ${colors.gray900};
    border: 0;
    resize: none;
    height: 6rem;
    padding: ${convertPixelsToRem(16)};
    border-radius: ${convertPixelsToRem(8)};
    color: ${colors.gray100};
    line-height: 1.4;
    margin-top: ${convertPixelsToRem(16)};
  }

  &:focus-within footer {
    //para o botão aparecer somente quando for focado no textarea
    visibility: visible;
    max-height: none;
  }

  footer {
    //para o botão aparecer somente quando for focado no textarea
    visibility: hidden;
    max-height: 0;

    > button[type="submit"] {
      padding: 1rem 1.5rem;
      margin-top: ${convertPixelsToRem(16)};
      border-radius: 8px;
      border: 0;
      background: ${colors.green500};
      color: ${colors.white};
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.2s;

      &:not(:disabled):hover {
        background: ${colors.green300};
      }

      &:disabled {
        opacity: 0.2;
        cursor: not-allowed;
      }
    }
  }
`;

export const CommentList = styled.div`
  margin-top: ${convertPixelsToRem(32)};
`;
