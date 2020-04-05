function covidDataIndia(){
    
    $("#HeadData1").text("State");
    $("#dataforCovid19").html('');
    $("#dataofConfirmed").text("Loading..");
    $("#dataofActive").text("Loading..");
    $("#dataofDeath").text("Loading..");
    $("#dataofRecovered").text("Loading..")
const Http = new XMLHttpRequest();
const url='https://api.covid19india.org/data.json';
Http.open("GET", url);
Http.send();


Http.onreadystatechange = (e) => {
   var json=Http.response;
   if(json==""){
   }
    else{
    var jsonData=JSON.parse(json);
    var confirm=jsonData.statewise[0].confirmed;
    var active=jsonData.statewise[0].active;
    var death=jsonData.statewise[0].deaths;
    var recv=jsonData.statewise[0].recovered;
    $("#dataofConfirmed").text(confirm);
    $("#dataofActive").text(active);
    $("#dataofDead").text(death);
    $("#dataofRecovered").text(recv);
    console.log(jsonData.statewise[1].confirm);
    var ui="";
    var next=0;
    var tconfirm=0;
    var next1=0;
    var tRecv=0;
    var next3=0;
    var tDead=0;
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
        var conn=jsonData.statewise[i].deltaconfirmed==0?"":"+"+jsonData.statewise[i].deltaconfirmed;
        var per=isNaN(jsonData.statewise[i].deaths/jsonData.statewise[i].confirmed) ?"-":(jsonData.statewise[i].deaths/jsonData.statewise[i].confirmed).toFixed(2);
        var state=jsonData.statewise[i].state;
        if(state=="Andaman and Nicobar Islands"){
            state="Andaman Nicobar Islands"
        }
        
     ui+="<div class='row' id='dataDiv'>"
     +" <div class='col-sm-2' id='StateData' style='color: black;' >"
    +   state     
    +"</div>"
    +"<div class='col-sm-1' style='background-color: white;'></div>"
    +"<div class='col-sm-1' id='ConfirmedData' style='color: black;' >"
    //+jsonData.statewise[i].confirmed
    +" <div id='add' style='margin-left: -57px;color: red;'>"
    +conn
    +"</div>"
    +"<div style=margin-right:12px></div>"
    +'<div style=margin-left: 12px;>'
    +jsonData.statewise[i].confirmed
    +'</div>'
    +"</div>"
    +"<div class='col-sm-1' style='background-color: white;'></div>"
    +" <div class='col-sm-1' id='ActiveData' style='color: black;' >"
    +jsonData.statewise[i].active
    +"</div>"
     +"<div class='col-sm-1' style='background-color: white;'></div>"
    +"<div class='col-sm-1' id='RecoveredData' style='color: black;' >"
    +jsonData.statewise[i].recovered
    +"</div>"
    +"<div class='col-sm-1' style='background-color: white;'></div>"
    +"<div class='col-sm-1' id='DeadData' style='color: black;' >"
    +jsonData.statewise[i].deaths
    +"</div>"
    +"<div class='col-sm-1' style='background-color: white;'></div>"
    +"<div class='col-sm-1' id='DeadRateData' style='color: black;' >"
    +per
    +"%"
     +"</div>"
    +"</div>";
    
    if(conn!=""){
        $("#add").css("margin-left","-73px");
    }
    else{
        $("#add").css("margin-left","-57px");
    }
    $("#dataforCovid19").html(ui);
    $("#dataConfirmed").text("+"+tconfirm);
    $("#dataRecovered").text("+"+tRecv);
    $("#dataDead").text("+"+tDead);
   }}
  // console.log(ui)
  
}
}


function covidDataWorld(){
    $("#dataConfirmed").text("Loading..");
    $("#dataActive").text("");
    $("#dataDead").text("Loading..");
    $("#dataRecovered").text("")
$("#HeadData1").text("Countries");
$("#dataforCovid19").html('');
const Http = new XMLHttpRequest();
const url='https://coronavirus-19-api.herokuapp.com/countries';
Http.open("GET", url);
Http.send();


Http.onreadystatechange = (e) => {
   var json=Http.response;
   if(json==""){
   }
    else{
    $("#dataConfirmed").text("Loading..");
    $("#dataDead").text("Loading..");
    $("#dataRecovered").text("");
    var jsonDataWorld=JSON.parse(json);
    console.log(jsonDataWorld[0].cases);
    var confirm=jsonDataWorld[0].cases;   
    var active=jsonDataWorld[0].active;
    var death=jsonDataWorld[0].deaths;
    var recv=jsonDataWorld[0].recovered;
     $("#dataofConfirmed").text(confirm);
     $("#dataofActive").text(active);
     $("#dataofDead").text(death);
     $("#dataofRecovered").text(recv)

    var ui="";
    for(i=1;i<jsonDataWorld.length;i++){
        var per=isNaN(jsonDataWorld[i].deaths/jsonDataWorld[i].active) ?"-":(jsonDataWorld[i].deaths/jsonDataWorld[i].active).toFixed(2);
        var countries=jsonDataWorld[i].country;
     ui+="<div class='row' id='dataDiv'>"
     +" <div class='col-sm-2' id='StateData' style='color: black;' >"
     +   countries     
    +"</div>"
    +"<div class='col-sm-1' style='background-color: white;'></div>"
    +"<div class='col-sm-1' id='ConfirmedData' style='color: black;' >"
    //+jsonData.statewise[i].confirmed
    +" <div style='margin-left: -35px;color: red;'>"
    +"+"
    +jsonDataWorld[i].todayCases
    +"</div>"
    +"<div style=margin-right:12px></div>"
    +'<div style=margin-left: 12px;>'
    +jsonDataWorld[i].cases
    +'</div>'
    +"</div>"
    +"<div class='col-sm-1' style='background-color: white;'></div>"
    +" <div class='col-sm-1' id='ActiveData' style='color: black;' >"
    +jsonDataWorld[i].active
    +"</div>"
     +"<div class='col-sm-1' style='background-color: white;'></div>"
    +"<div class='col-sm-1' id='RecoveredData' style='color: black;' >"
    +jsonDataWorld[i].recovered
    +"</div>"
    +"<div class='col-sm-1' style='background-color: white;'></div>"
    +"<div class='col-sm-1' id='DeadData' style='color: black;' >"
    +jsonDataWorld[i].deaths
    +"</div>"
    +"<div class='col-sm-1' style='background-color: white;'></div>"
    +"<div class='col-sm-1' id='DeadRateData' style='color: black;' >"
    +per
    +"%"
     +"</div>"
    +"</div>";
    
    $("#dataConfirmed").text("+"+jsonDataWorld[0].todayCases);
    $("#dataDead").text("+"+jsonDataWorld[0].todayDeaths);
    $("#dataforCovid19").html(ui);
   }}
  
}
}

covidDataIndia();