var req = new XMLHttpRequest();
req.open('GET','https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload=function()
{
    var data = JSON.parse(this.response);
    console.log(data);
    var country = data.filter((item)=>{
        if(item.region==='Asia'){
        return item;
        }
    });
    console.log(country);

    var count = data.filter(function(i){
        if(i.population < 200000)
        {
            return i
        }
    });
    console.log(count);

    var res1 = data.forEach(element => {
        console.log(element.name, element.flag, element.capital);
    });

    var pop = data.reduce(function(total,i){
        return total+i.population;
    },0);
    console.log(pop);

    var usdollar =  data.filter((i)=>{
        if(i.currencies[0].code ==='USD')
        return i;
    });
    console.log(usdollar);  
}