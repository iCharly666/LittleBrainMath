import React, {useState, useEffect} from 'react';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{isEmpty, size} from 'lodash';
import {addDocument, deleteDocument, getCollection, updateDocument} from './actions'



function Crud() {
    const [task, setTask]=useState("")
    const [cor, setCorreo]=useState("")
    const [descrip, setDescricpion]=useState("")
    const [tasks, setTasks]=useState([])
    const [editMode,setEditMode]=useState(false)
    const[id, setId]=useState("")

    const [error, setError]=useState(null)

    useEffect(()=>{
    (async ()=>{
        const result=await getCollection("tasks")
        console.log(result)
        if(result.statusResponse){
            setTasks(result.data)
        }})   () }, [])


    const addTask= async(e)=>{
        e.preventDefault()
        if(isEmpty(task)){
        console.log("Task vacío")
        return
        }

        if(isEmpty(cor)){
            console.log("Task vacío")
            return
            }

        if(isEmpty(descrip)){
            console.log("Task vacío")
            return
            }
    

    const result =await addDocument("tasks", {name: task, correo: cor, descripcion: descrip})
    if(!result.statusResponse){
        setError(result.error)
        return
    }


        setTasks([...tasks,{id:result.data.id, name:task, correo : cor, descripcion: descrip}])
        setTask("")
        setCorreo("")
        setDescricpion("")
    }

    const saveTask=async (e)=>{
        e.preventDefault()
        if(isEmpty(task)){
        console.log("Task vacío")
        return
        }

        if(isEmpty(cor)){
            console.log("Task vacío")
            return
            }

        if(isEmpty(descrip)){
            console.log("Task vacío")
            return
            }
        


    const result=await updateDocument("tasks", id, {name:task, correo : cor, descripcion: descrip })
    if(!result.statusResponse){
        setError(result.error)
        return
    }

    const editedTasks=tasks.map(item=> item.id===id? {id, name: task, correo: cor, descripcion: descrip }:item)
        setTasks(editedTasks)
        setEditMode(false)
        setTask("")
        setCorreo("")
        setDescricpion("")
        setId("")
    }

    const deleteTask= async(id)=>{
        const result=await deleteDocument("tasks", id)
        if(!result.statusResponse)
        {
            setError(result.error)
            return
        }
        const filteredTasks=tasks.filter(item=>item.id !==id)
        setTasks(filteredTasks)
    }


    const editTask=(tarea)=>{
        setTask(tarea.name)
        setCorreo(tarea.correo)
        setDescricpion(tarea.descripcion)
        setEditMode(true)
        setId(tarea.id)
    }

    return (
        <>
        <div className="container mt-5">
        <h1 className="text-info text-center bg-dark">Formulario</h1>
            <hr/>
            <div className="row align-items-start">
            <div className="col-8">
                <h4 className="text-center">Dudas o Comentarios</h4>
                {
                    size(tasks) ===0 ? (
                    <h5 className="text-center">Aún no hay Comentarios</h5>
                    ) : (
                        
                    <table class="col-4  table table-dark table-striped">
                    <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Descripción</th>
                        <th>Acciones</th>
                        <th> </th>
                    </tr>
                    </thead>
                    
                    
                    <tbody>
                    {
                    tasks.map(item=>(
                        <tr key={item.id}>

                        <td>{item.name}</td>
                        <td>{item.correo}</td>
                        <td>{item.descripcion}</td>
                        
                        <td><button
                        className="btn btn-info btn-sm float-right mx-2"
                        onClick={()=>deleteTask(item.id)}
                        >Eliminar</button></td>
                        
                        <td><button className="btn  btn-warning btn-sm float-right"
                        onClick={()=>editTask(item)}>
                        Editar</button></td>
                        
                        </tr>
                    )) 
                    }
                    </tbody>
                    </table>
                    )
                }
                </div>

            <div className="col-md-4">
            <h4 className="text-center">{editMode ? "Modificar tarea": "Agregar Comentario"}</h4>
            <form onSubmit={editMode ? saveTask :addTask}>
            <label>Nombre</label>
            <input
            type="text"
            className="form-control mb-2"
            placeholder="Ingresa tu nombre..."
            onChange={(text)=>setTask(text.target.value)}
            value={task.name}
            />

            <label>Correo</label>
            <input
            type="email"
            className="form-control mb-2"
            placeholder="Ingresa tu correo..."
            onChange={(text)=>setCorreo(text.target.value)}
            value={cor.correo}
            />

            <label>Descripción</label>
            <input
            type="text"
            className="form-control mb-2"
            placeholder="Ingresar la descripción..."
            onChange={(text)=>setDescricpion(text.target.value)}
            value={descrip.descripcion}
            />

            <button className={editMode ? "btn btn-warning btn-block" :"btn btn-dark btn-block"}
            type="submit"
            > {editMode ? "Guardar" : "Agregar"}</button>

            </form>
            </div>
            </div>
            </div>
        </>     
    )
}

export default Crud;
