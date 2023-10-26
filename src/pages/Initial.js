import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export default function InitialScreen() { 
    const navigate = useNavigate();

    return(
        <>
        <Container>
            <Header>OIIII</Header>

            <Menus>
                <Menu>
                    <Itens> 
                        <Item onClick={() => navigate(`/ic/estudos`)}>
                            <a>📚</a>
                            <p>Estudos</p>
                        </Item>
                        <Item onClick={() => navigate(`/ic/empresa`)}>
                            <a>🏭​</a>
                            <p>Empresa</p>
                        </Item>
                        <Item onClick={() => navigate(`/ic/transito`)}>
                            <a>🚦​</a>
                            <p>Trânsito</p>
                        </Item>
                        <Item onClick={() => navigate(`/ic/videos`)}>
                            <a>📽️​</a>
                            <p>Videos</p>
                        </Item>
                    </Itens>
                    <Line>.</Line>
                    <Itens> 
                        <Item onClick={() => navigate(`/ic/catraca`)}>
                            <a>​🚫</a>
                            <p>Catacraca</p>
                        </Item>
                        <Item onClick={() => navigate(`/ic/atendimento`)}>
                            <a>📲​</a>
                            <p>Atendimento</p>
                        </Item>
                        <Item onClick={() => navigate(`/ic/agro`)}>
                            <a>👨‍🌾</a>
                            <p>Agro</p>
                        </Item>
                        <Item onClick={() => navigate(`/ic/jogos`)}>
                            <a>🎮</a>
                            <p>Jogos</p>
                        </Item>
                    </Itens>
                </Menu>
            </Menus>
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%; 
    height: 100%; 
    position: fixed; 
    top: 0; 
    left: 0;
    background-color: gray; 
`
const Header = styled.div`
    width: 100%; 
    height: 10%; 
    background-color: white; 
    display: flex; 
    align-items: center;
    justify-content: center;
`
const Menus = styled.div`
    width: 100%; 
    height: 40%; 
    margin-top: 250px;
    display: flex; 
    justify-content: center; 
`
const Menu = styled.div`
    width: 60%; 
    height: 100%; 
    background-color: white;
    border-radius: 12px;
    display: flex; 
    flex-direction: column; 
    align-items: center;
`
const Itens = styled.ul`
    width: 100%
    height: 40%;
    display: flex; 
    justify-content: space-around; 
`
const Item = styled.div`
    width: 150px; 
    height: 150px;
    background-color: #DCDCDC;
    border-radius: 12px;
    transition: background 2s, color 1s;
    margin: 0px 50px;
    display: flex; 
    flex-direction: column; 
    align-items: center;
    justify-content: center;

    a { 
        margin-top: 10px;
        font-size: 60px;
    }

    p { 
        font-size: 22px;
        font-weight: bold;
    }

    &:hover, 
    &:focus{ 
        cursor: pointer; 
        background: black;
        color: white;
    }
    
    &:active {  
        transform: scale(0.98);
        box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    }
`
const Line = styled.div`
    width: 90%; 
    height: 1px;
    color: white;
    background-color: black;
    border-style: solid;
    border-color: black;
`
