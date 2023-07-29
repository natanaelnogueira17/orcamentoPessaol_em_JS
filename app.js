//classe despesas
class Despesa{
    constructor(ano, mes, dia, tipo, valor, descricao){
       this.ano = ano
       this.mes = mes
       this.dia = dia
       this.tipo = tipo
       this.descricao = descricao
       this.valor = valor
    }

    validarDados(){
        for (let i in this) {
            if (this[i] == undefined || this[i] == '' || this[i] == null) {
               return false;                
            }
        }
        return true;
    }
}

//classe Bd
class Bd{

    constructor(){
        let id = localStorage.getItem('id')
        if(id === null){
            localStorage.setItem('id', 0)
        }
    }

    getProximoId(){
        let proximoId = localStorage.getItem('id')
        return parseInt(proximoId)+1
    }

    gravar (d){        
       let id =  this.getProximoId()
        localStorage.setItem(id, JSON.stringify(d))
        localStorage.setItem('id', id)
    }    
}
let bd = new Bd();

//fora da classe
function cadastrarDespesa(){
    let dia = document.getElementById('dia');
    let mes = document.getElementById('mes');
    let ano = document.getElementById('ano');
    let tipo = document.getElementById('tipo');
    let descricao = document.getElementById('descricao');
    let valor = document.getElementById('valor');
    let despesa = new Despesa(ano.value, mes.value, dia.value, tipo.value, valor.value, descricao.value);
   
    if(despesa.validarDados()){
      bd.gravar(despesa); //interessante que nao importou nada pra usar aqui, apenas chamou com  classe
      $('#sucessoGravacao').modal('show') 
       }else{
		$('#erroGravacao').modal('show') 
       }
}

 
