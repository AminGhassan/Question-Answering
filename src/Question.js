import React from 'react';
import { Tabs,Tab} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Essay from './Essay';
import Mcq from './Mcq';
import TF from './TF';
import Complete from './Complete';
import QuestionsTable from './QuestionsTable';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    question:"",
    numberofChoices:"three",
    questions: [],
    types :[],
    choices:[{ch:""}],
    items:[],
	};
  this.getRefsFromChild = this.getRefsFromChild.bind(this);
  this.handleDelete=this.handleDelete.bind(this);
  }
    getRefsFromChild(childRefs){
    // you can get your requested value here, you can either use state/props/ or whatever you like based on your need case by case 
      let questions = this.state.questions;
      questions.push(childRefs.question.value); 
      this.setState({ questions: questions });
      let types =this.state.types;
      types.push("Essay");
      this.setState({types:types});
      let items=[...this.state.items]
      items.push({
        question:childRefs.question.value,
        numberofChoices:"_",
        choices:[]
      })

      this.setState({
        items,
        question:"",
        choices:[],
      });
    }

    handleFormSubmit=(e)=>
    {
      e.preventDefault();
      let items=[...this.state.items];
    
      let types=this.state.types;
      types.push("MCQ")
      this.setState({types:types});

      items.push({
        question:this.state.question,
        numberofChoices:this.state.numberofChoices,
        choices:[...this.state.choices],
      });

      this.setState({
        items,
        question:"",
        choices:[],
      });

    };

    handleInputChange=(e)=>
    {
      let input=e.target;
      let name=e.target.name;
      let value=input.value;

      this.setState({
        [name]:value,
      });
    }

    handleChoiceChange=idx=>event =>
    {
      if(idx+1>this.state.choices.length)
        this.state.choices.push({ch:""})

      const newChoices=this.state.choices.map((choice,sidx)=>
      {
        if(idx!=sidx) return choice;
        return {...choice,ch:event.target.value}
      })
      this.setState({
        choices:newChoices,
      })
    }
    handleDelete(index){
      let items=this.state.items;
      items.splice(index,1);
      this.setState({items:items});
    }

  render() {
    return (
      <div>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab className="tc" eventKey="essay" title="Essay">
            <Essay addTextArea={this.getRefsFromChild} />
          </Tab>
          <Tab eventKey="mcq" title="Mcq">
            <Mcq 
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
              handleChoiceChange={this.handleChoiceChange}
              newQuestion={this.state.question}
              newNumberOfChoices={this.state.numberofChoices}
            />
          </Tab>
          <Tab eventKey="t/f" title="T/F">
            <TF />
          </Tab>
          <Tab eventKey="complete" title="Complete">
            <Complete />
          </Tab>
        </Tabs>

        <QuestionsTable types={this.state.types} items={this.state.items} del={this.handleDelete} />
      </div>
    );
  }
}

export default Question;