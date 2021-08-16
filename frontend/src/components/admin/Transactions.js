import React from 'react'
import PropTypes from 'prop-types'
import BodyWrapper from '../common/BodyWrapper'
// import DataList from '../common/DataList'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'user'
// },
// car: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'carsAvailable'
// },
// booking: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'booking'
// },
// bookingType: {
//     type: String,
//     required: true
// },
// paymentStatus: {
//     type: String,
//     required: true
// },
// paymentInfo: {
//     cardNumber: {
//         type: Number
//     },
//     cvvNumber: {
//         type: Number
//     },
//     expDate: {
//         type: String
//     }
// },
// modeOfPayment: {
//     type: String,
//     required: true
// },
// amount: {
//     type: Number,
//     required: true
// },
// date: {
//     type: Date,
//     default: Date.now
// }

const label = [
    'User', 'Car', 'Booking type', 'Payment Status', 'Mode of Payment', 'Amount', 'Date', 'Action'
]

// function createData(arr){
//     let obj = {};
//     for(let value of arr){
//         obj[value] = value;
//     }
//     return obj;
// }

// createData(label);

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
});
  
function createData(a, b, c, d, e, f, g, h) {
    return { a, b, c, d, e, f, g, h };
}

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const values = [
    {
        user: 'Dinesh',
        car: 'Hyundai i20',
        booking: {},
        bookingType: 'Daily',
        paymentStatus: 'Done',
        paymentInfo: {
            cardNumber: '',
            cvvNumber: '',
            expDate: ''
        },
        modeOfPayment: 'COD',
        amount: '379',
        date: '16/08/2020'
    },
    {
        user: 'Harry',
        car: 'Honda City',
        booking: {},
        bookingType: 'weekly',
        paymentStatus: 'Done',
        paymentInfo: {
            cardNumber: '1234567890123456',
            cvvNumber: 767,
            expDate: '16/08/2028'
        },
        modeOfPayment: 'card',
        amount: '379',
        date: '16/08/2020'
    }
]

function createRows(values,createData){
    let rowsData = [];
    let valuesLength = values.length;
    for(let i = 0;i < valuesLength;i++){        
        let element = createData(values[i].user,values[i].car,values[i].bookingType,values[i].paymentStatus,values[i].modeOfPayment,values[i].amount,values[i].date,'')
        rowsData.push(element)
    }
    return rowsData    
}

const rows = createRows(values,createData);

// console.log('label', createObj(label));

// function createData(arr) {
//     return { name, calories, fat, carbs, protein };
// }

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }

function Transactions({ ...rest }) {
    const classes = useStyles();
    return (
        <BodyWrapper>
            <Wrapper>
                <Heading className={'mb-4'}>Transactions</Heading>
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
                                <TableCell align="left">{row.g}</TableCell>
                                <TableCell align="left">{row.h}</TableCell>
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
    text-align:center;
`;

Transactions.propTypes = {

}

export default Transactions
