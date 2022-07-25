import styled from '@emotion/styled';
import { FontWeight } from 'components/AppThemeProvider/theme';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 100px;
`;

export const PostListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

export const PostContainer = styled.div`
  flex-basis: 30%;

  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 21rem;

  gap: var(--bs-spacing-8);
  padding: var(--bs-spacing-5) 0;
  border-bottom: 1px solid var;
`;

export const PostImage = styled.img`
  display: block;
  max-width: 100%;
  width: auto;
  height: 240px;
`;

export const PostTitle = styled.a`
  font-size: var(--bs-subline-font-size);
  font-weight: var(--bs-subline-font-weight);
  line-height: var(--bs-subline-line-height);
`;

export const PostDate = styled.div`
  color: var(--bs-color-text-disabled);
  font-weight: ${FontWeight.Regular};
  font-size: 14px;
`;
export const PostControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ThumbsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
