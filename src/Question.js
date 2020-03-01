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
    choice:"",
    choices:[{ch:""}],
    items:[],
    questions: [],
    qwe:{}
	};
	this.getRefsFromChild = this.getRefsFromChild.bind(this);
  }
    getRefsFromChild(childRefs){
    // you can get your requested value here, you can either use state/props/ or whatever you like based on your need case by case
    this.state.questions.push(childRefs.question.value);
    console.log("MA3RAFSH",this.state)
    }

    handleFormSubmit=(e)=>
    {
      e.preventDefault();

      let items=[...this.state.items];

      items.push({
        question:this.state.question,
        numberofChoices:this.state.numberofChoices,
        choices:[...this.state.choices],
      });

      this.setState({
        items,
        question:"",
        choices:[],
        choice:""
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


  render() {
    return (
      <div>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab className="tc" eventKey="essay" title="Essay">
            <Essay addTextArea={this.getRefsFromChild} />
          </Tab>
          <Tab eventKey="mcq" title="Mcq">
            <Mcq handleFormSubmit={this.handleFormSubmit}
                 handleInputChange={this.handleInputChange}
                 handleChoiceChange={this.handleChoiceChange}
                 newQuestion={this.state.question}
                 newNumberOfChoices={this.state.numberofChoices}
                 newChoices={this.state.choices}
            />
          </Tab>
          <Tab eventKey="t/f" title="T/F">
            <TF />
          </Tab>
          <Tab eventKey="complete" title="Complete">
            <Complete />
          </Tab>
        </Tabs>

        <QuestionsTable 
        quests={this.state.questions}
        items={this.state.items}
        />
      </div>
    );
  }
}

export default Question;