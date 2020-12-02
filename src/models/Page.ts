export interface Page {
  id: string;
  title: string;
  code_link?: string;
  link?: string;
  path: string;
  type: "flip" | "section" | "link";
  content?: string;
  img: [
    {
      url: string;
      formats: {
        thumbnail: {
          url: string;
        };
        large: {
          url: string;
        };
        medium: {
          url: string;
        };
        small: {
          url: string;
        };
      };
    }
  ];
}
