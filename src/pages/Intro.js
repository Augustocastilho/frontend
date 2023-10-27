import { RotatingSquare } from "react-loader-spinner";
import { styled } from "styled-components";
import gif from "../styles/ufjf4matt.gif";

export default function IntroPage() { 
    return( 
        <>
        <Container>
            <Intro>
                <p>HACKATON</p>
                <img src={gif} alt="intro" />
                <RotatingSquare
                    height="100"
                    width="100"
                    color="#4fa94d"
                    ariaLabel="rotating-square-loading"
                    strokeWidth="4"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
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

    p { 
        font-size: 50px;
        font-weight: bold;
        margin-top: 120px;
        font-family: 'Permanent Marker', cursive;
    }

    img { 
        object-fit: cover;
        width: 600px; 
        height: 600px;
    }
`