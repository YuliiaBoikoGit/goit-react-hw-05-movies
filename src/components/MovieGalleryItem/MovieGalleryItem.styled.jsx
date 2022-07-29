import styled from '@emotion/styled';
import { Link } from "react-router-dom";

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
  height: 440px;
  object-fit: contain;
`;

export const MovieGalleryItemTitle = styled.p`
  margin: 0;
  padding: 35px 0;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  height: 24px;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;