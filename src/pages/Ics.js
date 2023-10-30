import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { Header, Container, Line } from "./Initial";
import { useEffect, useState } from "react";
import axios from "axios";

export default function IcsPage() { 
    const [ process, setProcess ] = useState([]);
    const { name } = useParams();

    useEffect(() => {
        try {
            if(name === "todos") {
                axios.get(`http://localhost:3001/getTableData`)
                    .then((response) => setProcess(response.data));
            }
            else {
                axios.get(`http://localhost:3001/getTableData?ic=${name}`)
                    .then((response) => setProcess(response.data));
            }
        } catch (error) {
            console.log(error);
        }

    }, []);

    async function changeState(id) {
        await axios.patch(`http://localhost:3001/alterarStatus?id=${id}`);
        console.log("Trocou o status");
        window.location.reload();
    }

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

                    {process.map(proces => (
                    <RenderProcess status={proces.status}>
                        <span id="name">{proces.nome}</span>
                        <span>{proces.ic}</span>
                    <State status={proces.status}>
                        <span>{proces.status}</span>
                        <button onClick={() => changeState(proces.id)}>Troca</button>
                    </State>
                     </RenderProcess>
                    ))}
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
    padding-bottom: 30px;
    max-height: 600px;
    overflow-y: auto;
    
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
    margin: 20px 0px 10px 0px;
`
const RenderProcess = styled.div`
    width: 100%; 
    height: 30px;
    display: flex; 
    justify-content: space-around;
    margin: 18px 0px;

    span { 
        color: ${props => props.status === "Parado" ? "red" : "black"};
        font-size: 20px;
    }

    span#name { 
        width: 140px;
        word-wrap: break-word;
        text-align: center;
    }
`
const State = styled.div`
    display: flex; 
    align-items: center;

    button { 
        width: 40px;
        height: 35px;
        border-radius: 50%;
        border: none;
        background-color: ${props => props.status === "Funcionando" ? "green" : "red"};
        margin-left: 5px;  
        color: white;
        font-size: 10px;
        display: flex; 
        justify-content: center;
        align-items: center;
        font-weight: bold;

        &:hover{ 
            cursor: pointer; 
        }
    }
`