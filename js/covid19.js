function covidDataIndia(){
    $("#confimT").text("Loading");
$("#ActiveT").text("Loading");
$("#RecoveredT").text("Loading");
$("#DeathT").text("Loading");
$("#Confirmed").text("Loading...");
$("#Active").text("Loading...");
$("#Death").text("Loading...");
$("#Recovered").text("Loading...");
var ui="";
const Http = new XMLHttpRequest();
const url='https://api.covid19india.org/data.json';
Http.open("GET", url);
Http.send();


Http.onreadystatechange = (e) => {
   var json=Http.response;
   if(json==""){
     }
   else{
    var next=0;
    var tconfirm=0;
    var next1=0;
    var tRecv=0;
    var next3=0;
    var tDead=0;

    var jsonData=JSON.parse(json);
    var confirm=jsonData.statewise[0].confirmed;
    var active=jsonData.statewise[0].active;
    var death=jsonData.statewise[0].deaths;
    var recv=jsonData.statewise[0].recovered;
    $("#Confirmed").text(confirm);
    $("#Active").text(active);
    $("#Death").text(death);
    $("#Recovered").text(recv);
    for(i=1;i<jsonData.statewise.length;i++){
        tconfirm=parseInt(jsonData.statewise[i].deltaconfirmed)
        tRecv=parseInt(jsonData.statewise[i].deltarecovered);
        tDead=parseInt(jsonData.statewise[i].deltadeaths);
        if(isNaN(tconfirm)){
            tconfirm=0;
        }
        if(isNaN(tRecv)){
            tRecv=0;
        }
        if(isNaN(tDead)){
            tDead=0;
        }
        tconfirm=tconfirm+next;
        tRecv=tRecv+next1;
        tDead=tDead+next3;
        next=tconfirm;
        next1=tRecv;
        next3=tDead;



        var state=jsonData.statewise[i].state;
        var conn=jsonData.statewise[i].deltaconfirmed==0?"":"+"+jsonData.statewise[i].deltaconfirmed;
        var per=isNaN(jsonData.statewise[i].deaths/jsonData.statewise[i].confirmed) ?"-":(jsonData.statewise[i].deaths/jsonData.statewise[i].confirmed).toFixed(2);
        if(state=="Andaman and Nicobar Islands"){
            state="Andaman Nicobar Islands"
        }
        ui+='<tr>'
        +'<th scope="row">'
        +state 
        +'</th>'
        +'<td>'
        +'<span style="margin-left: -13px;color:red">'
        +conn
        +'</span>'
        +'<span style="margin-left: 10px;">'
        +'</span>'
        +jsonData.statewise[i].confirmed
        +'</td>'
        +'<td>'
        +jsonData.statewise[i].active
        +'</td>'
        +'<td>'
        +jsonData.statewise[i].recovered
        +'</td>'
        +'<td>'
        +jsonData.statewise[i].deaths
        +'</td>'
        +'<td>'
        +per+"%"
        +'</td>'
        +'</tr>';

    }
    $("#confimT").text("+"+tconfirm);
    $("#ActiveT").text("+"+tconfirm);
    $("#RecoveredT").text("+"+tRecv);
    $("#DeathT").text("+"+tDead);
    $("#dataforCovid").html(ui);
        }
    }
}



function covidDataWorld(){
console.log("enter");
$("#fTble").text("Countries");
$("#confimT").text("Loading");
$("#ActiveT").text("Loading");
$("#RecoveredT").text("Loading");
$("#DeathT").text("Loading");
$("#Confirmed").text("Loading...");
$("#Active").text("Loading...");
$("#Death").text("Loading...");
$("#Recovered").text("Loading...");
$("#dataforCovid").html('Loading..');
const Http = new XMLHttpRequest();
const url='https://coronavirus-19-api.herokuapp.com/countries';
Http.open("GET", url);
Http.send();


Http.onreadystatechange = (e) => {
   var json=Http.response;
   if(json==""){
   }
    else{
    var jsonDataWorld=JSON.parse(json);
    var confirm=jsonDataWorld[0].cases;   
    var active=jsonDataWorld[0].active;
    var death=jsonDataWorld[0].deaths;
    var recv=jsonDataWorld[0].recovered;
     $("#Confirmed").text(confirm);
     $("#Active").text(active);
     $("#Death").text(death);
     $("#Recovered").text(recv)

    var ui="";
    for(i=1;i<jsonDataWorld.length;i++){
        var per=isNaN(jsonDataWorld[i].deaths/jsonDataWorld[i].active) ?"-":(jsonDataWorld[i].deaths/jsonDataWorld[i].active).toFixed(2);
        var tcase=jsonDataWorld[i].todayCases==0?"":jsonDataWorld[i].todayCases;
        var countries=jsonDataWorld[i].country;
        ui+='<tr>'
        +'<th scope="row">'
        +countries 
        +'</th>'
        +'<td>'
        +'<span style="margin-left: -13px;color:red">'
        +tcase
        +'</span>'
        +'<span style="margin-left: 10px;">'
        +'</span>'
        +jsonDataWorld[i].cases
        +'</td>'
        +'<td>'
        +jsonDataWorld[i].active
        +'</td>'
        +'<td>'
        +jsonDataWorld[i].recovered
        +'</td>'
        +'<td>'
        +jsonDataWorld[i].deaths
        +'</td>'
        +'<td>'
        +per+"%"
        +'</td>'
        +'</tr>';
    
    $("#confimT").text("+"+jsonDataWorld[0].todayCases);
    $("#DeathT").text("+"+jsonDataWorld[0].todayDeaths);
    $("#ActiveT").text("Unknown");
    $("#RecoveredT").text("Unknown");
    $("#dataforCovid").html(ui);
   }}
  
}
}








covidDataIndia();