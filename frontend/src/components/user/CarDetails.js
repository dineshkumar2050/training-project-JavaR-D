import React,{ useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import BodyWrapper from '../common/BodyWrapper'
import styled from 'styled-components'
import Button from '../common/Button'

function CarDetails({ match,location, ...props }) {
    const [bookingTypeValue, setBookingTypeValue] = useState('')
    const [priceByTypeValue, setPriceByTypeValue] = useState({})
    const id = match.params.id;
    const { car } = location.state;
    const handleBookingTypeListItem = (e,data) => {
        e.preventDefault();
        setBookingTypeValue(data)
    }
    const handlePriceByTypeListItem = (e,data) => {
        e.preventDefault();
        setPriceByTypeValue(data)
    }
    const bookCar = (e,id) => {
        e.preventDefault();
        console.log('Send id to backend to book car',id)
    }
    return (
        <BodyWrapper>
            <Wrapper className={'text-center py-3'}>
                <Heading className='mb-4'>Car Details</Heading>
                <CarDetail key={car.id}>
                    <TopSection>
                        <Image 
                            src={car.imageUrl}
                            alt={car.name}
                            onError={
                                event => {
                                    event.target.src = 'https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png'
                                    event.onerror = null
                                }
                            }
                        />
                    </TopSection>
                    <BottomSection className={'py-3'}>
                        <NameHeading className={'mb-2'}>{car.name}</NameHeading>
                        <BookingType  className={'mb-2'}>
                            <AllOtherHeadings>Booking Type</AllOtherHeadings>
                            <BookingTypeList 
                                className={'d-flex justify-content-center justify-content-md-start align-items-center flex-wrap'}>
                                {
                                    car.bookingType && car.bookingType.length > 0 &&
                                    car.bookingType.map((bookingType,index) => {

                                        return(
                                            <BookingTypeListItem 
                                                style={{ background: bookingType ===  bookingTypeValue ? '#0f6dfa' : '#fff', color: bookingType ===  bookingTypeValue ? '#fff' : '#000' }}
                                                onClick={e => handleBookingTypeListItem(e,bookingType)} 
                                                className={index > 0 && index < car.bookingType.length - 1 ? 'mx-3': ''} 
                                                key={index}
                                            >
                                                {bookingType}
                                            </BookingTypeListItem>
                                        )
                                    })
                                }
                            </BookingTypeList>
                        </BookingType>
                        <Status  className={'mb-2'}>
                            <AllOtherHeadings>Status</AllOtherHeadings>
                            {car.status}
                        </Status>
                        <PriceByType>
                            <AllOtherHeadings>Price(perkm) by type</AllOtherHeadings>
                            <PriceByTypeList className={'d-flex align-items-center justify-content-md-start justify-content-center flex-wrap'}>
                                {
                                    car.priceByType && car.priceByType.length > 0 &&
                                    car.priceByType.map((priceByType,index) => {
                                        return(
                                            <PriceByTypeListItem 
                                                style={{ background: priceByType.value ===  priceByTypeValue.value ? '#0f6dfa' : '#fff', color: priceByType.value ===  priceByTypeValue.value ? '#fff' : '#000' }}
                                                onClick={e => handlePriceByTypeListItem(e,priceByType)} 
                                                key={index} 
                                                className={'d-flex align-items-center'}
                                            >
                                                {
                                                    <PriceByTypeListItemTag>{priceByType.key}</PriceByTypeListItemTag>
                                                }
                                                {
                                                    <PriceByTypeListItemValue>&#8377;{priceByType.value}</PriceByTypeListItemValue>
                                                }
                                            </PriceByTypeListItem>
                                        )
                                    }) 
                                }
                            </PriceByTypeList>
                        </PriceByType>
                        <Button text={'Book Car'} handleClick={e => bookCar(e,id)} />
                    </BottomSection>
                </CarDetail>
            </Wrapper>
        </BodyWrapper>
    )
}

const PriceByTypeListItemValue = styled.span`
    font-size: 12px;
    border: 1px solid #000;
    padding: 5px 15px;
`;
const PriceByTypeListItemTag = styled.span`
    font-size: 12px;
    border: 1px solid #000;
    padding: 5px 15px;
    border-right: none;
`;
const PriceByTypeListItem = styled.li`
    margin:0 10px 10px 0;
`;
const PriceByTypeList = styled.ul``;
const PriceByType = styled.div``;
const Status = styled.div``;
const BookingType = styled.div``;
const BookingTypeList = styled.ul``;
const BookingTypeListItem = styled.li`
    font-size: 12px;
    border: 1px solid #000;
    padding: 5px 15px;
`;
const AllOtherHeadings = styled.h6``;
const NameHeading = styled.h5``;
const Wrapper = styled.div`
    padding: 30px 20px;
    ul{
        list-style: none;
        padding: 0;
    }
`;
const Image = styled.img`
    max-width: 200px;
    object-fit: cover;
`;
const Heading = styled.h2``;

const CarDetail = styled.div`
    display: grid;
    grid-template-columns: 40% calc(60% - 20px);
    grid-template-rows: auto;
    grid-gap: 20px;

    @media only screen and (max-width: 767px){
        display: block;
    }
`;

const TopSection = styled.div`
    border: 1px solid #000;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 767px){
        flex: 1;
    }
`;

const BottomSection = styled.div`
    border: 1px solid #000;
    border-top: none;
    padding: 20px;

    @media only screen and (min-width: 767px){
        text-align: left;
        border-top: 1px solid #000;
    }
`;

CarDetails.propTypes = {
    match: PropTypes.object,
    location: PropTypes.object
}

export default CarDetails
