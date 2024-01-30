import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import styled from "styled-components";

type Comment = {
  name: string;
};

function IntersectionObserver() {
  const [items, setItems] = useState<Comment[]>([]); // 데이터
  const [page, setPage] = useState(1); // 페이지
  const [ref, inView] = useInView(); //ref -> dom을 변수에 저장
  const [loading, setLoading] = useState(false);

  const fetchItems = () => {
    setLoading(true);
    axios
      .get(
        `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=20`
      )
      .then((res) => {
        setItems(items.concat(res.data));
        setPage((prev) => prev + 1);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (inView && page > 1) {
      console.log(inView, "무한 스크롤 요청");
      fetchItems();
    }
  }, [inView]);

  // 초기 렌더링 시 데이터 로드
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <Container>
      <Title>Intersection Observer</Title>
      {items.map((item, index) => (
        //스크롤 기준이 아닌 마지막 dom이 보였을때 실행
        <Text key={index} ref={index === items.length - 1 ? ref : null}>
          {item.name}
        </Text>
      ))}
      {loading && <Loading>Loading...</Loading>}
    </Container>
  );
}

export default IntersectionObserver;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #007bff;

  width: 100%;
  height: 50px;

  position: sticky;
  top: 0px;

  background-color: #65b5ff;
  border: 2px solid #007bff;
  box-sizing: border-box;
`;

const Text = styled.div`
  width: 600px;
  height: 40px;
  background-color: #fcfcfc;
  border: 1px solid #d4d4d4;
  border-radius: 4px;
  box-sizing: border-box;
  margin: 10px 5px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = styled.div`
  margin: 10px 5px;

  color: #ff7676;
`;
