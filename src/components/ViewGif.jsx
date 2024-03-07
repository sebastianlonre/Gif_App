import { useEffect, useState } from "react";
import { GetGif } from "../helpers/GetGif";

const ViewGif = ({ category }) => {

    const [resultData, setResultData] = useState([]);

    useEffect(() => {
        GetGif(category).then(
            gifData => {
                setResultData(gifData);
            }
        );
    }, [category]);

    return (
        <>  
            <div>
                <div className="div_gif">
                    {resultData.length > 0 ? (
                        resultData.map((gif, index) => (
                            <img 
                            key={index}
                            src={gif.url}
                            />
                        ))
                    ) : (
                        <p className="text_error_style">No se encontraron GIFs con la busqueda {category}</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default ViewGif;