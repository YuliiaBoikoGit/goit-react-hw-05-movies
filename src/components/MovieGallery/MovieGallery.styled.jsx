import styled from '@emotion/styled';

export const Gallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  padding: 20px 0;
  list-style: none;
  margin-top: 0;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.h1`
  margin: 0 auto;
  padding: 0;
`;