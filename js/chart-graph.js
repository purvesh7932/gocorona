function piechartForIndia(){
    var cnfirm=0;
    var active=0;
    var death=0;
    var recv=0;

    const Http = new XMLHttpRequest();
    const url='https://api.covid19india.org/data.json';
    Http.open("GET", url);
    Http.send();


    Http.onreadystatechange = (e) => {
    ui="";
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

        jsonData=JSON.parse(json);
        
        active=jsonData.statewise[0].active;
        cnfirm=jsonData.statewise[0].confirmed;
        death=jsonData.statewise[0].deaths;
        recv=jsonData.statewise[0].recovered;
    }
    new Chart(document.getElementById("pie-chartForIndia"), {
    type: 'doughnut',
    data: {
    labels: ["Active", "Confirmed", "Recovered", "Death"],
    datasets: [{
        label: "India Pie Chart (millions)",
        backgroundColor: ["#AE1438", "#2475B0","#019031","#333945"],
        data: [active,cnfirm,death,recv]
    
    }]
    },
    options: {
    title: {
        display: true,
        text: 'India Pie Chart in Covid-19'
    }
    }
});   
    }
}

function piechartForWorld(){
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
    new Chart(document.getElementById("pie-chartForWorld"), {
        type: 'doughnut',
        data: {
        labels: ["Active", "Confirmed", "Recovered", "Death"],
        datasets: [{
            label: "World Pie Chart (millions)",
            backgroundColor: ["#AE1438", "#2475B0","#019031","#333945"],
            data: [active,confirm,death,recv]
        
        }]
        },
        options: {
        title: {
            display: true,
            text: 'World Pie Chart in Covid-19'
        }
        }
    }); 

        }
    }
}


piechartForIndia();

piechartForWorld();