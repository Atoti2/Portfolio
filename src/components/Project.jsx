import logo from '../assets/github-mark.png'

const Project = ({info}) => {
    const {name, descr, mainImg, gitHub, hosted } = info
    return(
        <>
        <div className='flex flex-col bg-gradient-to-tr shadow-xl from-slate-100 to-slate-200 rounded-md '>
            <div className="transition-all hover:scale-105 p-8 cursor-pointer" onClick={() => window.open(hosted)}>
                <h3 className="text-xl font-bold text-center mb-5">&#60;{name}/&#62;</h3>
                <img className="bg-center rounded-md h-auto max-w-[400px] m-auto" src={mainImg} alt={name}/>
                <p className="text-center mt-3 text-lg">{descr}</p>
            </div>
                <a target='_blank' className='w-fit ' href={gitHub}><img className='h-8 mb-10 ml-10 hover:scale-105' src={logo} alt="Github page" /></a>
        </div>
        </>
    )
}

export default Project