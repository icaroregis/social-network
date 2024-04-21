import { Avatar } from "../Avatar";
import FotoPerfil from "../../assets/foto-perfil.jpeg";
import { ThumbsUp, Trash } from "@phosphor-icons/react";
import {
  AuthorAndTime,
  CommentBox,
  CommentContainer,
  CommentContent,
  Time,
} from "./Comment.styles";
import { convertPixelsToRem } from "../../utils/convertPixelsToRem";
import { ICommentProps } from "./Comment.types";
import { useState } from "react";

export function Comment({ content, onDeleteComment }: ICommentProps) {
  const [like, setLike] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <CommentContainer>
      <Avatar
        marginTop={"0px"}
        imagePath={FotoPerfil}
        width={convertPixelsToRem(48)}
        height={convertPixelsToRem(48)}
        enableStyledBorder={false}
      />

      <CommentBox>
        <CommentContent>
          <header>
            <AuthorAndTime>
              <strong>Ícaro Almeida</strong>

              <Time
                title="13 de maio de 2024 as 23:58"
                dateTime="2024-03-15 23:58:30"
              >
                Cerca de uma hora atrás
              </Time>
            </AuthorAndTime>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </CommentContent>

        <footer>
          <button onClick={() => setLike(like + 1)}>
            <ThumbsUp /> Aplaudir <span>{like}</span>
          </button>
        </footer>
      </CommentBox>
    </CommentContainer>
  );
}
