import { useEffect, useState } from "react";
import { fetchUsers, postUser,deleteReq } from "../redux/fetching/fetchAction";
import{ useDispatch, useSelector}from "react-redux"
import { styled } from "styled-components";
import {DeleteOutlined} from '@ant-design/icons';

function Container() {

    const Div=styled.div`
    display:flex;
    width:100%;
    justify-content:space-around;
    border:1px solid black;
    align-items:center;
    `

    const Delete=styled(DeleteOutlined)`
    color:red;
    cursor:pointer;
    `
    const Div1=styled.div`
    border:1px solid black;`
    const Input=styled.input`
    height:25px;
    width:150px;
    margin:10px;` 
    const Div2=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:16px;
    background-color:whitesmoke;
    `
    const Button=styled.button`
    margin:10px;
    background-color:aqua;
    border:none;
    height:25px;
    width:70px;`

   const dispatch=useDispatch()
//    const [pending,setPending]=useState(0)
    useEffect(()=>{
      dispatch(fetchUsers())
    },[])

    const[inputValue,setInputValue]=useState({})
    const users=useSelector(state=>state?.users)
    const loading=useSelector(state=>state?.loading)
    const error=useSelector(state=>state?.error)

    const handleChange=(e)=>{
        const {name,value}=e?.target
        setInputValue({...inputValue,[name]:value})
    }

    const handleSubmit=(e)=>{
       
        dispatch(postUser(inputValue))
    //    setPending(pending+1)
        // setPending(pending+1)
       
    }
    const handleDelete=(e)=>{
    // setPending(pending+1)
    dispatch(deleteReq(e))
    }
 
    console.log(users)
    return loading?(<h1>loading...</h1>):error?(<h1>{error}</h1>):(
        <div>
            <h3>UserDetails</h3>
            <Div1>
                <Div>
            <h3>Name:</h3>
            <h3>Email:</h3>
            <h3>Delete:</h3>
           
            </Div>
                {
                    
                    users && users.map((item,index)=>{
                        return(
                            
                            <Div>
                            
                            <h3>{item?.name}</h3>
                            <h3>{item?.email}</h3>
                            <Delete onClick={()=>handleDelete(index)} />
                            </Div>
                        )
                    })
                }
            </Div1>
             
            <Div2>
                <Input placeholder="enter name" name="name"  onChange={handleChange}/>
                <Input placeholder="enter email" name="email" onChange={handleChange}/>
                <Button onClick={handleSubmit}>Submit</Button>
            </Div2>
           
        </div>
     )
     
}

export default (Container);