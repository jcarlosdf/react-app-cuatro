import React from 'react'
import { BsGiftFill, BsTrash, BsPencilFill } from "react-icons/bs"
import { Container, ActionStyles} from './StyledComponents/StyledUsersList'

const UsersList = ({user, setUsers, setConfirmUser, formModal}) => {
    
    const confirmUser = (id) =>{
        if(id === 12300000) return   
        const user = setUsers.users.data.find(user=>user.id===id)
        setConfirmUser(prev=>({...prev, user:user, closeModal:false}))
    }
    
    const editUser = (id) => {
        if(id === 12300000) return
        const user = setUsers.users.data.find(user=>user.id===id)
        setUsers.setUser((prev)=>({...prev, mode:"put"}))
        setConfirmUser(prev=>({...prev, user:user}))
        formModal(false)
        
    }

  return (
    <div>
        <Container>
            <input type="hidden" value={user.id}/>
            <h3>{`${user.first_name} ${user.last_name}`}</h3>
            <ul>
                <li>
                    <span>EMAIL:</span>
                    <p>{user.email}</p>
                </li>
                <li>
                    <span>BIRTHDATE:</span>
                    <p><BsGiftFill/> {user.birthday}</p>
                </li>
            

            </ul>
            <div>
                <ActionStyles 
                    color={user.id !== 12300000 ? "" : "grey"}
                    active={user.id !== 12300000 ? 1 : 0}  
                    >
                <i onClick={()=>{confirmUser(user.id)}} >
                    <BsTrash />
                </i>
                </ActionStyles>
                <ActionStyles 
                    color={user.id !== 12300000 ? "" : "grey"}
                    active={user.id !== 12300000 ? 1 : 0}  
                    >
                <i onClick={()=>editUser(user.id)}>
                    <BsPencilFill />
                </i>
                </ActionStyles>
            </div>
        </Container>
    </div>
  )
}

export default UsersList