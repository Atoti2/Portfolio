import { useState} from 'react'
import logo from '../assets/github-mark.png'

const Project = ({info}) => {
    const {name, descr, mainImg, gitHub, hosted, images } = info
    const [open, setOpen] = useState(false)
    const [num, setNum] = useState(0)
    return(
        <>
        <div className='flex flex-col bg-gradient-to-tr shadow-xl from-slate-100 to-slate-200 rounded-md '>
            <div className="p-8">
                <h3 className="text-xl font-bold text-center mb-5">&#60;{name}/&#62;</h3>
                <img className="transition-all cursor-pointer hover:scale-105 bg-center rounded-md h-auto  w-fit m-auto" src={mainImg} alt={name} onClick={() => window.open(hosted)}/>
                <p className="text-center mt-3 text-lg">{descr}</p>
            </div>
            <div className='flex'>
                <a target='_blank' rel='noreferrer' className='w-fit' href={gitHub}><img className='h-8 mb-10 ml-10 hover:scale-105' src={logo} alt="Github page" /></a>
                
                <svg onClick={() => setOpen(!open)} className='h-8 mb-10 ml-10 hover:scale-105 cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>code part</title><path d="M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z" /></svg>

            </div>
        </div>
        
        <dialog open={open} className='z-10 p-10 rounded-md bg-rose-600 backdrop:bg-gray-50'>
            <img className='rounded-md' src={images} alt="" />
            <button className='text-2xl cursor-pointer' onClick={() => setOpen(!open)}>Close</button>
          
        </dialog>
        
       
        </>
    )
}

export default Project