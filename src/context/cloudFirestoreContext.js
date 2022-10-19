import React ,{useState}from "react";
import {db} from "../firebaseConfig/firebase";
import cloudFirestoreContext from "./context";
import { collection, doc, getDocs, setDoc, updateDoc, deleteDoc} from "firebase/firestore";

export default function FirestoreContext(props){
    const {children} = props

    const [books, setBooks] = useState([]);

    const incrementalCount = async() =>{
        let count = 0
        const lstDocs =  await getDocs(collection(db,"books"))
        lstDocs.forEach((i)=>{
            if (count < parseInt(i.id)){
                count =parseInt(i.id)
            }
        })
        return count + 1
    }

    const getBooks = async() =>{
        const snap = await getDocs(collection(db,"books"))
        const lstBooks = []
        snap.forEach((i)=>{
            lstBooks.push({...i.data(),id: i.id})
        })
        setBooks(lstBooks)
    }

    const createBooks = async(name,author,edition) => {
        await setDoc(doc(db,"books", (await incrementalCount()).toString()),{
        "name":name,
        "author":author,
        "edition":edition,
    })}

    const updateBooks =  async(id,name,author,edition) => await updateDoc(doc(db,"books",id),{
        "name":name,
        "author":author,
        "edition":edition,
    })

    const deleteBook = async(id)=> {
        await deleteDoc(doc(db,"books",id))
    }

    return (
        <cloudFirestoreContext.Provider value={{getBooks,lstBooks:books,createBooks,updateBooks,deleteBook}}>{children}</cloudFirestoreContext.Provider>
    )
}