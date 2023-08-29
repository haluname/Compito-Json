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
let txtAggiungi = document.querySelector("#aggiungiLibro")
let listaFilm = document.querySelector(".princ")

setInterval(function(){
    listaFilm.innerHTML= "";
    listaFilm.innerHTML+="<h2>Lista Film:</h2>"
    for(let i=0; i<film.length; i++){
        listaFilm.innerHTML+=`<span>${film[i].id}</span>`
        listaFilm.innerHTML+=`<span>${film[i].titolo}</span>`
        listaFilm.innerHTML+=`<span>${film[i].regista}</span>`
        listaFilm.innerHTML+=`<span>${film[i].anno}</span>`
        listaFilm.innerHTML+=`<span>${film[i].genere}</span>`
        listaFilm.innerHTML+=`<br>`
    }
},1000)


function mandaDati(e){

    if(e.key=="Enter"){
        let array = txtAggiungi.value.split(',');
        if(array.length == 5){
            oggetto.id = parseInt(array[0]);
            oggetto.titolo = array[1];
            oggetto.regista = array[2];
            oggetto.anno = parseInt(array[3]);
            oggetto.genere = array[4];
            film.push(oggetto);
            console.log(film)
        }
        else{
            console.log("nada")
        }
       
    }
}
