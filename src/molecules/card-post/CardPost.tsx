import type { FC } from "react";
import BoxContainer from "../../atoms/box";
import BaseCard from "../../atoms/base-card";
import Button from "../../atoms/button";
import Avatar from "../../atoms/avatar";

interface CardPostProps {
  author: {
    name: string;
    avatarUrl?: string;
    time: string;
  };
  content: string;
  image?: string;
  stats: {
    likes: number;
    comments: number;
    shares: number;
  };
}

const CardPost: FC<CardPostProps> = ({ author, content, image, stats }) => {
  return (
    <BoxContainer 
      variant="default" 
      radius="lg" 
      shadow="sm" 
      padding="none"
      className="card-post"
    >
      <BaseCard
        header={
          <div className="card-post__header-inner">
            <Avatar
              src={author.avatarUrl}
              alt={author.name}
              fallback={author.name}
              size="md"
              shape="circle"
            />
            <div className="card-post__info">
              <h4 className="card-post__name">{author.name}</h4>
              <span className="card-post__time">{author.time}</span>
            </div>
          </div>
        }

        body={<div className="card-post__content">{content}</div>}
        
        media={image && <img src={image} alt="post" className="card-post__img" />}
        
        counters={
          <div className="card-post__stats">
            <span>{stats.likes} Likes</span>
            
            <span>{stats.comments} Comments</span>
          </div>
        }
        
        actions={
          <div className="card-post__btns">
            <Button className="card-post__btn">Like</Button>
            
            <Button className="card-post__btn">Comment</Button>
          </div>
        }
      />
    </BoxContainer>
  );
};

export default CardPost;
