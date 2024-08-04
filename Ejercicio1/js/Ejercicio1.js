let arreglos = [{producto:'lavadora'},{precio:'650000'},{descuento:'10%'}];
console.log (arreglos);

function agregarProducto() {
    let agregarProducto1 = document.getElementById('agregar').value;
    arreglos.push(agregarProducto1);
    guardarStorage()
    console.log('Se agregó el producto ' + agregarProducto1);
    document.getElementById('agregar').value = ''; 
}

function guardarStorage (arreglos){
    localStorage.getItem(`producto`, arreglos)
}