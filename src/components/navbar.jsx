'use client'
import styled from "@emotion/styled"
import Image from "next/image"
import github from 'public/img/github.svg'
import menu from 'public/img/menu.svg'


export default function NavBar() {


  
    return(
        <Container>
            <div>
                <p style={{fontSize : '3.5em'}}>WQ</p>
            </div>
           
            <div>
                <button>
                    <p style={{fontSize : '1.5em', color : 'black'}}>Menu</p>
                    <Image src={menu} alt="icon menu" width={35}/>
                </button>
            </div>
        </Container>
    )


}




const Container = styled.div`

    display : flex;
    align-items : center;
    justify-content : space-between;
    padding : 2em;
  

    button {
        display : flex;
        align-items : center;
        border : none;
        background-color : unset;
        

    }



  
`