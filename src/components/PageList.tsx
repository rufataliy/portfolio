import React, { useState, useEffect } from "react";
import { BoxWrapper, BoxLoader } from "./views";
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
};

const mockArr = new Array(4).fill(undefined);

export const PageList: React.FC = () => {
  const [pages, setPages] = useState<Model[]>([]);
  const [fetching, setFetching] = useState<boolean>(false);

  useEffect(() => {
    setFetching(true);
    fetch("/pages")
      .then((res) => res.json())
      .then((data) => {
        setPages(data);
      })
      .catch((err) => console.log(err))
      .finally(() => setFetching(false));
  });

  const loading = false

  return (
    <BoxWrapper>
      {pages.map((item) => {
        return (
          components[item.path] && (
            <Route
              path={"/" + item.path}
              render={() => components[item.path]}
            />
          )
        );
      })}
      <Route exact path={["/", "/contact"]}>
        <BoxLoader loading={loading}>
          {pages.map((item) => {
            return <PageCard key={item.id} page={item} />;
          })}
          <Route exact path={["/", "/contact"]}>
            <Contact />
          </Route>
        </BoxLoader>
      </Route>
    </BoxWrapper>
  );
};
