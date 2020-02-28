import React from "react";
import Question from './Question';
import './Home.css';


class Home extends React.Component{
	render()
	{
  return (
    <div>
      <h1 className="serif  ">Choose Course</h1>
          <select className="drop shadow-5 serif br3">
            <option>mi </option>
            <option>mi2 </option>
            <option>mi3 </option>
            <option>mi4 </option>
          </select>

          <h1 className="serif  ">Choose Question Type</h1>

          <Question />

    </div>
  );
};
};
export default Home;
