import React, { useState } from "react";
import { BoxWrapper } from "./views";
import { PageCard } from "./PageCard";
import { Page } from "./Page";
import { Page as Model } from "../models";
import { Route } from "react-router-dom";
import { About, ProjectList } from "./pages";

interface Component {
  [key: string]: React.ReactNode;
}

const components: Component = {
  about: <About />,
  projects: <ProjectList />,
  contact: <p>contact</p>,
  blog: <p>blog</p>,
};

export const PageList: React.FC = () => {
  const [pages, setPages] = useState<Model[]>([]);

  useState(() => {
    fetch("/pages")
      .then((res) => res.json())
      .then((data) => setPages(data));
  });

  return (
    <BoxWrapper>
      {pages.map((item) => {
        return (
          <>
            <Route exact path={"/"}>
              <PageCard page={item} />
            </Route>
            <Route path={"/" + item.path}>
              <Page>{components[item.path]}</Page>
            </Route>
          </>
        );
      })}
    </BoxWrapper>
  );
};
