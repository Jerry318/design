// JavaScript Document
function menu(id){ 
    var i; 
	 
	var hexing;
	hexing=document.getElementById("mod"+id);	
    for(i=1;i<=3;i++){ 
		var lay;
		 a_ruby=document.getElementById("a"+i);   
		 a_ruby.className="current";
	     lay=document.getElementById("mod"+i);          		
		if (i==id){ 
            lay.style.display = "block"; 
			a_ruby.className="current";
			
			
        }
		else		 
		{ 	
		lay.style.display = "none";
		a_ruby.className="";
		
		}
		
    } 
    if (document.getElementById("mod"+id).style.display="none"){ 
        document.getElementById("mod"+id).style.display = "block"; 
		
	
	    }
		else
		{ 
        document.getElementById("mod"+id).style.display = "none";	
		
	
        } 		
} 

function show_ru(id){
	var ruby=document.getElementById(id);
	ruby.style.display="block";	
	}
function hide_ru(id){
	var ruby=document.getElementById(id);
	ruby.style.display="none";	
	}
	
	
	
	function menu_4(id){ 
    var i; 
	 
	var hexing;
	hexing=document.getElementById("sub_show"+id);	
    for(i=1;i<=4;i++){ 
		var lay;
		 a_ruby=document.getElementById("sub_a"+i);   
		 a_ruby.className="";
	     lay=document.getElementById("sub_show"+i);          		
		if (i==id){ 
            lay.style.display = "block"; 
			a_ruby.className="";
			a_ruby.style.display = "none"; 
			
			
        }
		else		 
		{ 	
		lay.style.display = "none";
		a_ruby.className="";
		a_ruby.style.display = "block"; 
		}
		
    } 
    if (document.getElementById("sub_show"+id).style.display="none"){ 
        document.getElementById("sub_show"+id).style.display = "block"; 
		
	
	    }
		else
		{ 
        document.getElementById("sub_show"+id).style.display = "none";	
		
	
        } 		
} 

function menu_2(id){ 
    var i; 
	 
	var hexing;
	hexing=document.getElementById("mod"+id);	
    for(i=1;i<=2;i++){ 
		var lay;
		 a_ruby=document.getElementById("a"+i);   
		 a_ruby.className="current";
	     lay=document.getElementById("mod"+i);          		
		if (i==id){ 
            lay.style.display = "block"; 
			a_ruby.className="current";
			
			
        }
		else		 
		{ 	
		lay.style.display = "none";
		a_ruby.className="";
		
		}
		
    } 
    if (document.getElementById("mod"+id).style.display="none"){ 
        document.getElementById("mod"+id).style.display = "block"; 
		
	
	    }
		else
		{ 
        document.getElementById("mod"+id).style.display = "none";	
		
	
        } 		
} 




function show_hide_ru(id,id2){
	var ruby=document.getElementById(id);
	var cyj=document.getElementById(id2);
	ruby.style.display="block";	
	cyj.style.display="none";
	}

	
	
	 function resizeIframe(obj) {

        var Iframe = document.getElementById(obj);

            if (Iframe){

                if (Iframe.contentDocument){//ff

                    Iframe.style.height = Iframe.contentDocument.body.scrollHeight +60+'px';

                }

                else if(Iframe.document && Iframe.document.body.scrollHeight){//ie

                Iframe.style.height = mainFrame.document.body.scrollHeight + 60 + 'px';

            }

        }

    }

