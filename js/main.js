'use strict';
// let btn = document.querySelector('.btn');
// let inp = document.querySelector('.inp');
// let h1 = document.querySelector('h1')
// fetch('http://api.openweathermap.org/data/2.5/weather?q=London&appid=62436b12821bb9dbad9c2ed09759e980')
//     .then(res => res.data())
//     .then(data => {
//         document.querySelector('.city').innerHTML = res.data.name
//         document.querySelector('.temp').innerHTML = res.data.main.temp
//         document.querySelector('.humidity').innerHTML = res.data.main.humidity
//         document.querySelector('.wind').innerHTML = res.data.wind.speed
//         console.log(data)
//     })

    


// const refresh =()=>{
//     inp.value = ''
// }

// !------------------------------------------------------------------------------
let city = " "
let value = " "
let inp = document.querySelector('input')
let btn = document.querySelector('button')

const check =

 btn.addEventListener('click', () => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${inp.value}&lang=ru&units=metric&appid=62436b12821bb9dbad9c2ed09759e980`).then(res => {
        document.querySelector('.city').innerHTML = res.data.name
        document.querySelector('.temp').innerHTML = res.data.main.temp
        document.querySelector('.humidity').innerHTML = res.data.main.humidity
        document.querySelector('.wind').innerHTML = res.data.wind.speed
        console.log(res);
     })
 })
 
 document.body.addEventListener('keydown', (e) => {
     if(e.key == 'Enter'){
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${inp.value}&lang=ru&units=metric&appid=62436b12821bb9dbad9c2ed09759e980`).then(res => {
            document.querySelector('.city').innerHTML = res.data.name
            document.querySelector('.temp').innerHTML = res.data.main.temp
            document.querySelector('.humidity').innerHTML = res.data.main.humidity
            document.querySelector('.wind').innerHTML = res.data.wind.speed
            console.log(res);
         })
     }
 })



//  !!!!

