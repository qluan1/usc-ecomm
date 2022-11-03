import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`;

const ImgContent = styled.div`
    flex: 1;
    height: 100%;
`;

const Image = styled.img`
    height: 80%;
`;

const InfoContent = styled.div`
    flex: 1;
    padding: 100px;
    position: absolute;
`;

const Title = styled.h1`
    font-size: 70px;
`;
const Desc= styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;

`;

const Slider = () => {
  return (
    <Container>
        <Arrow direction = "left">
            <ArrowLeftOutlined />
        </Arrow>
        <Wrapper>
            <Slide>
                <ImgContent>
                    <Image src='https://m.media-amazon.com/images/I/61t0rOZEG2L._SX3000_.jpg'/>
                </ImgContent>
                <InfoContent>
                    <Title>SUMMER SAL</Title>
                    <Desc>DONT'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
                    <Button>SHOW NOW</Button>
                </InfoContent>
            </Slide>
        </Wrapper>
        <Arrow direction = "right">
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider
