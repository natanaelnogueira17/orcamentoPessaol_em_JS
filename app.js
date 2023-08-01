	
	
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
            let id = localStorage.getItem('id') //recuperando o indice existente no local storage
            if(id === null){ // veirifica se nao tem indice
                localStorage.setItem('id', 0) //setando o indice 0 no local storage
            }
        }
    
        getProximoId(){ //essa funcao retorna o proximo id ou indice
            let proximoId = localStorage.getItem('id') // verificando qual id existente 
            return parseInt(proximoId)+1 // retornando qual será o proximo id
        }
    
        gravar (d){        
           let id =  this.getProximoId() //descobrindo qual será o proximo id e colocando na variável
            localStorage.setItem(id, JSON.stringify(d)) // setando no local storage o novo id com a String(objeto)
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