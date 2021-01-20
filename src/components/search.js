import React from "react";
<script href="list.js"></script>;
<script href="search.js"></script>;
<script href="sort.js"></script>


class List extends React.Component {
  state = {
    employees: [],
    empsearch: [],
    search: "",
    sorted: false,
    isSearching: false,
  };

  handleInputChange = (event) => {
    this.setState(
      {
        search: event.target.value,
      },
      this.filterHandler
    );
  };
  filterHandler = () => {
    const { search, employees } = this.state;
    const lowercasedInput = search.toLowerCase();
    console.log(search);
    const filteredData = employees.filter((item) => {
      return Object.keys(item.email).some((email) =>
        item.email.toLowerCase().includes(lowercasedInput)
      );
    });
    console.log(filteredData);
    this.setState({
      empsearch: filteredData,
    });
  };

  render() {
    const { empsearch } = this.state;
    return (
      <>
        <form className="form">
          <input
            name="search"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Search"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
        <table className="table">
          <thead>
            <tr>
              <th>Profile Pic</th>
              <td>
                <button name="first" onClick={this.sortBy}>
                  First
                </button>
              </td>
              <td>
                <button name="last" onClick={this.sortBy}>
                  Last
                </button>
              </td>
              <td>
                <button name="phone" onClick={this.sortBy}>
                  Phone
                </button>
              </td>
              <td>
                <button name="email" onClick={this.sortBy}>
                  Email
                </button>
              </td>
              <td>
                <button name="age" onClick={this.sortBy}>
                  Age
                </button>
              </td>
              <td>
                <button name="location" onClick={this.sortBy}>
                  Location
                </button>
              </td>
            </tr>
          </thead>
          <tbody>
            {empsearch.map((employee) => (
              <tr key={employee.login.uuid}>
                <td>
                  <img src={employee.picture.thumbnail} alt=""></img>
                </td>
                <td>{employee.name.first}</td>
                <td>{employee.name.last}</td>
                <td>{employee.cell}</td>
                <td>{employee.email}</td>
                <td>{employee.dob.age}</td>
                <td>
                  {employee.location.city}, {employee.location.state}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default List;