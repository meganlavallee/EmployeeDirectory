import React from "react";

class List extends React.Component {
    state = {
        employees: [],
        empsearch: [],
        search: "",
        sort: false,
        searching: false,
    };

    sortBy = (event) => {
        const name = event.target.name;
    
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


    
}