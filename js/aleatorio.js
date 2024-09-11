const nomes = ["Enzo", "Jaqueline", "Jane", "Fernanda", "Theo","Pyetro"];

export function aleatorio (lista){
    const posiicao = Math.floor(Math.random()* lista.lenght);
    return lista[posicao];
}

export const nome = aleatorio(nomes)