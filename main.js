//document.writeln("hi");
/* Dato un array di oggetti rappresentante un team di un’azienda,
 creare una pagina dedicata  in cui mostrare una card per ciascun componente.

(trovate l’array del team all’interno della cartella in allegato)

Bonus

Rendere l’esercizio responsive, mandando a capo le card
Aggiungere un form di agginta membri che permetta di visualizzare il nuovo membro 
sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team! 😀) */

// seleziono i nodi della dom
const rowEl = document.getElementById("my-team");

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

//ciclo nell'array e prendo il singolo elemento
for (let i = 0; i < teamMembers.length; i++) {
  const thisMember = teamMembers[i];
  console.log(thisMember.name);
  //destrutturazione dell'oggetto dentro il ciclo for della nuova variabile thisMember
  const { name, role, email, img } = thisMember;
  console.log(name);
  console.log(role);
  console.log(email);
  console.log(img);
  // generiamo il markup della card
  const cardMarkupString = `  
 <div class="col">
    <div class="card mb-3 bg-dark" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${img}" class="img-fluid rounded" alt="img-first-member">
            </div>
                <div class="col-md-8 pt-2">
                    <div class="card-body">
                        <h5 id="name-member" class="card-title fw-bold text-light">${name}</h5>
                            <div id="role-member" class="pt-2 text-light fw-bold">
                            ${role}
                            </div>
                                <div id="mail-member" class="pt-2 fw-bold text-info">
                                ${email}
                                </div>
                    </div>
                </div>
            </div>
    </div> `;

  console.log(cardMarkupString);

  rowEl.insertAdjacentHTML("beforeend", cardMarkupString);
}

// creare le variabili per conservare i valori di ogni proprietà
// creato il markup lo devo appendere alla dom
