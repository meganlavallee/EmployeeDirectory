import { url } from "inspector";
import React from "react";

<script href="list.js"></script>;
<script href="search.js"></script>;
<script href="sort.js"></script>
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
export default List;