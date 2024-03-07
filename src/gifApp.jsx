import AddCategory from './components/AddCategory'
import { useState } from 'react'
import ViewGif from './components/ViewGif';

export default function GifApp() {

    const [category, setCategory] = useState("cats");
    
    return(
        <>  
            <AddCategory setCategory={setCategory}/>    
            <ViewGif category={category}/>
            <footer className='footer_style'>
                <p>realizado por Sebastián Londoño Restrepo</p>
            </footer>    
        </>
    )
  
}
