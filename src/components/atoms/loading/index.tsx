import React from "react";
import styled from "styled-components";

const StyledLoading = styled.div<{ image: string; size: number }>`
  background-image: url(${(props) => props.image});
  background-size: cover;

  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;

type Props = {
  size: number;
};

function Loading(props: Props) {
  return (
    <StyledLoading
      image="/images/preloader.gif"
      size={props.size || 50}
    ></StyledLoading>
  );
}

export default Loading;
