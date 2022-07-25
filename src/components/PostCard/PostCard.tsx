import React, { FC, useState } from 'react';

import Button, { ButtonStyle } from 'components/Button/Button';
import ThumbsUp from '../../assets/svg/post/Icon-Thumbs-Up.svg';
import ThumbsDown from '../../assets/svg/post/Icon-Thumbs-Down.svg';
import Bookmark from '../../assets/svg/post/Icon-Bookmark.svg';
import More from '../../assets/svg/post/Icon-More-Horizontal.svg';
import {
  PostContainer,
  PostControls,
  PostDate,
  PostImage,
  PostTitle,
  ThumbsContainer
} from './postCard.styled';
import { Post } from './PostList';

interface PostItemProps {
  post: Post;
}

const PostCard: FC<PostItemProps> = ({ post }) => {
  const [likes, setLikes] = useState(0);
  return (
    <PostContainer>
      <PostImage src={post.image} />
      <PostDate>{post.date}</PostDate>
      <PostTitle>{post.title}</PostTitle>
      <PostControls>
        <ThumbsContainer>
          <Button
            buttonStyle={ButtonStyle.Outline}
            svg={ThumbsUp}
            onClick={() => setLikes(likes + 1)}
          />
          <div style={{ margin: 'auto' }}>{likes}</div>
          <Button
            buttonStyle={ButtonStyle.Outline}
            svg={ThumbsDown}
            onClick={() => setLikes(likes - 1)}
          />
        </ThumbsContainer>
        <div>
          <Button
            buttonStyle={ButtonStyle.Outline}
            svg={Bookmark}
          />
          <Button
            buttonStyle={ButtonStyle.Outline}
            svg={More}
          />
        </div>
      </PostControls>
    </PostContainer>
  );
};
export default PostCard;
