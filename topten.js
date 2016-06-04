function GetTodayDate() {
   var tdate = new Date();
   var dd = tdate.getDate(); //yields day 
   var MM = tdate.getMonth(); //yields month
   var yyyy = tdate.getFullYear(); //yields year
   var xxx = ( MM+1) + "/" + dd + "/" + yyyy;

   return xxx;
};
function displayDate() {
document.getElementById("currenttime").innerHTML="Current as of" + " " + GetTodayDate();
};
