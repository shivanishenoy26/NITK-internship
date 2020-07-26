var a;

function navNext()
{

    for (temp = 0; temp <= 5 ; temp++) 
    { 
        document.getElementById ('canvas'+temp).style.visibility="hidden";
    }
    simsubscreennum+=1;

    document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
    document.getElementById('nextButton').style.visibility="hidden";
    magic();
}



//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow()
{
    if (document.getElementById('arrow1').style.visibility=="hidden")
        document.getElementById('arrow1').style.visibility="visible";
    else
        document.getElementById('arrow1').style.visibility="hidden";
}

//stop blinking arrow
function myStopFunction() 
{
    clearInterval(myInt);
    document.getElementById('arrow1').style.visibility="hidden";
}

//-------------------------------------function magic starts here----------------------------------------------------

function magic()
{ 
	
	if (simsubscreennum==1)
	{  
		setTimeout(function()
		{
			document.getElementById('nextButton').style.visibility="hidden";
			document.getElementById('canvas1').style.visibility="visible";
			document.getElementById('step6-1').style.visibility="hidden";
			document.getElementById('can6-1').style.visibility="hidden";
			document.getElementById('can6-2').style.visibility="hidden";
			document.getElementById('canvas6').style.visibility="hidden";
			document.getElementById('ewm1').style.visibility="visible";
			document.getElementById('on2-1').style.visibility="visible";
			document.getElementById('off2-1').style.visibility="visible";
			document.getElementById('zero2-1').style.visibility="visible";
			document.getElementById('tare2-1').style.visibility="visible";
		},1000);

		setTimeout(function()
		{
            myInt = setInterval(function(){ animatearrow(); }, 500);
		    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 345px; top:446px; height: 30px; z-index: 10;";
		    document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		    // Code for IE9
		    document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		    // Standard syntax
		    document.getElementById("arrow1").style.transform = "rotate(90deg)";
		    document.getElementById('tare2-1').onmouseover="";
	        document.getElementById('on2-1').onmouseover=function(){step1();}
		 },2000);
    }
	
	
	else if (simsubscreennum==2)
	{
		setTimeout(function()
		{
			document.getElementById('nextButton').style.visibility="hidden";
			document.getElementById('ewm1').style.visibility="hidden";
			document.getElementById('on2-1').style.visibility="hidden";
			document.getElementById('off2-1').style.visibility="hidden";
			document.getElementById('zero2-1').style.visibility="hidden";
			document.getElementById('tare2-1').style.visibility="hidden";
		 
			document.getElementById('mw').style.visibility="hidden";
			document.getElementById('p2').style.visibility="hidden";
			document.getElementById('wc').style.visibility="hidden";

			document.getElementById('v2-2').style.visibility="hidden";
			document.getElementById('on2-3').style.visibility="hidden";
			document.getElementById('tare2-3').style.visibility="hidden";
			document.getElementById('on2-2').style.visibility="hidden";
			document.getElementById('tare2-2').style.visibility="hidden";
		},500);
         
		setTimeout(function()
		{
			document.getElementById('hn').style.visibility="visible";
			document.getElementById('msrdev').style.visibility="visible";
		},1000);
		
		setTimeout(function()
		{
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 550px; top:125px; height: 40px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
			// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(360deg)";
			document.getElementById('hn').onclick=function(){step2();}
		},2000);
    }
	else if (simsubscreennum==3)
	{
		document.getElementById('cement2').style.visibility="hidden";
		document.getElementById('p3').style.visibility="hidden";
		document.getElementById('nextButton').style.visibility="hidden";
			
		setTimeout(function()
		{
			document.getElementById('cement1').style.visibility="visible";
			document.getElementById('p4').style.visibility="visible";
			document.getElementById('shaker3').style.visibility="visible";
			document.getElementById('shaker4').style.visibility="visible";
			document.getElementById('on3-1').style.visibility="visible";
			document.getElementById('tare3-1').style.visibility="visible";
			
		},500); 
		
		setTimeout(function()
		{
            myInt = setInterval(function(){ animatearrow(); }, 500);
		    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 135px; top:260px; height: 30px; z-index: 10;";
		    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		    // Code for IE9
		    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		    // Standard syntax
		    document.getElementById("arrow1").style.transform = "rotate(180deg)";
		    document.getElementById('tare3-1').onmouseover="";
		    document.getElementById('p4').onclick=function(){step3();}
		 },1000); 
	}
	else if (simsubscreennum==4)
	{
		document.getElementById('p4').style.visibility="hidden";
        document.getElementById('shaker3').style.visibility="hidden";
        document.getElementById('shaker4').style.visibility="hidden";
        document.getElementById('on3-1').style.visibility="hidden";
        document.getElementById('tare3-1').style.visibility="hidden";
		document.getElementById('new').style.visibility="visible";
        document.getElementById('beaker3').style.visibility="visible";
        document.getElementById('cement1').style.visibility="hidden";
        document.getElementById('water').style.visibility="hidden";
        document.getElementById('water1').style.visibility="hidden";

		setTimeout(function()
		{
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:600px; top:100px; height: 40px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
			// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(360deg)";
			document.getElementById('beaker3').onclick=function(){step4();}
		},1000);		 
	}
	else if (simsubscreennum==5)
	{
		// refresh();
		myStopFunction();
		 
		document.getElementById('table').style.visibility = "hidden";
		document.getElementById('row15').style.visibility = "hidden";
		document.getElementById('row30').style.visibility = "hidden";
		document.getElementById('row60').style.visibility = "hidden";
		document.getElementById('row120').style.visibility = "hidden";
		document.getElementById('row240').style.visibility = "hidden";
		document.getElementById('row480').style.visibility = "hidden";
		document.getElementById('row960').style.visibility = "hidden";
		document.getElementById('row1920').style.visibility = "hidden";
		document.getElementById('h1920').style.visibility = "hidden";
		document.getElementById('clock').style.visibility = "hidden";
		document.getElementById('clockhandle').style.visibility = "hidden";
		document.getElementById('reading').style.visibility = "hidden";
		document.getElementById('arrow1').style.visibility="hidden";
		document.getElementById('stopper3').style.visibility="hidden";
		document.getElementById('hydrometer').style.visibility="hidden";
		document.getElementById('new1000').style.visibility="hidden";
		document.getElementById('newmixed1000').style.visibility="hidden";
		document.getElementById('hydrowithdwater').style.visibility="hidden";

		document.getElementById('formula').style.visibility="visible";
		document.getElementById('nextButton').style.visibility="visible";
  		
	}
	else if(simsubscreennum==6)
	{	
		document.getElementById('formula').style.visibility="hidden";
		
		
		document.getElementById('nextButton').style.visibility="visible";
	}
	else if(simsubscreennum==7)
	{	
		document.getElementById('calibration').style.visibility="hidden";
		document.getElementById('chartContainer').style.visibility="hidden";
		document.getElementById('calibTable').style.visibility="hidden";
		document.getElementById('displayTable').style.visibility="hidden";
	}
}
  
function step1()
{
	myStopFunction();
	
	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 345px; top:446px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(90deg)";
		     
		document.getElementById('on2-1').style.visibility="hidden";
        document.getElementById('on2-2').style.visibility="visible";
        document.getElementById('on2-2').onclick=function(){step11();}
    },900);
}
	
function step11()
{
	myStopFunction();
	
	setTimeout(function()
	{
		document.getElementById('mw').style.visibility="visible";
		document.getElementById('on2-3').style.visibility="visible";
		document.getElementById('on2-2').style.visibility="hidden";
		document.getElementById('hp2-1').style.visibility="visible";
	},500);
	
	setTimeout(function()
	{   
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:330px; top:210px; height: 40px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(360deg)";
        document.getElementById('hp2-1').onclick=function(){step12();}
	},1000);						             
}
	
		
function step12()
{
	myStopFunction();
	
	setTimeout(function()
	{
		document.getElementById('hp2-1').style.visibility="hidden";
		document.getElementById('p2').style.visibility="visible";
	},500);
	
	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:435px; top:446px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(90deg)";
        document.getElementById('tare2-1').onmouseover=function(){step13();} 
	},1000); 		 
}
	
		
function step13()
{
	myStopFunction();
		
	setTimeout(function()
	{
		document.getElementById('tare2-1').style.visibility="hidden";
		document.getElementById('tare2-2').style.visibility="visible";
		document.getElementById('tare2-2').onclick=function(){step14();}  
	},1000);              
}
	
function step14()
{
	myStopFunction();
    document.getElementById('v2-1').style.visibility="visible";
	document.getElementById('tare2-3').style.visibility="visible";
	document.getElementById('tare2-2').style.visibility="hidden";
		
	setTimeout(function()
	{
		document.getElementById('swc2').style.visibility="visible";
		document.getElementById('hand').style.visibility="visible";
	},1000);
		
	setTimeout(function()
	{
        myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:650px; top:180px; height: 40px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(360deg)";
        document.getElementById('hand').onclick=function(){step15();} 
	},2000);			 
}
	
	function step15()
	{
	    myStopFunction();
		   
		setTimeout(function()
		{
			document.getElementById('swc2').style.visibility="hidden";
			document.getElementById('hand').style.transformOrigin = "100% 80%";
			document.getElementById('hand').style.animation = "valveturn-4 1.5s forwards ";
            document.getElementById('pwc').style.visibility="visible";
        },1000);
		
		setTimeout(function()
		{	
			document.getElementById('v2-1').style.visibility="hidden";
            document.getElementById('wc').style.visibility="visible";
			document.getElementById('pwc').style.visibility="hidden";
			document.getElementById('v2-2').style.visibility="visible";
        },2000);
		
        setTimeout(function()
		{
			document.getElementById('hand').style.visibility="hidden";
			document.getElementById('nextButton').style.visibility="visible";
		},2500);
			 
	}
	
	function step2()
	{
		myStopFunction();
		
		setTimeout(function()
		{
			document.getElementById('hn').style.transformOrigin="100% 80%";
			document.getElementById('hn').style.animation = "valveturn-2 2.5s forwards ";
		},500)
         
	    setTimeout(function()
		{
			document.getElementById('hn').style.visibility="hidden";
            document.getElementById('hn2').style.visibility="visible";
			document.getElementById('cylwat').style.visibility="visible";
			document.getElementById('cylwat').style.transformOrigin="100% 80%";
			 
		    document.getElementById('cylwat').style.animation="water-4  0.8s 1 forwards";		 			 
			document.getElementById('water').style.visibility="visible";
		},4000);
			 
		setTimeout(function()
		{
			document.getElementById('hn2').style.visibility="hidden";
			document.getElementById('water').style.visibility="hidden";
		},5500);
		
		setTimeout(function()
		{
			document.getElementById('wc3').style.visibility="visible";
			document.getElementById('p3').style.visibility="visible";
			document.getElementById('msrdev').style.visibility="hidden";
		    document.getElementById('cylwat').style.visibility="hidden";
			
		    document.getElementById('msrdev1').style.visibility="visible";
			
        },7000);
		
		setTimeout(function()
		{
			myInt = setInterval(function(){ animatearrow(); },500);
		    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:580px; top:270px; height: 40px; z-index: 10;";
		    document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		    // Code for IE9
		    document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		    // Standard syntax
		    document.getElementById("arrow1").style.transform = "rotate(360deg)";
			
            document.getElementById('msrdev1').onclick=function(){step21();}  
			
		},8000);
	}
	
	function step21()
	{
		myStopFunction();
         
		setTimeout(function()
		{
			document.getElementById('msrdev1').style.transformOrigin="100% 80%";
		    document.getElementById('msrdev1').style.animation = "valveturn-2 2.5s forwards ";
		},500);
		
		setTimeout(function(){		
			document.getElementById('msrdev2').style.visibility="visible";
			document.getElementById('msrdev1').style.visibility="hidden";
		    document.getElementById('msrdev3').style.visibility="hidden";
		    document.getElementById('msrdev4').style.visibility="hidden";
		    document.getElementById('msrdev5').style.visibility="hidden";
			 
			document.getElementById('water1').style.visibility="visible";
			document.getElementById('cylwat').style = "visibility:visible ;position:absolute; left: 190px; width: 95px; top: 425px; height: 20px;";
			document.getElementById('cylwat').style.visibility="visible";
			document.getElementById('cylwat').style.transformOrigin="100% 80%";
		    document.getElementById('cylwat').style.animation="water-8 0.8s 1 forwards";	
		},3000);
		  
		setTimeout(function(){
			document.getElementById('msrdev2').style.visibility="hidden";
			document.getElementById('water1').style.visibility="hidden";
		},4000);
	    
		setTimeout(function()
		{
			document.getElementById('shaker1').style.visibility="visible";
			myInt = setInterval(function(){ animatearrow(); },500);
		    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:550px; top:335px; height: 40px; z-index: 10;";
		    document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		    // Code for IE9
		    document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		    // Standard syntax
		    document.getElementById("arrow1").style.transform = "rotate(360deg)";
            document.getElementById('shaker1').onclick=function(){step22();}
		},7000);
	} 
	
	function step22()
	{
		myStopFunction();
		
		setTimeout(function()
		{
			document.getElementById('cylwat').style.visibility="visible";
			document.getElementById('shaker1').style.visibility="hidden";
			document.getElementById('shaker2').style.visibility="visible";
			document.getElementById('shaker2').style.transformOrigin="100% 80%";
			document.getElementById('shaker2').style.animation = "mymove 1s 4 forwards ";
		},100);
		
		setTimeout(function()
		{
			document.getElementById('cement2').style.visibility="visible";
			document.getElementById('cylwat').style.visibility="hidden";
		},4500);
		
		setTimeout(function()
		{
			document.getElementById('wc3').style.visibility="hidden";
			document.getElementById('coverblue').style.visibility="hidden";
			document.getElementById('coverblue2').style.visibility="hidden";
			document.getElementById('cement2').style.visibility="visible";
			document.getElementById('shaker2').style.visibility="hidden";
        },5000);
		
		setTimeout(function()
		{
			document.getElementById('nextButton').style.visibility="visible";
		},6000);
	}

	function step3()
	{
		myStopFunction();

		document.getElementById('shaker3').style.visibility="visible";
     	document.getElementById('shaker').style.visibility="hidden"

		document.getElementById('shaker4').style.visibility="visible";
		   
		document.getElementById('p4').style.transformOrigin="100% 80%";
		document.getElementById('p4').style.animation="mymove3 4s forwards";
		document.getElementById('p4').style.visibility="visible";

		document.getElementById('cement1').style.transformOrigin="100% 80%";
		document.getElementById('cement1').style.animation="mymovecement 4s forwards";
		document.getElementById('cement1').style.visibility="visible";
 			
 		setTimeout(function()
		{ 
		 	myInt = setInterval(function(){ animatearrow(); },500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 520px; top:425px; height: 30px; z-index: 10;";
		 	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		     // Code for IE9
		 	document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		     // Standard syntax
		 	document.getElementById("arrow1").style.transform = "rotate(180deg)";
		     document.getElementById('on3-3').style.visibility="hidden";
		 		
		   	document.getElementById('on3-1').style.visibility="visible";
         	document.getElementById('on3-1').onclick=function(){step31();}
        },1000); 
    }
	
	function step31()
	{
		myStopFunction();
			
		setTimeout(function()
		{  
			document.getElementById('on3-1').style.visibility="visible";
			document.getElementById('on3-2').style.visibility="hidden";
			document.getElementById('on3-3').style.visibility="hidden";

			document.getElementById('shaker3').style.visibility="visible";
			document.getElementById('shaker4').style.transformOrigin="100% 80%";
			document.getElementById('shaker4').style.visibility="visible";

			document.getElementById('p4').style.visibility="visible";
			document.getElementById('cement1').style.visibility="visible";
		},500);

		setTimeout(function()
		{   
		     document.getElementById('shaker4').style.animation = "mymove7 1s 10 forwards ";
		},1000); 
			
		setTimeout(function()
		{
			document.getElementById('tare3-2').style.visibility="hidden";
			document.getElementById('tare3-3').style.visibility="hidden";
			document.getElementById('tare3-1').style.visibility="visible";
	     
			document.getElementById('on3-1').style.visibility="visible";
			document.getElementById('on3-2').style.visibility="hidden";
			document.getElementById('on3-3').style.visibility="hidden";
			document.getElementById('nextButton').style.visibility="visible";
		},11000);  
	}
    
	function step4()
	{
        myStopFunction();
         
		document.getElementById('on3-1').style.visibility="hidden";
        document.getElementById('water').style.visibility="hidden";
        document.getElementById('water1').style.visibility="hidden";
         			
		setTimeout(function()
		{
			document.getElementById('beaker3').style.transformOrigin="100% 80%";
			document.getElementById('beaker3').style.animation = "valveturn-2 5s forwards ";
		},500);
         
	    setTimeout(function()
		{
			document.getElementById('beaker3').style.visibility="hidden";
			document.getElementById('beaker4').style.visibility="visible";
			document.getElementById('cylwat1').style.visibility="hidden";
		  
			document.getElementById('pc3').style.visibility="visible";
		},5500);
			 
		setTimeout(function()
		{
			document.getElementById('cement3').style.visibility="visible";
			document.getElementById('beaker4').style.visibility="hidden";
			document.getElementById('pc3').style.visibility="hidden";
			document.getElementById('step4hn').style.visibility="visible";
		}, 6000);

		setTimeout(function()
		{
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:550px; top:130px; height: 40px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
			// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(360deg)";
			document.getElementById('step4hn').onclick=function(){step41();}
		},7000);
	}
	
    function step41()
	{
		myStopFunction();
		 setTimeout(function()
		{
			document.getElementById('step4hn2').style.visibility="hidden";
			document.getElementById('step4hn').style.visibility="visible";		
			document.getElementById('step4hn').style.transformOrigin="100% 80%";
			document.getElementById('step4hn').style.animation = "valveturn-2 4s forwards ";
		},500);
         
	    setTimeout(function()
		{
			document.getElementById('step4hn').style.visibility="hidden";
			document.getElementById('step4hn2').style.visibility="visible";
			document.getElementById('water3').style.visibility="visible";
		},5000);
			 
		setTimeout(function()
		{
			document.getElementById('cement3').style.visibility="visible";
			document.getElementById('step4hn2').style.visibility="hidden";
			document.getElementById('water3').style.visibility="hidden";
			document.getElementById('new').style.visibility="visible";
		},6500);
		
		
		setTimeout(function()
		{
			document.getElementById('cylwat').style = "visibility:visible ;position:absolute; left: 363px; top: 215px;width:49.5px; height: 260px;";
			document.getElementById('cylwat').style.visibility="visible";
			document.getElementById('cylwat').style.transformOrigin="100% 80%";
		    document.getElementById('cylwat').style.animation="water-8 1s 1 forwards";
		},7000);
			
		setTimeout(function()
		{
			document.getElementById('cylwat').style.visibility="visible";
			
		},8000);
		
		setTimeout(function()
		{
			document.getElementById('cylwat').style.visibility="hidden";
			document.getElementById('new').style.visibility="hidden";
			document.getElementById('cement3').style.visibility="hidden";
			document.getElementById('new1000').style.visibility="visible";
			document.getElementById('stopper').style.visibility="visible";
			
		},10000);
		
		setTimeout(function()
		{
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:700px; top:150.75px; height: 40px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
			// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(270deg)";
			document.getElementById('stopper').onclick=function(){step42();}
		},11000);	 
     }

    function step42()
    {
     	myStopFunction();
     	document.getElementById('stopper').style.visibility="visible";
        document.getElementById('stopper').style.transformOrigin="100% 80%";
     	
		setTimeout(function()
		{
			document.getElementById('stopper').style.animation = "mymove10 5s forwards ";

		},100);

		setTimeout(function()
		{
			document.getElementById('new1000').style.visibility="hidden";
			document.getElementById('new').style.visibility="hidden";
			document.getElementById('new300').style.visibility="hidden";
			document.getElementById('new600').style.visibility="hidden";
			document.getElementById('stopper').style.visibility="hidden";
			document.getElementById('stopper3').style.visibility="visible";

			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:475px; top:250px; height: 40px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
			// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(360deg)";
			document.getElementById('stopper3').onclick=function(){step43();}
		},6000);	
	}

function step43()
{
	myStopFunction();
	
	setTimeout(function()
	{
		document.getElementById('stopper3').style.visibility="hidden";
		document.getElementById('arrow1').style.visibility="hidden";
		document.getElementById('arrow1').style.visibility="hidden";

		document.getElementById('new1000').style.visibility="hidden";
		document.getElementById('new2').style.visibility="visible";
        document.getElementById('new2').style.transformOrigin="100% 80%";
		document.getElementById('new2').style.animation = "mymove11 0.5s 2";
	},500);

	setTimeout(function()
	{
		document.getElementById('new2').style.visibility="hidden";
		document.getElementById('new3').style.visibility="visible";
        document.getElementById('new3').style.transformOrigin="100% 80%";
		document.getElementById('new3').style.animation = "mymove11 0.5s 2";
	},2000);

	setTimeout(function()
	{
		document.getElementById('new3').style.visibility="hidden";
		document.getElementById('new4').style.visibility="visible";
        document.getElementById('new4').style.transformOrigin="100% 80%";
		document.getElementById('new4').style.animation = "mymove11 0.5s 2";
	},3000);

	setTimeout(function()
	{
		document.getElementById('new4').style.visibility="hidden";
		document.getElementById('new2').style.visibility="hidden";
		document.getElementById('newmixed1000').style.visibility="visible";
		document.getElementById('new1000').style.visibility="hidden";
		document.getElementById('reading').style.visibility="visible";
		document.getElementById('reading').innerHTML= "Time : 0 sec";
	},4000);
		
		
	setTimeout( function() 
	{
		document.getElementById('clock').style.visibility = "visible";
		document.getElementById('clockhandle').style.visibility="visible";
		document.getElementById('clockhandle').style.transformOrigin="100% 80%";
		document.getElementById('clockhandle').style.animation = "clocktick15 2s 1";
		document.getElementById('clockhandle').style.transform = "rotate(90deg)";
		
	}, 5000);
			
	setTimeout( function() 
	{
		
		document.getElementById('reading').style.visibility="visible";
		document.getElementById('reading').innerHTML= "Time : 15 sec";
	}, 7000);
	
	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:700px; top:250.75px; height: 40px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(360deg)";
		document.getElementById('hydrowithdwater').style.visibility = "visible";
		document.getElementById('hydrowithdwater').onclick=function(){step44();}
	},8000);
}

function step44()
	{
		
	myStopFunction();
	
	setTimeout(function()
	{
		document.getElementById('hydrowithdwater').style.visibility = "hidden";
		document.getElementById('hydrometer').style.visibility="visible";
		document.getElementById('dwater').style.visibility = "visible";
		document.getElementById('hydrometer').style.transformOrigin="100% 80%";
		document.getElementById('hydrometer').style.animation = "mymove12 1s 1";
		
	},500);
	setTimeout(function()
	{
		document.getElementById('hydrometer').style="visibility:visible ;position:absolute; left:370px; top:160px;width:30px; height: 300px;" ;
		document.getElementById('h15').style.visibility="visible";	
		document.getElementById('h15').style.transformOrigin="100% 80%";
		document.getElementById('h15').style.animation = "mymove14 1s 1";
	},1500);
	setTimeout(function()
	{
		document.getElementById('table').style.visibility = "visible";
		document.getElementById('row15').style.visibility = "visible";
		document.getElementById('row15').style.backgroundColor = "yellow";
		document.getElementById('stopper3').style.visibility="hidden";
		document.getElementById('new2').style.visibility="hidden";
		document.getElementById('new4').style.visibility="hidden";
		document.getElementById('newmixed1000').style.visibility="visible";
		document.getElementById('hydrowithdwater').style.visibility = "hidden";
		document.getElementById('dwater').style.visibility = "visible";
		document.getElementById('clock').style.visibility = "visible";
		document.getElementById('clockhandle').style.visibility = "visible";
		document.getElementById('reading').style.visibility="visible";
	},2500);

	setTimeout(function()
	{
    	myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:500px; top:250.75px; height: 40px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(360deg)";
     	document.getElementById('hydrometer').onclick=function(){step45();}
    },5000);
}

function step45()
{	
	myStopFunction();
	
	setTimeout(function()
	{
		document.getElementById('hydrometer').style.visibility="visible";
		document.getElementById('hydrometer').style.transformOrigin="100% 80%";
		document.getElementById('hydrometer').style.animation = "mymove13 1s 1";
	},500);
	
	setTimeout(function()
	{
		document.getElementById('dwater').style.visibility = "hidden";
		document.getElementById('hydrowithdwater').style.visibility = "visible";
		document.getElementById('newmixed1000').style.visibility = "visible";	
		document.getElementById('hydrometer').style.visibility = "hidden";
		document.getElementById('table').style.visibility = "hidden";
		document.getElementById('row15').style.visibility = "hidden";
		document.getElementById('row15').style.backgroundColor = "white";
		document.getElementById('h15').style.visibility = "hidden";
	},1000);

	setTimeout(function()
	{
		document.getElementById('clock').style.visibility = "visible";
		document.getElementById('clockhandle').style.visibility="visible";
		document.getElementById('clockhandle').style.transformOrigin="100% 80%";
		document.getElementById('clockhandle').style.animation = "clocktick30 2s 1";
		document.getElementById('clockhandle').style.transform = "rotate(180deg)";
	},3000);
	
	setTimeout( function() 
	{
		
		document.getElementById('reading').style.visibility="visible";
		document.getElementById('reading').innerHTML= "Time : 30 sec";
	}, 6000);

	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:700px; top:250.75px; height: 40px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(360deg)";
		document.getElementById('hydrowithdwater').onclick=function(){step46();}
	}, 7000);		
}

function step46()
{
	myStopFunction();
	
	setTimeout(function()
	{
		document.getElementById('hydrowithdwater').style.visibility = "hidden";
		document.getElementById('hydrometer').style.visibility="visible";
		document.getElementById('dwater').style.visibility = "visible";
		document.getElementById('hydrometer').style.transformOrigin="100% 80%";
		document.getElementById('hydrometer').style.animation = "mymove12 1s 1";
		
	},500);
	
	setTimeout(function()
	{
		document.getElementById('hydrometer').style="visibility:visible ;position:absolute; left:370px; top:160px;width:30px; height: 300px;" ;
		document.getElementById('h30').style.visibility="visible";	
		document.getElementById('h30').style.transformOrigin="100% 80%";
		document.getElementById('h30').style.animation = "mymove14 1s 1";
	},1500);
	
	setTimeout(function()
	{
		document.getElementById('table').style.visibility = "visible";
		document.getElementById('row15').style.visibility = "visible";
		document.getElementById('row30').style.visibility = "visible";
		document.getElementById('row30').style.backgroundColor = "yellow";
		document.getElementById('stopper3').style.visibility="hidden";
		document.getElementById('new2').style.visibility="hidden";
		document.getElementById('new4').style.visibility="hidden";
		document.getElementById('newmixed1000').style.visibility="visible";
		document.getElementById('hydrowithdwater').style.visibility = "hidden";
		
	},3000);

	setTimeout(function()
	{
		document.getElementById('dwater').style.visibility = "visible";
    	//document.getElementById('tab').style.visibility="visible";
    		
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:500px; top:250.75px; height: 40px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(360deg)";
		document.getElementById('hydrometer').onclick=function(){step47();}
    },4000);
}

	function step47()
	{
		
myStopFunction();

setTimeout(function()
	{
		document.getElementById('hydrometer').style.visibility="visible";
		document.getElementById('hydrometer').style.transformOrigin="100% 80%";
		document.getElementById('hydrometer').style.animation = "mymove13 1s 1";
	},500);

	setTimeout( function() 
	{
		document.getElementById('dwater').style.visibility = "hidden";
		document.getElementById('hydrowithdwater').style.visibility = "visible";
		document.getElementById('newmixed1000').style.visibility = "visible";
		document.getElementById('hydrometer').style.visibility = "hidden";
		document.getElementById('table').style.visibility = "hidden";
		document.getElementById('row15').style.visibility = "hidden";
		document.getElementById('row30').style.visibility = "hidden";
		document.getElementById('row30').style.backgroundColor = "white";
		document.getElementById('h30').style.visibility = "hidden";
	},1000);	
	
	setTimeout( function() 
	{
		document.getElementById('clock').style.visibility = "visible";
		document.getElementById('clockhandle').style.visibility="visible";
		document.getElementById('clockhandle').style.transformOrigin="100% 80%";
		document.getElementById('clockhandle').style.animation = "clocktick60 2s 1";
		document.getElementById('clockhandle').style.transform = "rotate(0deg)";
	}, 2000);
		
	setTimeout( function() 
	{
		
		document.getElementById('reading').style.visibility="visible";
		document.getElementById('reading').innerHTML= "Time : 60 sec";
	}, 5000);
	
	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:700px; top:250.75px; height: 40px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		 // Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(360deg)";
		document.getElementById('hydrowithdwater').onclick=function(){step48();}
	},7000);	
}


function step48()
{
	myStopFunction();
	setTimeout(function()
	{
		document.getElementById('hydrowithdwater').style.visibility = "hidden";
		document.getElementById('hydrometer').style.visibility="visible";
		document.getElementById('dwater').style.visibility = "visible";
		document.getElementById('hydrometer').style.transformOrigin="100% 80%";
		document.getElementById('hydrometer').style.animation = "mymove12 1s 1";
		
	},500);
	
		setTimeout(function()
	{
		document.getElementById('hydrometer').style="visibility:visible ;position:absolute; left:370px; top:160px;width:30px; height: 300px;" ;
		document.getElementById('h60').style.visibility="visible";	
		document.getElementById('h60').style.transformOrigin="100% 80%";
		document.getElementById('h60').style.animation = "mymove14 1s 1";
	},1500);
	
	setTimeout(function()
	{
		document.getElementById('table').style.visibility = "visible";
		document.getElementById('row15').style.visibility = "visible";
		document.getElementById('row30').style.visibility = "visible";
		document.getElementById('row60').style.visibility = "visible";	
		document.getElementById('row60').style.backgroundColor = "yellow";
		document.getElementById('stopper3').style.visibility="hidden";
		document.getElementById('new2').style.visibility="hidden";
		document.getElementById('new4').style.visibility="hidden";
		document.getElementById('newmixed1000').style.visibility="visible";
		document.getElementById('hydrowithdwater').style.visibility = "hidden";
		
		document.getElementById('dwater').style.visibility = "visible";
        
	},3000);

	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:500px; top:250.75px; height: 40px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(360deg)";
		document.getElementById('hydrometer').onclick=function(){step49();}
    },4000);
}

function step49()
{
	myStopFunction();
	
	setTimeout(function()
	{
		document.getElementById('hydrometer').style.visibility="visible";
		document.getElementById('hydrometer').style.transformOrigin="100% 80%";
		document.getElementById('hydrometer').style.animation = "mymove13 1s 1";
	},500);
	
	setTimeout( function() {
		document.getElementById('dwater').style.visibility = "hidden";
		document.getElementById('hydrowithdwater').style.visibility = "visible";
		document.getElementById('newmixed1000').style.visibility = "visible";
		document.getElementById('hydrometer').style.visibility = "hidden";
		document.getElementById('table').style.visibility = "hidden";
		document.getElementById('row15').style.visibility = "hidden";
		document.getElementById('row30').style.visibility = "hidden";
		document.getElementById('row60').style.visibility = "hidden";
		document.getElementById('h60').style.visibility = "hidden";
		document.getElementById('row60').style.backgroundColor = "white";
	}, 1000);
		
	setTimeout( function() 
	{
		
		document.getElementById('clock').style.visibility = "visible";
		document.getElementById('clockhandle').style.visibility="visible";
		document.getElementById('clockhandle').style.transformOrigin="100% 80%";
		document.getElementById('clockhandle').style.animation = "clocktick120 2s 1";
		document.getElementById('clockhandle').style.transform = "rotate(0deg)";
	}, 5000);
		
	setTimeout( function() 
	{
		document.getElementById('reading').style.visibility="visible";
		document.getElementById('reading').innerHTML= "Time : 120 sec";
	}, 8000);
	
	setTimeout(function(){
		myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:700px; top:250.75px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		  // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		  // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(360deg)";

		 document.getElementById('hydrowithdwater').onclick=function(){step410();}
		},9000);	
}
     

function step410()
{
	myStopFunction();
	
	setTimeout(function()
	{
		document.getElementById('hydrowithdwater').style.visibility = "hidden";
		document.getElementById('hydrometer').style.visibility="visible";
		document.getElementById('dwater').style.visibility = "visible";
		document.getElementById('hydrometer').style.transformOrigin="100% 80%";
		document.getElementById('hydrometer').style.animation = "mymove12 1s 1";
		
	},500);
	
	setTimeout(function()
	{
		document.getElementById('hydrometer').style="visibility:visible ;position:absolute; left:370px; top:160px;width:30px; height: 300px;" ;
		document.getElementById('h120').style.visibility="visible";	
		document.getElementById('h120').style.transformOrigin="100% 80%";
		document.getElementById('h120').style.animation = "mymove14 1s 1";
	},1500);


	setTimeout(function()
	{
		document.getElementById('table').style.visibility = "visible";
		document.getElementById('row15').style.visibility = "visible";
		document.getElementById('row30').style.visibility = "visible";
		document.getElementById('row60').style.visibility = "visible";
		document.getElementById('row120').style.visibility = "visible";
		document.getElementById('row120').style.backgroundColor = "yellow";
		document.getElementById('stopper3').style.visibility="hidden";
		document.getElementById('new2').style.visibility="hidden";
		document.getElementById('new4').style.visibility="hidden";
		document.getElementById('newmixed1000').style.visibility="visible";
		document.getElementById('hydrowithdwater').style.visibility = "hidden";
		document.getElementById('dwater').style.visibility = "visible";
		document.getElementById('reading').style.visibility="visible";
		document.getElementById('reading').innerHTML="Time : 120 sec";
	},3000);

	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:500px; top:250.75px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		  // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		  // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(360deg)";
		document.getElementById('hydrometer').onclick=function(){step411();}
    },4000);
}

function step411()
{
	myStopFunction();
	
	setTimeout(function()
	{
		document.getElementById('hydrometer').style.visibility="visible";
		document.getElementById('hydrometer').style.transformOrigin="100% 80%";
		document.getElementById('hydrometer').style.animation = "mymove13 1s 1";
	},500);
	
	setTimeout( function() 
	{
		document.getElementById('dwater').style.visibility = "hidden";
		document.getElementById('hydrowithdwater').style.visibility = "visible";
		document.getElementById('newmixed1000').style.visibility = "visible";
		document.getElementById('hydrometer').style.visibility = "hidden";
	
		document.getElementById('table').style.visibility = "hidden";
		document.getElementById('row15').style.visibility = "hidden";
		document.getElementById('row30').style.visibility = "hidden";
		document.getElementById('row60').style.visibility = "hidden";
		document.getElementById('row120').style.visibility = "hidden";
		document.getElementById('row120').style.backgroundColor = "white";
		document.getElementById('h120').style.visibility = "hidden";
	}, 1000);
				
	setTimeout( function() 
	{
		document.getElementById('clock').style.visibility = "visible";
		document.getElementById('clockhandle').style.visibility="visible";
		document.getElementById('clockhandle').style.transformOrigin="100% 80%";
		document.getElementById('clockhandle').style.animation = "clocktick240 2s 2";
		document.getElementById('clockhandle').style.transform = "rotate(0deg)";
	}, 2000);
		
	setTimeout( function() 
	{
		document.getElementById('reading').style.visibility="visible";
		document.getElementById('reading').innerHTML= "Time : 240 sec";
	}, 8000);
	
	
	setTimeout(function(){
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:700px; top:250.75px; height: 40px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(360deg)";
		document.getElementById('hydrowithdwater').onclick=function(){step412();}
	},9000);	
}

function step412()
{	
	myStopFunction();
	
	setTimeout(function()
	{
		document.getElementById('hydrowithdwater').style.visibility = "hidden";
		document.getElementById('hydrometer').style.visibility="visible";
		document.getElementById('dwater').style.visibility = "visible";
		document.getElementById('hydrometer').style.transformOrigin="100% 80%";
		document.getElementById('hydrometer').style.animation = "mymove12 1s 1";
		
	},500);
	
	setTimeout(function()
	{
		document.getElementById('hydrometer').style="visibility:visible ;position:absolute; left:370px; top:160px;width:30px; height: 300px;" ;
		document.getElementById('h240').style.visibility="visible";	
		document.getElementById('h240').style.transformOrigin="100% 80%";
		document.getElementById('h240').style.animation = "mymove14 1s 1";
	},1500);
	
	setTimeout(function()
	{
		document.getElementById('table').style.visibility = "visible";
		document.getElementById('row15').style.visibility = "visible";
		document.getElementById('row30').style.visibility = "visible";
		document.getElementById('row60').style.visibility = "visible";
		document.getElementById('row120').style.visibility = "visible";
		document.getElementById('row240').style.visibility = "visible";
		document.getElementById('row240').style.backgroundColor = "yellow";
		document.getElementById('stopper3').style.visibility="hidden";
		document.getElementById('new2').style.visibility="hidden";
		document.getElementById('new4').style.visibility="hidden";
		document.getElementById('newmixed1000').style.visibility="visible";
		document.getElementById('hydrowithdwater').style.visibility = "hidden";
		document.getElementById('dwater').style.visibility = "visible";
    	document.getElementById('reading').style.visibility="visible";
		document.getElementById('reading').innerHTML="Time : 240 sec";
	},3000);

	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:500px; top:250.75px; height: 40px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		 // Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		 // Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(360deg)";
		document.getElementById('hydrometer').onclick=function(){step413();}
     },4000);
}

		
function step413()
{
	myStopFunction();
	setTimeout(function()
	{
		document.getElementById('hydrometer').style.visibility="visible";
		document.getElementById('hydrometer').style.transformOrigin="100% 80%";
		document.getElementById('hydrometer').style.animation = "mymove13 1s 1";
	},500);
			
	setTimeout( function() 
	{
		document.getElementById('dwater').style.visibility = "hidden";
		document.getElementById('hydrowithdwater').style.visibility = "visible";
		document.getElementById('newmixed1000').style.visibility = "visible";
		document.getElementById('hydrometer').style.visibility = "hidden";
		document.getElementById('table').style.visibility = "hidden";
		document.getElementById('row15').style.visibility = "hidden";
		document.getElementById('row30').style.visibility = "hidden";
		document.getElementById('row60').style.visibility = "hidden";
		document.getElementById('row120').style.visibility = "hidden";
		document.getElementById('row240').style.visibility = "hidden";
		document.getElementById('row240').style.backgroundColor = "white";
		document.getElementById('h240').style.visibility = "hidden";
	}, 1000);
		
	setTimeout( function() 
	{
		document.getElementById('clock').style.visibility = "visible";
		document.getElementById('clockhandle').style.visibility="visible";
		document.getElementById('clockhandle').style.transformOrigin="100% 80%";
		document.getElementById('clockhandle').style.animation = "clocktick480 1s 4";
		document.getElementById('clockhandle').style.transform = "rotate(0deg)";
	}, 2000);	
	
	setTimeout( function() 
	{
		document.getElementById('reading').style.visibility="visible";
		document.getElementById('reading').innerHTML= "Time : 480 sec";
	}, 6000);
	
	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:700px; top:250.75px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(360deg)";
		 document.getElementById('hydrowithdwater').onclick=function(){step414();}
	},11000);	
}

function step414()
{
	myStopFunction();
	
	setTimeout(function()
	{
		document.getElementById('hydrowithdwater').style.visibility = "hidden";
		document.getElementById('hydrometer').style.visibility="visible";
		document.getElementById('dwater').style.visibility = "visible";
		document.getElementById('hydrometer').style.transformOrigin="100% 80%";
		document.getElementById('hydrometer').style.animation = "mymove12 1s 1";
		
	},500);
	
	setTimeout(function()
	{
		document.getElementById('hydrometer').style="visibility:visible ;position:absolute; left:370px; top:160px;width:30px; height: 300px;" ;
		document.getElementById('h480').style.visibility="visible";	
		document.getElementById('h480').style.transformOrigin="100% 80%";
		document.getElementById('h480').style.animation = "mymove14 1s 1";
		
	},1500);

	
    setTimeout(function()
	{
		document.getElementById('stopper3').style.visibility="hidden";
		document.getElementById('new2').style.visibility="hidden";
		document.getElementById('new4').style.visibility="hidden";
		document.getElementById('newmixed1000').style.visibility="visible";
		document.getElementById('hydrowithdwater').style.visibility = "hidden";
		
		document.getElementById('table').style.visibility = "visible";
		document.getElementById('row15').style.visibility = "visible";
		document.getElementById('row30').style.visibility = "visible";
		document.getElementById('row60').style.visibility = "visible";
		document.getElementById('row120').style.visibility = "visible";
		document.getElementById('row240').style.visibility = "visible";
		document.getElementById('row480').style.visibility = "visible";
		document.getElementById('row480').style.backgroundColor = "yellow";
		document.getElementById('dwater').style.visibility = "visible";
		document.getElementById('reading').style.visibility="visible";
		document.getElementById('reading').innerHTML="Time : 480 sec";
	},3000);

	setTimeout(function()
	{
		
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:500px; top:250.75px; height: 40px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(360deg)";
		document.getElementById('hydrometer').onclick=function(){step415();}
    },4000);
}

function step415()
{
	myStopFunction();
	
	setTimeout(function()
	{
		document.getElementById('hydrometer').style.visibility="visible";
		document.getElementById('hydrometer').style.transformOrigin="100% 80%";
		document.getElementById('hydrometer').style.animation = "mymove13 1s 1";
	},500);
		
	setTimeout( function() 
	{	
		
		document.getElementById('dwater').style.visibility = "hidden";
		document.getElementById('hydrowithdwater').style.visibility = "visible";
		document.getElementById('newmixed1000').style.visibility = "visible";
		document.getElementById('hydrometer').style.visibility = "hidden";
		document.getElementById('table').style.visibility = "hidden";
		document.getElementById('row15').style.visibility = "hidden";
		document.getElementById('row30').style.visibility = "hidden";
		document.getElementById('row60').style.visibility = "hidden";
		document.getElementById('row120').style.visibility = "hidden";
		document.getElementById('row240').style.visibility = "hidden";
		document.getElementById('row480').style.visibility = "hidden";
		document.getElementById('row480').style.backgroundColor = "white";
		document.getElementById('h480').style.visibility = "hidden";
	}, 1000);
		
			
	setTimeout( function() 
	{
		document.getElementById('clock').style.visibility = "visible";
		document.getElementById('clockhandle').style.visibility="visible";
		document.getElementById('clockhandle').style.transformOrigin="100% 80%";
		document.getElementById('clockhandle').style.animation = "clocktick960 1s 8";
		document.getElementById('clockhandle').style.transform = "rotate(0deg)";
	}, 2000);
		
	setTimeout( function() 
	{
		document.getElementById('reading').style.visibility="visible";
		document.getElementById('reading').innerHTML= "Time : 960 sec";
	}, 10000);

	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:700px; top:250.75px; height: 40px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(360deg)";
		document.getElementById('hydrowithdwater').onclick=function(){step416();}
	},11000);	
}

function step416()
{
	myStopFunction();
	
	setTimeout(function()
	{
		document.getElementById('hydrowithdwater').style.visibility = "hidden";
		document.getElementById('hydrometer').style.visibility="visible";
		document.getElementById('dwater').style.visibility = "visible";
		document.getElementById('hydrometer').style.transformOrigin="100% 80%";
		document.getElementById('hydrometer').style.animation = "mymove12 1s 1";
		
	},500);
	
	setTimeout(function()
	{
		document.getElementById('hydrometer').style="visibility:visible ;position:absolute; left:370px; top:160px;width:30px; height: 300px;" ;
		document.getElementById('h960').style.visibility="visible";	
		document.getElementById('h960').style.transformOrigin="100% 80%";
		document.getElementById('h960').style.animation = "mymove14 1s 1";
	},1500);
	
    setTimeout(function()
	{
		document.getElementById('table').style.visibility = "visible";
		document.getElementById('row15').style.visibility = "visible";
		document.getElementById('row30').style.visibility = "visible";
		document.getElementById('row60').style.visibility = "visible";
		document.getElementById('row120').style.visibility = "visible";
		document.getElementById('row240').style.visibility = "visible";
		document.getElementById('row480').style.visibility = "visible";
		document.getElementById('row960').style.visibility = "visible";
		document.getElementById('row960').style.backgroundColor = "yellow";
		document.getElementById('stopper3').style.visibility="hidden";
		document.getElementById('new2').style.visibility="hidden";
		document.getElementById('new4').style.visibility="hidden";
		document.getElementById('newmixed1000').style.visibility="visible";
		document.getElementById('hydrowithdwater').style.visibility = "hidden";
		
		document.getElementById('dwater').style.visibility = "visible";
    	document.getElementById('reading').style.visibility="visible";
		document.getElementById('reading').innerHTML="Time : 960 sec";
   
	},3000);

	setTimeout(function()
	{
		
    	myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:500px; top:250.75px; height: 40px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(360deg)";
		document.getElementById('hydrometer').onclick=function(){step417();}
    },4000);
}

function step417()
{
	myStopFunction();
	
	setTimeout(function()
	{
		document.getElementById('hydrometer').style.visibility="visible";
		document.getElementById('hydrometer').style.transformOrigin="100% 80%";
		document.getElementById('hydrometer').style.animation = "mymove13 1s 1";
	},500);
			
	setTimeout( function() 
	{
		document.getElementById('dwater').style.visibility = "hidden";
		document.getElementById('hydrowithdwater').style.visibility = "visible";
		document.getElementById('newmixed1000').style.visibility = "visible";
		document.getElementById('hydrometer').style.visibility = "hidden";
		document.getElementById('table').style.visibility = "hidden";
		document.getElementById('row15').style.visibility = "hidden";
		document.getElementById('row30').style.visibility = "hidden";
		document.getElementById('row60').style.visibility = "hidden";
		document.getElementById('row120').style.visibility = "hidden";
		document.getElementById('row240').style.visibility = "hidden";
		document.getElementById('row480').style.visibility = "hidden";
		document.getElementById('row960').style.visibility = "hidden";
		document.getElementById('row960').style.backgroundColor = "white";
		document.getElementById('h960').style.visibility = "hidden";
	}, 1000);
		
	setTimeout( function() 
	{
		document.getElementById('clock').style.visibility = "visible";
		document.getElementById('clockhandle').style.visibility="visible";
		document.getElementById('clockhandle').style.transformOrigin="100% 80%";
		document.getElementById('clockhandle').style.animation = "clocktick1920 1s 16";
		document.getElementById('clockhandle').style.transform = "rotate(0deg)";
	}, 1000);
		
	setTimeout( function() 
	{
		
		document.getElementById('reading').style.visibility="visible";
		document.getElementById('reading').innerHTML= "Time : 1920 sec";
	}, 17000);
		
	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:700px; top:250.75px; height: 40px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(360deg)";
		document.getElementById('hydrowithdwater').onclick=function(){step418();}
	},18000);	
}

function step418()	
{
    myStopFunction();
	
	setTimeout(function()
	{
		document.getElementById('hydrowithdwater').style.visibility = "hidden";
		document.getElementById('hydrometer').style.visibility="visible";
		document.getElementById('dwater').style.visibility = "visible";
		document.getElementById('hydrometer').style.transformOrigin="100% 80%";
		document.getElementById('hydrometer').style.animation = "mymove12 1s 1";
		
	},500);
	
	setTimeout(function()
	{
		document.getElementById('hydrometer').style="visibility:visible ;position:absolute; left:370px; top:160px;width:30px; height: 300px;" ;
		document.getElementById('h1920').style.visibility="visible";	
		document.getElementById('h1920').style.transformOrigin="100% 80%";
		document.getElementById('h1920').style.animation = "mymove14 1s 1";
	},1500);
		
	setTimeout(function()
	{
		document.getElementById('table').style.visibility = "visible";
		document.getElementById('row15').style.visibility = "visible";
		document.getElementById('row30').style.visibility = "visible";
		document.getElementById('row60').style.visibility = "visible";
		document.getElementById('row120').style.visibility = "visible";
		document.getElementById('row240').style.visibility = "visible";
		document.getElementById('row480').style.visibility = "visible";
		document.getElementById('row960').style.visibility = "visible";
		document.getElementById('row1920').style.visibility = "visible";
		document.getElementById('row1920').style.backgroundColor = "yellow";
		document.getElementById('stopper3').style.visibility="hidden";
		document.getElementById('new2').style.visibility="hidden";
		document.getElementById('new4').style.visibility="hidden";
		document.getElementById('newmixed1000').style.visibility="visible";
		document.getElementById('hydrowithdwater').style.visibility = "hidden";
		
		document.getElementById('dwater').style.visibility = "visible";
    	document.getElementById('reading').style.visibility="visible";
    	document.getElementById('reading').innerHTML="Time : 1920 sec";		
	},2000);
	
	setTimeout(function()
	{
		document.getElementById('dwater').style.visibility = "hidden";
		document.getElementById('hydrowithdwater').style.visibility = "hidden";
		document.getElementById('newmixed1000').style.visibility = "visible";
		document.getElementById('hydrometer').style.visibility = "visible";

		document.getElementById('nextButton').style.visibility="visible";
		
	},3000);
}

	
	function refresh()
	{
         document.getElementById('hand').style.transformOrigin = "";
		 document.getElementById("hand").style.animation = "";
         document.getElementById("arrow1").style.animation = "";
         document.getElementById('pic6').style.transformOrigin="";
		 document.getElementById("pic6").style.animation = "";
		 document.getElementById('setup5-4').style.transformOrigin="";
		 document.getElementById("setup5-4").style.animation = "";
		 document.getElementById('setup5-1').style.transformOrigin="";
		 document.getElementById("setup5-1").style.animation = "";
		 document.getElementById('hnd2').style.transformOrigin="";
		 document.getElementById("hnd2").style.animation = "";
		 document.getElementById('setup4-1').style.transformOrigin="";
		 document.getElementById("setup4-1").style.animation = "";
		 document.getElementById('setup4-2').style.transformOrigin="";
		 document.getElementById("setup4-2").style.animation = "";
		 document.getElementById('setup4-4').style.transformOrigin="";
		 document.getElementById("setup4-4").style.animation = "";
		 document.getElementById('shaker').style.transformOrigin="";
		 document.getElementById("shaker").style.animation = "";
		 document.getElementById('shaker2').style.transformOrigin="";
		 document.getElementById("shaker2").style.animation = "";
		 document.getElementById('shaker3').style.transformOrigin="";
		 document.getElementById("shaker3").style.animation = "";
		 document.getElementById('shaker4').style.transformOrigin="";
		 document.getElementById("shaker4").style.animation = "";
		 document.getElementById('shaker5').style.transformOrigin="";
		 document.getElementById("shaker5").style.animation = "";
		 document.getElementById('msrdev1').style.transformOrigin="";
		 document.getElementById("msrdev1").style.animation = "";
		 document.getElementById('coverblue').style.transformOrigin="";
		 document.getElementById("coverblue").style.animation = "";
		 document.getElementById('coverblue2').style.transformOrigin="";
		 document.getElementById("coverblue2").style.animation = "";		 
		 document.getElementById('wc3').style.transformOrigin="";
		 document.getElementById("wc3").style.animation = "";
		 document.getElementById('cylwat').style.transformOrigin="";
		 document.getElementById("cylwat").style.animation = "";		 
		 document.getElementById('hn').style.transformOrigin="";
		 document.getElementById("hn").style.animation = "";
		 document.getElementById('shaker2').style.transformOrigin="";
		 document.getElementById("shaker2").style.animation = "";
		 document.getElementById('wc3').style.transformOrigin="";
		 document.getElementById("wc3").style.animation = "";

		 document.getElementById('p4').style.transformOrigin="";
		 document.getElementById("p4").style.animation = "";

		 document.getElementById('cement1').style.transformOrigin="";
		 document.getElementById("cement1").style.animation = "";

		 document.getElementById('shaker4').style.transformOrigin="";
		 document.getElementById("shaker4").style.animation = "";
		 document.getElementById('beaker3').style.transformOrigin="";
		 document.getElementById("beaker3").style.animation = "";

		 document.getElementById('step4hn').style.transformOrigin="";
		 document.getElementById("step4hn").style.animation = "";

		 document.getElementById('stopper').style.transformOrigin="";
		 document.getElementById("stopper").style.animation = "";

		 document.getElementById('new2').style.transformOrigin="";
		 document.getElementById("new2").style.animation = "";

		 document.getElementById('new3').style.transformOrigin="";
		 document.getElementById("new3").style.animation = "";
		 document.getElementById('new4').style.transformOrigin="";
		 document.getElementById("new4").style.animation = "";


		 document.getElementById('msrdev3').style.transformOrigin="";
		 document.getElementById("msrdev3").style.animation = "";

		 document.getElementById('msrdev4').style.transformOrigin="";
		 document.getElementById("msrdev4").style.animation = "";

		 document.getElementById('msrdev5').style.transformOrigin="";
		 document.getElementById("msrdev5").style.animation = "";


		 		 
		 document.getElementById('tare2-1').onmouseover="";
		 document.getElementById('on2-1').onmouseover="";

	}
	
	//To set the questions division
function generateQuestion(qObject,qn,op1,op2,op3,op4,op5,ansKey,fn,dleft,dright,dwidth,dheight)
{
	document.getElementById('question-div').style.left=dleft+"px";											
	document.getElementById('question-div').style.top=dright+"px";												
	document.getElementById('question-div').style.width=dwidth+"px";
	document.getElementById('question-div').style.height=dheight+"px";
	qObject.setOptions(op1,op2,op3,op4,op5);
	qObject.setAns(ansKey);
	qObject.frameQuestions(qn);	
	qObject.setCallBack(fn);	
}

function finalStatement()
{
	document.getElementById("hintspan").style.visibility = "hidden";
	document.getElementById("p8-1").style.visibility = "visible";
	document.getElementById("p8-1").style.animation  ="slidePara 2s forwards";
}

function f1()
{
	myInt = setInterval(function(){ animatearrow(); }, 500);
}

function f2()
{
	document.getElementById('nextButton').style.visibility="visible";
}
		

function found(row) 
{
    //alert("hai");
    var table=document.getElementById("table");
    var cells = table.getElementsByTagName("tr");
    for (var i = 0; i < cells.length; i++) 
	{
		alert(cells[i].innerHTML);
	}
}
	