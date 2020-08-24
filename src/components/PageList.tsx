import React, { useState, useEffect } from "react";
import { BoxWrapper, BoxLoader } from "./views";
import { PageCard } from "./PageCard";
import { Page as Model } from "../models";
import { Route } from "react-router-dom";
import { About, ProjectList, Contact } from "./pages";
import { api } from "../util";

interface Component {
  [key: string]: React.ReactNode;
}

const components: Component = {
  about: <About />,
  projects: <ProjectList />,
};

export const PageList: React.FC = () => {
  const [pages, setPages] = useState<Model[]>([]);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    console.log("render");
    api(`${process.env.REACT_APP_API_URL}/pages`, setPages, setFetching);
  }, []);

  const loading = (Array.isArray(pages) && pages.length < 1) || fetching;

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
