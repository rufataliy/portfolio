import React, { useState } from "react";
import { BoxWrapper } from "./views";
import { PageCard } from "./PageCard";
import { Page as Model } from "../models";
import { Route } from "react-router-dom";
import { About, ProjectList, Contact } from "./pages";

interface Component {
  [key: string]: React.ReactNode;
}

const components: Component = {
  about: <About />,
  projects: <ProjectList />,
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
            <Route exact path={["/", "/contact"]}>
              <PageCard page={item} />
            </Route>
            {components[item.path] && (
              <Route path={"/" + item.path}>{components[item.path]}</Route>
            )}
          </>
        );
      })}
      <Route exact path={["/", "/contact"]}>
        <Contact />
      </Route>
    </BoxWrapper>
  );
};
