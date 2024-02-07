import Project from "../components/Project"
import fetchData from "../assets/fetch"
import { useState } from "react"


const Projects = () => {
    const [data, setData] = useState([])
    fetchData(setData)
    
    return (
        <div className="Projects flex gap-10 m-5">
            {data.map(project => (
                <Project
                    key={project.id}
                    info={project}

                />
            ))}
        </div>
    )
}


export default Projects