import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { throttle } from "lodash";

function App() {
  const [items, setItems] = useState([]); //데이터
  const [page, setPage] = useState(1); //페이지
  const [loading, setLoading] = useState(false); //로딩상태

  const url = `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=20`; //_page는 현재 페이지, _limit는 한 페이지에 표시할 아이템 수

  const fetchData = useCallback(async () => {
    //useCallback을 사용하므로써 url이 변화될 때만 함수가 실행되어 불필요한 함수의 생성 및 실행을 막을 수 있다고 한다.
    setLoading(true);

    try {
      const response = await axios.get(url);
      const data = response.data;

      setItems(items.concat(data));
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  }, [url]);

  const onScroll = throttle(() => {
    //이벤트를 일정주기마다 발생하도록 함, 300ms 동안 최대 한번만 발생하게 됨

    const scrollTop = document.documentElement.scrollTop; //사용자가 보는 페이지와 원래 페이지의 최상단과의 차이
    const clientHeight = document.documentElement.clientHeight; //사용자가 지금 보는 높이
    const scrollHeight = document.documentElement.scrollHeight; //화면의 높이값

    if (!loading && scrollTop + clientHeight >= scrollHeight) {
      setPage((prev) => prev + 1);
    }
  }, 300);

  useEffect(() => {
    fetchData();
  }, [page]); //page가 바뀔때마다 fetchData 실행

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]); //의존성?

  return (
    <Container>
      <Title>Infinite Scroll</Title>
      {items.map((item, index) => (
        <Item key={index}>
          <Text>{item.email}</Text>
        </Item>
      ))}
      {loading && <Loading>Loading...</Loading>}
    </Container>
  );
}

export default App;

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

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 350px;
  height: 40px;
  background-color: #fcfcfc;
  border: 1px solid #d4d4d4;
  border-radius: 4px;
  box-sizing: border-box;
  margin: 10px 5px;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = styled.div`
  margin: 10px 5px;

  color: #ff7676;
`;
