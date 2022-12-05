import { Link, useParams } from "react-router-dom";
import "./SingleContactPage.css";
import contacts from "../../data/contacts";
import arrow from "../../assets/img/arrow_back.svg"

const SingleContactPage = () => {
    const params = useParams();

    let nameUse = contacts.find((contact) => contact.name === params.contact);
    console.log(params.contact)
    return (
        <div className="individualPage">
            <img src={nameUse.pictureUrl} />
            <h1>{nameUse.name}</h1>
            <p>Popularity: {nameUse.popularity}</p>
            <Link to={"/"}><img src={arrow} alt="back arrow" /></Link>
        </div>
    )
}

export default SingleContactPage;