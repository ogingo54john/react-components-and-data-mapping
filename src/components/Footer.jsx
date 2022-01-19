

const today = new Date();
const currentDay = today.getFullYear();

function Footer(){
    return (
       <p>copyright {currentDay}</p> 
        );
}
export default Footer;