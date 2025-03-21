import { useState, useEffect, useRef } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import "./App.css";
import axios from "axios";

function App() {
  const [code, setCode] = useState(`//Enter your code here...`);
  const [isLoading, setIsLoading] = useState(false);
  const [review, setReview] = useState(`Review will be displayed here...`);
  const reviewButtonRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    prism.highlightAll();
  });

  async function reviewCode() {
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/ai/get-review", {
        code,
      });
      setReview(response.data);
    } catch (err) {
      setReview("Error occurred while fetching review");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (!reviewButtonRef.current) return;
      const parent = reviewButtonRef.current.parentElement;
      const buttonRect = reviewButtonRef.current.getBoundingClientRect();
      const parentRect = parent.getBoundingClientRect();

      setIsSticky(buttonRect.top <= parentRect.top);
    };

    const leftPanel = document.querySelector(".left");
    if (leftPanel) {
      leftPanel.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (leftPanel) {
        leftPanel.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: "clamp(14px, 1.2vw, 18px)", // Responsive font size
                borderRadius: "5px",
                height: "100%",
                width: "100%",
                overflow: "auto",
                whiteSpace: "pre",
                lineHeightStep: "1.5",
                display: "block",
                color: "white",
                backgroundColor: "black",
                resize: "vertical",
              }}
            />
          </div>
          <div
            onClick={reviewCode}
            ref={reviewButtonRef}
            className={`review ${isSticky ? "sticky" : ""}`}
          >
            {isLoading ? "Reviewing the code..." : "Review"}
          </div>
        </div>
        <div className="right">
          {isLoading ? (
            <div className="loading">Reviewing the code...</div>
          ) : (
            <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
