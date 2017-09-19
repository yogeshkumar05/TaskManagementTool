import store from '../store';
import axios from "axios";

export function createProject(data)
{
    //alert("Action"+data)
    store.dispatch({type:"CREATE", payload:data})
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

export function viewProjectDetails(id)
{
  // alert("action"+data)
  store.dispatch({type:"VIEW_PROJECT", payload:id})
}

export function loadProjectsDetails()
{
  store.dispatch({type:"LOAD_PROJECTS", payload:[]})
}

