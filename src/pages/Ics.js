import { useParams } from "react-router-dom";
import { styled } from "styled-components";

export default function IcsPage() { 
    const { name } = useParams();

    return(
        <>
            <p>{name}</p>
        </>
    )
}