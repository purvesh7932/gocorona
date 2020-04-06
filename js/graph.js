function graphforIndia(){
    const Http = new XMLHttpRequest();
    const url='https://api.covid19india.org/data.json';
    Http.open("GET", url);
    Http.send();
    var arrayforDate=[];
    var arrayforData=[];
    Http.onreadystatechange = (e) => {
    ui="";
    var json=Http.response;
    if(json==""){
        }
    else{
       
        var jsonData=JSON.parse(json);
        for(i=jsonData.cases_time_series.length-10;i<jsonData.cases_time_series.length;i++){
            arrayforData.push(jsonData.cases_time_series[i].dailyconfirmed);
            arrayforDate.push(jsonData.cases_time_series[i].date);
        }
        new Chart(document.getElementById("line-chart"), {
            type: 'line',
            data: {
              labels:arrayforDate ,
              datasets: [{ 
                  data: arrayforData,
                  label: "India",
                  borderColor: "#AE1438",
                  fill: false
                }
              ]
            },
            options: {
              title: {
                display: true,
                text: 'India Last 10 day Covid-19 Effected'
              }
            }
          });
    
      }
    }
}

graphforIndia();