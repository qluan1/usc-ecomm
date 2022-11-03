export default function Uploadimg(props){
  const productImg = props.productImg;
  const setProductImg= props.setProductImg;

    return (
      <div>
        <div style={{border: "1px black solid", width: "50px", height:"50px"}}>
        {productImg && (
          <div>
          <img alt="not found" width={"50px"} height={"50px"} src={URL.createObjectURL(productImg)} />
          <br />
          <br/>
          <button onClick={()=>setProductImg(null)}>Remove</button>
          </div>
        )}
        </div>
        

        <input
          type="file"
          name="myImage"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setProductImg(event.target.files[0]);
          }}
        />
      </div>
    );
}
