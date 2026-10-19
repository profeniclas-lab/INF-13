/* ============================================================
   DIAGNÓSTICOS — Módulos de prioridade ALTA
   Preenchidos: INF-01, INF-05, INF-08, INF-10, INF-12
   ============================================================ */

window.DIAGNOSTICS_ALTA = {

  /* ============================================================
     INF-01 — Fundamentos e Hardware
  ============================================================ */
  'INF-01': {
    id: 'D-INF-01',
    moduloId: 'INF-01',
    itens: [
      {
        id: 'D-INF-01-01',
        tipo: 'multipla_escolha',
        subtopico: 'RAM x armazenamento',
        pergunta: 'Sobre a diferença entre memória RAM e HD/SSD, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Ambos são voláteis — perdem conteúdo ao desligar.' },
          { id: 'B', texto: 'A RAM é volátil (perde conteúdo ao desligar); o HD/SSD é não volátil (mantém os dados).' },
          { id: 'C', texto: 'A RAM armazena arquivos permanentemente; o HD é temporário.' },
          { id: 'D', texto: 'RAM e HD são sinônimos.' }
        ],
        gabarito: 'B',
        explicacao: 'RAM: memória PRINCIPAL, VOLÁTIL — perde dados ao desligar, muito rápida, armazena programas em execução. HD/SSD: armazenamento SECUNDÁRIO, NÃO VOLÁTIL — mantém os arquivos desligado. Ao abrir um programa, ele é carregado do HD para a RAM. Se faltar energia antes de salvar, o conteúdo não salvo se perde.'
      },
      {
        id: 'D-INF-01-02',
        tipo: 'multipla_escolha',
        subtopico: 'Periféricos',
        pergunta: 'Qual dos dispositivos abaixo é um periférico de ENTRADA e SAÍDA ao mesmo tempo?',
        alternativas: [
          { id: 'A', texto: 'Teclado.' },
          { id: 'B', texto: 'Monitor.' },
          { id: 'C', texto: 'Tela touchscreen.' },
          { id: 'D', texto: 'Caixa de som.' }
        ],
        gabarito: 'C',
        explicacao: 'ENTRADA: envia dados para o PC — teclado, mouse, scanner. SAÍDA: recebe dados do PC — monitor, impressora, caixa de som. ENTRADA/SAÍDA: fazem os dois — touchscreen (recebe toque e exibe imagem), modem, headset (fone + microfone), multifuncional (scanner + impressora).'
      },
      {
        id: 'D-INF-01-03',
        tipo: 'verdadeiro_falso',
        subtopico: 'Unidades de medida',
        pergunta: 'Um byte é formado por 8 bits.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. BIT: menor unidade de informação (0 ou 1). BYTE: conjunto de 8 bits — representa um caractere. A escala segue: 1 KB ≈ 1024 bytes; 1 MB ≈ 1024 KB; 1 GB ≈ 1024 MB; 1 TB ≈ 1024 GB. Cuidado: Mbps (megabits por segundo) ≠ MB (megabytes) — 1 MB ≈ 8 Mbps.'
      },
      {
        id: 'D-INF-01-04',
        tipo: 'autoavaliacao',
        subtopico: 'Regras gerais',
        pergunta: 'Você domina: hardware × software × firmware, RAM × HD/SSD, memória volátil × não volátil, periféricos de entrada/saída, unidades de medida (bit, byte, KB, MB, GB, TB)?',
        resposta: 'HARDWARE: físico. SOFTWARE: lógico. FIRMWARE: software no hardware (BIOS). RAM: volátil, rápida, principal. HD/SSD: não volátil, armazenamento. HD: magnético. SSD: flash, mais rápido. PERIFÉRICOS: entrada (teclado, mouse), saída (monitor, impressora), entrada/saída (touchscreen, modem, multifuncional). UNIDADES: 1 byte = 8 bits; 1 KB = 1024 bytes; 1 MB = 1024 KB; 1 GB = 1024 MB; 1 TB = 1024 GB.'
      }
    ]
  },

  /* ============================================================
     INF-05 — PowerPoint
  ============================================================ */
  'INF-05': {
    id: 'D-INF-05',
    moduloId: 'INF-05',
    itens: [
      {
        id: 'D-INF-05-01',
        tipo: 'multipla_escolha',
        subtopico: 'Transição x animação',
        pergunta: 'Sobre transição e animação no PowerPoint, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'São sinônimos — ambos se aplicam a objetos dentro do slide.' },
          { id: 'B', texto: 'Transição é o efeito entre slides; animação é o efeito em objetos dentro do slide.' },
          { id: 'C', texto: 'Animação é o efeito entre slides; transição é o efeito em objetos.' },
          { id: 'D', texto: 'Ambos se aplicam a toda a apresentação.' }
        ],
        gabarito: 'B',
        explicacao: 'TRANSIÇÃO: efeito aplicado à PASSAGEM entre um slide e outro — acontece UMA vez por slide. ANIMAÇÃO: efeito aplicado a OBJETOS dentro do slide — texto, imagem, forma. Regra: TRANSIÇÃO = entre slides; ANIMAÇÃO = dentro do slide. É a pegadinha nº 1 em provas de PowerPoint.'
      },
      {
        id: 'D-INF-05-02',
        tipo: 'multipla_escolha',
        subtopico: 'Formatos',
        pergunta: 'Qual formato de arquivo do PowerPoint abre DIRETAMENTE em modo de apresentação (tela cheia), sem passar pela edição?',
        alternativas: [
          { id: 'A', texto: '.pptx' },
          { id: 'B', texto: '.ppsx' },
          { id: 'C', texto: '.pdf' },
          { id: 'D', texto: '.docx' }
        ],
        gabarito: 'B',
        explicacao: '.PPTX é o formato padrão — abre em modo de EDIÇÃO. .PPSX é o formato de "apresentação de slides" — abre DIRETO em modo de apresentação. Útil para enviar a alguém que só vai assistir. .PDF é formato portátil (não é do PowerPoint). .DOCX é do Word.'
      },
      {
        id: 'D-INF-05-03',
        tipo: 'verdadeiro_falso',
        subtopico: 'Atalhos',
        pergunta: 'No PowerPoint, a tecla F5 e a combinação Shift+F5 produzem o mesmo efeito: iniciam a apresentação a partir do primeiro slide.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. F5 inicia a apresentação a partir do PRIMEIRO slide. Shift+F5 inicia a partir do SLIDE ATUAL (onde o cursor está). São atalhos diferentes — a banca adora essa distinção. Outros: Ctrl+M (novo slide), Ctrl+D (duplicar slide), Esc (sair), B (tela preta), W (tela branca).'
      },
      {
        id: 'D-INF-05-04',
        tipo: 'autoavaliacao',
        subtopico: 'Regras gerais',
        pergunta: 'Você domina: transição × animação, tema × layout, formatos .pptx × .ppsx × .pdf, atalhos F5 / Shift+F5 / Ctrl+M / Ctrl+D, notas do apresentador?',
        resposta: 'TRANSIÇÃO: entre slides. ANIMAÇÃO: em objetos dentro do slide. TEMA: identidade visual da apresentação (cores, fontes, efeitos). LAYOUT: disposição dos elementos em um slide. FORMATOS: .pptx (edição), .ppsx (apresentação direta), .pdf (distribuição). ATALHOS: F5 (do 1º slide), Shift+F5 (do slide atual), Ctrl+M (novo slide), Ctrl+D (duplicar), Esc (sair), B (tela preta), W (tela branca). NOTAS DO APRESENTADOR: visíveis só para quem apresenta.'
      }
    ]
  },

  /* ============================================================
     INF-08 — E-mail
  ============================================================ */
  'INF-08': {
    id: 'D-INF-08',
    moduloId: 'INF-08',
    itens: [
      {
        id: 'D-INF-08-01',
        tipo: 'multipla_escolha',
        subtopico: 'Cc x Cco',
        pergunta: 'Você envia um e-mail para João (Para), Maria (Cc) e Pedro (Cco). Quem consegue ver que Pedro recebeu a mensagem?',
        alternativas: [
          { id: 'A', texto: 'Todos os destinatários.' },
          { id: 'B', texto: 'Somente João e Maria.' },
          { id: 'C', texto: 'Somente o remetente.' },
          { id: 'D', texto: 'Ninguém — nem o remetente.' }
        ],
        gabarito: 'C',
        explicacao: 'CCO (Com Cópia Oculta): os destinatários em Cco NÃO APARECEM para os demais. João e Maria (Para e Cc) veem um ao outro, mas nenhum vê Pedro. Somente o REMETENTE sabe que Pedro recebeu. Cuidado: "responder a todos" NÃO inclui Cco. Use Cco em listas grandes para preservar privacidade.'
      },
      {
        id: 'D-INF-08-02',
        tipo: 'multipla_escolha',
        subtopico: 'Protocolos',
        pergunta: 'Qual protocolo é usado para RECEBER e-mail mantendo as mensagens no SERVIDOR, sincronizando entre vários dispositivos?',
        alternativas: [
          { id: 'A', texto: 'SMTP' },
          { id: 'B', texto: 'POP3' },
          { id: 'C', texto: 'IMAP' },
          { id: 'D', texto: 'HTTP' }
        ],
        gabarito: 'C',
        explicacao: 'SMTP: ENVIO de mensagens. POP3: RECEBIMENTO — baixa e geralmente REMOVE do servidor (dificulta sincronização). IMAP: RECEBIMENTO — mantém no SERVIDOR e SINCRONIZA entre dispositivos — ideal para quem usa celular + computador. Hoje o IMAP é o mais recomendado.'
      },
      {
        id: 'D-INF-08-03',
        tipo: 'verdadeiro_falso',
        subtopico: 'Ações',
        pergunta: 'Ao clicar em "Responder a todos", a resposta é enviada ao remetente original e a todos os destinatários que estavam em Para, Cc e Cco.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. "Responder a todos" envia ao remetente + destinatários em Para e Cc, mas NÃO inclui quem estava em Cco (afinal, eles são ocultos — o sistema não os expõe). Se você quer incluir alguém em Cco, precisa adicioná-lo manualmente. A banca cobra essa sutileza.'
      },
      {
        id: 'D-INF-08-04',
        tipo: 'autoavaliacao',
        subtopico: 'Regras gerais',
        pergunta: 'Você domina: Cc × Cco, responder × responder a todos × encaminhar, protocolos SMTP / POP3 / IMAP, phishing, cuidados com anexos suspeitos?',
        resposta: 'CC: cópia visível a todos. CCO: cópia oculta — só o remetente sabe. RESPONDER: só ao remetente. RESPONDER A TODOS: remetente + Para + Cc (NÃO inclui Cco). ENCAMINHAR: envia para novas pessoas. SMTP: envio. POP3: recebimento (baixa e remove). IMAP: recebimento (mantém no servidor, sincroniza). PHISHING: mensagem fraudulenta para roubar dados — não clique em links, não forneça senha, verifique o remetente. Cuidados com anexos .exe, .scr, .bat de desconhecidos.'
      }
    ]
  },

  /* ============================================================
     INF-10 — Nuvem e Colaboração
  ============================================================ */
  'INF-10': {
    id: 'D-INF-10',
    moduloId: 'INF-10',
    itens: [
      {
        id: 'D-INF-10-01',
        tipo: 'multipla_escolha',
        subtopico: 'Sincronização x backup',
        pergunta: 'Sobre a diferença entre sincronização e backup, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'São sinônimos — ambos protegem contra perda de dados.' },
          { id: 'B', texto: 'Sincronização mantém arquivos iguais em todos os dispositivos (reflete exclusões); backup preserva uma versão separada (não afetada por exclusões).' },
          { id: 'C', texto: 'Backup é mais rápido que sincronização.' },
          { id: 'D', texto: 'Sincronização substitui o backup em todos os casos.' }
        ],
        gabarito: 'B',
        explicacao: 'SINCRONIZAÇÃO: mantém arquivos IGUAIS entre dispositivos e nuvem — se você apagar localmente, apaga na nuvem também. BACKUP: cópia de SEGURANÇA separada — alterações e exclusões NÃO afetam o backup. Ex.: foto sincronizada no Google Drive apagada no celular também some da nuvem. Só o backup (HD externo, outra nuvem) preserva.'
      },
      {
        id: 'D-INF-10-02',
        tipo: 'multipla_escolha',
        subtopico: 'SaaS, PaaS e IaaS',
        pergunta: 'O Gmail, o Microsoft 365 e o Google Docs são exemplos de qual modelo de computação em nuvem?',
        alternativas: [
          { id: 'A', texto: 'IaaS (Infrastructure as a Service).' },
          { id: 'B', texto: 'PaaS (Platform as a Service).' },
          { id: 'C', texto: 'SaaS (Software as a Service).' },
          { id: 'D', texto: 'DaaS (Desktop as a Service).' }
        ],
        gabarito: 'C',
        explicacao: 'SAAS: Software como Serviço — o usuário usa o SOFTWARE pronto (Gmail, Microsoft 365, Google Docs). PAAS: plataforma para DESENVOLVEDORES (Google App Engine, Azure App Service). IAAS: infraestrutura (AWS EC2, Azure VM — máquinas, redes, armazenamento). SaaS é para o usuário final; PaaS para quem desenvolve; IaaS para quem quer controle total da infraestrutura.'
      },
      {
        id: 'D-INF-10-03',
        tipo: 'verdadeiro_falso',
        subtopico: 'Nuvem e backup',
        pergunta: 'Salvar arquivos automaticamente na nuvem (OneDrive, Google Drive) já é suficiente como backup — não é necessário fazer cópia de segurança adicional.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. Salvar na nuvem SINCRONIZA os arquivos — se você apagar localmente, apaga na nuvem também. Se um vírus (ransomware) criptografar seus arquivos sincronizados, a nuvem também é afetada. BACKUP é uma cópia SEPARADA (HD externo, outra nuvem) — protege contra exclusão acidental, ransomware e falhas. Estratégia 3-2-1: 3 cópias, 2 mídias, 1 fora do local.'
      },
      {
        id: 'D-INF-10-04',
        tipo: 'autoavaliacao',
        subtopico: 'Regras gerais',
        pergunta: 'Você domina: computação em nuvem, sincronização × backup, SaaS / PaaS / IaaS, permissões (visualizador, comentarista, editor), compartilhamento por link × restrito?',
        resposta: 'NUVEM: recursos computacionais via Internet. SINCRONIZAÇÃO × BACKUP: sincronização reflete alterações; backup preserva versão separada. MODELOS: SAAS (software pronto: Gmail, Microsoft 365), PAAS (plataforma para devs), IAAS (infraestrutura: AWS, Azure VM). PERMISSÕES: visualizador (só vê), comentarista (comenta), editor (edita). COMPARTILHAMENTO: por LINK público (qualquer um acessa — risco de vazamento) × RESTRITO (só convidados — mais seguro). Prefira restrito para dados sensíveis.'
      }
    ]
  },

  /* ============================================================
     INF-12 — Backup
  ============================================================ */
  'INF-12': {
    id: 'D-INF-12',
    moduloId: 'INF-12',
    itens: [
      {
        id: 'D-INF-12-01',
        tipo: 'multipla_escolha',
        subtopico: 'Tipos de backup',
        pergunta: 'Um backup que copia APENAS o que foi alterado desde o ÚLTIMO backup COMPLETO é chamado de:',
        alternativas: [
          { id: 'A', texto: 'Backup completo.' },
          { id: 'B', texto: 'Backup incremental.' },
          { id: 'C', texto: 'Backup diferencial.' },
          { id: 'D', texto: 'Backup em espelho.' }
        ],
        gabarito: 'C',
        explicacao: 'DIFERENCIAL: copia tudo o que foi alterado desde o ÚLTIMO COMPLETO — cada backup cresce ao longo do tempo. Para restaurar: completo + último diferencial. INCREMENTAL: copia o que mudou desde o ÚLTIMO backup (de qualquer tipo) — cada backup é pequeno; restaurar exige completo + TODOS os incrementais. Completo: copia tudo.'
      },
      {
        id: 'D-INF-12-02',
        tipo: 'multipla_escolha',
        subtopico: 'Estratégia 3-2-1',
        pergunta: 'A estratégia 3-2-1 de backup recomenda:',
        alternativas: [
          { id: 'A', texto: '3 backups por semana, 2 mídias, 1 verificação.' },
          { id: 'B', texto: '3 cópias dos dados, em 2 mídias diferentes, sendo 1 fora do local.' },
          { id: 'C', texto: '3 nuvens diferentes, 2 backups locais, 1 incremental.' },
          { id: 'D', texto: '3 arquivos, 2 senhas, 1 firewall.' }
        ],
        gabarito: 'B',
        explicacao: '3-2-1: 3 CÓPIAS dos dados, em 2 MÍDIAS DIFERENTES, sendo 1 FORA DO LOCAL. Ex.: original no PC + backup em HD externo + backup na nuvem (ou em outro escritório). Protege contra falha de hardware, roubo, incêndio e ransomware. A banca cobra essa fórmula.'
      },
      {
        id: 'D-INF-12-03',
        tipo: 'verdadeiro_falso',
        subtopico: 'Lixeira x backup',
        pergunta: 'A Lixeira do Windows é um tipo de backup — se um arquivo for excluído, basta restaurá-lo da Lixeira para recuperá-lo com segurança.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. A Lixeira NÃO é backup — é apenas um recurso temporário do sistema operacional para arquivos excluídos recentemente. Se o HD falhar, se o arquivo for removido com Shift+Delete, ou se a Lixeira for esvaziada, o arquivo se perde. Backup é uma cópia em mídia separada — protege contra falhas do dispositivo principal.'
      },
      {
        id: 'D-INF-12-04',
        tipo: 'autoavaliacao',
        subtopico: 'Regras gerais',
        pergunta: 'Você domina: tipos de backup (completo, incremental, diferencial), estratégia 3-2-1, sincronização × backup, Lixeira × backup, restauração?',
        resposta: 'COMPLETO: copia tudo. INCREMENTAL: o que mudou desde o último backup (de qualquer tipo). DIFERENCIAL: o que mudou desde o último completo. RESTAURAÇÃO: incremental exige completo + todos os incrementais; diferencial exige completo + último diferencial. 3-2-1: 3 cópias, 2 mídias, 1 fora do local. SINCRONIZAÇÃO ≠ BACKUP. LIXEIRA não é backup. Testar restauração regularmente é essencial.'
      }
    ]
  }

};
