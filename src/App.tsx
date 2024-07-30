import { useState,useRef } from 'react'

import './App.css'
import QRCode from 'qrcode.react'
function App() {
  const qrRef = useRef<HTMLDivElement>(null);
  const [value,setValues] = useState('')
  const handleDownload = () => {
    const canvas = qrRef.current?.querySelector('canvas');
    const url = canvas?.toDataURL('image/png');
    if(url){
      const link = document.createElement('a');
    link.href = url;
    link.download = 'qrcode.png';
    link.click();

    }else{
      console.log("some how failed")
    }
    
  };

  return (
    <>
    <div className='main'>
      <input type="text" value={value} onChange={(e)=>setValues(e.target.value)} name="" id="" />
      <div ref={qrRef} className='submain'>
      <QRCode value={value} size={256} includeMargin={true} />
      <button onClick={handleDownload}>Download as PNG</button>
      </div>
      </div>
    </>
  )
}

export default App
