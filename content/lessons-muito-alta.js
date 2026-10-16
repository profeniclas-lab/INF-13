/* ============================================================
   AULAS — Módulos de prioridade MUITO ALTA
   Preenchidos: INF-02, INF-03, INF-04, INF-07, INF-11
   Próximos lotes: INF-01, INF-05, INF-08, INF-10, INF-12 (alta)
                   INF-09, INF-13, INF-14, INF-16 (média)
                   INF-06, INF-15 (condicional)
   ============================================================ */

window.LESSONS_MUITO_ALTA = {

  /* ============================================================
     INF-02 — Sistemas Operacionais: Windows
  ============================================================ */
  'INF-02': {
    id: 'L-INF-02',
    moduloId: 'INF-02',
    objetivo: 'Dominar o funcionamento do Windows: funções do sistema operacional, área de trabalho, menu Iniciar, barra de tarefas, Explorador de Arquivos, manipulação de arquivos e pastas, extensões, lixeira, contas de usuário, permissões e atalhos de teclado. Compreender a diferença entre copiar, mover, excluir e restaurar arquivos.',
    prerequisitos: [],

    introducao: 'Windows é o módulo MAIS cobrado de Informática em concursos — aparece em praticamente todas as provas, às vezes em 3 a 5 questões. A banca não cobra "decoreba" de menus: cobra o RESULTADO de cada ação. Ela quer saber se você entende a diferença entre copiar e mover, entre excluir e restaurar, entre atalho e arquivo original. Este módulo é a base para Word, Excel e demais ferramentas.',

    explicacaoSimples: 'Pense no Windows como o "gerente" do computador. Ele organiza tudo: onde os arquivos ficam (pastas), como você vê a tela (área de trabalho), como abre programas (menu Iniciar, barra de tarefas). Você não precisa decorar caminhos — precisa entender o que cada ação faz. Por exemplo: "copiar" duplica; "mover" transfere; "excluir" manda para a Lixeira (ou apaga de vez com Shift). Cada ação tem uma consequência diferente.',

    explicacaoTecnica: 'FUNÇÕES DO SO: gerenciar hardware, memória, processos, arquivos, usuários e periféricos; fornecer interface (gráfica ou linha de comando). ÁREA DE TRABALHO: ambiente principal — ícones, atalhos, janelas, papel de parede. MENU INICIAR: acesso a programas, configurações, desligar/reiniciar. BARRA DE TAREFAS: programas abertos, área de notificação (relógio, rede, som), botão Iniciar. EXPLORADOR DE ARQUIVOS: navegação por unidades (C:, D:), pastas e arquivos. ESTRUTURA: unidade → pasta → subpasta → arquivo. EXTENSÃO: sufixo que indica o tipo do arquivo (.docx, .xlsx, .pdf, .jpg, .exe). LIXEIRA: armazena arquivos excluídos (não os do pendrive nem os removidos com Shift+Del). CONTAS: Administrador (controle total), Padrão (limitado), Convidado (mínimo). PERMISSÕES: Leitura, Gravação, Execução, Controle total. ATALHOS ESSENCIAIS: Ctrl+C (copiar), Ctrl+X (recortar), Ctrl+V (colar), Ctrl+Z (desfazer), Ctrl+Y (refazer), Ctrl+A (selecionar tudo), Ctrl+Shift+N (nova pasta), F2 (renomear), Delete (enviar para Lixeira), Shift+Delete (excluir permanentemente), Win+E (Explorador), Win+L (bloquear), Win+D (mostrar área de trabalho), Alt+Tab (alternar janelas), Alt+F4 (fechar janela), Print Screen (captura de tela), Win+Shift+S (captura de região). DIFERENÇAS ENTRE VERSÕES: Windows 10 e 11 têm o mesmo núcleo; Windows 11 tem menu Iniciar centralizado, layouts de Snap, widgets.',

    exemplos: [
      'Ctrl+C, depois Ctrl+V: cria uma CÓPIA do arquivo na pasta de destino (o original permanece).',
      'Ctrl+X, depois Ctrl+V: MOVE o arquivo — sai da origem, entra no destino.',
      'Delete: envia para a Lixeira (recuperável). Shift+Delete: exclui permanentemente (não vai para a Lixeira).',
      'F2: renomeia o arquivo selecionado.',
      'Ctrl+Shift+N: cria nova pasta.',
      'Win+E: abre o Explorador de Arquivos.',
      'Win+L: bloqueia a sessão (pede senha para voltar).',
      'Alt+Tab: alterna entre janelas abertas.',
      'Print Screen: captura toda a tela. Win+Shift+S: captura um recorte da tela.',
      'Arquivo .exe: programa executável. .docx: documento Word. .xlsx: planilha Excel. .pdf: documento portátil. .jpg: imagem.'
    ],

    comparacoes: [
      { termoA: 'Copiar (Ctrl+C)', termoB: 'Mover (Ctrl+X)', diferenca: 'COPIAR: duplica o arquivo — o original permanece na origem e uma cópia vai para o destino. MOVER (recortar): transfere o arquivo — ele sai da origem e vai para o destino. Ao usar "arrastar e soltar" com o mouse: dentro da MESMA unidade, arrastar = mover; entre UNIDADES DIFERENTES (ex.: C: para pendrive), arrastar = copiar. Segurar Ctrl força cópia; segurar Shift força mover.' },
      { termoA: 'Excluir (Delete)', termoB: 'Excluir permanentemente (Shift+Delete)', diferenca: 'DELETE: envia para a Lixeira — o arquivo pode ser restaurado. SHIFT+DELETE: exclui definitivamente, sem passar pela Lixeira — não há como restaurar pelo Windows. Atenção: arquivos de pendrives e de unidades de rede geralmente NÃO vão para a Lixeira, mesmo com Delete simples.' },
      { termoA: 'Arquivo', termoB: 'Atalho', diferenca: 'ARQUIVO: contém dados reais (documento, imagem, planilha). ATALHO: pequeno arquivo que APONTA para outro (ícone com seta). Apagar o atalho NÃO apaga o arquivo original; apagar o original deixa o atalho inválido ("quebrado"). Extensão do atalho: .lnk.' },
      { termoA: 'Unidade local (C:)', termoB: 'Unidade removível', diferenca: 'UNIDADE LOCAL: disco interno (HD ou SSD) — arquivos excluídos vão para a Lixeira. UNIDADE REMOVÍVEL: pendrive, cartão de memória, HD externo — arquivos excluídos geralmente NÃO vão para a Lixeira. Exceção: se a Lixeira estiver configurada para aquela unidade.' },
      { termoA: 'Conta Administrador', termoB: 'Conta Padrão', diferenca: 'ADMINISTRADOR: controle total — instala programas, altera configurações do sistema, acessa todos os arquivos, cria/gerencia outras contas. PADRÃO: uso normal — pode usar programas e alterar arquivos pessoais, mas não pode instalar programas que afetem o sistema nem alterar configurações críticas sem senha de administrador.' }
    ],

    aplicacaoEmConcurso: 'Windows aparece em TODAS as provas. As bancas cobram: diferença entre copiar e mover, teclas de atalho (Ctrl+C, Ctrl+X, Ctrl+V, F2, Delete), diferença entre Lixeira e exclusão definitiva, extensões de arquivo, função de cada conta de usuário, caminho completo de arquivo (C:\\Users\\Nome\\Documentos\\arquivo.docx). Sempre interpretação de ação — nunca "menu X fica na aba Y".',

    pegadinhas: [
      'Achar que Delete apaga definitivamente — na verdade, envia para a Lixeira.',
      'Achar que arquivos de pendrive vão para a Lixeira ao pressionar Delete — geralmente NÃO vão.',
      'Confundir copiar com mover — a banca adora isso.',
      'Achar que arrastar sempre copia — dentro da mesma unidade, ARRASTA = MOVE.',
      'Confundir atalho (.lnk) com arquivo original — apagar o atalho NÃO apaga o arquivo.',
      'Achar que Win+L desliga o computador — na verdade, apenas BLOQUEIA a sessão.',
      'Confundir Ctrl+Z (desfazer) com Ctrl+Y (refazer).',
      'Achar que a extensão "define" o conteúdo — a extensão indica o tipo, mas renomear NÃO converte o arquivo.'
    ],

    errosComuns: [
      'Decorar menus em vez de entender o efeito das ações.',
      'Não saber que Ctrl+X é "recortar" (mover), não "excluir".',
      'Confundir unidades locais (com Lixeira) com removíveis (sem Lixeira).',
      'Achar que atalho ocupa o mesmo espaço do arquivo — é só um ponteiro leve.',
      'Não entender que renomear a extensão não converte o arquivo.'
    ],

    resumo: [
      'SO gerencia hardware, software, arquivos e usuários.',
      'Ctrl+C copia; Ctrl+X move; Ctrl+V cola; Ctrl+Z desfaz; Ctrl+Y refaz.',
      'Delete envia para Lixeira; Shift+Delete apaga permanentemente.',
      'Pendrives geralmente NÃO usam a Lixeira.',
      'Arrastar na mesma unidade = mover; entre unidades = copiar.',
      'F2 renomeia; Ctrl+Shift+N cria pasta; Win+E abre o Explorador.',
      'Atalho (.lnk) aponta para o arquivo; apagar o atalho não apaga o original.',
      'Extensão indica o tipo: .docx, .xlsx, .pdf, .jpg, .exe.'
    ],

    modoProfessor: {
      explicarMaisSimples: 'Windows é o "gerente" do PC. Ele organiza arquivos (pastas), mostra a tela (área de trabalho) e controla programas. Você só precisa entender o EFEITO de cada ação: copiar duplica, mover transfere, excluir manda para a Lixeira, Shift+Delete apaga de vez.',
      outroExemplo: 'Você tem a foto "praia.jpg" na pasta Imagens e quer enviá-la para a pasta Viagens. Se usar Ctrl+C e Ctrl+V, ficará nas duas. Se usar Ctrl+X e Ctrl+V, ficará só em Viagens. Essa é a diferença mais cobrada em prova.',
      compararConceitos: 'Copiar × Mover. Lixeira × Exclusão definitiva. Arquivo × Atalho. Unidade local × Removível. Administrador × Padrão.',
      mostrarPegadinha: 'Cuidado: "arrastar o arquivo para o pendrive copia ou move?" — DEPENDE. Entre C: e pendrive (unidades diferentes) = COPIA. Dentro da mesma unidade = MOVE. Segurar Ctrl força cópia; Shift força mover.',
      comoApareceEmConcurso: 'Interpretação de ações, teclas de atalho, diferença Lixeira × exclusão, extensões. Altíssima frequência.',
      fazerPergunta: {
        pergunta: 'Você seleciona um arquivo, pressiona Ctrl+X e depois Ctrl+V em outra pasta. O que aconteceu?',
        resposta: 'O arquivo foi MOVIDO. Ctrl+X recorta (retira da origem) e Ctrl+V cola (insere no destino). O original NÃO permanece na pasta de origem — ele foi transferido. Se fosse Ctrl+C e Ctrl+V, haveria DUAS cópias (original + cópia).'
      }
    }
  },

  /* ============================================================
     INF-03 — Microsoft Word e Processadores de Texto
  ============================================================ */
  'INF-03': {
    id: 'L-INF-03',
    moduloId: 'INF-03',
    objetivo: 'Dominar o Microsoft Word: criação, edição, formatação de texto e parágrafo, listas, tabelas, imagens, cabeçalhos e rodapés, quebras de página e seção, revisão, estilos, sumário, controle de alterações e exportação para PDF. Compreender a diferença entre salvar e exportar.',
    prerequisitos: ['INF-02'],

    introducao: 'Word é um dos módulos mais cobrados — a banca testa tanto o reconhecimento de comandos quanto o RESULTADO de cada recurso. Você precisa distinguir salvar de salvar como, salvar de exportar, quebra de página de quebra de seção, e entender o que cada recurso faz (cabeçalho, rodapé, estilos, sumário, controle de alterações). É conteúdo muito interpretativo.',

    explicacaoSimples: 'Pense no Word como um "editor de texto com poderes". Você escreve, formata (negrito, itálico, tamanho, cor), organiza (parágrafos, listas, tabelas) e enriquece (imagens, cabeçalho, rodapé). Depois pode salvar como .docx (editável) ou exportar como .pdf (não editável, layout travado). A banca cobra principalmente os efeitos de cada comando.',

    explicacaoTecnica: 'DOCUMENTO: arquivo com texto, imagens, tabelas. FORMATOS: .docx (padrão do Word 2007+), .doc (versões antigas), .pdf (portátil), .rtf (texto enriquecido), .txt (texto puro). FORMATAÇÃO DE FONTE: tipo, tamanho, negrito (Ctrl+N), itálico (Ctrl+I), sublinhado (Ctrl+S), cor, destaque. FORMATAÇÃO DE PARÁGRAFO: alinhamento (esquerda, centralizado, direita, justificado — Ctrl+E, Ctrl+J), recuo, espaçamento entre linhas e parágrafos. LISTAS: com marcadores (•), numeradas (1, 2, 3), multinível. TABELAS: linhas, colunas, células, mesclar, dividir. IMAGENS: inserir, redimensionar, disposição (alinhada, flutuante). CABEÇALHO/RODAPÉ: área fixa no topo/rodapé de cada página — numeração automática (Inserir → Número de Página). QUEBRA DE PÁGINA (Ctrl+Enter): força início de nova página. QUEBRA DE SEÇÃO: divide o documento em seções independentes — permite formatar cabeçalhos, margens e orientações diferentes. ESTILOS: conjuntos de formatação pré-definidos (Título 1, Título 2, Normal) — usados para gerar SUMÁRIO AUTOMÁTICO. LOCALIZAR (Ctrl+L), SUBSTITUIR (Ctrl+U): busca e troca texto. CORRETOR: sublinha palavras erradas (vermelho) e gramática (verde/azul). COMENTÁRIOS: anotações no texto. CONTROLE DE ALTERAÇÕES: registra todas as modificações — ideal para revisão em grupo. EXPORTAR PDF: converte para PDF travando o layout. ATALHOS ESSENCIAIS: Ctrl+B (salvar), Ctrl+Z (desfazer), Ctrl+Y (refazer), Ctrl+C/X/V, Ctrl+N (negrito), Ctrl+I (itálico), Ctrl+S (sublinhado — cuidado: em inglês, Ctrl+S é salvar!), Ctrl+E (centralizar), Ctrl+J (justificar), Ctrl+Enter (quebra de página), F7 (revisão ortográfica).',

    exemplos: [
      'Ctrl+N: negrito. Ctrl+I: itálico. Ctrl+S: sublinhado (no Word em português).',
      'Ctrl+E: centralizar. Ctrl+J: justificar. Ctrl+G: alinhar à direita. Ctrl+Q: alinhar à esquerda.',
      'Ctrl+Enter: insere quebra de página.',
      'Salvar (Ctrl+B): grava o arquivo no mesmo local e formato.',
      'Salvar como (F12): permite escolher novo nome, local ou formato.',
      'Exportar → Criar PDF: converte para PDF — recomenda-se salvar o .docx separadamente.',
      'Cabeçalho e rodapé: aparecem em todas as páginas (ou por seção).',
      'Estilos: Normal, Título 1, Título 2 — base para o sumário automático.',
      'Controle de alterações: mostra quem alterou o quê.',
      'Sumário automático: gerado a partir dos estilos aplicados (Referências → Sumário).'
    ],

    comparacoes: [
      { termoA: 'Salvar (Ctrl+B)', termoB: 'Salvar como (F12)', diferenca: 'SALVAR: grava o arquivo no MESMO local e formato — sobrescreve o original. SALVAR COMO: permite escolher NOVO nome, NOVO local ou NOVO formato — o original é preservado. Use "Salvar como" quando quiser criar versão nova sem perder a anterior.' },
      { termoA: 'Salvar', termoB: 'Exportar', diferenca: 'SALVAR: mantém o arquivo no formato do Word (.docx) — permanece editável. EXPORTAR: gera uma cópia em outro formato (PDF, por exemplo) — o PDF não é editável no Word com facilidade. Ao exportar para PDF, o recomendado é SALVAR PRIMEIRO em .docx e depois exportar.' },
      { termoA: 'Quebra de página', termoB: 'Quebra de seção', diferenca: 'QUEBRA DE PÁGINA (Ctrl+Enter): apenas inicia nova página — formatação continua a mesma (mesmo cabeçalho, mesmas margens). QUEBRA DE SEÇÃO: divide o documento em BLOCOS independentes — permite ter cabeçalhos diferentes, margens diferentes e até orientações diferentes (retrato/paisagem) em cada seção.' },
      { termoA: 'Estilo', termoB: 'Formatação manual', diferenca: 'ESTILO: conjunto pré-definido de formatações (fonte, tamanho, cor, espaçamento) aplicado em um clique — permite gerar SUMÁRIO automático e manter consistência. FORMATAÇÃO MANUAL: aplicar negrito, tamanho, cor separadamente — mais trabalhoso e não gera sumário automático.' }
    ],

    aplicacaoEmConcurso: 'Word aparece com frequência. As bancas cobram: efeito de teclas de atalho, diferença entre salvar e exportar, diferença entre quebra de página e de seção, finalidade de cabeçalho/rodapé, o que é controle de alterações, como funciona o sumário automático, e a diferença entre formatos (.docx × .pdf × .rtf × .txt). Sempre interpretação.',

    pegadinhas: [
      'Confundir Ctrl+S (sublinhado em português) com Ctrl+B (salvar em português) — em inglês é o contrário!',
      'Achar que exportar para PDF substitui o arquivo .docx — não substitui; gera cópia adicional.',
      'Confundir quebra de página com quebra de seção — a seção permite formatações diferentes.',
      'Achar que Ctrl+Enter salva — na verdade, insere quebra de página.',
      'Achar que .pdf é editável no Word com facilidade — não é (é formato de distribuição).',
      'Achar que cabeçalho e rodapé aparecem só na primeira página — aparecem em todas (salvo se configurado diferente).',
      'Achar que renomear um arquivo .docx para .pdf o converte — não converte; apenas muda a extensão.'
    ],

    errosComuns: [
      'Decorar menus em vez de entender o efeito dos comandos.',
      'Confundir atalhos do Word em português com os do Word em inglês.',
      'Não perceber a diferença entre "Salvar" e "Salvar como".',
      'Achar que PDF é o mesmo que DOCX.'
    ],

    resumo: [
      'Word: editor de texto — .docx (padrão), .doc, .rtf, .txt, .pdf.',
      'Ctrl+N (negrito), Ctrl+I (itálico), Ctrl+S (sublinhado).',
      'Ctrl+E (centralizar), Ctrl+J (justificar), Ctrl+Q (esquerda), Ctrl+G (direita).',
      'Ctrl+Enter: quebra de página. Ctrl+B: salvar. F12: salvar como.',
      'Salvar mantém o formato; Exportar gera cópia em outro formato (PDF).',
      'Quebra de página = nova página. Quebra de seção = bloco independente.',
      'Estilos viabilizam sumário automático.',
      'Controle de alterações: registra modificações para revisão.',
      'Cabeçalho/rodapé aparecem em todas as páginas (ou por seção).'
    ],

    modoProfessor: {
      explicarMaisSimples: 'Word é um editor de texto com poderes. Você escreve, formata (negrito, itálico, cor), organiza (tabelas, listas) e exporta (PDF). A banca cobra o EFEITO de cada comando: salvar mantém o arquivo; exportar gera uma cópia em outro formato; quebra de página só muda de página; quebra de seção cria bloco independente.',
      outroExemplo: 'Você tem um trabalho em .docx. Ao exportar para PDF, o Word cria um arquivo .pdf ADICIONAL, mantendo o .docx intacto. Se você fizer "Salvar como PDF", o Word normalmente avisa que está perdendo editabilidade — o ideal é salvar em .docx primeiro, depois exportar.',
      compararConceitos: 'Salvar × Salvar como. Salvar × Exportar. Quebra de página × Quebra de seção. Estilo × Formatação manual.',
      mostrarPegadinha: 'Cuidado: no Word em PORTUGUÊS, Ctrl+S é SUBLINHADO (não salvar!) e Ctrl+B é SALVAR (não negrito!). No Word em INGLÊS, é o contrário: Ctrl+B é negrito e Ctrl+S é salvar. A banca adora essa pegadinha.',
      comoApareceEmConcurso: 'Interpretação de comandos, teclas de atalho, diferenças entre formatos. Alta frequência.',
      fazerPergunta: {
        pergunta: 'Qual a diferença entre salvar em .docx e exportar em .pdf?',
        resposta: 'SALVAR em .docx mantém o arquivo EDITÁVEL no Word. EXPORTAR em .pdf gera uma CÓPIA em formato de distribuição — o layout fica travado, difícil de editar, mas ideal para envio e impressão. O recomendado é SALVAR primeiro em .docx (para continuar editando depois) e depois EXPORTAR para PDF (para enviar).'
      }
    }
  },

  /* ============================================================
     INF-04 — Microsoft Excel e Planilhas Eletrônicas
  ============================================================ */
  'INF-04': {
    id: 'L-INF-04',
    moduloId: 'INF-04',
    objetivo: 'Dominar o Microsoft Excel: estrutura de pastas de trabalho, planilhas, células e intervalos; tipos de dados; referências relativas, absolutas e mistas; fórmulas e operadores; funções essenciais (SOMA, MÉDIA, MÁXIMO, MÍNIMO, CONT.NÚM, SE, CONT.SE); ordenação, filtros, formatação condicional; gráficos; tabelas dinâmicas; erros em fórmulas. Compreender a diferença entre fórmula e função, e o efeito prático de cada referência.',
    prerequisitos: ['INF-02'],

    introducao: 'Excel é o módulo mais técnico de Informática em concursos. As bancas cobram funções, referências (relativa, absoluta, mista), operadores, mensagens de erro e interpretação de resultados. Não basta decorar funções — é preciso entender o RESULTADO de uma fórmula. Este módulo é decisivo em concursos administrativos.',

    explicacaoSimples: 'Imagine o Excel como uma grande tabela onde cada célula tem um endereço (A1, B2, C3). Você pode fazer cálculos usando fórmulas (sempre começam com =) e funções prontas (SOMA, MÉDIA). O segredo está em duas coisas: entender a ORDEM dos operadores (matemática básica) e entender COMO as referências se comportam ao copiar a fórmula. Isso é o que a banca cobra.',

    explicacaoTecnica: 'ESTRUTURA: pasta de trabalho (.xlsx) contém planilhas; planilhas contêm linhas (1, 2, 3...), colunas (A, B, C...) e células (A1 = coluna A, linha 1). Intervalo: A1:A10 (coluna A, linhas 1 a 10); A1:C5 (retângulo). TIPOS DE DADOS: número, texto, data, hora, moeda, porcentagem, lógico (VERDADEIRO/FALSO). REFERÊNCIAS: RELATIVA (A1) — muda ao copiar; ABSOLUTA ($A$1) — não muda ao copiar; MISTA ($A1 ou A$1) — trava coluna OU linha. FÓRMULA: começa com = e usa operadores: + (soma), - (subtração), * (multiplicação), / (divisão), ^ (potência), % (porcentagem). ORDEM DE CÁLCULO: 1º parênteses; 2º potência; 3º multiplicação e divisão (esquerda para direita); 4º soma e subtração. FUNÇÕES ESSENCIAIS: SOMA(intervalo), MÉDIA(intervalo), MÁXIMO(intervalo), MÍNIMO(intervalo), CONT.NÚM(intervalo) — conta células com NÚMEROS; CONT.VALORES(intervalo) — conta células NÃO VAZIAS; SE(teste; valor_se_verdadeiro; valor_se_falso); CONT.SE(intervalo; critério) — conta células que atendem ao critério; SOMASE(intervalo; critério; [intervalo_soma]). ORDENAÇÃO: crescente/decrescente. FILTROS: mostrar apenas linhas que atendem a critérios. FORMATAÇÃO CONDICIONAL: destaca células conforme regras. GRÁFICOS: colunas, linhas, pizza, barras, dispersão. TABELAS DINÂMICAS: resumos interativos. ERROS: #DIV/0! (divisão por zero), #N/A (valor não disponível), #VALOR! (tipo errado), #REF! (referência inválida — célula excluída), #NOME? (nome de função errado), #NÚM! (número inválido). ATALHOS: Ctrl+; (data atual), Ctrl+Shift+; (hora), F2 (editar célula), F4 (alternar referência — alterna entre A1 → $A$1 → A$1 → $A1), Ctrl+Home (A1), Ctrl+End (última célula), Alt+= (AutoSoma), Ctrl+Setas (navegação).',

    exemplos: [
      '=A1+B1: soma os valores das células A1 e B1.',
      '=SOMA(A1:A10): soma todo o intervalo A1 até A10.',
      '=MÉDIA(B1:B5): média aritmética do intervalo.',
      '=SE(A1>=7; "Aprovado"; "Reprovado"): se A1 ≥ 7, retorna "Aprovado"; senão, "Reprovado".',
      '=CONT.SE(A1:A10; ">5"): conta quantas células no intervalo são maiores que 5.',
      '=SOMASE(A1:A10; ">5"; B1:B10): soma os valores em B1:B10 cujas células correspondentes em A1:A10 sejam > 5.',
      '=$A$1: referência absoluta — NÃO muda ao copiar a fórmula.',
      '=$A1: referência mista — trava a coluna A.',
      '=A$1: referência mista — trava a linha 1.',
      '=(2+3)*4 = 20; 2+3*4 = 14 (a multiplicação tem prioridade sobre a soma).',
      'Erros: #DIV/0! (divisão por zero), #VALOR! (texto em cálculo), #REF! (referência quebrada).'
    ],

    comparacoes: [
      { termoA: 'Fórmula', termoB: 'Função', diferenca: 'FÓRMULA: expressão matemática escrita pelo usuário. Ex.: "=A1+B1". FUNÇÃO: fórmula PRONTA com nome específico. Ex.: "=SOMA(A1:A10)". Toda função é uma fórmula (começa com =), mas nem toda fórmula é função. Funções evitam escrever cálculos longos.' },
      { termoA: 'Referência relativa (A1)', termoB: 'Referência absoluta ($A$1)', diferenca: 'RELATIVA: muda quando a fórmula é copiada. Se =A1+B1 é copiada de C1 para C2, vira =A2+B2. ABSOLUTA: NÃO muda — o "$" trava a referência. Se =$A$1+B1 é copiada, o $A$1 permanece, mas B1 vira B2. Use absoluta quando quiser fixar uma célula (ex.: taxa de juros em uma célula específica).' },
      { termoA: 'Referência mista ($A1 ou A$1)', termoB: 'Relativa e absoluta', diferenca: 'MISTA: trava apenas a coluna OU apenas a linha. "$A1": coluna A fica travada, linha varia. "A$1": linha 1 fica travada, coluna varia. Ao copiar, apenas a parte sem "$" se ajusta. É usada em tabelas de multiplicação e fórmulas complexas.' },
      { termoA: 'CONT.NÚM', termoB: 'CONT.VALORES', diferenca: 'CONT.NÚM(intervalo): conta apenas células que contêm NÚMEROS — ignora texto e vazias. CONT.VALORES(intervalo): conta células NÃO VAZIAS — inclui números, textos, datas. Se o intervalo tem 10 células, 6 com números e 2 com texto, CONT.NÚM = 6 e CONT.VALORES = 8.' },
      { termoA: 'SE', termoB: 'CONT.SE', diferenca: 'SE(teste; verdadeiro; falso): retorna um VALOR conforme o teste. Ex.: =SE(A1>=7;"Aprovado";"Reprovado"). CONT.SE(intervalo; critério): CONTA quantas células atendem ao critério. Ex.: =CONT.SE(A1:A10;">7") conta quantos valores são maiores que 7.' },
      { termoA: '#DIV/0!', termoB: '#VALOR!', diferenca: '#DIV/0!: tentativa de dividir por zero ou por célula vazia. #VALOR!: operação com tipo de dado errado (ex.: somar texto com número). São mensagens de erro diferentes — a banca cobra a interpretação de cada uma.' }
    ],

    aplicacaoEmConcurso: 'Excel aparece em praticamente toda prova de Informática. As bancas cobram: efeito de referências relativas/absolutas/mistas, funções essenciais (SOMA, MÉDIA, SE, CONT.SE), interpretação de fórmulas com parênteses, mensagens de erro, diferença entre CONT.NÚM e CONT.VALORES, o que faz a alça de preenchimento, e o resultado de uma planilha dada. MUITO interpretativo.',

    pegadinhas: [
      'Confundir referência relativa (A1) com absoluta ($A$1) — a banca muda o local da fórmula para testar.',
      'Achar que =A1+B1+C1 é o mesmo que =SOMA(A1:C1) em TODOS os casos — na verdade, SOMA ignora texto, enquanto + retorna #VALOR! se houver texto.',
      'Trocar CONT.NÚM (só números) com CONT.VALORES (não vazias).',
      'Confundir SE (retorna valor) com CONT.SE (conta células).',
      'Esquecer a ORDEM de cálculo: =2+3*4 é 14, não 20. Parênteses primeiro: =(2+3)*4 = 20.',
      'Achar que a alça de preenchimento copia fórmulas do mesmo jeito — depende da referência.',
      'Confundir #DIV/0! (divisão por zero) com #VALOR! (tipo errado) e #REF! (referência excluída).',
      'Achar que $ é decoração — é o que trava a referência.',
      'Confundir "linha" com "coluna": colunas são letras (A, B, C); linhas são números (1, 2, 3).'
    ],

    errosComuns: [
      'Decorar funções sem entender o comportamento das referências.',
      'Esquecer que fórmulas sempre começam com =.',
      'Não saber a ordem de cálculo.',
      'Confundir o significado de cada mensagem de erro.',
      'Achar que a alça de preenchimento faz sempre a mesma coisa.'
    ],

    resumo: [
      'Pasta de trabalho (.xlsx) contém planilhas; planilhas contêm células (A1, B2).',
      'Fórmula começa com =; usa + - * / ^ %.',
      'Ordem: parênteses → potência → multiplicação/divisão → soma/subtração.',
      'Referência relativa (A1) muda ao copiar; absoluta ($A$1) não muda; mista trava coluna ou linha.',
      'F4 alterna entre A1 → $A$1 → A$1 → $A1.',
      'SOMA, MÉDIA, MÁXIMO, MÍNIMO, CONT.NÚM, CONT.VALORES, SE, CONT.SE, SOMASE.',
      'CONT.NÚM: só números. CONT.VALORES: não vazias.',
      'SE retorna valor; CONT.SE conta células.',
      'Erros: #DIV/0!, #VALOR!, #REF!, #N/A, #NOME?.',
      'Alt+= faz AutoSoma.'
    ],

    modoProfessor: {
      explicarMaisSimples: 'Excel é uma tabela com endereços (A1, B2). Fórmulas começam com =, e funções são fórmulas prontas. O segredo é entender TRÊS coisas: ordem de cálculo (parênteses primeiro), referências (relativa muda, absoluta trava com $) e mensagens de erro.',
      outroExemplo: 'Se você tem =A1*$B$1 na célula C1 e copia para C2, a fórmula vira =A2*$B$1. O A1 virou A2 (relativa mudou), mas o $B$1 continuou igual (absoluta travou). É assim que você fixa uma taxa de juros em uma célula específica.',
      compararConceitos: 'Fórmula × Função. Relativa × Absoluta × Mista. CONT.NÚM × CONT.VALORES. SE × CONT.SE. #DIV/0! × #VALOR! × #REF!.',
      mostrarPegadinha: 'Cuidado: =A1+B1+C1 e =SOMA(A1:C1) NÃO são sempre equivalentes. Se A1 contiver "abc" (texto), =A1+B1+C1 dá #VALOR!, enquanto =SOMA(A1:C1) ignora o texto e soma apenas os números. A banca adora testar isso.',
      comoApareceEmConcurso: 'Interpretação de fórmulas, referências, funções e erros. Altíssima frequência.',
      fazerPergunta: {
        pergunta: 'Qual a diferença entre =$A$1 e =A1 em uma fórmula que será copiada?',
        resposta: '=$A$1 é referência ABSOLUTA — ao copiar a fórmula para outra célula, o endereço $A$1 permanece IGUAL. =A1 é relativa — ao copiar para a célula abaixo, vira =A2; para a direita, vira =B1. Use $ para fixar células específicas (ex.: uma taxa em B1 que não deve mudar).'
      }
    }
  },

  /* ============================================================
     INF-07 — Internet, Web e Navegadores
  ============================================================ */
  'INF-07': {
    id: 'L-INF-07',
    moduloId: 'INF-07',
    objetivo: 'Compreender a diferença entre internet, Web, intranet e extranet; dominar o uso de navegadores (Edge, Chrome, Firefox); entender abas, favoritos, histórico, downloads, cache e cookies; identificar URL, HTTPS e certificados; compreender upload, download e navegação privada. Foco em interpretação de situações reais de navegação.',
    prerequisitos: [],

    introducao: 'Internet e navegadores aparecem em quase toda prova de Informática. A banca não cobra "decoreba" de menus — cobra CONCEITOS: internet × Web × intranet × extranet, HTTP × HTTPS, cache × cookies, navegação privada × normal. É um módulo muito interpretativo e de alta frequência.',

    explicacaoSimples: 'Pense na Internet como a "rede mundial" — a infraestrutura física que conecta computadores no mundo todo. A Web (World Wide Web) é um SERVIÇO que roda sobre a Internet — é o conjunto de páginas que você acessa pelo navegador. Confundir internet com Web é o erro clássico. E dentro das empresas existem a intranet (rede interna privada) e a extranet (extensão da intranet para parceiros).',

    explicacaoTecnica: 'INTERNET: rede mundial de computadores — infraestrutura física e lógica. WEB (WWW): um dos serviços da Internet — sistema de documentos hipermídia acessados via navegador. INTRANET: rede PRIVADA restrita a uma organização — usa tecnologia Web, mas é fechada. EXTRANET: extensão da intranet — permite acesso a parceiros externos autorizados. NAVEGADORES: Edge (Microsoft), Chrome (Google), Firefox (Mozilla), Safari (Apple), Opera. FUNÇÕES: abas (Ctrl+T abre nova), favoritos (Ctrl+D adiciona), histórico (Ctrl+H), downloads (Ctrl+J), navegação privada (Ctrl+Shift+N no Chrome/Edge; Ctrl+Shift+P no Firefox), barra de endereços. URL: endereço do recurso — estrutura: protocolo://domínio/caminho. Ex.: https://www.exemplo.com.br/pagina. HTTPS: HTTP + criptografia (SSL/TLS) — cadeado na barra de endereços indica conexão segura. CERTIFICADOS DIGITAIS: garantem identidade do site. CACHE: cópias locais de páginas e imagens para acelerar o carregamento. COOKIES: pequenos arquivos que armazenam preferências e sessões. NAVEGAÇÃO PRIVADA: não salva histórico, cookies, formulários — mas NÃO é anônima (provedor e sites ainda veem). UPLOAD: envio de arquivo do seu PC para a internet. DOWNLOAD: recebimento de arquivo da internet para o seu PC. MECANISMOS DE BUSCA: Google, Bing, DuckDuckGo. SINCRONIZAÇÃO: manter favoritos, histórico e senhas entre dispositivos via conta.',

    exemplos: [
      'Internet ≠ Web: a Internet é a infraestrutura; a Web é um serviço (assim como e-mail e FTP também rodam sobre a Internet).',
      'Intranet: página interna de RH que só funciona dentro da empresa.',
      'Extranet: portal que a empresa libera para fornecedores autorizados.',
      'URL: https://www.gov.br/receitafederal/pt-br',
      'HTTPS: cadeado visível → conexão criptografada.',
      'Cache: imagens e páginas guardadas localmente para carregar mais rápido.',
      'Cookies: preferências de site (idioma, login).',
      'Ctrl+D: adiciona aos favoritos. Ctrl+H: abre histórico. Ctrl+J: downloads.',
      'Ctrl+Shift+N (Chrome/Edge): janela anônima.',
      'Upload: enviar arquivo. Download: baixar arquivo.'
    ],

    comparacoes: [
      { termoA: 'Internet', termoB: 'Web', diferenca: 'INTERNET: infraestrutura mundial de redes — conecta bilhões de dispositivos. WEB: um dos SERVIÇOS que rodam sobre a Internet — sistema de páginas acessadas por navegador. A Internet é o "encanamento"; a Web é "a água que passa por ele". Outros serviços: e-mail, FTP, VoIP, streaming.' },
      { termoA: 'Intranet', termoB: 'Extranet', diferenca: 'INTRANET: rede interna de uma organização — restrita a funcionários. EXTRANET: extensão da intranet — permite acesso a parceiros externos autorizados (fornecedores, clientes, filiais). A extranet usa a Internet como meio, mas com acesso controlado.' },
      { termoA: 'HTTP', termoB: 'HTTPS', diferenca: 'HTTP: protocolo de transferência de páginas SEM criptografia — dados trafegam em texto claro. HTTPS: HTTP + criptografia (SSL/TLS) — dados trafegam protegidos. Sites com HTTPS mostram cadeado na barra de endereços. Nunca informe senha ou cartão em site HTTP.' },
      { termoA: 'Cache', termoB: 'Cookies', diferenca: 'CACHE: cópias locais de imagens e páginas — aceleram o carregamento em visitas futuras. COOKIES: pequenos arquivos com dados de sessão, preferências e login — identificam o usuário ao site. Limpar cache libera espaço; limpar cookies desloga e apaga preferências.' },
      { termoA: 'Navegação privada', termoB: 'Navegação normal', diferenca: 'PRIVADA (anônima): não guarda histórico, cookies, formulários nem downloads no navegador — útil em computadores compartilhados. NORMAL: guarda tudo. Importante: a navegação privada NÃO é anônima na Internet — o provedor, a rede corporativa e os sites ainda veem sua atividade.' }
    ],

    aplicacaoEmConcurso: 'Internet e navegadores são altíssima frequência. As bancas cobram: diferença entre internet e Web, intranet e extranet, HTTP e HTTPS, cache e cookies, navegação privada, funções de teclas (Ctrl+D, Ctrl+H, Ctrl+J, Ctrl+T), interpretação de URL, o que é certificado digital. Sempre interpretação de situações.',

    pegadinhas: [
      'Achar que Internet = Web — a Web é só um serviço da Internet.',
      'Achar que navegação privada garante anonimato — NÃO garante.',
      'Confundir cache (arquivos locais para acelerar) com cookies (dados de sessão/preferências).',
      'Achar que HTTPS garante que o site é confiável — garante apenas que a conexão é criptografada.',
      'Achar que intranet precisa de Internet para funcionar — não precisa.',
      'Confundir upload (envio) com download (recebimento).',
      'Achar que apagar o histórico desloga o usuário — são coisas diferentes.'
    ],

    errosComuns: [
      'Confundir Internet com Web.',
      'Achar que a intranet é pública.',
      'Não saber o significado do cadeado HTTPS.',
      'Achar que navegação privada é o mesmo que VPN.'
    ],

    resumo: [
      'Internet = infraestrutura. Web = um dos serviços.',
      'Intranet: rede interna. Extranet: extensão para parceiros.',
      'HTTP: sem criptografia. HTTPS: com criptografia (cadeado).',
      'Cache: cópias locais para acelerar. Cookies: dados de sessão/preferências.',
      'Navegação privada: não salva histórico localmente, mas NÃO é anônima.',
      'Upload = envio. Download = recebimento.',
      'Ctrl+T: nova aba. Ctrl+D: favorito. Ctrl+H: histórico. Ctrl+J: downloads.',
      'Ctrl+Shift+N (Chrome/Edge): janela anônima.',
      'URL: protocolo://domínio/caminho.'
    ],

    modoProfessor: {
      explicarMaisSimples: 'Internet é a estrada; Web é um dos veículos que trafega nela. Intranet é a estrada interna da empresa; extranet é quando a empresa libera uma portinha dessa estrada para parceiros. HTTPS é o cadeado que indica conexão criptografada — bom sinal, mas não garante que o site é honesto.',
      outroExemplo: 'Você digita https://www.exemplo.com.br/pagina no navegador. "https" é o protocolo seguro, "www.exemplo.com.br" é o domínio e "/pagina" é o caminho. Se fosse http (sem s), a conexão seria insegura.',
      compararConceitos: 'Internet × Web. Intranet × Extranet. HTTP × HTTPS. Cache × Cookies. Privada × Normal.',
      mostrarPegadinha: 'Cuidado: "navegação privada garante anonimato total" — FALSO. Ela só não salva dados localmente (histórico, cookies). O provedor, a rede corporativa e os sites continuam vendo sua atividade. A banca adora essa pegadinha.',
      comoApareceEmConcurso: 'Interpretação de conceitos e atalhos. Altíssima frequência.',
      fazerPergunta: {
        pergunta: 'Qual a diferença entre intranet e extranet?',
        resposta: 'INTRANET: rede interna privada, restrita a funcionários de uma organização. EXTRANET: extensão da intranet que permite acesso a parceiros externos AUTORIZADOS (fornecedores, clientes, filiais). Ambas usam tecnologia Web; a diferença está em QUEM pode acessar.'
      }
    }
  },

  /* ============================================================
     INF-11 — Segurança da Informação
  ============================================================ */
  'INF-11': {
    id: 'L-INF-11',
    moduloId: 'INF-11',
    objetivo: 'Compreender os princípios da segurança da informação (confidencialidade, integridade, disponibilidade, autenticidade); identificar ameaças (vírus, worms, trojans, ransomware, spyware, phishing); conhecer mecanismos de proteção (antivírus, firewall, MFA, senhas fortes, atualizações); compreender criptografia, certificados e assinatura digital; adotar boas práticas de privacidade e controle de acesso.',
    prerequisitos: [],

    introducao: 'Segurança da Informação é uma das áreas MAIS cobradas em concursos de todas as bancas. As bancas exploram conceitos fundamentais (CIDA), tipos de ameaças (vírus × worm × trojan × ransomware), mecanismos de proteção (antivírus, firewall, MFA) e boas práticas (senhas, backup, atualizações). É um módulo muito interpretativo e de alta frequência.',

    explicacaoSimples: 'Pense na segurança da informação como proteger uma casa: você quer que só as pessoas certas entrem (confidencialidade), que nada seja alterado sem permissão (integridade), que os recursos estejam sempre disponíveis (disponibilidade) e que ninguém se passe por você (autenticidade). Cada ameaça (vírus, phishing, ransomware) tenta violar um ou mais desses princípios.',

    explicacaoTecnica: 'PRINCÍPIOS (CIDA): CONFIDENCIALIDADE (só quem tem autorização acessa), INTEGRIDADE (dados não são alterados indevidamente), DISPONIBILIDADE (dados e sistemas disponíveis quando necessário), AUTENTICIDADE (garantia de que quem acessa é quem diz ser). Alguns autores incluem LEGALIDADE e IRRETRATABILIDADE. AMEAÇAS: VÍRUS (programa que se replica em arquivos e depende de execução — geralmente precisa da ação do usuário), WORM (autorreplicante — se espalha pela rede SEM ação do usuário), CAVALO DE TROIA/TROJAN (parece programa legítimo, mas abre portas para invasores), RANSOMWARE (criptografa os dados e pede resgate), SPYWARE (espiona o usuário — captura senhas, hábitos), KEYLOGGER (registra teclas digitadas), ADWARE (mostra anúncios), ROOTKIT (esconde invasão em nível profundo). PHISHING (mensagens fraudulentas que imitam instituições legítimas para roubar dados), PHARMING (redireciona para site falso sem o usuário perceber), ENGENHARIA SOCIAL (manipulação psicológica). MECANISMOS DE PROTEÇÃO: ANTIVÍRUS (detecta e remove malwares), FIREWALL (controla tráfego de rede), ATUALIZAÇÕES (corrigem vulnerabilidades), SENHAS FORTES (longas, com maiúsculas, minúsculas, números e símbolos), MFA/AUTENTICAÇÃO MULTIFATOR (combina fatores: algo que você sabe + algo que você tem + algo que você é), GERENCIADORES DE SENHAS. CRIPTOGRAFIA: SIMÉTRICA (mesma chave para cifrar e decifrar — mais rápida, ex.: AES), ASSIMÉTRICA (par de chaves — pública para cifrar, privada para decifrar — ex.: RSA). CERTIFICADO DIGITAL: documento eletrônico que garante identidade — usado em HTTPS. ASSINATURA DIGITAL: garante autenticidade e integridade — usa criptografia assimétrica. ASSINATURA ELETRÔNICA: qualquer forma eletrônica de assinatura (inclui a digital, mas também assinaturas simples). BACKUP: cópia de segurança — completo, incremental, diferencial.',

    exemplos: [
      'Confidencialidade: só o RH acessa dados pessoais dos funcionários.',
      'Integridade: arquivo não pode ser alterado sem registro.',
      'Disponibilidade: sistema do banco online 24h.',
      'Autenticidade: certificado digital garante que o site é quem diz ser.',
      'Vírus: infecta arquivo .exe ao ser executado.',
      'Worm: se espalha pela rede SEM o usuário clicar em nada.',
      'Trojan: instalado como "jogo gratuito", abre porta para invasores.',
      'Ransomware: criptografa arquivos e pede resgate em bitcoin.',
      'Phishing: e-mail falso do "banco" pedindo senha e CPF.',
      'MFA: senha + código SMS + biometria.',
      'Firewall: bloqueia acessos não autorizados à rede.',
      'Backup 3-2-1: 3 cópias, 2 mídias diferentes, 1 fora do local.'
    ],

    comparacoes: [
      { termoA: 'Vírus', termoB: 'Worm', diferenca: 'VÍRUS: precisa de um arquivo hospedeiro e da AÇÃO do usuário (executar o arquivo) para se espalhar. WORM (verme): se autorreplica e se espalha pela REDE automaticamente, SEM ação do usuário. O worm é mais perigoso em redes porque se propaga sozinho.' },
      { termoA: 'Vírus', termoB: 'Cavalo de Troia (Trojan)', diferenca: 'VÍRUS: se replica e infecta arquivos. TROJAN: NÃO se replica — disfarça-se de programa legítimo (jogo, utilitário) para enganar o usuário e abrir portas para invasores. O Trojan depende da enganação; o vírus, da replicação.' },
      { termoA: 'Ransomware', termoB: 'Spyware', diferenca: 'RANSOMWARE: criptografa os dados da vítima e exige resgate para liberar. SPYWARE: espiona o usuário em silêncio — captura senhas, hábitos, dados bancários. O ransomware ataca a DISPONIBILIDADE; o spyware, a CONFIDENCIALIDADE.' },
      { termoA: 'Phishing', termoB: 'Pharming', diferenca: 'PHISHING: mensagem fraudulenta (geralmente e-mail) que imita instituição legítima para o usuário entregar dados. PHARMING: redireciona o usuário para site falso SEM que ele perceba — o DNS é comprometido. No phishing, o usuário "morde a isca"; no pharming, ele é levado ao site falso automaticamente.' },
      { termoA: 'Criptografia simétrica', termoB: 'Criptografia assimétrica', diferenca: 'SIMÉTRICA: mesma chave para cifrar e decifrar — mais rápida, mas exige compartilhamento seguro da chave. ASSIMÉTRICA: par de chaves — pública para cifrar, privada para decifrar — mais lenta, mas resolve o problema do compartilhamento. A assinatura digital e o HTTPS usam criptografia assimétrica.' },
      { termoA: 'Assinatura eletrônica', termoB: 'Assinatura digital', diferenca: 'ELETRÔNICA: qualquer forma eletrônica de assinatura — pode ser desde um simples "clique aqui" até uma assinatura digitalizada. DIGITAL: tipo específico de assinatura eletrônica que usa criptografia assimétrica e certificado digital — garante autenticidade, integridade e não repúdio. Toda assinatura digital é eletrônica, mas nem toda eletrônica é digital.' },
      { termoA: 'Autenticação', termoB: 'Autorização', diferenca: 'AUTENTICAÇÃO: verifica QUEM você é (login + senha, biometria). AUTORIZAÇÃO: define O QUE você pode fazer após autenticado (permissões de leitura, escrita, exclusão). Você se autentica primeiro; depois o sistema verifica o que você está autorizado a fazer.' }
    ],

    aplicacaoEmConcurso: 'Segurança é ALTÍSSIMA frequência em concursos. As bancas cobram: princípios CIDA, diferença entre vírus/worm/trojan/ransomware/spyware, o que é phishing e engenharia social, função do antivírus e do firewall, conceito de MFA, diferença entre criptografia simétrica e assimétrica, certificado digital e assinatura digital, boas práticas de senha e backup.',

    pegadinhas: [
      'Confundir vírus com worm — o worm se espalha sozinho.',
      'Confundir trojan com vírus — o trojan NÃO se replica.',
      'Achar que spyware e ransomware são a mesma coisa — spyware espiona; ransomware criptografa.',
      'Achar que antivírus sozinho garante segurança total — precisa de atualizações + firewall + boas práticas.',
      'Achar que senha "complexa" é suficiente — hoje se recomenda senha LONGA (mesmo que menos complexa) + MFA.',
      'Achar que assinatura eletrônica = assinatura digital — são conceitos diferentes.',
      'Achar que HTTPS garante que o site é honesto — garante apenas criptografia.',
      'Achar que firewall é antivírus — são funções diferentes.',
      'Achar que trocar senha periodicamente é sempre bom — recomendações modernas questionam essa prática (prefira MFA).'
    ],

    errosComuns: [
      'Decorar siglas sem entender os princípios.',
      'Confundir os tipos de malware.',
      'Achar que toda ameaça vem de fora — muitas vêm de dentro (funcionários).',
      'Ignorar a importância da engenharia social.',
      'Achar que backup é o mesmo que sincronização.'
    ],

    resumo: [
      'CIDA: Confidencialidade, Integridade, Disponibilidade, Autenticidade.',
      'Vírus: precisa de ação + arquivo hospedeiro. Worm: autorreplicante. Trojan: disfarçado, não se replica. Ransomware: criptografa e pede resgate. Spyware: espiona.',
      'Phishing: mensagem fraudulenta. Pharming: redirecionamento automático.',
      'Antivírus, firewall, atualizações e MFA são essenciais.',
      'Senha longa + MFA > senha curta complexa.',
      'Criptografia: simétrica (1 chave) × assimétrica (2 chaves).',
      'Certificado digital garante identidade. Assinatura digital garante autenticidade e integridade.',
      'Backup 3-2-1: 3 cópias, 2 mídias, 1 fora do local.',
      'Engenharia social explora o FATOR HUMANO.'
    ],

    modoProfessor: {
      explicarMaisSimples: 'Segurança da informação é proteger a casa: só quem pode entra (confidencialidade), nada é alterado sem permissão (integridade), tudo está disponível quando precisa (disponibilidade) e ninguém se passa por você (autenticidade). Cada ameaça ataca um ou mais desses princípios.',
      outroExemplo: 'Um e-mail falso do "banco" pedindo para clicar em um link e atualizar a senha é PHISHING. Se o link leva a um site parecido com o do banco, é engenharia social + site falso. Se ao clicar o usuário baixa um programa que criptografa os arquivos e pede resgate, é RANSOMWARE.',
      compararConceitos: 'Vírus × Worm × Trojan. Phishing × Pharming. Ransomware × Spyware. Simétrica × Assimétrica. Eletrônica × Digital. Autenticação × Autorização.',
      mostrarPegadinha: 'Cuidado: "vírus e worm são sinônimos" — FALSO. Vírus depende do usuário executar um arquivo. Worm se espalha SOZINHO pela rede. É uma das pegadinhas mais clássicas.',
      comoApareceEmConcurso: 'Interpretação de conceitos e situações práticas. Altíssima frequência.',
      fazerPergunta: {
        pergunta: 'Qual a diferença entre criptografia simétrica e assimétrica?',
        resposta: 'SIMÉTRICA: usa a MESMA chave para cifrar e decifrar — é mais rápida, mas exige compartilhar a chave com segurança. ASSIMÉTRICA: usa DUAS chaves — a PÚBLICA cifra, a PRIVADA decifra — mais lenta, mas resolve o problema do compartilhamento. HTTPS, assinatura digital e certificados usam criptografia assimétrica.'
      }
    }
  }

};
