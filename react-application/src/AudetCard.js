import React, { useState } from 'react';
import { Link } from 'react-router-dom';




function AudetCard() {
    // Define your component's content here
    return (
<div className="scorecard-content-container">
            <div className="scorecard-container">
              <table className="scorecard-table">
                <thead>
                  <tr>
                    <th>Criteria</th>
                    <th>Comment</th>
                    
                     <th>Strongly Disagree</th>
                    <th>Disagree</th>
                    <th>Agree</th>
                    <th>Strongly Agree</th>
                    
                    </tr>
                  </thead>
              </table>
            </div>
          </div>
            );
        }        

export default AudetCard;