import type useCustomMove from "../hooks/useCustomMove"


interface PageParam {
    page ? : string | number
    size ? : string | number
}

interface useCustomMoveReturn {
    moveToList: (pageParam ?: PageParam) => void
    moveToModify : (tno : number) => void
    moveToRead : (tno : number) => void
    
    page : number
    size : number
}

