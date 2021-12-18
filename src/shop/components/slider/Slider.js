import React, {useState} from 'react';
import styled from "styled-components";
import {ArrowLeftOutlined,  ArrowRightOutlined} from "@material-ui/icons";
import {sliderItems} from '../../pages/home/store/data';

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  position: relative;
  overflow: hidden;
`

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color:#fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 100;
`

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 30px 0;
  
`
const Slide = styled.div`
  flex: 0 0 100%;
  align-items: center;
  height: 70vh;
  width: 100%;
  -webkit-box-shadow: 0 1px 2px 1px rgb(0 0 0 / 15%);
  box-shadow: 0 1px 2px 1px rgb(0 0 0 / 15%);
  position: relative;
  border-radius: 0.5rem;
  background-image: url(${props => props.imgUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transform: translateX(${props =>props.slideIndex * -100
  }%);
  transition: all 1.5s ease;
`

const InfoContainer = styled.div`
 
  width: 32.333%;
  padding: 50px;
  background-color: #fff;
  height: 100%;
`

const Title = styled.h1`

`

const Description = styled.p`
  margin: 30px 0;
  font-size: 0.8rem;
  font-weight: 500;
`

const Button = styled.button`
  font-size: .875rem;
  height: 2rem;
  padding: 0 1rem;
  border: none;
  color: rgb(35, 47, 50);
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(35 47 50) 0px 0px 0px 1px inset;
  border-radius: 62.5rem;
  font-weight: 700;
  margin-top: 16px;
`



const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left"){
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    }else {
      setSlideIndex(slideIndex < 2 ? slideIndex+1:0);
    }

  }


  return (
    <Container>
      <Arrow direction="left" onClick={ () => handleClick("left") }>
        <ArrowLeftOutlined/>
      </Arrow>

      <Wrapper >
        {
          sliderItems.map(item =>
            <Slide key={item.id} imgUrl={item.img} slideIndex = { slideIndex }>
              <InfoContainer>
                <Title>
                  {item.title}
                </Title>
                <Description>
                  {item.description}
                </Description>
                <Button>
                  {item.buttonTxt}
                </Button>
              </InfoContainer>
            </Slide>
          )
        }
      </Wrapper>

      <Arrow direction="right" onClick={ () => handleClick("right") }>
        <ArrowRightOutlined/>
      </Arrow>
    </Container>
  );
};

export default Slider;