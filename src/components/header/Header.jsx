import React from 'react';
import { HeaderStyled, Wrapper } from './HeaderStyled.styled';
import TabLink from 'components/TabLink';
const Header = ({ tabsList }) => {
  return (
    <HeaderStyled>
      <Wrapper>
        {tabsList.map(tab => {
          if (tab.order === 0) {
            return <TabLink key={tab.id} id={'/'} title={tab.title} />;
          }
          return <TabLink key={tab.id} id={tab.id} title={tab.title} />;
        })}
      </Wrapper>
    </HeaderStyled>
  );
};

export default Header;
