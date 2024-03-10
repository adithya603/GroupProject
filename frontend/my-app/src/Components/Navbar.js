import React, { useEffect, useState,useRef } from "react";
import makeStyles from "@mui/styles/makeStyles";
import cancel_logo from "./png-clipart-computer-icons-menu-bar-icon-design-hamburger-button-others-miscellaneous-angle-removebg-preview.png";
import profile_logo from "./download-removebg-preview.png";
import AuthModal from "./AuthModal";
import Input from "@mui/material/Input";
import Searchtab_body from "./Searchtab_body";
const ariaLabel = { "aria-label": "description" };
export default function Navbar() {
  const [searchbar_college, setclgval] = useState("Search by College");
  const [searchbar_clubs, setclubval] = useState("Search by Clubs");
  const [searchtab_active, setsearchtab] = useState(false);

  // function bring_searchtab() {
  //   var searchtab = document.querySelector("#searchtab");
  //   searchtab.style.height = "700px";
  //   searchtab.style.transform = "scale(1,1)";
  //   var searchbar = document.querySelector("#searchbar");
  //   searchbar.style.width = "500px";
  //   setTimeout(function () {
  //     setclubval("Search by Clubs");
  //     setclgval("Search by College");
  //   }, 300);
  // }
  function at_top() {
    var tagline = document.querySelector("#tagline");
    var searchbar = document.querySelector("#searchbar");
    searchbar.style.width = "700px";
    tagline.style.height = "60px";
    tagline.style.scale = "1";
    setTimeout(function () {
      setclubval("Search by Clubs");
      setclgval("Search by College");
    }, 300);
    // if(searchtab_active){
    //   bring_searchtab();
    // }
  }

  // function collapse_searchtab() {
  //   var searchtab = document.querySelector("#searchtab");
  //   searchtab.style.height = "0px";
  //   searchtab.style.transform = "scale(1,0)";
  // }
  function animate_search_by_college() {
    var search_by_club = document.querySelector("#search_by_club");
    var search_by_college = document.querySelector("#search_by_college");
    search_by_club.style.width = "170px";
    setclubval("Clubs");
    setclgval("Search by College");
    search_by_college.style.backgroundColor = "rgb(238, 237, 235)";
    search_by_club.style.backgroundColor = "White";
    search_by_college.style.width = "450px";
  }
  function animate_search_by_club() {
    var search_by_club = document.querySelector("#search_by_club");
    var search_by_college = document.querySelector("#search_by_college");
    search_by_college.style.width = "170px";
    setclgval("College");
    setclubval("Search by Club");
    search_by_club.style.backgroundColor = "rgb(238, 237, 235)";
    search_by_college.style.backgroundColor = "White";
    search_by_club.style.width = "450px";
  }
  function normalise_searchbar() {
    var search_by_club = document.querySelector("#search_by_club");
    var search_by_college = document.querySelector("#search_by_college");
    setclubval("Search by Club");
    setclgval("Search by College");
    search_by_club.style.width = "200px";
    search_by_college.style.backgroundColor = "white";
    search_by_college.style.width = "200px";
    search_by_club.style.backgroundColor = "white";
    
  }
  const clg_ref = useRef(null);
  const club_ref = useRef(null);

  function not_at_top() {
    var tagline = document.querySelector("#tagline");
    var searchbar = document.querySelector("#searchbar");
    setclubval("Clubs");
    setclgval("College");
    searchbar.style.width = "500px";
    tagline.style.height = "0px";
    tagline.style.scale = "0";
  }
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY == 0) {
        //user is at the top of the page; no need to show the back to top button
        at_top();
      } else {
        normalise_searchbar();
        not_at_top();
        setsearchtab(false);
        club_ref.current.blur();
        clg_ref.current.blur();
      }
    });
  }, [searchtab_active]);

  const useStyles = makeStyles((theme) => ({
    for_close_button: {
      padding: "16px",
      backgroundColor: "lavenderblush",
      marginRight: "60px",
      borderRadius: 50,
      transition: "0.2s",
      "&:hover": {
        backgroundColor: "grey",
      },
    },
    for_searching: {
      transform: "scale(1,1)",
      width: "1200px",
      marginTop:"10px",
      backgroundImage:
        "linear-gradient( 184.1deg,  rgba(249,255,182,1) 44.7%, rgba(226,255,172,1) 67.2% )",
      borderRadius: 20,
      transition: "0.3s",
      height: "700px",
    },
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
    },
    for_searchbar: {
      transition: "0.3s",

      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: 50,
      border: "1px solid",
      height: "70px",
      width: "700px",
    },
    for_searchbyclub: {
      transition: "0.2s",
      display: "flex",
      width: "200px",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 50,
      "&:hover": {
        backgroundColor: "grey",
      },
    },
    for_tagline: {
      transition: "0.3s",
      height: "60px",
      fontSize: "20px",
      margin: "auto",
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.navbar}>
      <ul className={classes.for_ul}>
        <li style={{ fontSize: "25px", color: "black" }}>ClubsHub</li>
        <div className={classes.for_completesearchbar}>
          <div className={classes.for_tagline} id="tagline">
            Where passions unite, clubs ignites
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {searchtab_active ? (
              <span
                className={classes.for_close_button}
                onClick={() => {
                  setsearchtab(false);
                  normalise_searchbar();
                }}
              >
                Close
              </span>
            ) : (
              <span></span>
            )}
            <div className={classes.for_searchbar} id="searchbar">
              <div
                className={classes.for_searchbyclub}
                id="search_by_club"
                // onClick={() => {
                //   console.log(searchtab_active);
                //   window.scrollTo(0, 0);
                //   setsearchtab(true);
                //   animate_search_by_club();
                //   // if (searchtab_active) {
                //   //   window.scrollTo(0, 0);
                //   //   bring_searchtab();
                //   // } else {
                //   //   collapse_searchtab();
                //   // }
                // }}
              >
                <Input
                  fullWidth
                  placeholder={searchbar_clubs}
                  inputProps={ariaLabel}
                  inputRef={club_ref}
                  style={searchtab_active ? { margin: "30px",fontFamily: "Afacad",fontSize:"20px",color:"black" } : {margin:"20px",fontFamily: "Afacad",fontSize:"20px",}}
               onFocus={() => {
                console.log(searchtab_active);
                window.scrollTo(0, 0);
                setsearchtab(true);
                animate_search_by_club();
                // if (searchtab_active) {
                //   window.scrollTo(0, 0);
                //   bring_searchtab();
                // } else {
                //   collapse_searchtab();
                // }
              }} />
                {/* {searchbar_clubs} */}
              </div>
              <div
                className={classes.for_searchbyclub}
                id="search_by_college"
                // onClick={() => {
                //   console.log(searchtab_active);
                //   window.scrollTo(0, 0);
                //   setsearchtab(true);
                //   animate_search_by_college();
                //   // if (searchtab_active) {
                //   //   window.scrollTo(0, 0);
                //   //   bring_searchtab();
                //   // } else {
                //   //   collapse_searchtab();
                //   // }
                // }}
              >
                <Input
                  fullWidth
                  placeholder={searchbar_college}
                  inputRef={clg_ref}
                  inputProps={ariaLabel}
                  style={searchtab_active ? { margin: "20px",fontFamily: "Afacad",fontSize:"20px", } : {fontFamily: "Afacad",fontSize:"20px",}}
                  onFocus={() => {
                    console.log(searchtab_active);
                    window.scrollTo(0, 0);
                    setsearchtab(true);
                    animate_search_by_college();
                    // if (searchtab_active) {
                    //   window.scrollTo(0, 0);
                    //   bring_searchtab();
                    // } else {
                    //   collapse_searchtab();
                    // }
                  }}
                />
              </div>
              <div style={{ marginRight: "16px" }}>
                <span
                  class="material-symbols-sharp"
                  style={{
                    padding: "10px",
                    backgroundColor: "yellow",
                    borderRadius: 50,
                  }}
                >
                  search
                </span>
              </div>
            </div>
          </div>
          {searchtab_active ? (
            <div className={classes.for_searching} id="searchtab">
              <Searchtab_body/>
            </div>
          ) : (
            <div></div>
          )}
        </div>

        {/* <li className={classes.for_probut} > */}
        <AuthModal />
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
