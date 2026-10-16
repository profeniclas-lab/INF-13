/* ============================================================
   AULAS — Módulos de prioridade ALTA
   Preenchidos: INF-01, INF-05, INF-08, INF-10, INF-12
   Próximos lotes: INF-09, INF-13, INF-14, INF-16 (média)
                   INF-06, INF-15 (condicional)
   ============================================================ */

window.LESSONS_ALTA = {

  /* ============================================================
     INF-01 — Fundamentos da Informática e Hardware
  ============================================================ */
  'INF-01': {
    id: 'L-INF-01',
    moduloId: 'INF-01',
    objetivo: 'Compreender os conceitos fundamentais da informática: dados, informação e processamento; hardware, software, firmware e peopleware; componentes internos (processador, memória RAM, armazenamento, placa-mãe); periféricos de entrada, saída e entrada/saída; unidades de medida (bit, byte, KB, MB, GB, TB); diferença entre memória volátil e não volátil.',
    prerequisitos: [],

    introducao: 'Fundamentos é a base conceitual de tudo em Informática. As bancas não cobram profundidade técnica, mas cobram CONCEITOS: o que é hardware, software, memória RAM, HD, SSD, qual a diferença entre bit e byte, o que significa "volátil". Este módulo dá o vocabulário necessário para entender Windows, Excel, redes e segurança.',

    explicacaoSimples: 'Informática é o tratamento automático da informação. Você digita um dado (ex.: "25"), o computador processa (soma, compara, organiza) e produz informação útil ("a média é 25"). Hardware é a parte física (você chuta); software é a parte lógica (você xinga quando trava). Memória RAM é o "rascunho" — rápida, mas some ao desligar. HD/SSD é o "caderno" — lento, mas permanente.',

    explicacaoTecnica: 'DADOS: fatos brutos (números, textos). INFORMAÇÃO: dados processados com significado. PROCESSAMENTO: transformação de dados em informação. HARDWARE: componentes físicos (CPU, RAM, HD, monitor, teclado). SOFTWARE: programas e instruções (Windows, Word, Excel). FIRMWARE: software gravado em hardware (BIOS/UEFI). PEOPLEWARE: pessoas envolvidas no processo. CPU (Processador): executa instruções — tem núcleos, threads, clock (GHz), cache. MEMÓRIA RAM: memória principal, VOLÁTIL (perde conteúdo ao desligar), armazena programas em execução. MEMÓRIA ROM: não volátil, grava firmware. HD (Disco Rígido): magnético, mais lento, mais barato, maior capacidade. SSD: flash, muito mais rápido, mais caro, sem partes móveis. PENDRIVE e CARTÃO DE MEMÓRIA: armazenamento flash removível. ARMAZENAMENTO ÓPTICO: CD (700 MB), DVD (4,7 GB a 8,5 GB), Blu-ray (25 GB a 50 GB). PLACA-MÃE: conecta todos os componentes. PERIFÉRICOS: ENTRADA (teclado, mouse, scanner, webcam, microfone), SAÍDA (monitor, impressora, caixa de som, projetor), ENTRADA/SAÍDA (touchscreen, modem, headset, multifuncional). UNIDADES DE MEDIDA: bit (menor unidade — 0 ou 1), byte (8 bits), KB (1024 bytes), MB (1024 KB), GB (1024 MB), TB (1024 GB), PB (1024 TB). ATENÇÃO: em armazenamento, fabricantes às vezes usam 1 KB = 1000 bytes (base decimal).',

    exemplos: [
      'Dado: "30, 25, 40". Informação: "média = 31,7".',
      'Hardware: monitor, teclado, HD, placa-mãe. Software: Windows, Word, Excel.',
      'Firmware: BIOS/UEFI gravado em chip da placa-mãe.',
      'Memória RAM: 8 GB — volátil. HD: 1 TB — não volátil.',
      'SSD: mais rápido que HD, sem partes móveis, mais caro por GB.',
      'Periférico de entrada: teclado. Saída: monitor. Entrada/saída: touchscreen.',
      '1 byte = 8 bits. 1 KB ≈ 1024 bytes. 1 MB ≈ 1024 KB. 1 GB ≈ 1024 MB. 1 TB ≈ 1024 GB.',
      'Um arquivo de texto de 1 página ≈ 20 KB. Uma foto ≈ 3 MB. Um filme em HD ≈ 4 GB.'
    ],

    comparacoes: [
      { termoA: 'Memória RAM', termoB: 'HD/SSD (armazenamento)', diferenca: 'RAM: memória PRINCIPAL, VOLÁTIL (perde dados ao desligar), muito rápida, armazena programas em execução. HD/SSD: armazenamento SECUNDÁRIO, NÃO VOLÁTIL (mantém dados desligado), mais lento que a RAM, armazena arquivos permanentemente. Ao abrir um programa, ele é carregado do HD para a RAM. Ao desligar, a RAM é limpa — o HD permanece.' },
      { termoA: 'HD', termoB: 'SSD', diferenca: 'HD (Disco Rígido): magnético, com partes móveis (pratos e cabeça de leitura), mais lento, mais barato por GB, maior capacidade, mais suscetível a impacto. SSD (Solid State Drive): memória flash, SEM partes móveis, MUITO mais rápido, mais caro por GB, mais resistente a impacto, silencioso, menor consumo.' },
      { termoA: 'Memória volátil', termoB: 'Memória não volátil', diferenca: 'VOLÁTIL: perde conteúdo ao desligar. Exemplo: RAM. NÃO VOLÁTIL: mantém conteúdo mesmo desligada. Exemplos: HD, SSD, ROM, pendrive, cartão de memória. Regra prática: se guarda arquivos permanentemente, é não volátil.' },
      { termoA: 'Periférico de entrada', termoB: 'Periférico de saída', diferenca: 'ENTRADA: envia dados PARA o computador. Ex.: teclado, mouse, scanner, webcam, microfone, leitor biométrico. SAÍDA: recebe dados DO computador. Ex.: monitor, impressora, caixa de som, projetor. ENTRADA/SAÍDA: fazem os dois. Ex.: touchscreen, modem, headset (fone + microfone), multifuncional (scanner + impressora).' },
      { termoA: 'Hardware', termoB: 'Software', diferenca: 'HARDWARE: parte FÍSICA — você pode tocar. Ex.: CPU, RAM, HD, monitor, teclado. SOFTWARE: parte LÓGICA — programas e instruções. Ex.: Windows, Word, Excel, navegador. Software precisa de hardware para rodar; hardware sem software é inútil.' },
      { termoA: 'bit', termoB: 'byte', diferenca: 'BIT: menor unidade de informação — assume valor 0 ou 1. BYTE: conjunto de 8 bits — representa um caractere. 1 byte = 8 bits. Ao baixar arquivos, velocidade é medida em bits por segundo (Mbps); tamanho em bytes (MB). Atenção: Mbps (megabits) ≠ MB (megabytes) — 1 MB ≈ 8 Mbps.' }
    ],

    aplicacaoEmConcurso: 'Fundamentos aparece como base em todas as provas. As bancas cobram: diferença entre RAM e HD/SSD, memória volátil × não volátil, unidades de medida (bit, byte, KB, MB, GB, TB), classificação de periféricos (entrada, saída, entrada/saída), função do processador, o que é firmware, e a diferença entre hardware e software. Questões diretas de conceito.',

    pegadinhas: [
      'Confundir RAM (volátil) com HD (não volátil) — a banca adora isso.',
      'Achar que o SSD é um tipo de RAM — SSD é armazenamento, RAM é memória.',
      'Confundir bit com byte — 1 byte = 8 bits.',
      'Achar que modem é só periférico de saída — modem é entrada/saída.',
      'Achar que a impressora multifuncional é só de saída — ela é entrada/saída.',
      'Achar que a RAM "guarda" arquivos ao desligar — não guarda.',
      'Confundir Mbps (megabits por segundo) com MB (megabytes).',
      'Achar que ROM é volátil — ROM é não volátil.'
    ],

    errosComuns: [
      'Decorar siglas sem entender a função de cada componente.',
      'Confundir hardware com software.',
      'Achar que processador é "memória".',
      'Não saber a ordem das unidades de medida.',
      'Confundir entrada com saída em periféricos que fazem os dois.'
    ],

    resumo: [
      'Informática = tratamento automático da informação.',
      'Hardware: físico. Software: lógico. Firmware: software no hardware.',
      'RAM: principal, volátil, rápida. HD/SSD: secundário, não volátil.',
      'HD: magnético. SSD: flash, mais rápido.',
      'Periféricos: entrada, saída, entrada/saída.',
      '1 byte = 8 bits. 1 KB = 1024 bytes. 1 MB = 1024 KB. 1 GB = 1024 MB. 1 TB = 1024 GB.',
      'SSD não tem partes móveis; HD tem pratos e cabeça de leitura.'
    ],

    modoProfessor: {
      explicarMaisSimples: 'Pense no computador como uma cozinha. RAM é a bancada (rápida, mas limpa ao fim do dia). HD/SSD é o armário (permanente, mas mais lento para acessar). Processador é o cozinheiro (executa receitas). Hardware são os utensílios; software são as receitas.',
      outroExemplo: 'Quando você abre o Word, ele sai do HD (não volátil) e é carregado na RAM (volátil) para rodar rápido. Você digita o documento — ainda está na RAM. Ao salvar, o Word grava de volta no HD. Se faltar energia antes de salvar, o texto não salvo se perde (estava só na RAM).',
      compararConceitos: 'RAM × HD. Volátil × Não volátil. Hardware × Software. Entrada × Saída. bit × byte.',
      mostrarPegadinha: 'Cuidado: a banca adora dizer "a memória RAM armazena os arquivos permanentemente" — FALSO. Quem armazena permanentemente é o HD/SSD. A RAM só guarda o que está em uso no momento.',
      comoApareceEmConcurso: 'Conceitos diretos. Alta frequência como base para outros módulos.',
      fazerPergunta: {
        pergunta: 'Por que o computador fica mais rápido com SSD?',
        resposta: 'Porque o SSD usa memória FLASH — sem partes móveis, acesso quase instantâneo. O HD tradicional usa discos magnéticos que giram e uma cabeça de leitura que se move fisicamente — muito mais lento. Com SSD, o sistema operacional e os programas carregam em segundos.'
      }
    }
  },

  /* ============================================================
     INF-05 — PowerPoint e Apresentações
  ============================================================ */
  'INF-05': {
    id: 'L-INF-05',
    moduloId: 'INF-05',
    objetivo: 'Dominar o Microsoft PowerPoint: slides, temas, layouts e modelos; inserção e formatação de textos, imagens, formas, tabelas e gráficos; transições entre slides e animações de objetos; modo de apresentação, notas do apresentador; exportação e formatos. Compreender a diferença entre transição e animação.',
    prerequisitos: ['INF-03'],

    introducao: 'PowerPoint é um dos módulos mais cobrados em Informática — junto com Word e Excel, forma o tripé de ferramentas de escritório. A banca cobra conceitos (transição × animação, layout × tema) e o uso prático de cada recurso. É muito interpretativo.',

    explicacaoSimples: 'Imagine o PowerPoint como um "teatro de slides". Você cria slides (as cenas), usa temas e layouts (o figurino), insere textos, imagens e gráficos (os atores), aplica transições (a passagem de uma cena para outra) e animações (o que cada ator faz em cena). O detalhe mais cobrado em prova é justamente diferenciar transição de animação.',

    explicacaoTecnica: 'SLIDE: cada "tela" da apresentação. TEMA: conjunto de cores, fontes e efeitos visuais aplicado a TODA a apresentação. LAYOUT: disposição dos elementos em um slide (título + conteúdo, apenas título, duas colunas etc.). MODELO (template): arquivo pronto com tema + layouts pré-configurados. MODO DE EXIBIÇÃO: Normal (edição), Classificação de Slides (visão geral), Anotações (notas do apresentador), Apresentação de Slides (tela cheia). TRANSIÇÃO: efeito visual aplicado à PASSAGEM de um slide para outro. ANIMAÇÃO: efeito aplicado a OBJETOS (texto, imagem, forma) DENTRO de um slide. NOTAS DO APRESENTADOR: anotações visíveis apenas para quem apresenta — não aparecem para a plateia. ENSAIO DE APRESENTAÇÃO: cronometra o tempo. EXPORTAR: PDF (distribuição), vídeo (.mp4), imagens (.jpg, .png), pacote para CD. FORMATOS: .pptx (padrão 2007+), .ppt (versões antigas), .ppsx (execução automática), .pdf. ATALHOS: F5 (iniciar apresentação desde o começo), Shift+F5 (desde o slide atual), Ctrl+M (novo slide), Ctrl+D (duplicar slide), Esc (sair da apresentação), B (tela preta durante apresentação), W (tela branca).',

    exemplos: [
      'Tema: aplica cores e fontes a TODA a apresentação.',
      'Layout: disposição dos elementos em um slide específico.',
      'Transição: efeito ao passar do slide 1 para o slide 2.',
      'Animação: texto que aparece letra por letra, imagem que gira, forma que desliza.',
      'F5: iniciar apresentação desde o slide 1. Shift+F5: desde o slide atual.',
      'Ctrl+M: novo slide. Ctrl+D: duplicar slide.',
      'B: tela preta durante apresentação. W: tela branca.',
      'Notas do apresentador: visíveis na tela do apresentador, não na plateia.',
      'Exportar para PDF: ideal para distribuir (layout preservado).',
      '.ppsx: abre direto em modo de apresentação.'
    ],

    comparacoes: [
      { termoA: 'Transição', termoB: 'Animação', diferenca: 'TRANSIÇÃO: efeito aplicado à PASSAGEM entre slides — acontece UMA vez por slide (ex.: slide surge deslizando, dissolvendo). ANIMAÇÃO: efeito aplicado a OBJETOS DENTRO do slide — cada objeto (texto, imagem, forma) pode ter sua própria animação (ex.: texto aparece letra por letra; imagem gira; forma desliza da esquerda). Regra: TRANSIÇÃO = entre slides; ANIMAÇÃO = dentro do slide.' },
      { termoA: 'Tema', termoB: 'Layout', diferenca: 'TEMA: conjunto de cores, fontes e efeitos aplicado a TODA a apresentação — mantém identidade visual. LAYOUT: disposição dos elementos em UM slide específico (título + conteúdo, duas colunas, apenas título etc.). Você pode trocar o layout de um slide sem mudar o tema.' },
      { termoA: 'Modelo (template)', termoB: 'Tema', diferenca: 'MODELO: arquivo completo pronto (com slides, layouts, tema). Você pode começar do zero ou usar um modelo. TEMA: apenas o "estilo visual" (cores, fontes, efeitos) — pode ser aplicado a qualquer apresentação. O modelo inclui o tema, mas também estrutura e conteúdo pré-definido.' },
      { termoA: '.pptx', termoB: '.ppsx', diferenca: '.pptx: formato padrão de apresentação — abre em modo de EDIÇÃO. .ppsx: formato de "apresentação de slides" — abre DIRETO em modo de apresentação (tela cheia). Útil para enviar a alguém que só precisa assistir, não editar.' },
      { termoA: 'F5', termoB: 'Shift+F5', diferenca: 'F5: inicia a apresentação a partir do PRIMEIRO slide. Shift+F5: inicia a partir do SLIDE ATUAL. São atalhos muito cobrados porque definem comportamentos diferentes durante o ensaio.' }
    ],

    aplicacaoEmConcurso: 'PowerPoint aparece com boa frequência. As bancas cobram: diferença entre transição e animação (a mais cobrada), tema × layout, atalhos (F5, Shift+F5, Ctrl+M, Ctrl+D), notas do apresentador, formatos de exportação (.pptx, .ppsx, PDF), modo de apresentação. Sempre interpretação.',

    pegadinhas: [
      'Confundir transição com animação — é a pegadinha número 1.',
      'Achar que tema e layout são a mesma coisa.',
      'Achar que .pptx e .ppsx são iguais — o segundo abre em modo de apresentação.',
      'Achar que F5 e Shift+F5 fazem a mesma coisa.',
      'Achar que as notas do apresentador aparecem para a plateia — aparecem apenas na tela do apresentador.',
      'Achar que Ctrl+M salva a apresentação — na verdade, insere novo slide.',
      'Confundir exportar para PDF com salvar em .pptx.'
    ],

    errosComuns: [
      'Decorar menus em vez de entender os conceitos.',
      'Confundir recursos de animação com recursos de transição.',
      'Não saber a diferença entre .pptx, .ppsx e .pdf.',
      'Ignorar o uso das notas do apresentador.'
    ],

    resumo: [
      'PowerPoint: apresentações — .pptx (padrão), .ppsx (apresentação direta), .pdf (distribuição).',
      'Tema: identidade visual da apresentação. Layout: disposição de um slide.',
      'TRANSIÇÃO: entre slides. ANIMAÇÃO: dentro do slide (objetos).',
      'F5: inicia do 1º slide. Shift+F5: do slide atual.',
      'Ctrl+M: novo slide. Ctrl+D: duplicar slide. Esc: sair.',
      'B: tela preta. W: tela branca.',
      'Notas do apresentador: só o apresentador vê.',
      '.ppsx abre direto em modo de apresentação.'
    ],

    modoProfessor: {
      explicarMaisSimples: 'Pense no PowerPoint como uma peça de teatro. TRANSIÇÃO é a cortina que abre/fecha entre cenas (slides). ANIMAÇÃO é o que cada ator (objeto) faz em cena. Se você confundir os dois, erra a questão.',
      outroExemplo: 'Você cria uma apresentação de 5 slides. Ao passar do slide 1 para o 2, aplica uma "dissolução" — isso é TRANSIÇÃO. Dentro do slide 2, o título aparece letra por letra e a imagem entra deslizando — isso são ANIMAÇÕES de objetos.',
      compararConceitos: 'Transição × Animação. Tema × Layout. .pptx × .ppsx. F5 × Shift+F5.',
      mostrarPegadinha: 'Cuidado: "animações são aplicadas à passagem de slides" — FALSO. Animação é para objetos DENTRO do slide. Quem controla a passagem entre slides é a TRANSIÇÃO.',
      comoApareceEmConcurso: 'Interpretação de conceitos e atalhos. Frequência média-alta.',
      fazerPergunta: {
        pergunta: 'Qual a diferença entre transição e animação no PowerPoint?',
        resposta: 'TRANSIÇÃO: efeito visual aplicado à PASSAGEM entre um slide e outro (ex.: dissolver, deslizar, cortina). ANIMAÇÃO: efeito aplicado a OBJETOS específicos DENTRO de um slide (texto, imagem, forma) — por exemplo, um título que aparece letra por letra. Transição = entre slides; animação = dentro do slide.'
      }
    }
  },

  /* ============================================================
     INF-08 — Correio Eletrônico e Comunicação Digital
  ============================================================ */
  'INF-08': {
    id: 'L-INF-08',
    moduloId: 'INF-08',
    objetivo: 'Compreender o funcionamento do correio eletrônico: campos (Para, Cc, Cco), assunto, corpo e anexos; ações (responder, responder a todos, encaminhar); identificar spam, phishing e cuidados com anexos; entender protocolos SMTP, POP3 e IMAP; conhecer webmail, Outlook e Thunderbird; agenda e contatos. Foco em interpretação de situações reais.',
    prerequisitos: ['INF-07'],

    introducao: 'Correio eletrônico é um dos módulos mais frequentes em concursos de nível médio. A banca cobra conceitos diretos: diferença entre Cc e Cco, entre responder e encaminhar, protocolos de envio e recebimento, e cuidados com phishing. É um módulo muito interpretativo e prático.',

    explicacaoSimples: 'Pense no e-mail como uma carta digital. Você escreve, coloca o destinatário (Para), pode adicionar cópias (Cc — todos veem; Cco — cópia oculta), anexa arquivos e envia. Ao receber, pode responder (só ao remetente), responder a todos (todos que estavam na conversa) ou encaminhar (enviar para outra pessoa). Cada ação tem um comportamento diferente — e é isso que a banca cobra.',

    explicacaoTecnica: 'CAMPOS PRINCIPAIS: PARA (destinatário principal), CC (com cópia — todos os destinatários veem quem está em Cc e em Para), CCO (com cópia oculta — os destinatários em Cco NÃO aparecem para os demais), ASSUNTO (resumo do e-mail), CORPO (mensagem), ANEXO (arquivos). AÇÕES: RESPONDER (responde apenas ao remetente original), RESPONDER A TODOS (responde ao remetente + todos em Para e Cc), ENCAMINHAR (envia a mensagem recebida para novos destinatários). PROTOCOLOS: SMTP (envio de mensagens — Simple Mail Transfer Protocol; usa porta 25, 465 ou 587), POP3 (recebimento — baixa as mensagens e geralmente as REMOVE do servidor; porta 110 ou 995), IMAP (recebimento — mantém as mensagens no SERVIDOR e sincroniza entre dispositivos; porta 143 ou 993). SPAM: mensagens não solicitadas, geralmente publicitárias. PHISHING: e-mails fraudulentos que imitam instituições para roubar dados. WEBMAIL: acesso via navegador (Gmail, Outlook Web). CLIENTE DE E-MAIL: Outlook, Thunderbird — programa instalado. AGENDA: compromissos e reuniões. CONTATOS: catálogo de endereços. VIDEOCONFERÊNCIA: reunião por vídeo (Zoom, Meet, Teams).',

    exemplos: [
      'Para: destinatário principal. Cc: cópia visível a todos. Cco: cópia oculta — os demais não veem quem está em Cco.',
      'Responder: responde apenas ao remetente.',
      'Responder a todos: responde ao remetente + todos em Para e Cc.',
      'Encaminhar: envia a mensagem recebida para novas pessoas (não é uma resposta).',
      'SMTP: envio. POP3: recebimento (baixa e remove). IMAP: recebimento (mantém no servidor).',
      'Phishing: e-mail falso do "banco" pedindo senha. Cuidado com links e anexos suspeitos.',
      'Spam: mensagem não solicitada. Geralmente vai para a caixa de spam.',
      'Webmail: acesso via navegador. Cliente: Outlook, Thunderbird.'
    ],

    comparacoes: [
      { termoA: 'Cc', termoB: 'Cco', diferenca: 'CC (Com Cópia): os destinatários adicionados em Cc SÃO VISÍVEIS a todos os demais. CCO (Com Cópia Oculta): os destinatários em Cco NÃO APARECEM para os demais — apenas o remetente sabe que eles receberam. Use Cco quando quiser enviar para muitas pessoas sem expor os endereços (privacidade).' },
      { termoA: 'Responder', termoB: 'Responder a todos', diferenca: 'RESPONDER: envia resposta APENAS ao remetente original. RESPONDER A TODOS: envia resposta ao remetente + TODOS que estavam em Para e Cc (não inclui Cco). Cuidado: clicar em "responder a todos" sem necessidade pode gerar constrangimento ou spam desnecessário.' },
      { termoA: 'Responder', termoB: 'Encaminhar', diferenca: 'RESPONDER: cria uma resposta para quem te enviou — mantém o histórico da conversa. ENCAMINHAR: envia a mensagem RECEBIDA para OUTRAS pessoas (que não eram destinatárias). O encaminhamento geralmente inclui o texto original e o cabeçalho ("De:", "Para:", "Assunto:").' },
      { termoA: 'SMTP', termoB: 'POP3', diferenca: 'SMTP: protocolo de ENVIO de mensagens — usado para mandar e-mail. POP3: protocolo de RECEBIMENTO — baixa as mensagens para o dispositivo e geralmente as remove do servidor (por padrão). Se você usa POP3 em vários dispositivos, as mensagens podem não sincronizar.' },
      { termoA: 'POP3', termoB: 'IMAP', diferenca: 'POP3: baixa as mensagens e REMOVE do servidor — ocupa menos espaço no servidor, mas dificulta a sincronização entre dispositivos. IMAP: MANTÉM as mensagens no SERVIDOR e SINCRONIZA entre dispositivos — ideal para quem acessa e-mail no celular + computador. Hoje o IMAP é mais recomendado.' },
      { termoA: 'Spam', termoB: 'Phishing', diferenca: 'SPAM: mensagem não solicitada, geralmente publicitária — é incômodo, mas não necessariamente malicioso. PHISHING: mensagem FRAUDULENTA que imita instituição legítima (banco, governo) para roubar dados (senhas, CPF, cartão). Todo phishing é uma ameaça séria; o spam é lixo digital.' }
    ],

    aplicacaoEmConcurso: 'E-mail aparece com boa frequência. As bancas cobram: diferença entre Cc e Cco, entre responder e encaminhar, protocolos SMTP/POP3/IMAP, cuidados com phishing, função do anexo e do assunto. Também cobram boas práticas: não abrir anexos suspeitos, verificar remetente, usar Cco para listas. Interpretação de situações reais.',

    pegadinhas: [
      'Achar que Cco é visível aos demais — NÃO é (o "o" é de oculto).',
      'Achar que "responder a todos" inclui quem está em Cco — NÃO inclui.',
      'Achar que encaminhar é o mesmo que responder — não é.',
      'Confundir SMTP (envio) com POP3/IMAP (recebimento).',
      'Achar que POP3 mantém mensagens no servidor — por padrão, baixa e remove.',
      'Achar que IMAP baixa e remove — IMAP mantém no servidor e sincroniza.',
      'Abrir anexos .exe, .scr, .bat de remetentes desconhecidos — risco de malware.',
      'Clicar em links de e-mails suspeitos sem verificar o remetente.'
    ],

    errosComuns: [
      'Decorar siglas sem entender a função de cada protocolo.',
      'Não saber a diferença entre Cc, Cco e "responder a todos".',
      'Não perceber sinais claros de phishing (erros de português, urgência, pedido de senha).',
      'Usar "Para" em listas grandes expondo todos os endereços.'
    ],

    resumo: [
      'Para: destinatário principal. Cc: cópia visível. Cco: cópia oculta.',
      'Responder: só ao remetente. Responder a todos: remetente + Para + Cc. Encaminhar: envia para novas pessoas.',
      'SMTP: envio. POP3: recebimento (baixa e remove). IMAP: recebimento (mantém e sincroniza).',
      'Spam: mensagem indesejada. Phishing: fraude para roubar dados.',
      'Cuidado com anexos suspeitos e links desconhecidos.',
      'Webmail: navegador. Cliente: Outlook, Thunderbird.',
      'Use Cco em listas grandes para preservar a privacidade.'
    ],

    modoProfessor: {
      explicarMaisSimples: 'Pense no e-mail como uma carta. Para = destinatário. Cc = cópia visível (todos veem). Cco = cópia oculta (só o remetente sabe). Ao receber, você pode responder (só ao remetente), responder a todos (para todos) ou encaminhar (para novas pessoas). SMTP envia; POP3 e IMAP recebem.',
      outroExemplo: 'Você envia um e-mail para João (Para), Maria (Cc) e Pedro (Cco). João e Maria veem o nome um do outro. Pedro vê João e Maria, mas nenhum deles vê Pedro — apenas você sabe que Pedro recebeu.',
      compararConceitos: 'Cc × Cco. Responder × Responder a todos × Encaminhar. SMTP × POP3 × IMAP. Spam × Phishing.',
      mostrarPegadinha: 'Cuidado: "encaminhar é o mesmo que responder" — FALSO. Encaminhar envia a mensagem a NOVAS pessoas. Responder cria uma resposta para quem te escreveu. A banca cobra essa diferença.',
      comoApareceEmConcurso: 'Interpretação de situações e protocolos. Frequência alta.',
      fazerPergunta: {
        pergunta: 'Você recebe um e-mail do "banco" pedindo para clicar em um link e atualizar sua senha. O que fazer?',
        resposta: 'NÃO clicar no link. Esse é um caso clássico de PHISHING — mensagem fraudulenta que imita instituição legítima para roubar dados. Boas práticas: (1) verificar o remetente (o endereço real); (2) passar o mouse sobre o link para ver o destino real; (3) NUNCA fornecer senha por e-mail; (4) acessar o banco digitando o endereço oficial no navegador; (5) denunciar como phishing.'
      }
    }
  },

  /* ============================================================
     INF-10 — Computação em Nuvem e Colaboração
  ============================================================ */
  'INF-10': {
    id: 'L-INF-10',
    moduloId: 'INF-10',
    objetivo: 'Compreender o conceito de computação em nuvem, armazenamento remoto, sincronização e colaboração; distinguir arquivo local, sincronizado e disponível somente on-line; conhecer os modelos SaaS, PaaS e IaaS; identificar serviços como OneDrive, Google Drive, Microsoft 365; compreender permissões, compartilhamento e cuidados com links públicos.',
    prerequisitos: ['INF-07'],

    introducao: 'Computação em nuvem é tema cada vez mais cobrado em concursos, sobretudo nos que envolvem ferramentas de escritório (Microsoft 365, Google Workspace). As bancas cobram: o conceito de nuvem, a diferença entre sincronizar e fazer backup, os modelos SaaS/PaaS/IaaS, e o cuidado com links compartilhados. É um módulo interpretativo.',

    explicacaoSimples: 'Pense na nuvem como um "HD mágico na Internet". Em vez de guardar arquivos só no seu computador, você os mantém em servidores de uma empresa (Google, Microsoft, Dropbox) e os acessa de qualquer dispositivo com Internet. O pulo do gato é entender que SINCRONIZAR (manter as versões iguais em todos os dispositivos) NÃO é o mesmo que FAZER BACKUP (cópia de segurança).',

    explicacaoTecnica: 'COMPUTAÇÃO EM NUVEM: uso de recursos computacionais (armazenamento, processamento, software) por meio da Internet, oferecidos como serviço. CARACTERÍSTICAS: on-demand (sob demanda), elasticidade (aumenta/diminui conforme necessidade), pagamento pelo uso (em muitos casos). MODELOS: SaaS (Software as a Service) — software como serviço (Gmail, Microsoft 365, Google Docs); PaaS (Platform as a Service) — plataforma para desenvolvedores (Google App Engine, Azure App Service); IaaS (Infrastructure as a Service) — infraestrutura (máquinas virtuais, armazenamento, redes — AWS EC2, Azure VM). SERVIÇOS DE ARMAZENAMENTO: OneDrive (Microsoft), Google Drive (Google), Dropbox, iCloud (Apple), Box. ESTADOS DO ARQUIVO: LOCAL (só no dispositivo), SINCRONIZADO (disponível localmente e na nuvem), SOMENTE ON-LINE (só na nuvem — ocupa espaço mínimo no dispositivo). COLABORAÇÃO: várias pessoas editando o mesmo arquivo em tempo real (Google Docs, Word on-line). PERMISSÕES: visualizador, comentarista, editor; compartilhamento por link (qualquer pessoa com o link), restrito (só quem foi convidado). CUIDADOS: links públicos podem expor dados — use "restrito" quando possível. BACKUP ≠ SINCRONIZAÇÃO: backup é cópia de segurança (não reflete mudanças automaticamente); sincronização reflete mudanças em todos os dispositivos (se você apagar local, apaga na nuvem também).',

    exemplos: [
      'SaaS: Gmail, Microsoft 365, Google Docs — software pronto, usuário final.',
      'PaaS: Google App Engine — plataforma para desenvolvedores.',
      'IaaS: AWS EC2, Azure VM — infraestrutura como serviço.',
      'OneDrive, Google Drive, Dropbox: armazenamento em nuvem.',
      'Arquivo local: só no seu PC. Sincronizado: PC + nuvem. Somente on-line: só na nuvem.',
      'Colaboração simultânea: várias pessoas editando o mesmo doc em tempo real.',
      'Permissões: visualizador (só vê), comentarista (comenta), editor (edita).',
      'Link público: qualquer pessoa com o link acessa. Link restrito: só convidados.',
      'Backup ≠ sincronização: apagar localmente pode apagar na nuvem (sincronização).'
    ],

    comparacoes: [
      { termoA: 'Sincronização', termoB: 'Backup', diferenca: 'SINCRONIZAÇÃO: mantém os arquivos IGUAIS em todos os dispositivos e na nuvem — qualquer alteração (inclusive EXCLUSÃO) se reflete em todos. BACKUP: cópia de SEGURANÇA — preserva uma versão dos arquivos em um momento específico; alterações e exclusões não afetam o backup. Se você apagar uma foto localmente e ela estiver em pasta sincronizada, ela some da nuvem também. O backup protege contra isso.' },
      { termoA: 'Arquivo local', termoB: 'Arquivo na nuvem', diferenca: 'LOCAL: armazenado apenas no dispositivo — sem Internet, você acessa; se o dispositivo quebrar, perde. NUVEM: armazenado em servidores remotos — acessível de qualquer dispositivo com Internet; se o dispositivo quebrar, os dados continuam na nuvem. Mas exige conexão (ou sincronização prévia).' },
      { termoA: 'SaaS', termoB: 'IaaS', diferenca: 'SAAS: Software como Serviço — o usuário usa o SOFTWARE pronto (Gmail, Microsoft 365). IAAS: Infraestrutura como Serviço — a empresa aluga infraestrutura (máquinas, redes, armazenamento) e instala o que quiser (AWS EC2). SaaS é para usuário final; IaaS é para quem quer controle total da infraestrutura.' },
      { termoA: 'SaaS', termoB: 'PaaS', diferenca: 'SAAS: software pronto para uso — não se preocupa com infraestrutura nem com plataforma. PAAS: plataforma para DESENVOLVEDORES — oferece ambiente para criar e hospedar aplicações sem gerenciar servidores. Ex.: Google App Engine, Azure App Service. SaaS é para usar; PaaS é para desenvolver.' },
      { termoA: 'Compartilhamento por link', termoB: 'Compartilhamento restrito', diferenca: 'POR LINK: qualquer pessoa com o link acessa — cuidado, pois o link pode ser encaminhado. RESTRITO: só quem foi explicitamente convidado acessa — mais seguro. Boas práticas: usar restrito para dados sensíveis; revisar periodicamente os compartilhamentos ativos.' }
    ],

    aplicacaoEmConcurso: 'Nuvem aparece com boa frequência. As bancas cobram: conceito de nuvem, diferença entre sincronizar e backup (a mais cobrada), modelos SaaS/PaaS/IaaS, estados do arquivo (local, sincronizado, somente on-line), cuidados com links compartilhados, e exemplos de serviços (OneDrive, Google Drive). Interpretação de situações reais.',

    pegadinhas: [
      'Achar que sincronizar é o mesmo que fazer backup — NÃO é.',
      'Achar que apagar localmente não afeta a nuvem — se estiver em pasta sincronizada, afeta.',
      'Confundir SaaS, PaaS e IaaS.',
      'Achar que "salvar na nuvem" automaticamente faz backup — só sincroniza.',
      'Achar que compartilhar por link é sempre seguro — o link pode vazar.',
      'Achar que a nuvem elimina a necessidade de backup local — não elimina.',
      'Achar que "só on-line" ocupa muito espaço no PC — ocupa espaço mínimo.'
    ],

    errosComuns: [
      'Confundir conceitos de sincronização e backup.',
      'Não entender os três modelos de serviço (SaaS, PaaS, IaaS).',
      'Ignorar os riscos de links compartilhados publicamente.',
      'Achar que a nuvem é 100% segura por si só.'
    ],

    resumo: [
      'Nuvem: recursos computacionais via Internet.',
      'SaaS: software pronto (Gmail, Microsoft 365). PaaS: plataforma para devs. IaaS: infraestrutura.',
      'Serviços: OneDrive, Google Drive, Dropbox, iCloud.',
      'SINCRONIZAR ≠ BACKUP. Sincronização reflete alterações; backup preserva versão.',
      'Estados do arquivo: local, sincronizado, somente on-line.',
      'Permissões: visualizador, comentarista, editor.',
      'Cuidado com links públicos — prefira "restrito".',
      'Colaboração simultânea: várias pessoas editando ao mesmo tempo.'
    ],

    modoProfessor: {
      explicarMaisSimples: 'A nuvem é um "HD na Internet". Você acessa de qualquer lugar. Mas atenção: SINCRONIZAR mantém tudo igual em todos os dispositivos (se apagar no PC, apaga na nuvem). BACKUP é uma cópia de segurança separada — não é afetada por alterações. São coisas diferentes.',
      outroExemplo: 'Você guarda fotos no OneDrive. Se você apagar uma foto na pasta sincronizada do PC, ela também some da nuvem. Mas se você tem um backup em outro lugar (HD externo), a foto continua lá. Por isso o backup 3-2-1 é recomendado.',
      compararConceitos: 'Sincronização × Backup. Local × Nuvem. SaaS × PaaS × IaaS. Link público × Restrito.',
      mostrarPegadinha: 'Cuidado: "salvei na nuvem, então estou seguro" — FALSO. Salvar na nuvem sincroniza, mas não é backup. Se um vírus criptografar seus arquivos sincronizados, a nuvem também é afetada. Backup é uma cópia separada.',
      comoApareceEmConcurso: 'Interpretação de conceitos e situações. Frequência média-alta.',
      fazerPergunta: {
        pergunta: 'Qual a diferença entre sincronizar e fazer backup?',
        resposta: 'SINCRONIZAR: mantém os arquivos iguais em todos os dispositivos e na nuvem. Se você altera ou apaga algo, a mudança se reflete em todos. BACKUP: cópia de SEGURANÇA dos arquivos em um momento específico — alterações e exclusões NÃO afetam o backup. Backup protege contra exclusão acidental, ransomware e falhas; sincronização apenas mantém versões iguais.'
      }
    }
  },

  /* ============================================================
     INF-12 — Backup, Recuperação e Gerenciamento de Dados
  ============================================================ */
  'INF-12': {
    id: 'L-INF-12',
    moduloId: 'INF-12',
    objetivo: 'Compreender a finalidade do backup e sua importância; conhecer os tipos de cópia (completa, incremental, diferencial); identificar mídias (local, externa, nuvem); entender restauração e recuperação; diferenciar sincronização de backup; aplicar boas práticas de organização, nomenclatura e versionamento de arquivos; conhecer a estratégia 3-2-1.',
    prerequisitos: ['INF-02'],

    introducao: 'Backup é um dos temas mais cobrados em Informática. A banca cobra: tipos de backup (completo, incremental, diferencial), diferença entre backup e sincronização, estratégia 3-2-1, cuidados com a Lixeira e recuperação de arquivos. Muito interpretativo.',

    explicacaoSimples: 'Pense no backup como uma "cópia de segurança" dos seus arquivos. Se algo der errado (vírus, exclusão acidental, falha no HD), você recupera a versão guardada. Existem três tipos: COMPLETO (copia tudo), INCREMENTAL (copia só o que mudou desde o último backup, de qualquer tipo) e DIFERENCIAL (copia tudo o que mudou desde o último backup COMPLETO). Cada um equilibra espaço, tempo e facilidade de restauração.',

    explicacaoTecnica: 'BACKUP: cópia de segurança de dados com o objetivo de recuperá-los em caso de perda. TIPOS: COMPLETO (Full) — copia TODOS os arquivos selecionados. Base para os demais. INCREMENTAL — copia apenas o que foi ALTERADO desde o ÚLTIMO backup (de qualquer tipo). Rápido para fazer, mas restauração precisa de TODOS os backups em sequência (completo + incrementais). DIFERENCIAL — copia tudo o que foi alterado desde o ÚLTIMO backup COMPLETO. Mais lento que o incremental para fazer, mas restauração precisa apenas do completo + o último diferencial. MÍDIAS: HD externo, pendrive, DVD, servidor, nuvem. ESTRATÉGIA 3-2-1: 3 cópias dos dados, em 2 mídias diferentes, sendo 1 fora do local. ROTINA: agendar backups periódicos, testar restauração, manter cópias em locais diferentes. SINCRONIZAÇÃO × BACKUP: sincronização reflete alterações (inclusive exclusão); backup preserva versão. RESTAURAÇÃO: recuperar arquivos do backup. LIXEIRA: armazena arquivos excluídos (recurso do SO, não é backup). VERSIONAMENTO: manter versões diferentes do mesmo arquivo (ex.: "relatorio_v1.docx", "relatorio_v2.docx"). NOMENCLATURA: nomear arquivos de forma clara e padronizada para facilitar busca.',

    exemplos: [
      'Backup completo: copia 100% dos arquivos selecionados — base.',
      'Incremental: copia só o que mudou desde o último backup (completo ou incremental).',
      'Diferencial: copia tudo que mudou desde o último completo.',
      'Estratégia 3-2-1: 3 cópias, 2 mídias diferentes, 1 fora do local.',
      'Exemplo: completo no domingo; incrementais de segunda a sábado. Para restaurar, precisa do completo + todos os incrementais.',
      'Exemplo diferencial: completo no domingo; diferenciais de segunda a sábado (cada um acumula). Para restaurar, precisa do completo + último diferencial.',
      'HD externo + nuvem: duas mídias diferentes. Manter uma cópia no trabalho (fora do local).',
      'Sincronização na nuvem NÃO substitui backup — se apagar local, apaga na nuvem.'
    ],

    comparacoes: [
      { termoA: 'Backup completo', termoB: 'Backup incremental', diferenca: 'COMPLETO: copia TODOS os arquivos selecionados. Base dos demais. Ocupa mais espaço, demora mais, mas restauração é direta. INCREMENTAL: copia apenas o que mudou desde o ÚLTIMO backup (de qualquer tipo). Rápido para fazer, ocupa menos espaço, mas para restaurar é preciso o último completo + TODOS os incrementais em sequência. Quanto mais incrementais, mais complexa a restauração.' },
      { termoA: 'Backup incremental', termoB: 'Backup diferencial', diferenca: 'INCREMENTAL: copia o que mudou desde o ÚLTIMO backup (completo ou incremental). Cada backup é pequeno. Restauração = completo + todos os incrementais. DIFERENCIAL: copia tudo que mudou desde o ÚLTIMO COMPLETO. Cada backup cresce ao longo do tempo. Restauração = completo + último diferencial. O diferencial é mais rápido de restaurar; o incremental é mais rápido de fazer.' },
      { termoA: 'Backup', termoB: 'Sincronização', diferenca: 'BACKUP: cópia de segurança com versão preservada — alterações no original NÃO afetam o backup. SINCRONIZAÇÃO: mantém arquivos iguais entre dispositivos e nuvem — se você apagar localmente, a nuvem reflete. Se você for vítima de ransomware, a pasta sincronizada criptografa os arquivos na nuvem também. Backup é proteção; sincronização é conveniência.' },
      { termoA: 'Lixeira', termoB: 'Backup', diferenca: 'LIXEIRA: recurso do sistema operacional que armazena arquivos excluídos recentemente — não é backup. Se o HD falhar ou o arquivo for removido com Shift+Delete, a Lixeira não ajuda. BACKUP: cópia de segurança em mídia separada — sobrevive a falhas do dispositivo principal.' },
      { termoA: 'Backup local', termoB: 'Backup na nuvem', diferenca: 'LOCAL: em HD externo, pendrive, DVD — rápido para restaurar, mas sujeito a roubo, incêndio e danos físicos. NUVEM: em servidores remotos — acessível de qualquer lugar, mas depende de Internet e do provedor. Ideal: combinar os dois (estratégia 3-2-1).' }
    ],

    aplicacaoEmConcurso: 'Backup é tema frequente. As bancas cobram: diferença entre completo, incremental e diferencial; diferença entre backup e sincronização (a mais cobrada); estratégia 3-2-1; Lixeira × backup; cuidados com restauração. Interpretação de situações práticas.',

    pegadinhas: [
      'Achar que backup incremental copia tudo que mudou desde o último completo — é o DIFERENCIAL que faz isso.',
      'Achar que backup diferencial copia desde o último backup de qualquer tipo — é o INCREMENTAL.',
      'Achar que sincronizar na nuvem é backup — não é.',
      'Achar que a Lixeira é backup — não é.',
      'Achar que a estratégia 3-2-1 é "3 cópias no mesmo HD" — é 3 cópias em mídias diferentes, com 1 fora do local.',
      'Achar que backup completo é sempre melhor — ocupa mais espaço e demora; cada tipo tem seu uso.',
      'Achar que backup apenas na nuvem é suficiente — depende do provedor e da Internet.'
    ],

    errosComuns: [
      'Confundir os três tipos de backup.',
      'Achar que sincronização substitui backup.',
      'Não conhecer a estratégia 3-2-1.',
      'Nunca testar a restauração (backup que não restaura não serve).'
    ],

    resumo: [
      'Backup: cópia de segurança. Objetivo: recuperar dados em caso de perda.',
      'Completo: copia tudo. Incremental: o que mudou desde o último backup (de qualquer tipo). Diferencial: o que mudou desde o último completo.',
      'Restauração: completo + todos os incrementais OU completo + último diferencial.',
      '3-2-1: 3 cópias, 2 mídias diferentes, 1 fora do local.',
      'Sincronização ≠ Backup.',
      'Lixeira não é backup.',
      'Testar restauração regularmente é essencial.',
      'Versionamento: manter versões ("_v1", "_v2") para histórico.'
    ],

    modoProfessor: {
      explicarMaisSimples: 'Backup é uma "cópia de segurança". Existem três tipos: COMPLETO copia tudo; INCREMENTAL copia só o que mudou desde o último backup; DIFERENCIAL copia tudo que mudou desde o último COMPLETO. Sincronizar na nuvem NÃO é backup — se você apagar, apaga em todo lugar. Backup preserva uma versão.',
      outroExemplo: 'Imagine que você guarda fotos no Google Drive (sincronizado). Um vírus criptografa seu PC e o Drive — todas as fotos se perdem. Se você tivesse backup em HD externo (não sincronizado), as fotos continuariam lá. Por isso 3-2-1: 3 cópias, 2 mídias, 1 fora do local.',
      compararConceitos: 'Completo × Incremental × Diferencial. Backup × Sincronização. Lixeira × Backup. Local × Nuvem.',
      mostrarPegadinha: 'Cuidado: a banca adora dizer "o backup diferencial copia apenas o que mudou desde o último backup, de qualquer tipo" — FALSO. Isso é o INCREMENTAL. O DIFERENCIAL copia tudo que mudou desde o último COMPLETO.',
      comoApareceEmConcurso: 'Interpretação de conceitos e situações. Frequência média-alta.',
      fazerPergunta: {
        pergunta: 'Qual a diferença entre backup incremental e diferencial?',
        resposta: 'INCREMENTAL: copia apenas o que mudou desde o ÚLTIMO backup (de qualquer tipo) — cada backup é pequeno. Para restaurar, precisa do completo + TODOS os incrementais em sequência. DIFERENCIAL: copia tudo que mudou desde o ÚLTIMO COMPLETO — cada backup vai crescendo. Para restaurar, precisa apenas do completo + último diferencial. O incremental é mais rápido para fazer; o diferencial é mais rápido para restaurar.'
      }
    }
  }

};
