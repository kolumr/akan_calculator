function kana(){
  var bdate = document.getElementById("db").value;
  var rdate = new Date(bdate);
  var day = rdate.getDay();
  var nradio = document.getElementsByName("Gender");
  var present = 1;
  for (var i = 0, length = nradio.length; i < length; i++)
  {
    if (nradio[i].checked)
    {
      var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
      var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
        if (nradio[i].value === "Male"){
          alert(maleNames[day]);
        } 
          
        else {
          alert(femaleNames[day]);
        }
    present = 0;
    
    break;
    }
  }
  if (present == 1 )
  {
    alert("Please select Gender")
  }
}

