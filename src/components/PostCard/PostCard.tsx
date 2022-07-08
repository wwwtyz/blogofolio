import React from 'react';

import Button from 'components/Button/Button';
import ThumbsUp from '../../assets/svg/post/Icon-Thumbs-Up.svg';
import ThumbsDown from '../../assets/svg/post/Icon-Thumbs-Down.svg';
import Bookmark from '../../assets/svg/post/Icon-Bookmark.svg';
import More from '../../assets/svg/post/Icon-More-Horizontal.svg';
import {
  PostContainer,
  PostControls,
  PostImage,
  ThumbsContainer
} from './postCard.styled';

interface Post {
  id: number;
  image?: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  author: number;
}

const getDate = () => {};

export const PostCard = ({ post }: { post: Post }) => {
  let counter = 0;
  return (
    <PostContainer>
      <PostImage src={post.image} />
      <p>date</p>
      <h2>{post.title}</h2>
      <PostControls>
        <ThumbsContainer>
          <Button image={ThumbsUp} />
          <p>{counter}</p>
          <Button image={ThumbsDown} />
        </ThumbsContainer>
        <div>
          <Button image={Bookmark} />
          <Button image={More} />
        </div>
      </PostControls>
    </PostContainer>
  );
};
