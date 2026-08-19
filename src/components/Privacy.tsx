import { useParams } from "react-router-dom"

export default function Privacy(){
    const {userName} = useParams();
    return (
    <div className="text-orange-950">
        <p>Hey I am privacy</p>
        <p>{userName}</p>

    
    </div>
    
            )

}