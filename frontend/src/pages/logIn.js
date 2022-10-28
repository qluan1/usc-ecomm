import React, { useState } from "react";
import styled, { keyframes, createGlobalStyle } from 'styled-components';

    
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
        background: rgb(200, 50, 70);
        animation: ${jump} 0.2s ease-out forwards;
      }
    `;
    
    const Title = styled.h2`
      font-weight: normal;
      color: #2a2a29;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
      text-align: center;
    `;
    
    export default function Login() {

      const [infos, setInfos] = useState({
        email: "",
        password: ""
      });
      const handleSubmit = e => {
        e.preventDefault();
        console.log(infos);
      };
    
      const handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        setInfos(Object.assign(infos, { [name]: value }));
      };
    
      return (
        <>
          <Title>Shopping Site</Title>
          <Wrapper>
            <Form onSubmit={handleSubmit}>
              <Input
                type="email"
                name="email"
                value={infos.email}
                onChange={handleChange}
                placeholder="Email or mobile phone number"
              />
              <Input
                type="password"
                name="password"
                value={infos.password}
                onChange={handleChange}
                placeholder="Please Enter Your Password"
              />
              <Button>Enter</Button>
            </Form>
          </Wrapper>
        </>
      );
    }
