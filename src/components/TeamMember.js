import React from 'react'

const TeamMember = props =>{
    return(
        props.obj.map(object=>{
        return (<div>
            <p>{object.name}</p>
            <p>{object.email}</p>
            <p>{object.role}</p>
        </div>)
        })
    )
}
export default TeamMember;