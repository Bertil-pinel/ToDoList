import React from "react";
import ListOfTask from "./ListOfTask";
import Header from "./Header";
import Footer from "./Footer";


const App = () =>{
    let Tasks = [];
    Tasks.push({
        date: "10/12/1203",
        content: "Ma premiere tacheMa premiere tacheMa premiere"
        }
    );
        
    Tasks.push({
        date : "10/12/1203",
        content: "Ma deuxieme tache"
        }
    );

    return(
        <div className="App">
            <Header
                completed= "10"
                total= "25" 
            />
            

            <ListOfTask
            tasks = {Tasks}
            />
            
            <Footer/>
                
        </div>
    )
  }
  export default App;