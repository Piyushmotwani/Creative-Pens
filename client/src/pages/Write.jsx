import React, { useState } from 'react'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const Write = () => {

    const [value, setValue] = useState("");
    console.log(value);

  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title" />
        <div className="editorContainer">
          <ReactQuill value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status :</b> Draft
          </span>
          <span>
            <b>Visibility :</b> Public
          </span>
          <input style={{display:"none"}}  type="file" name="" id="file" />
          <label htmlFor="file" className='file'>Upload Image</label>
          <div className="buttons">
            <button>Save as Draft</button>
            <button>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Categories</h1>
          <div className="cat">
            <input type="radio" name="category" value="art" id="art" />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
          <input type="radio" name="category" value="science" id="science" />
          <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
          <input type="radio" name="category" value="food" id="food" />
          <label htmlFor="food">Food</label>
          </div>
          <div className="cat">
          <input
            type="radio"
            name="category"
            value="technology"
            id="technology"
          />
          <label htmlFor="technology">Technology</label>
          </div>
          <div className="cat">
          <input type="radio" name="category" value="design" id="designt" />
          <label htmlFor="design">Design</label>
          </div>
          <div className="cat">
          <input type="radio" name="category" value="cinema" id="cinema" />
          <label htmlFor="cinema">Cinema</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Write