import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TeamMember from './components/TeamMember'
import Form from './components/Form'
import {Row} from 'reactstrap';
import styled from 'styled-components'

const MemberWrap = styled.div`
  margin: 3% auto;
  display: flex;
  justify-content: center;
`
const FormWrap = styled.div`
  margin: 3% auto;
  display: flex;
  justify-content: center;
`

function App() {
  const [member, setMember] = useState([{
    name: 'Bill',
    email: 'billrivers@gmail.com',
    role: 'fullstack engineer'
  }])

  function addMember(mem){
    const newMember ={
      name: mem.name,
      email: mem.email,
      role: mem.role
    }
    setMember([...member, newMember])
  }

  return (
    <div className="App">
    <FormWrap>
      <Form addMember={addMember}/>
    </FormWrap>
      <MemberWrap>
        <TeamMember obj={member}/>
      </MemberWrap>
    </div>
  );
}

export default App;

{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}