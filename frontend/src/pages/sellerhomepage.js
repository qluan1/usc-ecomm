import { useState } from "react"
import Uploadimg from "../components/uploadImg"
import styled from "styled-components";
const Div = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin:30px;
`
const Input = styled.input`
width: 500px;
      padding: 11px 13px;
      background: #f9f9fa;
      color: black;
      margin-bottom: 0.9rem;
      border-radius: 4px;
      outline: 0;
      border-width: 0 0 1px;
      border-color: black;
      font-size: 14px;
      transition: all 0.3s ease-out;
      :hover {
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
      }
    `;
    const Detailinput = styled.textarea`
      width: 500px;
      height: 300px;
      padding: 11px 13px;
      background: #f9f9fa;
      color: black;
      margin-bottom: 0.9rem;
      border-radius: 4px;
      outline: 0;
      border-width: 0 1px 1px;
      border-color: black;
      font-size: 14px;
      transition: all 0.3s ease-out;
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
    `;
export default function SellerHome() {
    const[productTitle, setProductTitle] = useState("");
    const[productDetail, setProductDetail] = useState("");
    const[productImg, setProductImg] = useState(null)
    const[sellPrice, setSellPrice] = useState(0);
    const handleTitle = e => {
        setProductTitle(e.target.value)
    }    
    const handleDetail = e => {
        setProductDetail(e.target.value)
    } 
    const handlePrice = e => {
        setSellPrice(e.target.value)
    }
    const handleList = () => {
        console.log({productTitle, productDetail, sellPrice, productImg})
    }
    return (
        <div>
            <Div>
                <Input value={productTitle} onChange={handleTitle} placeholder="type your product name"/>
            </Div>
            <Div>
                <Detailinput value={productDetail} onChange={handleDetail} placeholder="type your product details"/>
                
                
            </Div>
            <div style={{paddingLeft:"35vw", margin:"18px"}}>
            <Uploadimg productImg={productImg} setProductImg={setProductImg}/>
            </div>

            <Div>
                <Input type="number" placeholder="type your product price" value={sellPrice} onChange={handlePrice}/>
            </Div>
            <div style={{paddingLeft:"35vw", margin:"18px"}}>
            <Button onClick={handleList}>List Your Item</Button>
            </div>
            


        </div>
    )
}