import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Contacts from "./Contacts"

function App(){
    return(
        <div>
            <Header />
            <Note
            No={Contacts[0].No}
            name={Contacts[0].name}
            img={Contacts[0].src}
            phone={Contacts[0].phone}
            email={Contacts[0].email}
            location={Contacts[0].location}
             />
             <Note
            No={Contacts[1].No}
            name={Contacts[1].name}
            img={Contacts[1].src}
            phone={Contacts[1].phone}
            email={Contacts[1].email}
            location={Contacts[1].location}
             />
             <Note
            No={Contacts[2].No}
            name={Contacts[2].name}
            img={Contacts[2].src}
            phone={Contacts[2].phone}
            email={Contacts[2].email}
            location={Contacts[2].location}
             />
             <Note
            No={Contacts[3].No}
            name={Contacts[3].name}
            img={Contacts[3].src}
            phone={Contacts[3].phone}
            email={Contacts[3].email}
            location={Contacts[3].location}
             />
            <Footer />
        </div>
    )
}

export default App;