import React from "react";
import ListOfTask from "./ListOfTask";
import Header from "./Header";
import Footer from "./Footer";


const App = () =>{

    
    let Tasks = [];
    Tasks.push({
        "date": "10/12/1203",
        "content": "Ma premiere tacheMa premiere tacheMa premiere",
        "isChecked" : true,
        }
    );
        
    Tasks.push({
        "date" : "10/12/1203",
        "content": "Vaisselle",
        "isChecked" : false,
        }
    );
    Tasks.push({
        "date" : "10/12/1203",
        "content": "devoirs",
        "isChecked" : false,
        }
    );
    Tasks.push({
        "date" : "10/12/1203",
        "content": "GAMING",
        "isChecked" : false,
        }
    );

    let checked = 0;
    for(let i=0 ; i < Tasks.length ; i++){
        if(Tasks[i].isChecked){
            checked++;
        }
    }

    return(
        <div className="App">
            <Header
                completed= {checked}
                total= {Tasks.length} 
            />
            

            <ListOfTask
                tasks = {Tasks}
            />
            
            <Footer/>
                
        </div>
    )
    
  }
  export default App;