import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <Wrap>
        <Link to='/scrollevent' style={{ textDecoration: "none" }}>
          <LinkWrap>
            <TextStyle>Scroll Event</TextStyle>
          </LinkWrap>
        </Link>

        <Link
          to='/intersectionobserver'
          style={{ textDecoration: "none" }}
          className='link'
        >
          <LinkWrap>
            <TextStyle>Intersection Observer</TextStyle>
          </LinkWrap>
        </Link>
      </Wrap>

      <Wrap>
        <Link
          to='/autocomplete'
          style={{ textDecoration: "none" }}
          className='link'
        >
          <LinkWrap>
            <TextStyle>Auto Complete</TextStyle>
          </LinkWrap>
        </Link>

        <Link to='' style={{ textDecoration: "none" }} className='link'>
          <LinkWrap>
            <TextStyle>none</TextStyle>
          </LinkWrap>
        </Link>
      </Wrap>

      <Wrap>
        <Link to='' style={{ textDecoration: "none" }} className='link'>
          <LinkWrap>
            <TextStyle>none</TextStyle>
          </LinkWrap>
        </Link>

        <Link to='' style={{ textDecoration: "none" }} className='link'>
          <LinkWrap>
            <TextStyle>none</TextStyle>
          </LinkWrap>
        </Link>
      </Wrap>

      <Wrap>
        <Link to='' style={{ textDecoration: "none" }} className='link'>
          <LinkWrap>
            <TextStyle>none</TextStyle>
          </LinkWrap>
        </Link>

        <Link to='' style={{ textDecoration: "none" }} className='link'>
          <LinkWrap>
            <TextStyle>none</TextStyle>
          </LinkWrap>
        </Link>
      </Wrap>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  link:hover {
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkWrap = styled.div`
  width: 300px;
  height: 50px;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  margin: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #74b3ffe2;
  }
`;

const TextStyle = styled.div`
  font: 20px;
  font-weight: bold;
  color: black;
`;
