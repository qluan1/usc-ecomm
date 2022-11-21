import axios from 'axios';

const url = 'http://localhost:3500/uploadproduct';

async function uploadProduct(
  productName, productDes, productPrice, 
  productAmount, productCategory, productPhoto, 
  accessToken
) {
  const formData = new FormData();
  formData.append('name', productName);
  formData.append('des', productDes || '');
  formData.append('price', parseFloat(productPrice));
  formData.append('amount', parseInt(productAmount));
  formData.append('category', productCategory);
  formData.append('photo', productPhoto, productPhoto.name);
  return await axios({
    method: 'POST',
    url,
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${accessToken}`
    },
    data: formData
  })
}

export default uploadProduct;