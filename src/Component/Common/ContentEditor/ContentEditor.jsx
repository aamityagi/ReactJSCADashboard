import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';

const ContentEditor = ({placeholder}) => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const config = {
        placeholder:"Start Typing..."
    }
  return (
    <>
      {/* Editor Start */}
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onChange={newContent => setContent(newContent)}
      />
      {/* Editor End */}
    </>
  )
}

export default ContentEditor
