import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { Header, Container, Line } from "./Initial";
import { useEffect, useState } from "react";
import axios from "axios";

export default function IcsPage() { 
    //const [ process, setProcess ] = useState([]);
    const { name } = useParams();

    //DESCOMENTAR DEPOIS DE CONECTAR O BANCO
    // useEffect(async() => { 
    //     try {
    //         const promise = await axios.get(`link do banco/${name}`);
    //         setProcess(promise.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
         
    // },[]);

    async function changeState(id,status) { 
        if(status === "Funcionando") { 
            //DESCOMENTAR DEPOIS DE CONECTAR O BANCO
            const info = { status: "Parado" };
            //await axios.put(`link do banco/${id}`,info);
            console.log("Trocou o status");
        } else {
            //DESCOMENTAR DEPOIS DE CONECTAR O BANCO
            const info = { status: "Funcionando" };
            //await axios.put(`link do banco/${id}`,info);
            console.log("Trocou o status");
        }

        //SE NAO ATUALIZAR O ESTADO ASSIM QUE TROCAR DESCOMENTAR A LINHA DEBAIXO, CASO CONTRATRIO SO EXCLUIR A LINHA ABAIXO
        //window.location.reload();
    }

    const process = [ 
        {
            id: 1,
            nome: "Biblioteca",
            ic: "VMAWS0101", 
            criticidade: 2, 
            responsavel: "Engenheiro", 
            status: "Funcionando"
        }, 
        {
            id: 2,
            nome: "Biblioteca",
            ic: "VMAWS0101", 
            criticidade: 2, 
            responsavel: "Engenheiro", 
            status: "Funcionando"
        }, 
        {
            id: 3,
            nome: "Sistema de Gerenciamento Estudantil",
            ic: "VMAWS0101", 
            criticidade: 2, 
            responsavel: "Engenheiro", 
            status: "Parado"
        }, 
        {
            id: 4,
            nome: "Sistema de Gerenciamento Estudantil",
            ic: "VMAWS0101", 
            criticidade: 2, 
            responsavel: "Engenheiro", 
            status: "Parado"
        }
    ];

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
                        <button onClick={() => changeState(proces.id,proces.status)}>Troca</button>
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