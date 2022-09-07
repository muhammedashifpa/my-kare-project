import React,{useEffect,useState} from 'react'
import LargeScreen from './LargeScreen'
import SmallScreen from './SmallScreen'

const Authentication = () => {
  const [width, setWindowWidth] = useState(0)

  useEffect(() => { 
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => 
      window.removeEventListener("resize",updateDimensions);
    }, [])

  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
    }
    const component = width>=992? 
        <LargeScreen/>
        :
        <SmallScreen/>;

  return component;
}

export default Authentication

