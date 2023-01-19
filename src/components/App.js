// create your App component here
import { useState, useEffect } from "react";
const App = () => {
    const [dog, setDog]= useState([])
    const [isLoading, setIsLoading]= useState(true)

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then((data)=>{
            setDog(data)
            setIsLoading(false)
        })
        .catch((err)=>{
            setDog([])
        })
    },[])

    return ( 
        <div>
            {isLoading && <p>Loading</p> }
            <img src={dog} alt="A random dog" />
        </div>
     );
}
 
export default App;
