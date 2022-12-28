import axios from "axios";
import { useEffect } from "react";
import { useRef, useState } from "react";
import styled from "styled-components";
import { api } from "../../shared/api";
import SearchForm from "./SearchForm";
import SearchResult from "./SearchResult";

const Search = () => {
  const searchRef = useRef();
  const [datas, setDatas] = useState(null);
  const handleSearch = (e) => {
    const contentName = searchRef.current.value;
    console.log(contentName);
    api
      .get(`/api/movie/search?contentName=${contentName}`)
      .then((res) => setDatas(res.data));
  };
  useEffect(() => {
    console.log(datas);
  }, [datas]);
  return (
    <DivSearch>
      <SearchForm ref={searchRef} onClick={handleSearch} />
      {datas && (
        <DivFlex>
          <SearchResult data={datas.data} />
        </DivFlex>
      )}
    </DivSearch>
  );
};

const DivSearch = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 3em;
  }
  small {
    font-size: 0.5em;
  }
`;

const DivFlex = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 35%;
  align-items: center;
`;

export default Search;
