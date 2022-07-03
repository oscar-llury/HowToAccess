import React from "react";
/* eslint-disable import/no-webpack-loader-syntax */
import C, {
  frontMatter,
  tableOfContents,
} from "!babel-loader!mdx-loader!./../data/perceptible.mdx";

export default function Guideleness() {
  return <C name="Mars" year={2022} />;
}
