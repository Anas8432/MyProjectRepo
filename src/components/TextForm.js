import React, {useState} from 'react'



export default function TextForm(props) {

  const [text, setText] = useState("");
  // setText("new Text");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to uppercase!", "success");
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to lowercase!", "success");

  }

  const handleClearClick = () => {
    let newText = text.replace(text, "");
    setText(newText);
    props.showAlert(" Clear all text!", "success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    setTimeout(()=>{document.getSelection().removeAllRanges();}, 1000);
    props.showAlert(" Copyed all text!", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "))
    props.showAlert(" Remove extra spaces!", "success");
  }

  return (
    <>
    <div className={`container`}>
    <div className={`container`}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#020074':'white', color: props.mode==='dark'?'white':'#020630'}} id="myBox" rows="5"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Spaces</button>


    </div>
    <div className="container my-4">
      <h2>your text summery</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </div>
    </>
  )
}
