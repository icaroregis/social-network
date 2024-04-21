type IAuthorProps = {
  avatarUrl: string;
  name: string;
  role: string;
};

type IContentTypeProps = "paragraph" | "link";

export type IContentProps = {
  id: number;
  type: IContentTypeProps;
  content: string;
};

export interface IPostProps {
  id?: number;
  author: IAuthorProps;
  content: IContentProps[];
  publishedAt: Date;
}
