/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  // console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag,setFaceShowFlag] = useState(false);

  // const onClickButton = () => alert();

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  // const contentLedyStyle = {
  //   color: "pink",
  //   fontSize: "18px" // CSSの値は、文字列で囲む。font-Sizeのような、CSSではハイフンでつなぐものは、スネークケースでなく、キャメルケースで書かなければならない。
  // }; 

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    // console.log("useEffect!!");
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }  // 初期値が0の時、顔文字を表示させないようにしている。

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);
  // }, [num, faceShowFlag]);　// useEffectの第二引数に配列を取ることで、stateを更新したとき、最初の一回だけコンポーネントの処理がされる。ここでは、numにだけ関心を持たせて、numに変更があった時だけ、第一引数の処理をさせる。なお、faceShowFlagはeslintで書くことを強制されたので、書いた。今回は、faceShowFlagを意識させたくないので、講師はこのeslintの設定をオフにするとの事。そのやり方は、い行目のコメントを書くこと。これでこの部分のeslintの設定をオフにできる。上記の「}, [num]);」の上のコメントのようにdisableを使って個別にeslintの設定を解除することも出来る。
  

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      {/* <ColorfulMessage color="blue" message='お元気ですか？' /> */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      {/* <ColorfulMessage color="pink" message='元気です！' /> */}
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      {/* <p style={contentLedyStyle}>元気です</p> */}
      {/* <button onClick={onClickButton}>ボタン</button> */}
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>!(^^)!</p>}  
    </>
  );
};

export default App;
