import { useState } from "react";

const AddCategory = ({ setCategory })=>{

    const[inputValue, setInputValue] = useState("");

    const searchGif= (event) => {
        event.preventDefault();
        setCategory(inputValue);
    }

    return(
        <>
            <header className="header_style">
                <form className="flex_container" onSubmit={ searchGif }>
                    <h4 className="tittle_style">Encuentra tus gif favoritos</h4>
                    <input className="input_style"
                        onChange={event => setInputValue(event.target.value)}
                    />
                    <button className="button_style" onClick={ searchGif }>buscar</button>
                </form>
            </header>
        </>
    );
}

export default AddCategory;