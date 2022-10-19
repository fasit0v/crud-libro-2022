import AddButton from "../components/AddButton"
import DeleteButton from "../components/DeleteButton"
import RefreshButton from "../components/RefreshButton"
import Table from "../components/Table"

export default function Home(){
    return(
    <>
        <div className="w-75 mx-auto">
            <Table/>
        </div>
        <div className="container">
            <div className="row">
                <div className="col">
                <AddButton/>
                </div>
                <div className="col">
                <RefreshButton/>
                </div>
                <div className="col">
                <DeleteButton/>
                </div>
            </div>
        </div>
    </>
)
}