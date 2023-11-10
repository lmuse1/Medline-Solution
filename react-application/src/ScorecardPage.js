


import React, { useState } from 'react';
import SideNav from './SideNav';
import { Link } from 'react-router-dom';

export const ScorecardPage = () => {
  const [department, setDepartment] = useState('');
  const [newCategory, setNewCategory] = useState(''); // New Category Input 
  const [scoringRange, setScoringRange] = useState('');
  const [justifications, setJustifications] = useState(['', '', '', '', '']);

  // Handle department change
  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };
  //Handle new category input change
  const handleNewCategoryChange = (event) => {
    setNewCategory(event.target.value);
  };

  // Handle scoring range change
  const handleScoringRangeChange = (event) => {
    setScoringRange(event.target.value);
  };

  // Handle justification change for a specific index
  const handleJustificationChange = (event, index) => {
    const updatedJustifications = [...justifications];
    updatedJustifications[index] = event.target.value;
    setJustifications(updatedJustifications);
  };
  //Adding Function to get the current timestamp
  const getCurrentTimestamp = () => {
    const now = new Date();
    const formattedDate = now.toLocaleString();
    return formattedDate;
  }
//Handle the submission button 
  const handleSubmit = () => {
    resetForm();
  };
  const resetForm = () => {
    setDepartment( '' );
    setNewCategory ( '' );
    setScoringRange( '' );
    setJustifications (['', '', '', '', '']);
  }

  return (
    <div>
        <SideNav/>
      <div className="top-bar">
        {/* Medline logo */}
        <img src={require("./Medline-logo.png")} alt="Medline Logo" className='logo'/>

        {/* User name */}
        <img src={require("./Clients.png")} alt="Username Logo" className='user-name'/>
        {/* <div className="user-name">User Name</div> */}
      </div>

      <h1 className='Scorecard-header'>SCORECARD CRITERIA</h1>

      {/* Main scorecard subject input */}
      <div className="form-group">
        <label htmlFor='mainSubject'> Enter Main subject</label>
        <input type='text' className='form-control' id='mainSubject' placeholder='Enter Main Subject'/>
      </div>

      {/* Department dropdown */}
      <div className='Department'>
        <select value={department} onChange={handleDepartmentChange}>
          <option value="">Select Department</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
          <option value="Other">Other</option>
          {/* Add more options as needed */}
        </select>
        {/* New category input that appears when "Other" is selected */}
        {department === 'Other' && (
          <input
            type='text'
            placeholder='Enter New Category'
            value={newCategory}
            onChange={handleNewCategoryChange}
          />
        )}
      </div>

      {/* Scoring range dropdown */}
      <div className='Score-range'>
        <select value={scoringRange} onChange={handleScoringRangeChange}>
          <option value="">Select Scoring Range</option>
          <option value="1-5">1 - 5</option>
          <option value="StronglyDisagree-StronglyAgree">Strongly Disagree - Strongly Agree</option>
        </select>
      </div>

      {/* Scoring justifications inputs */}
      {justifications.map((justification, index) => (
        <div className='Justification-score' key={index}>
          <input
            type="text"
            placeholder={`Scoring Justification ${index + 1}`}
            value={justification}
            onChange={(e) => handleJustificationChange(e, index)}
          />
        </div>
      ))}

      <div className='timestamp'>Timestamp: {getCurrentTimestamp()} </div>    
      {/* Submit and Cancel buttons */}
      <div className="form-actions">
       <Link to='/Scorecard'> {} 
        <button onClick={handleSubmit} className="submit-button">Submit</button>
        </Link>
        <Link to='/Home'> {}
        <button onClick={resetForm} className="cancel-button">Cancel</button>
        </Link>
      </div>
    </div>
  );
};

export default ScorecardPage;
