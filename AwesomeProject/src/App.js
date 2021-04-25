import React, {useEffect, useState} from 'react'
import Opening from './pages/opening/index'
import DaftarLagu from './pages/daftarlagu/index'

const App = () => {
  
  const [isShow, SetIsShow] = useState(true); 
  const [showList, setShowList] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      SetIsShow(false);
    },4000 )
  }, [])
  
  useEffect(() => {
    setTimeout(()=>{
      setShowList(true)
    }, 4010)
  
  }, [])

  return (
       <>
          {isShow && <Opening/>}
          {showList && <DaftarLagu/>}
       </> 
  )
}

export default App
