import React from 'react'
import Navbar from '../../Components/Home/Navbar'
import './CSS/AddProject.css'
import pic from '../Images/lion.webp'

import tech from '../../Images/addProjectPics/Technical.avif'
import fin from '../../Images/addProjectPics/financial.jpg'
import eco from '../../Images/addProjectPics/Economical.avif'
import other from '../../Images/addProjectPics/others.JPG'


import { Link , useNavigate } from 'react-router-dom'


function AddProject() {
  const navigate = useNavigate();

  const handleSubmitBlog = (e) => {  
    navigate('/addeconomyblog')
  }
  const handleSubmitFinancial = (e) => {  
    navigate('/addfinancil')
  }
  const handleSubmitTechnical = (e) => {  
    navigate('/addtechnical')
  }
  const handleSubmitOthers = (e) => {  
    navigate('/addothers')
  }
  return (
    <div>
      <Navbar />

      <h1>Add Project</h1>
      <div className="addprojectBox">
        <div className="addProjectIneerBox">

          <div className="addProjectCard">
            <div className="addProjectContent">
              <button className="addProjectBtn" onClick={() => {handleSubmitBlog()}}>Add Economy Blog</button>

              <Link to={'/economyblog'}>
                <div className="addProjectImage">
                  <img src={eco} alt="Project Image" />
                </div>
              </Link>
            </div>
          </div>

          <div className="addProjectCard">
            <div className="addProjectContent">
              <button className="addProjectBtn" onClick={() => {handleSubmitFinancial()}}>Add Financial Blog</button>
              <Link to={'/financilabolgs'}>
                <div className="addProjectImage">
                  <img src={fin} alt="Project Image" />
                </div>
              </Link>
            </div>
          </div>

          <div className="addProjectCard">
            <div className="addProjectContent">
              <button className="addProjectBtn" onClick={() => {handleSubmitTechnical()}}>Add Technical Blog</button>
              <Link to={'/technicalblogs'}>
                <div className="addProjectImage">
                  <img src={tech} alt="Project Image" />
                </div>
              </Link>
            </div>
          </div>

          <div className="addProjectCard">
            <div className="addProjectContent">
              <button className="addProjectBtn" onClick={() => {handleSubmitOthers()}}>Add Others Blog</button>
              <Link to={'/othersblogs'}>
                <div className="addProjectImage">
                  <img src={other} alt="Project Image" />
                </div>
              </Link>
            </div>
          </div>



        </div>
      </div>
    </div>
  )
}

export default AddProject