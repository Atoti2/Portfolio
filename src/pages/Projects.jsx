import Project from "../components/Project"
import fetchData from "../assets/fetch"
import { useEffect, useState } from "react"

const Projects = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetchData(setData)
    }, [])
    console.log(data)
   
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