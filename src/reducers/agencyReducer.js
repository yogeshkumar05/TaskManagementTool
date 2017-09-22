import data from '../common/mockData.json';

export default function reducer(state = {
    tweets: [],
    projects:[],
    login:""
  }, action) {
  
    switch (action.type) {
      case "LOAD_PROJECTS":
      {
        
        return Object.assign({}, state, {projects:data.projects})
      }

      case "VIEW_PROJECT":
      {
        
      }
        case "CREATE":
        {
          let projects=state.projects;
          projects.push(action.payload);
            return Object.assign({}, state, {projects})
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
        return Object.assign({}, state, { login: action.payload});
      }
    }
    return state
  }
  
  
  
  
  
  
  