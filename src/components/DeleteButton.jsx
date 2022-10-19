import { useContext, useState } from "react"
import context from "../context/context"

export default function DeleteButton() {
    
    const {deleteBook,getBooks} = useContext(context)

    const [input, setInput] = useState({
        id:""
    });

    const handleChange = ({target:{name,value}}) => setInput({...input,[name]:value})

    const handleDelete = async (e) =>{
        e.preventDefault()
        try {
            await deleteBook(input.id)
            getBooks()
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
            <form className="form-signin w-50 m-auto" onSubmit={handleDelete}>
                <input className="form-control my-1" name="id" onChange={handleChange} placeholder="ID del libro"></input>
                <button type="submit" className="btn btn-primary"> Delete </button>
            </form>
        </>
    )
};