import { FormEvent, useState } from "react";
import { Avatar } from "../Avatar";
import {
  ContainerPost,
  Author,
  AuthorInfo,
  Content,
  Header,
  Paragraph,
  Time,
  CommentForm,
  CommentList,
} from "./Post.styles";
import { Comment } from "../Comment";
import { ptBR } from "date-fns/locale";
import { Link } from "react-router-dom";
import { IPostProps } from "./Post.types";
import "react-toastify/dist/ReactToastify.css";
import { format, formatDistanceToNow } from "date-fns";

export function Post({ author, publishedAt, content }: IPostProps) {
  //Estado = Variáveis que eu quero que o componente monitore.
  const [newCommentText, setNewCommentText] = useState("");
  const [comments, setComments] = useState([
    "Muito bom Devon Larrat, parabéns pela belíssima vitória!! 👏👏",
  ]);
  const pusblishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function deleteComment(commentToDelete: string) {
    const filterComments = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComments(filterComments);
  }

  return (
    <ContainerPost>
      <Header>
        <Author>
          <Avatar
            imagePath={author.avatarUrl}
            width={"70px"}
            height={"70px"}
            marginTop={"0px"}
          />

          <AuthorInfo>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </AuthorInfo>
        </Author>

        <Time
          title={pusblishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </Time>
      </Header>

      <Content>
        {content.map((line) => {
          switch (line.type) {
            case "paragraph":
              return <Paragraph key={line.id}>{line.content}</Paragraph>;
            case "link":
              return (
                <Paragraph key={line.id}>
                  <Link to="#">{line.content}</Link>
                </Paragraph>
              );
            default:
              return null;
          }
        })}
      </Content>

      <CommentForm onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          value={newCommentText}
          placeholder="Deixe um comentário"
          onChange={(e) => setNewCommentText(e.target.value)}
        />

        <footer>
          <button type="submit" disabled={newCommentText.trim() === ""}>
            Publicar
          </button>
        </footer>
      </CommentForm>

      <CommentList>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </CommentList>
    </ContainerPost>
  );
}
