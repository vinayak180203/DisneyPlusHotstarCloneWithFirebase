import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectHollywood, selectKidsTv, selectNewTo, selectOriginal, selectPopular, selectTrending } from './Redux/Reducers/MovieReducer'
import { NavLink } from 'react-router-dom'
import Slider from 'react-slick'

function Movies() {
  const original = useSelector(selectOriginal);
  const newTo = useSelector(selectNewTo);
  const popular = useSelector(selectPopular);
  const trending = useSelector(selectTrending);
  const kidsTv = useSelector(selectKidsTv);
  const hollywood = useSelector(selectHollywood);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
}

  return (
    <Container>
        <h4>Original</h4>
        <Content>
        <Carousel {...settings}>
            {
                original && original.map((value, index) => (
                    
                    <Wrap key={index}>
                        <div><NavLink to={`/detail/${value.id}`}>
                            <img src={value.CardImg}  alt={value.id}/>
                        </NavLink></div>
                    </Wrap>
                ))
            }
        </Carousel> 
        </Content>
        <h4>New To Disney</h4>
        <Content>
        <Carousel {...settings}>
            {
                newTo && newTo.map((value, index) => (
                    
                    <Wrap key={index}>
                        <div><NavLink to={`/detail/${value.id}`}>
                            <img src={value.CardImg}  alt={value.id}/>
                        </NavLink></div>
                    </Wrap>
                ))
            }
        </Carousel> 
        </Content>
        <h4>Trending</h4>
        <Content>
        <Carousel {...settings}>
            {
                trending && trending.map((value, index) => (
                    
                    <Wrap key={index}>
                        <div><NavLink to={`/detail/${value.id}`}>
                            <img src={value.CardImg}  alt={value.id}/>
                        </NavLink></div>
                    </Wrap>
                ))
            }
        </Carousel> 
        </Content>
        <h4>Hollywood</h4>
        <Content>
        <Carousel {...settings}>
            {
                hollywood && hollywood.map((value, index) => (
                    
                    <Wrap key={index}>
                        <div><NavLink to={`/detail/${value.id}`}>
                            <img src={value.CardImg}  alt={value.id}/>
                        </NavLink></div>
                    </Wrap>
                ))
            }
        </Carousel> 
        </Content>
        <h4>Disney Kid</h4>
        <Content>
        <Carousel {...settings}>
            {
                kidsTv && kidsTv.map((value, index) => (
                    
                    <Wrap key={index}>
                        <div><NavLink to={`/detail/${value.id}`}>
                            <img src={value.CardImg}  alt={value.id}/>
                        </NavLink></div>
                    </Wrap>
                ))
            }
        </Carousel> 
        </Content>
        <h4>Popular</h4>
        <Content>
        <Carousel {...settings}>
            {
                popular && popular.map((value, index) => (
                    
                    <Wrap key={index}>
                        <div><NavLink to={`/detail/${value.id}`}>
                            <img src={value.CardImg}  alt={value.id}/>
                        </NavLink></div>
                    </Wrap>
                ))
            }
        </Carousel> 
        </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div`

`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr)); 
`

const Carousel = styled(Slider)`
    position: relative;
    ul li button{
        &::before{
            font-size: 11px;
            color: rgb(150, 158, 171);
        }
    }

    ul li.slick-active button:before{
        &::before{
            color: white !important;
        }
    }

    & > button{
        opacity: 0;
        z-index: 1500;
        width: 5vw;
        height: 100%;

    &:hover{
        opacity: 1;
        z-index: 2000;
        transition: opacity 0.2s ease 0s;
        }
    }

    // .slick-prev{
    //     left: -60px;
    // }

    .slick-next{
        position: absolute;
        left: 400%;
    }

    .slick-list{
        overflow: initial !important;
    }
`

const Wrap = styled.div`
    postion: relative;

    div{
        border-radius: 4px;
        padding: 5px;
        display: block;
        opacity: 1;
        z-index: 2000;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0 16px 10px -10px;
        cursor: default;
        object-position: center;

        img{
            width: 100%;
            height: 20vh;
            object-fit: fill;
            border-radius: 4px;
            opacty: 1;
            z-index: 1500;
            position: relative;

            @media screen and (max-width: 991px){
                width: 100%;
                height: auto;
                object-fit: cover; 
            }
        }

        &:hover {
            opacity: 1;
            z-index: 2000;
            padding: 0;
            border: 4px solid rgba(249,249,249,0.8);
            transition: all 500ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
        }
    }
`
