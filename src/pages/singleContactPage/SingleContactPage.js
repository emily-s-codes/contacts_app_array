import { useParams } from "react-router-dom";
import "./SingleContactPage.css";
import contacts from "../../data/contacts";

const SingleContactPage = () => {
    const params = useParams();

    console.log(contacts[0].name === params)
    return (
        <div>test</div>
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