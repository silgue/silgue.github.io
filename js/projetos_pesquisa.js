
var numero_projeto = JSON.parse(sessionStorage.getItem('num_projeto'));

var responsavelFunpec = JSON.parse(sessionStorage.getItem('responsavel-funpec'));

var responsavelAnaliseTecnica = JSON.parse(sessionStorage.getItem('responsavel-analise-tecnica'));

var responsavelFiscalizacao = JSON.parse(sessionStorage.getItem('responsavel-fiscalizacao'));

var responsavelInstrumentoJuridico = JSON.parse(sessionStorage.getItem('responsavel-instrumento-juridico'));

var projetosPesquisa = [];

var responsaveis = [];

var projetoPesquisa1 = new ProjetoPesquisa(
		{
			"informacoes_sigilosas": "sim",
			"hipotese_legal": "",
			"propriedeade_intelectual":"sim",
			"classificacao_pesquisa":"com_inovacao_tecnologica"
		},
		{
			"numero_projeto": "0001",
			"titulo":"Desenvolvimento do novo sistema de projetos acadêmicos",
			"coordenador":"Alysson Rodrigues",
			"unidade_lotacao": "Superintendência de Informática",
			"unidade_execucao": "Superintendência de Informática",
			"palavras_chaves":"sigprojetos",
			"email":["alysson@gmail.com","alysson@hotmail.com"],
			"ano":"2020",
			"vigencia_inicio":"01/08/2020",
			"vigencia_fim": "01/08/2021"
		},
		{
		"grande_area": "Ciências Exatas e da Terra",
		"area":"Ciências da Computação",
		"subarea":"",
		"especialidade":"",
		"grupo_de_pesquisa":"",
		"resumo": "Desenvolvimento de um novo sistema de gestão de projetos acadêmicos",
		"Introducao": "Introdução do projeto",
		"Objetivos": "Os objetivos são: 1 - isso, 2 - aquilo",
		"objetivos_especificos":{
			"nome":"Objetivo específico 1",
			"metas":[{
				"numero":"1",
				"descricao": "descrição meta 1",
				"indicador":"funcionalidades",
				"qtd":"5"
			}],
			"resultados":[{
				"numero":"1",
				"descricao": "descrição resultado 1",
				"indicador":"funcionalidades",
				"qtd":"10"
			}],
		}
	},
	{
		"valor_plano_aplicacao":"360.000,00",
		"doap":"18.000,00",
		"tempo_execucao":"24",
		"valor_projeto":"378.000,00",
		"fonte_recurso":"B"
	},
	{
	"situacao":"Homologado pela PROPESQ",
	"responsavel_funpec":" ",
	"responsavel_analise_tecnica":" ",
	"responsavel_fiscalizacao":" ",
	"responsavel_instrumento_juridico":" "
	}	
);

var projetoPesquisa2 = new ProjetoPesquisa(
		{
			"informacoes_sigilosas": "sim",
			"hipotese_legal": "",
			"propriedeade_intelectual":"sim",
			"classificacao_pesquisa":"sem_inovacao_tecnologica"
		},
		{
			"numero_projeto": "0002",
			"titulo":"Integração com Plataforma CNPq",
			"coordenador":"Alysson Rodrigues",
			"unidade_lotacao": "Superintendência de Informática",
			"unidade_execucao": "Superintendência de Informática",
			"palavras_chaves":"sigprojetos",
			"email":["alysson@gmail.com","alysson@hotmail.com"],
			"ano":"2019",
			"vigencia_inicio":"01/08/2020",
			"vigencia_fim": "01/08/2021"
		},
		{
		"grande_area": "Ciências Exatas e da Terra",
		"area":"Ciências da Computação",
		"subarea":"",
		"especialidade":"",
		"grupo_de_pesquisa":"",
		"resumo": "Desenvolvimento de uma plataforma de integração com o CNPq",
		"Introducao": "Introdução do projeto",
		"Objetivos": "Os objetivos são: 1 - isso, 2 - aquilo",
		"objetivos_especificos":{
			"nome":"Objetivo específico 1",
			"metas":[{
				"numero":"1",
				"descricao": "descrição meta 1",
				"indicador":"funcionalidades",
				"qtd":"5"
			}],
			"resultados":[{
				"numero":"1",
				"descricao": "descrição resultado 1",
				"indicador":"funcionalidades",
				"qtd":"10"
			}],
		}
	},
	{
		"valor_plano_aplicacao":"200.000,00",
		"doap":"10.000,00",
		"tempo_execucao":"24",
		"valor_projeto":"210.000,00",
		"fonte_recurso":"B"
	},
	{
	"situacao":"Homologado pela PROPESQ",
	"responsavel_funpec":" ",
	"responsavel_analise_tecnica":" ",
	"responsavel_fiscalizacao":" ",
	"responsavel_instrumento_juridico":" "
	}	
);

projetosPesquisa.push(projetoPesquisa1, projetoPesquisa2);

function ProjetoPesquisa(informacoes_preliminares,dados_gerais,dados_projeto,plano_aplicacao,tramitacao){
	this.informacoes_preliminares = informacoes_preliminares;
	this.dados_gerais = dados_gerais;
	this.dados_projeto = dados_projeto;
	this.plano_aplicacao = plano_aplicacao;
	this.tramitacao = tramitacao;
}

function passarNumeroProjeto(numero){
	var numero_projeto = JSON.stringify(numero);
     sessionStorage.setItem('num_projeto', numero_projeto );
}

function passarResponsavelTecnico(campo,resp){

	var responsavel = JSON.stringify(resp);

    sessionStorage.setItem(campo, responsavel );
}

function limpaSelect(elemento){
	while (elemento.length > 0) {
	    elemento.remove(elemento.length-1);
	  }
}

function popularTabelaConsulta(idTabela,redirect){
 	var infoProjetos = [];
 	var numProjeto = [];
 	projetoPesquisa1 = JSON.parse(localStorage.getItem('0001'));
 	projetoPesquisa2 = JSON.parse(localStorage.getItem('0002'));

	var infoProjeto1 = [];
	infoProjeto1.push(projetoPesquisa1.dados_gerais.numero_projeto,projetoPesquisa1.dados_gerais.titulo,projetoPesquisa1.dados_gerais.coordenador,
		projetoPesquisa1.plano_aplicacao.fonte_recurso, projetoPesquisa1.plano_aplicacao.valor_projeto, projetoPesquisa1.tramitacao.situacao, 
		"funpec: " + projetoPesquisa1.tramitacao.responsavel_funpec + " analise técnica: " + projetoPesquisa1.tramitacao.responsavel_analise_tecnica +
		" fiscalização: " +  projetoPesquisa1.tramitacao.responsavel_fiscalizacao + " instrumento jurídico: " + projetoPesquisa1.tramitacao.responsavel_instrumento_juridico
		,projetoPesquisa1.dados_gerais.ano);
	numProjeto.push(projetoPesquisa1.dados_gerais.numero_projeto);
	infoProjetos.push(infoProjeto1);

	var infoProjeto2 = [];
	infoProjeto2.push(projetoPesquisa2.dados_gerais.numero_projeto,projetoPesquisa2.dados_gerais.titulo,projetoPesquisa2.dados_gerais.coordenador,
		projetoPesquisa2.plano_aplicacao.fonte_recurso, projetoPesquisa2.plano_aplicacao.valor_projeto, projetoPesquisa2.tramitacao.situacao, 
		"funpec: " + projetoPesquisa2.tramitacao.responsavel_funpec + " analise técnica: " + projetoPesquisa2.tramitacao.responsavel_analise_tecnica +
		" fiscalização: " +  projetoPesquisa2.tramitacao.responsavel_fiscalizacao + " instrumento jurídico: " + projetoPesquisa2.tramitacao.responsavel_instrumento_juridico,
		projetoPesquisa2.dados_gerais.ano);
	numProjeto.push(projetoPesquisa2.dados_gerais.numero_projeto);
	infoProjetos.push(infoProjeto2);

 		

 	popularTabela(idTabela,infoProjetos,[['redirecionar',redirect,'passarNumeroProjeto',idTabela]]);

 }

 function popularTabelaAnaliseProplan(idTabela){
 	var infoProjetos = [];

 	var numero_projeto = JSON.parse(sessionStorage.getItem('num_projeto'));

	var tabela = document.getElementById(idTabela);

 	projetosPesquisa.forEach(function (projeto){
 		if(projeto.dados_gerais.numero_projeto === numero_projeto){
 			var infoProjeto = [];
 		infoProjeto.push(projeto.dados_gerais.numero_projeto,projeto.dados_gerais.titulo,projeto.dados_gerais.coordenador,
 			projeto.dados_gerais.ano, projeto.plano_aplicacao.tempo_execucao, projeto.plano_aplicacao.fonte_recurso, projeto.plano_aplicacao.valor_projeto, projeto.plano_aplicacao.valor_plano_aplicacao,projeto.plano_aplicacao.doap);
 		infoProjetos.push(infoProjeto);
 		}
 	});

 	popularTabela(idTabela,infoProjetos,[['modal-exibicao','#modal-visualizar-projeto','',idTabela],['modal-cadastro','#modal-cadastrar-responsavel','',idTabela]]);

 }

 function carregaResponsavel(destino){
	var responsavel;
 	if(numero_projeto === '0001'){

 		if(destino === 'responsavel-funpec'){
			responsavel = JSON.parse(localStorage.getItem('0001')).tramitacao.responsavel_funpec;
 		}else if(destino === 'responsavel-analise-tecnica'){
 			responsavel = JSON.parse(localStorage.getItem('0001')).tramitacao.responsavel_analise_tecnica;
 		}else if(destino === 'responsavel-fiscalizacao'){
 			responsavel = JSON.parse(localStorage.getItem('0001')).tramitacao.responsavel_fiscalizacao;
 		}else{
 			responsavel = JSON.parse(localStorage.getItem('0001')).tramitacao.responsavel_instrumento_juridico;
 		}
 		
 	}else{
 		if(destino === 'responsavel-funpec'){
			responsavel = JSON.parse(localStorage.getItem('0002')).tramitacao.responsavel_funpec;
 		}else if(destino === 'responsavel-analise-tecnica'){
 			responsavel = JSON.parse(localStorage.getItem('0002')).tramitacao.responsavel_analise_tecnica;
 		}else if(destino === 'responsavel-fiscalizacao'){
 			responsavel = JSON.parse(localStorage.getItem('0002')).tramitacao.responsavel_fiscalizacao;
 		}else{
 			responsavel = JSON.parse(localStorage.getItem('0002')).tramitacao.responsavel_instrumento_juridico;
 		}
 	}
 	
 	document.getElementById(destino).innerHTML = responsavel;

 }

 function inserirResponsavel(origem, destino){
 	var responsavel = document.getElementById(origem).value;
 	projetoPesquisa1 = JSON.parse(localStorage.getItem('0001'));
 	projetoPesquisa2 = JSON.parse(localStorage.getItem('0002'))

 	if(numero_projeto === '0001'){
 		if(origem === 'nome-responsavel-funpec'){
			projetoPesquisa1.tramitacao.responsavel_funpec = responsavel;
 		}else if(origem === 'nome-responsavel-analise-tecnica'){
 			projetoPesquisa1.tramitacao.responsavel_analise_tecnica = responsavel;
 		}else if(origem === 'nome-responsavel-fiscalizacao'){
 			projetoPesquisa1.tramitacao.responsavel_fiscalizacao = responsavel;
 		}else{
 			projetoPesquisa1.tramitacao.responsavel_instrumento_juridico = responsavel;
 		}
 		
 		localStorage.setItem('0001', JSON.stringify(projetoPesquisa1));

 	}else{
 		if(origem === 'nome-responsavel-funpec'){
			projetoPesquisa2.tramitacao.responsavel_funpec = responsavel;
 		}else if(origem === 'nome-responsavel-analise-tecnica'){
 			projetoPesquisa2.tramitacao.responsavel_analise_tecnica = responsavel;
 		}else if(origem === 'nome-responsavel-fiscalizacao'){
 			projetoPesquisa2.tramitacao.responsavel_fiscalizacao = responsavel;
 		}else{
 			projetoPesquisa2.tramitacao.responsavel_instrumento_juridico = responsavel;
 		}
 		localStorage.setItem('0002', JSON.stringify(projetoPesquisa2));
 	}

 	carregaResponsavel(destino);

 }

function popularTabelaProjetosPesquisaFunpec(){
	var tabela = document.getElementById('tabela-projetos-pesquisa');

	while(tabela.rows.length >2){
		tabela.deleteRow(length-1);
	}

	projetosPesquisa.forEach(function(projeto) {
		
		// Captura a quantidade de linhas já existentes na tabela
	   	var numLinhas = tabela.rows.length;
	   	// Captura a quantidade de colunas da última linha da tabela
	   	var numColunas = tabela.rows[numLinhas-1].cells.length;

   		var novaLinha = tabela.insertRow(numLinhas);
   		novaLinha.setAttribute("id",numLinhas+1);

   		for (var j = 0; j < numColunas; j++) {
	      var a, i;
	       // Insere uma coluna na nova linha 
	      novaCelula = novaLinha.insertCell(j);
	      if(j===0){
	      	novaCelula.innerHTML = projeto.dados_gerais.numero_projeto;
	      }else if(j===1){
	      	novaCelula.innerHTML = projeto.dados_gerais.titulo;
	      }else if(j===2){
	      	novaCelula.innerHTML = projeto.dados_gerais.coordenador;
	      }else if(j===3){
	      	novaCelula.innerHTML = projeto.plano_aplicacao.fonte_recurso;
	      }else if(j===4){
	      	novaCelula.innerHTML = projeto.plano_aplicacao.valor_projeto;
	      }else if(j===5){
	      	novaCelula.innerHTML = projeto.tramitacao.situacao;
	      }else if(j===6){
	      	novaCelula.innerHTML = projeto.dados_gerais.unidade_execucao;
	      }else if(j===7){
	      	novaCelula.innerHTML = projeto.dados_gerais.ano;
	      }else{
	      	a = document.createElement("a");
	        a.setAttribute("href","analise_funpec.html");
	        a.setAttribute("class", "link-normal");
	        a.setAttribute("onclick","passarNumeroProjeto('"+projeto.dados_gerais.numero_projeto+"')");
	        i = document.createElement("i");
	        i.setAttribute("class", "fas fa-external-link-alt");
	        a.appendChild(i);
	        novaCelula.appendChild(a);
	    	
	      }
	   }
	});
}

function popularTabelaProjetosPesquisa(){

	var tabela = document.getElementById('tabela-projetos-pesquisa');

	while(tabela.rows.length >2){
		tabela.deleteRow(length-1);
	}

	projetosPesquisa.forEach(function(projeto) {
		
		// Captura a quantidade de linhas já existentes na tabela
	   	var numLinhas = tabela.rows.length;
	   	// Captura a quantidade de colunas da última linha da tabela
	   	var numColunas = tabela.rows[numLinhas-1].cells.length;

   		var novaLinha = tabela.insertRow(numLinhas);
   		novaLinha.setAttribute("id",numLinhas+1);

   		for (var j = 0; j < numColunas; j++) {
	      var a, i;
	       // Insere uma coluna na nova linha 
	      novaCelula = novaLinha.insertCell(j);
	      if(j===0){
	      	novaCelula.innerHTML = projeto.dados_gerais.numero_projeto;
	      }else if(j===1){
	      	novaCelula.innerHTML = projeto.dados_gerais.titulo;
	      }else if(j===2){
	      	novaCelula.innerHTML = projeto.tramitacao.situacao;
	      }else if(j===3){
	      	novaCelula.innerHTML = projeto.dados_gerais.unidade_execucao;
	      }else if(j===4){
	      	novaCelula.innerHTML = projeto.dados_gerais.ano;
	      }else{
	      	a = document.createElement("a");
	        a.setAttribute("href","formalizar_projeto_pesquisa.html");
	        a.setAttribute("class", "link-normal");
	        i = document.createElement("i");
	        i.setAttribute("class", "fas fa-external-link-alt");
	        a.appendChild(i);
	        novaCelula.appendChild(a);
	    	
	      }
	   }
	});

}

function populaSelect(elemento, array){
	array.forEach((opt) => {
      option = new Option(opt, opt);
      elemento.options[elemento.options.length] = option;
    });
}




