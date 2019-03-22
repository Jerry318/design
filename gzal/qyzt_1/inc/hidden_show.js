// JavaScript Document
function menu(id){ 
    var i; 
	 
	var hexing;
	hexing=document.getElementById("mod"+id);	
    for(i=1;i<=3;i++){ 
		var lay;
		 a_ruby=document.getElementById("a"+i);   
		 a_ruby.className="orange_a";
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
	hexing=document.getElementById("mod"+id);	
    for(i=1;i<=4;i++){ 
		var lay;
		 a_ruby=document.getElementById("a"+i);   
		 a_ruby.className="orange_a";
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
