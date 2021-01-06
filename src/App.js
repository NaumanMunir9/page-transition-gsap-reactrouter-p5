import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home/Home.page";
import About from "./pages/About/About.page";
import Header from "./components/Header/Header.component";
import { CSSTransition } from "react-transition-group";
import "./App.scss";
import gsap from "gsap";

const routes = [
  {
    path: "/",
    name: "Home",
    Component: Home,
  },
  {
    path: "/about",
    name: "About",
    Component: About,
  },
];

function App() {
  const onEnter = (node) => {
    // enter transition
    gsap.from(
      [node.children[0].firstElementChild, node.children[0].lastElementChild],
      0.6,
      {
        y: 30,
        delay: 0.6,
        ease: "power3.InOut",
        opacity: 0,
        stagger: {
          amount: 0.6,
        },
      }
    );
  };

  const onExit = (node) => {
    // exit transition
    gsap.to(
      [node.children[0].firstElementChild, node.children[0].lastElementChild],
      0.6,
      {
        y: -30,
        ease: "power3.InOut",
        stagger: {
          amount: 0.6,
        },
      }
    );
  };

  return (
    <div>
      <Header />
      <div className="container">
        {routes.map(({ path, name, Component }) => (
          <Route key={name} path={path} exact>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={1200}
                classNames="page"
                unmountOnExit
                onEnter={onEnter}
                onExit={onExit}
              >
                <div className="page">
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </div>
    </div>
  );
}

export default App;
