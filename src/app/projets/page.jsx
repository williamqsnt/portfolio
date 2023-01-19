import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import styled from '@emotion/styled'


export default function Projets () {

    const Proceed = [
        { title : "1 ▸ Axians",  desc : "La mission était de créer leur site internet e-commerce. En effet nous avons utilisé le framework NextJS, également nous avons utilisé un CMS, Contentful, qui a permis à l'entreprise de modifier facilement les informations présentes sur le site."},
        { title : "En attente...",},
      
    ]


    let settings = {
        dot : true,
        infinite : true,
        speed :300,
        slidesToShow : 1,
        slidestoScroll : 1,
        cssEase : "linear"
    }

    return(
        
    <Container>

<div style={{display : 'flex', alignItems :'center', justifyContent : 'center', margin : '2em'}}>
                 <p style={{fontFamily : 'fantasy', color :'grey'}}>&lt;h2&gt;</p> 
                <h2 className="mc">Projets</h2>
                <p style={{fontFamily : 'fantasy', color :'grey'}}>&lt;/h2&gt;</p>
            </div>
          
        <div className='allpage'>
            
            <div className='page'>
                <Slider {...settings}>
                    <div className='card-wrapper'>
                        <div className='card'>
                            <h3>{Proceed[0].title}</h3>
                            <ul style={{textAlign :' center'}}>
                                <li>NextJS</li>
                                <li>Emotion.css</li>
                                <li>CMS Contentful</li>
                                <li>Email.js</li>
                            </ul>
                            <p>{Proceed[0].desc}</p>
                            <a style={{width : '200px', color : "#1b1a27", display : 'flex', aligItems : 'center', justifyContent : 'center', boxShadow :'unset', margin : 'unset'}} href="">Voir le site</a>
                            
                        </div>     
                    </div>
                    <div className='card-wrapper'>
                        <div className='card'>
                            <h3>{Proceed[1].title}</h3>
                            <p>{Proceed[1].desc}</p>
                        </div>
                    </div>
                </Slider>
           </div>          
        </div>
    </Container>
)
}


const Container = styled.div`


ul{
    display : flex;
    flex-wrap : wrap;
    align-items : center;
    justify-content : center;
    
}

li{
    list-style-type : none;
    margin : 0.5em;
    padding : 0.25em 1em;
    background-color : white;
    color : #1b1a27;
    border-radius : 50px;
    display : flex;
    align-items : center;
    justify-content : center;
    font-size : 0.9em;

}



    height : 100vh;

h2{
    color : #1b1a27;
    font-size : 3.5em;
   
}


.allpage{
  display : flex; 
  justify-content : center;
}
  .page{
      width : 70%; 
      border-radius : 10px;
    
  }  
  .card-wrapper{
      border : 5px solid black;
      width : 100%;
      height : 100%;
     
    border : none;
    border-radius : 10px;

  }
  .card{
      display : flex;
      flex-direction : column;
      justify-content : space-evenly;
      align-items : center;
      margin : 1em;
      color : lightgrey;
      border-radius : 20px;
      height : 480px;
    

    
      background-color : #1b1a27;
      
      h3{
        font-family : monospace;
        font-size : 2em;
        text-align : center;
      }

      p{  
          
          font-style : arial;
          margin : 1em;
          text-align : center;
          
         
      }
  }


  button {
    background-color : #1b1a27;
    border-radius : 50%;
    
    
    :hover{
        background-color : rgb(119, 180, 227);
    }
  }
  

`