let tickets=[]

function createTicket(){

const title=document.getElementById("title").value
const description=document.getElementById("description").value

const ticket={

id:tickets.length+1,
title,
description,
status:"Open"

}

tickets.push(ticket)

renderTickets()

}

function renderTickets(){

const list=document.getElementById("tickets")

list.innerHTML=""

tickets.forEach(ticket=>{

const li=document.createElement("li")

li.innerHTML=`
${ticket.title} - ${ticket.status}
`

list.appendChild(li)

})
}
