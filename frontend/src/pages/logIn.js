import React, { useState } from "react";
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
const jump = keyframes`
      from{
        transform: translateY(0)
      }
      to{
        transform: translateY(-3px)
      }
    `;

const Wrapper = styled.section`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
    `;

const Form = styled.form`
      margin: 0 auto;
      width: 100%;
      max-width: 400px;
      padding: 1.3rem;
      display: flex;
      flex-direction: column;
      position: relative;
      border: 3px grey;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
    `;

const Input = styled.input`
      max-width: 100%;
      padding: 11px 13px;
      background: #f9f9fa;
      color: #f03d4e;
      margin-bottom: 0.9rem;
      border-radius: 4px;
      outline: 0;
      border: 1px solid rgba(245, 245, 245, 0.7);
      font-size: 14px;
      transition: all 0.3s ease-out;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
      :focus,
      :hover {
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
      }
    `;

const Button = styled.button`
      max-width: 100%;
      padding: 11px 13px;
      color: black;
      font-weight: 600;
      text-transform: uppercase;
      background: #f0e68c;
      border: none;
      border-radius: 3px;
      outline: 0;
      cursor: pointer;
      margin-top: 0.6rem;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease-out;
      :hover {
        background:	#FFFF66;;
        animation: ${jump} 0.2s ease-out forwards;
      }
    `;

const Title = styled.h2`
      font-weight: normal;
      color: #2a2a29;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
      text-align: center;
    `;
const Select = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export default function Login() {
  const navigate = useNavigate();

  const [infos, setInfos] = useState({
    email: "",
    password: "",
    role:""
  });
  const handleSubmit = e => {
    e.preventDefault();
    console.log(infos);
    if(infos.role === "seller"){
      navigate("/sellerHome")
    }
  };

  const handleEmailChange = e => {

    setInfos({email: e.target.value,password: infos.password, role: infos.role});
  };
  const handlePWChange = e => {

    setInfos({email: infos.email,password: e.target.value, role: infos.role});
  };
  const handleRoleChange = e => {
    setInfos({email: infos.email,password: infos.password, role:e.target.value})
  }

  return (
    <>
      <Title>Shopping Site</Title>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            value={infos.email}
            onChange={handleEmailChange}
            placeholder="Email or mobile phone number"
          />
          <Input
            type="password"
            name="password"
            value={infos.password}
            onChange={handlePWChange}
            placeholder="Please Enter Your Password"
          />
          <Select onChange={handleRoleChange}>
            <option value="">Role</option>
            <option value="costomer">Costomer</option>
            <option value="seller">Seller</option>
          </Select>
          <Button>Enter</Button>
          <br/>
          <Link to={"./forgetpassword"}>Forget password?</Link>
          
        </Form>
      </Wrapper>
    </>
  );
}
