import React, { useState } from 'react';
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

const Select = styled.select`
//   width: 100%;
//   height: 35px;
//   background: white;
//   color: gray;
//   padding-left: 5px;
//   font-size: 14px;
//   border: none;
//   margin-left: 10px;
    margin: 20px 5px;
    border: none;
  
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
        confirm: "",
        role: ""
    })

    const routeChange = () => {
        navigate("/UpdateHome");
    }

    const handleFirstNameChange = (e) => {
        setInfos({
            firstname: e.target.value,
            lastname: infos.lastname,
            username: infos.username,
            email: infos.email,
            password: infos.password,
            confirm: infos.confirm,
            role: infos.role
        });
    }

    const handleLastNameChange = (e) => {
        setInfos({
            firstname: infos.firstname,
            lastname: e.target.value,
            username: infos.username,
            email: infos.email,
            password: infos.password,
            confirm: infos.confirm,
            role: infos.role
        });
    }

    const handleUsernameChange = (e) => {
        setInfos({
            firstname: infos.firstname,
            lastname: infos.lastname,
            username: e.target.value,
            email: infos.email,
            password: infos.password,
            confirm: infos.confirm,
            role: infos.role
        });
    }

    const handleEmailChange = e => {
        setInfos({
            firstname: infos.firstname,
            lastname: infos.lastname,
            username: infos.username,
            email: e.target.value,
            password: infos.password,
            confirm: infos.confirm,
            role: infos.role
        });
    };

    const handlePWChange = e => {
        setInfos({
            firstname: infos.firstname,
            lastname: infos.lastname,
            username: infos.username,
            email: infos.email,
            password: e.target.value,
            confirm: infos.confirm,
            role: infos.role
        });
    };

    const handleConfirmChange = (e) => {
        setInfos({
            firstname: infos.firstname,
            lastname: infos.lastname,
            username: infos.username,
            email: infos.email,
            password: infos.password,
            confirm: e.target.value,
            role: infos.role
        });
    }

    const handleRoleChange = e => {
        setInfos({
            firstname: infos.firstname,
            lastname: infos.lastname,
            username: infos.username,
            email: infos.email,
            password: infos.password,
            confirm: infos.confirm,
            role: e.target.value
        });
    }

    const register = (e) => {
        e.preventDefault()
        routeChange();
    }
    return (
        <Container>
            <Wrapper>
                <Title>Sign Up</Title>
                <Form onSubmit={register}>
                    <Input
                        type="text"
                        value={infos.firstname}
                        onChange={handleFirstNameChange}
                        placeholder="First Name"
                    />
                    <Input
                        type="text"
                        value={infos.lastname}
                        onChange={handleLastNameChange}
                        placeholder="Last Name"
                    />
                    <Input
                        type="text"
                        value={infos.username}
                        onChange={handleUsernameChange}
                        placeholder="Username"
                    />
                    <Input
                        type="email"
                        value={infos.email}
                        onChange={handleEmailChange}
                        placeholder="Email"
                    />
                    <Input
                        type="password"
                        value={infos.password}
                        onChange={handlePWChange}
                        placeholder="Password"
                    />
                    <Input
                        type="password"
                        value={infos.password}
                        onChange={handleConfirmChange}
                        placeholder="Confirm Password"
                    />
                    <Select onChange={handleRoleChange}>
                        <option value="">Role</option>
                        <option value="costomer">Costomer</option>
                        <option value="seller">Seller</option>
                    </Select>
                    <Agreement>By creating an account, you agree to Amazon's Conditions of Use and Privacy Notice.</Agreement>
                    <Button type='submit'>Sign Up</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
