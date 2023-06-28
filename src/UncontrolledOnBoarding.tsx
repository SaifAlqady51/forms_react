import React, {ReactNode, useState} from "react";



export const UncontrolledOnBoarding = ({children}:{children:ReactNode} ) => {
    const [onBoardingData,setOnBoardingData] = useState({});
    const [currentIndex,setCurrentIndex] = useState(0)
    
    const currentChild = React.Children.toArray(children)[currentIndex];
    
    const goToNext = () => {
        setCurrentIndex(currentIndex + 1)
    }
    
    if(React.isValidElement(currentChild)){
        // @ts-ignore
        return React.cloneElement(currentChild,{goToNext})
    }
    
    return currentChild
    
}