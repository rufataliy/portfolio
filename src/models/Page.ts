export interface Page {
  id: string;
  title: string;
  code_link?: string;
  link?: string;
  path: string;
  type: "flip" | "section" | "link";
  content?: string;
  img: {
    data: {
      id: number;
      attributes: {
        name: string;
        alternativeText: null | string;
        width: number;
        height: number;
        formats: null;
        url: string;
      };
    };
  };
}
