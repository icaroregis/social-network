import { Link } from "react-router-dom";
import logoUser from "../../assets/userBackground.svg";
import FotoPerfil from "../../assets/foto-perfil.jpeg";
import { ContainerSidebar, Footer, Profile } from "./Sidebar.styles";
import { Avatar } from "../Avatar";

export function Sidebar() {
  return (
    <ContainerSidebar>
      <aside>
        <img src={logoUser} />

        <Profile>
          <Avatar imagePath={FotoPerfil} />

          <strong>Ícaro Régis</strong>
          <span>Desenvolvedor Frontend Pleno</span>
        </Profile>

        <Footer>
          <Link to="#">
            <strong>Editar seu Perfil</strong>
          </Link>
        </Footer>
      </aside>
    </ContainerSidebar>
  );
}
