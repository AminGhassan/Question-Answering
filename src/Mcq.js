import React from 'react';

class Mcq extends React.Component{

    constructor()
    {
        super();
        this.state=
        {
            selected:3,
        }
    }

    onChange=(event)=>
    {
        let index;
        this.props.handleInputChange(event);
        switch(event.target.value)
        {
            case "three":
            index=3;
            break;

            case "four":
            index=4;
            break;

            case "five":
            index=5;
            break;
        }
        this.setState({
            selected:index,
        });
        
    }
    setChoices=()=>
    {
        let items=[];
        for (let i=0;i<this.state.selected;i++)
        {
            items.push(
            <div>
                <label>{`enter choice number ${i+1}`}</label>
            <input 
                value={this.props.newChoice}
                type="text"
                name="choice"
                onChange={this.props.handleChoiceChange(i)}
                >
                </input>

            </div>
            )
        }

        return items;
    }
    reset=()=>
    {
        document.getElementById("MCQForm").reset();
        this.setState({
            selected:3
        })
    }
    render(){
        return(
            <div>
                <h3>add a new question</h3>
                <form id="MCQForm" onSubmit={this.props.handleFormSubmit}>
                <input value={this.props.newQuestion} type="text" name="question" onChange={this.props.handleInputChange}></input>
                <select 
                onChange={this.onChange}
                name="numberofChoices"
                >

                <option value="three">three</option>
                <option value="four">four</option>
                <option value="five">five</option>
                </select>
                <div>
                    <br></br>
                    {this.setChoices()}
                </div>
                
                <button type="submit" onClick={this.reset} value="Submit">add question</button>
                </form>
            </div>
        );
    }
}
export default Mcq;