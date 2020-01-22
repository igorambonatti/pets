import styled from 'styled-components';

export const Content = styled.div``;

export const Container = styled.div`
  margin: auto;
  display: flex;
  max-width: 1200px;
  ul {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    padding: 30px;
    width: 100%;
  }
`;

export const Info = styled.li`
  height: 350px;
  margin: auto;
  width: 350px;
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  margin-bottom: 25px;

  > div {
    margin: auto;
    min-width: 0px;
    max-width: 380px;
    display: flex;
    background: #696969;
    height: 250px;
    border-radius: 4px;
    align-items: center;
    img {
      margin: auto;
      height: 100%;
    }
  }
  button {
    margin-left: 300px;
  }
  h1 {
    margin-top: 10px;
    font-size: 25px;
  }
  h2 {
    font-size: 14px;
    margin-left: 4px;
    opacity: 0.6;
  }
  a {
    h3 {
      margin-left: 80%;
      color: #000;
      font-size: 15px;
    }
  }
`;
