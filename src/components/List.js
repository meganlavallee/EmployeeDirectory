// Importing
import React from "react";

const url = "https://randomuser.me/api/?results=200&nat=us";

// Everything searched for
class List extends React.Component {
  state = {
    employees: [],
    empsearch: [],
    search: "",
    sorted: false,
    isSearching: false,
  };

//   Ajax Call
  async componentDidMount() {
    const data = await fetch(url);
    const { results: employees } = await data.json();
    this.setState({ employees });
    this.setState({ empsearch: employees });
  }
  sortBy = (e) => {
    const name = e.target.name;

    const { employees, sorted } = this.state;

    let sortedEmps;

    switch (name) {
      case "first":
        if (!sorted) {
          sortedEmps = employees.sort(function (a, b) {
            return a.name.first > b.name.first ? 1 : -1;
          });
        } else {
          sortedEmps = employees.reverse();
        }
        this.setState({ employees: sortedEmps, sorted: !sorted });

        break;
      case "last":
        if (!sorted) {
          sortedEmps = employees.sort(function (a, b) {
            return a.name.last > b.name.last ? 1 : -1;
          });
        } else {
          sortedEmps = employees.reverse();
        }
        this.setState({ employees: sortedEmps, sorted: !sorted });

        break;
      case "email":
        if (!sorted) {
          sortedEmps = employees.sort(function (a, b) {
            return a.email > b.email ? 1 : -1;
          });
        } else {
          sortedEmps = employees.reverse();
        }
        this.setState({ employees: sortedEmps, sorted: !sorted });

        break;
      case "age":
        if (!sorted) {
          sortedEmps = employees.sort(function (a, b) {
            return a.dob.age > b.dob.age ? 1 : -1;
          });
        } else {
          sortedEmps = employees.reverse();
        }
        this.setState({ employees: sortedEmps, sorted: !sorted });

        break;
      case "location":
        if (!sorted) {
          sortedEmps = employees.sort(function (a, b) {
            return a.location.city > b.location.city ? 1 : -1;
          });
        } else {
          sortedEmps = employees.reverse();
        }
        this.setState({ employees: sortedEmps, sorted: !sorted });
        break;
      case "phone":
        if (!sorted) {
          sortedEmps = employees.sort(function (a, b) {
            return a.cell > b.cell ? 1 : -1;
          });
        } else {
          sortedEmps = employees.reverse();
        }
        this.setState({ employees: sortedEmps, sorted: !sorted });
        break;

      default:
    }
  };
  handleInputChange = (e) => {
    this.setState(
      {
        search: e.target.value,
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