import React from "react";

import { Container, Content, SideBar, MainContent } from "./styles";

const Main: React.FC = () => {
  return (
    <Container>
      <Content>
        <SideBar>
          <div className="profile">
            <img
              src="https://avatars.githubusercontent.com/u/33661312?s=460&u=a140ec4f9f80ce1bcbcbf4229ad38c83da447040&v=4"
              alt="avatar"
            />
            <strong className="name">My name</strong>
            <p className="description">Collaborator</p>
          </div>

          <ul className="menu">
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
            <li>Fifth</li>
            <li>Sixth</li>
          </ul>
        </SideBar>
        <MainContent>
          <h1>MainContent</h1>
        </MainContent>
      </Content>
    </Container>
  );
};

export default Main;
