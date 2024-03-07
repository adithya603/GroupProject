import React, { useEffect, useState, } from "react";
import makeStyles from "@mui/styles/makeStyles";
import logo from "./png-clipart-computer-icons-menu-bar-icon-design-hamburger-button-others-miscellaneous-angle-removebg-preview.png";
import profile_logo from "./download-removebg-preview.png";
import AuthModal from "./AuthModal";
export default function Navbar() {
  const [searchbar_college, setclgval] = useState("Search by College");
  const [searchbar_clubs, setclubval] = useState("Search by Clubs");
  const [hover_on_profile, sethover] = useState(false);
 const click_on_profile =()=>{
      hover_on_profile=true;
 }
  useEffect(() => {
    var tagline = document.querySelector("#tagline");
    var searchbar = document.querySelector("#searchbar");

    window.addEventListener("scroll", function () {
      console.log(tagline);

      if (window.scrollY == 0) {
        //user is at the top of the page; no need to show the back to top button
        console.log("at top");
        searchbar.style.width = "500px";
        tagline.style.height = "60px";
        tagline.style.scale = "1";
    setTimeout(function(){  setclubval("Search by Clubs");
        setclgval("Search by College");},300);
      
      } else {
       setclubval("Clubs");
        setclgval("College");
        searchbar.style.width = "300px";
        tagline.style.height = "0px";
        tagline.style.scale = "0";
      }
    });
  }, [searchbar_clubs,hover_on_profile]);

  const useStyles = makeStyles((theme) => ({
    navbar: {
      fontFamily: "Afacad",
      color: "black",
      fontSize: "20px",
      position: "fixed",
      width: "100%",
      backgroundColor: "white",
      paddingBottom: "20px",
    },
    for_ul: {
      display: "flex",
      listStyleType: "none",
      justifyContent: "space-between",
    },
    for_probut: {
      display: "flex",
      marginRight: "20px",
      justifyContent: "center",
      alignItems: "center",
      width: "100px",
      height: "50px",
      backgroundColor: "yellow",
      borderRadius: 50,
      border: "1px solid",
    },
    for_profile: {
      height: "20px",
    },
    for_menu: {
      height: "15px",
      marginRight: "13px",
    },
    for_completesearchbar: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    for_searchbar: {
      transition: "0.3s",
      margin: "auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: 50,
      border: "1px solid",
      height: "70px",
      width: "500px",
    },
    for_searchbyclub: {
      display: "flex",
      width: "200px",
      justifyContent: "center",
      alignItems: "center",
    },
    for_tagline: {
      transition: "0.3s",
      height: "60px",
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.navbar}>
      <ul className={classes.for_ul}>
        <li style={{ fontSize: "25px", color: "black" }}>ClubsHub</li>
        <div className={classes.for_completesearchbar}>
          <div className={classes.for_tagline} id="tagline">
            Where passions unite,   clubs ignite!
          </div>
          <div className={classes.for_searchbar} id="searchbar">
            <div className={classes.for_searchbyclub}>{searchbar_clubs}</div>
            <div className={classes.for_searchbyclub}>{searchbar_college}</div>
            <div style={{marginRight:"16px"}}>
              <span class="material-symbols-sharp" style={{padding:"10px", backgroundColor:"yellow",borderRadius:50}}>search</span>
            </div>
          </div>
        </div>

        {/* <li className={classes.for_probut} > */}
         <AuthModal/>
          {/* <div> */}
           {/* { hover_on_profile ? `Login` :<img src={logo} className={classes.for_menu}></img> }
            </div> 
            <div>
            { hover_on_profile ? `Login` :<img src={profile_logo} className={classes.for_profile}></img>} */}
            {/* </div> */}
     
        {/* </li> */}
      </ul>
    </div>
  );
}
