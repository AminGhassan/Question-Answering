import React from 'react';

class QuestionsTable extends React.Component
{ 
    addChoice=()=>
    {
        let items=[]
        for(let i=0;i<5;i++)
        {
            items.push(<th>{`choice number ${i+1}`}</th>)
        }
        return items;
    }
    render()
    {
        const items=this.props.items;
        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                        <th>Question</th>
                        <th>number of choices</th>
                        {
                            this.addChoice()
                        }
                        </tr>

                    
                    {items.map(item=>
                    {
                        return(
                            <tr>
                                <td>{item.question}</td>
                                <td>{item.numberofChoices}</td>
                                {
                                    item.choices.map(choice=>
                                        {
                                            return(<td>{choice.ch}</td>)
                                        })
                                }
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        );
    }

};
export default QuestionsTable;