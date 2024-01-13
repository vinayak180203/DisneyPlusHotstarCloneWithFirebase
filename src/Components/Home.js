import React, {useEffect} from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'
import dbConfig from '../firebase'
import { useDispatch } from 'react-redux'
import { setDisneyMovies } from './Redux/Reducers/MovieReducer'

function Home() {
  const dispatch = useDispatch();

  let populars = [];
  let hollywoods = [];
  let newTos = [];
  let kidsTvs = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    dbConfig.collection("Movies").onSnapshot((snapshot) =>  {
      // console.log(snapshot);
      snapshot.docs.map((doc) => {
          console.log(doc);
          switch(doc.data().type) {
            case "popular":
              populars = [...populars, {id: doc.id, ...doc.data()}];
              break;
            case "hollywood":
              hollywoods = [...hollywoods, {id: doc.id, ...doc.data()}];
              break;
            case "newTo":
              newTos = [...newTos, {id: doc.id, ...doc.data()}];
              break;
            case "kidsTv":
              kidsTvs = [...kidsTvs, {id: doc.id, ...doc.data()}];
              break;
            case "original":
              originals = [...originals, {id: doc.id, ...doc.data()}];
              break;
            case "trending":
              trending = [...trending, {id: doc.id, ...doc.data()}];
              break;
            default:
              break;
          }
      });

      dispatch(setDisneyMovies({
        popular: populars,
        hollywood: hollywoods,
        newTo: newTos,
        kidsTv: kidsTvs,
        original: originals,
        trending: trending
      }))
    })
  }, [])

  return (
    <Container>
        <ImgSlider />
        <Viewers />
        <Movies />
    </Container>
  )
}

export default Home

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vh + 5px);
    position: relative;
    overflow-x: hidden;
    &:before {
        background: url("/images/home-background.png") center center / cover no-repeat fixed; 
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`