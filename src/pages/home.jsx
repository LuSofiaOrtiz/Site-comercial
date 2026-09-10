import Header from "../assets/header.jsx";
import Footer from "../assets/footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home(){
    
    return (
        <>
            <Header title="Meu Blog" />
            <body>
                <p>Fala dog</p>
            </body>
            <Footer text="Direitos reservados" />
        </>
    );
}

export default Home;