import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
margin: 50px auto;
  max-width: 500px;
  text-align: center;
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

  input{
    height:58px;
    background: rgba(250, 250, 250, 1);
    margin: 0 0 10px;
    border: 0px;
    border-radius: 4px;
    padding: 0 15px;
    color: #000000;
    font-size: 14px;
    opacity: 0.85;
  }
`;
