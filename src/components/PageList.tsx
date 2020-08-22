import React, { useState } from "react";
import { BoxWrapper, Box, MockBox } from "./views";
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

  useState(() => {
    setFetching(true);
    fetch("/pages")
      .then((res) => res.json())
      .then((data) => {
        setPages(data);
      })
      .catch((err) => console.log(err))
      .finally(() => setFetching(false));
  });

  return (
    <BoxWrapper>
      {fetching && mockArr.map((item) => <MockBox />)}
      {!fetching &&
        pages.map((item) => {
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
      {!fetching && (
        <Route exact path={["/", "/contact"]}>
          <Contact />
        </Route>
      )}
    </BoxWrapper>
  );
};
