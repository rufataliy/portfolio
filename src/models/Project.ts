export interface Project {
  id: string;
  title: string;
  content: string;
  path: string;
  link: string;
  code_link: string;
  about: null | string;
  img: {
    data: [
      {
        attributes: {
          formats: {
            small: {
              url: string;
            };
          };
        };
      }
    ];
  };
}
