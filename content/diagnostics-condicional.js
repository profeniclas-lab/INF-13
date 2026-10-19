/* ============================================================
   DIAGNÓSTICOS — Módulos de prioridade CONDICIONAL
   Preenchidos: INF-06, INF-15
   Fim do ciclo de diagnósticos — todos os 16 módulos cobertos
   ============================================================ */

window.DIAGNOSTICS_CONDICIONAL = {

  /* ============================================================
     INF-06 — LibreOffice e Compatibilidade entre Suítes
  ============================================================ */
  'INF-06': {
    id: 'D-INF-06',
    moduloId: 'INF-06',
    itens: [
      {
        id: 'D-INF-06-01',
        tipo: 'multipla_escolha',
        subtopico: 'Aplicativos e formatos nativos',
        pergunta: 'No LibreOffice, os aplicativos Writer, Calc e Impress têm, respectivamente, quais formatos NATIVOS?',
        alternativas: [
          { id: 'A', texto: '.docx, .xlsx e .pptx.' },
          { id: 'B', texto: '.odt, .ods e .odp.' },
          { id: 'C', texto: '.txt, .csv e .pdf.' },
          { id: 'D', texto: '.rtf, .xml e .html.' }
        ],
        gabarito: 'B',
        explicacao: 'Os formatos NATIVOS do LibreOffice fazem parte do padrão ODF (OpenDocument Format): Writer → .odt (texto); Calc → .ods (planilha); Impress → .odp (apresentação). Os formatos .docx, .xlsx e .pptx são do Microsoft Office — o LibreOffice os abre e salva, mas não são nativos. A banca cobra essa diferença.'
      },
      {
        id: 'D-INF-06-02',
        tipo: 'multipla_escolha',
        subtopico: 'Compatibilidade com Microsoft Office',
        pergunta: 'Sobre a compatibilidade entre LibreOffice e Microsoft Office, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'LibreOffice não abre arquivos do Microsoft Office.' },
          { id: 'B', texto: 'LibreOffice abre .docx, .xlsx e .pptx, mas formatações complexas e macros VBA podem sofrer alterações.' },
          { id: 'C', texto: 'LibreOffice é 100% compatível — nada muda ao abrir um .docx.' },
          { id: 'D', texto: 'O Microsoft Office não consegue abrir arquivos .odt.' }
        ],
        gabarito: 'B',
        explicacao: 'LibreOffice ABRE e SALVA em formatos do Office (.docx, .xlsx, .pptx), mas a compatibilidade não é 100% perfeita: formatações complexas (SmartArt, tabelas elaboradas), macros VBA e fontes exclusivas podem sofrer alterações. O Office também abre .odt/.ods/.odp. A alternativa C é a pegadinha clássica — dizer que "é 100% compatível" está errado.'
      },
      {
        id: 'D-INF-06-03',
        tipo: 'verdadeiro_falso',
        subtopico: 'Separação de argumentos no Calc',
        pergunta: 'No Calc do LibreOffice em português do Brasil, as fórmulas costumam usar PONTO E VÍRGULA como separador de argumentos (ex.: =SOMA(A1;A10)), enquanto o Excel em inglês usa vírgula (=SOMA(A1,A10)).',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. Em versões em português do Brasil do Calc, o separador de argumentos é o PONTO E VÍRGULA (=SOMA(A1;A10); =SE(A1>=7;"Aprovado";"Reprovado")). No Excel em inglês, é a vírgula. Isso confunde candidatos vindos do Excel. A banca cobra essa diferença em questões que misturam as duas suítes.'
      },
      {
        id: 'D-INF-06-04',
        tipo: 'autoavaliacao',
        subtopico: 'Regras gerais',
        pergunta: 'Você domina: correspondência Writer/Calc/Impress ↔ Word/Excel/PowerPoint, formatos nativos ODT/ODS/ODP, compatibilidade com DOCX/XLSX/PPTX, padrão ODF e diferenças de interface?',
        resposta: 'LIBREOFFICE: suíte livre e gratuita. Writer ≈ Word (.odt); Calc ≈ Excel (.ods); Impress ≈ PowerPoint (.odp). PADRÃO ODF (OpenDocument Format, ISO/IEC 26300) — aberto. COMPATIBILIDADE: abre e salva .docx/.xlsx/.pptx, mas formatações complexas e macros VBA podem variar. O padrão de salvamento é ODF; para Office, use "Salvar como" e escolha o formato desejado. Calc em PT-BR usa PONTO E VÍRGULA como separador de argumentos. Roda em Windows, Linux e macOS.'
      }
    ]
  },

  /* ============================================================
     INF-15 — Linux e Outros Ambientes
  ============================================================ */
  'INF-15': {
    id: 'D-INF-15',
    moduloId: 'INF-15',
    itens: [
      {
        id: 'D-INF-15-01',
        tipo: 'multipla_escolha',
        subtopico: 'Software livre x código aberto',
        pergunta: 'Sobre o conceito de SOFTWARE LIVRE, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Software livre é sempre gratuito — não pode ser vendido.' },
          { id: 'B', texto: 'Software livre garante 4 liberdades: executar, estudar, redistribuir e modificar o código.' },
          { id: 'C', texto: 'Software livre é sinônimo de software pirata.' },
          { id: 'D', texto: 'Software livre só funciona em Linux.' }
        ],
        gabarito: 'B',
        explicacao: 'SOFTWARE LIVRE: movimento fundado por Richard Stallman — garante 4 LIBERDADES: (1) executar para qualquer propósito; (2) estudar e modificar o código; (3) redistribuir cópias; (4) distribuir versões modificadas. "Livre" é sobre LIBERDADE, não preço — pode ser vendido, desde que as liberdades sejam mantidas. Roda em qualquer sistema. Alternativa A é a pegadinha clássica.'
      },
      {
        id: 'D-INF-15-02',
        tipo: 'multipla_escolha',
        subtopico: 'Diferenças Windows x Linux',
        pergunta: 'Sobre as diferenças entre Windows e Linux, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'No Linux, o sistema de arquivos começa na raiz "/" e é CASE-SENSITIVE ("arquivo.txt" ≠ "Arquivo.txt").' },
          { id: 'B', texto: 'No Linux, existe a letra de unidade C: para o disco principal.' },
          { id: 'C', texto: 'No Linux, maiúsculas e minúsculas são equivalentes, como no Windows.' },
          { id: 'D', texto: 'O Windows usa "/" como separador de diretórios.' }
        ],
        gabarito: 'A',
        explicacao: 'LINUX: raiz única "/" — sem letras de unidade (não existe "C:"). É CASE-SENSITIVE: "arquivo.txt" e "Arquivo.txt" são arquivos DIFERENTES. WINDOWS: usa letras de unidade (C:, D:) e "\\\\" como separador; é case-insensitive. A banca adora testar essas diferenças — especialmente a case-sensitivity.'
      },
      {
        id: 'D-INF-15-03',
        tipo: 'verdadeiro_falso',
        subtopico: 'Permissões',
        pergunta: 'No Linux, a permissão "rwx" atribuída a um arquivo indica, respectivamente, permissões de leitura, escrita e execução.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. As permissões no Linux são: r = read (leitura, valor 4); w = write (escrita, valor 2); x = execute (execução, valor 1). O "rwx" indica que o dono pode ler, escrever e executar. Em notação octal: rwx = 7 (4+2+1); r-x = 5 (4+1); r-- = 4. Comando chmod altera permissões; chown altera o dono.'
      },
      {
        id: 'D-INF-15-04',
        tipo: 'autoavaliacao',
        subtopico: 'Regras gerais',
        pergunta: 'Você domina: 4 liberdades do software livre, kernel × distribuição, principais distros (Ubuntu, Debian, Fedora), estrutura de diretórios (/home, /etc, /var), permissões r/w/x com notação octal, comandos básicos (ls, cd, mkdir, cp, mv, rm, chmod, chown) e diferenças Windows × Linux?',
        resposta: 'SOFTWARE LIVRE: 4 liberdades (executar, estudar, redistribuir, modificar). KERNEL: núcleo (Linux). DISTRIBUIÇÃO: sistema completo (Ubuntu, Debian, Fedora, Mint). ESTRUTURA: / (raiz), /home, /etc, /var, /usr, /tmp, /bin. PERMISSÕES: r (4), w (2), x (1) — dono, grupo, outros. chmod altera permissões; chown altera dono. COMANDOS: ls, cd, pwd, mkdir, rm, cp, mv, cat, grep, sudo, man. DIFERENÇAS: Windows — C:\\, case-insensitive; Linux — /, case-sensitive.'
      }
    ]
  }

};
