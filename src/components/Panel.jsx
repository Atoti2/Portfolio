import { useState } from 'react'

const Panel = ({motto, images, id, setActiveId, activeId}) => {

    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(!active)
        setActiveId(id)
    }
   return (
       <div  
        onClick={handleClick} 
        className={`${id == activeId && !active ? 'panel isActive ' : 'panel'}`} 
        style={{backgroundImage: `url(${images})`}} >
            {motto}
        </div>
  )
}

export default Panel