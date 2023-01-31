import './page.css'
import React from 'react'
import { useState } from "react";

function Buyer(){
    const [addAProduct, showAddAProduct] = useState('none');
    const [getDetails, showGetDetails] = useState('none');


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
                          <path
                              d="M23.119.882a2.966,2.966,0,0,0-2.8-.8l-16,3.37a4.995,4.995,0,0,0-2.853,8.481L3.184,13.65a1,1,0,0,1,.293.708v3.168a2.965,2.965,0,0,0,.3,1.285l-.008.007.026.026A3,3,0,0,0,5.157,20.2l.026.026.007-.008a2.965,2.965,0,0,0,1.285.3H9.643a1,1,0,0,1,.707.292l1.717,1.717A4.963,4.963,0,0,0,15.587,24a5.049,5.049,0,0,0,1.605-.264,4.933,4.933,0,0,0,3.344-3.986L23.911,3.715A2.975,2.975,0,0,0,23.119.882ZM4.6,12.238,2.881,10.521a2.94,2.94,0,0,1-.722-3.074,2.978,2.978,0,0,1,2.5-2.026L20.5,2.086,5.475,17.113V14.358A2.978,2.978,0,0,0,4.6,12.238Zm13.971,7.17a3,3,0,0,1-5.089,1.712L11.762,19.4a2.978,2.978,0,0,0-2.119-.878H6.888L21.915,3.5Z" />
                      </svg>
                      <div class="title-menu" onClick={()=>{showAddAProduct('')}}>Add an item</div>
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
                      <div class="info-name">Heenal</div>
                  </div>
              </div>
          </div>
          <div class="Box-elements">
              <div class="box-element-flex">
                  <div class="chart-box">
                      <div class="title-element">Your Auctions</div>
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
                                            <a href="#" class="card_button" onClick={()=>{showGetDetails('')}}>Get Bid Details</a>
                                    </div>
                                </div>
                            </li>

                            <li class="cards_item">
                                <div class="card">
                        
                                    <div class="card_image">
                                            <img src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" />
                                    </div>
                        
                                    <div class="card_content">
                                            <h2 class="card_heading">Item 1</h2>
                                            <p>I'm a card and I'm first.</p>
                                            <a href="#" class="card_button" onClick={()=>{showGetDetails('')}}>Get Bid Details</a>
                                    </div>
                                </div>
                            </li>

                            <li class="cards_item">
                                <div class="card">
                        
                                    <div class="card_image">
                                            <img src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" />
                                    </div>
                        
                                    <div class="card_content">
                                            <h2 class="card_heading">Item 1</h2>
                                            <p>I'm a card and I'm first.</p>
                                            <a href="#" class="card_button" onClick={()=>{showGetDetails('')}}>Get Bid Details</a>
                                    </div>
                                </div>
                            </li>
                            
                            <li class="cards_item">
                                <div class="card">
                        
                                    <div class="card_image">
                                            <img src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" />
                                    </div>
                        
                                    <div class="card_content">
                                            <h2 class="card_heading">Item 1</h2>
                                            <p>I'm a card and I'm first.</p>
                                            <a href="#" class="card_button" onClick={()=>{showGetDetails('')}}>Get Bid Details</a>
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
                    <h1>Add A Product<span></span></h1>
                    <label>
                        <span>Product Type</span>
                        <select>
                            <option value="--" selected="selected">Select Type</option>
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                        </select>
                    </label>
                    <label class="tooltip" data-tip="Select Audion Time">
                        <span>Duration:</span>
                        <select>
                            <option value="--" selected="selected">Select Duration</option>
                            <option>1 day</option>
                            <option>2 days</option>
                            <option>3 days</option>
                            <option>4 days</option>
                        </select>
                    </label>
                    <label class="tooltip" data-tip="Give your Product a name">
                        <span>Product Title:</span>
                        <input id="input" type="text" name="fname" placeholder="Eg. Artwork" required />
                    </label>
                    <label class="tooltip" data-tip="What is it that you are Selling?">
                        <span>Product Desc:</span>
                        <input type="text" name="lname" placeholder="Eg. A awesome artwork" required />
                    </label>
                        <button class="button" onclick="Popup()">GO</button>
                        <span class="button" onClick={()=>{showAddAProduct('none')}}>Cancel</span>
                    
                </form>
            </div>
        </div>   
        <div class="carousal"  style={{ display: getDetails}}>
            <div id="container">
                <form id="left">
                    <h1>Bid Details<span></span></h1>
                    <ul class="cards" style={{width: '100%', overflowY: 'scroll', height:'60vh'}}>
  
                        <li class="cards_item" style={{width: '100%',color: 'black', height:'60vh'}}>
                            <div class="card">
                                <div class="card_content">
                                        <h2 class="card_heading" >Person 1</h2>
                                        <p style={{color: 'black'}}>Price: 2ether</p>
                                        <p style={{color: 'black'}}>Time: 31 Jan 2023</p>
                                        <p style={{color: 'black'}}>Wallet Address: 0x00000000000</p>
                                </div>
                            </div>
                        </li>
                        <li class="cards_item" style={{width: '100%',color: 'black', height:'60vh'}}>
                            <div class="card">
                                <div class="card_content">
                                        <h2 class="card_heading" >Person 2</h2>
                                        <p style={{color: 'black'}}>Price: 2ether</p>
                                        <p style={{color: 'black'}}>Time: 31 Jan 2023</p>
                                        <p style={{color: 'black'}}>Wallet Address: 0x00000000000</p>
                                </div>
                            </div>
                        </li>
                        <li class="cards_item" style={{width: '100%',color: 'black', height:'60vh'}}>
                            <div class="card">
                                <div class="card_content">
                                        <h2 class="card_heading" >Person 3</h2>
                                        <p style={{color: 'black'}}>Price: 2ether</p>
                                        <p style={{color: 'black'}}>Time: 31 Jan 2023</p>
                                        <p style={{color: 'black'}}>Wallet Address: 0x00000000000</p>
                                </div>
                            </div>
                        </li>
                        <li class="cards_item" style={{width: '100%',color: 'black', height:'60vh'}}>
                            <div class="card">
                                <div class="card_content">
                                        <h2 class="card_heading" >Person 4</h2>
                                        <p style={{color: 'black'}}>Price: 2ether</p>
                                        <p style={{color: 'black'}}>Time: 31 Jan 2023</p>
                                        <p style={{color: 'black'}}>Wallet Address: 0x00000000000</p>
                                </div>
                            </div>
                        </li>
                        <li class="cards_item" style={{width: '100%',color: 'black', height:'60vh'}}>
                            <div class="card">
                                <div class="card_content">
                                        <h2 class="card_heading" >Person 5</h2>
                                        <p style={{color: 'black'}}>Price: 2ether</p>
                                        <p style={{color: 'black'}}>Time: 31 Jan 2023</p>
                                        <p style={{color: 'black'}}>Wallet Address: 0x00000000000</p>
                                </div>
                            </div>
                        </li>
                        <li class="cards_item" style={{width: '100%',color: 'black', height:'60vh'}}>
                            <div class="card">
                                <div class="card_content">
                                        <h2 class="card_heading" >Person 6</h2>
                                        <p style={{color: 'black'}}>Price: 2ether</p>
                                        <p style={{color: 'black'}}>Time: 31 Jan 2023</p>
                                        <p style={{color: 'black'}}>Wallet Address: 0x00000000000</p>
                                </div>
                            </div>
                        </li>
                        <li class="cards_item" style={{width: '100%',color: 'black', height:'60vh'}}>
                            <div class="card">
                                <div class="card_content">
                                        <h2 class="card_heading" >Person 7</h2>
                                        <p style={{color: 'black'}}>Price: 2ether</p>
                                        <p style={{color: 'black'}}>Time: 31 Jan 2023</p>
                                        <p style={{color: 'black'}}>Wallet Address: 0x00000000000</p>
                                </div>
                            </div>
                        </li>
                        
                    </ul>
                    <div>
                        <button class="button" onclick="CloseBid()">Close Bid</button>
                        <button class="button" onClick={()=>{showGetDetails('none')}}>Cancel</button>
                    </div>
                    
                </form>
            </div>
        </div>    
</>

    )
}


export default Buyer