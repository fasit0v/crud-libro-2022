import { useState } from "react"
import { useContext } from "react"; 
import context from "../context/context";

export default function AddButton() {
    
    const {createBooks,getBooks} = useContext(context)

    const [input, setInput] = useState({
        name:"",
        author:"",
        edition:""
    });

    const handleChange = ({target:{name,value}}) => setInput({...input,[name]:value})

    const handleAdd = async(e) =>{
        e.preventDefault()
        try {
            await createBooks(input.name,input.author,input.edition)
            getBooks()
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
            <form className="form-signin w-50 m-auto" onSubmit={handleAdd}>
                 <input className="form-control my-1" name="name" onChange={handleChange} placeholder=" Book Name "></input>
                 <input className="form-control my-1" name="author" onChange={handleChange} placeholder=" Author "></input>
                 <input className="form-control my-1" name="edition" onChange={handleChange} placeholder=" Edition "></input>
                 <button type="submit" className="btn btn-primary"> Add </button>
            </form>
        </>
        
    )
};