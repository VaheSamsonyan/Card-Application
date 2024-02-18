import "./Header.css"
export default function Header({title}) {

    return (
        <header className="header">
            <h1 className="text">{title}</h1>
        </header>
    );

}