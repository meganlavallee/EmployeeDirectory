import React from "react";
import search from "./search";
import List from './List';

// class List extends React.Component {
    // state = {
    //     employees: [],
    //     empsearch: [],
    //     search: "",
    //     sort: false,
    //     searching: false,
    // };

    const sortBy = (event) => {
        const name = event.target.name;
    
        const { employees, sorted } = this.state;
    
        let empsearch;
    
        switch (name) {
          case "first":
            if (!sorted) {
              empsearch = employees.sort(function (a, b) {
                return a.name.first > b.name.first ? 1 : -1;
              });
            } else {
              empsearch = employees.reverse();
            }
            this.setState({ employees: empsearch, sorted: !sorted });
    
            break;
          case "last":
            if (!sorted) {
              empsearch = employees.sort(function (a, b) {
                return a.name.last > b.name.last ? 1 : -1;
              });
            } else {
              empsearch = employees.reverse();
            }
            this.setState({ employees: empsearch, sorted: !sorted });
    
            break;
          case "email":
            if (!sorted) {
              empsearch = employees.sort(function (a, b) {
                return a.email > b.email ? 1 : -1;
              });
            } else {
              empsearch = employees.reverse();
            }
            this.setState({ employees: empsearch, sorted: !sorted });
    
            break;
          case "age":
            if (!sorted) {
              empsearch = employees.sort(function (a, b) {
                return a.dob.age > b.dob.age ? 1 : -1;
              });
            } else {
              empsearch = employees.reverse();
            }
            this.setState({ employees: empsearch, sorted: !sorted });
    
            break;
          case "location":
            if (!sorted) {
              empsearch = employees.sort(function (a, b) {
                return a.location.city > b.location.city ? 1 : -1;
              });
            } else {
              empsearch = employees.reverse();
            }
            this.setState({ employees: empsearch, sorted: !sorted });
            break;
          case "phone":
            if (!sorted) {
              empsearch = employees.sort(function (a, b) {
                return a.cell > b.cell ? 1 : -1;
              });
            } else {
              empsearch = employees.reverse();
            }
            this.setState({ employees: empsearch, sorted: !sorted });
            break;
    
          default:
        }
      };


    
// }
export default sortBy;
// export default List;