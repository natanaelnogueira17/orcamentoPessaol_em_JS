	
	
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
        
        listar(){
            let id = localStorage.getItem('id')
            let despesas = Array()
            for(let i =1; i<= id; i++){
                let despesa  = JSON.parse(localStorage.getItem(i))
                if(despesa != null){
                    despesas.push(despesa)
                }
            }
            return despesas            
        }

        pesquisarFiltro(p){
            console.log(p)
        }
    }
    //instanciando um novo BD
    let bd = new Bd(); 

    //Controller // bean no java 
    function cadastrarDespesa(){
        let dia = document.getElementById('dia');
        let mes = document.getElementById('mes');
        let ano = document.getElementById('ano');
        let tipo = document.getElementById('tipo');
        let descricao = document.getElementById('descricao');
        let valor = document.getElementById('valor');
        let despesa = new Despesa(ano.value, mes.value, dia.value, tipo.value, valor.value, descricao.value);
       
        if(despesa.validarDados()){
          bd.gravar(despesa)
          document.getElementById('modal_titulo').innerHTML  = 'Registro inserido com sucesso!'
          document.getElementById('modal_titulo_div').className = 'modal-header text-success'  
          document.getElementById('msgPadrao').innerHTML = 'Despesa foi cadastrada com sucesso!' 
          document.getElementById('msgButton').className = 'btn btn-success'    
          $('#modalRegistraDespesas').modal('show')

          dia.value = ''
          mes.value = ''
          ano.value = ''
          tipo.value = ''
          descricao.value = ''
          valor.value = ''     

       }else{    
        document.getElementById('modal_titulo').innerHTML  = 'Erro na inclusão do Registro!'
        document.getElementById('modal_titulo_div').className = 'modal-header text-danged'
        document.getElementById('msgPadrao').innerHTML = 'Erro na gravação! verifique se há campos vazios!'
        document.getElementById('msgButton').className = 'btn btn-danger' 
          $('#modalRegistraDespesas').modal('show')
       }      
    }

    function carregarTodasDespesas(){
        let despesas = Array()
        despesas = bd.listar()
        let listaDespesas = document.getElementById('listaDespesas')

        despesas.forEach(function(d){
            let linha =   listaDespesas.insertRow()

            switch(d.tipo){
                case '1' : d.tipo = 'Alimentação'
                case '2' : d.tipo = 'Educação'
                case '3' : d.tipo = 'Lazer'
                case '4' : d.tipo = 'Saúde'
                break
            }  

            linha.insertCell(0).innerHTML= `${d.dia}/${d.mes}/${d.ano}`
            linha.insertCell(1).innerHTML = d.tipo         
            linha.insertCell(2).innerHTML = d.descricao
            linha.insertCell(3).innerHTML = d.valor

        })

    }

    function pesquisarDespesa(){
        let dia = document.getElementById('dia')
        let mes = document.getElementById('mes')
        let ano = document.getElementById('ano')
        let tipo = document.getElementById('tipo')
        let descricao = document.getElementById('descricao')
        let valor = document.getElementById('valor')
        let despesa = new Despesa(ano.value, mes.value, dia.value, tipo.value, valor.value, descricao.value)
        bd.pesquisarFiltro(despesa)

    }


   