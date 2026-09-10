export default function Footer({ text }) {
    return <footer className="bg-indigo-600 text-white shadow-md">
        <div className="flex max-w-4xl px-4 py-4 justify-between items-center">
            <span className="hover:text-indigo-200 cursor-pointer">Telefone</span>
            <span className="hover:text-indigo-200 cursor-pointer text-4xl">{text}</span>
        </div>
    </footer>
 }
