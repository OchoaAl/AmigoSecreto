// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Declaración del arreglo que se encargará de almacenar los nombres de nuestros amigos. 
let amigos = [];
//mostrarAmigos();

//Definición de la función agregarAmigo, activada al hacer click en el botón de la página. 
function agregarAmigo(){
    //alert("Comprobando que si entro en la función agregarAmigo()");
    let valorID = document.getElementById("amigo"); 
    let nombreAmigo = valorID.value;
    console.log(nombreAmigo);

    if (nombreAmigo == false){ //Si no se ingresó un nombre en el cuadro de texto .... 
        alert("Por favor, inserte un nombre."); //... mandamos un alert que le indica al usuario que lo haga
        return;
    }
    //En caso contrario, que si se ingresó un nombre válido.... 
    amigos.push(nombreAmigo); //Agregamos el valor del string "nombreAmigo" dentro del vector amigos por medio de un push
    //console.log(amigos); //Visualizamos para ver que se almacenen correctamente
    valorID.value=""; //Reestablecemos el campo de texto con una cadena vacía después de agregar el nombre del amigo
    valorID.focus();
    //Llamamos a la función cada que agregamos un amigo para así visualizarlos.
    mostrarAmigos();
}   

function mostrarAmigos(){

    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML =""; //Limpiamos para no crear duplicados del nombre que se insertó anteriormente.

    for (let i = 0; i < amigos.length; i++){ //Ciclo para recorrer el arreglo de amigos y posteriormente visualizarlo
        let itemLI = document.createElement("li");
        itemLI.textContent = amigos[i];
        listaAmigos.appendChild(itemLI);
    }
    //console.log(listaAmigos);
}

function sortearAmigo(){ //Definición de función para sortear aleatoriamente a un amigo
    if(amigos.length === 0){ //... si el array no tiene elementos ... 
        alert("No hay amigos para sortear"); //...mandamos un alert para notificarle al usuario. 
        return; 
    }

    //Se elige un decimal entre 0 y 1 al azar y se multiplica por el número de elementos en el array, de ese resultado 
    //tomamos la parte entera y se redondea hacia abajo, siendo esto lo que define la posición del amigo sorteado. 

    let amigoSorteado = amigos[Math.floor(Math.random()*amigos.length)];  
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
    
    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = ""; //elimina cualquier contenido previo 
}