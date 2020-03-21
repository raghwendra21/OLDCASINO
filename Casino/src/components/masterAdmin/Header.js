import React, { Component } from 'react';
import $ from 'jquery';

import { Link } from 'react-router-dom'
// import Header from './'
import axios from 'axios';
const SERVER = process.env.REACT_APP_API_URL


class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            masterAdminBalance:0,
            userName:null
        }
    }

    async getUser() {
        const USERID = localStorage.getItem('USERID')
        const token = localStorage.getItem('masterAdmintoken')
        axios.defaults.headers.common['Authorization'] = token;
        var response = await axios.post(`${SERVER}/getUserbyuserName`, { id: USERID })
        console.log("============yyyyyyyy=678015r24e2732====llllllllllll=", response.data.status)

        if (response.data.status) {
            await this.setState({ masterAdminBalance: (response.data.user.walletBalance).toFixed(0) })
        } else {
            // console.log("=========123===========",this.state.walletBalance)
        }
        console.log("=========123===========", this.state.walletBalance)
        //    await this.setState({currentServerTime:response.data.time})
    }
     handleLogout = (event)=>{
        event.preventDefault()
        localStorage.clear()
        window.location='/'

     } 
     handleUser = (event)=>{
         event.preventDefault()
         window.location="/masteradmin/userlist"
     }
     componentDidMount(){
        this.getUser()
        $(document).ready(function () {
            $('.show-hide').click(function () {
                $(this).next().toggle();
            });
        });
        $("#show").css("display", "none");
        var userName = localStorage.getItem('userName')
        this.setState({ userName: userName })
     }

     render() {

        return (
            <div className="Header_headerContainer__2DG16  ">
                <div className="Header_header__1DrHs Header_headerDesktop__1bmch container1680">
                    <a className="HeaderLogo_logoctn__15YLS noDecoration" >
                        <img className="HeaderLogo_logo__1lvIo" src="../images/logo.gif" alt="Logo" />
                        <span className="BrandLogoHeader_BrandLogo__2W7nJ" style={{ fontSize: '19px' }}><span></span>&nbsp;<span></span></span>
                    </a>

                    <div className="Header_navigationItems__3g8IM">

                        <Link to="/masterAdminHome" className="noDecoration NavigationItem_navigationItem__1D2Oq NavigationItem_navigationItemShrinkable__1uf6v" >
                            <div className="NavigationItem_iconAndTextContainer__2mSnT">
                                <div>
                                    <span className="isvg loaded" style={{ marginLeft: "-37px" }}>
                                        <img src="../images/avatar.png"></img>
                  

                                    </span>

                                </div>
                                <div>
                                    <span className="NavigationItem_name__CwRCo" style={{ marginRight: "22px", color: "#fa2b2b", marginLeft: "-11px"}}>{this.state.userName}</span><span className="NavigationItem_subtext__20smw " style={{ marginRight: "22px", color: "#fa2b2b", marginLeft: "-11px",fontWeight:"700",fontSize:"17px"  }}>
                                    &#x20b9; {this.state.masterAdminBalance}
                                    </span>
                                </div>
                                
                            </div>
                        </Link>
                       
                     
                        <Link to="/masterAdminHome" className="noDecoration NavigationItem_navigationItem__1D2Oq NavigationItem_navigationItemShrinkable__1uf6v" style={{ marginRight: "-13px" }}>
                            <div className="NavigationItem_iconAndTextContainer__2mSnT">
                                <div>
                                    <span className="isvg loaded" style={{ marginLeft: "-37px" }}>
                                        <img style={{ width: "53px", borderRadius: "10px", marginLeft: "11px" }} src="../images/add.png"></img>


                                    </span>

                                </div>
                                <div>
                                    <span className="NavigationItem_name__CwRCo" style={{ color: "#fa2b2b" }}>Add User</span><span className="NavigationItem_subtext__20smw ">
                                    </span>
                                </div>
                            </div>
                        </Link>
                        <Link to="/masteradmin/userlist" className="noDecoration NavigationItem_navigationItem__1D2Oq NavigationItem_navigationItemShrinkable__1uf6v" style={{ marginRight: "-13px" }}>
                            <div className="NavigationItem_iconAndTextContainer__2mSnT">
                                <div>
                                    <span className="isvg loaded" style={{ marginLeft: "-37px" }}>
                                        <img style={{ width: "53px", borderRadius: "10px", marginLeft: "11px" }} src="../images/userlist.png"></img>


                                    </span>

                                </div>
                                <div>
                                    <span className="NavigationItem_name__CwRCo" style={{ color: "#fa2b2b" }}> User List</span><span className="NavigationItem_subtext__20smw ">
                                    </span>
                                </div>
                            </div>
                        </Link>
                      
                        {/* <div onClick={this.handleLogout} className="noDecoration NavigationItem_navigationItem__1D2Oq NavigationItem_navigationItemShrinkable__1uf6v" >
                            <div className="NavigationItem_iconAndTextContainer__2mSnT">
                                <div>
                                    <button class="dropbtn" style={{ background: "transparent", border: "0px", paddingTop: "7px" }}><img style={{ width: "38px", marginLeft: "-24px" }} src="../images/logout.svg"></img></button>


                                </div>
                                <div>
                                    <span onClick={this.handleLogout} className="NavigationItem_name__CwRCo" style={{ color: "#fa2b2b" }}>Logout</span><span className="NavigationItem_subtext__20smw ">
                                    </span>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="noDecoration NavigationItem_navigationItem__1D2Oq NavigationItem_navigationItemShrinkable__1uf6v" >
                        <div className="NavigationItem_iconAndTextContainer__2mSnT">
                            <span class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Menu<img style={{ width: "28px" }} src="../images/menu.png"></img></a>
                                <ul class="dropdown-menu" style={{backgroundColor:"#866d2b"}}>
                                <Link to="/MasterAdminCricket"> <button class="dropbtn" style={{ background: "transparent", border: "0px", paddingTop: "7px" }}><img style={{ width: "38px"}} src="../images/cri.jpeg"></img></button>
                                        <span className="NavigationItem_name__CwRCo" style={{ color: "#fa2b2b" }}>Cricket</span><span className="NavigationItem_subtext__20smw ">
                                    </span></Link>
                                    <Link to="/masterChangepassword"> <button class="dropbtn" style={{ background: "transparent", border: "0px", paddingTop: "7px" }}><img style={{ width: "38px"}} src="../images/setting.png"></img></button>
                                        <span className="NavigationItem_name__CwRCo" style={{ color: "#fa2b2b" }}>Setting</span><span className="NavigationItem_subtext__20smw ">
                                    </span></Link>
                                    <li> <button class="dropbtn" style={{ background: "transparent", border: "0px", paddingTop: "7px" }}><img style={{ width: "38px"}} src="../images/logout.png"></img></button>
                                        <span onClick={this.handleLogout} className="NavigationItem_name__CwRCo" style={{ color: "#fa2b2b" }}>Logout</span><span className="NavigationItem_subtext__20smw ">
                                    </span></li>
                                                                      
                                </ul>
                            </span>
                        </div>

                        </div> */}
                         <div className="noDecoration NavigationItem_navigationItem__1D2Oq NavigationItem_navigationItemShrinkable__1uf6v" >
                            <div className="NavigationItem_iconAndTextContainer__2mSnT">
                                <span class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#" style={{color:"rgb(7, 13, 38)", fontWeight:"Bold"}}>Menu<span><img style={{ width: "28px" }} src="../images/menu.png"></img></span></a>
                                    <ul class="dropdown-menu" style={{ backgroundColor: "rgb(95, 185, 245)",width:"12rem" }}>
                                    <li><Link to="/masterchipdeposit"> <button class="dropbtn" style={{ background: "transparent", border: "0px", paddingTop: "7px" }}><img style={{ width: "38px" }} src="../images/history.png"></img></button>
                                            <span className="NavigationItem_name__CwRCo" style={{ color: "rgb(7, 13, 38)" }}>Chip CR</span><span className="NavigationItem_subtext__20smw ">
                                            </span></Link> </li>
                                            <li><Link to="/masterchipwithdraw"> <button class="dropbtn" style={{ background: "transparent", border: "0px", paddingTop: "7px" }}><img style={{ width: "38px" }} src="../images/history.png"></img></button>
                                            <span className="NavigationItem_name__CwRCo" style={{ color: "rgb(7, 13, 38)" }}>Chip DR</span><span className="NavigationItem_subtext__20smw ">
                                            </span></Link> </li>
                                       
                                        <li><Link to="/masterChangepassword"> <button class="dropbtn" style={{ background: "transparent", border: "0px", paddingTop: "7px" }}><img style={{ width: "38px" }} src="../images/setting.png"></img></button>
                                            <span className="NavigationItem_name__CwRCo" style={{ color: "rgb(7, 13, 38)" }}>Setting</span><span className="NavigationItem_subtext__20smw ">
                                            </span></Link> </li>

                                        <li> <button class="dropbtn" style={{ background: "transparent", border: "0px", paddingTop: "7px" }}><img style={{ width: "38px" }} src="../images/logout.png"></img></button>
                                            <span onClick={this.handleLogout} className="NavigationItem_name__CwRCo" style={{ color: "rgb(7, 13, 38)" }}>Logout</span><span className="NavigationItem_subtext__20smw ">
                                            </span></li>

                                    </ul>
                                </span>
                            </div>
                        </div>

                        {/* bell */}
                        <div className="NotificationsItem_notificationsIconContainer__ZFhSb ">
                            <span className="DropDown_container__1BLCS  ">
                                <span role="button" className="DropDown_button__2DMc6 ">
                                    <div className="dropdown" style={{ "float": "right" }}>
                                        {/* <button class="dropbtn"><i className='fa fa-bell'></i></button> */}

                                        {/* {noti && noti.length > 0 &&
										<div className="dropdown-content">
											<ul>

												{noti.reverse().map((data, i) => {
													return (
														<li>

															<a href='#' onClick={() => this.viewTrade(data.tradeId, data.tradeId, data.tradeId)}>{data && data.message} </a>
															<i style={{ "font-size": "12px" }} class="fa"><span style={{ color: 'black', fontWeight: 'bold' }}>#{data.tradeId.slice(data.tradeId.length / 2)} </span>&nbsp; &#xf017; {new Date(data.timestamp).toLocaleString()}</i>
															<i data-id={data._id} class="fa fa-window-close text-right pull-right" onClick={this.handelnoti} aria-hidden="true"></i>
														</li>
													)
												})}


											</ul>
										</div>
									} */}

                                    </div>

                                </span>
                            </span>
                            <span className="yellowboldtext isvg loaded NotificationsItem_notificationsIconGraphic__ZsU8q text-right">
                                {/* <i onClick={() => this.logout()} className='fa fa-sign-out fa-2x' aria-hidden="true" data-toggle="tooltip" title={"Click here to logout "}></i> */}
                                {/* <i class="fa fa-sign-out" aria-hidden="true"></i> */}
                            </span>
                        </div>
                        {/* bell */}
                    </div>
                </div>
                <div className="Header_headerMobile__3Q2Ta container">
                    <a className="HeaderLogo_logoctn__15YLS noDecoration" >

                        <span className="isvg loaded">
                            <img src="../images/avatar.png" style={{ width: "38px", marginTop: "3px" }}></img>


                        </span>
                        <div style={{ lineHeight: "10px", marginTop: "7px" }}>
                            <span style={{ "color": "#111d3b", marginBottom: "0px", marginLeft: "4px" }} className="NavigationItem_name__CwRCo">{this.state.userName}</span>
                            <br />
                            <span style={{ "color": "#111d3b", marginLeft: "4px" }} class="NavigationItem_name__CwRCo">₹{this.state.masterAdminBalance}</span>
                        </div>
                    </a>
                    <span className="DropDown_container__1BLCS"><span role="button" className="DropDown_button__2DMc6">
                        {/* <span className="Header_languageDropdown__2RLBV">English<span> ▾</span></span> */}
                    </span>
                    </span>
                    <div className="Header_menuMobileButton__2y-af">
                        <div className="noDecoration NavigationItem_navigationItem__1D2Oq NavigationItem_navigationItemShrinkable__1uf6v NavigationItem_navigationItemNoRightBorder__1_2jI "></div>
                        <div className="NavigationItem_iconAndTextContainer__2mSnT show-hide">
                            <div><span className="isvg loaded"><svg viewBox="0 0 17 15" xmlns="http://www.w3.org/2000/svg"><g transform="translate(1 .36)" fill="#111d3b" fill-rule="evenodd"><rect x=".461" y=".277" width="13.806" height="2.767" rx="1.384"></rect><rect x=".461" y="5.811" width="13.806" height="2.767" rx="1.384"></rect><rect x=".461" y="11.345" width="13.806" height="2.767" rx="1.384"></rect></g></svg></span>
                            </div>
                        </div>
                        <div className="Header_menuMobileContainer__2d-Ch information" id="show">
                            <div className="Header_menuMobile__4qsIJ">
                                <div className="Header_menuMobileHeader__2Teqc">
                                    <strong><img className="HeaderLogo_logo__1lvIo mobile-logo-style" src="../images/logo.gif" alt="Logo" /></strong>
                                    <div className="noDecoration NavigationItem_navigationItem__1D2Oq NavigationItem_navigationItemShrinkable__1uf6v NavigationItem_navigationItemNoRightBorder__1_2jI">
                                        <div className="NavigationItem_iconAndTextContainer__2mSnT">
                                            <div>
                                                {/* <i onClick={() => document.getElementById('show').style.display = "none"} className='fa fa-close fa-2x'></i> */}
                                                <i onClick={() => document.getElementById('show').style.display = "none"} className='fa fa-times fa-2x'></i>

                                                {/* <span className="isvg loaded">
                                            <svg viewBox="0 0 17 15" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.76 2.165l10.91 10.91m0-10.91L2.76 13.075" stroke="#FFF" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </span> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Header_menuMobileNavigationItems__1fAk9">

                    
                                    <Link to="/MasterAdminCricket" className="noDecoration NavigationItem_navigationItem__1D2Oq NavigationItem_navigationItemNoRightBorder__1_2jI NavigationItem_navigationItemSidebar__18WmY" href="/">
                                        <div className="NavigationItem_iconAndTextContainer__2mSnT">
                                            <div>
                                                <span className="isvg loaded">
                                                    <img src="../images/cri.jpeg" style={{ marginTop: "-10px",width:"53px" }}></img>

                                                    {/* <svg viewBox="0 0 17 15" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10.341 10.36c-.536-.286-.25-.823 0-1.073.322-.322.716-1.431.716-1.431.644-.286.716-.751.787-1.073.286-.93-.43-1.074-.43-1.074s.573-1.538.108-2.719c-.609-1.538-3.077-2.11-3.507-.68-2.933-.643-2.325 3.4-2.325 3.4s-.715.142-.429 1.073c.072.322.143.787.787 1.073 0 0 .394 1.11.716 1.431.25.25.536.787 0 1.074-1.074.572-4.294.716-4.294 3.22h12.165c0-2.504-3.22-2.647-4.293-3.22z"></path></svg> */}
                                                </span>

                                            </div>
                                            <div><span className="NavigationItem_name__CwRCo">Cricket</span></div>
                                        </div>
                                    </Link>
                                    <Link to="/masterAdminHome" className="noDecoration NavigationItem_navigationItem__1D2Oq NavigationItem_navigationItemNoRightBorder__1_2jI NavigationItem_navigationItemSidebar__18WmY" href="/">
                                        <div className="NavigationItem_iconAndTextContainer__2mSnT">
                                            <div>
                                                <span className="isvg loaded">
                                                    <img src="../images/add.png" style={{ marginTop: "-10px",width:"53px" }}></img>

                                                    {/* <svg viewBox="0 0 17 15" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10.341 10.36c-.536-.286-.25-.823 0-1.073.322-.322.716-1.431.716-1.431.644-.286.716-.751.787-1.073.286-.93-.43-1.074-.43-1.074s.573-1.538.108-2.719c-.609-1.538-3.077-2.11-3.507-.68-2.933-.643-2.325 3.4-2.325 3.4s-.715.142-.429 1.073c.072.322.143.787.787 1.073 0 0 .394 1.11.716 1.431.25.25.536.787 0 1.074-1.074.572-4.294.716-4.294 3.22h12.165c0-2.504-3.22-2.647-4.293-3.22z"></path></svg> */}
                                                </span>

                                            </div>
                                            <div><span className="NavigationItem_name__CwRCo">Add User</span></div>
                                        </div>
                                    </Link>
                             
                                    <Link to="/masteradmin/userlist" className="noDecoration NavigationItem_navigationItem__1D2Oq NavigationItem_navigationItemNoRightBorder__1_2jI NavigationItem_navigationItemSidebar__18WmY" href="/">
                                        <div className="NavigationItem_iconAndTextContainer__2mSnT">
                                            <div>
                                                <span className="isvg loaded">
                                                    <img src="../images/userlist.png" style={{ marginTop: "-10px",width:"53px" }}></img>

                                                    {/* <svg viewBox="0 0 17 15" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10.341 10.36c-.536-.286-.25-.823 0-1.073.322-.322.716-1.431.716-1.431.644-.286.716-.751.787-1.073.286-.93-.43-1.074-.43-1.074s.573-1.538.108-2.719c-.609-1.538-3.077-2.11-3.507-.68-2.933-.643-2.325 3.4-2.325 3.4s-.715.142-.429 1.073c.072.322.143.787.787 1.073 0 0 .394 1.11.716 1.431.25.25.536.787 0 1.074-1.074.572-4.294.716-4.294 3.22h12.165c0-2.504-3.22-2.647-4.293-3.22z"></path></svg> */}
                                                </span>

                                            </div>
                                            <div><span className="NavigationItem_name__CwRCo">UserList</span></div>
                                        </div>
                                    </Link>
                                    <Link to="/masterchipdeposit" className="noDecoration NavigationItem_navigationItem__1D2Oq NavigationItem_navigationItemNoRightBorder__1_2jI NavigationItem_navigationItemSidebar__18WmY" href="/">
                                        <div className="NavigationItem_iconAndTextContainer__2mSnT">
                                            <div>
                                                <span className="isvg loaded">
                                                    <img src="../images/history.png" style={{ marginTop: "-10px", width: "53px" }}></img>

                                                    {/* <svg viewBox="0 0 17 15" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10.341 10.36c-.536-.286-.25-.823 0-1.073.322-.322.716-1.431.716-1.431.644-.286.716-.751.787-1.073.286-.93-.43-1.074-.43-1.074s.573-1.538.108-2.719c-.609-1.538-3.077-2.11-3.507-.68-2.933-.643-2.325 3.4-2.325 3.4s-.715.142-.429 1.073c.072.322.143.787.787 1.073 0 0 .394 1.11.716 1.431.25.25.536.787 0 1.074-1.074.572-4.294.716-4.294 3.22h12.165c0-2.504-3.22-2.647-4.293-3.22z"></path></svg> */}
                                                </span>

                                            </div>
                                            <div><span className="NavigationItem_name__CwRCo" style={{ marginLeft: "10px" }}>Chip CR</span></div>
                                        </div>
                                    </Link>
                                    <Link to="/masterchipwithdraw" className="noDecoration NavigationItem_navigationItem__1D2Oq NavigationItem_navigationItemNoRightBorder__1_2jI NavigationItem_navigationItemSidebar__18WmY" href="/">
                                        <div className="NavigationItem_iconAndTextContainer__2mSnT">
                                            <div>
                                                <span className="isvg loaded">
                                                    <img src="../images/history.png" style={{ marginTop: "-10px", width: "53px" }}></img>

                                                    {/* <svg viewBox="0 0 17 15" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10.341 10.36c-.536-.286-.25-.823 0-1.073.322-.322.716-1.431.716-1.431.644-.286.716-.751.787-1.073.286-.93-.43-1.074-.43-1.074s.573-1.538.108-2.719c-.609-1.538-3.077-2.11-3.507-.68-2.933-.643-2.325 3.4-2.325 3.4s-.715.142-.429 1.073c.072.322.143.787.787 1.073 0 0 .394 1.11.716 1.431.25.25.536.787 0 1.074-1.074.572-4.294.716-4.294 3.22h12.165c0-2.504-3.22-2.647-4.293-3.22z"></path></svg> */}
                                                </span>

                                            </div>
                                            <div><span className="NavigationItem_name__CwRCo" style={{ marginLeft: "10px" }}>Chip DR</span></div>
                                        </div>
                                    </Link>
       
                                    <Link to="/masterChangepassword" className="noDecoration NavigationItem_navigationItem__1D2Oq NavigationItem_navigationItemNoRightBorder__1_2jI NavigationItem_navigationItemSidebar__18WmY" href="/">
                                        <div className="NavigationItem_iconAndTextContainer__2mSnT">
                                            <div>
                                                <span className="isvg loaded">
                                                    <img src="../images/setting.png" style={{ marginTop: "-10px",width:"53px" }}></img>

                                                    {/* <svg viewBox="0 0 17 15" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10.341 10.36c-.536-.286-.25-.823 0-1.073.322-.322.716-1.431.716-1.431.644-.286.716-.751.787-1.073.286-.93-.43-1.074-.43-1.074s.573-1.538.108-2.719c-.609-1.538-3.077-2.11-3.507-.68-2.933-.643-2.325 3.4-2.325 3.4s-.715.142-.429 1.073c.072.322.143.787.787 1.073 0 0 .394 1.11.716 1.431.25.25.536.787 0 1.074-1.074.572-4.294.716-4.294 3.22h12.165c0-2.504-3.22-2.647-4.293-3.22z"></path></svg> */}
                                                </span>

                                            </div>
                                            <div><span className="NavigationItem_name__CwRCo">Setting</span></div>
                                        </div>
                                    </Link>
                   
                  
                                    <div onClick={this.handleLogout} className="noDecoration NavigationItem_navigationItem__1D2Oq NavigationItem_navigationItemNoRightBorder__1_2jI NavigationItem_navigationItemSidebar__18WmY" href="/">
                                        <div className="NavigationItem_iconAndTextContainer__2mSnT">
                                            <div>
                                                {/* <span className=""> */}
                                                <button class="dropbtn" style={{ background: "transparent", border: "0px", padding: "0px" }}><img style={{ width: "30px" }} src="../images/logout.png"></img></button>

                                                {/* </span> */}

                                            </div>
                                            <div><span className="NavigationItem_name__CwRCo">SignOut</span></div>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
//     render() {

//         return (

//             <div>
//                   <header class="header1">
//                     <h1 class="logo1"><a href="#"><img className="Logo_width" src="../images/logo.gif"></img></a></h1>
//                     <ul class="main-nav">
//                         <li><Link to="/masteradmin/userlist" className="user-id-btn">USER LIST</Link> </li>
//                         <li><Link to="/masterAdminHome" className="user-id-btn" >ADD USER</Link></li>
//                         <li> <button onClick={this.handleLogout} className="user-id-btn">LogOut</button></li>

//                     </ul>
//                 </header>
//             {/* <header>

// <div className="row">
        
//     <div className="logo">
//         <h2> Casino </h2>
       
//     </div>
//     <div className="user-id">
//     <Link to="/masterAdminHome" className="user-id-btn" >ADD USER</Link> 
//     </div>
//     <div className="user-id">
//     <Link to="/masteradmin/userlist" className="user-id-btn">USER LIST</Link> 
//     </div>
    
    
//     <div className="user-id">
//          {/* < href="" className="user-id-btn">USER ID - 0000000000</>    
//          <button onClick={this.handleLogout} className="user-id-btn">LogOut</button>
//     </div>
   
    
// </div>
// </header> */}
//           </div>

//         )
//     }
}

export default Header;