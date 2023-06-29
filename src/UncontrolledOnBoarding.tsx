import React, {ReactNode, useState} from "react";



export const UncontrolledOnBoarding = ({children,onFinish}:{children:ReactNode[],onFinish:any} ) => {
    const [onBoardingData,setOnBoardingData] = useState({});
    const [currentIndex,setCurrentIndex] = useState(0)
    
    
    const goToNext = (stepData:any) => {
        const nextIndex = currentIndex + 1;

        const updatedData = {
            ...onBoardingData,
            ...stepData
        }
        console.log(updatedData);

        if(nextIndex < children.length){
            setCurrentIndex(nextIndex)
        }else{
            onFinish(updatedData)
        }

        setOnBoardingData(updatedData)
    }

    const currentChild = React.Children.toArray(children)[currentIndex];

    
    if(React.isValidElement(currentChild)){
        // @ts-ignore
        return React.cloneElement(currentChild,{goToNext})
    }

    
    return currentChild;
    
}