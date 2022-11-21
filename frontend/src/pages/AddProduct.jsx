import {useState} from 'react';
import useAuth from '../hooks/useAuth';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import InventoryIcon from '@mui/icons-material/Inventory';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import InputAdornment from '@mui/material/InputAdornment';
import { MenuItem } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { yellow, orange } from '@mui/material/colors';
import CATEGORY_OPTIONS from '../options/categoryOptions';
import uploadProduct from '../apis/uploadProduct';


function AddProduct() {
  const { auth, apiCallWithRefresh } = useAuth();
  const [formInfo, setFormInfo] = useState({
    productName: '',
    productDes: '',
    productPrice: '',
    productAmount: '',
    productCategory: 'Please Select A Category',
    productPhoto: ''
  });
  const [formError, setFormError] = useState({});

  const handleNameChange = (e) => {
    setFormError({...formError, productName: ''});
    setFormInfo({...formInfo, productName: e.target.value});
  }
  const handleDesChange = (e) => setFormInfo({...formInfo, productDes: e.target.value});
  const handlePriceChange = (e) => {
    setFormError({...formError, productPrice: ''});
    setFormInfo({...formInfo, productPrice: e.target.value});
  }
  const handlePriceFormatting = () => {
    if (!formInfo.productPrice) return;
    let price = parseFloat(formInfo.productPrice).toFixed(2);
    if (isNaN(price) || price <= 0) {
      setFormError({...formError, productPrice: 'Invalid input for price.'});
    } else {
      setFormInfo({...formInfo, productPrice: price.toString()});
    }
  } 
  const handleAmountChange = (e) => {
    setFormError({...formError, productAmount: ''});
    setFormInfo({...formInfo, productAmount: e.target.value});
  }
  const handleAmountFormatting = () => {
    if (!formInfo.productAmount) return;
    let amount = parseInt(formInfo.productAmount);
    if (isNaN(amount) || amount <= 0) {
      setFormError({...formError, productAmount: 'Invalid input for amount.'});
    } else {
      setFormInfo({...formInfo, productAmount: amount.toString()});
    }
  }
  const handleCategoryChange = (e) => {
    setFormError({...formError, productCategory: ''});
    setFormInfo({...formInfo, productCategory: e.target.value});
  }
  const handlePhotoChange = (e) => {
    setFormError({...formError, productPhoto: ''});
    setFormInfo({...formInfo, productPhoto: e.target.files[0]});
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formInfo.productName) {
      return setFormError({productName: 'Name cannot be empty.'});
    }
    if (!formInfo.productPrice) {
      return setFormError({productPrice: 'Price cannot be empty.'});
    }
    const price = parseFloat(formInfo.productPrice);
    if (isNaN(price) || price <= 0) {
      return setFormError({productPrice: 'Invalid input for price.'});
    }
    if (!formInfo.productAmount) {
      return setFormError({productAmount: 'Amount cannot be empty.'});
    }
    const amount = parseInt(formInfo.productAmount);
    if (isNaN(amount) || amount <= 0) {
      return setFormError({productAmount: 'Invalid input for Amount.'});
    }
    if (!formInfo.productCategory || formInfo.productCategory === 'Please Select A Category') {
      return setFormError({productCategory: 'Category cannot be empty.'});
    }
    if (!formInfo.productPhoto) {
      return setFormError({productPhoto: 'Photo cannot be empty.'});
    }
    setFormError({});
    let args = [
      formInfo.productName, formInfo.productDes, formInfo.productPrice,
      formInfo.productAmount, formInfo.productCategory, formInfo.productPhoto
    ];
    try {
      let res = await apiCallWithRefresh(uploadProduct, args);
      // handle POST success
      console.log(`Product ${formInfo.productName} is successfully uploaded`);
    } catch(err) {
      console.log(err);
    }
    // handle POST success
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: yellow[800],
      },
      secondary: {
        main: orange[500],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <InventoryIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add Product
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="productName"
              label="Product Name"
              value={formInfo.productName}
              onChange={handleNameChange}
              error={!!formError.productName}
              helperText={formError.productName || ''}
            />
            <TextField
              margin="normal"
              fullWidth
              id="productDescription"
              label="Product Description"
              multiline
              minRows={2}
              maxRows={5}
              value={formInfo.productDes}
              onChange={handleDesChange}
            />
            <TextField
              margin="normal"
              fullWidth
              required
              id="unitPrice"
              label="Unit Price"
              type='number'
              InputProps = {{
                startAdornment:<InputAdornment position="start">$</InputAdornment>
              }}
              value={formInfo.productPrice}
              onChange={handlePriceChange}
              onBlur={handlePriceFormatting}
              error={!!formError.productPrice}
              helperText={formError.productPrice || ''}
            />
            <TextField
              margin="normal"
              fullWidth
              required
              id="amount"
              label="Amount Available"
              type='number'
              value={formInfo.productAmount}
              onChange={handleAmountChange}
              onBlur={handleAmountFormatting}
              error={!!formError.productAmount}
              helperText={formError.productAmount || ''}
            />
            <TextField
              margin="normal"
              fullWidth
              required
              id="category"
              label="Category"
              select
              value={formInfo.productCategory}
              onChange={handleCategoryChange}
              error={!!formError.productCategory}
              helperText={formError.productCategory || ''}
            >
              <MenuItem value={'Please Select A Category'} disabled>Please Select A Category</MenuItem>
              {CATEGORY_OPTIONS.map(
                option => (<MenuItem key={option} value={option}>{option}</MenuItem>)
              )}
            </TextField>
            <TextField
              margin="normal"
              fullWidth
              required
              id="photo"
              label="Product Image"
              type='file'
              InputLabelProps={{ shrink: true }}
              inputProps={{accept: 'image/*'}}
              onChange={handlePhotoChange}
              error={!!formError.productPhoto}
              helperText={formError.productPhoto || ''}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Product
            </Button>
          </Box>
        </Box>
        </CssBaseline>
      </Container>
    </ThemeProvider>
  )
}

export default AddProduct;
