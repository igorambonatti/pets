import styled from 'styled-components';

export const Container = styled.div``;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const View = styled.div`
  div {
    margin: auto;
    height: 300px;
    max-width: 350px;
    width: 100%;
    background: #696969;
    align-content: center;
  }
  height: 100%;
  background: #fff;
  padding: 50px;
  opacity: 1;
  width: 50%;
  margin-top: 80px;
  h1 {
    margin-top: 25px;
    font-size: 20px;
    font-weight: normal;
    strong {
      font-size: 30px;
    }
  }
  h2 {
    margin-top: 15px;
    font-size: 20px;
    font-weight: normal;
    strong {
      font-size: 25px;
    }
  }
  h3 {
    font-size: 20px;
    margin-top: 15px;
    font-weight: normal;
    strong {
      font-size: 25px;
    }
  }
`;
