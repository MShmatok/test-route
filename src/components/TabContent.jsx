import React, { Suspense } from 'react';
import {
  SectionStyled,
  WrapperPagePartStyled,
} from './commonStyled/SectionStyled.styled';

const TabContent = ({ path }) => {
  const Component = React.lazy(() => import(`../components/${path}`));

  return (
    <SectionStyled>
      <WrapperPagePartStyled>
        <Suspense fallback={<div>Loading...</div>}>
          <Component />
        </Suspense>
      </WrapperPagePartStyled>
    </SectionStyled>
  );
};
export default TabContent;
