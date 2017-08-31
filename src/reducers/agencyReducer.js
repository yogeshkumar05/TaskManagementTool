export default function agencyReducer(state={testinfo:""}, action)
{
    switch(action.type)
    {
        case "CREATE":{
            alert("reducer"+action.payload)
            return Object.assign({}, state, {testinfo:action.payload});
        }
    }
    return state;
}