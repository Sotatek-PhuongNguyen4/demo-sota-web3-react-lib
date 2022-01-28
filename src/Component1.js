import { useEffect } from "react"

const Component1 = () => {
    useEffect(() => {
        console.log("RENDER COMPO 1")
    }, [])
    console.log("render component 1")
    return <h1>Component1</h1>
}

export default Component1