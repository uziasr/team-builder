import React, {useState} from 'react'
import TeamMember from './TeamMember';

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
      <label htmlFor="name">Name</label>
      <input
        id="title"
        type="text"
        name="title"
        onChange={handleChanges}
        value = {member.name}
      />
      <label htmlFor="email">Email</label>
      <textarea
        id="member"
        name="body"
        onChange={handleChanges}
        value = {member.email}
      />
      <label htmlFor="role">Role</label>
      <textarea
        id="member"
        name="body"
        onChange={handleChanges}
        value = {member.role}
      />
      <button type="submit">Add member</button>
    </form>
    )
}
export default Form