import React from "react";
import { CopyBlock, monoBlue } from "react-code-blocks";

export default function CodeBlock({ code, language, showLineNumbers = false }) {
  return (
    <div className="code-block">
      <CopyBlock text={code} language={language} showLineNumbers={showLineNumbers} theme={monoBlue} wrapLongLines />
    </div>
  );
}
