import store from '../store';


export function createPage(data)
{
    alert("Action"+data)
    store.dispatch({type:"CREATE", payload:data})
}