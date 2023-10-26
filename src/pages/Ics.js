import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { Header, Container } from "./Initial";

export default function IcsPage() { 
    const { name } = useParams();

    return(
        <>
        <Container>
            <Header>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjNqOha3Ey3GYDg_syjCBX7aaioDhReiGzLLy5CpTfsIXpyM5wkfpe9FT-PdU2_4fpih0&usqp=CAU" />
                <p>{name.toUpperCase()}</p>
            </Header>
            
            <Processos>
                <Box></Box>
                <Box></Box>
            </Processos>
        </Container>
        </>
    )
}

const Processos = styled.div`
    width: 100%; 
    height: 100%;
    display: flex; 
    align-items: center; 
    margin-top: 150px;
    flex-direction: column;

`
const Box = styled.div`
    width: 50%; 
    height: 200px; 
    background-color: white;
    border-radius: 12px;
    margin-bottom: 50px;
`