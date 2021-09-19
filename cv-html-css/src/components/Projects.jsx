import React, { useMemo, useState } from "react";
import Frame from "./Frame";
import Modal from "./Modal";
import { projectsList } from "../assets/someDataBase/someDataBase";


const Projects = () => {
  const [projects, setProjects] = useState(projectsList)
  const [modalActive, setModalActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const sortedProjects = useMemo(() => {
    return [...projects].filter(project => project.name.toLowerCase().includes(searchQuery))
  }, [searchQuery])

  
  return (
    <Frame title="projects">
      <div onClick = {() => {setModalActive(true)}}>
        popa
      </div>
      <Modal active = {modalActive} setActive = {setModalActive}>
        <input 
          type="text" 
          placeholder="Search..." 
          value = {searchQuery}
          onChange = {e => {
            
            setSearchQuery(e.target.value)

            console.log(searchQuery, 'serackjsdaf')
          }}
        />
        <ul className = "projects__list">
          {sortedProjects.map(project => 
            <li className="project" style = {{backgroundColor: project.preview}}>
              <div className="project__inner" >
                <h4>{project.name}</h4>
                <ul className = "tags__list">
                  {
                    project.tags.map(tag => 
                      <li>{tag}</li>
                    )
                  }
                </ul>
                
              </div>
            </li>  
          )}
        </ul>

      </Modal>

    </Frame>

  )
}

export default Projects;