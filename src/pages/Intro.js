import { RotatingSquare } from "react-loader-spinner";
import { styled } from "styled-components";
import gif from "../styles/ufjf4matt.gif";
import { useNavigate } from "react-router-dom";

export default function IntroPage() { 
    const navigate = useNavigate();

    setTimeout(() => {
        navigate("/main");
    }, 4000)
    
    return( 
        <>
        <Container>
            <Intro>
                <p>HACKATON</p>
                <img src={gif} alt="intro" />
                <RotatingSquare
                    height="100"
                    width="100"
                    color="blue"
                    ariaLabel="rotating-square-loading"
                    strokeWidth="4"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
                <span>Espere alguns segundos...</span>
            </Intro>
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%; 
    height: 100%; 
`
const Intro = styled.div`
    width: 100%; 
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Permanent Marker', cursive;

    p { 
        font-size: 50px;
        font-weight: bold;
        margin-top: 120px;
    }

    img { 
        object-fit: cover;
        width: 600px; 
        height: 600px;
    }

    span { 
        font-size: 20px;
    }
`