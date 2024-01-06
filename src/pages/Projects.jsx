import Project from "../components/Project"
const projektek = [
    {
        id: "1",
        title: "Drums",
        desc: "rovid leiras",
        url: "https://i.ibb.co/ck1BkGY/drums.png"
    },
]

const Projects = () => {

    return (
        <div className="Projects">
            {projektek.map(project => (
                <Project
                    key={project.id}
                    title={project.title}
                    desc={project.desc}
                    url={project.url}
                />
            ))}
        </div>
    )
}


export default Projects