import React from 'react';
import {useState} from 'react';

import AGDatasetExplorer from "../agDatasetExplorer/agDatasetExplorer";
import AGPreviewPane from "../agPreviewPane/agPreviewPane";
export default function Rushabh() {
  const [isImg, setIsImg] = useState(false);
  const [value, setValue] = useState(null);
  return (
    <div className="bot">
      <div className="bot-left">
        <AGDatasetExplorer isImg={isImg} setIsImg={setIsImg} setValue={setValue}/>
      </div>
      <div className="bot-right">
        <AGPreviewPane isImg={isImg} value={value}/>
      </div>
    </div>
  );
}
