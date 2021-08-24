import React,{useReducer}  from 'react'
import sortStudents from '../helper/sort'

const TableContext = React.createContext({
    studentDetails : [],
    sort : {},
    pagination : {},
    search : '',
    table : [],
    addStudent: (details) => {},
    removeStudent:(id) => {},
    editStudent : (id,details) => {},
    sortStudent: (condition) => {},
    paginate : (condition) =>{},
    filter :(str) => {},
    reset : () =>{},
    updateColumn : (data) => {}
})

const defaultState = {
    studentDetails : sortStudents({col : 0, val :'asc'},localStorage.getItem('studentData') ?JSON.parse(localStorage.getItem('studentData')) : []),
    sort : {
        col : 0,
        val : 'asc'
    },
    pagination : {
        currentPage : 1,
        postsPerPage : 5
    },
    search : '',
    table : [
        {
            name : 'id',
            isShown : true
        },
        {
            name : 'name',
            isShown : true
        },
        {
            name : 'address',
            isShown : true
        },
        {
            name : 'dob',
            isShown : true
        },
        {
            name : 'mark1',
            isShown : true
        },
        {
            name : 'mark2',
            isShown : true
        },
        {
            name : 'mark3',
            isShown : true
        },
        {
            name : 'total',
            isShown : true
        }
    ]
}

const tableReducer = (state,action) => {
    if(action.type === 'ADD'){
        const total = parseInt(action.details.mark1) + parseInt(action.details.mark2) + parseInt(action.details.mark3)
        const id = state.studentDetails.length + 1
        const data = {
            id,
            ...action.details,
            total
        }
        const updatedStudentDetails = [data,...state.studentDetails]
        localStorage.setItem('studentData',JSON.stringify(updatedStudentDetails))
        return {
            ...state,
            studentDetails : updatedStudentDetails
        }
    }
    if(action.type === 'REMOVE'){
        const updatedStudentDetails = state.studentDetails.filter(i => i.id !== action.id)
        localStorage.setItem('studentData',JSON.stringify(updatedStudentDetails))
        return {
            ...state,
            studentDetails : updatedStudentDetails
        }
    }
    if(action.type === 'EDIT'){
        const total = parseInt(action.details.mark1) + parseInt(action.details.mark2) + parseInt(action.details.mark3)
        const existingIndex = state.studentDetails.findIndex(item => item.id === action.id)
        const existingItem = state.studentDetails[existingIndex]
        const updatedItem = {
            ...existingItem,
            ...action.details,
            total
        }
        let updatedStudentDetails = [...state.studentDetails]
        updatedStudentDetails[existingIndex] = updatedItem
        localStorage.setItem('studentData',JSON.stringify(updatedStudentDetails))
        return{
            ...state,
            studentDetails : updatedStudentDetails
        }
    }
    if(action.type === 'SORT'){
        const sortedArr = sortStudents(action.condition,state.studentDetails)
        return{
            ...state,
            studentDetails : sortedArr,
            sort : action.condition
        }
    }
    if(action.type === 'PAGINATE'){
        let updatedPagination;
        if(action.condition.currentPage){
            updatedPagination = {
                ...state.pagination,
                currentPage : action.condition.currentPage
            }
            
        }else{
            updatedPagination = {
                ...state.pagination,
                postsPerPage : action.condition.postsPerPage
            }
        }
     
        return{
            ...state,
            pagination : updatedPagination
        }
    }
    if(action.type === 'SEARCH'){
        return{
            ...state,
            search : action.str
        }
    }
    if(action.type === 'RESET'){
        return {
            ...defaultState,
            studentDetails : sortStudents({col : 0, val :'asc'},localStorage.getItem('studentData') ?JSON.parse(localStorage.getItem('studentData')) : [])
        }
    }
    if(action.type === 'UPDATECOLUMN'){
        return{
            ...state,
            table : action.data
        }
    }
}

export const TableProvider = props => {
    const [tableState,dispatchTableAction] = useReducer(tableReducer,defaultState)
    const addStudentHandler = details => {dispatchTableAction({type:'ADD', details})}
    const removeStudentHandler = id => {dispatchTableAction({type:'REMOVE', id})}
    const editStudentHandler = (id,details) => {dispatchTableAction({type:'EDIT', id,details})}
    const sortStudentHandler = (condition) => {dispatchTableAction({type:'SORT',condition})}
    const paginateHandler = (condition) => {dispatchTableAction({type : 'PAGINATE',condition})}
    const filterHandler = (str) => {dispatchTableAction({type : 'SEARCH',str})}
    const resetHandler = () => {dispatchTableAction({type : 'RESET'})}
    const updateColumnHandler = (data) => {dispatchTableAction({type: 'UPDATECOLUMN',data})}
    const tableContext = {
        studentDetails : tableState.studentDetails,
        sort : tableState.sort,
        pagination : tableState.pagination,
        search : tableState.search,
        table : tableState.table,
        addStudent : addStudentHandler,
        removeStudent : removeStudentHandler,
        editStudent :editStudentHandler,
        sortStudent : sortStudentHandler,
        paginate : paginateHandler,
        filter : filterHandler,
        reset : resetHandler,
        updateColumn : updateColumnHandler
    }
    return <TableContext.Provider value={tableContext} >{props.children}</TableContext.Provider>
}

export default TableContext