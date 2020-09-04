import React, { useState, useEffect, useContext } from "react";
import { BoxWrapper, BoxLoader } from "./views";
import { PageCard } from "./PageCard";
import { Page as Model } from "../models";
import { Route } from "react-router-dom";
import { api } from "../util";
import { About, Projects, Contact, Blogs } from "./pages";
import { Context } from "../Context";

interface Component {
  [key: string]: React.ReactNode;
}

const components: Component = {
  about: <About />,
  projects: <Projects />,
  blogs: <Blogs />,
};

export const PageList: React.FC = () => {
  const [pages, setPages] = useState<Model[]>([]);
  const [fetching, setFetching] = useState(false);
  const counts: { [key: string]: any } = useContext(Context);

  useEffect(() => {
    api(`${process.env.REACT_APP_API_URL}/pages`, setPages, setFetching);
  }, []);

  const loading = (Array.isArray(pages) && pages.length < 1) || fetching;

  return (
    <>
      {pages.map((item) => {
        return (
          components[item.path] && (
            <Route
              key={item.id}
              path={"/" + item.path}
              render={() => components[item.path]}
            />
          )
        );
      })}
      <Route exact path={["/", "/contact"]}>
        <BoxWrapper>
          <BoxLoader count={counts?.pages || 0} loading={loading}>
            {pages.map((item) => {
              if (item.type === "regular") {
                return <PageCard key={item.id} page={item} />;
              } else if (item.type === "extended") {
                return <Contact key={item.id} page={item} />;
              } else return null;
            })}
          </BoxLoader>
        </BoxWrapper>
      </Route>
    </>
  );
};
