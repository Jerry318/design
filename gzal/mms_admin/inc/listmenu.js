// JavaScript Document
function menu(id){ 
    var i; 
	 
	var hexing;
	hexing=document.getElementById("lay"+id);	
    for(i=1;i<=5;i++){ 
		var lay;
		 a_ruby=document.getElementById("a"+i);        
	     lay=document.getElementById("lay"+i);          		
		if (lay.style.display=="none" && i==id){ 
            lay.style.display = "block"; 
			a_ruby.className="current";
			
			
        } 
		else		 
		{ 	
		lay.style.display = "none";
		a_ruby.className=" ";
		
		}
		
    } 
    if (document.getElementById("lay"+id).style.display="none"){ 
        document.getElementById("lay"+id).style.display = "block"; 
	
	    }
		else
		{ 
        document.getElementById("lay"+id).style.display = "none";		
	
        } 		
} 
