import { Dispatch } from "react";

type UseApi = (
  url: string,
  callback: React.SetStateAction<any>,
  setFetchingStatus: Dispatch<React.SetStateAction<boolean>>
) => Promise<any>;

export const api: UseApi = (url, callback, setFetchingStatus) => {
  setFetchingStatus(true);
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
      .finally(() => setFetchingStatus(false));
  });
};
