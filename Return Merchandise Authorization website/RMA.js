function randomNumber(){
    var p = document.getElementById("serial").value;
    
    if (p==''){
        alert("Please enter a serial number.");
    }
    else{
    //creating the confirmation number
    var x = Math.floor(Math.random() * 1000000000); 
    document.getElementById("confirmation").innerHTML= x;
    /* libraries
    10 Grand Army Plaza, Brooklyn, NY 11238
    476 5th Ave, New York, NY 10018
    515 Malcolm X Blvd, New York, NY 10037
    1172 Amsterdam Ave #300, New York, NY 10027
    
    
    */ 
    
    var s= ["10 Grand Army Plaza, Brooklyn, NY 11238", "476 5th Ave, New York, NY 10018", "515 Malcolm X Blvd, New York, NY 10037", "1172 Amsterdam Ave #300, New York, NY 10027"];
    var z = Math.floor(Math.random()*s.length);
    s = s[z];
    document.getElementById("address").innerHTML = s;
    
   
    window.location.href = "db.php?w1=" +x+"&w2="+s+"&w3="+p;
  
        
    }

}
              