document.write ('<br>')
document.write ('<br>')
let controle = 0
  while(controle ===0 ){
    
    document.write ('<br>')
    document.write ('<br>')

    var listaCompra = ['0 - batata', '1 - arroz', '2 - leite' ,'3 - feijão', '4 - tomate', '5 - cebola', '6 - trigo', '7 - fermento', '8 - ovo', '9 - chocolate', '10 - café']

    document.write ('A lista de produtos é:')
    
    for (i=0 ; i<11; i+=1){ 
       //if (i === 1){
       // for (j=0 ; j<2; j+=1){
            
           // document.write ('<br>')
            //document.write (listaCompra[i][j])
          // }
        // }
        //else{
        document.write ('<br>')
        document.write (listaCompra[i])
        //}  
    }
    var produto = prompt ('Digite o indice desejado:')

    if (produto >= 0 && produto < 11 ){

       alert('O produto escolhido é:  ' + listaCompra [produto])
     
       document.write ('<br>')
       document.write ('<br>')
    
     document.write ('O produto escolhido foi:  ' + listaCompra [produto])
     controle = 1 
    }
    else{

    alert ('Valor invalido')

  }
}