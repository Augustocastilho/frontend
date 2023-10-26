import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { Header, Container, Line } from "./Initial";
import { useEffect, useState } from "react";

export default function IcsPage() { 
    const [ process, setProcess ] = useState([]);
    const { name } = useParams();

    // useEffect(async() => { 
    //     //consumir os dados do back
    //     // const promise = await function ...
    //     // setProcess(promise.data); 
    // },[]);

    return(
        <>
        <Container>
            <Header>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjNqOha3Ey3GYDg_syjCBX7aaioDhReiGzLLy5CpTfsIXpyM5wkfpe9FT-PdU2_4fpih0&usqp=CAU" />
                <p>{name.toUpperCase()}</p>
            </Header>
            
            <Processos>
                <Box>
                    <MainTittles>
                        <p>Configuração</p>
                        <p>Processo</p>
                        <p>Status</p>
                    </MainTittles>
                    <Line>.</Line>
                    <RenderProcess status="Parado">
                        <span>Biblioteca</span>
                        <span>AWSVM0102</span>
                        <span>Parado</span>
                    </RenderProcess>
                </Box>
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
    width: 70%; 
    background-color: white;
    border-radius: 12px;
    display: flex; 
    flex-direction: column;
    align-items: center;

    p{ 
        font-size: 20px;
        color: black;
    }
`
const MainTittles = styled.div`
    width: 100%; 
    height: 10%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 40px;
`
const RenderProcess = styled.div`
    width: 100%; 
    height: 30px;
    display: flex; 
    justify-content: space-around;
    padding: 15px 0px 0px 0px;

    span { 
        color: ${props => props.status === "Parado" ? "red" : "black"};
        font-size: 20px;
    }
`