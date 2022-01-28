import { useEffect } from "react"

const Component2 = () => {
    useEffect(() => {
        console.log("RENDER COMPO 2")
    }, [])
    console.log("Render component 2")
    return <h1>Component2</h1>
}

export default Component2