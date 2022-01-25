
      var baseURL = "https://www.tysons3d-beta.com";
      var buildUrl = "https://mburlinson.github.io/tysons-repo/Build";
      var globalunityinstance = null;
      var loaderUrl = buildUrl + "/urp54.loader.js";
      var config = {
        dataUrl: buildUrl + "/urp54.data.unityweb",
        frameworkUrl: buildUrl + "/urp54.framework.js.unityweb",
        codeUrl: buildUrl + "/urp54.wasm.unityweb",
        streamingAssetsUrl: "StreamingAssets",
        companyName: "DefaultCompany",
        productName: "Tyson Corner Center",
        productVersion: "1.1",
      };
      var container = document.querySelector("#unity-container");
      var canvas = document.querySelector("#unity-canvas");
      var loadingBar = document.querySelector("#unity-loading-bar");
      var progressBarFull = document.querySelector("#unity-progress-bar-full");
      var fullscreenButton = document.querySelector("#unity-fullscreen-button");
      var mobileWarning = document.querySelector("#unity-mobile-warning");


      if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        container.className = "unity-mobile";
        // Avoid draining fillrate performance on mobile devices,
        // and default/override low DPI mode on mobile browsers.
        config.devicePixelRatio = 1;
        mobileWarning.style.display = "block";
        setTimeout(() => {
          mobileWarning.style.display = "none";
        }, 5000);
      } else {
     //  canvas.style.width = "1280px";
     //  canvas.style.height = "720px";
      }
      loadingBar.style.display = "block";

      var script = document.createElement("script");
      script.src = loaderUrl;
      script.onload = () => {
        createUnityInstance(canvas, config, (progress) => {
          progressBarFull.style.width = 100 * progress + "%";
        }).then((unityInstance) => {
          loadingBar.style.display = "none";
          globalunityinstance = unityInstance;
          //fullscreenButton.onclick = () => {
           //unityInstance.SetFullscreen(1);
          //};
        }).catch((message) => {
          alert(message);
        });
      };
      document.body.appendChild(script);
 
    

   function receiveMessageFromUnity(txt) {
     
        if (txt.trim() == "over0") {
          $("#phasecard0show")[0].click();
          }
       if (txt.trim() == "out0") {
          $("#phasecard0hide")[0].click();
          }
       if (txt.trim() == "over1") {
          $("#phasecard1show")[0].click();
          }
       if (txt.trim() == "out1") {
          $("#phasecard1hide")[0].click();
          }
       if (txt.trim() == "over2") {
          $("#phasecard2show")[0].click();
          }
       if (txt.trim() == "out2") {
          $("#phasecard2hide")[0].click();
          } 
       if (txt.trim() == "over3") {
          $("#phasecard3show")[0].click();
          }
       if (txt.trim() == "out3") {
          $("#phasecard3hide")[0].click();
          }    
       if (txt.trim() == "over4") {
          $("#phasecard4show")[0].click();
          }
       if (txt.trim() == "out4") {
          $("#phasecard4hide")[0].click();   
       	  }	
       if (txt.trim() == "over5") {
          $("#phasecard5show")[0].click();
          }
       if (txt.trim() == "out5") {
          $("#phasecard5hide")[0].click();   
       		}	
       if (txt.trim() == "over6") {
          $("#phasecard6show")[0].click();
          }
       if (txt.trim() == "out6") {
          $("#phasecard6hide")[0].click();   
       		} 
       if (txt.trim() == "over7") {
          $("#phasecard7show")[0].click();
          }
       if (txt.trim() == "out7") {
          $("#phasecard7hide")[0].click();   
       		} 
       if (txt.trim() == "over8") {
          $("#phasecard8show")[0].click();
          }
       if (txt.trim() == "out8") {
          $("#phasecard8hide")[0].click();   
       		}   
       if (txt.trim() == "over9") {
          $("#phasecard9show")[0].click();
          }
       if (txt.trim() == "out9") {
          $("#phasecard9hide")[0].click();   
       		}   
       if (txt.trim() == "over10") {
          $("#phasecard10show")[0].click();
          }
       if (txt.trim() == "out10") {
          $("#phasecard10hide")[0].click();   
       		}   
					
     if (txt.trim().indexOf("Detail") >= 0){
      setTimeout(function(){
        $("#page-block").show();
        if (txt.trim() == "Detail0") {
          document.getElementById("iframe99").src= baseURL + "/phase/phase-1";
        }
        if (txt.trim() == "Detail1") {
          document.getElementById("iframe99").src= baseURL + "/phase/terrace-d";
        }
        if (txt.trim() == "Detail2") {
          document.getElementById("iframe99").src= baseURL + "/phase/plaza-west";
        }
        if (txt.trim() == "Detail3") {
          document.getElementById("iframe99").src= baseURL + "/phase/east-end";
        }
        if (txt.trim() == "Detail4") {
          document.getElementById("iframe99").src= baseURL + "/phase/terrace-c";
        }
        if (txt.trim() == "Detail5") {
          document.getElementById("iframe99").src= baseURL + "/phase/j-block";
        }
        if (txt.trim() == "Detail6") {
          document.getElementById("iframe99").src= baseURL + "/phase/leesburg-pike";
        }
        if (txt.trim() == "Detail7") {
          document.getElementById("iframe99").src= baseURL + "/phase/lux-entry";
        }
        if (txt.trim() == "Detail8") {
          document.getElementById("iframe99").src= baseURL + "/phase/terrace-a";
        }
        if (txt.trim() == "Detail9") {
          document.getElementById("iframe99").src= baseURL + "/phase/pearl-parcel";
        }
        if (txt.trim() == "Detail10") {
          document.getElementById("iframe99").src= baseURL + "/phase/fashion-blvd";
        }
       // location.href="/page-2";
        },4000);
       }
   }



   var phase_1_on = false;
   function sendMessageToUnity0() {
      if (phase_1_on == false){
      	phase_1_on = true;
      }
      else {
        phase_1_on = false;
      }
      globalunityinstance.SendMessage('Bridge','MainMenu0');
   }
   function sendMessageToUnity1() {
      globalunityinstance.SendMessage('Bridge','MainMenu1');
   }
   function sendMessageToUnity2() {
      globalunityinstance.SendMessage('Bridge','MainMenu2');
   }
   function sendMessageToUnity3() {
      globalunityinstance.SendMessage('Bridge','MainMenu3');
   }
   function sendMessageToUnity4() {
      globalunityinstance.SendMessage('Bridge','MainMenu4');
   }
   function sendMessageToUnity5() {
      globalunityinstance.SendMessage('Bridge','MainMenu5');
   }
   function sendMessageToUnity6() {
      globalunityinstance.SendMessage('Bridge','MainMenu6');
   }
   function sendMessageToUnity7() {
      globalunityinstance.SendMessage('Bridge','MainMenu7');
   }
   function sendMessageToUnity8() {
      globalunityinstance.SendMessage('Bridge','MainMenu8');
   }
   function sendMessageToUnity9() {
      globalunityinstance.SendMessage('Bridge','MainMenu9');
   }
   function sendMessageToUnity10() {
      globalunityinstance.SendMessage('Bridge','MainMenu10');
   }
   function sendMessageToUnitydetail0() {
      globalunityinstance.SendMessage('PH1_office','OnMouseDown');
   }
   function sendMessageToUnitydetail1() {
      globalunityinstance.SendMessage('bldg_f_1a','OnMouseDown');
   }
   function sendMessageToUnitydetail2() {
      globalunityinstance.SendMessage('bldg_f_2','OnMouseDown');
   }
   function sendMessageToUnitydetail3() {
      globalunityinstance.SendMessage('amc_future','OnMouseDown');
   }
   function sendMessageToUnitydetail4() {
      globalunityinstance.SendMessage('bldg_f_4','OnMouseDown');
   }
   function sendMessageToUnitydetail5() {
      globalunityinstance.SendMessage('bldg_f_5','OnMouseDown');
   }
   function sendMessageToUnitydetail6() {
      globalunityinstance.SendMessage('bldg_f_6','OnMouseDown');
   }
   function sendMessageToUnitydetail7() {
      globalunityinstance.SendMessage('bldg_f_7','OnMouseDown');
   }
   function sendMessageToUnitydetail8() {
      globalunityinstance.SendMessage('PH4abc','OnMouseDown');
   }
   function sendMessageToUnitydetail9() {
      globalunityinstance.SendMessage('bldg_f_9','OnMouseDown');
   }
   function sendMessageToUnitydetail10() {
      globalunityinstance.SendMessage('bldg_f_10','OnMouseDown');
   }
   function sendMessageToUnityCloseAll() {
//      globalunityinstance.SendMessage('Bridge','CloseAll');
        if (phase_1_on == true) {
          $("#phase-1-button")[0].click();
        }
        
   }
               function sendMessageToUnityView1() {
      globalunityinstance.SendMessage('Bridge','View1');
   }
           function sendMessageToUnityView2() {
      globalunityinstance.SendMessage('Bridge','View2');
   }         
            function sendMessageToUnityOrbit() {
      globalunityinstance.SendMessage('Bridge','Orbit');
   }



function KillIframe(){
  if ( $("#iframe99")[0].src.indexOf("phase-1") > 0){
  	sendMessageToUnitydetail0();
  }
  if ( $("#iframe99")[0].src.indexOf("terrace-d") > 0){
  	sendMessageToUnitydetail1();
  }
  if ( $("#iframe99")[0].src.indexOf("plaza-west") > 0){
  	sendMessageToUnitydetail2();
  }
  if ( $("#iframe99")[0].src.indexOf("east-end") > 0){
  	sendMessageToUnitydetail3();
  }
  if ( $("#iframe99")[0].src.indexOf("terrace-c") > 0){
  	sendMessageToUnitydetail4();
  }
  if ( $("#iframe99")[0].src.indexOf("j-block") > 0){
  	sendMessageToUnitydetail5();
  }
  if ( $("#iframe99")[0].src.indexOf("leesburg-pike") > 0){
  	sendMessageToUnitydetail6();
  }
  if ( $("#iframe99")[0].src.indexOf("lux-entry") > 0){
  	sendMessageToUnitydetail7();
  }
  if ( $("#iframe99")[0].src.indexOf("terrace-a") > 0){
  	sendMessageToUnitydetail8();
  }
  if ( $("#iframe99")[0].src.indexOf("pearl-parcel") > 0){
  	sendMessageToUnitydetail9();
  }
  if ( $("#iframe99")[0].src.indexOf("fashion-blvd") > 0){
  	sendMessageToUnitydetail10();
  }
  $("#iframe99")[0].src ="";
}

$(document).ready(function(){
  $("#close-page").click(function(){ KillIframe(); });
});
