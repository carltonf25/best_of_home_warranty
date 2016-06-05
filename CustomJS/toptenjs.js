
// Grabs the date off users system and displays in MM DD YYYY format
function GetTodayDate() {
   var tdate = new Date();
   var dd = tdate.getDate(); 
   var MM = tdate.getMonth(); 
   var yyyy = tdate.getFullYear(); 
   var xxx = ( MM+1) + "/" + dd + "/" + yyyy;

   return xxx;
};
/* Displays GetTodayDate function, working on a way to implement
for multiple elements so we can display on the promo popups */
function displayDate() {
    document.getElementById("currentdate").innerHTML = "Current as of" + " " + GetTodayDate();
};

/* Checks element id and displays correct div, if else for now
and change to loop once we have more promo buttons */
function displayPromo(id) {
    if (id == "afcbutton" ) {
            document.getElementById('afcpromo').style.display='block';
            document.getElementById('fade').style.display='block';
    }
    else if (id == "choicebutton") {
            document.getElementById("choicepromo").style.display="block";
            document.getElementById("fade").style.display="block";
    }
    else if (id == "selectbutton") {
            document.getElementById("selectpromo").style.display="block";
            document.getElementById("fade").style.display="block";
    }
    else if (id == "totalbutton") {
            document.getElementById("totalpromo").style.display="block";
            document.getElementById("fade").style.display="block";
    };

};
// Closes whatever promo div is open
function closePromo() {
    document.getElementById("fade").style.display = "none";
    document.getElementById("afcpromo").style.display = "none";
    document.getElementById("choicepromo").style.display = "none";
    document.getElementById("selectpromo").style.display = "none";
    document.getElementById("totalpromo").style.display = "none";
    }
