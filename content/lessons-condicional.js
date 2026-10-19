/* ============================================================
   AULAS — Módulos de prioridade CONDICIONAL
   Preenchidos: INF-06, INF-15
   Fim do ciclo de aulas — todos os 16 módulos preenchidos
   ============================================================ */

window.LESSONS_CONDICIONAL = {

  /* ============================================================
     INF-06 — LibreOffice e Compatibilidade entre Suítes
  ============================================================ */
  'INF-06': {
    id: 'L-INF-06',
    moduloId: 'INF-06',
    objetivo: 'Compreender a suíte LibreOffice (Writer, Calc e Impress), seus formatos nativos (ODT, ODS, ODP), a compatibilidade com os formatos do Microsoft Office (DOCX, XLSX, PPTX) e as diferenças de interface, nomes de comandos e atalhos. Saber quando usar LibreOffice e como converter arquivos sem perda significativa.',
    prerequisitos: ['INF-03', 'INF-04', 'INF-05'],

    introducao: 'LibreOffice é conteúdo CONDICIONAL — só vale investimento quando o edital cobra explicitamente. Mas quando cai, é questão direta: identificação dos três aplicativos principais (Writer, Calc, Impress), formatos nativos, compatibilidade com Microsoft Office e diferenças de comandos. É um módulo fácil de dominar e que rende pontos em provas que exigem softwares livres.',

    explicacaoSimples: 'Pense no LibreOffice como um "irmão gratuito" do Microsoft Office. Ele faz as mesmas coisas: texto (Writer), planilha (Calc), apresentação (Impress). A diferença está nos formatos nativos (ODT, ODS, ODP — padrão aberto) e em alguns comandos que têm nomes diferentes. O LibreOffice abre arquivos do Office (.docx, .xlsx, .pptx) e exporta para esses formatos também — mas a compatibilidade não é 100% perfeita: formatações complexas podem variar.',

    explicacaoTecnica: 'LIBREOFFICE: suíte de escritório LIVRE e de CÓDIGO ABERTO (open source), mantida pela The Document Foundation. Aplicativos principais: WRITER (processador de texto — equivalente ao Word), CALC (planilha eletrônica — equivalente ao Excel), IMPRESS (apresentações — equivalente ao PowerPoint), BASE (banco de dados — equivalente ao Access), DRAW (desenho vetorial), MATH (fórmulas). FORMATOS NATIVOS (OpenDocument — ODF): ODT (Writer), ODS (Calc), ODP (Impress), ODG (Draw), ODB (Base). FORMATOS DO MICROSOFT OFFICE: DOCX, XLSX, PPTX — abertos pelo LibreOffice, mas formatações avançadas (macros, fontes específicas, tabelas complexas) podem sofrer pequenas alterações. COMPATIBILIDADE: LibreOffice abre e salva em formatos da Microsoft, mas o padrão é ODF. Salvamento padrão: ODT/ODS/ODP. Para manter compatibilidade com o Office, é preciso escolher "Salvar como" e selecionar o formato DOCX/XLSX/PPTX. DIFERENÇAS DE INTERFACE: menus e nomes de comandos variam (ex.: "Inserir → Cabeçalho" pode estar em outro menu; estilos têm nomes diferentes). ATALHOS: muitos coincidem com o Office (Ctrl+B salvar, Ctrl+C copiar), mas alguns diferem. FUNÇÕES DO CALC: usam PONTO E VÍRGULA como separador de argumentos (ex.: =SOMA(A1;A10)) em versões em português — diferente do Excel em inglês (vírgula). IMPORTANTE: em versões do LibreOffice em português do Brasil, o separador pode ser PONTO E VÍRGULA, o que confunde candidatos vindos do Excel. VANTAGENS: gratuito, código aberto, multiplataforma (Windows, Linux, macOS). DESVANTAGENS: menos recursos avançados que o Office, compatibilidade imperfeita com macros VBA.',

    exemplos: [
      'Writer → documento de texto → formato nativo .odt (equivalente ao .docx).',
      'Calc → planilha → formato nativo .ods (equivalente ao .xlsx).',
      'Impress → apresentação → formato nativo .odp (equivalente ao .pptx).',
      'LibreOffice abre .docx, .xlsx, .pptx do Microsoft Office.',
      'LibreOffice salva em .odt por padrão — para compatibilidade, use "Salvar como" e escolha .docx.',
      'Formato aberto ODF: padrão internacional ISO/IEC 26300 — sem licença proprietária.',
      'Separador de argumentos no Calc em português: ponto e vírgula (=SOMA(A1;A10)).',
      'Macros VBA do Excel podem não funcionar bem no LibreOffice (que usa Basic/LO Basic).',
      'Fontes exclusivas do Office podem ser substituídas por equivalentes.'
    ],

    comparacoes: [
      { termoA: 'Microsoft Office', termoB: 'LibreOffice', diferenca: 'OFFICE: suíte PROPRIETÁRIA e PAGA da Microsoft (Word, Excel, PowerPoint). Formatos nativos: DOCX, XLSX, PPTX. Mais recursos avançados, macros VBA, integração com OneDrive/Teams, versão web (Microsoft 365). LIBREOFFICE: suíte LIVRE, GRATUITA e de CÓDIGO ABERTO (Writer, Calc, Impress). Formatos nativos: ODT, ODS, ODP (padrão aberto ODF). Boa compatibilidade com formatos do Office, mas formatações complexas podem variar. Ideal para quem não quer pagar licença.' },
      { termoA: 'Formatos ODF (ODT, ODS, ODP)', termoB: 'Formatos do Office (DOCX, XLSX, PPTX)', diferenca: 'ODF: padrão ABERTO e internacional (ISO/IEC 26300) — qualquer suíte pode implementar. Nativo do LibreOffice. DOCX/XLSX/PPTX: formatos proprietários da Microsoft, mas com especificação publicada (ECMA-376/ISO/IEC 29500). O LibreOffice abre e salva em ambos, mas o padrão dele é ODF.' },
      { termoA: 'Writer', termoB: 'Word', diferenca: 'WRITER: processador de texto do LibreOffice — formato nativo .odt. Interface similar ao Word. Funcionalidades: estilos, sumário, cabeçalho/rodapé, exportação para PDF. WORD: processador da Microsoft — formato nativo .docx. Recursos mais avançados (SmartArt, integração Office 365). A banca cobra a correspondência Writer ↔ Word.' },
      { termoA: 'Calc', termoB: 'Excel', diferenca: 'CALC: planilha do LibreOffice — formato nativo .ods. Funções similares (=SOMA, =MÉDIA, =SE, =CONT.SE). ATENÇÃO: em versões em português do Brasil, o separador de argumentos costuma ser PONTO E VÍRGULA (=SOMA(A1;A10)), enquanto o Excel em inglês usa vírgula. EXCEL: planilha da Microsoft — .xlsx. Suporta macros VBA, Power Query, Power Pivot — recursos avançados não totalmente disponíveis no Calc.' },
      { termoA: 'Impress', termoB: 'PowerPoint', diferenca: 'IMPRESS: apresentações do LibreOffice — .odp. Suporta slides, transições, animações, exportação para PDF. POWERPOINT: apresentações da Microsoft — .pptx. Recursos mais avançados (Morph, Zoom, ícones modernos). A correspondência é direta: Impress ≈ PowerPoint.' }
    ],

    aplicacaoEmConcurso: 'LibreOffice aparece quando o edital menciona "suíte de escritório livre" ou "software livre". As bancas cobram: correspondência Writer/Calc/Impress ↔ Word/Excel/PowerPoint, formatos nativos (ODT/ODS/ODP), compatibilidade com Microsoft Office, uso de ponto e vírgula no Calc em português, e diferenças de interface. Interpretação de conceitos.',

    pegadinhas: [
      'Achar que ODT/ODS/ODP são formatos do Microsoft Office — são formatos abertos ODF do LibreOffice.',
      'Achar que LibreOffice é 100% compatível com Office — formatações avançadas podem variar.',
      'Confundir Writer (texto) com Calc (planilha) e Impress (apresentação).',
      'Achar que o formato padrão do LibreOffice é DOCX — o padrão é ODT.',
      'Não saber que o separador de argumentos no Calc em português é PONTO E VÍRGULA.',
      'Achar que LibreOffice é só para Linux — roda em Windows, Linux e macOS.',
      'Achar que "software livre" é sinônimo de "software gratuito" — livre é sobre liberdade, não preço.'
    ],

    errosComuns: [
      'Confundir os formatos nativos de cada aplicativo.',
      'Achar que macros VBA do Excel funcionam perfeitamente no Calc.',
      'Não saber a correspondência entre aplicativos.',
      'Ignorar as diferenças de comandos entre as suítes.'
    ],

    resumo: [
      'LibreOffice: suíte livre e gratuita. Writer (texto), Calc (planilha), Impress (apresentação).',
      'Formatos nativos: ODT (Writer), ODS (Calc), ODP (Impress) — padrão ODF.',
      'Compatível com DOCX, XLSX, PPTX do Microsoft Office.',
      'O padrão do LibreOffice é salvar em ODF; para Office, use "Salvar como" e escolha DOCX/XLSX/PPTX.',
      'Calc em português: separador de argumentos é PONTO E VÍRGULA (=SOMA(A1;A10)).',
      'Macros VBA podem não funcionar bem no LibreOffice.',
      'Roda em Windows, Linux e macOS.',
      'Padrão ODF: ISO/IEC 26300.'
    ],

    modoProfessor: {
      explicarMaisSimples: 'LibreOffice é o "irmão gratuito" do Microsoft Office. Writer = Word; Calc = Excel; Impress = PowerPoint. A diferença está nos formatos nativos (ODT, ODS, ODP — abertos) e no padrão de salvamento. Ele abre arquivos do Office, mas formatações complexas podem variar.',
      outroExemplo: 'Você recebe um .docx do trabalho. Abre no Writer do LibreOffice — funciona. Se editar e salvar de novo como .docx, o layout pode sofrer pequenas alterações. Se salvar como .odt, o layout fica perfeito no LibreOffice, mas pode variar se alguém abrir no Word. Cada formato tem seu "território".',
      compararConceitos: 'Writer × Word. Calc × Excel. Impress × PowerPoint. ODT × DOCX. ODF (aberto) × Office (proprietário).',
      mostrarPegadinha: 'Cuidado: em versões do Calc em PORTUGUÊS, as fórmulas usam PONTO E VÍRGULA como separador de argumentos (=SOMA(A1;A10)), enquanto o Excel em INGLÊS usa vírgula (=SOMA(A1,A10)). A banca adora essa diferença — leia com atenção o enunciado.',
      comoApareceEmConcurso: 'Interpretação de conceitos e compatibilidade. Frequência condicional.',
      fazerPergunta: {
        pergunta: 'Qual o formato nativo de cada aplicativo do LibreOffice?',
        resposta: 'WRITER (texto) → .odt (OpenDocument Text). CALC (planilha) → .ods (OpenDocument Spreadsheet). IMPRESS (apresentação) → .odp (OpenDocument Presentation). Todos fazem parte do padrão ODF (OpenDocument Format) — ISO/IEC 26300.'
      }
    }
  },

  /* ============================================================
     INF-15 — Linux e Outros Ambientes
  ============================================================ */
  'INF-15': {
    id: 'L-INF-15',
    moduloId: 'INF-15',
    objetivo: 'Compreender os conceitos de software livre e código aberto; conhecer as principais distribuições e ambientes gráficos Linux; entender a estrutura de arquivos e diretórios, permissões e usuários; conhecer noções de terminal e comandos básicos; identificar as diferenças conceituais entre Windows e Linux.',
    prerequisitos: ['INF-02'],

    introducao: 'Linux é conteúdo CONDICIONAL — só vale investimento quando o edital cobra explicitamente. Mas quando cai, é questão direta: conceitos de software livre, estrutura de diretórios, permissões e comandos básicos. É um módulo que exige vocabulário específico e raciocínio lógico, mas não profundidade técnica de administrador. Sempre leia o edital para saber o nível exigido.',

    explicacaoSimples: 'Pense no Linux como um "sistema operacional alternativo" ao Windows, baseado em software livre. Ele é gratuito, de código aberto e tem várias "versões" (distribuições) — Ubuntu, Debian, Fedora, Mint. A estrutura de arquivos é em forma de árvore (tudo começa em "/"). Os arquivos têm permissões (quem pode ler, escrever, executar). O terminal é uma janela de comandos de texto — mais direto, mas exige memorização. A grande diferença conceitual: no Windows, "C:\\" é o disco principal; no Linux, "/" é a raiz e tudo está pendurado nela.',

    explicacaoTecnica: 'SOFTWARE LIVRE (Free Software): movimento fundado por Richard Stallman — defende 4 liberdades: (1) executar o programa para qualquer propósito; (2) estudar e modificar o código; (3) redistribuir cópias; (4) distribuir versões modificadas. CÓDIGO ABERTO (Open Source): termo criado por Eric Raymond — foco prático nos benefícios do código acessível, sem o viés filosófico do "livre". Apesar da diferença, os dois termos são usados como sinônimos em muitos contextos. Linux é um NÚCLEO (kernel) — o restante do sistema vem de projetos como GNU. Por isso se diz "GNU/Linux". DISTRIBUIÇÕES (DISTROS): Ubuntu, Debian, Fedora, Red Hat, CentOS, Linux Mint, openSUSE, Arch Linux. Cada distro empacota o kernel + software + gerenciador de pacotes + ambiente gráfico. AMBIENTES GRÁFICOS: GNOME, KDE Plasma, Xfce, Cinnamon, Mate — cada um com visual e comportamento diferentes. ESTRUTURA DE DIRETÓRIOS (FHS — Filesystem Hierarchy Standard): / (raiz) — tudo começa aqui; /home — pastas pessoais dos usuários; /etc — arquivos de configuração; /var — arquivos variáveis (logs, spool); /bin e /usr/bin — executáveis dos usuários; /sbin e /usr/sbin — executáveis administrativos; /tmp — temporários; /dev — dispositivos; /proc e /sys — informações do sistema em tempo real; /root — pasta pessoal do root; /boot — arquivos de inicialização; /lib — bibliotecas. PERMISSÕES: cada arquivo tem permissões para três categorias — DONO (u), GRUPO (g), OUTROS (o) — e três tipos — LEITURA (r), ESCRITA (w), EXECUÇÃO (x). Notação octal: 4 = r, 2 = w, 1 = x. Ex.: chmod 755 arquivo → rwxr-xr-x. Notação simbólica: chmod u+x arquivo. USUÁRIOS: cada pessoa tem conta; root é o superusuário (controle total); sudo permite executar comandos como root. COMANDOS BÁSICOS: ls (listar), cd (mudar diretório), pwd (caminho atual), mkdir (criar pasta), rm (remover), cp (copiar), mv (mover/renomear), cat (exibir arquivo), less (navegar), chmod (permissões), chown (dono), ps (processos), kill (encerrar processo), grep (buscar em texto), man (manual), sudo (executar como admin), apt/yum/dnf (gerenciadores de pacotes). DIFERENÇAS WINDOWS × LINUX: Windows — C:\\ como raiz, letras de unidade (C:, D:), case-insensitive (arquivo.txt = ARQUIVO.TXT), \\ como separador, sistema proprietário. Linux — / como raiz única, sem letras de unidade, CASE-SENSITIVE (arquivo.txt ≠ Arquivo.txt), / como separador, livre.',

    exemplos: [
      'Distribuições Linux: Ubuntu, Debian, Fedora, CentOS, Linux Mint, Arch Linux.',
      'Ambientes gráficos: GNOME, KDE Plasma, Xfce, Cinnamon, Mate.',
      'Estrutura: / (raiz) → /home → /home/usuario; /etc; /var; /usr; /bin.',
      'Permissões: rwx (dono, grupo, outros). Ex.: chmod 755 arquivo.',
      'Comandos: ls (listar), cd (mudar pasta), pwd (caminho), mkdir (criar), rm (apagar), cp (copiar), mv (mover).',
      'sudo apt update: atualiza a lista de pacotes (Debian/Ubuntu).',
      'sudo dnf install pacote: instala programa (Fedora).',
      'grep "palavra" arquivo.txt: busca texto dentro de um arquivo.',
      'man ls: manual do comando ls.',
      'Case-sensitive: "Arquivo.txt" ≠ "arquivo.txt" no Linux (no Windows seria o mesmo).'
    ],

    comparacoes: [
      { termoA: 'Software livre', termoB: 'Código aberto', diferenca: 'SOFTWARE LIVRE (Free Software): movimento filosófico de Richard Stallman — enfatiza 4 LIBERDADES do usuário (executar, estudar, redistribuir, modificar). "Free" aqui é sobre LIBERDADE, não preço. CÓDIGO ABERTO (Open Source): termo de Eric Raymond — foco PRÁTICO nos benefícios técnicos e econômicos do código acessível. Os dois conceitos são usados como sinônimos em muitos contextos, mas partem de filosofias ligeiramente diferentes.' },
      { termoA: 'Windows', termoB: 'Linux', diferenca: 'WINDOWS: sistema proprietário da Microsoft — raiz em C:\\, letras de unidade (C:, D:, E:), separador \\, CASE-INSENSITIVE (arquivo.txt = ARQUIVO.TXT), interface gráfica padrão. LINUX: sistema livre — raiz única "/", SEM letras de unidade, separador /, CASE-SENSITIVE (arquivo.txt ≠ Arquivo.TXT), terminal poderoso, várias distribuições e ambientes gráficos.' },
      { termoA: 'Kernel (núcleo)', termoB: 'Distribuição Linux', diferenca: 'KERNEL: o NÚCLEO do sistema — gerencia hardware, processos, memória, arquivos. Linux é o kernel (criado por Linus Torvalds). DISTRIBUIÇÃO: pacote completo — kernel + software GNU + gerenciador de pacotes + ambiente gráfico + aplicativos. Exemplos: Ubuntu, Debian, Fedora, Mint. Uma distro é o "sistema completo"; o kernel é só o coração.' },
      { termoA: 'Permissão de leitura (r)', termoB: 'Permissão de escrita (w) e execução (x)', diferenca: 'LEITURA (r): permite visualizar o conteúdo do arquivo ou listar o diretório. Valor octal: 4. ESCRITA (w): permite modificar o arquivo ou criar/remover entradas no diretório. Valor octal: 2. EXECUÇÃO (x): permite executar o arquivo (se for programa/script) ou entrar no diretório (se for pasta). Valor octal: 1. A soma permite combinações: 7 = rwx, 6 = rw-, 5 = r-x, 4 = r--.' },
      { termoA: 'chmod', termoB: 'chown', diferenca: 'CHMOD (change mode): altera as PERMISSÕES de um arquivo ou diretório. Ex.: chmod 755 arquivo → dono rwx, grupo r-x, outros r-x. CHOWN (change owner): altera o DONO do arquivo ou diretório. Ex.: chown usuario arquivo. São comandos complementares: um controla "o que pode fazer", o outro controla "quem é o dono".' }
    ],

    aplicacaoEmConcurso: 'Linux aparece quando o edital exige "noções de Linux" ou "ambientes operacionais". As bancas cobram: conceitos de software livre e código aberto, distribuições (Ubuntu, Debian, Fedora), estrutura de diretórios (/home, /etc, /var), permissões (r, w, x, notação octal), comandos básicos (ls, cd, mkdir, rm, cp, mv, chmod, chown, sudo) e diferenças Windows × Linux (case-sensitive, raiz /). Interpretação de conceitos.',

    pegadinhas: [
      'Achar que "software livre" é sinônimo de "software gratuito" — livre é sobre liberdade, não preço.',
      'Achar que Linux é uma distribuição única — existem várias distros (Ubuntu, Debian, Fedora).',
      'Confundir kernel (núcleo) com distribuição (sistema completo).',
      'Achar que Linux tem letras de unidade (C:, D:) — a raiz é "/".',
      'Achar que Linux é case-insensitive como Windows — no Linux, "arquivo.txt" ≠ "Arquivo.txt".',
      'Confundir chmod (permissões) com chown (dono).',
      'Achar que o comando "rm" envia para Lixeira — no Linux, rm apaga permanentemente.',
      'Confundir "/" (raiz do sistema) com "/root" (pasta pessoal do root).'
    ],

    errosComuns: [
      'Não saber os conceitos de software livre.',
      'Confundir distribuições com ambientes gráficos.',
      'Não conhecer a estrutura básica de diretórios.',
      'Não entender a notação octal de permissões.',
      'Achar que Linux é só linha de comando — hoje há ambientes gráficos completos.'
    ],

    resumo: [
      'Software livre: 4 liberdades — executar, estudar, redistribuir, modificar.',
      'Linux é o KERNEL; distribuições empacotam kernel + software + ambiente gráfico.',
      'Distros: Ubuntu, Debian, Fedora, CentOS, Linux Mint, Arch Linux.',
      'Ambientes gráficos: GNOME, KDE Plasma, Xfce, Cinnamon, Mate.',
      'Estrutura: / (raiz) → /home, /etc, /var, /usr, /tmp, /bin, /dev.',
      'Permissões: r (4), w (2), x (1) para dono, grupo e outros.',
      'Comandos: ls, cd, pwd, mkdir, rm, cp, mv, chmod, chown, grep, sudo.',
      'Windows: C:\\ (raiz), case-insensitive. Linux: / (raiz), case-sensitive.'
    ],

    modoProfessor: {
      explicarMaisSimples: 'Linux é um SO alternativo ao Windows, livre e gratuito. Tem várias versões (distros). Tudo começa em "/" (raiz). Arquivos têm permissões: r (ler), w (escrever), x (executar). O terminal usa comandos de texto (ls, cd, cp, mv, rm). A grande diferença: Linux é case-sensitive (maiúscula ≠ minúscula) e não tem letras de unidade (C:, D:).',
      outroExemplo: 'No Windows, "Documento.txt" e "documento.txt" são o MESMO arquivo — é case-insensitive. No Linux, são DOIS arquivos diferentes — é case-sensitive. Isso gera confusão quando você copia arquivos entre sistemas: às vezes aparece "documento.txt (1)" porque o nome já existia com outra capitalização.',
      compararConceitos: 'Windows × Linux. Kernel × Distribuição. Software livre × Código aberto. chmod × chown. r × w × x.',
      mostrarPegadinha: 'Cuidado: "software livre é sempre gratuito" — FALSO. Livre é sobre LIBERDADE (poder usar, estudar, modificar, redistribuir). Você pode vender um software livre, desde que mantenha as liberdades. A banca adora essa confusão.',
      comoApareceEmConcurso: 'Conceitos e comandos básicos. Frequência condicional.',
      fazerPergunta: {
        pergunta: 'Qual a diferença entre o kernel Linux e uma distribuição Linux?',
        resposta: 'KERNEL: o NÚCLEO do sistema — gerencia hardware, processos, memória e arquivos. O Linux (criado por Linus Torvalds) é o kernel. DISTRIBUIÇÃO: pacote completo — kernel Linux + software GNU + gerenciador de pacotes + ambiente gráfico + aplicativos. Exemplos: Ubuntu, Debian, Fedora, Linux Mint. A distribuição é o "sistema completo" que você instala; o kernel é o coração.'
      }
    }
  }

};
