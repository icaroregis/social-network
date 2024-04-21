import { Post } from "../../components/Post";
import { Header } from "../../components/Header";
import FotoPerfil2 from "../../assets/christian.jpeg";
import FotoPerfil from "../../assets/foto-perfil.jpeg";
import { ContainerHeader, Wrapper } from "./Home.styles";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { IPostProps } from "../../components/Post/Post.types";

export function Home() {
  const posts: IPostProps[] = [
    {
      id: 1,
      author: {
        avatarUrl: FotoPerfil,
        name: "Ícaro Almeida",
        role: "Desenvolvedor Fullstack JR.",
      },
      content: [
        { id: 1, type: "paragraph", content: "Fala galeraa 👋" },
        {
          id: 2,
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { id: 3, type: "link", content: "👉 jane.design/doctorcare" },
      ],
      publishedAt: new Date("2024-05-03 20:00:00"),
    },
    {
      id: 2,
      author: {
        avatarUrl: FotoPerfil2,
        name: "Christian Régis",
        role: "Desenvolvedor Fullstack SR.",
      },
      content: [
        { id: 1, type: "paragraph", content: "Fala galeraa 👋" },
        {
          id: 2,
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { id: 3, type: "link", content: "👉 jane.design/doctorcare" },
      ],
      publishedAt: new Date("2024-05-10 21:00:00"),
    },
  ];

  return (
    <ContainerHeader>
      <Header />

      <Wrapper>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                publishedAt={post.publishedAt}
                content={post.content}
              />
            );
          })}
        </main>
      </Wrapper>
    </ContainerHeader>
  );
}
