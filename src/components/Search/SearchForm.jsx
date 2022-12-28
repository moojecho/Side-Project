import styled from "styled-components";
import { Button } from "../Button";
import { forwardRef } from "react";

const SearchForm = ({ onClick }, ref) => {
  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        ref={ref}
        placeholder="띄어쓰기를 지켜주세요"
        onKeyPress={handleOnKeyPress}
      />
      <Button type="button" onClick={onClick}>
        검색
      </Button>
    </Form>
  );
};

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20%;
  input {
    width: 700px;
    height: 15vh;
    font-size: 3em;
    border-radius: 8px;
    border: 1px solid black;
  }

  button {
    font-size: 3em;
    height: 15vh;
  }
`;

export default forwardRef(SearchForm);
