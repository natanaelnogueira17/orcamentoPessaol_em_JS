class Despesa{
    constructor(ano, mes, dia, tipo, valor, descricao){
       this.ano = ano
       this.mes = mes
       this.dia = dia
       this.tipo = tipo
       this.descricao = descricao
       this.valor = valor
    }

}


function cadastrarDespesa(){
    let dia = document.getElementById('dia');
    let mes = document.getElementById('mes');
    let ano = document.getElementById('ano');
    let tipo = document.getElementById('tipo');
    let descricao = document.getElementById('descricao');
    let valor = document.getElementById('valor');
    let despesa = new Despesa(ano.value, mes.value, dia.value, tipo.value, valor.value, descricao.value);
    console.log(despesa)



}

