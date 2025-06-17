const customer_care = document.getElementById("customer_care");
customer_care.addEventListener("click", function(){
    this.innerHTML = "Suivi des commandes <br> Service après vente<br> Agent backoffice et frontoffice"
});

const agent_ticketing = document.getElementById("agent_ticketing");
agent_ticketing.addEventListener("click", function() {
    this.innerHTML ="Ventes de billets <br> Assistances aux passagers<br> Agent backoffice et frontoffice"
})