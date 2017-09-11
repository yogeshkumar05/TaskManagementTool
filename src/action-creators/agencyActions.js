import store from '../store';
import axios from "axios";

export function createProject(data)
{
    //alert("Action"+data)
    store.dispatch({type:"c", payload:data})
}

export function updateProject(data)
{
    //alert("Action"+data)
    store.dispatch({type:"UPDATE", payload:data})
}

export function updateLogin(data)
{
  // alert("action"+data)
  store.dispatch({type:"UPDATE_LOGIN", payload:data})
}


var count = 0;
export function fetchStreamingData() {
  count++;//increment the api call number
  axios.get("http://rest.learncode.academy/api/reacttest/tweets")
    .then((response) => {
        //alert("action"+JSON.stringify(response))
      response.data.count = count;
      store.dispatch({ type: "FETCH_STREAM_FULFILLED", payload: response.data })
    })
    .catch((err) => {
      store.dispatch({ type: "FETCH_STREAM_REJECTED", payload: err })
    })
}
