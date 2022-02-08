import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import './App.css';

function App() {
  const codeString = `(num) => num + 1`;

  const markdown = `# Hello, *world* !`;

  const markdownWithCode = `Here is some JavaScript code:

~~~js
console.log('It works!')
~~~
`;

  return (
    <>
      <div>
        <ReactMarkdown children={markdown} />
        <SyntaxHighlighter language="javascript" style={docco}>
          {codeString}
        </SyntaxHighlighter>

        <div>
          <ReactMarkdown
            children={markdownWithCode}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    style={dark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
