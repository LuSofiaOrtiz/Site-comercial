import Header from "./assets/header.jsx";
import Footer from "./assets/footer.jsx";
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header title="DOG Blog" />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 w-full">
        <p className="text-gray-600 text-center">
          Bem-vindo ao DOG Blog! Siga as instruções do DOG.
        </p>
      </main>
    <Footer text="Dog"/>
    </div>
  );
}

export default App;
