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
          <h1>Collaborations</h1>

          <ul className="items">
            <li className="item-container">
              <img
                src="https://images.pexels.com/photos/6158918/pexels-photo-6158918.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Project avatar"
              />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aperiam, accusamus voluptates deserunt nostrum sed assumenda
                esse voluptatibus non ut iste.
              </p>
            </li>

            <li className="item-container">
              <img
                src="https://images.pexels.com/photos/6158918/pexels-photo-6158918.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Project avatar"
              />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aperiam, accusamus voluptates deserunt nostrum sed assumenda
                esse voluptatibus non ut iste.
              </p>
            </li>

            <li className="item-container">
              <img
                src="https://images.pexels.com/photos/6158918/pexels-photo-6158918.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Project avatar"
              />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aperiam, accusamus voluptates deserunt nostrum sed assumenda
                esse voluptatibus non ut iste.
              </p>
            </li>

            <li className="item-container">
              <img
                src="https://images.pexels.com/photos/6158918/pexels-photo-6158918.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Project avatar"
              />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aperiam, accusamus voluptates deserunt nostrum sed assumenda
                esse voluptatibus non ut iste.
              </p>
            </li>

            <li className="item-container">
              <img
                src="https://images.pexels.com/photos/6158918/pexels-photo-6158918.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Project avatar"
              />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aperiam, accusamus voluptates deserunt nostrum sed assumenda
                esse voluptatibus non ut iste.
              </p>
            </li>

            <li className="item-container">
              <img
                src="https://images.pexels.com/photos/6158918/pexels-photo-6158918.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Project avatar"
              />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aperiam, accusamus voluptates deserunt nostrum sed assumenda
                esse voluptatibus non ut iste.
              </p>
            </li>

            <li className="item-container">
              <img
                src="https://images.pexels.com/photos/6158918/pexels-photo-6158918.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Project avatar"
              />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aperiam, accusamus voluptates deserunt nostrum sed assumenda
                esse voluptatibus non ut iste.
              </p>
            </li>
          </ul>
        </MainContent>
      </Content>
    </Container>
  );
};

export default Main;
