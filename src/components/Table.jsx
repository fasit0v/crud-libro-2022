import { useContext,useEffect } from "react"
import context from "../context/context"
import DataTable from "react-data-table-component"


export default function Table() {

    const {getBooks,lstBooks} = useContext(context)

    useEffect(() => {
        getBooks()
        // eslint-disable-next-line
    }, [])
    
    const column = [{
        name:"ID",
        selector: row => row.id,
        sortable:true
    },
    {
        name:"Libro",
        selector:row => row.name,
        sortable:true
    },
    {
        name:"Autor",
        selector:row => row.author,
        sortable:true
    },
    {
        name:"Edicion",
        selector:row => row.edition,
        sortable:true
    }    


]

    return(
        <>
            <DataTable className="table-responsive border border-dark"
            columns={column} data={lstBooks} title="Books" pagination fixedHeader fixedHeaderScrollHeight="250px"
            />
        </>
        
    )
};