import { motto, panelBackgrounds } from "../assets/motto"
const About = () => {
    function toggleOpen(event){    
        if(!(event.target.classList.contains('flex-[2]'))){
            document.querySelectorAll('.panel').forEach((item) => {item.classList.remove('flex-[2]')})
        }
        event.target.classList.toggle('flex-[2]')
    }

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
            {list.map((data) => {
                return(
                    <div key={data.id} onClick={toggleOpen} className={`panel duration-500 ease-[cubic-bezier(.17,.67,.83,.67)] flex-1 flex bg-cover bg-center items-center justify-center text-xl font-bold text-white uppercase`} style={{backgroundImage: `url(${data.images})`}} >{data.motto}</div>
                )
            })}
            </div>
        </header>
        </>
    )
}

export default About