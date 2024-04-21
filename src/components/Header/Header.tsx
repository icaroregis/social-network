import { ContainerHeader } from "./Header.styles";
import logo from "/logo.svg";

export function Header() {
  return (
    <ContainerHeader>
      <img src={logo} alt="Logo" />
      <strong>Nitro Feed</strong>
    </ContainerHeader>
  );
}
