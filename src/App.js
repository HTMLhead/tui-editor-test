import React from "react";
import "./App.css";

import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor-old.css";
// import "styles/"
// import "tui-editor/dist/tui-editor.min.css";
// import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight";
import "./styles/tui-editor-contents.scss";
import "./styles/tui-md.scss";

import { Editor } from "@toast-ui/react-editor";

function App() {
  const ref = React.useRef(null);

  const initialValue = "hi";

  return (
    <div className="App">
      <Editor
        height="100vh"
        {...{ initialValue }}
        useDefaultHTMLSanitizer={false}
        usageStatistics={false}
        ref={ref}
        // @ts-ignore
        toolbarItems={[
          "heading",
          "bold",
          "italic",
          "strike",
          "link",
          "divider",
          "hr",
          "quote",
          "divider",
          "ul",
          "ol",
          "task",
          "indent",
          "outdent",
        ]}
      />
    </div>
  );
}

export default App;
