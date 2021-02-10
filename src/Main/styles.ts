import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const Content = styled.div`
  min-height: 80vh;
  width: 65%;
  border-radius: 2.5rem;
  /* background-color: rgba(255, 255, 255, 0.2); */
  background-color: transparent;
  z-index: 5;
  box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.2),
    0 6px 20px 0 rgba(255, 255, 255, 0.19);

  display: grid;
  grid-template-columns: 25% 75%;
`;

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 2.5rem 0 0 2.5rem;
  padding: 8px;

  .profile {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding: 0.5rem;
    color: green;

    img {
      width: 5rem;
      height: 5rem;
      border-radius: 2.5rem;
      margin-bottom: 4px;
    }

    p {
      max-width: 6rem;
    }
  }

  .menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    padding: 1rem;
    min-height: 16rem;
    width: 100%;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 2rem;
      background: #82f0a9;
      width: 80%;
      border-radius: 0.5rem;
      transition: background-color 0.2s;
      cursor: pointer;

      &:hover {
        background-color: #7cd782;
        color: #fff;
      }
    }
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;

  h1 {
    color: #434343;
  }

  .items {
    list-style: none;
    width: 100%;

    .item-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #fff;
      max-height: 5rem;
      border-radius: 0.5rem;
      padding: 1rem;
      width: 100%;

      img {
        width: 4rem;
        height: 4rem;
        border-radius: 2rem;
        margin-right: 0.5rem;
      }

      p {
        max-width: 90%;
        color: green;
      }

      & + li {
        margin-top: 0.5rem;
      }
    }
  }
`;
