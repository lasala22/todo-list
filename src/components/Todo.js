import { Component } from "react";
export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            newItem: ""
        };
    }
    updateInput(key, value) {
        //update react state
        this.setState({
            [key]: value
        });
    }
    addItem() {
        //create item with unique id
        const newItem = {
            id: 1 + Math.random(),
            value: this.state.newItem.slice()
        };
        //copy of current list of items
        const list = [...this.state.list];
        //add new item to list
        list.push(newItem);
        //update state with new list and reset newItem input
        this.setState({
            list,
            newItem: ""
        });
    }
    deleteItem(id) {
        //copy current list of items
        const list = [...this.state.list];

        //filter out item being delete
        const updateList = list.filter(item => item.id !== id);

        this.setState({list: updateList});
    }
    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <input type={"text"}
                    value={this.state.newItem}
                    onChange={e => this.updateInput("newItem", e.target.value)}
                />
                <button
                    onClick={() => this.addItem()}>Add</button>
                <br />
                <ul>
                    {this.state.list.map(item => {
                        return (
                            <li key={item.id}>{item.value}
                                <button onClick={() => this.deleteItem(item.id)}>X</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}