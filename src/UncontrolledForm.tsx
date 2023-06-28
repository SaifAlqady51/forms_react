import { LegacyRef, createRef } from "react"



export const UncontrolledForm = () =>{

    const inputName = createRef() as LegacyRef<HTMLInputElement> | undefined
    const inputAge = createRef() as LegacyRef<HTMLInputElement> | undefined
    const inputHairColor = createRef() as LegacyRef<HTMLInputElement> | undefined

    function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        // @ts-ignore
        console.log(inputName?.current.value)
        // @ts-ignore
        console.log(inputAge?.current.value)
        // @ts-ignore
        console.log(inputHairColor?.current.value)

        e.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" ref={inputName}/>
            <input type="number" name="age"  ref={inputAge}/>
            <input type="text" name="hairColor"  ref={inputHairColor}/>
            <input type="submit" value="Submit"  />
        </form>
    )
}