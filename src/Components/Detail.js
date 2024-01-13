import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams, useSearchParams } from 'react-router-dom'
import dbConfig from '../firebase';

function Detail() {
  const { id } = useParams();
  const [State, setState] = useState();
  useEffect(() => {
    dbConfig.collection("Movies").doc(id).get().then((doc) => {
        if(doc.exists){
            setState(doc.data());
        }
        else{
            console.log("Detail cannot be fetched!");
        }
    })
  }, [id])
  return (
    <>
    {
        State && (
            <>
            <Background style={{background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.2), rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url(${State.BackgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            <Container>
            <Content>
                <ImageTitle>
                    <img src={State.TitleImg} />
                </ImageTitle>
                <h2>{State.Genres}</h2>
                <p>{State.Description}</p>
                <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" />
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src='/images/group-icon.png' />
                </GroupWatchButton>
            </Controls>
            </Content>
            </Container>
            </Background>
            </>
        )
    }
   </> 
  )
}

export default Detail

const Container = styled.div`
    width: 95%;
    height: auto;
    margin: 0 auto;
`

const Background = styled.main`
    min-height: 95vh;

    @media screen and (min-width: 991px) and (max-width: 1200px){
        min-height: 72vh;
    }

    @media screen and (min-width: 550px) and (max-width: 991px){
        min-height: 65vh;
    }

    @media screen and (min-width: 320px) and (max-width: 550px){
        min-height: 55vh;
        object-fit: fill;
    }
`

const ImageTitle = styled.div`
    width: 100%;
    max-width: 450px;
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    @media screen and (min-width: 550px) and (max-width: 1200px){
        max-width: 325px;
    }

    @media screen and (min-width: 375px) and (max-width: 550px){
        max-width: 250px;
    }

    @media screen and (min-width: 320px) and (max-width: 375px){
        max-width: 150px;
    }
`

const Content = styled.div`
    display: flex;
    min-height: 95vh;
    overflow: hidden;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    position: relative;

    @media screen and (min-width: 991px) and (max-width: 1200px){
        min-height: 72vh;
    }

    @media screen and (min-width: 550px) and (max-width: 991px){
        min-height: 65vh;
    }

    @media screen and (min-width: 320px) and (max-width: 550px){
        min-height: 55vh;
        object-fit: fill;
    }

    h2{
        color: white;
        font-size: 1.2rem;
        font-weight: 500 !important;
        
        @media screen and (min-width: 550px) and (max-width: 1200px){
            font-size: 1rem;
        }
        
        @media screen and (min-width: 375px) and (max-width: 550px){
            font-size: 0.75rem;
        }
        
        @media screen and (min-width: 320px) and (max-width: 375px){
            font-size: 0.7rem;
            max-width: 250px;
        }
    }

    p{
        line-height: 1.4;
        font-size: 20px;
        padding: 1rem 0;
        color: #f9f9f9;
        max-width: 650px;
        width: 100%;
        height: auto;

        @media screen and (min-width: 550px) and (max-width: 1200px){
            font-size: 1rem;
            max-width: 550px;
        }
        
        @media screen and (min-width: 375px) and (max-width: 550px){
            font-size: 0.75rem;
            padding: 0.5rem 0;
            max-width: 400px;
        }
        
        @media screen and (min-width: 320px) and (max-width: 375px){
            font-size: 0.75rem;
            max-width: 400px;
            padding: 0.3rem 0;
        }
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`

const PlayButton = styled.button`
    cursor: default;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    outline: none;
    border: 1px solid rgba(249,249,249,1);
    background: rgba(249,249,249,1);
    border-radius: 0.345rem;
    padding: 0.5rem 1.5rem;   
    margin-right: 22px;
    
    @media screen and (min-width: 550px) and (max-width: 1200px){
        padding: 0.5rem 1rem;
    }
    
    @media screen and (min-width: 375px) and (max-width: 550px){
        padding: 0.5rem 1rem;
    }
    
    @media screen and (min-width: 320px) and (max-width: 375px){
        border-radius: 0.145rem;
        margin-right: 13px;
        background: #f9f9ff;
        padding: 0.4rem 0.7rem;
    }

    img{
        width: 32px;
        height: auto;
        object-fit: contain;
        z-index: 1500;
        opacity: 1;
        
        @media screen and (min-width: 550px) and (max-width: 1200px){
            width: 25px;
        }
        
        @media screen and (min-width: 320px) and (max-width: 550px){
            width: 19px;
        }
    }

    span{
        color: black;
        font-size: 1.2rem;
        font-weight: 400 !important;
        line-height: 1.08;
        letter-spacing: 1px;

        @media screen and (min-width: 550px) and (max-width: 1200px){
            font-size: 1rem;
        }
        
        @media screen and (min-width: 375px) and (max-width: 550px){
            font-size: 0.8rem;
        }
        
        @media screen and (min-width: 320px) and (max-width: 375px){
            font-size: 0.8rem;
        }
    }
`

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(249,249,249,1);
    color: rgba(249,249,249,1);
    text-transform: uppercase;
    &:hover {
        color: black !important;
        background: rgba(198,198,198,1);
    }

    span{
        color: white !important;
    }
`

const AddButton = styled.button`
    margin-right: 16px;
    width: 39px;
    height: 39px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    span {
        font-size: 30px;
        color: white;
    }

    @media and screen and (min-width: 550px) and (max-width: 1200px){
        height: 35px;
        width: 35px;
    }

    @media and screen and (min-width: 320px) and (max-width: 550px){
        height: 29px;
        width: 29px;
        margin-right: 13px;
    }
`

const GroupWatchButton = styled(AddButton)`
    width: 39px;
    height: 39px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background: rgb(0,0,0,0.5);
    cursor: pointer;
    margin-right: 22px;

    @media and screen and (min-width: 320px) and (max-width: 1200px){
        height: 31px;
        width: 31px;
    }

    img{
        width: 100%;
        heigth: auto;
        object-fit: contain;
        @media and screen and (min-width: 550px) and (max-width: 1200px){
            height: 29px;
            width: 29px;
        }
    
        @media and screen and (min-width: 320px) and (max-width: 550px){
            height: 23px;
            width: 23px;
        }
    }   
`