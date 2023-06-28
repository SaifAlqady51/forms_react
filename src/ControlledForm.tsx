import { useEffect, useState } from "react"


export const ControlledForm = () => {
    const [nameError,setNameError] = useState('')
    const [name,setName] = useState('')
    const [age,setAge] = useState('')
    const [hairColor,setHairColor] = useState('')

    useEffect(() => {
        if(name.length < 3){
            setNameError('Name must be at least 3 characters long')
        }else{
            setNameError('')
        }
    },[name])

    function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
    }

    return(
        <form >
            {nameError && <p>{nameError}</p>}
            <input 
                type="text"
                name="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)}/>
            <input 
                type="text" 
                name="age" 
                value={age} 
                onChange={(e) => setAge(e.target.value)}/>
            <input 
                type="text"  
                name="hairColor" 
                value={hairColor} 
                onChange={(e) => setHairColor(e.target.value)}/>
            <button>Submit</button>
        </form>
    )
}