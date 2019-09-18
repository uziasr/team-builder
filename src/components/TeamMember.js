import React from 'react'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const TeamMember = props =>{
    return(
        
        props.obj.map(object=>{
        return (
        <Col sm="6">
            <Card body>
            <CardTitle tag="h3">{object.name}</CardTitle>
            <CardText>{object.email}</CardText>
            <CardText>{object.role}</CardText>
            </Card>
      </Col>)
        })
    )
}
export default TeamMember;

{/* <Row>

</Row> */}
{/* <div>
            <p>{object.name}</p>
            <p>{object.email}</p>
            <p>{object.role}</p>
        </div> */}