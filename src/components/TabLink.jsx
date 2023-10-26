import React from 'react';
import { LinkStyled } from './header/HeaderStyled.styled';

const TabLink = ({ id, title }) => {
  return (
    <LinkStyled to={id}>
      <span>{title}</span>
    </LinkStyled>
  );
};

export default TabLink;
