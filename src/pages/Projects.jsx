import Project from "../components/Project"
import fetchData from "../assets/fetch"
import { useState } from "react"


const Projects = () => {
    const [data, setData] = useState([])
    fetchData(setData)


    return (
        <div className="Projects">
            {data.map(project => (
                <Project
                    key={project.id}
                    title={project.name}
                    desc={project.descr}
                    url={project.mainImg}
                />
            ))}
        </div>
    )
}


export default Projects