import {useState} from 'react'
export default function Uploadimg(){
    const [selectedImage, setSelectedImage] = useState(null);

    return (
      <div  style={{


      }}>
        <div style={{border: "1px black solid", width: "250px", height:"250px"}}>
        {selectedImage && (
          <div>
          <img alt="not fount" width={"250px"} height={"250px"} src={URL.createObjectURL(selectedImage)} />
          <br />
          <button onClick={()=>setSelectedImage(null)}>Remove</button>
          </div>
        )}
        </div>
        

        <input
          type="file"
          name="myImage"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
          }}
        />
      </div>
    );
}
