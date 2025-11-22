import { useEffect } from "react";
import useCustomMove from "../../hooks/useCustomMove";
import type { useCustomMoveReturn } from "../../types/global";
import { getList } from "../../api/todoApi";


function ListComponent() {
    
    const {page,size,moveToRead}: useCustomMoveReturn = useCustomMove()

    useEffect(() => {

        getList({page, size}).then(data => {
            console.log(data)
        })

    }, [page, size])
    
    return ( 
        <div> Todo List Component </div>
     )
}

export default ListComponent;