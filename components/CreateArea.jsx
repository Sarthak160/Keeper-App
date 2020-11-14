import React,{useState} from 'react'
import Note from './Note';

function CreateArea() {

    //implementing hooks
    const [note, setnote] = useState({
        title : "",
        content : ""
    });

    function handleChange(event) {
        const {name,value} = event.target;
        setnote(prevNote =>{
            return {
                ...prevNote, //spread operator
                [name]:value
            };
        });
    }

    function submitNote(event) {
        event.preventDefault();

    }
    return (
        <div>
            <form>
            <input 
            name = "title" 
            onChange = {handleChange}
            value = {note.title}
            placeholder ="Title"
            
            />    
            <textarea 
            name="content" 
            onChange = {handleChange}
            placeholder ="Take a note...."
            value = {note.content}
            rows = '3'
            >
            </textarea>
             <button onClick ={submitNote}>Add</button>
             </form>            
        </div>
    )
}

export default CreateArea
