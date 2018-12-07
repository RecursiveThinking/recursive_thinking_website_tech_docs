import React from 'react';
import './Sidebar.css'


const Sidebar = () => {

  const titles = [[[['Who We Are'],['#whoWeAre']],[]], [[['Getting Started'],['#gettingStarted']],[[['Get Connected'],['#getConnected']], [['Prerequisites'],['#prerequisites']],[['Get the Project'],['#getTheProject']], [['Contributing'],['#contributing']],[['Merge Conflicts'],['#mergeConflicts']],[['Back End Prereqs'],['#backEndPrereqs']],[['Deploy Back End'],['#deployBackEnd']]]]]
  let navbar = titles.map((item, index)=>{
    let subtitles=''
    const parentKey = index+item[0]
    if (item[1]){
      subtitles = item[1].map((sub, index)=>{
        const childKey = index+sub[1]
        return(
        <h3 className='subLinkCategory' key={childKey}><a href={sub[1]}><i className="far fa-square"></i>{sub[0]}</a></h3>
        )
      })
    }
    return (
        <section key={parentKey}>
          <h3 className='mainLinkCategory'><a href={item[0][1]}><i className="fas fa-square"></i>{item[0][0]}</a></h3>
          {subtitles}
        </section>
    )
  })
  return(
    <div className='Sidebar'>
      {navbar}
    </div>
  )
}

export default Sidebar;