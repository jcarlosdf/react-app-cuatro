import { useState, useEffect } from 'react'
import axios from 'axios'
import { FcAbout } from "react-icons/fc";
import './App.css'
import UsersList from './Components/UsersList';
import UsersForm from './Components/UsersForm';


function App() {
  const defaultUser = [{
    id: 12300000,
      first_name: 'Admin (default)',
      last_name: '',
      email: 'admin@users.com',
      birthday: '23/09/1987'
  }]
  const [users, setUsers] = useState({
    loading:true, 
    data: defaultUser, 
    mode:"get"
  })
  const [closeForm, setCloseForm] = useState(true)
  const [confirmUser, setConfirmUser] = useState({user:{}, closeModal:true, closeConfirm: true})

  // Initialitation of available users´ data
  useEffect(() => {
    getAllUsers()
  }, [users])
  
  
  // This function get all users from server
  const getAllUsers = () => {
    if(users.mode === "get"){
      const url = "http://144.126.218.162:9000/users/"
      axios[users.mode](url)
          .then(res=>{

            setUsers((prev)=>({...prev, data:defaultUser.concat(res.data), loading:false}))
            
          })
          .catch(error=>console.error(error))
      
    }
  }
  
  // Eliminate a user with their id
  const deleteUser = (id) => {
    
    if(id === 12300000) return
    const url = `http://144.126.218.162:9000/users/${id}/`
    axios.delete(url)
    .then(res=>{

      setConfirmUser(prev=>({...prev, closeModal:true, closeConfirm: false}))
      
      setTimeout(()=>{
        setConfirmUser(prev=>({...prev, closeConfirm: true}))
      }, 3000)
      setUsers({
        loading:false, 
        data: [], 
        mode:"get"
      })
    })
    .catch(error=>console.error(error))
}

  const handleCreateNewUser = () => {
    setUsers((prev)=>({...prev, mode: "post"}))
    setCloseForm(false)
  }  

  if(users.mode === "put" && confirmUser.user && !closeForm){
    const allValues = confirmUser.user
    // If the mode modify is on then
    // Full fill out the form automatly with user´s data
    form.first_name.value = allValues.first_name
    form.last_name.value = allValues.last_name
    form.email.value = allValues.email
    form.password.value = allValues.password
    form.birthday.value = allValues.birthday
  }

  return (
    <div className="App">
      <h3>{ 'USER´S BIRTHDAY 🎉🎁' }</h3><FcAbout />
      <button onClick={()=>{setUsers({loading:true, data: [], mode:"get"})}}>
        Refresh Users</button>
      <button onClick={handleCreateNewUser}>+</button>
      <UsersForm  setUsers={setUsers} 
                  users = {users}
                  closeForm={{close:closeForm,setClose:setCloseForm}} 
                  userId={confirmUser.user.id}
                  />

        {/* Confirm before eliminate one user Modal */}
        {
              confirmUser.closeModal ?
              <div></div>
              :  
              <div className='modal'> 
                  <button onClick={()=>setConfirmUser(prev=>({...prev, closeModal:true}))}>x</button>
                  <p>{`Are you sure you want to delete user with id: ${confirmUser.user.id}`}</p>
                  <button onClick={()=>{deleteUser(confirmUser.user.id)}}>Confirm</button>
              </div>
          }
          {/* Notification popup */}
          {
              confirmUser.closeConfirm ?
              <div></div>
              :  
              <div className='modal'> 
                  <p>{`You deleted user with id: ${confirmUser.user.id}`}</p>
              </div>
          }
      <div className="users">
      {
        users.loading ? 
        <div>loading...</div>
        :
        users.data.map(user=>(
          <UsersList key = { user.id } 
          user = { user } 
          setUsers = {{ setUser:setUsers, users: users }}
          setConfirmUser = {setConfirmUser}
          formModal = {setCloseForm}
          />
        ))
      }
      </div>
      
    </div>
  )
}

export default App
