export default function Footer({ text }) {
    return (
        <footer className="bg-indigo-600 text-white shadow-md mt-auto">
            <div className="flex max-w-4xl mx-auto px-4 py-4 justify-between items-center">
                <span className="hover:text-indigo-200 cursor-pointer text-2xl">Telefone</span>
                <span className="hover:text-indigo-200 cursor-pointer text-2xl">{text}</span>
                <span className="hover:text-indigo-200 cursor-pointer text-2xl">Email</span>
            </div>
        </footer>
    );
}
