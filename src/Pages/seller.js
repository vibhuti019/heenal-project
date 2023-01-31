// import styles from'./pages.module.css'
import React from 'react'
import { useState } from "react";

function Seller(){
    const [addAProduct, showAddAProduct] = useState('none');
    
    return (
        <>
        <div class="Side-bar" >
          <div class="Box-logo">Auction NMIMS</div>
          <div class="Box-menu">
              <ul class="ul-menu">
                  <li class="li-menu Active-menu">
                      <svg class="icon-menu" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512">
                          <link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-custom-link" />
                          <link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-general-link" />
                          <style xmlns="" lang="en" type="text/css" id="dark-mode-custom-style" />
                          <style xmlns="" lang="en" type="text/css" id="dark-mode-native-style" />
                          <style xmlns="" lang="en" type="text/css" id="dark-mode-native-sheet" />
                          <path
                              d="M7,0H4A4,4,0,0,0,0,4V7a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V4A4,4,0,0,0,7,0ZM9,7A2,2,0,0,1,7,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H7A2,2,0,0,1,9,4Z" />
                          <path
                              d="M20,0H17a4,4,0,0,0-4,4V7a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z" />
                          <path
                              d="M7,13H4a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V17A4,4,0,0,0,7,13Zm2,7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2Z" />
                          <path
                              d="M20,13H17a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V17A4,4,0,0,0,20,13Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z" />
                      </svg>
                      <div class="title-menu">Dashboard</div>
                  </li>
                  <li class="li-menu">
                      <svg class="icon-menu" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512">
                          <link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-custom-link" />
                          <link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-general-link" />
                          <style xmlns="" lang="en" type="text/css" id="dark-mode-custom-style" />
                          <style xmlns="" lang="en" type="text/css" id="dark-mode-native-style" />
                          <style xmlns="" lang="en" type="text/css" id="dark-mode-native-sheet" />
                          <path d="M12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
                          <path
                              d="M21.294,13.9l-.444-.256a9.1,9.1,0,0,0,0-3.29l.444-.256a3,3,0,1,0-3-5.2l-.445.257A8.977,8.977,0,0,0,15,3.513V3A3,3,0,0,0,9,3v.513A8.977,8.977,0,0,0,6.152,5.159L5.705,4.9a3,3,0,0,0-3,5.2l.444.256a9.1,9.1,0,0,0,0,3.29l-.444.256a3,3,0,1,0,3,5.2l.445-.257A8.977,8.977,0,0,0,9,20.487V21a3,3,0,0,0,6,0v-.513a8.977,8.977,0,0,0,2.848-1.646l.447.258a3,3,0,0,0,3-5.2Zm-2.548-3.776a7.048,7.048,0,0,1,0,3.75,1,1,0,0,0,.464,1.133l1.084.626a1,1,0,0,1-1,1.733l-1.086-.628a1,1,0,0,0-1.215.165,6.984,6.984,0,0,1-3.243,1.875,1,1,0,0,0-.751.969V21a1,1,0,0,1-2,0V19.748a1,1,0,0,0-.751-.969A6.984,6.984,0,0,1,7.006,16.9a1,1,0,0,0-1.215-.165l-1.084.627a1,1,0,1,1-1-1.732l1.084-.626a1,1,0,0,0,.464-1.133,7.048,7.048,0,0,1,0-3.75A1,1,0,0,0,4.79,8.992L3.706,8.366a1,1,0,0,1,1-1.733l1.086.628A1,1,0,0,0,7.006,7.1a6.984,6.984,0,0,1,3.243-1.875A1,1,0,0,0,11,4.252V3a1,1,0,0,1,2,0V4.252a1,1,0,0,0,.751.969A6.984,6.984,0,0,1,16.994,7.1a1,1,0,0,0,1.215.165l1.084-.627a1,1,0,1,1,1,1.732l-1.084.626A1,1,0,0,0,18.746,10.125Z" />
                      </svg>
                      <div class="title-menu">Setting</div>
                  </li>
                  <li class="li-menu logout">
                      <svg class="icon-menu" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512">
                          <link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-custom-link" />
                          <link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-general-link" />
                          <style xmlns="" lang="en" type="text/css" id="dark-mode-custom-style" />
                          <style xmlns="" lang="en" type="text/css" id="dark-mode-native-style" />
                          <style xmlns="" lang="en" type="text/css" id="dark-mode-native-sheet" />
                          <path
                              d="M11.476,15a1,1,0,0,0-1,1v3a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H7.476a3,3,0,0,1,3,3V8a1,1,0,0,0,2,0V5a5.006,5.006,0,0,0-5-5H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H7.476a5.006,5.006,0,0,0,5-5V16A1,1,0,0,0,11.476,15Z" />
                          <path
                              d="M22.867,9.879,18.281,5.293a1,1,0,1,0-1.414,1.414L21.13,10.97,6,11a1,1,0,0,0,0,2H6l15.188-.03-4.323,4.323a1,1,0,1,0,1.414,1.414l4.586-4.586A3,3,0,0,0,22.867,9.879Z" />
                      </svg>
                      <div class="title-menu">Logout</div>
                  </li>
              </ul>
          </div>
      </div>
      <div class="Page">
          <div class="Box-header">
              <div class="Box-search">
                  <svg class="icon-search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-custom-link" />
                      <link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-general-link" />
                      <style xmlns="" lang="en" type="text/css" id="dark-mode-custom-style" />
                      <style xmlns="" lang="en" type="text/css" id="dark-mode-native-style" />
                      <style xmlns="" lang="en" type="text/css" id="dark-mode-native-sheet" />
                      <g fill="none" fill-rule="evenodd">
                          <path d="m0 0h32v32h-32z" />
                          <path
                              d="m15 0c8.2842712 0 15 6.71572875 15 15 0 3.7823596-1.3999424 7.2377452-3.7099407 9.8762702l5.3667949 5.3663705-1.4142135 1.4142135-5.3663705-5.3667949c-2.638525 2.3099983-6.0939106 3.7099407-9.8762702 3.7099407-8.28427125 0-15-6.7157288-15-15 0-8.28427125 6.71572875-15 15-15zm0 2c-7.17970175 0-13 5.82029825-13 13 0 7.1797017 5.82029825 13 13 13 7.1797017 0 13-5.8202983 13-13 0-7.17970175-5.8202983-13-13-13z"
                              fill="white" fill-rule="nonzero" />
                      </g>
                  </svg>
                  <input class="input-search" placeholder="Search" type="text" />
              </div>
              <div class="box-alert-infomation">
                  <div class="box-infomation">
                      <div class="info-name">Ayush</div>
                  </div>
              </div>
          </div>
          <div class="Box-elements">
              <div class="box-element-flex">
                  <div class="chart-box">
                      <div class="title-element">Available Auctions</div>
                      <div class="chart-box-main">
                      <div class="cards">
                        <ul class="cards">
  
                            <li class="cards_item">
                                <div class="card">
                        
                                    <div class="card_image">
                                            <img src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" />
                                    </div>
                        
                                    <div class="card_content">
                                            <h2 class="card_heading">Item 1</h2>
                                            <p>I'm a card and I'm first.</p>
                                            <a href="#" class="card_button" onClick={()=>{showAddAProduct('')}}>Place your Bid</a>
                                    </div>
                                </div>
                            </li>
                            
                        </ul>
                      </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        <div class="carousal" style={{display: addAProduct}}>
            <div id="container">
                <form id="left">
                    <h1>Enter Amount<span></span></h1>
                    <label class="tooltip" data-tip="Give your Product a name">
                        <span>Amount (Ether):</span>
                        <input id="input" type="text" name="fname" placeholder="Eg. Artwork" required />
                    </label>
                    <button class="button" onclick="Popup()">GO</button>
                    <span class="button" onClick={()=>{showAddAProduct('none')}}>Cancel</span>
                
                </form>
            </div>
        </div>   
              
</>

    )
}


export default Seller