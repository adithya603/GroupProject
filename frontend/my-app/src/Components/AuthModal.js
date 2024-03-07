import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import Login from "./Login";
import Signup from "./Signup";
// import { CryptoState } from "../../CryptoContext";
import GoogleButton from "react-google-button";
// import {
//   GoogleAuthProvider,
//   signInWithPopup,
//   getAdditionalUserInfo,
// } from "firebase/auth";
// import { auth } from "../../firebase";
// import { count } from "firebase/firestore";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: 500,
    paddingBottom: 30,
    paddingTop: 15,
    backgroundColor: "black",
    color: "white",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function AuthModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //   const { setAlert, createmyacc, setnewuser, newuser } = CryptoState();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = createTheme({
    typography: {
      fontFamily: "Afacad",
      fontSize: "20",
    },
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  //   const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    // signInWithPopup(auth, googleProvider)
    //   .then((res) => {
    //     const { isNewUser } = getAdditionalUserInfo(res);
    //     console.log("hehe");
    //     console.log(res.email);
    //     console.log(auth.currentUser.email);
    //     const email = auth.currentUser.email;
    //     if (isNewUser) {
    //       const mydata = {
    //         USERID: email,
    //         NAME: email,
    //         WALLET: "0",
    //       };
    //       setnewuser((newuser) => ({ ...newuser, ...mydata }));
    //       try {
    //         console.log(mydata);
    //         setnewuser(mydata);
    //         createmyacc(mydata);
    //       } catch {
    //         console.log("error wqith post");
    //       }
    //     }
    //     setAlert({
    //       open: true,
    //       message: "Sign Up Successfull . Welcome ",
    //       type: "success",
    //     });
    //     handleClose();
    //   })
    //   .catch((err) => {
    //     setAlert({
    //       open: true,
    //       message: err.message,
    //       type: "error",
    //     });
    //     return;
    //   });
  };

  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        style={{ width: "85px", height: "40px", backgroundColor: "yellow",marginRight:"30px" }}
        onClick={handleOpen}
      >
        LOGIN
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <AppBar
              position="static"
              style={{ backgroundColor: "transparent", color: "white" }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                style={{ borderRadius: "10" }}
              >
                <Tab label="LOGIN" />
                <Tab label="SIGN UP" />
              </Tabs>
            </AppBar>
            {value == 0 && <Login handleClose={handleClose} />}
            {value == 1 && <Signup handleClose={handleClose} />}
            <Box
              style={{fontFamily: "Afacad",
              fontSize: "20px",
                width: "80%",
                outline: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "24px",
                gap: 30,
              }}
            >
              <span>OR</span>
              <GoogleButton
                style={{ width: "100%", outline: "none",fontFamily: "Afacad",
                fontSize: "20px", }}
                onClick={signInWithGoogle}
              />
            </Box>
          </div>
        </Fade>
      </Modal>
    </ThemeProvider>
  );
}
