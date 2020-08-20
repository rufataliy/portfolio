export interface Page {
  id: string;
  title: string;
  path: string;
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
