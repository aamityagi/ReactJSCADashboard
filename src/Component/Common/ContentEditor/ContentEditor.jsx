import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';

const ContentEditor = (props) => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    // props.setEditorDescription(content);
    // console.log(props.editDescription)
    // if(props.editDescription){
    //   setContent(props.editDescription)
    // }
    const config = {
      placeholder: `${props.placeholder}`,
      // buttons: [ "bold", "italic", "underline", "strikethrough", "|", "ul", "ol", "|", "center", "left", "right", "justify", "|", "link", "image"],
      uploader: { insertImageAsBase64URI: true },
      removeButtons: ["brush", "file", "print"],
      showXPathInStatusbar: false,
      showCharsCounter: false,
      showWordsCounter: false,
      toolbarAdaptive: false
    };
  return (
    <>
      {/* Editor Start */}
      <JoditEditor
        value={content}
        ref={editor}
        config={config}
        onBlur={newContent => setContent(newContent)}
      />
      {/* Editor End */}
    </>
  )
}

export default ContentEditor
