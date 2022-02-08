import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ReactMarkdown from 'react-markdown';

import './App.css';

function App() {
  const codeString = `
  
  (num) => num + 1
  console.log("hello worl")
  
  `;

  const markdown = `# Hello, *world* !`;

  return (
    <div>
      <ReactMarkdown children={markdown} />
      <SyntaxHighlighter language="javascript" style={docco}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}

export default App;
