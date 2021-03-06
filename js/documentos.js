var arquivosProjeto = [];

var tiposDocumentosBase = [];

tiposDocumentosBase.push(['PARECER PRÓ-REITORIA'],['PARECER QUALIFICAÇÃO TÉCNICA'],['PARECER PROFESSOR CONVIDADO/SUBSTITUTO'],[
	'DECLARAÇÃO DE LIMITE DE CARGA HORÁRIA'], ['DECLARAÇÃO DE LIMITE DE REMUNERAÇÃO'],['PARECER COMISSÃO PESQUISA-PROPESQ'],['DECLARAÇÃO DE COLABORAÇÃO ESPORADICA,CONFORMIDADE,INEXISTENCIA DE NEPOTISMO E ADEQUAÇÃO AO SISTEMA DE BOLSAS'],
	['OFICIO FIRMAR PARCERIA COM UFRN'],['TED'],['INSTRUMENTO JURIDICO ORIGEM RECURSO'],['PLANILHA CLT - FUNPEC'],['ATA PLENÁRIA DEPARTAMENTO'], 
	['RESOLUÇÃO APROVAÇÃO CONSEPE'],['PLANO DE CARGO,CARREIRAS E SALÁRIOS FUNPEC'],['PARECER DCF'], ['PARECER COMISSÃO DE ÉTICA'], ['ATA/PUBLICAÇÃO SELEÇÃO PESQUISADORES BOLSISTAS'],
	['PLANO DE TRABALHO DO SERVIDOR TÉCNICO/BOLSA DE PESQUISA'],['AUTORIZAÇÃO PARA PARTICIPAÇÃO EM PROJETO DE PESQUISA'], ['MINUTA'], ['PARECER AGIR'],['PARECER DO CONSAD'],['PARECER JURIDICO REFERÊNCIAL'],
	['PORTARIA AGU'],['DESPACHO PARECER REFERÊNCIAL'],['PARECER JURIDICO AGU'],['PARECER JURIDICO FUNPEC'],['JUSTIFICATIVA DE CONTRATAÇÃO DA FUNPEC'],
	['JUSTIFICATIVA DE ANTECIPAÇÃO DE RECURSO PARA FUNPEC'],['DISPENSA DE LICITAÇÃO'],['EXTRATO PUBLICAÇÃO DL'],['CONTRATO'],['CERTIDÃO SIAFI'],['CERTIDÃO CADIN'],['CERTIDÕES CNDS'],
	['PORTARIA DE CREDENCIAMENTO DA FUNPEC'],['EXTRATO PUBLICAÇÃO CONTRATO'],['EMPENHOS'],['DOTAÇÃO ORÇAMENTÁRIA']);

var tiposDocumentos = [];

tiposDocumentos.push(localStorage.getItem('tiposDocumentos'));

var tiposDocumentoOrigemRecurso =[];

tiposDocumentoOrigemRecurso.push(['CONTRATO'], ['TERMO DE COOPERACAO'], ['TED'], ['ACORDO DE COOPERACAO'], ['PROTOCOLO DE INTENÇÕES'], ['MEMORANDO DE ENTENDIMENTOS'], ['TERMO DE COMPROMISSO'], ['TERMO DE COMODOTADO'], ['TERMO DE REFERÊNCIA'], ['TERMO DE PARCERIA']);

function ArquivoProjeto(numero_projeto,tipo,descricao, arquivo){
	this.numero_projeto = numero_projeto;
	this.tipo = tipo;
	this.descricao = descricao;
	this.arquivo = arquivo;
}

function inserirTipoDocumento(idTabela, idNome, idSelect){
	var tipoDocumento = [];
	tipoDocumento.push(document.getElementById(idNome).value);
	tiposDocumentos.push(tipoDocumento);
	limpaSelect(document.getElementById(idSelect));
	populaSelect(document.getElementById(idSelect), tiposDocumentos);

	localStorage.setItem('tiposDocumentos',JSON.stringify(tiposDocumentos));

	popularTiposDocumento(idTabela);
}

function popularTiposDocumento(idTabela){

	var tabela = document.getElementById(idTabela);

	while(tabela.rows.length >2){
		tabela.deleteRow(length-1);
	}

	tiposDocumentosBase.forEach(function(tipo) {
		
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
	      	novaCelula.innerHTML = tipo;
	      }else{
	      		novaCelula.innerHTML = ' ';
	      }
	   }
	});

	tiposDocumentos.forEach(function(tipo) {
		
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
	      	novaCelula.innerHTML = tipo;
	      }else{
	      		a = document.createElement("button");
		        a.setAttribute("onclick","removerTipoDocumento(this.parentNode.parentNode.rowIndex,'"+idTabela+"','"+tipo+"')");
		        a.setAttribute("class", "btn btn-link");
		        i = document.createElement("i");
		        i.setAttribute("class", "far fa-trash-alt");
		        a.appendChild(i);
		        novaCelula.appendChild(a);
	      	}
	      }
	});

}

function removerTipoDocumento(i,idTabela,nome){
	tiposDocumentos.forEach(function(tipo){
		if(tipo[0] === nome){
			tiposDocumentos.splice(tiposDocumentos.indexOf(tipo), 1);
		}
	});
	
    document.getElementById(idTabela).deleteRow(i);
}

function removerLinhaTabelaArquivo(i,idTabela,descricao){
	arquivosProjeto.forEach(function(arquivo){
		if(arquivo.numero_projeto === numero_projeto && arquivo.descricao === descricao){
			arquivosProjeto.splice(arquivosProjeto.indexOf(arquivo), 1);
		}
	});

	localStorage.setItem('arquivosProjetos', JSON.stringify(arquivosProjeto));
	
    document.getElementById(idTabela).deleteRow(i);
}

function inserirArquivo(idTabela,idSelect,idDescricao,idArquivo){

	var tipo = document.getElementById(idSelect).value;
	//var nome = document.getElementById('nome-arquivo').value;
	var descricao = document.getElementById(idDescricao).value;
	var arquivo = document.getElementById(idArquivo).value;

	var arquivoProjeto = new ArquivoProjeto(numero_projeto,tipo,descricao,arquivo);

	if(JSON.parse(localStorage.getItem('arquivosProjetos')) != null){
		arquivosProjeto = [];
		JSON.parse(localStorage.getItem('arquivosProjetos')).forEach( function (arquivo){
			arquivosProjeto.push(arquivo);
		});	
	}

	arquivosProjeto.push(arquivoProjeto);

	localStorage.setItem('arquivosProjetos', JSON.stringify(arquivosProjeto));

	populaTabelaArquivos(idTabela);
	//nomeAcao,link,onclick_,idTabela, parametro

	return arquivoProjeto;

}

function populaTabelaArquivos(idTabela){

	var dadosArquivos = [];

	if(JSON.parse(localStorage.getItem('arquivosProjetos')) != null){
		JSON.parse(localStorage.getItem('arquivosProjetos')).forEach( function (arquivo){
			arquivosProjeto.push(arquivo);
			if(arquivo.numero_projeto === numero_projeto){
				dadosArquivos.push([arquivo.tipo, arquivo.descricao, arquivo.arquivo]);
			}
		});	
	}

	popularTabelaArquivo(idTabela,dadosArquivos);
	
}

function popularTabelaArquivo(idTabela,dadosArquivos){

 	var tabela = document.getElementById(idTabela);

 	var botao;

	limpaTabela(tabela);
 
	dadosArquivos.forEach(function(item){

		var resultado = [];

		var numLinhas = tabela.rows.length;
	   	// Captura a quantidade de colunas da última linha da tabela
	   	var numColunas = tabela.rows[numLinhas-1].cells.length;

   		var novaLinha = tabela.insertRow(numLinhas);
   		
   		novaLinha.setAttribute("id",numLinhas+1);
   		

   		for (var i in item) {
		    if (item.hasOwnProperty(i)) {
		        resultado.push(item[i]);
		    }
		}

   		for (var j = 0; j < numColunas; j++) {
	    	var i;
	       // Insere uma coluna na nova linha 
	    	novaCelula = novaLinha.insertCell(j);

	    	i = numColunas-1;

	    	if (resultado.hasOwnProperty(j)) {
					novaCelula.innerHTML = resultado[j];
	    		}else{
		    	novaCelula.setAttribute("align","right");
      			novaCelula.setAttribute("class","btn-group");

      			botao = document.createElement("button");
			    botao.setAttribute("onclick","removerLinhaTabelaArquivo(this.parentNode.parentNode.rowIndex,'"+idTabela+"','"+item[1]+"')");
			    botao.setAttribute("class", "btn btn-link");
			    i = document.createElement("i");
			    i.setAttribute("class", "far fa-trash-alt");
			    botao.appendChild(i);

			    novaCelula.appendChild(botao);

		      	
		    }
	   }
	});

 }