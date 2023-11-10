import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideNav from './SideNav';

class Scorecard extends Component {
  constructor(props) {
    super(props);

    // Initialize your table data with some default values
    this.state = {
      rows: 5,
      columns: 4,
      name: '', // Add state for name
      scorecardName: '', // Add state for scorecardName
      selectedDepartment: 'HR', // Add state for selectedDepartment with a default value
    };
  }

  // Function to add a new row
  addRow = () => {
    this.setState((prevState) => {
      return { rows: prevState.rows + 1 };
    });
  };

  // Function to remove a row
  removeRow = () => {
    if (this.state.rows > 1) {
      this.setState((prevState) => {
        return { rows: prevState.rows - 1 };
      });
    }
  };

  // Function to add a new column
  addColumn = () => {
    this.setState((prevState) => {
      return { columns: prevState.columns + 1 };
    });
  };

  removeColumn = () => {
    if (this.state.columns > 1) {
      this.setState((prevState) => {
        return { columns: prevState.columns - 1 };
      });
    }
  };

  render() {
    const { rows, columns, name, scorecardName, selectedDepartment } = this.state;

    const rowHeaders = [];
    const rowsData = [];

    for (let i = 1; i <= rows; i++) {
      const descriptionInput = (
        <td key={`description_${i}`}>
          <input type="text" name={`description_${i}`} placeholder="Description" />
        </td>
      );

      const commentInput = (
        <td key={`comment_${i}`}>
          <input type="text" name={`comment_${i}`} placeholder="Comment" />
        </td>
      );

      const ratingInputs = [];

      for (let j = 0; j < columns; j++) {
        const rating = ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"][j];
        const ratingInput = (
          <td key={`rating_${i}_${j}`}>
            <input type="radio" name={`rating_${i}`} value={rating} />
          </td>
        );
        ratingInputs.push(ratingInput);
      }
      rowHeaders.push(descriptionInput);
      rowsData.push(<tr key={`row_${i}`}>{[descriptionInput, commentInput, ...ratingInputs]}</tr>);
    }

    const scoreRange = []; // For Score-Range

    for (let i = 0; i < columns; i++) {
      const scoreRangeInput = (
        <th key={`score_range_${i}`}>
          <input type="text" name={`score_range_${i}`} placeholder="Score Range" />
        </th>
      );
      scoreRange.push(scoreRangeInput);
    }

    return (
      <div className="temp-container">
        <SideNav />
        <div className="temp">
        <div className="top-bar">
        {/* Medline logo */}
        {/* <img src={require("./Medline-logo.png")} alt="Medline Logo" className='logo'/> */}

        {/* User name */}
        <img src={require("./Clients.png")} alt="Username Logo" className='user-name'/>
      </div>
          <div className="scorecardinput-container">
          
            <h1>Scorecard</h1>
            {/* Name input */}
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
            <br />
            <br />

            {/* Scorecard Name input */}
            <label htmlFor="scorecardName">Main Subject Name:</label>
            <input
              type="text"
              id="scorecardName"
              placeholder="Enter Main Subject"
              value={scorecardName}
              onChange={(e) => this.setState({ scorecardName: e.target.value })}
            />
            <br />
            <br />

            {/* Department dropdown */}
            <div className="dropdown-box" >
            <label htmlFor="department">Department:</label>
            <select
              id="department"
              value={selectedDepartment}
              onChange={(e) => this.setState({ selectedDepartment: e.target.value })}
  style={{ width: '400px', height: '30px' }} // Adjust the width and height as needed
>
              <option value="Human Resources">HR</option>
              <option value="Finance">Finance</option>
              <option value="IT">IT</option>
            </select>
            </div>
            <br />
            <br />
          </div>

          <div className="tool-container">
            <button className="tool-button" onClick={this.addRow}>Add Criteria</button>
            <button className="tool-button" onClick={this.removeRow}>Remove Criteria</button>
            <button className="tool-button" onClick={this.addColumn}>Add Range</button>
            <button className="tool-button" onClick={this.removeColumn}>Remove Range</button>
            {/* <Link to='/AudetCard'> {}  */}
            <button className="tool-button">Save</button>
          {/* </Link> */}
          </div>

          <div className="scorecard-content-container">
            <div className="scorecard-container">
              <table className="scorecard-table">
                <thead>
                  <tr>
                    <th>Criteria</th>
                    <th>Comment</th>
                    {/* Adding Score-Range here */}
                    {/* <th>Strongly Disagree</th>
                    <th>Disagree</th>
                    <th>Agree</th>
                    <th>Strongly Agree</th> */}
                    {scoreRange} 
                    
                  </tr>
                </thead>

                <tbody>{rowsData}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Scorecard;
