import React, { FC } from 'react';
import { PostsResponse, fetchPosts } from '../../api/fechPosts';
import PostCard from './PostCard';
import { Container, PostListContainer } from './postCard.styled';

export interface Post {
  id: number;
  image?: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  author: number;
}

export interface PostListProps {
  post: Post[];
}

const PostList: FC<PostListProps> = () => {
  const [postsPerPage] = React.useState(9);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsData, setPostsData] = React.useState<PostsResponse>({
    next: null,
    previous: null,
    count: 0,
    results: []
  });

  React.useEffect(() => {
    fetchPosts({
      limit: postsPerPage,
      offset: postsPerPage * (currentPage - 1)
    })
      .then((response) => {
        setPostsData(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [postsPerPage, currentPage]);

  return (
    <Container>
      <PostListContainer>
        {postsData.results.map((post) => (
          <PostCard
            key={post.id}
            post={post}
          />
        ))}
      </PostListContainer>
    </Container>
  );
};

export default PostList;
