/* Função para inserir os numeros do candidato */

function inserir(valor) {
    var valor1 = document.getElementById("campo1").value;
    var valor2 = document.getElementById("campo2").value;

    if (valor1 == "") {
        document.getElementById("campo1").value = valor;
    } else if (valor2 == "") {
        document.getElementById("campo2").value = valor;
    }
}

/* Função para corrigir os valores digitados */

function corrige() {
    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";
}

/* Função para selecionar o candidato e inserir um voto a ele */

function votar() {

    var valor1 = parseInt(document.getElementById("campo1").value);
    var valor2 = parseInt(document.getElementById("campo2").value);
    var Candidato = parseInt(valor1 * 10) + valor2;


    if (Candidato == 1) {
        localStorage.setItem("Marcos", Number(localStorage.getItem("Marcos")) + 1)
        localStorage.setItem("Total", Number(localStorage.getItem("Total")) + 1)
        var marcos = localStorage.getItem("Marcos")
        alert("Confirmado voto no candidato Marcos Antonio. ")

    } else if (Candidato == 2) {
        localStorage.setItem("Danilo", Number(localStorage.getItem("Danilo")) + 1)
        localStorage.setItem("Total", Number(localStorage.getItem("Total")) + 1)
        var danilo = localStorage.getItem("Danilo")
        alert("Confirmado voto no candidato Danilo. ")
    } else if (Candidato == 3) {
        localStorage.setItem("Telles", Number(localStorage.getItem("Telles")) + 1)
        localStorage.setItem("Total", Number(localStorage.getItem("Total")) + 1)
        var telles = localStorage.getItem("Telles")
        alert("Confirmado voto no candidato Telles. ")
    } else if (Candidato == 4) {
        localStorage.setItem("Duda", Number(localStorage.getItem("Duda")) + 1)
        localStorage.setItem("Total", Number(localStorage.getItem("Total")) + 1)
        var duda = localStorage.getItem("Duda")
        alert("Confirmado voto no candidato Maria Eduarda. ")
    } else if (Candidato == 6) {
        localStorage.setItem("Brancos", Number(localStorage.getItem("Brancos")) + 1)
        localStorage.setItem("Total", Number(localStorage.getItem("Total")) + 1)
        var brancos = localStorage.getItem("Brancos")
        alert("Confirmado voto em branco. ")
    } else if (Candidato == 5) {
        localStorage.setItem("Nulos", Number(localStorage.getItem("Nulos")) + 1)
        localStorage.setItem("Total", Number(localStorage.getItem("Total")) + 1)
        var nulos = localStorage.getItem("Nulos")
        alert("Confirmado voto nulo. ")
    } else {
        alert("Não existe candidato para esse número")
    }


    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";
}

/* Função para imprimir o resultado dos votos cadastrados*/

function resultado() {
    var marcos = localStorage.getItem("Marcos")
    var danilo = localStorage.getItem("Danilo")
    var telles = localStorage.getItem("Telles")
    var duda = localStorage.getItem("Duda")
    var brancos = localStorage.getItem("Brancos")
    var nulos = localStorage.getItem("Nulos")
    var total = localStorage.getItem("Total")
    var porBrancos = Math.round((brancos*100)/total)
    var porNulos = Math.round((nulos*100)/total)
    
    
    document.getElementById("resultado1").innerHTML = ""

    document.getElementById("resultado1").innerHTML += "Marcos Antônio tem " + marcos + " votos.<br>"
    document.getElementById("resultado1").innerHTML += "Danilo tem " + danilo + " votos.<br>"
    document.getElementById("resultado1").innerHTML += "Telles tem " + telles + " votos.<br>"
    document.getElementById("resultado1").innerHTML += "Maria Eduarda tem " + duda + " votos.<br>"
    document.getElementById("resultado1").innerHTML += "São " + brancos + " votos brancos no total.<br>"
    document.getElementById("resultado1").innerHTML += "São " + nulos + " votos nulos no total.<br>"
    document.getElementById("resultado1").innerHTML += "São " + total + " votos no total.<br>"
    
    /**if (Number.isInteger(porBrancos) || Number.isInteger(porNulos)) {
        document.getElementById("resultado1").innerHTML += "São " + porBrancos + "% de votos brancos do total.<br>"
        document.getElementById("resultado1").innerHTML += "São " + porNulos + "% de votos nulos do total.<br>"
    }**/

    if (Number.parseFloat(porBrancos) || Number.parseFloat(PorNulos)) {
        document.getElementById("resultado1").innerHTML += "São " + porBrancos + "% de votos brancos do total.<br>"
        document.getElementById("resultado1").innerHTML += "São " + porNulos + "% de votos nulos do total.<br>"
    }


    

}

/* Função para cadastrar/alterar a senha */

function cadastrarSenha() {
   var senha = localStorage.getItem("Senha")

    if (senha == "" || senha == null ) {
        
        senha = prompt("Digite uma senha: ")

        if (senha != null) {
            localStorage.setItem("Senha", senha)
            alert("Senha cadastrada!")
        }
        

        else if (senha == null) {
            alert("Ação cancelada!")
        }
    }

    else {
        senhaAnt = prompt("Digite a senha antiga: ")

        if (senhaAnt == senha) {
            senha = prompt("Digite a nova senha: ")
            localStorage.setItem("Senha", senha)
            alert("Senha alterada com sucesso!")
        }
        
        else if (senhaAnt == null) {
            alert("Ação cancelada!")
        }

        else {
            alert("Senha atual incorreta!")
        }
    }
    
}

/* Função usada para limpar os votos cadastrados */

function limparVotos() {
    var senha = localStorage.getItem("Senha")
    var acesso = prompt("Digite a senha: ")

    if (acesso == senha && acesso != null) {
        
        localStorage.setItem("Marcos", 0)
        localStorage.setItem("Danilo", 0)
        localStorage.setItem("Telles", 0)
        localStorage.setItem("Duda", 0)
        localStorage.setItem("Brancos", 0)
        localStorage.setItem("Nulos", 0)
        localStorage.setItem("Total", 0)

        alert("Todos os votos foram limpos!")

    }
    
    else if (acesso == null) {
        alert("Ação cancelada!")
    }

    else {
        alert("Senha inválida!")
    }
    
    
}
/* Função utilizada para auxilio nos testes */

/**function limparSenha() {
    var senha = localStorage.getItem("Senha")
    senhaAnt = prompt("Digite a senha antiga: ")

    if (senhaAnt == senha || senhaAnt != null) {
        localStorage.removeItem("Senha")
        alert("Senha limpa com sucesso!")
    }

    else if (senhaAnt == null) {
        alert("Ação cancelada!")
    }
    
    else {
        alert("Senha incorreta!")
    }
    
}**/