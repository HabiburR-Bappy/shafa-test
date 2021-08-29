import { useEffect, useState } from "react";
import axios from '../authAxios'



export default function VideoBlog(){
  
  

//   useEffect(()=>{
// setShareLinks();

// function socialWindow(url) {
//   var left = (screen.width - 570) / 2;
//   var top = (screen.height - 570) / 2;
//   var params = "menubar=no,toolbar=no,status=no,width=570,height=570,top=" + top + ",left=" + left;
//   window.open(url,"NewWindow",params);
// }

// function setShareLinks() {
//   var pageUrl = encodeURI("https://in-app.shafa.care/blog/blog.html?id=39");
//   var tweet = "hello shafa"

//   $(".social-share.facebook").on("click", function() {
//     var uurl = "https://www.facebook.com/sharer.php?u=" + pageUrl;
//     socialWindow(uurl);
//   });

//   $(".social-share.twitter").on("click", function() {
//     var uurl = "https://twitter.com/intent/tweet?url=" + pageUrl + "&text=" + tweet;
//     socialWindow(uurl);
//   });

//   $(".social-share.linkedin").on("click", function() {
//     var uurl = "https://www.linkedin.com/shareArticle?mini=true&url=" + pageUrl;
//     socialWindow(uurl);
//   })

// }
//   })

  function fbFunction(){
    var pageUrl = encodeURI("https://in-app.shafa.care/blog/blog.html?id=39");
    var tweet = "hello shafa"
    var uurl = "https://www.facebook.com/sharer.php?u=" + pageUrl;
    socialWindow(uurl);

  }

  function socialWindow(url) {
    var left = (screen.width - 570) / 2;
    var top = (screen.height - 570) / 2;
    var params = "menubar=no,toolbar=no,status=no,width=570,height=570,top=" + top + ",left=" + left;
    window.open(url,"NewWindow",params);
  }
  return(
    <>
      <h1>Social Media Sharing: Automated Link Creator<span>(jQuery)</span></h1>

      <div className="links">
        <ul>
          <li className="social-share facebook" onClick={fbFunction}>Share on Facebook</li>
          <li className="social-share twitter">Share on Twitter</li>
          <li className="social-share linkedin">Share on LinkedIn</li>
        </ul>
      </div>
    </>
  ) 
}