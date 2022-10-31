import React,{useState} from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    ),
    url("https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(122).jpg") no-repeat;
    background-size: 100vw 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
        width: 40%;
        padding: 20px;
        background-color: white;
`;

const Title = styled.h1`
        font size: 24px;
        font-weight: 300;
        text-align: center;
`;

const Form = styled.form`
        display: flex;
        flex-wrap: wrap;
`;

const Input = styled.input`
        flex: 1;
        min-width: 40%;
        margin: 20px 10px 0px 0px;
        padding: 10px;
`;

const Agreement = styled.span`
        font-size: 14px;
        margin: 20px 0px;
`;

const Button = styled.button`
        width: 40%;
        border: none;
        padding: 15px 20px;
        background-color: teal;
        color: white;
        cursor: pointer;
`;

const Register = () => {

    let navigate = useNavigate();
    const [infos, setInfos] = useState({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        confirm: ""
    })
  
  const routeChange = () =>{  
    navigate("/UpdateHome");
  }

  const handleFirstname = (e) => {
    e.preventDefault();
    setInfos({firstname: e.target.value});
    console.log(e.target.value);
  }

  const register = (e) =>{
    e.preventDefault()

    // if (!info.firstname ||!info.lastname ||!info.username || !info.email || !info.password || !info.confirm) {
    //     alert("Complete all the fields!!!")
    //     return
    // }

    routeChange();
}
  return (
    <Container>
        <Wrapper>
            <Title>Sign Up</Title>
            <Form onSubmit={register}>
                <Input
                    type = "text"
                    value = {infos.firstname}
                    onChange = {handleFirstname}
                    placeholder = "first Name"
                />
                <Input placeholder = "last Name"/>
                <Input placeholder = "username"/>
                <Input placeholder = "email"/>
                <Input placeholder = "password"/>
                <Input placeholder = "confirm password"/>
                <Agreement>By creating an account, you agree to Amazon's Conditions of Use and Privacy Notice.</Agreement>
                <Button type='submit'>Sign Up</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register
