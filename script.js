var film = [
    {
        id: 1,
        titolo: "Il Padrino",
        regista: "Francis Ford Coppola",
        anno: 1972,
        genere: "Drammatico",
    },
    {
        id: 2,
        titolo: "Forrest Gump",
        regista: "Robert Zemeckis",
        anno: 1994,
        genere: "Commedia",
    },
    {
        id: 3,
        titolo: "Pulp Fiction",
        regista: "Quentin Tarantino",
        anno: 1994,
        genere: "Crimine",
    },
    {
        id: 4,
        titolo: "La Vita è Bella",
        regista: "Roberto Benigni",
        anno: 1997,
        genere: "Commedia",
    },
    {
        id: 5,
        titolo: "Inception",
        regista: "Christopher Nolan",
        anno: 2010,
        genere: "Fantascienza",
    },
    {
        id: 6,
        titolo: "Il Signore degli Anelli: La Compagnia dell'Anello",
        regista: "Peter Jackson",
        anno: 2001,
        genere: "Fantasy",
    },
    {
        id: 7,
        titolo: "Star Wars: Episodio IV - Una Nuova Speranza",
        regista: "George Lucas",
        anno: 1977,
        genere: "Fantascienza",
    },
    {
        id: 8,
        titolo: "La La Land",
        regista: "Damien Chazelle",
        anno: 2016,
        genere: "Musical",
    }
];

let oggetto = {}
let txtAggiungi = document.querySelector("#aggiungiFilm")
let txtRimuovi = document.querySelector("#rimuoviFilm")
let txtModifica = document.querySelector("#modificaFilm")
let txtCerca = document.querySelector("#cercaFilm")
let listaFilm = document.querySelector(".princ")
let selectModo = document.querySelector("#modoOrdinamento")
let selectCategoria = document.querySelector("#tipoOrdinamento")
let intervallo;

intervallo = setInterval(aggiornaListaFilm, 1000);

function aggiornaListaFilm() {
    listaFilm.innerHTML = "";
    listaFilm.innerHTML += "<h2>Lista Film:</h2>"
    for (let i = 0; i < film.length; i++) {
        listaFilm.innerHTML += `<span>${film[i].id}</span>`
        listaFilm.innerHTML += `<span>${film[i].titolo}</span>`
        listaFilm.innerHTML += `<span>${film[i].regista}</span>`
        listaFilm.innerHTML += `<span>${film[i].anno}</span>`
        listaFilm.innerHTML += `<span>${film[i].genere}</span>`
        listaFilm.innerHTML += `<br>`
    }
}


function mandaDati(e) {
    let error = false;

    if (e.key == "Enter") {
        let array = txtAggiungi.value.split(',');
        if (array.length == 5) {
            for (let i = 0; i < film.length; i++) {
                if (array[0] == film[i].id.toString())
                    error = true;
            }
            if (!error) {
                oggetto = {}
                oggetto.id = parseInt(array[0]);
                oggetto.titolo = array[1].trim();
                oggetto.regista = array[2].trim();
                oggetto.anno = parseInt(array[3]);
                oggetto.genere = array[4].trim();
                film.push(oggetto);
                console.log(film)
                //localStorage.setItem('film', JSON.stringify(film));

            }
            else {
                alert("hai inserito un film con id già esistente")
            }

        }
        else {
            console.log("nada")
        }

    }
}


function eliminaDati(e) {
    if (e.key == "Enter") {
        for (let i = 0; i < film.length; i++) {
            if (film[i].id.toString() == txtRimuovi.value) {
                if (window.confirm("Vuoi eseguire questa azione?")) {
                    film.splice(i, 1)
                    //localStorage.setItem('film', JSON.stringify(film));

                } else {
                    alert("azione annullata")
                }

            }
        }
    }
}


function modificaDati(e) {
    if (e.key == "Enter") {
        for (let i = 0; i < film.length; i++) {
            if (film[i].id.toString() == txtModifica.value) {
                film[i].titolo = prompt("Inserisci il nuovo titolo:");
                film[i].regista = prompt("Inserisci il nuovo regista:");
                film[i].anno = prompt("Inserisci il nuovo anno:");
                film[i].genere = prompt("Inserisci il nuovo genere:");
            }
        }
    }


}


/*
window.onload = function () { //all onload prendo in filmArchiviati lo storage di "film", se non c'è allora lo ignora, ma se c'è qualcosa nello storage allora riprende la variabile film e ci infila il JSON
    var filmArchiviati = localStorage.getItem('film');
    if (filmArchiviati) {
        film = JSON.parse(filmArchiviati);
    }
};  */

function ordinaArray(e) {
    let attributo = selectCategoria.value;

    film.sort(function (a, b) {
        if (selectModo.value === "Crescente") {
            if (a[attributo] < b[attributo]) return -1;
            if (a[attributo] > b[attributo]) return 1;
            else return 0;
        } else {
            if (b[attributo] < a[attributo]) return -1;
            if (b[attributo] > a[attributo]) return 1;
            else return 0;
        }
    });
}

function ricercaDati(e) {
    clearInterval(intervallo);
    listaFilm.innerHTML = "";
    const valoreRicerca = txtCerca.value.toLowerCase();

    for (let i = 0; i < film.length; i++) {
        for (let proprieta in film[i]) {
            let valoreProprieta = film[i][proprieta].toString().toLowerCase();

            if (valoreProprieta.includes(valoreRicerca)) {
                listaFilm.innerHTML += `<span>${film[i].id}</span>`;
                listaFilm.innerHTML += `<span>${film[i].titolo}</span>`;
                listaFilm.innerHTML += `<span>${film[i].regista}</span>`;
                listaFilm.innerHTML += `<span>${film[i].anno}</span>`;
                listaFilm.innerHTML += `<span>${film[i].genere}</span>`;
                listaFilm.innerHTML += `<br>`;
                break;
            }
        }
    }
}

txtCerca.addEventListener("focus", function() {
    clearInterval(intervalloListaFilm);
});

txtCerca.addEventListener("blur",function(){
    txtCerca.value = "";
    intervalloListaFilm = setInterval(aggiornaListaFilm, 1000);
})


