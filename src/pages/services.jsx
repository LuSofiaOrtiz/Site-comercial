import Header from "../assets/header.jsx";
import Footer from "../assets/footer.jsx";

function Services() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header title="Meu Blog" />
                <div className="max-w-4xl mx-auto px-4 py-6">
                    <p>Oferecemos diversos serviços para atender suas necessidades.</p>
                </div>
            <Footer text="Direitos reservados" />
        </div>
    );
}

export default Services;