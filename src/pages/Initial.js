import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export default function InitialScreen() { 
    const navigate = useNavigate();

    return(
        <>
        <Container>
            <Header>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjNqOha3Ey3GYDg_syjCBX7aaioDhReiGzLLy5CpTfsIXpyM5wkfpe9FT-PdU2_4fpih0&usqp=CAU" />
                <p>Escolha o produto de interesse</p>
            </Header>

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

export const Container = styled.div`
    width: 100%; 
    height: 100%; 
    position: fixed; 
    top: 0; 
    left: 0;
    background-color: gray; 
`
export const Header = styled.div`
    width: 100%; 
    height: 10%; 
    background-color: white; 
    display: flex; 
    align-items: center;
    justify-content: center;
    padding: 10px 0px 5px 10px;
    border-radius: 0px 0px 12px 12px;

    p { 
        font-weight: bold;
        font-size: 40px;
        width: 90%;
        display: flex; 
        justify-content: center;
    }

    img { 
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 8px;
    }
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

    @media (max-width: 1200px) {
        width: 80%;
        padding: 5px 20px; 
    }
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

    @media (max-width: 1200px) {
        width: 130px;
        height: 150px;
        margin: 0px 30px;

        p { 
            font-size: 18px;
        }
    }
`
export const Line = styled.div`
    width: 90%; 
    height: 1px;
    color: white;
    background-color: black;
    border-style: solid;
    border-color: black;
`
