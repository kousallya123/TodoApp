

import './App.css'
import {useState} from 'react'

function App() {
  const [toDos,setToDos] = useState([]);
  const [toDo,setToDo] = useState('');
  return (
    <div className="app">
        <div className='activeTaskk'>
        <h1>Dropped</h1>
        {toDos.map((datas)=>{
          if(datas.drop){
            return(<h2>{datas.text}</h2>);      
          }
          return null;
        })}
      </div>
      <div>
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2 className='datte'>{new Date().toDateString()} </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
       {toDo ? <i onClick={()=>{
        setToDos([...toDos,{id:new Date(),text:toDo,state:false}]) 
        setToDo('')
      }
      } 
      className="fas fa-plus"></i> : ''}
       
      </div>
      <div className="todos">
        { toDos.map((value)=>{
          if(!value.drop && !value.state){
          return(
        <div className="todo">
          <div className="left">
            <input type="checkbox" onChange={(e)=>{
              setToDos(toDos.filter(obj2=>{
                if(obj2.id === value.id){
                obj2.state= e.target.checked
              }
              return obj2
              }))
            }} value={value.state} name="" id=""/>
            <p>{value.text}</p>
            
          </div>
          <div className="right">
            <i  onClick={(e)=>{
              e.target.value = true
              setToDos(toDos.filter((obj2)=>{
                  if(obj2.id === value.id){
                    obj2.drop = e.target.value;
                  }
                  return obj2
              }))
            }} className="fas fa-times"></i>
          </div>
        </div>
          )} })
        }
      </div>
      </div>
      <div className='activeTask'>
        <h1>Done</h1>
      
        {toDos.map((datas)=>{
          if(datas.state){
            return(<h2>{datas.text}</h2>);
                 
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;
