import styled from "styled-components";
import { theme } from "../../styles/colors";

const { colors } = theme;

export const ContainerSidebar = styled.div`
  background: ${colors.gray800};
  border-radius: 8px;
  overflow: hidden;

  aside {
    > img {
      width: 100%;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    margin-top: 20px;
    color: ${colors.gray100};
    line-height: 1.6;
  }

  span {
    font-size: 0.875rem;
    color: ${colors.gray400};
    line-height: 1.6;
  }
`;

export const Footer = styled.footer`
  border-top: 1px solid ${colors.gray600};
  margin-top: 1.5rem;
  padding: 1.5rem 2rem 2rem;
  display: flex;

  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-left: 30px;
    background: transparent;
    color: ${colors.green500};
    border: 1px solid ${colors.green500};
    border-radius: 8px;
    position: relative;
    height: 50px;
    transition: color 0.2s, background-color 0.2s;
  }

  a::before {
    content: url("./pencil.svg");
    position: absolute;
    top: 50%;
    left: 21px;
    transform: translateY(-50%);
  }

  a:hover {
    background-color: ${colors.green500};
    color: ${colors.white};
  }
`;
