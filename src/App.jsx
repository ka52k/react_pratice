import React from "react";

const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "18px" // CSSの値は、文字列で囲む。font-Sizeのような、CSSではハイフンでつなぐものは、スネークケースでなく、キャメルケースで書かなければならない。
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <p style={contentStyle}>お元気ですか</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
