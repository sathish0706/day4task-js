var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

request.send();
request.onload=function(){
    var result=JSON.parse(request.response)
    console.log(result)

for(i=0; i<result.length; i++){

       console.log(result[i].flags);

       console.log(result[i].name);

        console.log(result[i].subregion);

        console.log(result[i].region);

        console.log(result[i].population);   
    }
}

// compare JSON


var obj1 = {name : "person 1", age : 5};
var obj2 = {age : 5, name : "person 1",};

var obj3 = JSON.stringify(obj1)===JSON.stringify(obj2)
console.log(obj3);



