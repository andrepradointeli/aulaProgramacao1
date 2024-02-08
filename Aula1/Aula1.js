var notaProva1 = 4
var notaProva2 = 2

var media = ((notaProva1+notaProva2)/2)
var status = ("reprovado", "aprovado")
if(media > 5){
   var status = ("aprovado")
}else if (media < 5){
   var status = ("reprovado")
}
console.log(media)
console.log(status)

