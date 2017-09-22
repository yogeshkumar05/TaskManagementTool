import store from '../store';

export function createProject(data)
{
    store.dispatch({type:"CREATE", payload:data})
}

export function updateProject(data)
{
    store.dispatch({type:"UPDATE", payload:data})
}

export function updateLogin(data)
{
  store.dispatch({type:"UPDATE_LOGIN", payload:data})
}

export function viewProjectDetails(id)
{
  store.dispatch({type:"VIEW_PROJECT", payload:id})
}

export function loadProjectsDetails()
{
  store.dispatch({type:"LOAD_PROJECTS", payload:[]})
}

