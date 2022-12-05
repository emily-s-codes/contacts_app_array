import { Link, useParams } from "react-router-dom";
import "./SingleContactPage.css";
import contacts from "../../data/contacts";
import arrow from "../../assets/img/arrow_back.svg"

const SingleContactPage = () => {
    const params = useParams();

    let nameUse = contacts.find((contact) => contact.id === params.name);
    console.log(nameUse)
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

// for (let i = 0, i<contacts.length, i++) {
//     if (contacts.name === params) {
//         <div className="singleContactDiv">
//             <p>test</p>
//             {/* <img src={contact.pictureUrl} alt={contact.name} />
//     <div className="namePop">
//         <p className="celebName">{contact.name}</p>
//         <p className="celebPop"><span>Popularity: </span><br />{contact.popularity}</p>
//     </div> */}
//         </div>
//     }