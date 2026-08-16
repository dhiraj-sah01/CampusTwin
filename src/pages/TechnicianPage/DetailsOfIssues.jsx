import React from 'react'

import './TechnicianPage.css'

function DetailsOfIssues({setShowDetails}) {
  return (
    <div className='details-container'>
        <div className="close-container">
            <button className="closebtn" onClick={()=> setShowDetails(false)}>❌</button>
        </div>
      

    </div>
  )
}

export default DetailsOfIssues
