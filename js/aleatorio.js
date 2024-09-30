const nomes = ["Enzo", "Jaqueline", "Jane", "Fernanda", "Theo","Pyetro"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)
