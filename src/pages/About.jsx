
import { motto, panelBackgrounds } from "../assets/motto"
import './About.css'
const About = () => {

    function toggleOpen(event){    
        if(!(event.target.classList.contains('open'))){
            document.querySelectorAll('.panel').forEach((item) => {item.classList.remove('open')})
        }
        event.target.classList.toggle('open')
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
                    <div key={data.id} onClick={toggleOpen} className={`panel flex-1 flex bg-cover bg-center items-center justify-center text-xl font-bold text-white uppercase`} style={{backgroundImage: `url(${data.images})`}} >{data.motto}</div>
                )
            })}
            </div>
        </header>
        </>
    )
}

export default About