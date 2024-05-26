export const paragrafo = (texto)=>{
  let textoSepardo = texto.split("<br>");
  let tamanho = textoSepardo.length;

  return(
    textoSepardo.map((t,index) =>  {
      if (index !== tamanho-1)
        return t;
      else
        return [<br/>, t];
    } )
  )
}
