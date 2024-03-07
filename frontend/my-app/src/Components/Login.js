import React from 'react'
import { useState } from "react";
import { Box, Button, TextField,createTheme,ThemeProvider } from "@material-ui/core";
// import { CryptoState } from "../../CryptoContext";
// import { signInWithEmailAndPassword } from 'firebase/auth';

function Login( handleClose) {
    const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const darkTheme = createTheme({
    typography: {
        fontFamily: 'Afacad',
        fontSize:'20'
      },
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
// const { setAlert,auth} = CryptoState();
const handleSubmit= async()=>{
    // if(!email || !password){
    //     setAlert({
    //         open: true,
    //         message: "Please fill all the feilds ",
    //         type: "error ",
    //       });
    // }
    // try {
    //     const result = await signInWithEmailAndPassword(
    //      auth,
    //       email,
    //       password
    //     );
  
    //     setAlert({
    //       open: true,
    //       message: "LOGIN  Successful . welcome!! ",
    //       type: "success",
    //     });
    //     handleClose();
    //   } catch (error) {
    //       setAlert({
    //           open: true,
    //           message: error.message,
    //           type: "success",
    //         });
  
    //   }

}
  return   <ThemeProvider theme={darkTheme}> 
    <Box
    p={3}
    style={{ display: "flex", flexDirection: "column", gap: "20px", backgroundColor: "black",width: "80%" }}
  >
    <TextField
      variant="outlined"
      type="email"
      label="Enter Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      fullWidth
    ></TextField>
     <TextField
      variant="outlined"
      type="password"
      label="Enter password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      fullWidth
    ></TextField>
     

    <Button variant="contained"
    size="large" style={{backgroundColor:"yellow"}} 
    onClick={handleSubmit}>LOGIN</Button>
  </Box>
  </ThemeProvider>
}

export default Login
