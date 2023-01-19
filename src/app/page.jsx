'use client'

import styled from '@emotion/styled'
import notion from 'public/video/notion.mp4'


import Competences from './competences/page'
import { useEffect, useRef } from "react"
import Typed from 'typed.js'




export default function Home() {



  const textRef = useRef(null);
        
  useEffect(() => {
    const options = {
      strings: ['projets','idées', 'réalisations', "créations"],
      typeSpeed: 200,
      loop : true,
      showCursor: false
    }
    const typed = new Typed(textRef.current, options);
    return () => {
      typed.destroy();
    }
  }, []);




  return (
    <Container>
      <div className='title'>
        <p style={{color : 'rgb(119, 180, 227)'}}>DÉVELOPPEUR REACT </p>
      
        <br/>
        <h1>Le développeur web qui donnera vie à vos 
        <div style={{height : '2em'}}>
          <p style={{whiteSpace : 'nowrap', color : 'rgb(252,187,180)'}} ref={textRef}></p>
        </div></h1>
        <div style={{ display : 'flex', alignItems : 'center', justifyContent : 'center'}}>
          <p style={{margin : '1em 2em'}}>Développeur web spécialisé dans la création de sites web React. je suis capable de créer des sites web modernes, réactifs et performants.
           Je m&lsquo;assure que chaque site web que je crée soit optimisé pour les moteurs de recherche et facile à utiliser pour les utilisateurs.
            Mon objectif est de créer des sites web qui non seulement répondent aux besoins de mes clients, mais qui les dépassent</p>
        </div>

        <a href="mailto:quesnot.william@hotmail.com">Collaborez dès maintenant</a>

        <video src={notion} autoPlay muted loop id="my-video" />        
      </div>

      <Competences />

    </Container>
  )
}




const Container = styled.div`

    @media only screen and (max-width : 850px){
      img {
        height : 20px;
      }
    }

    .title {
      margin-top : 5em;
      display : flex;
      align-items : center;
      justify-content:  center;
      flex-direction : column;
      height : 90vh;
    }

    p{
      font-weight : 400;
      text-align : center;
    }

    h1{
      color : rgb(51,51,51);
      font-size : 2.5em;
      margin-left : auto;
      margin-right : auto;
      margin : 0.5em;
      text-align : center;
    }

    video {
      border-radius : 10px;
      box-shadow : 0px 0px 1em grey;
      width : 100vh;
      position : relative;
      top : 100px;
    }

    a {
      padding : 1em 2em;
      font-size : 1.25em;
      background-color : rgb(185, 219, 237);
      border : none;
      transition : 0.2s;
      cursor : pointer;
      border-radius : 5px;
      box-shadow : 2px 4px 0.5em lightgrey;
      margin : 1em;
      font-weight : 500;

      :hover{
        background-color : rgb(119, 180, 227);
      }
    }

`
