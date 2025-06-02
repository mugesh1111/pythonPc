import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import serveFiles from "../exps/ServeFiles";

const TwelfthPage = () => {
  const files = serveFiles[12]; // Add your EX.NO:12 files here

  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    if (!selectedFile) return;
    setLoading(true);
    fetch(files[selectedFile])
      .then((res) => res.text())
      .then((data) => {
        setText(data);
        setLoading(false);
      })
      .catch(() => {
        setText("Failed to load file.");
        setLoading(false);
      });
  }, [selectedFile, files]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div>
      <Link to="/">Home</Link>

      <h3>
        a: Bouncing Ball Game using Pygame <br />
        b: (Optional) Car Race Game using Pygame
      </h3>

      <div style={{ marginBottom: 20 }}>
        {Object.keys(files).map((fileKey) => (
          <button
            key={fileKey}
            onClick={() => setSelectedFile(fileKey)}
            style={{
              marginRight: 8,
              backgroundColor: selectedFile === fileKey ? "#4caf50" : "",
              color: selectedFile === fileKey ? "white" : "",
            }}
          >
            {fileKey.toUpperCase()}
          </button>
        ))}
      </div>

      <button
        onClick={handleCopy}
        disabled={!text || copied || loading}
        style={{
          backgroundColor: "springgreen",
          color: "black",
          borderRadius: 10,
          padding: "5px 10px",
          cursor: "pointer",
        }}
      >
        {copied ? "Copied!" : "Copy Text"}
      </button>

      <pre
        style={{
          whiteSpace: "pre-wrap",
          marginTop: 20,
          border: "1px solid #ccc",
          padding: 10,
          minHeight: 150,
          backgroundColor: "#f9f9f9",
        }}
      >
        {loading ? "Loading..." : text || "Select a file to load text"}
      </pre>
    </div>
  );
};

export default TwelfthPage;