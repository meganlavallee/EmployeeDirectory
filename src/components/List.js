import { url } from "inspector";
import React from "react";
const url = ""

class List extends React.Component {
    state = {
        employees: [],
        empsearch: [],
        search: "",
        sort: false,
        searching: false,
    };

    async componentDidMount() {
        const data = await fetch(url);
        const {results: employees} = await data.json();
        this.setState({employees});
        this.setState({empsearch: employees});
    }


    
}