const cities = ["Москва", "Санкт-Петербург", "Саратов", "Магадан", "Ярославль", "Самара", "Якутск"];
const city = prompt();
const searchArray = cities.filter((element) => {
    if (cities.includes(city) == 1){
        element = element.startsWith(city[0]);
    }
    });
    console.log((searchArray == [])? "Такого города нет в списке" : `Города, начинающиеся с буквы "${city[0]}": ${searchArray}`);