export default function reducer(state = {
    tweets: [],
    projects:[],
    login:""
  }, action) {
  
    switch (action.type) {
        case "CREATE":
        {
          //alert(JSON.stringify(action.payload))
            return Object.assign({}, state, {projects:action.payload})
        }
        case "UPDATE":
        {
            return Object.assign({}, state, {projects:action.payload})
        }
      case "FETCH_STREAM_REJECTED": {
        return Object.assign({}, state, { error: action.payload })
      }
      case "FETCH_STREAM_FULFILLED": {
        return Object.assign({}, state, { tweets: action.payload, count: action.payload.count });
      }
      case "UPDATE_LOGIN":{
        // alert("reducer"+action.payload)
        return Object.assign({}, state, { login: action.payload});
      }
    }
    return state
  }
  
  
  
  
  
  
  