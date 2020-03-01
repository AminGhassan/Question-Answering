import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Essay.css';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});
function createData(number, type, question,numberOfChoices,choices) {
    return { number, type, question, numberOfChoices, choices };
}
const addChoice=()=>
    {
        let items=[]
        for(let i=0;i<5;i++)
        {
           items.push(<TableCell align="right">{`choice number ${i+1}`}</TableCell>)
        }
        return items;
    }
const QuestionsTable =(props)=>
{ 

    
        const classes = useStyles();
        const items=props.items;
        const rows = items.map((item,index)=>{
            return(
                createData(index+1, props.types[index], item.question,item.numberofChoices,item.choices)
            );
        });
        return(
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell align="right">Type</TableCell>
                            <TableCell align="right">Question</TableCell>
                            <TableCell align="right">Number Of Choices</TableCell>
                            {
                                addChoice()
                            }
                            <TableCell align="right">X</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row,index) => (
                            <TableRow key={row.number}>
                                <TableCell component="th" scope="row">
                                    {row.number}
                                </TableCell>
                                <TableCell align="right">{row.type}</TableCell>
                                <TableCell align="right" >{row.question}</TableCell>
                                <TableCell align="right">{row.numberOfChoices}</TableCell>
                                {
                                    row.choices.map(choice=>
                                        {
                                            return(<TableCell align="right">{choice.ch}</TableCell>  )
                                        })
                                }
                                <TableCell align="right"><button className="Submit br3 shadow-5 dim" onClick={()=>
                                {
                                    props.del(index)
                                }}>Delete</button></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            // <div>
            //     <table className="Table ba br" >
            //         <tbody >
            //             <tr>
            //                 <th>Question No.</th>
            //                 <th>Question Type</th>
            //                 <th>Question</th>
            //             </tr>
            //             {this.props.quests.map((question,index) => {
            //                 return (
            //                     <tr key={index+1}>
            //                         <td>{index}</td>
            //                         <td>{this.props.types[index]}</td>
            //                         <td>{question}</td>
            //                     </tr>
            //                 );
            //             })}
            //         </tbody>
            //     </table>
            // </div>
        )
    };

export default QuestionsTable;