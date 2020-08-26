export interface Page {
  id: string;
  title: string;
  path: string;
  type: "regular" | "extended";
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
