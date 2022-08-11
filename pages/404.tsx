import { useRouter } from 'next/router';
import React from 'react';
import Button from '../components/atoms/Button';
import FourOFourIcon from '../components/atoms/icons/FourOFourIcon';
import {
  ContentStyles,
  IconWrapper,
} from '../components/templates/FourOFour/FourOFour.styles';

const FourOFourPage = () => {
  const router = useRouter();
  const handleGoHomePage = () => router.replace('/');

  return (
    <section>
      <ContentStyles>
        <IconWrapper>
          <a
            aria-label="resource policy"
            aria-disabled
            href="https://storyset.com/web"
          ></a>
          <FourOFourIcon />
        </IconWrapper>
        <div>
          <Button onClick={handleGoHomePage} type="button">
            <span>&larr; Back To Home Page</span>
          </Button>
        </div>
      </ContentStyles>
    </section>
  );
};

export default FourOFourPage;
