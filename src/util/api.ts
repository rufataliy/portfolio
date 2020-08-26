import { Dispatch } from "react";

type UseApi = (
  url: string,
  callback: React.SetStateAction<any>,
  setStatus?: Dispatch<React.SetStateAction<boolean>>
) => Promise<any>;

export const api: UseApi = (url, callback, setStatus) => {
  setStatus && setStatus(true);
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return { error: true };
        }
      })
      .then((data) => {
        if (!data.error) {
          resolve(callback(data));
        } else {
          throw Error("Request error");
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setTimeout(() => {
          setStatus && setStatus(false);
        }, 700);
      });
  });
};
