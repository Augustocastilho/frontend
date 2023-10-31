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
                        <Item onClick={() => navigate(`/ic/todos`)}>
                            <a>📄</a>
                            <p>Todos</p>
                        </Item>
                        <Item onClick={() => navigate(`/ic/VMAWS0101`)}>
                            <a>📚</a>
                            <p>Estudos</p>
                        </Item>
                        <Item onClick={() => navigate(`/ic/VMAWS0102`)}>
                            <a>🏭​</a>
                            <p>Empresa</p>
                        </Item>
                        <Item onClick={() => navigate(`/ic/VMAWS0103`)}>
                            <a>🚦​</a>
                            <p>Trânsito</p>
                        </Item>
                        <Item onClick={() => navigate(`/ic/VMAWS0104`)}>
                            <a>📽️​</a>
                            <p>Videos</p>
                        </Item>
                    </Itens>
                    <Line>.</Line>
                    <Itens> 
                        <Item onClick={() => navigate(`/ic/VMAWS0105`)}>
                            <a>​🚫</a>
                            <p>Catacraca</p>
                        </Item>
                        <Item onClick={() => navigate(`/ic/VMAWS0106`)}>
                            <a>📲​</a>
                            <p>Atendimento</p>
                        </Item>
                        <Item onClick={() => navigate(`/ic/VMAWS0107`)}>
                            <a>👨‍🌾</a>
                            <p>Agro</p>
                        </Item>
                        <Item onClick={() => navigate(`/ic/VMAWS0108`)}>
                            <a>🎮</a>
                            <p>Jogos</p>
                        </Item>
                        <Item onClick={() => navigate(`/profile/lucas martins`)}>
                            <a>😀</a>
                            <p>Perfil</p>
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
    background-color: lightgray; 
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
    font-family: 'Agbalumo', cursive;

    p { 
        font-weight: bold;
        font-size: 40px;
        width: 90%;
        display: flex; 
        justify-content: center;
        word-wrap: break-word;
        text-align: center;
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
    justify-content: space-around;

    @media (max-width: 1200px) {
        width: 90%;
        padding: 5px 20px; 
    }
`
const Itens = styled.ul`
    width: 100%
    height: 40%;
    display: flex; 
    justify-content: space-around;
    margin: 10px 0px; 
`
const Item = styled.div`
    width: 150px; 
    height: 150px;
    background-color: #DCDCDC;
    border-radius: 12px;
    transition: background 1s, color 0.5s;
    margin: 0px 50px 0px 10px;
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
        margin-top: 20px;
    }

    &:hover, 
    &:focus{ 
        cursor: pointer; 
        background: gray;
        color: white;
    }
    
    &:active {  
        transform: scale(0.98);
        box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    }

    @media (max-width: 1200px) {
        width: 110px;
        height: 130px;
        margin: 0px 25px;

        p { 
            font-size: 17px;
        }
    }

    @media (max-width: 800px) {
        width: 100px;
        height: 120px;
        margin: 0px 15px;

        p { 
            font-size: 16px;
        }

        a { 
            margin-top: 10px;
            font-size: 50px;
        }
    }

    @media (max-width: 700px) {
        width: 93px;
        height: 130px;
        margin: 0px 9px;

        p { 
            font-size: 15px;
        }

        a { 
            margin-top: 10px;
            font-size: 50px;
        }
    }
`
export const Line = styled.div`
    width: 95%; 
    height: 3px;
    color: white;
    background-color: black;
    border-style: solid;
    border-color: black;
    margin: 20px 0px 5px 0px;
`
