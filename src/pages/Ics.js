import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { Header } from "./Initial";

export default function IcsPage() { 
    const { name } = useParams();

    return(
        <>
            <Header>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjNqOha3Ey3GYDg_syjCBX7aaioDhReiGzLLy5CpTfsIXpyM5wkfpe9FT-PdU2_4fpih0&usqp=CAU" />
                <p>{name.toUpperCase()}</p>
            </Header>
            <p>{name}</p>
        </>
    )
}