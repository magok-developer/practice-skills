import { useEffect, useState } from "react";
import styled from "styled-components";
import { IoIosClose, IoIosArrowDown } from "react-icons/io";

const AutoComplete = () => {
  const datas = [
    "Leanne Graham",
    "Ervin Howell",
    "Clementine Bauch",
    "Patricia Lebsack",
    "Chelsey Dietrich",
    "Mrs. Dennis Schulist",
    "Kurtis Weissnat",
    "Nicholas Runolfsdottir V",
    "Glenna Reichert",
    "Clementina DuBuque",
  ];

  const [inputValue, setInputValue] = useState(""); // input value
  const [options, setOptions] = useState(datas); // select box option
  const [visible, setVisible] = useState(false); // dropdown visible
  const [searchType, setSearchType] = useState("input"); // input, select box type

  useEffect(() => {
    setOptions(
      datas.filter(
        // input 입력 시 data에 있는 값 중 입력된 값을 포함하는 option만 걸러준 상태로 변경됨
        (data) => data.toLowerCase().includes(inputValue.toLowerCase()) // 대소문자 구분 없음
      )
    );
  }, [inputValue]); // inputValue가 변경 될 때 마다 실행

  // input change 이벤트
  const handleInputChange = (e: any) => {
    const value = e.target.value;
    setInputValue(value);
    setVisible(value !== ""); // input이 비어있지 않은 경우에만 visible을 true로
  };

  // dropdown option click 이벤트
  const handleDropDownClick = (clickedOption: string) => {
    setInputValue(clickedOption); // click한 option으로 inputValue 변경
    setVisible(false); // 선택 후 dropdown 보이지 않게함
  };

  // input 내용 remove 이벤트
  const handleDeleteButtonClick = () => {
    setInputValue(""); // input 내용 초기화
    setSearchType("input"); // searchType 초기화
    setVisible(false); // visible 초기화 -> 없으면 select를 클릭 하고 delete를 클릭하면 dropdown이 남아있는 상태에서 input으로 변경됨
  };

  // dropdown visible 이벤트 = type 을 select로 변경해주는 이벤트
  const handleDropDownClickVisible = () => {
    setVisible(!visible); // dropdown 보이게함
    setSearchType("select"); // type을 select로 바꿔줌
  };

  return (
    <AutoCompleteContainer>
      <Title>Auto Complete</Title>
      <InputContainer>
        <input
          type='text'
          value={inputValue}
          onChange={handleInputChange}
          readOnly={searchType === "select"} //searchType이 select면 readOnly로 전환
        />

        <IconWrap>
          <IoIosClose
            className='delete-button'
            onClick={handleDeleteButtonClick}
          />

          <IoIosArrowDown
            className='dropdown'
            onClick={handleDropDownClickVisible}
          />
        </IconWrap>
      </InputContainer>

      {visible && ( // visible이 true일 때 dropdown 보이게함
        <DropDownContainer>
          {options.map((option: any, idx: number) => (
            <li key={idx} onClick={() => handleDropDownClick(option)}>
              {option}
            </li>
          ))}
        </DropDownContainer>
      )}
    </AutoCompleteContainer>
  );
};

export default AutoComplete;

const AutoCompleteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Title = styled.h3`
  color: #378aff;
`;

const InputContainer = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  border: 1px solid #e2e2e2;
  box-sizing: border-box;

  input {
    border: none;
    outline: none;
    font-size: 16px;
  }

  .delete-button,
  .dropdown {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    cursor: pointer;
  }

  .dropdown {
    font-size: 14px;
  }
`;

const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DropDownContainer = styled.ul`
  padding-inline-start: 0;
  margin-block-start: 0;
  margin-block-end: 0; // ul 태그에 기본으로 들어가있는 margin, padding 리셋

  width: 300px;
  display: flex;
  flex-direction: column;
  list-style-type: none; // ul 태그 점 없애기
  margin-top: -1px;

  border: 1px solid #e2e2e2;
  box-sizing: border-box;

  li {
    display: flex;
    align-items: center;
    padding: 5px 20px;
    cursor: pointer;
    font-size: 12px;

    &:hover {
      background-color: #d0e8ff;
      transition: 0.3s;
    }
  }
`;
