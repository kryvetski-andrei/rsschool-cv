import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { stackoverflowDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeExample = (props) => {

  return (
    <div className = "code">
      <SyntaxHighlighter language={props.leng} style={stackoverflowDark}  showLineNumbers={true}>
         {props.code}
      </SyntaxHighlighter>
    </div>
      
  ) 
};

export default CodeExample;