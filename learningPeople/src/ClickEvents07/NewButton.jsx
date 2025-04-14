const NewButton = () => {

    const handleClickDouble = (e) => e.target.textContent = "Ouch 😓";
    const handleClickE = (e) => console.log(e);
   
    let count = 0;
    const handleClick = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        }
        else{
            console.log(`${name} stop clicking me!`);
        }
    };

    const handleClick2 = (name) => console.log(`${name} stop clicking me!!😡`)
    return (
        <button
            // style={{
            //     padding: "10px 20px",
            //     fontSize: "1.2em",
            //     backgroundColor: "#28a745",
            //     color: "white",
            //     border: "none",
            //     borderRadius: "8px",
            //     cursor: "pointer"
            // }}
            onClick={(e) => handleClickE(e)}
            onDoubleClick={(e) => handleClickDouble(e)}
        >
            Click me 😁
        </button>
    );
};
export default NewButton