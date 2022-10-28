import React from 'react'
import styled from 'styled-components'
import {Search, ShoppingCartOutlined } from '@material-ui/icons'
import {Badge} from '@material-ui/core';
import {useNavigate} from 'react-router-dom';

const Container = styled.div`
    height: 80px;
    background-color: lightblue
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;    
`
const Input = styled.input`
    border: none;
`;

const Logo = styled.h1`
    font-weight: bold;
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;


const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`;


const Navbar = () => {
    const navigate = useNavigate();

    const RouteChange = () => {
        navigate('/signUp');
    }
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input />
                    <Search style = {{color: "gray", fontsize: 16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>Amazon</Logo>
            </Center>
            <Right>
                
                <MenuItem onClick={RouteChange}> REGISTER</MenuItem>
                
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent = {0} color = "primary" overlap="rectangular">
                        <ShoppingCartOutlined />
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>

    </Container>
  )
}

export default Navbar;