import { Container } from "react-bootstrap";
import Menu from "./component/navbar";
import Footer from "./component/footer";
import { useState } from "react";

export default function Promessa(){
    const [prometido, setPrometido] = useState(" ")
    setTimeout(() => {
       setPrometido("é uma divida")
         document.title = "promessa é divida"
    }, 2000);
    return <>
    <Menu />
    <Container>
        Promessa {prometido === "" ? <img src="./negocio.gif" width={10} height= {10}/> : prometido}
    </Container>
    <Footer/>
    </>
}