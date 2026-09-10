import Header from "../assets/header.jsx";
import Footer from "../assets/footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home(){
    
    return (
        <>
            <Header title="Meu Blog" />
            <div>
            <p>Fala dog</p>
            </div>
            <Footer text="Direitos reservados" />
        </>
    );
}

export default Home;