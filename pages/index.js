import React from "react";
import Link from "next/link";

import styled from "styled-components";
import { Spring } from "react-spring";

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

const index = () => {
  return (
    <div>
      <Link href="/challenges/017-email-receipt">
        <a>Test</a>
      </Link>

      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {props => <Title style={props}>Test</Title>}
      </Spring>
    </div>
  );
};

export default index;
