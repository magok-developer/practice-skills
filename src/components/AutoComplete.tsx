import React, { useEffect, useState } from "react";
import styled from "styled-components";

const AutoComplete = () => {
  const data = [
    "rustic",
    "antique",
    "vinyl",
    "vintage",
    "refurbished",
    "신품",
    "빈티지",
    "중고A급",
    "중고B급",
    "골동품",
  ];

  const [hasText, setHasText] = useState(false); //input에 값이 있는지 확인하는 용도
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState(data);

  useEffect(() => {
    if (inputValue === "") {
      setHasText(false);
      setOptions([]);
    } else {
      setOptions(
        data.filter((option) => {
          return option.includes(inputValue);
        })
      );
    }
  }, [inputValue]);
  // input을 입력할 때마다, input을 포함(includes)한 요소들만 모아 options 배열 업데이트

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
    setHasText(true);
  };
  // input의 onChange 이벤트 때, 입력값을 inputValue에 저장하고 hasText값 갱신

  // const handleDropDownClick = (clickedOption) => {
  //   setInputValue(clickedOption);
  // };
  // 보여지는 자동완성 값 중 하나를 클릭하면 해당 값이 input에 할당

  const handleDeleteButtonClick = (e: any) => {
    setInputValue("");
  };
  // 삭제 버튼을 누르면, inputValue를 초기화

  return (
    <div className='autocomplete-wrapper'>
      <div>
        <input onChange={handleInputChange} value={inputValue}></input>
        <div className='delete-button' onClick={handleDeleteButtonClick}>
          &times;
        </div>
      </div>
      {/* {hasText && (
        <DropDown options={options} handleComboBox={handleDropDownClick} />
      )} */}
      {/* 입력된 텍스트가 있을 때만 드롭다운이 보여지도록 조건 설정 */}
      {/* 하지 않을시, 아무 것도 입력하지 않은 상태에서도 드롭다운이 보여짐 */}
    </div>
  );
};

export default AutoComplete;
