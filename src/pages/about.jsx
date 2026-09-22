import Header from "../assets/header.jsx";
import Footer from "../assets/footer.jsx";

function About() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header title={"Meu Blog"} />
                <div className="max-w-4xl mx-auto px-4 py-6">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos esse nihil officia libero cupiditate, cumque sapiente eaque est aliquam ipsam nulla impedit facere ipsum tenetur ad laudantium animi qui aspernatur?</p>
                </div>
            <Footer text={"Todos os direitos reservados"} />
        </div>
    );
}

export default About;