import React from 'react';

class QuestionsTable extends React.Component
{ 

    render()
    {
    console.log("QUESTIONS",this.props.quests);
    const table= this.props.quests.map((question,index)=>{
        return(<table>
            <tr>
            <td>
                pes pes
            </td> 
        </tr>
        </table>
        )
    });
    return <div>{table}</div>;
}

};
export default QuestionsTable;