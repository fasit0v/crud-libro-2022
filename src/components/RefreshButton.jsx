import { useContext, useState } from "react";
import context from "../context/context";

export default function RefreshButton() {
    
    const {updateBooks,getBooks} = useContext(context)

    const [input, setInput] = useState({
        id:"",
        name:"",
        author:"",
        edition:""
    });

    const handleChange = ({target:{name,value}}) => setInput({...input,[name]:value})

    const handleUpdate = async(e) =>{
        e.preventDefault()
        try {
            await updateBooks(input.id,input.name,input.author,input.edition)
            getBooks()
        } catch (error) {
            console.log(error)
    }
}

    return(
        <>
            <form className="form-signin w-50 m-auto" onSubmit={handleUpdate}>
                <input className="form-control my-1" name="id" onChange={handleChange} placeholder="ID del libro"></input>
                <input className="form-control my-1" name="name" onChange={handleChange} placeholder="Nombre del libro"></input>
                <input className="form-control my-1" name="author" onChange={handleChange} placeholder="Autor del libro"></input>
                <input className="form-control my-1" name="edition" onChange={handleChange} placeholder="Edicion del libro"></input>
                <button type="submit" className="btn btn-primary"> Refresh </button>
            </form>

        </>
    )
};