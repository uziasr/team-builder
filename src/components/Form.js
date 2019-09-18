import React, {useState} from 'react'
import styled from 'styled-components'

const FormWrap = styled.div`
  margin: 3% auto;
  display: flex;
  flex-direction:column;
  justify-content:space-evenly;
`
const ButtonWrap = styled.div`
margin:20% auto;

`
function Form(props){
    console.log(props)
    const [member, setMember] = useState({
        name: '',
        email: '',
        role: ''
    })
    const handleChanges = event => {
        setMember({ ...member, [event.target.name]: event.target.value });
        console.log(member);
      };
function submitForm(event){
    event.preventDefault();
    props.addMember(member)
    setMember({ 
    name: '',
    email: '',
    role: ''
})
}
    return(
        <form onSubmit={submitForm}>
        <FormWrap>
      <label htmlFor="name">Name</label>
      <input
        id="title"
        type="text"
        name="name"
        onChange={handleChanges}
        value = {member.name}
      />
      <label htmlFor="email">Email</label>
      <input
        id="member"
        type="text"
        name="email"
        onChange={handleChanges}
        value = {member.email}
      />
      <label htmlFor="role">Role</label>
      <input
        id="member"
        type="text"
        name="role"
        onChange={handleChanges}
        value = {member.role}
      />
      <ButtonWrap>
      <button type="submit">Add member</button>
      </ButtonWrap>
      </FormWrap>
    </form>
    )
}
export default Form