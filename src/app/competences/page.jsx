'use client'

import styled from "@emotion/styled"
import Image from "next/image"
import lp from 'public/img/comp1.png'
import outils from 'public/img/outils.png'
import complementaires from 'public/img/comp2.png'


export default function Competences() {


 
     
    


    return(
        <Container>
            
            <div style={{display : 'flex', alignItems :'center', justifyContent : 'center'}}>
                 <p style={{fontFamily : 'fantasy', color :'grey'}}>&lt;h2&gt;</p> 
                <h2 className="mc">Mes compétences</h2>
                <p style={{fontFamily : 'fantasy', color :'grey'}}>&lt;/h2&gt;</p>
            </div>
            <section>
                <div style={{marginTop :'5em'}}>
                    <div>
                        <p>Langages de programmation</p>
                        <div className="comp">
                            <Image src={lp} alt="compétences principales" width={600} />
                        </div>
                    </div>
                    <div className="comp" style={{marginTop :'2em'}}>
                    <Image src={complementaires} alt="compétences principales" width={600} />
                    </div>
                </div>       
                <div className="outils" style={{marginTop : '2em'}}>
                    <Image src={outils} alt="compétences principales" height={600} />

                </div>         
            </section>
          
    

        </Container>
    )
}



const Container = styled.div`


    @media only screen and (max-width : 850px) {

        .mc{
            font-size : 1.8em;
        }
        .comp{
           img {
            width : 98%;
            height : 100%;
            } 
        }
        .outils{
            margin-left : unset;
            img {
                display : none;
            }
        }
        
        section {
            flex-direction : column;
            align-items : center;
            justify-content : center;
        }
    }



    background-color : #1b1a27;
    height : 120vh;
    display : flex;
    align-items : center;
    justify-content : center;
    flex-direction : column;
    margin-top : 10em;
    

    h2{
        color : rgb(244,244,244);
        font-size : 3.5em;
    }



    section {
        
       
        display : flex;
    }

    


`
