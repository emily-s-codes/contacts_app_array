import "./Homepage.css";
import contacts from "../data/contacts"
import React, { useState } from "react";
import SingleContact from "../components/singleContact/SingleContact";

const Homepage = () => {
    const [sortContacts, setSortContacts] = useState(contacts);
    const [alpha, setAlpha] = useState(false);
    const [pop, setPop] = useState(false);

    const handleSortFirst = () => {
        setAlpha(current => !current);
        const sortFirstName = [...sortContacts];
        alpha ? sortFirstName.sort((a, b) => a.name.localeCompare(b.name)) : sortFirstName.sort((a, b) => b.name.localeCompare(a.name));
        setSortContacts(sortFirstName)
    }

    const handleSortPopularity = () => {
        setPop(current => !current);
        const sortPopularity = [...sortContacts];
        pop ? sortPopularity.sort((a, b) => a.popularity - b.popularity) : sortPopularity.sort((a, b) => b.popularity - a.popularity);
        setSortContacts(sortPopularity)
    }

    return (<div className="homepageDiv">
        <button onClick={handleSortFirst}>Sort by First Name</button>
        <button onClick={handleSortPopularity}>Sort by Popularity</button>
        {sortContacts.map((contact, index) => {
            return (<SingleContact key={index} {...contact} />)
        })}
    </div>);
}

export default Homepage;