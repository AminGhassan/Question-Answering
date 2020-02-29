import React from 'react';
import './Table.css';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});
function createData(number, type, question) {
    return { number, type, question };
}

const QuestionsTable =(props)=>
{ 

        const classes = useStyles();
        const rows = props.quests.map((question,index)=>{
            return(
                createData(index+1, props.types[index], question)
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
                      
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.number}>
                                <TableCell component="th" scope="row">
                                    {row.number}
                                </TableCell>
                                <TableCell align="right">{row.type}</TableCell>
                                <TableCell align="right">{row.question}</TableCell>

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