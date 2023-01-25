import Card from "../components/shared/Card"
import { Link } from "react-router-dom"

export default function AboutPage() {
    return (
        <div>

            <Card>
                <h2>About FeedBack UI</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat aperiam, in suscipit omnis veritatis aliquid! Odio nobis, ipsam modi sequi aut cumque quia aliquam libero consequuntur harum commodi tenetur ea dolorum quam, id adipisci est? Temporibus quae reprehenderit pariatur dolorum!</p>
                <p><Link to="/">Go to Home</Link></p>
            </Card>

        </div>
    )
}
