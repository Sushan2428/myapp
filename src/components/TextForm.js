import React, {useState} from 'react'



export default function TextForm(props) {
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!","success")
  }

  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!","success")
  }

  const handleClearClick = ()=>{
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared!","success")
  }

  const handleOnChange = (event)=>{
    setText(event.target.value); //To type something on the textarea
  }

  const handleCopy = () => {
    const text = document.getElementById('my-box');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied Text!","success")
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces!","success")
  }

  //hooks
  const [text, setText] = useState('');
  // text = "new text"; //Wrong way to change the state
  // setText("hello");  //Correct way to change the state
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className={`form-control bg-${props.mode} text-${props.mode==='light' ? 'black' : 'white'}`} id="my-box" rows="8" value={text} onChange={handleOnChange} placeholder='Enter text here'></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container my-2">
        <h2 className='my-3'>Your text summary</h2>
        <p>{text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</p>
        <p>Reading Time: {0.01 * (text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length)} minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text : 'Enter something in the text box above to preview it here'}</p>
      </div>
    </>
  )
}
