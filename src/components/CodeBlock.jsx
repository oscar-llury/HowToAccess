import React from "react";
import { CopyBlock, monoBlue } from "react-code-blocks";

export default function CodeBlock({ code, language, className, showLineNumbers = false }) {
  return (
    <div className={`code-block ${className}`}>
      <CopyBlock text={code} language={language} showLineNumbers={showLineNumbers} theme={monoBlue} wrapLongLines />
    </div>
  );
}
