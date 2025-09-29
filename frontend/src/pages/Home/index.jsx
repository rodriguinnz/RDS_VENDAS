import { Link } from "react-router-dom";

export default function Page() {
    return(
        <div>
            <h2>Página Home</h2>
            <Link to='/About'>Sobre</Link>
        </div>
    )
}