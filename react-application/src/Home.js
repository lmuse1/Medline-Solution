import React, { useState } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

function Home(){
    // put all of the JavaScript functions Here. ie: useState, setState, useEffect etc.
    // const [search, setSearch] = useState([]);

    // const handleSearch = () =>{
      
    // }
  

    return(
        <>
          <Header/>
          
             {/* Search Bar  */}
    <div className="center-container">
        <div className="search-container">
            <input id="search" type="text" placeholder="Find scorecards..."/>
            <button >Search</button>
            {/* Jessica said to put type="submit" onClick={handleSearch} inside the button */}
        </div>

 <div className="box-container">
 <div className="box">
        <Link to='/ScorecardPage'> {} 
            <div className="create-button" >
                <span className="plus-icon"></span>
            </div>
            </Link>
            <div className="label">Create New</div>
        </div>


        <div className="box">
            <div className="recently-used">
                {/* <!-- Content for the "Recently Used" box goes here --> */}
            </div>
            <div className="label">Recently Used</div>
        </div>
    </div>
        
        <h2>Most Used Templates</h2>

        <div className="most-used-templates">
            
            {/* <!-- Template Items --> */}
            <div className="template-item" onclick="navigateToTemplate('Template 1')">
            <Link to='/Scorecard' style={{ textDecoration: 'none', color: 'black' }}> {} 
                <h3>Template 1</h3>
                <p>Click to view Template 1</p>
                </Link>
            </div>
            <div className="template-item" onclick="navigateToTemplate('Template 2')">
                <h3>Template 2</h3>
                <p>Click to view Template 2</p>
            </div>
            <div className="template-item" onclick="navigateToTemplate('Template 3')">
                <h3>Template 3</h3>
                <p>Click to view Template 3</p>
            </div>
        </div>
        
    </div>

        </>
    );
}
export default Home;