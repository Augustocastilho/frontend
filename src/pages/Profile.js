import { styled } from "styled-components"
import { Container, Header, Line } from "./Initial"
import { useParams } from "react-router-dom"

export default function Profile() { 
    const { name } = useParams();
    
    return(
        <>
        <Container>
            <Header>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjNqOha3Ey3GYDg_syjCBX7aaioDhReiGzLLy5CpTfsIXpyM5wkfpe9FT-PdU2_4fpih0&usqp=CAU" />
                <p>Perfil</p>
            </Header>

            <BoxContainer>
                <Box>
                    <Top>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjNqOha3Ey3GYDg_syjCBX7aaioDhReiGzLLy5CpTfsIXpyM5wkfpe9FT-PdU2_4fpih0&usqp=CAU" />
                        <p>{name.toUpperCase()}</p>
                    </Top>
                    <Line>.</Line>
                </Box>
            </BoxContainer>
        </Container>
        </>
    )
}

const BoxContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin-top: 100px;
`
const Box = styled.div`
    width: 80%; 
    height: 60%; 
    background-color: white;
    border-radius: 12px;
    display: flex; 
    flex-direction: column; 
    align-items: center;
    padding: 15px 0px 20px 0px;
`
const Top = styled.div`
    width: 95%;
    height: 10%; 
    display: flex;
    justify-content: flex-start;
    align-items: center;
    

    img { 
        width: 60px;
        height: 60px;
        object-fit: cover;
        border-radius: 50%; 
        border: 2px solid black;
        margin-right: 10px;
    }
`