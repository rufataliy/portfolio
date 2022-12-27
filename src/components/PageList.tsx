import React, { useState, useEffect, useContext } from "react";
import { BoxLoader, Columns } from "./views";
import { PageCard } from "./PageCard";
import { Page as Model } from "../models";
import { Route } from "react-router-dom";
import { api } from "../util";
import { About, Projects, Contact, Blogs } from "./pages";
import { Context } from "../Context";
import { Section } from "./Section";

interface Component {
  [key: string]: React.ReactNode;
}

const components: Component = {
  about: <About />,
  projects: <Projects />,
  blogs: <Blogs />,
};

const getCardByTypes = (item: Model) => {
  const types = {
    flip: <Contact key={item.id} page={item} />,
    link: <PageCard key={item.id} page={item} />,
    section: <Section key={item.id} data={item} />,
  };
  return types[item.type];
};

export const PageList: React.FC = () => {
  const [pages, setPages] = useState<Model[]>([]);
  const [fetching, setFetching] = useState(false);
  const counts: { [key: string]: any } = useContext(Context);
  useEffect(() => {
    api(
      `${process.env.REACT_APP_API_URL}/api/cards?populate=img`,
      (response: any) =>
        setPages([
          ...response.data.map((item: any) => ({
            ...item.attributes,
            id: item.id,
          })),
        ]),
      setFetching
    );
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
        <BoxLoader count={counts?.pages || 0} loading={loading}>
          <Columns>
            {pages.map((item) => {
              if (item.title === "About") {
                return (
                  <div className="column-left">
                    <div className="float-box-wrapper">
                      {getCardByTypes(item)}
                    </div>
                  </div>
                );
              }
            })}
            <div className="column-right">
              <div className="scrollable-float">
                {pages.map((item) => {
                  if (item.title !== "About") {
                    return getCardByTypes(item);
                  }
                })}
              </div>
            </div>
          </Columns>
        </BoxLoader>
      </Route>
    </>
  );
};
