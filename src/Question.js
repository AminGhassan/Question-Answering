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
    questions: [],
    types :[]
	};
	this.getRefsFromChild = this.getRefsFromChild.bind(this);
  }
    getRefsFromChild(childRefs){
    // you can get your requested value here, you can either use state/props/ or whatever you like based on your need case by case 
      let questions = this.state.questions;
      questions.push(childRefs.question.value); 
      this.setState({ questions: questions });
      let types =this.state.types;
      types.push("Essay");
      this.setState({types:types});
    }


  render() {
    return (
      <div>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab className="tc" eventKey="essay" title="Essay">
            <Essay addTextArea={this.getRefsFromChild} />
          </Tab>
          <Tab eventKey="mcq" title="Mcq">
            <Mcq />
          </Tab>
          <Tab eventKey="t/f" title="T/F">
            <TF />
          </Tab>
          <Tab eventKey="complete" title="Complete">
            <Complete />
          </Tab>
        </Tabs>

        <QuestionsTable types={this.state.types} quests={this.state.questions} />
      </div>
    );
  }
}

export default Question;