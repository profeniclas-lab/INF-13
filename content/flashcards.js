/* ============================================================
   FLASHCARDS — Informática para Concursos
   Cobertura: INF-01 a INF-16
   Total: 69 cartões (mínimo 4 por módulo)
   ============================================================ */

window.FLASHCARDS = [

  /* ============================================================
     INF-01 — Fundamentos e Hardware (5)
  ============================================================ */
  {
    id: 'F-INF-01-0001',
    moduloId: 'INF-01',
    topicoId: 'INF-01',
    frente: 'Qual a diferença entre memória RAM e HD/SSD?',
    verso: 'RAM: memória PRINCIPAL, VOLÁTIL (perde conteúdo ao desligar), muito rápida — armazena programas em execução. HD/SSD: armazenamento SECUNDÁRIO, NÃO VOLÁTIL (mantém os dados), mais lento — armazena arquivos permanentemente. Ao abrir um programa, ele é carregado do HD/SSD para a RAM.',
    dificuldade: 2,
    tags: ['RAM', 'HD', 'SSD']
  },
  {
    id: 'F-INF-01-0002',
    moduloId: 'INF-01',
    topicoId: 'INF-01',
    frente: 'O que significa memória volátil e não volátil? Dê exemplos.',
    verso: 'VOLÁTIL: perde o conteúdo ao desligar. Ex.: RAM. NÃO VOLÁTIL: mantém o conteúdo desligada. Ex.: HD, SSD, ROM, pendrive, cartão de memória. Regra prática: se guarda arquivos permanentemente, é não volátil.',
    dificuldade: 1,
    tags: ['volátil', 'memória']
  },
  {
    id: 'F-INF-01-0003',
    moduloId: 'INF-01',
    topicoId: 'INF-01',
    frente: 'Qual a diferença entre HD e SSD?',
    verso: 'HD (Disco Rígido): magnético, com PARTES MÓVEIS (pratos e cabeça de leitura), mais lento, mais barato por GB, maior capacidade, mais suscetível a impacto. SSD (Solid State Drive): memória FLASH, SEM partes móveis, MUITO mais rápido, mais caro por GB, resistente a impacto, silencioso, menor consumo.',
    dificuldade: 2,
    tags: ['HD', 'SSD']
  },
  {
    id: 'F-INF-01-0004',
    moduloId: 'INF-01',
    topicoId: 'INF-01',
    frente: 'Como classificar periféricos em entrada, saída e entrada/saída?',
    verso: 'ENTRADA (enviam dados para o PC): teclado, mouse, scanner, webcam, microfone. SAÍDA (recebem dados do PC): monitor, impressora, caixa de som, projetor. ENTRADA/SAÍDA (fazem os dois): touchscreen, modem, headset (fone + microfone), multifuncional (scanner + impressora).',
    dificuldade: 2,
    tags: ['periféricos']
  },
  {
    id: 'F-INF-01-0005',
    moduloId: 'INF-01',
    topicoId: 'INF-01',
    frente: 'Qual a relação entre bit e byte? E a escala KB → MB → GB → TB?',
    verso: '1 byte = 8 bits. BIT: menor unidade (0 ou 1). BYTE: 8 bits — representa um caractere. Escala: 1 KB ≈ 1024 bytes; 1 MB ≈ 1024 KB; 1 GB ≈ 1024 MB; 1 TB ≈ 1024 GB. Atenção: Mbps (megabits por segundo) ≠ MB (megabytes) — 1 MB ≈ 8 Mbps.',
    dificuldade: 1,
    tags: ['bit', 'byte', 'unidades']
  },

  /* ============================================================
     INF-02 — Windows (5)
  ============================================================ */
  {
    id: 'F-INF-02-0001',
    moduloId: 'INF-02',
    topicoId: 'INF-02',
    frente: 'Qual a diferença entre COPIAR (Ctrl+C) e MOVER (Ctrl+X)?',
    verso: 'COPIAR: duplica — o original PERMANECE na origem e uma cópia vai para o destino. MOVER: transfere — o arquivo SAI da origem e vai para o destino. Atenção ao arrastar: dentro da MESMA unidade, arrastar = mover; entre unidades DIFERENTES (C: → pendrive), arrastar = copiar. Ctrl força cópia; Shift força mover.',
    dificuldade: 2,
    tags: ['copiar', 'mover']
  },
  {
    id: 'F-INF-02-0002',
    moduloId: 'INF-02',
    topicoId: 'INF-02',
    frente: 'Qual a diferença entre Delete e Shift+Delete?',
    verso: 'DELETE (simples): envia o arquivo para a LIXEIRA — pode ser restaurado. SHIFT+DELETE: exclui DEFINITIVAMENTE — não passa pela Lixeira e não há como restaurar pelo Windows. Atenção: arquivos de pendrives e de unidades de rede geralmente NÃO vão para a Lixeira, mesmo com Delete simples.',
    dificuldade: 2,
    tags: ['Lixeira', 'exclusão']
  },
  {
    id: 'F-INF-02-0003',
    moduloId: 'INF-02',
    topicoId: 'INF-02',
    frente: 'Qual a diferença entre ARQUIVO e ATALHO?',
    verso: 'ARQUIVO: contém dados reais (documento, imagem, planilha). ATALHO: pequeno arquivo (.lnk) que APONTA para outro — ícone com seta. Apagar o atalho NÃO apaga o arquivo original; apagar o original deixa o atalho inválido ("quebrado").',
    dificuldade: 1,
    tags: ['atalho', 'arquivo']
  },
  {
    id: 'F-INF-02-0004',
    moduloId: 'INF-02',
    topicoId: 'INF-02',
    frente: 'Qual a diferença entre conta de Administrador e conta Padrão no Windows?',
    verso: 'ADMINISTRADOR: controle total — instala programas, altera configurações do sistema, acessa todos os arquivos, cria/gerencia contas. PADRÃO: uso normal — usa programas e altera arquivos pessoais, mas não instala programas que afetem o sistema nem altera configurações críticas sem senha de administrador.',
    dificuldade: 2,
    tags: ['contas', 'permissões']
  },
  {
    id: 'F-INF-02-0005',
    moduloId: 'INF-02',
    topicoId: 'INF-02',
    frente: 'Quais são os atalhos essenciais do Windows?',
    verso: 'Ctrl+C (copiar), Ctrl+X (recortar/mover), Ctrl+V (colar), Ctrl+Z (desfazer), Ctrl+Y (refazer), Ctrl+A/T (selecionar tudo), Ctrl+Shift+N (nova pasta), F2 (renomear), Delete (Lixeira), Shift+Delete (exclusão definitiva), Win+E (Explorador), Win+L (bloquear sessão), Win+D (área de trabalho), Alt+Tab (alternar janelas), Alt+F4 (fechar), Print Screen (captura tela toda), Win+Shift+S (recorte), Ctrl+Alt+Del (tela de segurança), Ctrl+Shift+Esc (Gerenciador de Tarefas).',
    dificuldade: 2,
    tags: ['atalhos', 'Windows']
  },

  /* ============================================================
     INF-03 — Word (5)
  ============================================================ */
  {
    id: 'F-INF-03-0001',
    moduloId: 'INF-03',
    topicoId: 'INF-03',
    frente: 'Qual a diferença entre SALVAR, SALVAR COMO e EXPORTAR no Word?',
    verso: 'SALVAR (Ctrl+B em PT): grava no MESMO local/formato — sobrescreve o original. SALVAR COMO (F12): escolhe NOVO nome, local ou formato — o original é preservado. EXPORTAR: gera uma CÓPIA em outro formato (ex.: PDF) — o arquivo .docx permanece intacto e editável.',
    dificuldade: 2,
    tags: ['salvar', 'exportar']
  },
  {
    id: 'F-INF-03-0002',
    moduloId: 'INF-03',
    topicoId: 'INF-03',
    frente: 'Qual a diferença entre QUEBRA DE PÁGINA e QUEBRA DE SEÇÃO?',
    verso: 'QUEBRA DE PÁGINA (Ctrl+Enter): apenas inicia nova página — a formatação continua igual (mesmo cabeçalho, mesmas margens). QUEBRA DE SEÇÃO: divide o documento em BLOCOS independentes — permite cabeçalhos, margens e até orientações diferentes (retrato/paisagem) em cada seção. Use seção quando precisar de formatações distintas no mesmo arquivo.',
    dificuldade: 3,
    tags: ['quebra de página', 'quebra de seção']
  },
  {
    id: 'F-INF-03-0003',
    moduloId: 'INF-03',
    topicoId: 'INF-03',
    frente: 'Quais os atalhos do Word em PORTUGUÊS que costumam confundir?',
    verso: 'Em PT-BR: Ctrl+B = SALVAR (não negrito!). Ctrl+S = SUBLINHADO (não salvar!). Ctrl+N = NEGRITO. Ctrl+I = ITÁLICO. Ctrl+E = centralizar. Ctrl+J = justificar. Ctrl+Q = alinhar à esquerda. Ctrl+G = alinhar à direita. Ctrl+U = Localizar e Substituir. Em inglês é diferente: Ctrl+B = bold e Ctrl+S = save.',
    dificuldade: 3,
    tags: ['atalhos', 'Word PT-BR']
  },
  {
    id: 'F-INF-03-0004',
    moduloId: 'INF-03',
    topicoId: 'INF-03',
    frente: 'Como funciona o SUMÁRIO AUTOMÁTICO no Word?',
    verso: 'O sumário automático é gerado a partir dos ESTILOS aplicados (Título 1, Título 2, Normal). Sem estilos, o sumário não é gerado. Para criar: aplique os estilos aos títulos e use Referências → Sumário. Se o documento for editado, basta atualizar o sumário para refletir as alterações.',
    dificuldade: 2,
    tags: ['sumário', 'estilos']
  },
  {
    id: 'F-INF-03-0005',
    moduloId: 'INF-03',
    topicoId: 'INF-03',
    frente: 'O que é cabeçalho e rodapé no Word?',
    verso: 'CABEÇALHO: área fixa no TOPO das páginas. RODAPÉ: área fixa na BASE das páginas. Servem para inserir conteúdo repetido — título do documento, nome do autor, número de página, data. Aparecem em TODAS as páginas por padrão (ou por seção, se configurado diferente). Numeração automática: Inserir → Número de Página.',
    dificuldade: 1,
    tags: ['cabeçalho', 'rodapé']
  },

  /* ============================================================
     INF-04 — Excel (6)
  ============================================================ */
  {
    id: 'F-INF-04-0001',
    moduloId: 'INF-04',
    topicoId: 'INF-04',
    frente: 'Qual a diferença entre referência RELATIVA, ABSOLUTA e MISTA no Excel?',
    verso: 'RELATIVA (A1): muda ao copiar a fórmula. ABSOLUTA ($A$1): o "$" trava — NÃO muda ao copiar. MISTA ($A1 ou A$1): trava apenas a coluna OU a linha. Tecla F4 alterna entre A1 → $A$1 → A$1 → $A1. Use absoluta para fixar células específicas (ex.: taxa de juros).',
    dificuldade: 3,
    tags: ['referências', 'Excel']
  },
  {
    id: 'F-INF-04-0002',
    moduloId: 'INF-04',
    topicoId: 'INF-04',
    frente: 'Qual a diferença entre FÓRMULA e FUNÇÃO?',
    verso: 'FÓRMULA: expressão matemática escrita pelo usuário. Ex.: =A1+B1. FUNÇÃO: fórmula PRONTA com nome específico. Ex.: =SOMA(A1:A10). Toda função é uma fórmula (começa com =), mas nem toda fórmula é função. Funções evitam cálculos longos e têm sintaxe própria.',
    dificuldade: 2,
    tags: ['fórmula', 'função']
  },
  {
    id: 'F-INF-04-0003',
    moduloId: 'INF-04',
    topicoId: 'INF-04',
    frente: 'Qual a ordem de cálculo no Excel?',
    verso: '1º PARÊNTESES; 2º POTÊNCIA (^); 3º MULTIPLICAÇÃO e DIVISÃO (esquerda para direita); 4º SOMA e SUBTRAÇÃO. Ex.: =2+3*4 = 14 (não 20); =(2+3)*4 = 20. A banca cobra muito essa diferença.',
    dificuldade: 2,
    tags: ['ordem de cálculo']
  },
  {
    id: 'F-INF-04-0004',
    moduloId: 'INF-04',
    topicoId: 'INF-04',
    frente: 'Qual a diferença entre CONT.NÚM e CONT.VALORES?',
    verso: 'CONT.NÚM(intervalo): conta apenas células com NÚMEROS — ignora texto e vazias. CONT.VALORES(intervalo): conta células NÃO VAZIAS — inclui números, textos e datas. Se o intervalo tiver 6 números e 2 textos: CONT.NÚM = 6; CONT.VALORES = 8.',
    dificuldade: 3,
    tags: ['CONT.NÚM', 'CONT.VALORES']
  },
  {
    id: 'F-INF-04-0005',
    moduloId: 'INF-04',
    topicoId: 'INF-04',
    frente: 'Qual a diferença entre SE e CONT.SE?',
    verso: 'SE(teste; valor_se_verdadeiro; valor_se_falso): RETORNA um valor conforme o teste. Ex.: =SE(A1>=7;"Aprovado";"Reprovado"). CONT.SE(intervalo; critério): CONTA quantas células atendem ao critério. Ex.: =CONT.SE(A1:A10;">7") conta quantas células são maiores que 7.',
    dificuldade: 2,
    tags: ['SE', 'CONT.SE']
  },
  {
    id: 'F-INF-04-0006',
    moduloId: 'INF-04',
    topicoId: 'INF-04',
    frente: 'O que significam as mensagens de erro #DIV/0!, #VALOR!, #REF! e #N/A?',
    verso: '#DIV/0!: divisão por zero ou por célula vazia. #VALOR!: operação com tipo errado (ex.: somar texto com número). #REF!: referência inválida (célula foi excluída). #N/A: valor não disponível (ex.: PROCV sem correspondência). #NOME?: nome de função digitado errado. A banca cobra a interpretação de cada uma.',
    dificuldade: 3,
    tags: ['erros Excel']
  },

  /* ============================================================
     INF-05 — PowerPoint (4)
  ============================================================ */
  {
    id: 'F-INF-05-0001',
    moduloId: 'INF-05',
    topicoId: 'INF-05',
    frente: 'Qual a diferença entre TRANSIÇÃO e ANIMAÇÃO no PowerPoint?',
    verso: 'TRANSIÇÃO: efeito aplicado à PASSAGEM entre um slide e outro — acontece UMA vez por slide. Ex.: slide surge dissolvendo, deslizando. ANIMAÇÃO: efeito aplicado a OBJETOS dentro do slide (texto, imagem, forma). Ex.: título aparece letra por letra; imagem gira. Regra: TRANSIÇÃO = entre slides; ANIMAÇÃO = dentro do slide.',
    dificuldade: 2,
    tags: ['transição', 'animação']
  },
  {
    id: 'F-INF-05-0002',
    moduloId: 'INF-05',
    topicoId: 'INF-05',
    frente: 'Qual a diferença entre TEMA e LAYOUT no PowerPoint?',
    verso: 'TEMA: conjunto de cores, fontes e efeitos aplicado a TODA a apresentação — mantém identidade visual. LAYOUT: disposição dos elementos em UM slide específico (título + conteúdo, duas colunas, apenas título etc.). Você pode trocar o layout de um slide sem mudar o tema da apresentação.',
    dificuldade: 2,
    tags: ['tema', 'layout']
  },
  {
    id: 'F-INF-05-0003',
    moduloId: 'INF-05',
    topicoId: 'INF-05',
    frente: 'Qual a diferença entre F5 e Shift+F5 no PowerPoint?',
    verso: 'F5: inicia a apresentação a partir do PRIMEIRO slide. Shift+F5: inicia a partir do SLIDE ATUAL (onde o cursor está). Durante a apresentação: Esc (sair), B (tela preta), W (tela branca). Outros: Ctrl+M (novo slide), Ctrl+D (duplicar slide).',
    dificuldade: 2,
    tags: ['F5', 'apresentação']
  },
  {
    id: 'F-INF-05-0004',
    moduloId: 'INF-05',
    topicoId: 'INF-05',
    frente: 'Qual a diferença entre .pptx e .ppsx no PowerPoint?',
    verso: '.PPTX: formato padrão de apresentação — abre em modo de EDIÇÃO. .PPSX: formato de "apresentação de slides" — abre DIRETO em modo de apresentação (tela cheia). Útil para enviar a alguém que só vai assistir, não editar. Outros formatos de exportação: PDF (distribuição), vídeo (.mp4), imagens.',
    dificuldade: 2,
    tags: ['formatos', 'pptx', 'ppsx']
  },

  /* ============================================================
     INF-06 — LibreOffice (4)
  ============================================================ */
  {
    id: 'F-INF-06-0001',
    moduloId: 'INF-06',
    topicoId: 'INF-06',
    frente: 'Qual a correspondência entre os aplicativos do LibreOffice e do Microsoft Office?',
    verso: 'LIBREOFFICE → OFFICE: Writer → Word (texto). Calc → Excel (planilha). Impress → PowerPoint (apresentação). Base → Access (banco de dados). Draw → não tem correspondente direto (desenho vetorial). Math → fórmulas matemáticas.',
    dificuldade: 1,
    tags: ['LibreOffice', 'correspondência']
  },
  {
    id: 'F-INF-06-0002',
    moduloId: 'INF-06',
    topicoId: 'INF-06',
    frente: 'Quais os formatos NATIVOS do LibreOffice Writer, Calc e Impress?',
    verso: 'Writer: .odt (OpenDocument Text). Calc: .ods (OpenDocument Spreadsheet). Impress: .odp (OpenDocument Presentation). Todos são do padrão ODF (OpenDocument Format, ISO/IEC 26300) — aberto. Os formatos .docx, .xlsx e .pptx são do Microsoft Office — o LibreOffice os abre e salva, mas não são nativos.',
    dificuldade: 2,
    tags: ['ODF', 'formatos']
  },
  {
    id: 'F-INF-06-0003',
    moduloId: 'INF-06',
    topicoId: 'INF-06',
    frente: 'O LibreOffice é 100% compatível com o Microsoft Office?',
    verso: 'NÃO. LibreOffice abre e salva em .docx, .xlsx e .pptx, mas a compatibilidade não é total: formatações complexas (SmartArt, tabelas elaboradas), macros VBA e fontes exclusivas podem sofrer alterações. O padrão de salvamento do LibreOffice é ODF; para Office, use "Salvar como" e escolha o formato desejado.',
    dificuldade: 2,
    tags: ['compatibilidade']
  },
  {
    id: 'F-INF-06-0004',
    moduloId: 'INF-06',
    topicoId: 'INF-06',
    frente: 'Qual o separador de argumentos nas funções do LibreOffice Calc em português?',
    verso: 'Em versões em PORTUGUÊS do Brasil do Calc, o separador de argumentos é PONTO E VÍRGULA: =SOMA(A1;A10); =SE(A1>=7;"Aprovado";"Reprovado"). No Excel em INGLÊS, o separador é a VÍRGULA. Em versões do Excel em português, também pode ser ponto e vírgula. Sempre leia o enunciado para ver o padrão usado.',
    dificuldade: 3,
    tags: ['Calc', 'separador']
  },

  /* ============================================================
     INF-07 — Internet e Navegadores (5)
  ============================================================ */
  {
    id: 'F-INF-07-0001',
    moduloId: 'INF-07',
    topicoId: 'INF-07',
    frente: 'Qual a diferença entre INTERNET e WEB?',
    verso: 'INTERNET: infraestrutura mundial de redes — conecta bilhões de dispositivos. É o "encanamento". WEB (WWW): um dos SERVIÇOS que rodam sobre a Internet — conjunto de páginas acessadas por navegador. É "a água que passa pelo encanamento". Outros serviços: e-mail, FTP, VoIP, streaming. A Internet é maior que a Web.',
    dificuldade: 2,
    tags: ['internet', 'Web']
  },
  {
    id: 'F-INF-07-0002',
    moduloId: 'INF-07',
    topicoId: 'INF-07',
    frente: 'Qual a diferença entre INTRANET e EXTRANET?',
    verso: 'INTRANET: rede interna privada de uma organização — restrita a funcionários. EXTRANET: extensão da intranet — permite acesso a parceiros externos AUTORIZADOS (fornecedores, clientes, filiais). Ambas usam tecnologia Web; a diferença está em QUEM pode acessar.',
    dificuldade: 2,
    tags: ['intranet', 'extranet']
  },
  {
    id: 'F-INF-07-0003',
    moduloId: 'INF-07',
    topicoId: 'INF-07',
    frente: 'Qual a diferença entre HTTP e HTTPS?',
    verso: 'HTTP: protocolo SEM criptografia — dados trafegam em texto claro. HTTPS: HTTP + criptografia (SSL/TLS) — dados trafegam protegidos. Sites com HTTPS mostram um CADEADO na barra de endereços. Atenção: o cadeado garante criptografia, mas NÃO garante que o site é honesto.',
    dificuldade: 2,
    tags: ['HTTP', 'HTTPS']
  },
  {
    id: 'F-INF-07-0004',
    moduloId: 'INF-07',
    topicoId: 'INF-07',
    frente: 'Qual a diferença entre CACHE e COOKIES?',
    verso: 'CACHE: cópias locais de imagens e páginas — aceleram o carregamento em visitas futuras. COOKIES: pequenos arquivos com dados de sessão, preferências e login — identificam o usuário ao site. Limpar cache libera espaço; limpar cookies desloga e apaga preferências.',
    dificuldade: 2,
    tags: ['cache', 'cookies']
  },
  {
    id: 'F-INF-07-0005',
    moduloId: 'INF-07',
    topicoId: 'INF-07',
    frente: 'A navegação privada (anônima) garante anonimato total?',
    verso: 'NÃO. A navegação privada NÃO salva histórico, cookies e formulários no DISPOSITIVO local — útil em computadores compartilhados. Mas o PROVEDOR, a REDE CORPORATIVA e os SITES ainda veem sua atividade. Para anonimato real seria necessário VPN ou Tor. Atalhos: Ctrl+Shift+N (Chrome/Edge); Ctrl+Shift+P (Firefox).',
    dificuldade: 3,
    tags: ['navegação privada']
  },

  /* ============================================================
     INF-08 — Correio Eletrônico (5)
  ============================================================ */
  {
    id: 'F-INF-08-0001',
    moduloId: 'INF-08',
    topicoId: 'INF-08',
    frente: 'Qual a diferença entre Cc e Cco?',
    verso: 'CC (Com Cópia): destinatários VISÍVEIS a todos. CCO (Com Cópia Oculta): destinatários OCULTOS — apenas o remetente sabe que eles receberam. Use Cco em listas grandes para preservar a privacidade dos e-mails. "Responder a todos" NÃO inclui quem está em Cco.',
    dificuldade: 2,
    tags: ['Cc', 'Cco']
  },
  {
    id: 'F-INF-08-0002',
    moduloId: 'INF-08',
    topicoId: 'INF-08',
    frente: 'Qual a diferença entre RESPONDER, RESPONDER A TODOS e ENCAMINHAR?',
    verso: 'RESPONDER: envia resposta APENAS ao remetente original. RESPONDER A TODOS: envia ao remetente + destinatários em Para e Cc (NÃO inclui Cco). ENCAMINHAR: envia a mensagem recebida para NOVAS pessoas — não é uma resposta, é um repasse. Cuidado com "responder a todos" desnecessário — gera spam e exposição.',
    dificuldade: 2,
    tags: ['responder', 'encaminhar']
  },
  {
    id: 'F-INF-08-0003',
    moduloId: 'INF-08',
    topicoId: 'INF-08',
    frente: 'Qual a diferença entre SMTP, POP3 e IMAP?',
    verso: 'SMTP (Simple Mail Transfer Protocol): ENVIO de e-mail. POP3: RECEBIMENTO — baixa as mensagens e geralmente as REMOVE do servidor (dificulta sincronização). IMAP: RECEBIMENTO — mantém no SERVIDOR e SINCRONIZA entre dispositivos (ideal para celular + computador). Hoje o IMAP é o mais recomendado.',
    dificuldade: 3,
    tags: ['SMTP', 'POP3', 'IMAP']
  },
  {
    id: 'F-INF-08-0004',
    moduloId: 'INF-08',
    topicoId: 'INF-08',
    frente: 'Qual a diferença entre SPAM e PHISHING?',
    verso: 'SPAM: mensagem NÃO SOLICITADA, geralmente publicitária — incômodo, mas não necessariamente malicioso. PHISHING: mensagem FRAUDULENTA que imita instituições legítimas (banco, governo) para ROUBAR DADOS (senhas, CPF, cartão). Toda phishing é uma ameaça séria. A banca explora a confusão entre os dois.',
    dificuldade: 2,
    tags: ['spam', 'phishing']
  },
  {
    id: 'F-INF-08-0005',
    moduloId: 'INF-08',
    topicoId: 'INF-08',
    frente: 'Como identificar um e-mail de phishing?',
    verso: 'Sinais: (1) remetente suspeito (verifique o endereço real, não apenas o nome exibido); (2) erros de português; (3) urgência exagerada ("sua conta será bloqueada em 24h"); (4) pedido de senha, CPF ou dados bancários; (5) links duvidosos (passe o mouse para ver o destino); (6) anexos inesperados (.exe, .scr, .zip). Boa prática: NÃO clicar; acessar o site oficial digitando o endereço no navegador; denunciar.',
    dificuldade: 3,
    tags: ['phishing', 'segurança']
  },

  /* ============================================================
     INF-09 — Redes (5)
  ============================================================ */
  {
    id: 'F-INF-09-0001',
    moduloId: 'INF-09',
    topicoId: 'INF-09',
    frente: 'Qual a diferença entre LAN, MAN e WAN?',
    verso: 'LAN (Local Area Network): rede LOCAL de curta distância — casa, escritório, escola. MAN (Metropolitan Area Network): abrange uma CIDADE. WAN (Wide Area Network): rede AMPLA — países e continentes. A Internet é a maior WAN. PAN: rede pessoal (Bluetooth). Classificação pela ABRANGÊNCIA.',
    dificuldade: 2,
    tags: ['LAN', 'MAN', 'WAN']
  },
  {
    id: 'F-INF-09-0002',
    moduloId: 'INF-09',
    topicoId: 'INF-09',
    frente: 'Qual a diferença entre MODEM, ROTEADOR e SWITCH?',
    verso: 'MODEM: modula/demodula o sinal da operadora — converte o sinal da fibra/cabo em digital. ROTEADOR: conecta redes DIFERENTES e distribui a Internet entre os dispositivos da casa (Wi-Fi + cabo); atribui IPs e faz NAT. SWITCH: conecta dispositivos dentro da MESMA rede (LAN) — encaminha por endereço MAC. PONTO DE ACESSO: fornece Wi-Fi.',
    dificuldade: 3,
    tags: ['modem', 'roteador', 'switch']
  },
  {
    id: 'F-INF-09-0003',
    moduloId: 'INF-09',
    topicoId: 'INF-09',
    frente: 'Qual a diferença entre IPv4 e IPv6?',
    verso: 'IPv4: 32 bits — formato 192.168.0.1 — cerca de 4,3 bilhões de endereços (esgotados). IPv6: 128 bits — formato 2001:db8::1 — praticamente ilimitado (3,4 × 10³⁸ endereços). O IPv6 foi criado para resolver o esgotamento do IPv4.',
    dificuldade: 2,
    tags: ['IPv4', 'IPv6']
  },
  {
    id: 'F-INF-09-0004',
    moduloId: 'INF-09',
    topicoId: 'INF-09',
    frente: 'Qual a diferença entre DNS e DHCP?',
    verso: 'DNS (Domain Name System): TRADUZ nomes em IPs — "www.google.com" → "142.250.79.46". É a "agenda telefônica" da Internet. DHCP (Dynamic Host Configuration Protocol): DISTRIBUI IPs automaticamente aos dispositivos que se conectam à rede. É o "balcão de cadastro". Um resolve nomes; o outro atribui endereços.',
    dificuldade: 2,
    tags: ['DNS', 'DHCP']
  },
  {
    id: 'F-INF-09-0005',
    moduloId: 'INF-09',
    topicoId: 'INF-09',
    frente: 'Qual a diferença entre LARGURA DE BANDA e LATÊNCIA?',
    verso: 'LARGURA DE BANDA: capacidade MÁXIMA de transmissão — quanto dado cabe por segundo (Mbps). É a "largura da estrada". LATÊNCIA: TEMPO DE RESPOSTA — quanto tempo o dado leva para ir e voltar (ms). É o "tempo de viagem". Banda alta + latência alta = navegação travada. Precisa das duas coisas.',
    dificuldade: 3,
    tags: ['banda', 'latência']
  },

  /* ============================================================
     INF-10 — Nuvem (4)
  ============================================================ */
  {
    id: 'F-INF-10-0001',
    moduloId: 'INF-10',
    topicoId: 'INF-10',
    frente: 'Qual a diferença entre SINCRONIZAÇÃO e BACKUP?',
    verso: 'SINCRONIZAÇÃO: mantém arquivos IGUAIS em todos os dispositivos e na nuvem — se você apagar localmente, apaga na nuvem também. BACKUP: cópia de SEGURANÇA SEPARADA — alterações e exclusões NÃO afetam o backup. Se um ransomware criptografar arquivos sincronizados, a nuvem também é afetada. Backup protege; sincronização apenas mantém versões iguais.',
    dificuldade: 3,
    tags: ['sincronização', 'backup']
  },
  {
    id: 'F-INF-10-0002',
    moduloId: 'INF-10',
    topicoId: 'INF-10',
    frente: 'Qual a diferença entre SaaS, PaaS e IaaS?',
    verso: 'SAAS (Software as a Service): software PRONTO para o usuário final. Ex.: Gmail, Microsoft 365, Google Docs. PAAS (Platform as a Service): PLATAFORMA para desenvolvedores criarem e hospedarem aplicações. Ex.: Google App Engine, Azure App Service. IAAS (Infrastructure as a Service): INFRAESTRUTURA alugada — máquinas virtuais, redes, armazenamento. Ex.: AWS EC2, Azure VM. SaaS é para usar; PaaS para desenvolver; IaaS para controlar.',
    dificuldade: 3,
    tags: ['SaaS', 'PaaS', 'IaaS']
  },
  {
    id: 'F-INF-10-0003',
    moduloId: 'INF-10',
    topicoId: 'INF-10',
    frente: 'Qual a diferença entre LINK PÚBLICO e LINK RESTRITO no compartilhamento em nuvem?',
    verso: 'LINK PÚBLICO: qualquer pessoa com o link acessa — risco de vazamento. LINK RESTRITO: só convidados explicitamente autorizados acessam — mais seguro. Boas práticas: prefira RESTRITO para dados sensíveis; revise periodicamente os compartilhamentos ativos; remova acessos de quem não precisa mais.',
    dificuldade: 2,
    tags: ['compartilhamento', 'nuvem']
  },
  {
    id: 'F-INF-10-0004',
    moduloId: 'INF-10',
    topicoId: 'INF-10',
    frente: 'Quais são os três estados de um arquivo em nuvem?',
    verso: 'LOCAL: só no seu dispositivo — acessível sem Internet; se o dispositivo quebrar, perde. SINCRONIZADO: disponível localmente e na nuvem — ocupa espaço e reflete alterações. SOMENTE ON-LINE: só na nuvem — ocupa espaço mínimo no dispositivo; exige Internet para abrir. Útil em dispositivos com pouco espaço.',
    dificuldade: 2,
    tags: ['nuvem', 'estados']
  },

  /* ============================================================
     INF-11 — Segurança da Informação (6)
  ============================================================ */
  {
    id: 'F-INF-11-0001',
    moduloId: 'INF-11',
    topicoId: 'INF-11',
    frente: 'Quais são os 4 princípios fundamentais da segurança da informação (CIDA)?',
    verso: 'CONFIDENCIALIDADE: só quem tem autorização acessa. INTEGRIDADE: dados não são alterados indevidamente. DISPONIBILIDADE: dados e sistemas disponíveis quando necessário. AUTENTICIDADE: garantia de que quem acessa é quem diz ser. Alguns autores incluem LEGALIDADE e IRRETRATABILIDADE.',
    dificuldade: 2,
    tags: ['CIDA', 'princípios']
  },
  {
    id: 'F-INF-11-0002',
    moduloId: 'INF-11',
    topicoId: 'INF-11',
    frente: 'Qual a diferença entre VÍRUS e WORM?',
    verso: 'VÍRUS: precisa de um arquivo HOSPEDEIRO e da AÇÃO do usuário (executar o arquivo) para se espalhar. WORM (verme): se AUTORREPLICA e se espalha pela REDE automaticamente, SEM ação do usuário. O worm é mais perigoso em redes porque se propaga sozinho. Pegadinha clássica.',
    dificuldade: 2,
    tags: ['vírus', 'worm']
  },
  {
    id: 'F-INF-11-0003',
    moduloId: 'INF-11',
    topicoId: 'INF-11',
    frente: 'Qual a diferença entre VÍRUS e TROJAN (cavalo de Troia)?',
    verso: 'VÍRUS: se REPLICA e infecta arquivos. TROJAN: NÃO se replica — DISFARÇA-SE de programa legítimo (jogo, utilitário) para enganar o usuário e abrir portas para invasores. O Trojan depende da ENGANAÇÃO; o vírus, da REPLICAÇÃO. Trojan não é vírus nem worm.',
    dificuldade: 2,
    tags: ['trojan', 'vírus']
  },
  {
    id: 'F-INF-11-0004',
    moduloId: 'INF-11',
    topicoId: 'INF-11',
    frente: 'Qual a diferença entre RANSOMWARE e SPYWARE?',
    verso: 'RANSOMWARE: CRIPTOGRAFA os dados da vítima e exige RESGATE para liberar — ataca a DISPONIBILIDADE. SPYWARE: ESPIONA o usuário em silêncio — captura senhas, hábitos, dados bancários — ataca a CONFIDENCIALIDADE. Ransomware sequestra; spyware espiona.',
    dificuldade: 2,
    tags: ['ransomware', 'spyware']
  },
  {
    id: 'F-INF-11-0005',
    moduloId: 'INF-11',
    topicoId: 'INF-11',
    frente: 'Qual a diferença entre PHISHING e PHARMING?',
    verso: 'PHISHING: mensagem FRAUDULENTA (geralmente e-mail) que imita instituição legítima para o usuário entregar dados — o usuário "morde a isca". PHARMING: REDIRECIONA o usuário para site falso SEM que ele perceba — o DNS é comprometido. No phishing há engajamento; no pharming, redirecionamento automático.',
    dificuldade: 3,
    tags: ['phishing', 'pharming']
  },
  {
    id: 'F-INF-11-0006',
    moduloId: 'INF-11',
    topicoId: 'INF-11',
    frente: 'Qual a diferença entre criptografia SIMÉTRICA e ASSIMÉTRICA?',
    verso: 'SIMÉTRICA: usa a MESMA chave para cifrar e decifrar — mais RÁPIDA, mas exige compartilhar a chave com segurança. Ex.: AES. ASSIMÉTRICA: usa PAR de chaves — PÚBLICA cifra, PRIVADA decifra — mais LENTA, mas resolve o compartilhamento. Ex.: RSA. HTTPS, assinatura digital e certificados usam criptografia assimétrica.',
    dificuldade: 3,
    tags: ['criptografia']
  },

  /* ============================================================
     INF-12 — Backup (4)
  ============================================================ */
  {
    id: 'F-INF-12-0001',
    moduloId: 'INF-12',
    topicoId: 'INF-12',
    frente: 'Qual a diferença entre backup COMPLETO, INCREMENTAL e DIFERENCIAL?',
    verso: 'COMPLETO: copia TODOS os arquivos selecionados — base dos demais. INCREMENTAL: copia o que mudou desde o ÚLTIMO backup (de qualquer tipo) — cada backup é pequeno; restaurar exige completo + TODOS os incrementais. DIFERENCIAL: copia tudo que mudou desde o ÚLTIMO COMPLETO — cada backup cresce; restaurar exige completo + último diferencial. Incremental = rápido de fazer, lento de restaurar; diferencial = o contrário.',
    dificuldade: 3,
    tags: ['backup', 'tipos']
  },
  {
    id: 'F-INF-12-0002',
    moduloId: 'INF-12',
    topicoId: 'INF-12',
    frente: 'O que é a estratégia 3-2-1 de backup?',
    verso: '3 CÓPIAS dos dados, em 2 MÍDIAS DIFERENTES, sendo 1 FORA DO LOCAL. Ex.: original no PC + backup em HD externo + backup na nuvem (ou em outro escritório). Protege contra falha de hardware, roubo, incêndio e ransomware. É a recomendação clássica para garantir recuperação.',
    dificuldade: 2,
    tags: ['backup', '3-2-1']
  },
  {
    id: 'F-INF-12-0003',
    moduloId: 'INF-12',
    topicoId: 'INF-12',
    frente: 'Qual a diferença entre BACKUP e SINCRONIZAÇÃO?',
    verso: 'BACKUP: cópia de SEGURANÇA em mídia separada — alterações e exclusões no original NÃO afetam o backup. SINCRONIZAÇÃO: mantém arquivos IGUAIS entre dispositivos e nuvem — se apagar localmente, a nuvem reflete. Se um ransomware criptografar a pasta sincronizada, a nuvem também é afetada. Backup é proteção; sincronização é conveniência.',
    dificuldade: 3,
    tags: ['backup', 'sincronização']
  },
  {
    id: 'F-INF-12-0004',
    moduloId: 'INF-12',
    topicoId: 'INF-12',
    frente: 'A Lixeira do Windows é um tipo de backup?',
    verso: 'NÃO. A Lixeira é apenas armazenamento TEMPORÁRIO de arquivos excluídos recentemente. Se o HD falhar, se o arquivo for removido com Shift+Delete ou se a Lixeira for esvaziada, o arquivo se perde. Backup é uma cópia em MÍDIA SEPARADA — protege contra falhas do dispositivo principal.',
    dificuldade: 2,
    tags: ['Lixeira', 'backup']
  },

  /* ============================================================
     INF-13 — PDF e Documentos Digitais (4)
  ============================================================ */
  {
    id: 'F-INF-13-0001',
    moduloId: 'INF-13',
    topicoId: 'INF-13',
    frente: 'Qual a diferença entre documento EDITÁVEL (.docx) e PDF?',
    verso: '.DOCX: EDITÁVEL no Word — o layout pode variar entre dispositivos/fontes. PDF: layout FIXO — preservado em qualquer dispositivo. Difícil de editar (embora existam ferramentas). Ideal para distribuição, impressão e documentos formais. Ao enviar um documento que precisa manter o visual original, use PDF.',
    dificuldade: 1,
    tags: ['PDF', 'docx']
  },
  {
    id: 'F-INF-13-0002',
    moduloId: 'INF-13',
    topicoId: 'INF-13',
    frente: 'Qual a diferença entre DIGITALIZAÇÃO e OCR?',
    verso: 'DIGITALIZAÇÃO: transforma o documento físico em IMAGEM digital (scanner ou celular) — NÃO é texto editável. OCR (Reconhecimento Óptico de Caracteres): converte a IMAGEM em TEXTO editável e pesquisável. Sem OCR, o PDF digitalizado é apenas imagem; com OCR, você pode selecionar, copiar e buscar o texto.',
    dificuldade: 2,
    tags: ['digitalização', 'OCR']
  },
  {
    id: 'F-INF-13-0003',
    moduloId: 'INF-13',
    topicoId: 'INF-13',
    frente: 'Qual a diferença entre ASSINATURA ELETRÔNICA e ASSINATURA DIGITAL?',
    verso: 'ELETRÔNICA: qualquer forma eletrônica de manifestar concordância — desde "clique aqui" ou aceite on-line até assinatura digitalizada. NÃO exige criptografia. DIGITAL: tipo específico de assinatura eletrônica que usa CRIPTOGRAFIA ASSIMÉTRICA + CERTIFICADO DIGITAL. Garante autenticidade, integridade e não repúdio. Toda digital é eletrônica, mas nem toda eletrônica é digital.',
    dificuldade: 3,
    tags: ['assinatura']
  },
  {
    id: 'F-INF-13-0004',
    moduloId: 'INF-13',
    topicoId: 'INF-13',
    frente: 'O que é PDF/A?',
    verso: 'PDF/A é a versão do PDF para ARQUIVAMENTO de LONGO PRAZO — inclui todas as informações necessárias para reproduzir o documento no futuro (fontes embutidas, sem dependência externa). Usado em arquivos públicos e documentos que precisam durar décadas. Não confundir com o PDF comum.',
    dificuldade: 3,
    tags: ['PDF/A', 'arquivamento']
  },

  /* ============================================================
     INF-14 — Software e Ferramentas (4)
  ============================================================ */
  {
    id: 'F-INF-14-0001',
    moduloId: 'INF-14',
    topicoId: 'INF-14',
    frente: 'Qual a diferença entre software de SISTEMA, APLICATIVO e UTILITÁRIO?',
    verso: 'SISTEMA: gerencia hardware e serve de base (Windows, Linux, drivers). APLICATIVO: realiza tarefas do usuário (Word, Excel, navegador). UTILITÁRIO: ferramentas de manutenção (antivírus, compactadores, backup). O sistema é a "fundação"; o aplicativo é o "morador"; o utilitário é a "caixa de ferramentas".',
    dificuldade: 2,
    tags: ['software', 'classificação']
  },
  {
    id: 'F-INF-14-0002',
    moduloId: 'INF-14',
    topicoId: 'INF-14',
    frente: 'Qual a diferença entre ATUALIZAÇÃO (update) e UPGRADE?',
    verso: 'ATUALIZAÇÃO (update): corrige bugs e VULNERABILIDADES da versão atual — mantém a mesma versão, geralmente gratuita e recomendada por segurança. UPGRADE: muda para uma VERSÃO SUPERIOR — pode trazer recursos novos e pode ser paga. Ex.: Windows 10 → 11 é upgrade. Correção de segurança do Windows 11 é atualização.',
    dificuldade: 2,
    tags: ['update', 'upgrade']
  },
  {
    id: 'F-INF-14-0003',
    moduloId: 'INF-14',
    topicoId: 'INF-14',
    frente: 'Qual a diferença entre ZIP, RAR e 7z?',
    verso: 'ZIP: formato UNIVERSAL, nativo do Windows e Mac — abre sem instalar nada. RAR: formato do WinRAR — compacta mais, mas exige programa para extrair (ou ferramentas compatíveis). 7z: formato do 7-Zip — CÓDIGO ABERTO, alta compressão. Todos reduzem o tamanho. Compactar NÃO criptografa por si só — alguns formatos permitem senha.',
    dificuldade: 2,
    tags: ['compactação', 'ZIP', 'RAR', '7z']
  },
  {
    id: 'F-INF-14-0004',
    moduloId: 'INF-14',
    topicoId: 'INF-14',
    frente: 'Qual a diferença entre Print Screen, Alt+Print Screen e Win+Shift+S?',
    verso: 'PRINT SCREEN: captura a TELA TODA para a área de transferência. ALT+PRINT SCREEN: captura apenas a JANELA ATIVA. WIN+SHIFT+S (Windows 10/11): abre a ferramenta de RECORTE — permite selecionar uma área específica. Todos copiam para a área de transferência; depois você cola (Ctrl+V) onde quiser.',
    dificuldade: 2,
    tags: ['captura de tela']
  },

  /* ============================================================
     INF-15 — Linux (4)
  ============================================================ */
  {
    id: 'F-INF-15-0001',
    moduloId: 'INF-15',
    topicoId: 'INF-15',
    frente: 'Quais são as 4 liberdades do software livre?',
    verso: '(1) EXECUTAR o programa para qualquer propósito; (2) ESTUDAR e MODIFICAR o código; (3) REDISTRIBUIR cópias; (4) DISTRIBUIR versões modificadas. "Livre" é sobre LIBERDADE, não preço — pode ser vendido, desde que as liberdades sejam mantidas. Movimento fundado por Richard Stallman.',
    dificuldade: 3,
    tags: ['software livre']
  },
  {
    id: 'F-INF-15-0002',
    moduloId: 'INF-15',
    topicoId: 'INF-15',
    frente: 'Quais as principais diferenças entre Windows e Linux?',
    verso: 'WINDOWS: raiz em C:\\, letras de unidade (C:, D:), separador "\\", CASE-INSENSITIVE (arquivo.txt = ARQUIVO.TXT), sistema proprietário. LINUX: raiz única "/", SEM letras de unidade, separador "/", CASE-SENSITIVE (arquivo.txt ≠ Arquivo.TXT), livre, várias distribuições e ambientes gráficos.',
    dificuldade: 2,
    tags: ['Windows', 'Linux']
  },
  {
    id: 'F-INF-15-0003',
    moduloId: 'INF-15',
    topicoId: 'INF-15',
    frente: 'Qual a diferença entre KERNEL e DISTRIBUIÇÃO Linux?',
    verso: 'KERNEL: o NÚCLEO do sistema — gerencia hardware, processos, memória e arquivos. Linux é o kernel (criado por Linus Torvalds). DISTRIBUIÇÃO: pacote completo — kernel + software GNU + gerenciador de pacotes + ambiente gráfico + aplicativos. Exemplos: Ubuntu, Debian, Fedora, Linux Mint. O kernel é o "coração"; a distro é o "sistema completo".',
    dificuldade: 3,
    tags: ['kernel', 'distribuição']
  },
  {
    id: 'F-INF-15-0004',
    moduloId: 'INF-15',
    topicoId: 'INF-15',
    frente: 'Qual a diferença entre chmod e chown no Linux?',
    verso: 'CHMOD (change mode): altera as PERMISSÕES de um arquivo ou diretório. Ex.: chmod 755 arquivo (dono rwx, grupo r-x, outros r-x). CHOWN (change owner): altera o DONO do arquivo. Ex.: chown usuario arquivo. Permissões: r (leitura, 4), w (escrita, 2), x (execução, 1) — dono, grupo, outros.',
    dificuldade: 3,
    tags: ['chmod', 'chown']
  },

  /* ============================================================
     INF-16 — Aplicada (3)
  ============================================================ */
  {
    id: 'F-INF-16-0001',
    moduloId: 'INF-16',
    topicoId: 'INF-16',
    frente: 'Como escolher a ferramenta certa para cada tarefa no trabalho administrativo?',
    verso: 'Texto (relatório, ofício, carta) → WORD. Cálculos, controles, tabelas → EXCEL. Apresentação → POWERPOINT. Envio formal de documento → E-MAIL com PDF. Colaboração simultânea → GOOGLE DOCS / MICROSOFT 365. Armazenamento/backup → NUVEM + HD externo. Regra: se envolve texto → Word; se envolve números/cálculo → Excel; se envolve apresentação → PowerPoint.',
    dificuldade: 2,
    tags: ['aplicada', 'ferramenta']
  },
  {
    id: 'F-INF-16-0002',
    moduloId: 'INF-16',
    topicoId: 'INF-16',
    frente: 'Qual o procedimento correto para enviar um documento sensível por e-mail?',
    verso: '(1) Exportar para PDF (preserva o layout); (2) se contiver dados sensíveis, PROTEGER com senha; (3) verificar o destinatário correto; (4) usar CCO em listas grandes; (5) assunto claro; (6) NÃO anexar versão editável (.docx); (7) guardar cópia no backup; (8) se for documento oficial com validade, usar ASSINATURA DIGITAL (ICP-Brasil).',
    dificuldade: 3,
    tags: ['aplicada', 'envio seguro']
  },
  {
    id: 'F-INF-16-0003',
    moduloId: 'INF-16',
    topicoId: 'INF-16',
    frente: 'Compartilhar uma planilha na nuvem com a equipe substitui o backup?',
    verso: 'NÃO. Compartilhamento é CONVENIÊNCIA — não é backup. Se um membro da equipe apagar o arquivo (ou se um ransomware criptografar a pasta sincronizada), a nuvem também é afetada. BACKUP é cópia SEPARADA em outra mídia (HD externo, outra nuvem) — protege contra exclusão acidental, ransomware e falhas. Estratégia 3-2-1: 3 cópias, 2 mídias, 1 fora do local.',
    dificuldade: 3,
    tags: ['aplicada', 'backup', 'compartilhamento']
  }

];
