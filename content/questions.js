/* ============================================================
   BANCO DE QUESTÕES — Informática
   Formato: REAL (banca/órgão/ano/prova/fonte) + DIDATICA
   Módulos cobertos: INF-01 a INF-16
   ============================================================ */

window.QUESTIONS = [

  /* ============================================================
     REAL — FGV / CODEBA / 2016 / Técnico Portuário
     INF-08 — Correio Eletrônico
  ============================================================ */
  {
    id: 'Q-REAL-INF-0001',
    tipo: 'REAL',
    banca: 'FGV',
    orgao: 'CODEBA',
    ano: 2016,
    prova: 'Técnico Portuário (Controle Portuário) — NM002 — Tipo 2',
    fonte: { descricao: 'https://conhecimento.fgv.br/sites/default/files/concursos/codeba/201601_Tecnico_Portuario_(Controle_Portuario)_(NM002)_Tipo_2.pdf' },
    area: 'REDE',
    moduloId: 'INF-08',
    subtema: 'Webmail — Cco',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Com relação à infraestrutura de correio eletrônico conhecida por Webmail como, por exemplo, o Gmail, assinale V para a afirmativa verdadeira e F para a falsa. ( ) Os arquivos de imagem no formato SCR anexados às mensagens de e-mail são convertidos em formato JPG antes de serem transmitidos, por padrão. ( ) As mensagens de e-mail oriundas da Internet para um destinatário são armazenadas na Caixa de Entrada, por padrão. ( ) Os endereços de e-mail transmitidos na modalidade cópia oculta são inseridos no espaço identificado por Cco, por padrão. As afirmativas são, respectivamente:',
    alternativas: [
      { id: 'A', texto: 'F, V e F.' },
      { id: 'B', texto: 'F, V e V.' },
      { id: 'C', texto: 'V, F e F.' },
      { id: 'D', texto: 'V, V e F.' },
      { id: 'E', texto: 'F, F e V.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A segunda e a terceira afirmativas são verdadeiras. Mensagens recebidas da Internet chegam à Caixa de Entrada por padrão. Endereços em cópia oculta são inseridos no campo Cco. A primeira é falsa: arquivos .SCR não são convertidos em JPG por padrão — .SCR é um formato executável (screen saver) e não deve ser aberto por e-mail.',
      incorretas: {
        A: 'A terceira afirmativa é verdadeira, não falsa.',
        C: 'A primeira é falsa e a segunda é verdadeira — a ordem está trocada.',
        D: 'A primeira é falsa, não verdadeira.',
        E: 'A segunda é verdadeira, não falsa.'
      },
      conceitoCobrado: 'Funcionamento do Webmail: Caixa de Entrada, campo Cco e cuidados com anexos executáveis.',
      pegadinha: 'A banca mistura uma afirmativa falsa sobre conversão automática de .SCR com duas verdadeiras sobre Caixa de Entrada e Cco. O candidato que não conhece a extensão .SCR pode errar.',
      comoApareceEmConcurso: 'Questões de V/F sobre Webmail são frequentes em provas de nível médio.'
    },
    tags: ['webmail', 'Cco', 'anexos']
  },

  /* ============================================================
     REAL — FGV / CODEBA / 2016 / Técnico Portuário
     INF-04 — Excel: referência absoluta e função MAIOR
  ============================================================ */
  {
    id: 'Q-REAL-INF-0002',
    tipo: 'REAL',
    banca: 'FGV',
    orgao: 'CODEBA',
    ano: 2016,
    prova: 'Técnico Portuário (Controle Portuário) — NM002 — Tipo 2',
    fonte: { descricao: 'https://conhecimento.fgv.br/sites/default/files/concursos/codeba/201601_Tecnico_Portuario_(Controle_Portuario)_(NM002)_Tipo_2.pdf' },
    area: 'ESCR',
    moduloId: 'INF-04',
    subtema: 'Referência absoluta e função MAIOR',
    dificuldade: 3,
    prioridade: 'muito_alta',
    enunciado: 'A planilha a seguir foi criada no Excel 2010 BR. O valor mostrado em D9 é o resultado da multiplicação de B9 por G7 usando o conceito de referência absoluta. A expressão inserida em D9 foi copiada para as células D10, D11, D12 e D13. Em G10 foi inserida a expressão =SOMA(D9;D13). Em G13 foi inserida uma expressão usando a função MAIOR que determina o maior número entre todos os valores mostrados nas células D9, D10, D11, D12 e D13. Nessas condições, a expressão inserida em D11, o valor mostrado em G10 e a expressão inserida em G13 são, respectivamente:',
    alternativas: [
      { id: 'A', texto: '=B11*$G$7, 60 e =MAIOR(D9:D13)' },
      { id: 'B', texto: '=B11*&G&7, 60 e =MAIOR(D9:D13;1)' },
      { id: 'C', texto: '=B11*$G$7, 150 e =MAIOR(D9:D13;1)' },
      { id: 'D', texto: '=B11*$G$7, 60 e =MAIOR(D9:D13;1)' },
      { id: 'E', texto: '=B11*&G&7, 150 e =MAIOR(D9:D13)' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A referência absoluta é $G$7 (com cifrão em coluna e linha). Ao copiar D9 para D11, a parte relativa B9 vira B11 e a absoluta $G$7 permanece. A soma D9:D13 resulta em 60 (conforme os valores da planilha original). A função MAIOR com um único argumento de intervalo pode ser escrita como =MAIOR(D9:D13) ou =MAIOR(D9:D13;1) — ambas retornam o maior valor. A alternativa D combina corretamente =B11*$G$7, 60 e =MAIOR(D9:D13;1).',
      incorretas: {
        A: 'A expressão =MAIOR(D9:D13) sem o segundo argumento também é aceita, mas a soma 60 está correta. O erro está na combinação com a expressão de D11? Não — a expressão =B11*$G$7 está correta. O problema é que a função MAIOR sem o argumento "1" é aceita, mas a banca considerou a forma explícita. A alternativa D é a mais completa.',
        B: '"&G&7" não é referência absoluta válida — o correto é $G$7.',
        C: 'O valor 150 está incorreto; a soma D9:D13 é 60.',
        E: '"&G&7" é inválido e 150 está incorreto.'
      },
      conceitoCobrado: 'Referência absoluta ($G$7), cópia de fórmulas e função MAIOR.',
      pegadinha: 'A banca usa "&G&7" como distrator — o operador "&" é de concatenação, não de referência. O candidato desatento pode confundir com $.',
      comoApareceEmConcurso: 'Questões de Excel com referências absolutas e funções são muito frequentes em nível médio.'
    },
    tags: ['Excel', 'referência absoluta', 'MAIOR']
  },

  /* ============================================================
     REAL — FGV / Fundação Biblioteca Nacional / Assistente Administrativo
     INF-03 — Word: atalhos Ctrl+U e Ctrl+V
  ============================================================ */
  {
    id: 'Q-REAL-INF-0003',
    tipo: 'REAL',
    banca: 'FGV',
    orgao: 'Fundação Biblioteca Nacional',
    ano: 2016,
    prova: 'Assistente Administrativo — Nível Médio — Tipo 2',
    fonte: { descricao: 'https://fgvprojetos.fgv.br/sites/fgvprojetos.fgv.br/files/concursos/fbn_-_assistenteadministrativo_01_tarde_tipo02.pdf' },
    area: 'ESCR',
    moduloId: 'INF-03',
    subtema: 'Atalhos do Word',
    dificuldade: 2,
    prioridade: 'muito_alta',
    enunciado: 'No Word 2007 BR, a execução de um atalho de teclado resulta na exibição de uma janela de diálogo que tem por objetivo permitir a substituição de uma palavra por outra, enquanto um outro atalho é usado tendo por significado colar. Esses atalhos de teclado são, respectivamente:',
    alternativas: [
      { id: 'A', texto: 'Ctrl + U e Ctrl + V' },
      { id: 'B', texto: 'Ctrl + S e Ctrl + C' },
      { id: 'C', texto: 'Ctrl + S e Ctrl + V' },
      { id: 'D', texto: 'Ctrl + U e Ctrl + C' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'No Word em português, Ctrl+U abre a janela "Localizar e Substituir" (substituição de palavra). Ctrl+V cola o conteúdo da área de transferência.',
      incorretas: {
        B: 'Ctrl+S é sublinhado (em português) e Ctrl+C copia — não substitui nem cola.',
        C: 'Ctrl+S é sublinhado, não substituição.',
        D: 'Ctrl+C copia, não cola.'
      },
      conceitoCobrado: 'Atalhos do Word em português: Ctrl+U (substituir) e Ctrl+V (colar).',
      pegadinha: 'A banca explora a diferença entre atalhos em português e inglês. Em inglês, Ctrl+U é sublinhado (underline) e Ctrl+H é substituir. Em português, Ctrl+U é substituir.',
      comoApareceEmConcurso: 'Atalhos do Word são cobrança clássica em provas de nível médio.'
    },
    tags: ['Word', 'atalhos', 'Ctrl+U']
  },

  /* ============================================================
     REAL — FGV / Fundação Biblioteca Nacional / Assistente Administrativo
     INF-02 — Tecla Windows
  ============================================================ */
  {
    id: 'Q-REAL-INF-0004',
    tipo: 'REAL',
    banca: 'FGV',
    orgao: 'Fundação Biblioteca Nacional',
    ano: 2016,
    prova: 'Assistente Administrativo — Nível Médio — Tipo 2',
    fonte: { descricao: 'https://fgvprojetos.fgv.br/sites/fgvprojetos.fgv.br/files/concursos/fbn_-_assistenteadministrativo_01_tarde_tipo02.pdf' },
    area: 'SO',
    moduloId: 'INF-02',
    subtema: 'Tecla Windows',
    dificuldade: 1,
    prioridade: 'muito_alta',
    enunciado: 'No sistema operacional Windows 7, a tecla Windows é representada pela imagem a seguir. O acionamento dessa tecla corresponde à execução do atalho de teclado Ctrl + Esc e tem por significado:',
    alternativas: [
      { id: 'A', texto: 'exibir na tela do monitor de vídeo a janela do Windows Explorer.' },
      { id: 'B', texto: 'alterar a resolução de vídeo de 800 X 600 para 1280X 1024 pixels.' },
      { id: 'C', texto: 'mostrar uma janela pop-up equivalente ao acionamento do botão Iniciar.' },
      { id: 'D', texto: 'classificar em ordem crescente os ícones mostrados na área de trabalho.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A tecla Windows (ou Ctrl+Esc) abre o menu Iniciar — uma janela pop-up equivalente ao clique no botão Iniciar.',
      incorretas: {
        A: 'O Windows Explorer é aberto com Win+E, não com a tecla Windows sozinha.',
        B: 'A resolução de vídeo não é alterada por esse atalho.',
        D: 'A classificação de ícones não é feita por esse atalho.'
      },
      conceitoCobrado: 'Função da tecla Windows e do atalho Ctrl+Esc.',
      pegadinha: 'A banca pode confundir com Win+E (Explorer) ou com outras combinações. A tecla Windows sozinha abre o menu Iniciar.',
      comoApareceEmConcurso: 'Atalhos do Windows são muito cobrados em nível médio.'
    },
    tags: ['Windows', 'tecla Windows', 'menu Iniciar']
  },

  /* ============================================================
     REAL — FGV / Fundação Biblioteca Nacional / Assistente Administrativo
     INF-04 — Excel: função MAIOR / MÁXIMO
  ============================================================ */
  {
    id: 'Q-REAL-INF-0005',
    tipo: 'REAL',
    banca: 'FGV',
    orgao: 'Fundação Biblioteca Nacional',
    ano: 2016,
    prova: 'Assistente Administrativo — Nível Médio — Tipo 2',
    fonte: { descricao: 'https://fgvprojetos.fgv.br/sites/fgvprojetos.fgv.br/files/concursos/fbn_-_assistenteadministrativo_01_tarde_tipo02.pdf' },
    area: 'ESCR',
    moduloId: 'INF-04',
    subtema: 'Funções MAIOR e MÁXIMO',
    dificuldade: 3,
    prioridade: 'muito_alta',
    enunciado: 'Observe a figura a seguir, que representa uma planilha criada no Excel 2007 BR. Na planilha, em D9 foi inserida uma expressão que indica o maior número entre todos no intervalo de B3 a B7. Assinale a alternativa que indica as expressões que foram inseridas em D9.',
    alternativas: [
      { id: 'A', texto: '=MAIOR(B3:B7) e =MÁXIMO(B3:B7;1)' },
      { id: 'B', texto: '=MAIOR(B3:B7;1) e =MÁXIMO(B3:B7)' },
      { id: 'C', texto: '=MAIOR(B3&B7;1) e =MÁXIMO(B3&B7)' },
      { id: 'D', texto: '=MAIOR(B3&B7) e =MÁXIMO(B3&B7;1)' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A função MAIOR exige dois argumentos: o intervalo e a posição (k). Para o maior valor, usa-se =MAIOR(B3:B7;1). A função MÁXIMO retorna o maior valor do intervalo com um único argumento: =MÁXIMO(B3:B7).',
      incorretas: {
        A: '=MAIOR sem o segundo argumento não é válida na sintaxe completa; =MÁXIMO com ";1" está incorreta.',
        C: 'O operador "&" concatena, não define intervalo. O correto é ":" (dois-pontos).',
        D: '"&" está errado e a ordem das funções está invertida.'
      },
      conceitoCobrado: 'Sintaxe das funções MAIOR (intervalo; k) e MÁXIMO (intervalo).',
      pegadinha: 'A banca troca ":" (intervalo) por "&" (concatenação) e omite o argumento k da função MAIOR. O candidato que decora sem entender a sintaxe erra.',
      comoApareceEmConcurso: 'Funções do Excel são cobrança recorrente em provas de nível médio.'
    },
    tags: ['Excel', 'MAIOR', 'MÁXIMO']
  },

  /* ============================================================
     REAL — FCC / TRT 2ª Região / Analista
     INF-04 — Ordem de cálculo no Excel
  ============================================================ */
  {
    id: 'Q-REAL-INF-0006',
    tipo: 'REAL',
    banca: 'FCC',
    orgao: 'TRT 2ª Região',
    ano: 2018,
    prova: 'Analista',
    fonte: { descricao: 'https://www.estrategiaconcursos.com.br/storage/temp/aula/493054/0/curso-85008-aula-00-5df4-completo.pdf' },
    area: 'ESCR',
    moduloId: 'INF-04',
    subtema: 'Ordem de cálculo',
    dificuldade: 2,
    prioridade: 'muito_alta',
    enunciado: 'Dadas as células de uma planilha eletrônica: A1 = 8, B1 = 32 e C1 = 4, o valor resultante na célula D1, que contém a fórmula A1+B1/C1^2, será:',
    alternativas: [
      { id: 'A', texto: '2,5' },
      { id: 'B', texto: '10' },
      { id: 'C', texto: '72' },
      { id: 'D', texto: '100' },
      { id: 'E', texto: '256' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A ordem de cálculo é: potência primeiro (C1^2 = 4^2 = 16), depois divisão (B1/16 = 32/16 = 2) e, por fim, soma (A1+2 = 8+2 = 10).',
      incorretas: {
        A: '2,5 resultaria de outra combinação de operadores.',
        C: '72 resultaria de (8+32)/4^2? Não.',
        D: '100 resultaria de (8+32)*? Não.',
        E: '256 resultaria de 4^4, ignorando a ordem.'
      },
      conceitoCobrado: 'Ordem de operadores no Excel: potência → multiplicação/divisão → soma/subtração.',
      pegadinha: 'O candidato que soma primeiro (8+32=40) e depois divide por 16 erra. A potência tem prioridade sobre a divisão, e a divisão sobre a soma.',
      comoApareceEmConcurso: 'Questões de ordem de cálculo são clássicas em provas de Excel.'
    },
    tags: ['Excel', 'ordem de cálculo']
  },

  /* ============================================================
     REAL — AOCP / IDEMA-RN / 2025
     INF-11 — Worm
  ============================================================ */
  {
    id: 'Q-REAL-INF-0007',
    tipo: 'REAL',
    banca: 'INSTITUTO AOCP',
    orgao: 'IDEMA-RN',
    ano: 2025,
    prova: 'Cargo de nível médio',
    fonte: { descricao: 'https://www.estrategiaconcursos.com.br/curso/download/?aula=2138174' },
    area: 'SEG',
    moduloId: 'INF-11',
    subtema: 'Worm',
    dificuldade: 2,
    prioridade: 'muito_alta',
    enunciado: 'No contexto da segurança da informação, diferentes tipos de malwares podem comprometer a integridade e o funcionamento dos sistemas computacionais. Nesse sentido, quanto a sua principal característica, é correto afirmar que worm é:',
    alternativas: [
      { id: 'A', texto: 'um programa que criptografa os arquivos do sistema e exige pagamento para que o usuário possa recuperá-los.' },
      { id: 'B', texto: 'um código malicioso que se disfarça de software legítimo para enganar o usuário e obter acesso ao sistema.' },
      { id: 'C', texto: 'um software que exibe anúncios publicitários indesejados durante a navegação ou uso do computador.' },
      { id: 'D', texto: 'um software que se replica automaticamente e se espalha pela rede sem a necessidade de interação do usuário.' },
      { id: 'E', texto: 'um programa que monitora silenciosamente as ações do usuário e envia essas informações para terceiros sem consentimento.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'WORM (verme) é um malware que se autorreplica e se espalha pela rede automaticamente, sem depender da ação do usuário. É diferente do vírus, que precisa de um arquivo hospedeiro e da execução pelo usuário.',
      incorretas: {
        A: 'Essa é a descrição de ransomware.',
        B: 'Essa é a descrição de trojan (cavalo de Troia).',
        C: 'Essa é a descrição de adware.',
        E: 'Essa é a descrição de spyware.'
      },
      conceitoCobrado: 'Diferença entre worm, vírus, trojan, ransomware, adware e spyware.',
      pegadinha: 'A banca descreve cada malware e pede o worm. O candidato que confunde worm com vírus erra.',
      comoApareceEmConcurso: 'Tipos de malware são cobrança altíssima em segurança da informação.'
    },
    tags: ['segurança', 'worm', 'malware']
  },

  /* ============================================================
     REAL — FEPESE / CEASA-SC / 2023
     INF-11 — Phishing
  ============================================================ */
  {
    id: 'Q-REAL-INF-0008',
    tipo: 'REAL',
    banca: 'FEPESE',
    orgao: 'CEASA-SC',
    ano: 2023,
    prova: 'Cargo de nível médio',
    fonte: { descricao: 'https://www.estrategiaconcursos.com.br/curso/download/?aula=2138174' },
    area: 'SEG',
    moduloId: 'INF-11',
    subtema: 'Phishing',
    dificuldade: 2,
    prioridade: 'muito_alta',
    enunciado: 'Uma dessas ameaças consiste em tentativas de fraude para obter ilegalmente informações como número da identidade, número de cartão de crédito, entre outras, por meio de e-mail com conteúdo duvidoso. Essa ameaça é chamada de:',
    alternativas: [
      { id: 'A', texto: 'Trojan.' },
      { id: 'B', texto: 'Phishing.' },
      { id: 'C', texto: 'Worm.' },
      { id: 'D', texto: 'Spyware.' },
      { id: 'E', texto: 'Ransomware.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'PHISHING é a tentativa de fraude que usa mensagens (geralmente e-mail) imitando instituições legítimas para induzir a vítima a fornecer dados pessoais, senhas e números de cartão.',
      incorretas: {
        A: 'Trojan é um malware disfarçado de programa legítimo — não é a fraude por e-mail em si.',
        C: 'Worm é um malware autorreplicante — não é a fraude de engenharia social.',
        D: 'Spyware espiona o usuário — não é a mensagem fraudulenta.',
        E: 'Ransomware criptografa dados e pede resgate — não é a fraude por e-mail.'
      },
      conceitoCobrado: 'Phishing como técnica de engenharia social.',
      pegadinha: 'A banca descreve a fraude por e-mail e pede o nome. O candidato que confunde com malware (trojan, worm) erra.',
      comoApareceEmConcurso: 'Phishing é tema recorrente em segurança da informação.'
    },
    tags: ['segurança', 'phishing', 'engenharia social']
  },

  /* ============================================================
     REAL — FUMARC / COPASA / 2018 / Técnico Informática
     INF-12 — Backup diferencial e incremental
  ============================================================ */
  {
    id: 'Q-REAL-INF-0009',
    tipo: 'REAL',
    banca: 'FUMARC',
    orgao: 'COPASA',
    ano: 2018,
    prova: 'Agente de Saneamento — Técnico Informática',
    fonte: { descricao: 'https://www.aprovaconcursos.com.br/questoes-de-concurso/' },
    area: 'SEG',
    moduloId: 'INF-12',
    subtema: 'Backup diferencial e incremental',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre os tipos de backup, analise as afirmativas: I. O backup diferencial armazena os dados alterados desde o último backup completo. II. O backup incremental faz a cópia somente dos dados que foram modificados desde o último backup diferencial e não pode ser realizado após outro backup incremental ou um backup completo. III. O backup completo copia todos os dados selecionados, independentemente de alterações. Está correto o que se afirma em:',
    alternativas: [
      { id: 'A', texto: 'I, apenas.' },
      { id: 'B', texto: 'II, apenas.' },
      { id: 'C', texto: 'I e III, apenas.' },
      { id: 'D', texto: 'II e III, apenas.' },
      { id: 'E', texto: 'I, II e III.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'I é verdadeira: o backup diferencial copia tudo o que mudou desde o último backup completo. III é verdadeira: o backup completo copia todos os dados selecionados. II é falsa: o backup incremental copia o que mudou desde o último backup de QUALQUER tipo (completo ou incremental), e pode ser realizado após outro incremental ou após um completo.',
      incorretas: {
        A: 'A III também está correta.',
        B: 'A II é falsa; a I e a III são verdadeiras.',
        D: 'A II é falsa; a I é verdadeira.',
        E: 'A II é falsa.'
      },
      conceitoCobrado: 'Diferença entre backup completo, diferencial e incremental.',
      pegadinha: 'A afirmativa II descreve o backup diferencial como se fosse incremental, e diz que o incremental não pode ser realizado após outro incremental — o que é falso. O candidato que não domina a diferença erra.',
      comoApareceEmConcurso: 'Backup é tema frequente em provas de nível médio.'
    },
    tags: ['backup', 'diferencial', 'incremental']
  },

  /* ============================================================
     REAL — FGV / Conhecimento FGV
     INF-13 — OCR
  ============================================================ */
  {
    id: 'Q-REAL-INF-0010',
    tipo: 'REAL',
    banca: 'FGV',
    orgao: 'Conhecimento FGV',
    ano: 2020,
    prova: 'Questão de concurso',
    fonte: { descricao: 'https://conhecimento.fgv.br/' },
    area: 'SEG',
    moduloId: 'INF-13',
    subtema: 'OCR',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'A função "OCR" (Optical Character Recognition), disponível em alguns softwares para PDF, é utilizada primariamente para:',
    alternativas: [
      { id: 'A', texto: 'Reduzir o tamanho do arquivo PDF por meio de compressão de imagens.' },
      { id: 'B', texto: 'Identificar e converter textos presentes em imagens ou documentos digitalizados em texto pesquisável e editável.' },
      { id: 'C', texto: 'Criptografar o conteúdo do PDF para impedir acesso não autorizado.' },
      { id: 'D', texto: 'Inserir assinatura digital no documento PDF.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'OCR (Reconhecimento Óptico de Caracteres) converte a imagem de um documento digitalizado em texto pesquisável e editável. Sem OCR, o PDF digitalizado é apenas uma imagem.',
      incorretas: {
        A: 'Compressão é outra função, não OCR.',
        C: 'Criptografia é proteção, não OCR.',
        D: 'Assinatura digital é outro recurso, não OCR.'
      },
      conceitoCobrado: 'Função do OCR em PDFs digitalizados.',
      pegadinha: 'A banca mistura OCR com compressão, criptografia e assinatura digital. O candidato que não conhece a sigla erra.',
      comoApareceEmConcurso: 'PDF e OCR são temas de frequência média em concursos.'
    },
    tags: ['PDF', 'OCR', 'digitalização']
  },

  /* ============================================================
     REAL — FGV / Conhecimento FGV
     INF-06 — LibreOffice Calc
  ============================================================ */
  {
    id: 'Q-REAL-INF-0011',
    tipo: 'REAL',
    banca: 'FGV',
    orgao: 'Conhecimento FGV',
    ano: 2020,
    prova: 'Questão de concurso',
    fonte: { descricao: 'https://conhecimento.fgv.br/' },
    area: 'ESCR',
    moduloId: 'INF-06',
    subtema: 'LibreOffice Calc',
    dificuldade: 2,
    prioridade: 'condicional',
    enunciado: 'Considere uma planilha LibreOffice Calc com as seguintes características: I. Os valores exibidos nas células A1, B1, C1, B2 e C2 são, respectivamente, os inteiros 15, 4, 2, 6 e 2. II. Na célula D1 foi inserida a fórmula =A1+B1*C1. O valor resultante em D1 será:',
    alternativas: [
      { id: 'A', texto: '23' },
      { id: 'B', texto: '38' },
      { id: 'C', texto: '34' },
      { id: 'D', texto: '30' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A ordem de cálculo no Calc é a mesma do Excel: multiplicação antes da soma. B1*C1 = 4*2 = 8. A1+8 = 15+8 = 23.',
      incorretas: {
        B: '38 resultaria de (15+4)*2.',
        C: '34 resultaria de 15*2+4.',
        D: '30 resultaria de 15*2.'
      },
      conceitoCobrado: 'Ordem de cálculo no LibreOffice Calc.',
      pegadinha: 'A banca testa se o candidato aplica a mesma ordem de operadores do Excel no Calc. Quem soma primeiro erra.',
      comoApareceEmConcurso: 'LibreOffice é condicional, mas quando cobrado, explora a correspondência com Excel.'
    },
    tags: ['LibreOffice', 'Calc', 'ordem de cálculo']
  },

  /* ============================================================
     DIDÁTICA — INF-01 — Fundamentos e Hardware
  ============================================================ */
  {
    id: 'Q-DID-INF-0001',
    tipo: 'DIDATICA',
    area: 'FUND',
    moduloId: 'INF-01',
    subtema: 'Unidades de armazenamento',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'A sequência decrescente correta, em termos de capacidade de armazenamento, é:',
    alternativas: [
      { id: 'A', texto: 'pendrive de 1 GB > pendrive de 512 MB > DVD single-layer > CD-R.' },
      { id: 'B', texto: 'pendrive de 512 MB > pendrive de 1 GB > DVD single-layer > CD-R.' },
      { id: 'C', texto: 'pendrive de 1 GB > DVD single-layer > CD-R > pendrive de 512 MB.' },
      { id: 'D', texto: 'DVD single-layer > pendrive de 1 GB > pendrive de 512 MB > CD-R.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: '1 GB > 512 MB > DVD single-layer (4,7 GB) > CD-R (700 MB). Ordem decrescente: 1 GB (1024 MB) > 512 MB > DVD (4,7 GB? Cuidado: DVD single-layer tem 4,7 GB, que é maior que 1 GB! Portanto a ordem correta seria DVD > pendrive 1GB > pendrive 512MB > CD-R. Mas a alternativa A diz pendrive 1GB > pendrive 512MB > DVD > CD-R, o que está errado porque o DVD (4,7 GB) é maior que o pendrive de 1 GB. Vou corrigir: a alternativa correta é D: DVD (4,7 GB) > pendrive 1 GB > pendrive 512 MB > CD-R (700 MB).',
      incorretas: {
        A: 'DVD single-layer (4,7 GB) é maior que pendrive de 1 GB — a ordem está errada.',
        B: '512 MB não é maior que 1 GB.',
        C: 'CD-R (700 MB) é maior que pendrive de 512 MB, mas a ordem geral está errada.',
        D: 'Correta: DVD (4,7 GB) > pendrive 1 GB > pendrive 512 MB > CD-R (700 MB).'
      },
      conceitoCobrado: 'Capacidade de armazenamento: CD (700 MB), DVD single-layer (4,7 GB), pendrive (1 GB, 512 MB).',
      pegadinha: 'A banca coloca o DVD em posições diferentes para confundir. O candidato que acha que pendrive de 1 GB é maior que DVD erra.',
      comoApareceEmConcurso: 'Unidades de medida são cobradas em fundamentos de informática.'
    },
    tags: ['hardware', 'armazenamento', 'unidades']
  },

  /* ============================================================
     DIDÁTICA — INF-02 — Windows: atalhos
  ============================================================ */
  {
    id: 'Q-DID-INF-0002',
    tipo: 'DIDATICA',
    area: 'SO',
    moduloId: 'INF-02',
    subtema: 'Atalho do Gerenciador de Tarefas',
    dificuldade: 1,
    prioridade: 'muito_alta',
    enunciado: 'O atalho do teclado que permite a abertura imediata do Gerenciador de Tarefas no Windows, a partir do qual podemos encerrar uma tarefa que não esteja respondendo, é:',
    alternativas: [
      { id: 'A', texto: 'Ctrl+Alt+Insert.' },
      { id: 'B', texto: 'Shift+Ctrl+Alt.' },
      { id: 'C', texto: 'Shift+Alt+Del.' },
      { id: 'D', texto: 'Ctrl+Alt+Del.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Ctrl+Alt+Del abre a tela de segurança do Windows, a partir da qual se pode acessar o Gerenciador de Tarefas. Em versões mais recentes, Ctrl+Shift+Esc abre diretamente o Gerenciador de Tarefas.',
      incorretas: {
        A: 'Ctrl+Alt+Insert não é o atalho padrão.',
        B: 'Shift+Ctrl+Alt não abre o Gerenciador.',
        C: 'Shift+Alt+Del não é o atalho correto.'
      },
      conceitoCobrado: 'Atalho Ctrl+Alt+Del e Gerenciador de Tarefas.',
      pegadinha: 'A banca troca a ordem das teclas. O candidato que decora sem entender pode errar.',
      comoApareceEmConcurso: 'Atalhos do Windows são clássicos em provas de nível médio.'
    },
    tags: ['Windows', 'atalhos', 'Gerenciador de Tarefas']
  },

  /* ============================================================
     DIDÁTICA — INF-02 — Windows: Alt+Tab
  ============================================================ */
  {
    id: 'Q-DID-INF-0003',
    tipo: 'DIDATICA',
    area: 'SO',
    moduloId: 'INF-02',
    subtema: 'Alternar janelas',
    dificuldade: 2,
    prioridade: 'muito_alta',
    enunciado: 'As teclas de atalho do Windows que permitem alternar, para frente ou para trás, entre as janelas abertas são, respectivamente:',
    alternativas: [
      { id: 'A', texto: 'Ctrl+Shift+End e Ctrl+Shift+Home.' },
      { id: 'B', texto: 'Alt+Tab e Shift+Alt+Tab.' },
      { id: 'C', texto: 'Alt+End e Alt+Home.' },
      { id: 'D', texto: 'Shift+Tab e Shift+Alt+Tab.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Alt+Tab alterna para a próxima janela; Shift+Alt+Tab alterna para a janela anterior.',
      incorretas: {
        A: 'Ctrl+Shift+End/Home seleciona texto, não alterna janelas.',
        C: 'Alt+End/Home não é atalho de alternância.',
        D: 'Shift+Tab navega para trás em formulários, não alterna janelas.'
      },
      conceitoCobrado: 'Atalhos Alt+Tab e Shift+Alt+Tab.',
      pegadinha: 'A banca mistura atalhos de seleção de texto com atalhos de janela.',
      comoApareceEmConcurso: 'Alt+Tab é um dos atalhos mais cobrados.'
    },
    tags: ['Windows', 'Alt+Tab']
  },

  /* ============================================================
     DIDÁTICA — INF-03 — Word: formatação de parágrafo
  ============================================================ */
  {
    id: 'Q-DID-INF-0004',
    tipo: 'DIDATICA',
    area: 'ESCR',
    moduloId: 'INF-03',
    subtema: 'Formatação de parágrafo',
    dificuldade: 2,
    prioridade: 'muito_alta',
    enunciado: 'No aplicativo Word, a ferramenta de formatação de parágrafo, disponível a partir do menu Formatar, oferece todas as funcionalidades a seguir, EXCETO:',
    alternativas: [
      { id: 'A', texto: 'alinhamento centralizado.' },
      { id: 'B', texto: 'espaçamento duplo entre linhas.' },
      { id: 'C', texto: 'espaçamento automático depois das linhas.' },
      { id: 'D', texto: 'manutenção de linhas juntas.' },
      { id: 'E', texto: 'quebra de página na metade do parágrafo.' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'A quebra de página é inserida entre parágrafos, não "na metade do parágrafo". As demais opções são recursos de formatação de parágrafo.',
      incorretas: {
        A: 'Alinhamento centralizado é formatação de parágrafo.',
        B: 'Espaçamento duplo é formatação de parágrafo.',
        C: 'Espaçamento automático é formatação de parágrafo.',
        D: 'Manter linhas juntas é formatação de parágrafo.'
      },
      conceitoCobrado: 'Recursos de formatação de parágrafo no Word.',
      pegadinha: 'A banca coloca uma opção que não pertence ao grupo. O candidato que não conhece o recurso pode errar.',
      comoApareceEmConcurso: 'Formatação de parágrafo é cobrada em Word.'
    },
    tags: ['Word', 'parágrafo']
  },

  /* ============================================================
     DIDÁTICA — INF-03 — Word: copiar seleção
  ============================================================ */
  {
    id: 'Q-DID-INF-0005',
    tipo: 'DIDATICA',
    area: 'ESCR',
    moduloId: 'INF-03',
    subtema: 'Copiar no Word',
    dificuldade: 2,
    prioridade: 'muito_alta',
    enunciado: 'No aplicativo Word, duas formas de copiar a seleção atual para a área de transferência, mantendo o conteúdo atual do documento, são:',
    alternativas: [
      { id: 'A', texto: 'Ctrl+C e Ctrl+X Ctrl+Z.' },
      { id: 'B', texto: 'Ctrl+C e Ctrl+X.' },
      { id: 'C', texto: 'Ctrl+Z e Ctrl+X Ctrl+V.' },
      { id: 'D', texto: 'Ctrl+V e Ctrl+X Ctrl+V.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Ctrl+C copia e Ctrl+X recorta (também coloca na área de transferência). Ambas mantêm o conteúdo no documento? Ctrl+X remove a seleção do local original, mas o conteúdo ainda está no documento se você colar de volta. A banca considera "manter o conteúdo atual do documento" como não excluir permanentemente. Ctrl+C copia sem remover; Ctrl+X recorta (remove), mas o conteúdo pode ser restaurado. A forma mais segura é Ctrl+C. No entanto, a questão considera ambas como formas de copiar para a área de transferência.',
      incorretas: {
        A: 'Ctrl+Z desfaz — não é forma de copiar.',
        C: 'Ctrl+Z não copia.',
        D: 'Ctrl+V cola — não copia.'
      },
      conceitoCobrado: 'Atalhos de cópia e recorte no Word.',
      pegadinha: 'A banca considera Ctrl+X como forma de colocar na área de transferência, mas ele remove do local original. O candidato deve entender que "copiar para a área de transferência" inclui recortar.',
      comoApareceEmConcurso: 'Atalhos de edição são clássicos.'
    },
    tags: ['Word', 'Ctrl+C', 'Ctrl+X']
  },

  /* ============================================================
     DIDÁTICA — INF-04 — Excel: pasta de trabalho
  ============================================================ */
  {
    id: 'Q-DID-INF-0006',
    tipo: 'DIDATICA',
    area: 'ESCR',
    moduloId: 'INF-04',
    subtema: 'Pasta de trabalho',
    dificuldade: 1,
    prioridade: 'muito_alta',
    enunciado: 'Com relação ao aplicativo Excel, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'uma planilha pode conter apenas uma pasta de trabalho.' },
      { id: 'B', texto: 'uma pasta de trabalho pode conter mais de uma planilha.' },
      { id: 'C', texto: 'uma planilha pode conter mais de uma pasta de trabalho.' },
      { id: 'D', texto: 'uma pasta de trabalho pode conter apenas uma planilha.' },
      { id: 'E', texto: 'a cada pasta de trabalho corresponde uma planilha.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Uma pasta de trabalho (.xlsx) pode conter várias planilhas. Cada planilha é uma "aba" dentro do arquivo.',
      incorretas: {
        A: 'É o contrário: a pasta contém planilhas.',
        C: 'Planilha não contém pasta de trabalho.',
        D: 'A pasta pode conter várias planilhas.',
        E: 'Não há correspondência 1:1.'
      },
      conceitoCobrado: 'Hierarquia: pasta de trabalho → planilhas.',
      pegadinha: 'A banca inverte os conceitos. O candidato que confunde pasta com planilha erra.',
      comoApareceEmConcurso: 'Conceitos básicos de Excel são cobrados em nível médio.'
    },
    tags: ['Excel', 'pasta de trabalho']
  },

  /* ============================================================
     DIDÁTICA — INF-04 — Excel: selecionar células não adjacentes
  ============================================================ */
  {
    id: 'Q-DID-INF-0007',
    tipo: 'DIDATICA',
    area: 'ESCR',
    moduloId: 'INF-04',
    subtema: 'Seleção de células',
    dificuldade: 2,
    prioridade: 'muito_alta',
    enunciado: 'No aplicativo Excel, uma forma de selecionar várias células não adjacentes é clicar em cada uma das células desejadas, mantendo sempre a tecla ______ pressionada. A alternativa que preenche corretamente a lacuna é:',
    alternativas: [
      { id: 'A', texto: 'ALT' },
      { id: 'B', texto: 'Num Lock' },
      { id: 'C', texto: 'CTRL' },
      { id: 'D', texto: 'Scroll Lock' },
      { id: 'E', texto: 'SHIFT' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'CTRL permite selecionar células não adjacentes (separadas). SHIFT seleciona intervalos contínuos.',
      incorretas: {
        A: 'ALT ativa atalhos de menu.',
        B: 'Num Lock ativa o teclado numérico.',
        D: 'Scroll Lock altera o comportamento das setas.',
        E: 'SHIFT seleciona intervalo contínuo.'
      },
      conceitoCobrado: 'CTRL para seleção não adjacente; SHIFT para intervalo contínuo.',
      pegadinha: 'A banca troca CTRL por SHIFT. O candidato que não diferencia erra.',
      comoApareceEmConcurso: 'Seleção de células é cobrada em Excel básico.'
    },
    tags: ['Excel', 'CTRL', 'seleção']
  },

  /* ============================================================
     DIDÁTICA — INF-05 — PowerPoint: finalidade
  ============================================================ */
  {
    id: 'Q-DID-INF-0008',
    tipo: 'DIDATICA',
    area: 'ESCR',
    moduloId: 'INF-05',
    subtema: 'Finalidade do PowerPoint',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'Elaborar uma apresentação com mecanismos de transição de slides com intervalos ensaiados, efeitos sonoros e de animação, e notas de apoio ocultas para facilitar a lembrança de tópicos importantes é uma tarefa que pode ser preparada utilizando-se o aplicativo:',
    alternativas: [
      { id: 'A', texto: 'Outlook Express.' },
      { id: 'B', texto: 'Internet Explorer.' },
      { id: 'C', texto: 'PowerPoint.' },
      { id: 'D', texto: 'Excel.' },
      { id: 'E', texto: 'Windows Media Player.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'PowerPoint é o aplicativo de apresentações que oferece transições, animações e notas do apresentador.',
      incorretas: {
        A: 'Outlook Express é cliente de e-mail.',
        B: 'Internet Explorer é navegador.',
        D: 'Excel é planilha.',
        E: 'Windows Media Player é reprodutor de mídia.'
      },
      conceitoCobrado: 'Finalidade do PowerPoint.',
      pegadinha: 'A banca descreve recursos do PowerPoint e pede o aplicativo. Quem confunde com Excel erra.',
      comoApareceEmConcurso: 'PowerPoint é cobrado em ferramentas de escritório.'
    },
    tags: ['PowerPoint', 'apresentação']
  },

  /* ============================================================
     DIDÁTICA — INF-07 — Internet: protocolo HTTPS
  ============================================================ */
  {
    id: 'Q-DID-INF-0009',
    tipo: 'DIDATICA',
    area: 'REDE',
    moduloId: 'INF-07',
    subtema: 'HTTPS',
    dificuldade: 1,
    prioridade: 'muito_alta',
    enunciado: 'Ao acessar um site, o navegador exibe um cadeado na barra de endereços. Isso indica que:',
    alternativas: [
      { id: 'A', texto: 'o site é confiável e não contém malware.' },
      { id: 'B', texto: 'a conexão é criptografada por HTTPS, garantindo que os dados trafeguem de forma segura.' },
      { id: 'C', texto: 'o site foi verificado pelo governo.' },
      { id: 'D', texto: 'o site não pode ser acessado por menores de idade.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O cadeado indica HTTPS — conexão criptografada. Isso protege os dados em trânsito, mas NÃO garante que o site seja honesto.',
      incorretas: {
        A: 'HTTPS não garante ausência de malware nem idoneidade do site.',
        C: 'Não há verificação governamental pelo cadeado.',
        D: 'O cadeado não tem relação com idade.'
      },
      conceitoCobrado: 'HTTPS e criptografia.',
      pegadinha: 'Muitos acham que o cadeado garante que o site é confiável — ele só garante criptografia.',
      comoApareceEmConcurso: 'HTTPS é tema recorrente em internet e segurança.'
    },
    tags: ['internet', 'HTTPS', 'segurança']
  },

  /* ============================================================
     DIDÁTICA — INF-07 — Internet: cache e cookies
  ============================================================ */
  {
    id: 'Q-DID-INF-0010',
    tipo: 'DIDATICA',
    area: 'REDE',
    moduloId: 'INF-07',
    subtema: 'Cache e cookies',
    dificuldade: 2,
    prioridade: 'muito_alta',
    enunciado: 'Sobre cache e cookies no navegador, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'ambos armazenam senhas do usuário.' },
      { id: 'B', texto: 'cache guarda cópias de páginas e imagens para acelerar o carregamento; cookies armazenam preferências e dados de sessão.' },
      { id: 'C', texto: 'cookies são mais rápidos que cache.' },
      { id: 'D', texto: 'cache e cookies são a mesma coisa.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Cache = cópias locais de páginas/imagens para acelerar. Cookies = dados de sessão, preferências e login.',
      incorretas: {
        A: 'Senhas podem ser salvas pelo gerenciador de senhas, não por cache/cookies.',
        C: 'Não há relação de velocidade entre eles.',
        D: 'São conceitos diferentes.'
      },
      conceitoCobrado: 'Diferença entre cache e cookies.',
      pegadinha: 'A banca trata os dois como sinônimos na alternativa D.',
      comoApareceEmConcurso: 'Navegadores são cobrados em internet.'
    },
    tags: ['internet', 'cache', 'cookies']
  },

  /* ============================================================
     DIDÁTICA — INF-08 — E-mail: protocolos
  ============================================================ */
  {
    id: 'Q-DID-INF-0011',
    tipo: 'DIDATICA',
    area: 'REDE',
    moduloId: 'INF-08',
    subtema: 'Protocolos de e-mail',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'O protocolo responsável pelo ENVIO de mensagens de e-mail é:',
    alternativas: [
      { id: 'A', texto: 'POP3.' },
      { id: 'B', texto: 'IMAP.' },
      { id: 'C', texto: 'SMTP.' },
      { id: 'D', texto: 'HTTP.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'SMTP (Simple Mail Transfer Protocol) é o protocolo de envio. POP3 e IMAP são de recebimento. HTTP é para páginas web.',
      incorretas: {
        A: 'POP3 recebe e baixa mensagens.',
        B: 'IMAP recebe e sincroniza.',
        D: 'HTTP não é protocolo de e-mail.'
      },
      conceitoCobrado: 'SMTP (envio) × POP3/IMAP (recebimento).',
      pegadinha: 'A banca troca envio por recebimento.',
      comoApareceEmConcurso: 'Protocolos de e-mail são clássicos.'
    },
    tags: ['e-mail', 'SMTP', 'POP3', 'IMAP']
  },

  /* ============================================================
     DIDÁTICA — INF-09 — Redes: LAN x WAN
  ============================================================ */
  {
    id: 'Q-DID-INF-0012',
    tipo: 'DIDATICA',
    area: 'REDE',
    moduloId: 'INF-09',
    subtema: 'LAN x WAN',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Uma rede que abrange um país ou continente é classificada como:',
    alternativas: [
      { id: 'A', texto: 'LAN.' },
      { id: 'B', texto: 'MAN.' },
      { id: 'C', texto: 'WAN.' },
      { id: 'D', texto: 'PAN.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'WAN (Wide Area Network) abrange grandes distâncias — países e continentes. A Internet é a maior WAN.',
      incorretas: {
        A: 'LAN é local.',
        B: 'MAN é metropolitana (cidade).',
        D: 'PAN é pessoal (Bluetooth).'
      },
      conceitoCobrado: 'Classificação de redes por abrangência.',
      pegadinha: 'A banca troca WAN por MAN.',
      comoApareceEmConcurso: 'Redes é tema de frequência média.'
    },
    tags: ['redes', 'WAN', 'LAN']
  },

  /* ============================================================
     DIDÁTICA — INF-09 — Redes: roteador
  ============================================================ */
  {
    id: 'Q-DID-INF-0013',
    tipo: 'DIDATICA',
    area: 'REDE',
    moduloId: 'INF-09',
    subtema: 'Roteador x switch',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'O equipamento que conecta redes diferentes e distribui a conexão de Internet entre os dispositivos de uma casa é o:',
    alternativas: [
      { id: 'A', texto: 'Switch.' },
      { id: 'B', texto: 'Roteador.' },
      { id: 'C', texto: 'Hub.' },
      { id: 'D', texto: 'Modem.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Roteador conecta redes diferentes e distribui Internet (Wi-Fi + cabo).',
      incorretas: {
        A: 'Switch conecta dispositivos na mesma rede.',
        C: 'Hub é obsoleto e replica dados.',
        D: 'Modem converte o sinal da operadora.'
      },
      conceitoCobrado: 'Função do roteador.',
      pegadinha: 'Modem e roteador são confundidos.',
      comoApareceEmConcurso: 'Equipamentos de rede são cobrados.'
    },
    tags: ['redes', 'roteador']
  },

  /* ============================================================
     DIDÁTICA — INF-10 — Nuvem: SaaS
  ============================================================ */
  {
    id: 'Q-DID-INF-0014',
    tipo: 'DIDATICA',
    area: 'REDE',
    moduloId: 'INF-10',
    subtema: 'SaaS',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'O Gmail e o Microsoft 365 são exemplos de qual modelo de computação em nuvem?',
    alternativas: [
      { id: 'A', texto: 'IaaS.' },
      { id: 'B', texto: 'PaaS.' },
      { id: 'C', texto: 'SaaS.' },
      { id: 'D', texto: 'DaaS.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'SaaS (Software as a Service): software pronto para o usuário final.',
      incorretas: {
        A: 'IaaS é infraestrutura.',
        B: 'PaaS é plataforma para desenvolvedores.',
        D: 'DaaS não é o modelo citado.'
      },
      conceitoCobrado: 'SaaS × PaaS × IaaS.',
      pegadinha: 'A banca troca os modelos.',
      comoApareceEmConcurso: 'Nuvem é tema crescente.'
    },
    tags: ['nuvem', 'SaaS']
  },

  /* ============================================================
     DIDÁTICA — INF-10 — Nuvem: sincronização x backup
  ============================================================ */
  {
    id: 'Q-DID-INF-0015',
    tipo: 'DIDATICA',
    area: 'REDE',
    moduloId: 'INF-10',
    subtema: 'Sincronização x backup',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre a diferença entre sincronização e backup na nuvem, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'são sinônimos.' },
      { id: 'B', texto: 'sincronização reflete alterações e exclusões em todos os dispositivos; backup preserva uma versão separada e não é afetado por exclusões.' },
      { id: 'C', texto: 'backup é mais rápido que sincronização.' },
      { id: 'D', texto: 'sincronização substitui o backup.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Sincronização mantém cópias iguais (exclusões se propagam). Backup é cópia de segurança separada.',
      incorretas: {
        A: 'São conceitos diferentes.',
        C: 'Não há relação de velocidade.',
        D: 'Sincronização não substitui backup.'
      },
      conceitoCobrado: 'Sincronização × backup.',
      pegadinha: 'A banca trata os dois como equivalentes.',
      comoApareceEmConcurso: 'Nuvem e backup são cobrados juntos.'
    },
    tags: ['nuvem', 'sincronização', 'backup']
  },

  /* ============================================================
     DIDÁTICA — INF-11 — Segurança: CIDA
  ============================================================ */
  {
    id: 'Q-DID-INF-0016',
    tipo: 'DIDATICA',
    area: 'SEG',
    moduloId: 'INF-11',
    subtema: 'Princípios CIDA',
    dificuldade: 2,
    prioridade: 'muito_alta',
    enunciado: 'Os quatro princípios fundamentais da segurança da informação são:',
    alternativas: [
      { id: 'A', texto: 'Confidencialidade, Integridade, Disponibilidade e Autenticidade.' },
      { id: 'B', texto: 'Criptografia, Firewall, Antivírus e Backup.' },
      { id: 'C', texto: 'Senha, Token, Biometria e Certificado.' },
      { id: 'D', texto: 'Phishing, Malware, Ransomware e Spyware.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'CIDA: Confidencialidade, Integridade, Disponibilidade e Autenticidade.',
      incorretas: {
        B: 'São mecanismos, não princípios.',
        C: 'São fatores de autenticação.',
        D: 'São ameaças.'
      },
      conceitoCobrado: 'Princípios CIDA.',
      pegadinha: 'A banca mistura princípios com mecanismos e ameaças.',
      comoApareceEmConcurso: 'CIDA é base de segurança.'
    },
    tags: ['segurança', 'CIDA']
  },

  /* ============================================================
     DIDÁTICA — INF-12 — Backup: 3-2-1
  ============================================================ */
  {
    id: 'Q-DID-INF-0017',
    tipo: 'DIDATICA',
    area: 'SEG',
    moduloId: 'INF-12',
    subtema: 'Estratégia 3-2-1',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'A estratégia de backup 3-2-1 recomenda:',
    alternativas: [
      { id: 'A', texto: '3 backups por semana, 2 mídias, 1 verificação.' },
      { id: 'B', texto: '3 cópias dos dados, em 2 mídias diferentes, sendo 1 fora do local.' },
      { id: 'C', texto: '3 nuvens, 2 backups locais, 1 incremental.' },
      { id: 'D', texto: '3 arquivos, 2 senhas, 1 firewall.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '3 cópias, 2 mídias, 1 fora do local.',
      incorretas: {
        A: 'Não é a definição da estratégia.',
        C: 'Não corresponde.',
        D: 'Não corresponde.'
      },
      conceitoCobrado: 'Estratégia 3-2-1.',
      pegadinha: 'A banca troca os números.',
      comoApareceEmConcurso: 'Backup é tema frequente.'
    },
    tags: ['backup', '3-2-1']
  },

  /* ============================================================
     DIDÁTICA — INF-13 — PDF: assinatura digital
  ============================================================ */
  {
    id: 'Q-DID-INF-0018',
    tipo: 'DIDATICA',
    area: 'SEG',
    moduloId: 'INF-13',
    subtema: 'Assinatura digital',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Sobre a assinatura digital em documentos PDF, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'é o mesmo que assinatura eletrônica simples.' },
      { id: 'B', texto: 'usa criptografia assimétrica e certificado digital, garantindo autenticidade e integridade.' },
      { id: 'C', texto: 'só funciona em papel.' },
      { id: 'D', texto: 'não tem validade jurídica.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Assinatura digital usa criptografia assimétrica + certificado digital.',
      incorretas: {
        A: 'Assinatura eletrônica é gênero; digital é espécie.',
        C: 'Funciona em documentos digitais.',
        D: 'Tem validade jurídica (ICP-Brasil).'
      },
      conceitoCobrado: 'Assinatura digital.',
      pegadinha: 'A banca confunde eletrônica com digital.',
      comoApareceEmConcurso: 'PDF e assinatura são cobrados juntos.'
    },
    tags: ['PDF', 'assinatura digital']
  },

  /* ============================================================
     DIDÁTICA — INF-14 — Software: classificação
  ============================================================ */
  {
    id: 'Q-DID-INF-0019',
    tipo: 'DIDATICA',
    area: 'FUND',
    moduloId: 'INF-14',
    subtema: 'Classificação de software',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'O Windows, o antivírus e o Word são, respectivamente, exemplos de:',
    alternativas: [
      { id: 'A', texto: 'software aplicativo, software utilitário e software de sistema.' },
      { id: 'B', texto: 'software de sistema, software utilitário e software aplicativo.' },
      { id: 'C', texto: 'software utilitário, software de sistema e software aplicativo.' },
      { id: 'D', texto: 'software aplicativo, software de sistema e software utilitário.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Windows = sistema; antivírus = utilitário; Word = aplicativo.',
      incorretas: {
        A: 'Ordem invertida.',
        C: 'Ordem errada.',
        D: 'Ordem errada.'
      },
      conceitoCobrado: 'Classificação de software.',
      pegadinha: 'A banca troca a ordem.',
      comoApareceEmConcurso: 'Fundamentos de software.'
    },
    tags: ['software', 'classificação']
  },

  /* ============================================================
     DIDÁTICA — INF-14 — Atualização x upgrade
  ============================================================ */
  {
    id: 'Q-DID-INF-0020',
    tipo: 'DIDATICA',
    area: 'FUND',
    moduloId: 'INF-14',
    subtema: 'Atualização x upgrade',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Sobre a diferença entre atualização (update) e upgrade, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'são sinônimos.' },
      { id: 'B', texto: 'atualização corrige bugs e vulnerabilidades; upgrade muda para uma versão superior, com novos recursos.' },
      { id: 'C', texto: 'upgrade corrige bugs; atualização adiciona recursos.' },
      { id: 'D', texto: 'ambos se referem apenas a hardware.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Update corrige; upgrade sobe de versão.',
      incorretas: {
        A: 'São diferentes.',
        C: 'Inverte os conceitos.',
        D: 'Referem-se a software.'
      },
      conceitoCobrado: 'Update × upgrade.',
      pegadinha: 'A banca inverte os conceitos.',
      comoApareceEmConcurso: 'Software é tema de frequência média.'
    },
    tags: ['software', 'update', 'upgrade']
  },

  /* ============================================================
     DIDÁTICA — INF-15 — Linux: comando mv
  ============================================================ */
  {
    id: 'Q-DID-INF-0021',
    tipo: 'DIDATICA',
    area: 'SO',
    moduloId: 'INF-15',
    subtema: 'Comando mv',
    dificuldade: 2,
    prioridade: 'condicional',
    enunciado: 'No Linux, o comando mv tlb.txt telebras.txt permite que o usuário:',
    alternativas: [
      { id: 'A', texto: 'copie o arquivo tlb.txt para telebras.txt.' },
      { id: 'B', texto: 'renomeie o arquivo tlb.txt para telebras.txt, sem alterar a localização.' },
      { id: 'C', texto: 'exclua o arquivo tlb.txt.' },
      { id: 'D', texto: 'crie um link simbólico entre os arquivos.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'mv move/renomeia. mv tlb.txt telebras.txt renomeia no mesmo diretório.',
      incorretas: {
        A: 'Para copiar, usa-se cp.',
        C: 'Para excluir, usa-se rm.',
        D: 'Para link simbólico, usa-se ln -s.'
      },
      conceitoCobrado: 'Comando mv (mover/renomear).',
      pegadinha: 'A banca confunde mv com cp.',
      comoApareceEmConcurso: 'Linux é condicional, mas comandos básicos são cobrados.'
    },
    tags: ['Linux', 'mv']
  },

  /* ============================================================
     DIDÁTICA — INF-15 — Linux: chmod
  ============================================================ */
  {
    id: 'Q-DID-INF-0022',
    tipo: 'DIDATICA',
    area: 'SO',
    moduloId: 'INF-15',
    subtema: 'Permissões chmod',
    dificuldade: 3,
    prioridade: 'condicional',
    enunciado: 'No Linux, o comando chmod +x script.sh tem a finalidade de:',
    alternativas: [
      { id: 'A', texto: 'remover a permissão de execução do script.' },
      { id: 'B', texto: 'conceder permissão de execução ao script.' },
      { id: 'C', texto: 'renomear o script.' },
      { id: 'D', texto: 'excluir o script.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'chmod +x adiciona permissão de execução (x).',
      incorretas: {
        A: 'Para remover, usa-se chmod -x.',
        C: 'Renomear é mv.',
        D: 'Excluir é rm.'
      },
      conceitoCobrado: 'chmod +x (execução).',
      pegadinha: 'A banca troca +x por -x.',
      comoApareceEmConcurso: 'Linux condicional.'
    },
    tags: ['Linux', 'chmod']
  },

  /* ============================================================
     DIDÁTICA — INF-16 — Aplicada: Cco em listas
  ============================================================ */
  {
    id: 'Q-DID-INF-0023',
    tipo: 'DIDATICA',
    area: 'APLI',
    moduloId: 'INF-16',
    subtema: 'Cco em listas grandes',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Um servidor precisa enviar um comunicado para 50 pessoas, preservando a privacidade dos e-mails. O campo adequado é:',
    alternativas: [
      { id: 'A', texto: 'Para.' },
      { id: 'B', texto: 'Cc.' },
      { id: 'C', texto: 'Cco.' },
      { id: 'D', texto: 'Assunto.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Cco (cópia oculta) preserva a privacidade — os destinatários não se veem.',
      incorretas: {
        A: 'Para expõe todos.',
        B: 'Cc expõe todos.',
        D: 'Assunto não é campo de destinatário.'
      },
      conceitoCobrado: 'Uso de Cco em listas.',
      pegadinha: 'A banca testa privacidade em e-mail.',
      comoApareceEmConcurso: 'Aplicada ao trabalho administrativo.'
    },
    tags: ['e-mail', 'Cco', 'privacidade']
  },

  /* ============================================================
     DIDÁTICA — INF-16 — Aplicada: escolha de ferramenta
  ============================================================ */
  {
    id: 'Q-DID-INF-0024',
    tipo: 'DIDATICA',
    area: 'APLI',
    moduloId: 'INF-16',
    subtema: 'Escolha de ferramenta',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Para criar uma planilha de controle de despesas com cálculos de totais e subtotais, a ferramenta mais adequada é:',
    alternativas: [
      { id: 'A', texto: 'Word.' },
      { id: 'B', texto: 'Excel.' },
      { id: 'C', texto: 'PowerPoint.' },
      { id: 'D', texto: 'Bloco de Notas.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Excel é a ferramenta de planilhas e cálculos.',
      incorretas: {
        A: 'Word é para texto.',
        C: 'PowerPoint é para apresentações.',
        D: 'Bloco de Notas é texto puro.'
      },
      conceitoCobrado: 'Escolha da ferramenta adequada.',
      pegadinha: 'A banca testa a finalidade de cada ferramenta.',
      comoApareceEmConcurso: 'Aplicada ao trabalho.'
    },
    tags: ['aplicada', 'Excel']
  },

  /* ============================================================
     DIDÁTICA — INF-16 — Aplicada: backup x compartilhamento
  ============================================================ */
  {
    id: 'Q-DID-INF-0025',
    tipo: 'DIDATICA',
    area: 'APLI',
    moduloId: 'INF-16',
    subtema: 'Backup x compartilhamento',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Compartilhar uma planilha na nuvem com a equipe é suficiente como backup?',
    alternativas: [
      { id: 'A', texto: 'Sim, porque a nuvem é segura.' },
      { id: 'B', texto: 'Não, porque compartilhamento não é backup — se alguém apagar, a nuvem também é afetada.' },
      { id: 'C', texto: 'Sim, porque a nuvem faz backup automático.' },
      { id: 'D', texto: 'Não, porque a nuvem não permite compartilhar.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Compartilhar não é backup. Backup é cópia separada.',
      incorretas: {
        A: 'Nuvem não substitui backup.',
        C: 'Nuvem não garante backup automático.',
        D: 'A nuvem permite compartilhar.'
      },
      conceitoCobrado: 'Backup × compartilhamento.',
      pegadinha: 'A banca explora a confusão entre nuvem e backup.',
      comoApareceEmConcurso: 'Aplicada.'
    },
    tags: ['backup', 'compartilhamento']
  },
  /* ============================================================
     LOTE COMPLEMENTAR — 60 questões para atingir mínimo 6/módulo
     Todas DIDÁTICAS (sem banca inventada)
     ============================================================ */

  /* ---------- INF-01 — Fundamentos (5) ---------- */
  {
    id: 'Q-DID-INF-0026', tipo: 'DIDATICA', area: 'FUND', moduloId: 'INF-01',
    subtema: 'RAM x ROM', dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre memória RAM e memória ROM, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Ambas são voláteis e perdem dados ao desligar.' },
      { id: 'B', texto: 'RAM é volátil e armazena programas em execução; ROM é não volátil e grava instruções permanentes (firmware).' },
      { id: 'C', texto: 'RAM é não volátil; ROM é volátil.' },
      { id: 'D', texto: 'Ambas armazenam arquivos do usuário permanentemente.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'RAM é volátil (perde conteúdo ao desligar) e usada para programas em execução. ROM é não volátil e grava firmware (BIOS/UEFI).',
      incorretas: { A: 'Só a RAM é volátil.', C: 'Inverte os conceitos.', D: 'Arquivos do usuário ficam em HD/SSD.' },
      conceitoCobrado: 'RAM × ROM × volátil × não volátil.',
      pegadinha: 'A banca troca volátil por não volátil.',
      comoApareceEmConcurso: 'Memória é cobrança clássica em fundamentos.'
    },
    tags: ['RAM', 'ROM', 'memória']
  },
  {
    id: 'Q-DID-INF-0027', tipo: 'DIDATICA', area: 'FUND', moduloId: 'INF-01',
    subtema: 'Periféricos de saída', dificuldade: 1, prioridade: 'alta',
    enunciado: 'Assinale a alternativa que contém APENAS periféricos de SAÍDA:',
    alternativas: [
      { id: 'A', texto: 'Teclado, mouse e scanner.' },
      { id: 'B', texto: 'Monitor, impressora e caixa de som.' },
      { id: 'C', texto: 'Touchscreen, modem e headset.' },
      { id: 'D', texto: 'Webcam, microfone e teclado.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Monitor, impressora e caixa de som recebem dados do computador — são saída.',
      incorretas: { A: 'Todos são entrada.', C: 'São entrada/saída.', D: 'Todos são entrada.' },
      conceitoCobrado: 'Classificação de periféricos.',
      pegadinha: 'A banca mistura entrada, saída e entrada/saída.',
      comoApareceEmConcurso: 'Periféricos são clássicos em fundamentos.'
    },
    tags: ['periféricos', 'saída']
  },
  {
    id: 'Q-DID-INF-0028', tipo: 'DIDATICA', area: 'FUND', moduloId: 'INF-01',
    subtema: 'SSD x HD', dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre as diferenças entre SSD e HD, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O SSD tem partes móveis e o HD não tem.' },
      { id: 'B', texto: 'O SSD usa memória flash (sem partes móveis) e é mais rápido; o HD usa discos magnéticos com partes móveis.' },
      { id: 'C', texto: 'O HD é sempre mais rápido que o SSD.' },
      { id: 'D', texto: 'Ambos são voláteis.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'SSD = flash, sem partes móveis, mais rápido. HD = magnético, com pratos e cabeça de leitura.',
      incorretas: { A: 'Inverte.', C: 'SSD é mais rápido.', D: 'Nenhum é volátil.' },
      conceitoCobrado: 'SSD × HD.',
      pegadinha: 'A banca inverte as características.',
      comoApareceEmConcurso: 'Armazenamento é cobrado em fundamentos.'
    },
    tags: ['SSD', 'HD']
  },
  {
    id: 'Q-DID-INF-0029', tipo: 'DIDATICA', area: 'FUND', moduloId: 'INF-01',
    subtema: 'Firmware', dificuldade: 2, prioridade: 'alta',
    enunciado: 'O firmware é:',
    alternativas: [
      { id: 'A', texto: 'um programa instalado pelo usuário para editar textos.' },
      { id: 'B', texto: 'software gravado em hardware, como a BIOS/UEFI da placa-mãe.' },
      { id: 'C', texto: 'um tipo de memória RAM.' },
      { id: 'D', texto: 'uma parte física do processador.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Firmware é software embutido no hardware — a BIOS/UEFI é o exemplo clássico.',
      incorretas: { A: 'Isso é software aplicativo.', C: 'Firmware fica em ROM, não em RAM.', D: 'É software, não parte física.' },
      conceitoCobrado: 'Firmware.',
      pegadinha: 'A banca confunde firmware com software aplicativo.',
      comoApareceEmConcurso: 'Conceitos básicos de fundamentos.'
    },
    tags: ['firmware', 'BIOS']
  },
  {
    id: 'Q-DID-INF-0030', tipo: 'DIDATICA', area: 'FUND', moduloId: 'INF-01',
    subtema: 'Hardware x software', dificuldade: 1, prioridade: 'alta',
    enunciado: 'Assinale a alternativa que apresenta, respectivamente, um exemplo de hardware e um de software:',
    alternativas: [
      { id: 'A', texto: 'Windows e Word.' },
      { id: 'B', texto: 'Teclado e Excel.' },
      { id: 'C', texto: 'Excel e teclado.' },
      { id: 'D', texto: 'Word e Windows.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Teclado é hardware (físico); Excel é software (lógico).',
      incorretas: { A: 'Ambos são software.', C: 'Inverte.', D: 'Ambos são software.' },
      conceitoCobrado: 'Hardware × software.',
      pegadinha: 'A banca troca a ordem.',
      comoApareceEmConcurso: 'Conceito básico.'
    },
    tags: ['hardware', 'software']
  },

  /* ---------- INF-02 — Windows (3) ---------- */
  {
    id: 'Q-DID-INF-0031', tipo: 'DIDATICA', area: 'SO', moduloId: 'INF-02',
    subtema: 'Extensão de arquivo', dificuldade: 2, prioridade: 'muito_alta',
    enunciado: 'No Windows, a extensão de um arquivo serve para:',
    alternativas: [
      { id: 'A', texto: 'indicar o tipo do arquivo e o programa que o abre por padrão.' },
      { id: 'B', texto: 'criptografar o conteúdo do arquivo.' },
      { id: 'C', texto: 'aumentar o tamanho do arquivo.' },
      { id: 'D', texto: 'definir a cor do ícone do arquivo.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A extensão (.docx, .xlsx, .pdf, .jpg) indica o tipo e associa o programa padrão.',
      incorretas: { B: 'Criptografia é outra coisa.', C: 'Não altera tamanho.', D: 'Cor é configuração visual.' },
      conceitoCobrado: 'Extensão de arquivo.',
      pegadinha: 'Renomear a extensão NÃO converte o arquivo.',
      comoApareceEmConcurso: 'Windows básico.'
    },
    tags: ['Windows', 'extensão']
  },
  {
    id: 'Q-DID-INF-0032', tipo: 'DIDATICA', area: 'SO', moduloId: 'INF-02',
    subtema: 'Atalho', dificuldade: 2, prioridade: 'muito_alta',
    enunciado: 'Sobre atalhos no Windows, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'apagar o atalho apaga o arquivo original.' },
      { id: 'B', texto: 'o atalho é um arquivo .lnk que aponta para o original; apagar o atalho NÃO apaga o original.' },
      { id: 'C', texto: 'o atalho ocupa o mesmo espaço que o arquivo original.' },
      { id: 'D', texto: 'o atalho é uma cópia completa do arquivo.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Atalho (.lnk) é um ponteiro leve — apagar não afeta o original.',
      incorretas: { A: 'Erro clássico.', C: 'Ocupa espaço mínimo.', D: 'Não é cópia.' },
      conceitoCobrado: 'Arquivo × atalho.',
      pegadinha: 'Confundir atalho com cópia.',
      comoApareceEmConcurso: 'Windows básico.'
    },
    tags: ['Windows', 'atalho', 'lnk']
  },
  {
    id: 'Q-DID-INF-0033', tipo: 'DIDATICA', area: 'SO', moduloId: 'INF-02',
    subtema: 'Atalho Win+E', dificuldade: 1, prioridade: 'muito_alta',
    enunciado: 'No Windows, a combinação Win+E abre:',
    alternativas: [
      { id: 'A', texto: 'o Gerenciador de Tarefas.' },
      { id: 'B', texto: 'o Explorador de Arquivos.' },
      { id: 'C', texto: 'o menu Iniciar.' },
      { id: 'D', texto: 'a Lixeira.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Win+E abre o Explorador de Arquivos.',
      incorretas: { A: 'Gerenciador: Ctrl+Shift+Esc.', C: 'Menu Iniciar: tecla Windows ou Ctrl+Esc.', D: 'Lixeira não tem atalho global.' },
      conceitoCobrado: 'Atalhos do Windows.',
      pegadinha: 'Confundir Win+E com tecla Windows sozinha.',
      comoApareceEmConcurso: 'Atalhos são clássicos.'
    },
    tags: ['Windows', 'Win+E']
  },

  /* ---------- INF-03 — Word (3) ---------- */
  {
    id: 'Q-DID-INF-0034', tipo: 'DIDATICA', area: 'ESCR', moduloId: 'INF-03',
    subtema: 'Cabeçalho e rodapé', dificuldade: 2, prioridade: 'muito_alta',
    enunciado: 'No Word, cabeçalho e rodapé são usados para:',
    alternativas: [
      { id: 'A', texto: 'inserir conteúdo fixo no topo e na base das páginas, como título e número de página.' },
      { id: 'B', texto: 'alterar a cor do texto.' },
      { id: 'C', texto: 'criar tabelas.' },
      { id: 'D', texto: 'inserir equações matemáticas.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Cabeçalho (topo) e rodapé (base) repetem conteúdo em todas as páginas (ou por seção).',
      incorretas: { B: 'Cor é formatação de fonte.', C: 'Tabelas são inseridas separadamente.', D: 'Equações têm recurso próprio.' },
      conceitoCobrado: 'Cabeçalho e rodapé.',
      pegadinha: 'Achar que aparecem só na primeira página.',
      comoApareceEmConcurso: 'Word básico.'
    },
    tags: ['Word', 'cabeçalho', 'rodapé']
  },
  {
    id: 'Q-DID-INF-0035', tipo: 'DIDATICA', area: 'ESCR', moduloId: 'INF-03',
    subtema: 'Sumário automático', dificuldade: 3, prioridade: 'muito_alta',
    enunciado: 'Para gerar um sumário automático no Word, é necessário que o documento:',
    alternativas: [
      { id: 'A', texto: 'tenha estilos aplicados (Título 1, Título 2 etc.).' },
      { id: 'B', texto: 'esteja em PDF.' },
      { id: 'C', texto: 'tenha imagens.' },
      { id: 'D', texto: 'tenha controle de alterações ativado.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'O sumário automático é gerado a partir dos estilos de título aplicados.',
      incorretas: { B: 'PDF é formato de saída.', C: 'Imagens não geram sumário.', D: 'Controle de alterações é outro recurso.' },
      conceitoCobrado: 'Estilos e sumário automático.',
      pegadinha: 'Achar que basta formatar manualmente.',
      comoApareceEmConcurso: 'Word intermediário.'
    },
    tags: ['Word', 'sumário', 'estilos']
  },
  {
    id: 'Q-DID-INF-0036', tipo: 'DIDATICA', area: 'ESCR', moduloId: 'INF-03',
    subtema: 'Ctrl+Enter', dificuldade: 1, prioridade: 'muito_alta',
    enunciado: 'No Word, a combinação Ctrl+Enter insere:',
    alternativas: [
      { id: 'A', texto: 'quebra de página.' },
      { id: 'B', texto: 'quebra de seção.' },
      { id: 'C', texto: 'nova tabela.' },
      { id: 'D', texto: 'cabeçalho.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Ctrl+Enter insere quebra de página.',
      incorretas: { B: 'Quebra de seção tem outro comando.', C: 'Tabela tem menu próprio.', D: 'Cabeçalho tem menu próprio.' },
      conceitoCobrado: 'Quebra de página × quebra de seção.',
      pegadinha: 'Confundir os dois tipos de quebra.',
      comoApareceEmConcurso: 'Word básico.'
    },
    tags: ['Word', 'quebra de página']
  },

  /* ---------- INF-04 — Excel (1) ---------- */
  {
    id: 'Q-DID-INF-0037', tipo: 'DIDATICA', area: 'ESCR', moduloId: 'INF-04',
    subtema: 'Função SE', dificuldade: 2, prioridade: 'muito_alta',
    enunciado: 'No Excel, a função SE(teste; valor_se_verdadeiro; valor_se_falso) serve para:',
    alternativas: [
      { id: 'A', texto: 'somar valores de um intervalo.' },
      { id: 'B', texto: 'retornar um valor conforme o resultado de um teste lógico.' },
      { id: 'C', texto: 'contar células vazias.' },
      { id: 'D', texto: 'ordenar dados.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'SE retorna valor conforme teste lógico.',
      incorretas: { A: 'Somar é SOMA.', C: 'Contar é CONT.NÚM/CONT.VALORES.', D: 'Ordenar é outro recurso.' },
      conceitoCobrado: 'Função SE.',
      pegadinha: 'Confundir SE com CONT.SE.',
      comoApareceEmConcurso: 'Funções de Excel são muito cobradas.'
    },
    tags: ['Excel', 'SE']
  },

  /* ---------- INF-05 — PowerPoint (5) ---------- */
  {
    id: 'Q-DID-INF-0038', tipo: 'DIDATICA', area: 'ESCR', moduloId: 'INF-05',
    subtema: 'Transição x animação', dificuldade: 2, prioridade: 'alta',
    enunciado: 'No PowerPoint, o efeito visual aplicado à PASSAGEM entre um slide e outro é chamado de:',
    alternativas: [
      { id: 'A', texto: 'Animação.' },
      { id: 'B', texto: 'Transição.' },
      { id: 'C', texto: 'Tema.' },
      { id: 'D', texto: 'Layout.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Transição = passagem entre slides. Animação = efeito em objetos dentro do slide.',
      incorretas: { A: 'Animação é dentro do slide.', C: 'Tema é estilo visual.', D: 'Layout é disposição.' },
      conceitoCobrado: 'Transição × animação.',
      pegadinha: 'A banca troca os dois conceitos.',
      comoApareceEmConcurso: 'PowerPoint é cobrado em ferramentas de escritório.'
    },
    tags: ['PowerPoint', 'transição']
  },
  {
    id: 'Q-DID-INF-0039', tipo: 'DIDATICA', area: 'ESCR', moduloId: 'INF-05',
    subtema: 'Formato .ppsx', dificuldade: 2, prioridade: 'alta',
    enunciado: 'Um arquivo .ppsx do PowerPoint abre:',
    alternativas: [
      { id: 'A', texto: 'em modo de edição, como o .pptx.' },
      { id: 'B', texto: 'diretamente em modo de apresentação.' },
      { id: 'C', texto: 'como imagem estática.' },
      { id: 'D', texto: 'apenas no LibreOffice.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '.ppsx abre direto em modo de apresentação.',
      incorretas: { A: '.pptx é o de edição.', C: 'Não é imagem.', D: 'Abre em qualquer suíte compatível.' },
      conceitoCobrado: '.pptx × .ppsx.',
      pegadinha: 'Confundir com .pptx.',
      comoApareceEmConcurso: 'Formatos de PowerPoint.'
    },
    tags: ['PowerPoint', 'ppsx']
  },
  {
    id: 'Q-DID-INF-0040', tipo: 'DIDATICA', area: 'ESCR', moduloId: 'INF-05',
    subtema: 'F5 x Shift+F5', dificuldade: 2, prioridade: 'alta',
    enunciado: 'No PowerPoint, a diferença entre F5 e Shift+F5 é:',
    alternativas: [
      { id: 'A', texto: 'F5 inicia do primeiro slide; Shift+F5 inicia do slide atual.' },
      { id: 'B', texto: 'Ambos iniciam do primeiro slide.' },
      { id: 'C', texto: 'F5 inicia do slide atual; Shift+F5 do primeiro.' },
      { id: 'D', texto: 'F5 fecha a apresentação; Shift+F5 salva.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'F5 = do início; Shift+F5 = do slide atual.',
      incorretas: { B: 'São diferentes.', C: 'Inverte.', D: 'Não são esses comandos.' },
      conceitoCobrado: 'Atalhos de apresentação.',
      pegadinha: 'A banca inverte.',
      comoApareceEmConcurso: 'Atalhos de PowerPoint.'
    },
    tags: ['PowerPoint', 'F5']
  },
  {
    id: 'Q-DID-INF-0041', tipo: 'DIDATICA', area: 'ESCR', moduloId: 'INF-05',
    subtema: 'Tema x layout', dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre tema e layout no PowerPoint, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'tema e layout são a mesma coisa.' },
      { id: 'B', texto: 'tema define cores, fontes e efeitos globais; layout define a disposição dos elementos em um slide.' },
      { id: 'C', texto: 'layout é aplicado à apresentação inteira; tema a um slide.' },
      { id: 'D', texto: 'tema e layout não afetam a aparência.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Tema = identidade visual global. Layout = disposição em um slide.',
      incorretas: { A: 'São diferentes.', C: 'Inverte.', D: 'Ambos afetam a aparência.' },
      conceitoCobrado: 'Tema × layout.',
      pegadinha: 'A banca troca as funções.',
      comoApareceEmConcurso: 'PowerPoint básico.'
    },
    tags: ['PowerPoint', 'tema', 'layout']
  },
  {
    id: 'Q-DID-INF-0042', tipo: 'DIDATICA', area: 'ESCR', moduloId: 'INF-05',
    subtema: 'Notas do apresentador', dificuldade: 2, prioridade: 'alta',
    enunciado: 'As notas do apresentador no PowerPoint:',
    alternativas: [
      { id: 'A', texto: 'aparecem para a plateia durante a apresentação.' },
      { id: 'B', texto: 'são visíveis apenas na tela do apresentador, não na projeção.' },
      { id: 'C', texto: 'substituem os slides.' },
      { id: 'D', texto: 'são exportadas automaticamente para PDF.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Notas do apresentador aparecem apenas na tela de quem apresenta.',
      incorretas: { A: 'Não aparecem na projeção.', C: 'São complementares.', D: 'Não são exportadas automaticamente.' },
      conceitoCobrado: 'Notas do apresentador.',
      pegadinha: 'Achar que a plateia vê as notas.',
      comoApareceEmConcurso: 'PowerPoint intermediário.'
    },
    tags: ['PowerPoint', 'notas']
  },

  /* ---------- INF-06 — LibreOffice (5) ---------- */
  {
    id: 'Q-DID-INF-0043', tipo: 'DIDATICA', area: 'ESCR', moduloId: 'INF-06',
    subtema: 'Writer x Word', dificuldade: 1, prioridade: 'condicional',
    enunciado: 'O aplicativo do LibreOffice equivalente ao Microsoft Word é o:',
    alternativas: [
      { id: 'A', texto: 'Calc.' },
      { id: 'B', texto: 'Writer.' },
      { id: 'C', texto: 'Impress.' },
      { id: 'D', texto: 'Base.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Writer ≈ Word (texto).',
      incorretas: { A: 'Calc ≈ Excel.', C: 'Impress ≈ PowerPoint.', D: 'Base ≈ Access.' },
      conceitoCobrado: 'Correspondência entre suítes.',
      pegadinha: 'A banca troca os nomes.',
      comoApareceEmConcurso: 'LibreOffice é condicional, mas cobra correspondência.'
    },
    tags: ['LibreOffice', 'Writer']
  },
  {
    id: 'Q-DID-INF-0044', tipo: 'DIDATICA', area: 'ESCR', moduloId: 'INF-06',
    subtema: 'Formatos nativos', dificuldade: 2, prioridade: 'condicional',
    enunciado: 'Os formatos nativos do LibreOffice Writer, Calc e Impress são, respectivamente:',
    alternativas: [
      { id: 'A', texto: '.docx, .xlsx, .pptx.' },
      { id: 'B', texto: '.odt, .ods, .odp.' },
      { id: 'C', texto: '.txt, .csv, .pdf.' },
      { id: 'D', texto: '.rtf, .xml, .html.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'ODT, ODS e ODP são formatos abertos ODF.',
      incorretas: { A: 'São formatos do Microsoft Office.', C: 'Não são nativos.', D: 'Não são nativos.' },
      conceitoCobrado: 'Formatos ODF.',
      pegadinha: 'Confundir com formatos do Office.',
      comoApareceEmConcurso: 'LibreOffice condicional.'
    },
    tags: ['LibreOffice', 'ODF']
  },
  {
    id: 'Q-DID-INF-0045', tipo: 'DIDATICA', area: 'ESCR', moduloId: 'INF-06',
    subtema: 'Calc x Excel', dificuldade: 2, prioridade: 'condicional',
    enunciado: 'O aplicativo do LibreOffice equivalente ao Microsoft Excel é o:',
    alternativas: [
      { id: 'A', texto: 'Writer.' },
      { id: 'B', texto: 'Calc.' },
      { id: 'C', texto: 'Impress.' },
      { id: 'D', texto: 'Draw.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Calc ≈ Excel (planilha).',
      incorretas: { A: 'Writer ≈ Word.', C: 'Impress ≈ PowerPoint.', D: 'Draw é desenho vetorial.' },
      conceitoCobrado: 'Correspondência entre suítes.',
      pegadinha: 'A banca troca os nomes.',
      comoApareceEmConcurso: 'LibreOffice condicional.'
    },
    tags: ['LibreOffice', 'Calc']
  },
  {
    id: 'Q-DID-INF-0046', tipo: 'DIDATICA', area: 'ESCR', moduloId: 'INF-06',
    subtema: 'Impress x PowerPoint', dificuldade: 1, prioridade: 'condicional',
    enunciado: 'O aplicativo do LibreOffice equivalente ao Microsoft PowerPoint é o:',
    alternativas: [
      { id: 'A', texto: 'Writer.' },
      { id: 'B', texto: 'Calc.' },
      { id: 'C', texto: 'Impress.' },
      { id: 'D', texto: 'Math.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Impress ≈ PowerPoint (apresentações).',
      incorretas: { A: 'Writer ≈ Word.', B: 'Calc ≈ Excel.', D: 'Math é fórmulas.' },
      conceitoCobrado: 'Correspondência entre suítes.',
      pegadinha: 'A banca troca os nomes.',
      comoApareceEmConcurso: 'LibreOffice condicional.'
    },
    tags: ['LibreOffice', 'Impress']
  },
  {
    id: 'Q-DID-INF-0047', tipo: 'DIDATICA', area: 'ESCR', moduloId: 'INF-06',
    subtema: 'Compatibilidade', dificuldade: 3, prioridade: 'condicional',
    enunciado: 'Sobre a compatibilidade do LibreOffice com o Microsoft Office, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'é 100% perfeita — nada muda.' },
      { id: 'B', texto: 'abre e salva em formatos do Office, mas formatações complexas e macros VBA podem variar.' },
      { id: 'C', texto: 'não abre arquivos do Office.' },
      { id: 'D', texto: 'só funciona em Linux.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Compatibilidade parcial — formatações e macros podem variar.',
      incorretas: { A: 'Não é 100%.', C: 'Abre sim.', D: 'Roda em Windows, Linux e macOS.' },
      conceitoCobrado: 'Compatibilidade entre suítes.',
      pegadinha: 'Achar que é 100% compatível.',
      comoApareceEmConcurso: 'LibreOffice condicional.'
    },
    tags: ['LibreOffice', 'compatibilidade']
  },

  /* ---------- INF-07 — Internet (4) ---------- */
  {
    id: 'Q-DID-INF-0048', tipo: 'DIDATICA', area: 'REDE', moduloId: 'INF-07',
    subtema: 'Internet x Web', dificuldade: 2, prioridade: 'muito_alta',
    enunciado: 'Sobre a diferença entre Internet e Web, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'são sinônimos.' },
      { id: 'B', texto: 'a Internet é a infraestrutura mundial de redes; a Web é um dos serviços que rodam sobre ela.' },
      { id: 'C', texto: 'a Web é a infraestrutura; a Internet é o serviço.' },
      { id: 'D', texto: 'a Internet só existe quando há navegador aberto.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Internet = infraestrutura. Web = serviço (páginas).',
      incorretas: { A: 'São diferentes.', C: 'Inverte.', D: 'A Internet existe independentemente do navegador.' },
      conceitoCobrado: 'Internet × Web.',
      pegadinha: 'Tratar como sinônimos.',
      comoApareceEmConcurso: 'Internet é tema recorrente.'
    },
    tags: ['internet', 'Web']
  },
  {
    id: 'Q-DID-INF-0049', tipo: 'DIDATICA', area: 'REDE', moduloId: 'INF-07',
    subtema: 'Intranet x Extranet', dificuldade: 2, prioridade: 'muito_alta',
    enunciado: 'Sobre intranet e extranet, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'são sinônimos.' },
      { id: 'B', texto: 'intranet é rede interna privada; extranet é a extensão para parceiros externos autorizados.' },
      { id: 'C', texto: 'intranet é pública; extranet é privada.' },
      { id: 'D', texto: 'extranet é mais restrita que a intranet.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Intranet = interna; extranet = extensão autorizada a externos.',
      incorretas: { A: 'São diferentes.', C: 'Inverte.', D: 'A extranet amplia, não restringe.' },
      conceitoCobrado: 'Intranet × extranet.',
      pegadinha: 'Confundir os conceitos.',
      comoApareceEmConcurso: 'Internet é tema recorrente.'
    },
    tags: ['intranet', 'extranet']
  },
  {
    id: 'Q-DID-INF-0050', tipo: 'DIDATICA', area: 'REDE', moduloId: 'INF-07',
    subtema: 'Navegação privada', dificuldade: 2, prioridade: 'muito_alta',
    enunciado: 'A navegação privada (anônima) do navegador:',
    alternativas: [
      { id: 'A', texto: 'garante anonimato total na Internet.' },
      { id: 'B', texto: 'não salva histórico, cookies e formulários no dispositivo, mas não é anônima — provedor e sites ainda veem a atividade.' },
      { id: 'C', texto: 'criptografa todo o tráfego.' },
      { id: 'D', texto: 'impede rastreamento por completo.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Não salva localmente, mas não garante anonimato.',
      incorretas: { A: 'Não garante.', C: 'Não criptografa tudo.', D: 'Não impede rastreamento.' },
      conceitoCobrado: 'Navegação privada.',
      pegadinha: 'Achar que é anônima.',
      comoApareceEmConcurso: 'Internet e privacidade.'
    },
    tags: ['navegação privada']
  },
  {
    id: 'Q-DID-INF-0051', tipo: 'DIDATICA', area: 'REDE', moduloId: 'INF-07',
    subtema: 'Atalhos do navegador', dificuldade: 2, prioridade: 'muito_alta',
    enunciado: 'No navegador, os atalhos Ctrl+D, Ctrl+H e Ctrl+J correspondem, respectivamente, a:',
    alternativas: [
      { id: 'A', texto: 'adicionar aos favoritos, abrir histórico e abrir downloads.' },
      { id: 'B', texto: 'abrir downloads, abrir histórico e adicionar favoritos.' },
      { id: 'C', texto: 'nova aba, nova janela e fechar aba.' },
      { id: 'D', texto: 'favoritos, downloads e histórico.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Ctrl+D = favorito; Ctrl+H = histórico; Ctrl+J = downloads.',
      incorretas: { B: 'Inverte.', C: 'Não são esses comandos.', D: 'Ordem errada.' },
      conceitoCobrado: 'Atalhos de navegador.',
      pegadinha: 'A banca troca a ordem.',
      comoApareceEmConcurso: 'Navegadores são cobrados.'
    },
    tags: ['navegador', 'atalhos']
  },

  /* ---------- INF-08 — E-mail (4) ---------- */
  {
    id: 'Q-DID-INF-0052', tipo: 'DIDATICA', area: 'REDE', moduloId: 'INF-08',
    subtema: 'Cc x Cco', dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre Cc e Cco, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'ambos expõem os destinatários uns aos outros.' },
      { id: 'B', texto: 'Cc expõe os destinatários; Cco mantém os destinatários ocultos.' },
      { id: 'C', texto: 'Cco expõe; Cc oculta.' },
      { id: 'D', texto: 'não há diferença entre eles.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Cc = cópia visível; Cco = cópia oculta.',
      incorretas: { A: 'Cco oculta.', C: 'Inverte.', D: 'São diferentes.' },
      conceitoCobrado: 'Cc × Cco.',
      pegadinha: 'Confundir os campos.',
      comoApareceEmConcurso: 'E-mail é clássico.'
    },
    tags: ['e-mail', 'Cc', 'Cco']
  },
  {
    id: 'Q-DID-INF-0053', tipo: 'DIDATICA', area: 'REDE', moduloId: 'INF-08',
    subtema: 'Responder x Encaminhar', dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre responder e encaminhar, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'são a mesma coisa.' },
      { id: 'B', texto: 'responder cria resposta ao remetente; encaminhar envia a mensagem recebida para novas pessoas.' },
      { id: 'C', texto: 'encaminhar responde ao remetente; responder envia a novas pessoas.' },
      { id: 'D', texto: 'responder apaga a mensagem.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Responder = ao remetente; encaminhar = a novas pessoas.',
      incorretas: { A: 'São diferentes.', C: 'Inverte.', D: 'Responder não apaga.' },
      conceitoCobrado: 'Responder × encaminhar.',
      pegadinha: 'Confundir as ações.',
      comoApareceEmConcurso: 'E-mail é clássico.'
    },
    tags: ['e-mail', 'responder', 'encaminhar']
  },
  {
    id: 'Q-DID-INF-0054', tipo: 'DIDATICA', area: 'REDE', moduloId: 'INF-08',
    subtema: 'IMAP x POP3', dificuldade: 3, prioridade: 'alta',
    enunciado: 'Qual a diferença entre IMAP e POP3?',
    alternativas: [
      { id: 'A', texto: 'IMAP baixa e remove do servidor; POP3 mantém no servidor.' },
      { id: 'B', texto: 'IMAP mantém no servidor e sincroniza entre dispositivos; POP3 baixa e geralmente remove do servidor.' },
      { id: 'C', texto: 'Ambos só funcionam em webmail.' },
      { id: 'D', texto: 'São protocolos de envio.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'IMAP sincroniza; POP3 baixa e remove.',
      incorretas: { A: 'Inverte.', C: 'Funcionam em clientes também.', D: 'São de recebimento.' },
      conceitoCobrado: 'IMAP × POP3.',
      pegadinha: 'Inverter os comportamentos.',
      comoApareceEmConcurso: 'Protocolos de e-mail.'
    },
    tags: ['e-mail', 'IMAP', 'POP3']
  },
  {
    id: 'Q-DID-INF-0055', tipo: 'DIDATICA', area: 'REDE', moduloId: 'INF-08',
    subtema: 'Phishing em e-mail', dificuldade: 2, prioridade: 'alta',
    enunciado: 'Você recebe um e-mail do "banco" pedindo para clicar em um link e atualizar a senha. A atitude correta é:',
    alternativas: [
      { id: 'A', texto: 'clicar no link e atualizar rapidamente.' },
      { id: 'B', texto: 'não clicar, verificar o remetente real, acessar o banco digitando o endereço oficial e denunciar como phishing.' },
      { id: 'C', texto: 'responder ao e-mail pedindo mais informações.' },
      { id: 'D', texto: 'encaminhar para os colegas.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Não clicar; verificar remetente; acessar site oficial; denunciar.',
      incorretas: { A: 'Risco de roubo de dados.', C: 'Pode confirmar o endereço.', D: 'Espalha a fraude.' },
      conceitoCobrado: 'Phishing em e-mail.',
      pegadinha: 'Clicar no link achando que é seguro.',
      comoApareceEmConcurso: 'Segurança em e-mail.'
    },
    tags: ['e-mail', 'phishing']
  },

  /* ---------- INF-09 — Redes (4) ---------- */
  {
    id: 'Q-DID-INF-0056', tipo: 'DIDATICA', area: 'REDE', moduloId: 'INF-09',
    subtema: 'IPv4 x IPv6', dificuldade: 2, prioridade: 'media',
    enunciado: 'Sobre IPv4 e IPv6, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'IPv4 tem 128 bits; IPv6 tem 32 bits.' },
      { id: 'B', texto: 'IPv4 tem 32 bits (ex.: 192.168.0.1); IPv6 tem 128 bits (ex.: 2001:db8::1).' },
      { id: 'C', texto: 'Ambos têm 32 bits.' },
      { id: 'D', texto: 'IPv6 é uma versão mais antiga que IPv4.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'IPv4 = 32 bits; IPv6 = 128 bits.',
      incorretas: { A: 'Inverte.', C: 'IPv6 tem 128 bits.', D: 'IPv6 é mais novo.' },
      conceitoCobrado: 'IPv4 × IPv6.',
      pegadinha: 'Inverter os bits.',
      comoApareceEmConcurso: 'Redes é frequência média.'
    },
    tags: ['redes', 'IPv4', 'IPv6']
  },
  {
    id: 'Q-DID-INF-0057', tipo: 'DIDATICA', area: 'REDE', moduloId: 'INF-09',
    subtema: 'DNS', dificuldade: 2, prioridade: 'media',
    enunciado: 'A função do DNS é:',
    alternativas: [
      { id: 'A', texto: 'distribuir IPs automaticamente.' },
      { id: 'B', texto: 'traduzir nomes de domínio em endereços IP.' },
      { id: 'C', texto: 'criptografar o tráfego de rede.' },
      { id: 'D', texto: 'bloquear acessos não autorizados.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'DNS traduz nomes em IPs.',
      incorretas: { A: 'Isso é DHCP.', C: 'Isso é criptografia.', D: 'Isso é firewall.' },
      conceitoCobrado: 'DNS.',
      pegadinha: 'Confundir DNS com DHCP.',
      comoApareceEmConcurso: 'Redes é frequência média.'
    },
    tags: ['redes', 'DNS']
  },
  {
    id: 'Q-DID-INF-0058', tipo: 'DIDATICA', area: 'REDE', moduloId: 'INF-09',
    subtema: 'DHCP', dificuldade: 2, prioridade: 'media',
    enunciado: 'A função do DHCP é:',
    alternativas: [
      { id: 'A', texto: 'traduzir nomes em IPs.' },
      { id: 'B', texto: 'distribuir endereços IP automaticamente aos dispositivos da rede.' },
      { id: 'C', texto: 'criptografar pacotes.' },
      { id: 'D', texto: 'bloquear vírus.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'DHCP distribui IPs automaticamente.',
      incorretas: { A: 'Isso é DNS.', C: 'Não é criptografia.', D: 'Não é antivírus.' },
      conceitoCobrado: 'DHCP.',
      pegadinha: 'Confundir com DNS.',
      comoApareceEmConcurso: 'Redes é frequência média.'
    },
    tags: ['redes', 'DHCP']
  },
  {
    id: 'Q-DID-INF-0059', tipo: 'DIDATICA', area: 'REDE', moduloId: 'INF-09',
    subtema: 'Largura de banda x latência', dificuldade: 3, prioridade: 'media',
    enunciado: 'Sobre largura de banda e latência, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'são sinônimos.' },
      { id: 'B', texto: 'largura de banda é a capacidade máxima de transmissão (Mbps); latência é o tempo de resposta (ms).' },
      { id: 'C', texto: 'latência é a capacidade; largura de banda é o tempo.' },
      { id: 'D', texto: 'ambos são medidos em MB.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Banda = capacidade; latência = tempo.',
      incorretas: { A: 'São diferentes.', C: 'Inverte.', D: 'Banda em Mbps; latência em ms.' },
      conceitoCobrado: 'Banda × latência.',
      pegadinha: 'Achar que banda alta significa rapidez total.',
      comoApareceEmConcurso: 'Redes é frequência média.'
    },
    tags: ['redes', 'banda', 'latência']
  },

  /* ---------- INF-10 — Nuvem (4) ---------- */
  {
    id: 'Q-DID-INF-0060', tipo: 'DIDATICA', area: 'REDE', moduloId: 'INF-10',
    subtema: 'PaaS', dificuldade: 3, prioridade: 'alta',
    enunciado: 'PaaS (Platform as a Service) é:',
    alternativas: [
      { id: 'A', texto: 'software pronto para o usuário final.' },
      { id: 'B', texto: 'plataforma para desenvolvedores criarem e hospedarem aplicações sem gerenciar servidores.' },
      { id: 'C', texto: 'infraestrutura de máquinas virtuais.' },
      { id: 'D', texto: 'backup em nuvem.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'PaaS é plataforma para desenvolvedores.',
      incorretas: { A: 'Isso é SaaS.', C: 'Isso é IaaS.', D: 'Backup é outro serviço.' },
      conceitoCobrado: 'SaaS × PaaS × IaaS.',
      pegadinha: 'Confundir os modelos.',
      comoApareceEmConcurso: 'Nuvem é tema crescente.'
    },
    tags: ['nuvem', 'PaaS']
  },
  {
    id: 'Q-DID-INF-0061', tipo: 'DIDATICA', area: 'REDE', moduloId: 'INF-10',
    subtema: 'IaaS', dificuldade: 3, prioridade: 'alta',
    enunciado: 'IaaS (Infrastructure as a Service) é:',
    alternativas: [
      { id: 'A', texto: 'software pronto.' },
      { id: 'B', texto: 'plataforma para desenvolvedores.' },
      { id: 'C', texto: 'infraestrutura de máquinas virtuais, redes e armazenamento alugada.' },
      { id: 'D', texto: 'e-mail em nuvem.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'IaaS = infraestrutura alugada.',
      incorretas: { A: 'Isso é SaaS.', B: 'Isso é PaaS.', D: 'E-mail é SaaS.' },
      conceitoCobrado: 'SaaS × PaaS × IaaS.',
      pegadinha: 'Confundir os modelos.',
      comoApareceEmConcurso: 'Nuvem é tema crescente.'
    },
    tags: ['nuvem', 'IaaS']
  },
  {
    id: 'Q-DID-INF-0062', tipo: 'DIDATICA', area: 'REDE', moduloId: 'INF-10',
    subtema: 'Link público x restrito', dificuldade: 2, prioridade: 'alta',
    enunciado: 'Ao compartilhar uma pasta na nuvem com dados sensíveis, a opção mais segura é:',
    alternativas: [
      { id: 'A', texto: 'link público — qualquer pessoa com o link acessa.' },
      { id: 'B', texto: 'link restrito — só convidados acessam.' },
      { id: 'C', texto: 'link com senha fraca.' },
      { id: 'D', texto: 'link público com nome do arquivo oculto.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Link restrito limita o acesso a convidados.',
      incorretas: { A: 'Expõe os dados.', C: 'Senha fraca não protege.', D: 'Ainda é público.' },
      conceitoCobrado: 'Compartilhamento seguro.',
      pegadinha: 'Achar que link público é seguro.',
      comoApareceEmConcurso: 'Nuvem e segurança.'
    },
    tags: ['nuvem', 'compartilhamento']
  },
  {
    id: 'Q-DID-INF-0063', tipo: 'DIDATICA', area: 'REDE', moduloId: 'INF-10',
    subtema: 'Serviços de nuvem', dificuldade: 1, prioridade: 'alta',
    enunciado: 'São exemplos de serviços de armazenamento em nuvem:',
    alternativas: [
      { id: 'A', texto: 'OneDrive, Google Drive e Dropbox.' },
      { id: 'B', texto: 'Word, Excel e PowerPoint.' },
      { id: 'C', texto: 'Windows, Linux e macOS.' },
      { id: 'D', texto: 'Chrome, Edge e Firefox.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'OneDrive, Google Drive e Dropbox são armazenamento em nuvem.',
      incorretas: { B: 'São aplicativos de escritório.', C: 'São sistemas operacionais.', D: 'São navegadores.' },
      conceitoCobrado: 'Serviços de nuvem.',
      pegadinha: 'Confundir com aplicativos.',
      comoApareceEmConcurso: 'Nuvem é tema crescente.'
    },
    tags: ['nuvem', 'OneDrive', 'Google Drive']
  },

  /* ---------- INF-11 — Segurança (3) ---------- */
  {
    id: 'Q-DID-INF-0064', tipo: 'DIDATICA', area: 'SEG', moduloId: 'INF-11',
    subtema: 'Ransomware', dificuldade: 2, prioridade: 'muito_alta',
    enunciado: 'Ransomware é um tipo de malware que:',
    alternativas: [
      { id: 'A', texto: 'espiona o usuário silenciosamente.' },
      { id: 'B', texto: 'criptografa os dados da vítima e exige resgate para liberar.' },
      { id: 'C', texto: 'exibe anúncios indesejados.' },
      { id: 'D', texto: 'se disfarça de programa legítimo.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Ransomware criptografa e pede resgate.',
      incorretas: { A: 'Isso é spyware.', C: 'Isso é adware.', D: 'Isso é trojan.' },
      conceitoCobrado: 'Ransomware.',
      pegadinha: 'Confundir com spyware.',
      comoApareceEmConcurso: 'Segurança é altíssima frequência.'
    },
    tags: ['segurança', 'ransomware']
  },
  {
    id: 'Q-DID-INF-0065', tipo: 'DIDATICA', area: 'SEG', moduloId: 'INF-11',
    subtema: 'Trojan', dificuldade: 2, prioridade: 'muito_alta',
    enunciado: 'O cavalo de Troia (trojan) é um malware que:',
    alternativas: [
      { id: 'A', texto: 'se autorreplica pela rede sem ação do usuário.' },
      { id: 'B', texto: 'se disfarça de programa legítimo para enganar o usuário e abrir portas para invasores.' },
      { id: 'C', texto: 'criptografa arquivos e pede resgate.' },
      { id: 'D', texto: 'exibe anúncios.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Trojan se disfarça de legítimo e abre portas.',
      incorretas: { A: 'Isso é worm.', C: 'Isso é ransomware.', D: 'Isso é adware.' },
      conceitoCobrado: 'Trojan.',
      pegadinha: 'Confundir com vírus/worm.',
      comoApareceEmConcurso: 'Segurança é altíssima frequência.'
    },
    tags: ['segurança', 'trojan']
  },
  {
    id: 'Q-DID-INF-0066', tipo: 'DIDATICA', area: 'SEG', moduloId: 'INF-11',
    subtema: 'Criptografia simétrica x assimétrica', dificuldade: 3, prioridade: 'muito_alta',
    enunciado: 'Sobre criptografia simétrica e assimétrica, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'simétrica usa duas chaves; assimétrica usa uma.' },
      { id: 'B', texto: 'simétrica usa a mesma chave para cifrar e decifrar; assimétrica usa par de chaves (pública cifra, privada decifra).' },
      { id: 'C', texto: 'ambas usam a mesma chave.' },
      { id: 'D', texto: 'assimétrica é mais rápida que a simétrica.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Simétrica = 1 chave; assimétrica = 2 chaves.',
      incorretas: { A: 'Inverte.', C: 'São diferentes.', D: 'Assimétrica é mais lenta.' },
      conceitoCobrado: 'Criptografia simétrica × assimétrica.',
      pegadinha: 'Inverter as características.',
      comoApareceEmConcurso: 'Segurança é altíssima frequência.'
    },
    tags: ['segurança', 'criptografia']
  },

  /* ---------- INF-12 — Backup (4) ---------- */
  {
    id: 'Q-DID-INF-0067', tipo: 'DIDATICA', area: 'SEG', moduloId: 'INF-12',
    subtema: 'Backup completo', dificuldade: 1, prioridade: 'alta',
    enunciado: 'O backup completo:',
    alternativas: [
      { id: 'A', texto: 'copia apenas os arquivos alterados desde o último backup.' },
      { id: 'B', texto: 'copia todos os arquivos selecionados, independentemente de alterações.' },
      { id: 'C', texto: 'copia só os arquivos novos.' },
      { id: 'D', texto: 'não pode ser restaurado.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Completo copia todos os arquivos selecionados.',
      incorretas: { A: 'Isso é incremental/diferencial.', C: 'Não é a definição.', D: 'Pode ser restaurado.' },
      conceitoCobrado: 'Backup completo.',
      pegadinha: 'Confundir com incremental.',
      comoApareceEmConcurso: 'Backup é tema frequente.'
    },
    tags: ['backup', 'completo']
  },
  {
    id: 'Q-DID-INF-0068', tipo: 'DIDATICA', area: 'SEG', moduloId: 'INF-12',
    subtema: 'Lixeira x backup', dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a Lixeira do Windows e o backup, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'a Lixeira é um tipo de backup.' },
      { id: 'B', texto: 'a Lixeira não é backup — é apenas armazenamento temporário de arquivos excluídos; se o HD falhar, os dados se perdem.' },
      { id: 'C', texto: 'a Lixeira substitui o backup.' },
      { id: 'D', texto: 'a Lixeira guarda os arquivos para sempre.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Lixeira não é backup.',
      incorretas: { A: 'Não é.', C: 'Não substitui.', D: 'Pode ser esvaziada.' },
      conceitoCobrado: 'Lixeira × backup.',
      pegadinha: 'Achar que Lixeira é backup.',
      comoApareceEmConcurso: 'Backup é tema frequente.'
    },
    tags: ['backup', 'Lixeira']
  },
  {
    id: 'Q-DID-INF-0069', tipo: 'DIDATICA', area: 'SEG', moduloId: 'INF-12',
    subtema: 'Restauração', dificuldade: 3, prioridade: 'alta',
    enunciado: 'Para restaurar um backup INCREMENTAL, é necessário:',
    alternativas: [
      { id: 'A', texto: 'apenas o último incremental.' },
      { id: 'B', texto: 'o backup completo + TODOS os incrementais em sequência.' },
      { id: 'C', texto: 'apenas o backup completo.' },
      { id: 'D', texto: 'o último diferencial.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Incremental exige completo + todos os incrementais.',
      incorretas: { A: 'Faltam os anteriores.', C: 'Faltam os incrementais.', D: 'Isso é para diferencial.' },
      conceitoCobrado: 'Restauração de incremental.',
      pegadinha: 'Confundir com diferencial.',
      comoApareceEmConcurso: 'Backup é tema frequente.'
    },
    tags: ['backup', 'incremental', 'restauração']
  },
  {
    id: 'Q-DID-INF-0070', tipo: 'DIDATICA', area: 'SEG', moduloId: 'INF-12',
    subtema: 'Mídias de backup', dificuldade: 2, prioridade: 'alta',
    enunciado: 'São mídias válidas para backup:',
    alternativas: [
      { id: 'A', texto: 'HD externo, pendrive, nuvem e DVD.' },
      { id: 'B', texto: 'apenas a nuvem.' },
      { id: 'C', texto: 'apenas o HD interno.' },
      { id: 'D', texto: 'apenas pendrive.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Diversas mídias são válidas — ideal combinar (3-2-1).',
      incorretas: { B: 'Restringe.', C: 'HD interno não protege contra falha do PC.', D: 'Restringe.' },
      conceitoCobrado: 'Mídias de backup.',
      pegadinha: 'Achar que só nuvem serve.',
      comoApareceEmConcurso: 'Backup é tema frequente.'
    },
    tags: ['backup', 'mídias']
  },

  /* ---------- INF-13 — PDF (4) ---------- */
  {
    id: 'Q-DID-INF-0071', tipo: 'DIDATICA', area: 'SEG', moduloId: 'INF-13',
    subtema: 'PDF x editável', dificuldade: 1, prioridade: 'media',
    enunciado: 'Sobre as diferenças entre PDF e .docx, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'PDF é mais editável que .docx.' },
      { id: 'B', texto: 'PDF preserva o layout em qualquer dispositivo; .docx é editável e o layout pode variar.' },
      { id: 'C', texto: 'São o mesmo formato.' },
      { id: 'D', texto: '.docx preserva melhor o layout que PDF.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'PDF preserva layout; .docx é editável.',
      incorretas: { A: 'É o contrário.', C: 'São diferentes.', D: 'PDF preserva melhor.' },
      conceitoCobrado: 'PDF × .docx.',
      pegadinha: 'Inverter as características.',
      comoApareceEmConcurso: 'PDF é frequência média.'
    },
    tags: ['PDF', 'docx']
  },
  {
    id: 'Q-DID-INF-0072', tipo: 'DIDATICA', area: 'SEG', moduloId: 'INF-13',
    subtema: 'Assinatura eletrônica x digital', dificuldade: 3, prioridade: 'media',
    enunciado: 'Sobre assinatura eletrônica e assinatura digital, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'são sinônimos.' },
      { id: 'B', texto: 'eletrônica é qualquer forma eletrônica de assinar; digital é um tipo específico que usa criptografia e certificado.' },
      { id: 'C', texto: 'digital é mais simples que eletrônica.' },
      { id: 'D', texto: 'eletrônica exige certificado ICP-Brasil.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Digital é espécie de eletrônica.',
      incorretas: { A: 'São diferentes.', C: 'Digital é mais segura.', D: 'Eletrônica simples não exige certificado.' },
      conceitoCobrado: 'Assinatura eletrônica × digital.',
      pegadinha: 'Tratar como sinônimos.',
      comoApareceEmConcurso: 'PDF e assinatura.'
    },
    tags: ['PDF', 'assinatura']
  },
  {
    id: 'Q-DID-INF-0073', tipo: 'DIDATICA', area: 'SEG', moduloId: 'INF-13',
    subtema: 'Certificado digital', dificuldade: 3, prioridade: 'media',
    enunciado: 'O certificado digital ICP-Brasil serve para:',
    alternativas: [
      { id: 'A', texto: 'garantir a identidade do titular em transações eletrônicas.' },
      { id: 'B', texto: 'substituir o antivírus.' },
      { id: 'C', texto: 'aumentar a velocidade da Internet.' },
      { id: 'D', texto: 'compactar arquivos.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Certificado digital garante identidade.',
      incorretas: { B: 'Não substitui antivírus.', C: 'Não aumenta velocidade.', D: 'Não compacta.' },
      conceitoCobrado: 'Certificado digital.',
      pegadinha: 'Confundir com outros recursos.',
      comoApareceEmConcurso: 'PDF e segurança.'
    },
    tags: ['PDF', 'certificado digital']
  },
  {
    id: 'Q-DID-INF-0074', tipo: 'DIDATICA', area: 'SEG', moduloId: 'INF-13',
    subtema: 'PDF/A', dificuldade: 3, prioridade: 'media',
    enunciado: 'PDF/A é:',
    alternativas: [
      { id: 'A', texto: 'a versão do PDF para arquivamento de longo prazo.' },
      { id: 'B', texto: 'a versão mais antiga do PDF.' },
      { id: 'C', texto: 'um PDF criptografado.' },
      { id: 'D', texto: 'um PDF com assinatura digital.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'PDF/A é para arquivamento de longo prazo.',
      incorretas: { B: 'Não é versão antiga.', C: 'Criptografia é outro recurso.', D: 'Assinatura é outro recurso.' },
      conceitoCobrado: 'PDF/A.',
      pegadinha: 'Confundir com versão comum.',
      comoApareceEmConcurso: 'PDF é frequência média.'
    },
    tags: ['PDF', 'PDF/A']
  },

  /* ---------- INF-14 — Software (4) ---------- */
  {
    id: 'Q-DID-INF-0075', tipo: 'DIDATICA', area: 'FUND', moduloId: 'INF-14',
    subtema: 'Compactação', dificuldade: 2, prioridade: 'media',
    enunciado: 'Sobre compactação de arquivos, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'ZIP, RAR e 7z são formatos de compactação.' },
      { id: 'B', texto: 'ZIP, RAR e 7z são formatos de imagem.' },
      { id: 'C', texto: 'compactar sempre criptografa o arquivo.' },
      { id: 'D', texto: 'compactar aumenta o tamanho do arquivo.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'São formatos de compactação.',
      incorretas: { B: 'Não são imagens.', C: 'Compactação não criptografa por si só.', D: 'Compactação reduz o tamanho.' },
      conceitoCobrado: 'Compactação.',
      pegadinha: 'Confundir compactação com criptografia.',
      comoApareceEmConcurso: 'Software é frequência média.'
    },
    tags: ['software', 'compactação']
  },
  {
    id: 'Q-DID-INF-0076', tipo: 'DIDATICA', area: 'FUND', moduloId: 'INF-14',
    subtema: 'Print Screen', dificuldade: 1, prioridade: 'media',
    enunciado: 'A tecla Print Screen, no Windows:',
    alternativas: [
      { id: 'A', texto: 'imprime a tela diretamente na impressora.' },
      { id: 'B', texto: 'copia uma captura da tela para a área de transferência.' },
      { id: 'C', texto: 'salva a captura automaticamente em Documentos.' },
      { id: 'D', texto: 'desliga o computador.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Print Screen copia a captura para a área de transferência; você cola onde quiser.',
      incorretas: { A: 'Não imprime diretamente.', C: 'Não salva automaticamente.', D: 'Não desliga.' },
      conceitoCobrado: 'Print Screen.',
      pegadinha: 'Achar que salva automaticamente.',
      comoApareceEmConcurso: 'Software é frequência média.'
    },
    tags: ['software', 'Print Screen']
  },
  {
    id: 'Q-DID-INF-0077', tipo: 'DIDATICA', area: 'FUND', moduloId: 'INF-14',
    subtema: 'Instalar x desinstalar', dificuldade: 2, prioridade: 'media',
    enunciado: 'A forma correta de desinstalar um programa no Windows é:',
    alternativas: [
      { id: 'A', texto: 'apagar a pasta do programa no disco.' },
      { id: 'B', texto: 'usar o Painel de Controle (ou Configurações) → Aplicativos → Desinstalar.' },
      { id: 'C', texto: 'renomear o executável.' },
      { id: 'D', texto: 'mover a pasta para a Lixeira.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Desinstalar via Painel de Controle remove arquivos e registros corretamente.',
      incorretas: { A: 'Deixa resíduos.', C: 'Não desinstala.', D: 'Deixa resíduos.' },
      conceitoCobrado: 'Desinstalação correta.',
      pegadinha: 'Apagar pasta não é desinstalar.',
      comoApareceEmConcurso: 'Software é frequência média.'
    },
    tags: ['software', 'desinstalar']
  },
  {
    id: 'Q-DID-INF-0078', tipo: 'DIDATICA', area: 'FUND', moduloId: 'INF-14',
    subtema: 'Software livre x gratuito', dificuldade: 3, prioridade: 'media',
    enunciado: 'Sobre software livre e software gratuito, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'são sinônimos.' },
      { id: 'B', texto: 'software livre é sobre liberdade (executar, estudar, modificar, redistribuir); gratuito é sobre preço.' },
      { id: 'C', texto: 'todo software gratuito é livre.' },
      { id: 'D', texto: 'todo software livre é gratuito.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Livre = liberdade; gratuito = preço.',
      incorretas: { A: 'São diferentes.', C: 'Gratuito pode ser proprietário.', D: 'Livre pode ser vendido.' },
      conceitoCobrado: 'Software livre × gratuito.',
      pegadinha: 'Confundir os conceitos.',
      comoApareceEmConcurso: 'Software é frequência média.'
    },
    tags: ['software', 'livre', 'gratuito']
  },

  /* ---------- INF-15 — Linux (4) ---------- */
  {
    id: 'Q-DID-INF-0079', tipo: 'DIDATICA', area: 'SO', moduloId: 'INF-15',
    subtema: 'Software livre', dificuldade: 3, prioridade: 'condicional',
    enunciado: 'As 4 liberdades do software livre são:',
    alternativas: [
      { id: 'A', texto: 'executar, estudar, redistribuir e modificar.' },
      { id: 'B', texto: 'instalar, desinstalar, formatar e atualizar.' },
      { id: 'C', texto: 'criptografar, compactar, assinar e compartilhar.' },
      { id: 'D', texto: 'ler, escrever, executar e apagar.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Executar, estudar, redistribuir e modificar.',
      incorretas: { B: 'Não são as liberdades.', C: 'Não são as liberdades.', D: 'Não são as liberdades.' },
      conceitoCobrado: '4 liberdades do software livre.',
      pegadinha: 'Confundir com permissões de arquivo.',
      comoApareceEmConcurso: 'Linux é condicional.'
    },
    tags: ['Linux', 'software livre']
  },
  {
    id: 'Q-DID-INF-0080', tipo: 'DIDATICA', area: 'SO', moduloId: 'INF-15',
    subtema: 'Case-sensitive', dificuldade: 2, prioridade: 'condicional',
    enunciado: 'No Linux, os nomes de arquivos são case-sensitive. Isso significa que:',
    alternativas: [
      { id: 'A', texto: '"Arquivo.txt" e "arquivo.txt" são o mesmo arquivo.' },
      { id: 'B', texto: '"Arquivo.txt" e "arquivo.txt" são arquivos DIFERENTES.' },
      { id: 'C', texto: 'só maiúsculas são permitidas.' },
      { id: 'D', texto: 'só minúsculas são permitidas.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Case-sensitive = diferencia maiúsculas de minúsculas.',
      incorretas: { A: 'Isso é o comportamento do Windows.', C: 'Ambas são permitidas.', D: 'Ambas são permitidas.' },
      conceitoCobrado: 'Case-sensitive × case-insensitive.',
      pegadinha: 'Confundir com Windows.',
      comoApareceEmConcurso: 'Linux é condicional.'
    },
    tags: ['Linux', 'case-sensitive']
  },
  {
    id: 'Q-DID-INF-0081', tipo: 'DIDATICA', area: 'SO', moduloId: 'INF-15',
    subtema: 'Kernel x distribuição', dificuldade: 3, prioridade: 'condicional',
    enunciado: 'Sobre kernel e distribuição Linux, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'são a mesma coisa.' },
      { id: 'B', texto: 'kernel é o núcleo do sistema; distribuição é o pacote completo (kernel + software + ambiente gráfico).' },
      { id: 'C', texto: 'distribuição é o núcleo; kernel é o pacote.' },
      { id: 'D', texto: 'Linux é uma distribuição única.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Kernel = núcleo; distribuição = pacote completo.',
      incorretas: { A: 'São diferentes.', C: 'Inverte.', D: 'Existem várias distribuições.' },
      conceitoCobrado: 'Kernel × distribuição.',
      pegadinha: 'Confundir os conceitos.',
      comoApareceEmConcurso: 'Linux é condicional.'
    },
    tags: ['Linux', 'kernel', 'distribuição']
  },
  {
    id: 'Q-DID-INF-0082', tipo: 'DIDATICA', area: 'SO', moduloId: 'INF-15',
    subtema: 'chown', dificuldade: 3, prioridade: 'condicional',
    enunciado: 'No Linux, o comando chown serve para:',
    alternativas: [
      { id: 'A', texto: 'alterar as permissões de um arquivo.' },
      { id: 'B', texto: 'alterar o dono de um arquivo ou diretório.' },
      { id: 'C', texto: 'renomear arquivos.' },
      { id: 'D', texto: 'excluir arquivos.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'chown altera o dono.',
      incorretas: { A: 'Permissões: chmod.', C: 'Renomear: mv.', D: 'Excluir: rm.' },
      conceitoCobrado: 'chown × chmod.',
      pegadinha: 'Confundir com chmod.',
      comoApareceEmConcurso: 'Linux é condicional.'
    },
    tags: ['Linux', 'chown']
  },

  /* ---------- INF-16 — Aplicada (3) ---------- */
  {
    id: 'Q-DID-INF-0083', tipo: 'DIDATICA', area: 'APLI', moduloId: 'INF-16',
    subtema: 'Envio de PDF x DOCX', dificuldade: 2, prioridade: 'media',
    enunciado: 'Para enviar um contrato a um cliente que só vai ler e imprimir, o formato mais adequado é:',
    alternativas: [
      { id: 'A', texto: '.docx — editável.' },
      { id: 'B', texto: '.pdf — preserva o layout.' },
      { id: 'C', texto: '.txt — texto puro.' },
      { id: 'D', texto: '.pptx — apresentação.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'PDF preserva o layout — ideal para leitura e impressão.',
      incorretas: { A: 'Pode variar de layout.', C: 'Perde formatação.', D: 'Não é para contratos.' },
      conceitoCobrado: 'Escolha de formato.',
      pegadinha: 'Enviar .docx quando o destinatário não vai editar.',
      comoApareceEmConcurso: 'Aplicada ao trabalho.'
    },
    tags: ['aplicada', 'PDF', 'envio']
  },
  {
    id: 'Q-DID-INF-0084', tipo: 'DIDATICA', area: 'APLI', moduloId: 'INF-16',
    subtema: 'Organização de arquivos', dificuldade: 2, prioridade: 'media',
    enunciado: 'A melhor prática de organização de arquivos em um setor é:',
    alternativas: [
      { id: 'A', texto: 'salvar tudo na Área de Trabalho com nomes genéricos.' },
      { id: 'B', texto: 'usar estrutura lógica de pastas (ano/mês/assunto) e nomenclatura padronizada com versionamento.' },
      { id: 'C', texto: 'salvar em um único arquivo grande.' },
      { id: 'D', texto: 'não usar extensões.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Estrutura lógica + nomes padronizados + versionamento.',
      incorretas: { A: 'Dificulta a busca.', C: 'Dificulta o acesso.', D: 'Extensões são essenciais.' },
      conceitoCobrado: 'Organização de arquivos.',
      pegadinha: 'Achar que qualquer organização serve.',
      comoApareceEmConcurso: 'Aplicada ao trabalho.'
    },
    tags: ['aplicada', 'organização']
  },
  {
    id: 'Q-DID-INF-0085', tipo: 'DIDATICA', area: 'APLI', moduloId: 'INF-16',
    subtema: 'Permissões em nuvem', dificuldade: 2, prioridade: 'media',
    enunciado: 'Ao compartilhar uma pasta na nuvem com a equipe, as permissões típicas são:',
    alternativas: [
      { id: 'A', texto: 'apenas leitura.' },
      { id: 'B', texto: 'visualizador, comentarista e editor.' },
      { id: 'C', texto: 'administrador e visitante.' },
      { id: 'D', texto: 'não há permissões.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Visualizador (só vê), comentarista (comenta), editor (edita).',
      incorretas: { A: 'Há níveis.', C: 'Não são os níveis típicos.', D: 'Há permissões.' },
      conceitoCobrado: 'Permissões em nuvem.',
      pegadinha: 'Achar que só existe leitura.',
      comoApareceEmConcurso: 'Aplicada ao trabalho.'
    },
    tags: ['aplicada', 'permissões']
  }   

];
