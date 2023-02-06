import { useState } from "react";
import { useGlobalContext } from "../../service/contextAPI";
import data from "../../static/data";
import { AiOutlinePlus } from "react-icons/ai";
import { BiMinus } from "react-icons/bi";
import { FaCopy } from "react-icons/fa";

import "./styles/index.scss";

function Count() {
  const { parasRqd, setParasRqd, copyText } = useGlobalContext();
  const [paras, setParas] = useState<number>(parasRqd);

  const increaseParaCount = () => {
    if (paras <= data.length) {
      setParas(paras + 1);
    }
  };

  const decreaseParaCount = () => {
    if (paras > 1) {
      setParas(paras - 1);
    }
  };

  const handleParaNums = () => {
    setParasRqd(paras);
  };

  const handleCopyFunct = (copyText: string) => {
    navigator.clipboard.writeText(copyText);
  };

  return (
    <>
      <div className="countArea">
        <div className="left">
          <h2>Paragraphs</h2>
          <div className="count">
            <h3>{paras}</h3>
          </div>
          <div className="countHandlerBtns">
            <div className="icon" onClick={increaseParaCount}>
              <AiOutlinePlus />
            </div>
            <div className="icon" onClick={decreaseParaCount}>
              <BiMinus />
            </div>
          </div>
        </div>
        <div className="right">
          <button type="submit" className="button" onClick={handleParaNums}>
            Generate
          </button>
          <button
            type="button"
            className="button"
            onClick={() => handleCopyFunct(copyText)}
          >
            <FaCopy />
          </button>
        </div>
      </div>
    </>
  );
}

export default Count;
