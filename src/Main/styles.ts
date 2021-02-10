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
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 2.5rem 0 0 2.5rem;

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
    justify-content: center;
    list-style: none;
    padding: 0.5rem;
    min-height: 6rem;
    background: grey;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
