import { Count } from "../models";
import { blogs } from "./blogs";
import { pages } from "./pages";
import { projects } from "./projects";

export const counts: Count = {
  projects: projects.length,
  pages: pages.length,
  blogs: blogs.length,
};
