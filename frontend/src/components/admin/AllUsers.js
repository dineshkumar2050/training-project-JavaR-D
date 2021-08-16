import React,{ useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import BodyWrapper from '../common/BodyWrapper'
import styled from 'styled-components'
// import CarItem from '../common/CarItem'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// isAdmin: {
//     type: Boolean,
//     required: true
// },
// isBlocked: {
//     type: Boolean,
//     required: false
// },
// name: {
//     type: String,
//     required: true
// },
// userId: {
//     type: String,
//     required: true,
//     unique: true
// },
// password: {
//     type: String,
//     required: true
// },
// contact: {
//     type: String,
//     required: true
// },
// address: {
//     type: String,
//     required: false
// },
// date: {
//     type: Date,
//     default: Date.now
// }

const label = [
    'Is Admin', 'Is Blocked', 'Name', 'Contact', 'Address', 'Created on'
]

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
});
  
function createData(a, b, c, d, e, f) {
    return { a, b, c, d, e, f };
}

const values = [
    {
        isAdmin: 'No',
        isBlocked: 'No',
        name: 'Dinesh',
        userId: 'dinesh2021',
        contact: '9876543210',
        address: 'Abc',
        date: '16/08/2021'   
    },
    {
        isAdmin: 'No',
        isBlocked: 'No',
        name: 'Dinesh',
        userId: 'dinesh2021',
        contact: '9876543210',
        address: 'Abc',
        date: '16/08/2021'   
    }
]

function createRows(values,createData){
    let rowsData = [];
    let valuesLength = values.length;
    for(let i = 0;i < valuesLength;i++){        
        let element = createData(values[i].isAdmin,values[i].isBlocked,values[i].name,values[i].contact,values[i].address,values[i].date)
        rowsData.push(element)
    }
    return rowsData    
}

const rows = createRows(values,createData);


function AllUsers({ history, ...rest }) {
    const classes = useStyles();
    return (
        <BodyWrapper>
            <Wrapper>
                <Heading className={'mb-4'}>All users</Heading>
                {/* <DataList label={label} values={values} />  */}
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                            {
                                label && label.length > 0 && label.map((data,index) => {
                                    return(
                                        <TableCell key={index}>{data}</TableCell>
                                    )
                                })
                            }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.a}>
                                <TableCell component="th" scope="row">
                                    {row.a}
                                </TableCell>
                                <TableCell align="left">{row.b}</TableCell>
                                <TableCell align="left">{row.c}</TableCell>
                                <TableCell align="left">{row.d}</TableCell>
                                <TableCell align="left">{row.e}</TableCell>
                                <TableCell align="left">{row.f}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Wrapper>
        </BodyWrapper>
    )
}

const Heading = styled.h2``;

const Wrapper = styled.div`
    padding: 30px 20px;
    ul{
        list-style: none;
    }
`;

AllUsers.propTypes = {
    history: PropTypes.object
}

export default AllUsers
