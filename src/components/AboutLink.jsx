import { FaQuestion } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function AboutLink() {
    return (
        <div className="question-mark">
            <Link to="/about"><FaQuestion /></Link>
        </div>
    )
}
