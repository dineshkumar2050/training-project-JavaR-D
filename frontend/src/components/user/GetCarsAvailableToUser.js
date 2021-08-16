import React,{ useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import BodyWrapper from '../common/BodyWrapper'
import styled from 'styled-components'
import CarItem from '../common/CarItem'

const cars = [
    {
        id: 1,
        name: 'Honda City',
        imageUrl: 'https://imgd.aeplcdn.com/0x0/n/cw/ec/40535/all-new-city-exterior-right-front-three-quarter.jpeg',
        bookingType: [
            'Daily', 'Weekly', 'Monthly'
        ],
        status: 'Available',
        priceByType: [
            {
                key: 'AC',
                value: '12'
            },
            {
                key: 'Non AC',
                value: '10'
            }            
        ]
    },
    {
        id: 2,
        name: 'Hyundai i20',
        imageUrl: 'https://imgd.aeplcdn.com/1056x594/cw/ec/38332/Hyundai-Elite-i20-Right-Front-Three-Quarter-148187.jpg?v=20190702152341&wm=1&q=85',
        bookingType: [
            'Daily', 'Weekly', 'Monthly'
        ],
        status: 'Available',
        priceByType: [
            {
                key: 'AC',
                value: '10'
            },
            {
                key: 'Non AC',
                value: '9'
            }            
        ]
    }
]

function GetCarsAvailableToUser({ history, ...rest }) {
    const [availableCars, setAvailableCars] = useState([])
    useEffect(() => {
        setAvailableCars(cars)
    },[])
    return (
        <BodyWrapper>
            <Wrapper className={'text-center py-3'}>
                <Heading>Click any Car to choose, book and show details</Heading>
                <List>
                {
                    availableCars && availableCars.length > 0 &&
                    availableCars.map((car) => {
                        return(
                            <CarItem car={car} />
                        )
                    })
                }
                </List>
            </Wrapper>
        </BodyWrapper>
    )
}

const Heading = styled.h2``;

const List = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-gap: 15px;
    padding: 0;

    @media only screen and (max-width: 992px){
        grid-template-columns: repeat(3, 1fr);
    }

    @media only screen and (max-width: 767px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 575px){
        grid-template-columns: repeat(1, 1fr);
    }
`;

const Wrapper = styled.div`
    padding: 30px 20px;
    ul{
        list-style: none;
    }
`;

GetCarsAvailableToUser.propTypes = {
    history: PropTypes.object
}

export default GetCarsAvailableToUser
