import React, {useEffect, useCallback} from 'react'
// import useGetUsers from '../CustomHooks/useGetUsers'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import {InputErrors, FormContainer} from './StyledComponents/StyledUsersForm'
import './StylesCss/backgroundForm.css'

const UsersForm = ({setUsers, users, closeForm, userId}) => {

    const {register, handleSubmit, reset, getValues, formState: {errors}} = useForm()

    const formValues = {
        first_name : "",
        last_name : "",
        email : "",
        password : "",
        birthday : "" 
    }

    const submit = (data) => {
        
        if(users.mode === "post"){
            addNewUser(data)
        }else if(users.mode === "put"){
            modifyUser(data, userId)
        }else{
            return
        }
        
    }

    const addNewUser = (data) => {

        const url = "http://144.126.218.162:9000/users/"
        
        axios["post"](url, data)
        .then(res=>{
            console.log(res)
            reset(formValues)
            closeForm.setClose(true)
            setUsers({
                loading:false, 
                data: [], 
                mode:"get"
              })
              console.log(data)
        })
        .catch(error => console.error(error.message))
        
    }

    const modifyUser = (data, id) => {

        const url = `http://144.126.218.162:9000/users/${id}/`
        
        axios["put"](url, data)
        .then(res=>{

            console.log(res)

            reset(formValues)
            closeForm.setClose(true)

            setUsers({
                loading:false, 
                data: [], 
                mode:"get"
              })
              
        })
        .catch(error => console.error(error.message))
        
    }

    const onCloseForm = () => {
        reset(formValues)
        closeForm.setClose(true)
    }

  

  return (
    <div className={closeForm.close ? 'isClose' : 'backGroundForm'}>
        <FormContainer>
            <button className='closeBtnForm' onClick={onCloseForm}>x</button>
            <h3>{users.mode === "put" ?
                "EDIT USER"
                :
                "Create New User"
            }
            </h3>
        <form onSubmit={handleSubmit(submit)} id="form">
            <div>
                <label htmlFor="first_name">First Name</label>
                <input type="text" id='first_name' {...register('first_name',{
                    required: {value: true, message: '* First name is required'},
                    maxLength : {value: 25, message: 'Max length letters is 25'},
                    minLength: {value: 1, message: 'Min length value is 1 letter'}
                    })}/>
                    <InputErrors>
                        {errors?.first_name?.message}
                    </InputErrors>
            </div>
            <div>
                <label htmlFor="last_name">Last Name</label>
                <input type="text" id='last_name' {...register('last_name', {
                    required: {value: true, message: '* Last name is required'},
                    maxLength : {value: 25, message: 'Max length letters is 25'},
                    minLength: {value: 1, message: 'Min length value is 1 letter'}
                    })}/>
                    <InputErrors>
                        {errors?.last_name?.message}
                    </InputErrors>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id='email' {...register('email', {
                    pattern: {value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: 'Please enter a valid email'},
                    maxLength: {value: 150, message: 'Email address exceed'}
                })}/>
                <InputErrors>
                    {errors?.email?.message}
                </InputErrors>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id='password' {...register('password', {
                    required: {value: true, message:' * Password is required'},
                    maxLength: {value: 128, message: 'Password number exceed!'}
                })}/>
                <InputErrors>
                    {errors?.password?.message}
                </InputErrors>
            </div>
            <div>
                <label htmlFor="birthday">Date of birth</label>
                <input type="date" id='birthday' {...register('birthday', {
                    required : {value: "00-00-0000", message: ' * Input a valid date E.g:02-12-2010'} 
                })}
                placeholder="01-01-2010"/>
                <InputErrors>
                    {errors?.birthday?.message}
                </InputErrors>
            </div>
            <div>
               <button>{users.mode === "post" ? "Create User" : "EDIT"}</button>
            </div>
        </form>
        </FormContainer>
    </div>
  )
}

export default UsersForm