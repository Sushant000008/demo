const initialData ={
    studentName:'hari'
}
const studentReducer=(state=initialData,action)=>{
    switch(action.type){
        case 'change_name':
            return{
                ...state,
                StudentName:action.payload
            }
        default:
            return state
    }

}
export default studentReducer