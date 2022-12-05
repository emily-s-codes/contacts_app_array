import { Link } from "react-router-dom";
import "./SingleContact.css";

const SingleContact = (props, index) => {
    return (<Link to={`/${props.name}`}><div className="singleContactDiv">
        <img src={props.pictureUrl} alt={props.name} />
        <div className="namePop">
            <p className="celebName">{props.name}</p>
            <p className="celebPop"><span>Popularity: </span><br />{props.popularity}</p>
        </div>
    </div></Link>);
}

export default SingleContact;