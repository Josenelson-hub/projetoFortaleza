export default
function todayIsOpen(){
var dataAtual = new Date();
var dia = dataAtual.getDate();
let diaSemana = dataAtual.getDay();
let hora = dataAtual.getHours();

const seg = document.getElementById("seg")
const ter = document.getElementById("ter")
const qua = document.getElementById("qua")
const qui = document.getElementById("qui")
const sex = document.getElementById("sex")
const sab = document.getElementById("sab")
const dom = document.getElementById("dom")

const segF = document.getElementById("segF")
const terF = document.getElementById("terF")
const quaF = document.getElementById("quaF")
const quiF = document.getElementById("quiF")
const sexF = document.getElementById("sexF")
const sabF = document.getElementById("sabF")
const domF = document.getElementById("domF")

    if(diaSemana === 1){
        seg.style.backgroundColor = 'blue'
        segF.style.backgroundColor = '#39ff14'
    }
    if(diaSemana === 3){
        qua.style.backgroundColor = 'blue'
        quaF.style.backgroundColor = '#39ff14'
    } 
    if(diaSemana === 4){
        qui.style.backgroundColor = 'blue'
        quiF.style.backgroundColor = '#39ff14'
    } 
    if(diaSemana === 5){
        sex.style.backgroundColor = 'blue'
        sexF.style.backgroundColor = '#39ff14'
    } 
    if(diaSemana === 6){
        sab.style.backgroundColor = 'blue'
        sabF.style.backgroundColor = '#39ff14'
    }
    if(diaSemana === 0){
        dom.style.backgroundColor = 'blue'
        domF.style.backgroundColor = '#39ff14' 
    } 


}