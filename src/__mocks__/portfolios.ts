import { Portfolio } from "../models";
import { sanntek, zengarden, prodigy } from "./img";

export const portfolios: Portfolio[] = [
  {
    id: "1",
    title: "SannTek",
    content: "<p> this is the content</p>",
    path: "sanntek",
    thumbnail: sanntek,
  },
  {
    id: "2",
    title: "Prodigy",
    path: "prodigy",
    content: "<p> this is the content</p>",
    thumbnail: prodigy,
  },
  {
    id: "3",
    title: "ZenGarden",
    path: "zengarden",
    content: "<p> this is the content</p>",
    thumbnail: zengarden,
  },
];
