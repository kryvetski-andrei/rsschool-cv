import React, { useMemo, useState } from "react";
import Frame from "./Frame";
import Modal from "./Modal";
import { projectsList } from "../assets/someDataBase/someDataBase";


const Projects = () => {
  const [projects] = useState(projectsList)
  const [modalActive, setModalActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    
    

    return [...projects].filter(project => {
      let searchWord = '';

      project.tags.forEach(tag => {
        if (tag.name.includes(searchQuery) || 
            project.name.toLowerCase().includes(searchQuery)) {
          searchWord = tag.name;
        }
      })

      return searchWord;

    })
  }, [searchQuery])

  
  return (
    <Frame title="projects">
      <div onClick = {() => {setModalActive(true)}}>
        popa
      </div>


      <Modal active = {modalActive} setActive = {setModalActive}>
        <input
          className = "input-search"
          type="text" 
          placeholder="Search by name or tag..." 
          value = {searchQuery}
          onChange = {e => setSearchQuery(e.target.value)}
        />

        <ul className = "projects__list">
          {filteredProjects.map(project => 
            <li className="project" style = {{backgroundImage: `url(${process.env.PUBLIC_URL + 'images/wildlife.jpg'})` }}>
              <div className="project__inner" >
                <h4>{project.name}</h4>
                
                <ul className = "tags__list">
                  {
                    project.tags.map(tag => 
                      <li className = "tag" style = {{backgroundColor: tag.color}}>{tag.name}</li>
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