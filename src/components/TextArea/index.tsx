import { useEffect, useState } from "react";
import { useGlobalContext } from "../../service/contextAPI";
import { Scrollbars } from "react-custom-scrollbars";
import data from "../../static/data";

import "./styles/index.scss";

function TextArea() {
  const { parasRqd, setCopyText } = useGlobalContext();

  const [text, setText] = useState<string[]>([]);

  useEffect(() => {
    let paraCount = parasRqd;
    if (parasRqd <= 0) {
      paraCount = 1;
    }
    if (parasRqd > data.length) {
      paraCount = 8;
    }

    setText(data.slice(0, paraCount));
    setCopyText(data.slice(0, paraCount).toString());
  }, [parasRqd]);

  return (
    <>
      <div className="textArea">
        <Scrollbars style={{ height: 300 }}>
          {text.map((t, index) => {
            return (
              <div className="para" key={index}>
                <p>{t}</p>
                <br />
              </div>
            );
          })}
        </Scrollbars>
      </div>
    </>
  );
}

export default TextArea;
