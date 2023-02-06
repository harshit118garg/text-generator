import Count from "./components/Count";
import TextArea from "./components/TextArea";

import "./App.scss";

function App() {
  const handleCopyFunc = (copyText: string) => {
    navigator.clipboard.writeText(copyText);
  };

  return (
    <div className="textGenerator">
      <h2 className="heading">Lorem Ipsum</h2>
      <div className="container">
        <Count />
        <TextArea />
      </div>
    </div>
  );
}

export default App;
