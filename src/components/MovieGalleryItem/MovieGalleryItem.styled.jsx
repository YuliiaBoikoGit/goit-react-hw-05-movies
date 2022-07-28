import styled from '@emotion/styled';

export const MovieGalleryItem = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  :hover {
    transform: scale(1.03);
  }
`;

export const MovieGalleryItemImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;

export const MovieGalleryItemTitle = styled.p`
  margin: 0;
  padding: 35px 0;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  height: 24px;
`;