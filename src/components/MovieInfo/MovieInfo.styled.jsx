import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const Container = styled.main`
    padding: 0 30px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: #303f9f;
    border-bottom: 1px solid #303f9f;
  }
`;

export const LinkList = styled.ul`
    list-style: none;
    padding: 0;
`;

export const LinkListItem = styled.li`
    margin-bottom: 10px;
`;

export const Image = styled.img`
    display: block;
    padding: 0;
    margin: 0;
    width: 400px;
    height: 500px;
`;

export const Button = styled.button`
    padding: 8px 16px;
    margin-bottom: 20px;
    border-radius: 2px;
    background-color: #3f51b5;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    text-align: center;
    display: inline-block;
    color: #fff;
    border: 0;
    text-decoration: none;
    cursor: pointer;
    font-family: inherit;
    font-size: 18px;
    line-height: 24px;
    font-style: normal;
    font-weight: 500;
    min-width: 180px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    :hover,
    :focus {
        background-color: #303f9f;
    }
`;

export const MovieDetailsContainer = styled.div`
    display: flex;
`;

export const MovieInfoContainer = styled.div`
    margin-left: 30px;
`;

export const MovieTitle = styled.h2`
    margin-bottom: 40px;
`;

export const Info = styled.p`
    margin-bottom: 30px;
`;

export const Title = styled.h3`
    margin-bottom: 20px;
`;

export const Genres = styled.p`
    margin-bottom: 100px;
`;