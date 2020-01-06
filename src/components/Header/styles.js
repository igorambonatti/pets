import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #fff;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Content = styled.div`
  height: 60px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  max-width: auto;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #6190e8;
    }
    a {
      font-weight: bold;
      color: #6190e8;
      font-size: 18px;
    }
  }
  aside {
    display: flex;
  }
`;

export const Badge = styled.button`
  border: none;
  background: none;
`;
