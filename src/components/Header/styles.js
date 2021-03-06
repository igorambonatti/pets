import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  margin: 0 auto;
`;

export const Content = styled.div`
  max-width: 1200px;

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
