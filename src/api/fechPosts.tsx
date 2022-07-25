import { Post } from 'components/PostCard/PostList';

const apiPath = `https://studapi.teachmeskills.by/blog/posts/`;

export interface PostsResponse {
  count: number;
  previous: string | null;
  next: string | null;
  results: Post[];
}

export async function getData(url: RequestInfo | URL) {
  let data = await fetch(url);
  let response = await data.json();
  console.log(response);
}

export async function fetchPosts({
  ...params
}: {
  authorId?: number;
  lesson_num?: number;
  limit?: number;
  offset?: number;
  ordering?: string;
  search?: string;
}): Promise<PostsResponse> {
  const queryParams = (Object.keys(params) as (keyof typeof params)[])
    .reduce((acc, key) => {
      const value = params[key];
      if (typeof value !== 'undefined') {
        acc.append(key, `${value}`);
      }
      return acc;
    }, new URLSearchParams())
    .toString();

  const response = await fetch(
    `${apiPath}${queryParams ? `?${queryParams}` : ''}`
  );
  console.log(response);

  if (response.ok) {
    return (await response.json()) as PostsResponse;
  }

  if (response.status === 400) {
    const errors = (await response.json()) as Record<string, string[]>;
    return Promise.reject({
      status: response.status,
      errors
    });
  }

  return Promise.reject({
    status: response.status,
    errors: [{ global: response.statusText }]
  });
}
