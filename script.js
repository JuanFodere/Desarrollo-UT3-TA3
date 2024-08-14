function removeFromArray(arreglo, item){
    let indice = arreglo.indexOf(item)
    if(indice != -1){
        arreglo.splice(indice, 1)
        console.log(arreglo)
    }
    else{
        console.log("el elemento no esta en el arreglo")
    }
}

removeFromArray(['hola', 'gente', 'de'], "hola")