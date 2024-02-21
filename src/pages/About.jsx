import { useState } from "react"
import { motto, panelBackgrounds } from "../assets/motto"
import Panel from "../components/Panel"
const About = () => {

    const [activeId, setActiveId] = useState(null)
    const ids = [1,2,3,4,5,6]
    const list = ids.map((id, index_value) => {
        return{
            id: id,
            motto: motto[index_value],
            images: panelBackgrounds[index_value]
        }
    })

    return (
        <>
        <header>
            <div className="min-h-screen flex">
            {list.map((data) => <Panel key={data.id} {...data} setActiveId = {setActiveId} activeId = {activeId}/>)}
            </div>
        </header>
        </>
    )
}

export default About