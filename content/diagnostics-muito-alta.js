/* ============================================================
   DIAGNÓSTICOS — Módulos de prioridade MUITO ALTA
   Preenchidos: INF-02, INF-03, INF-04, INF-07, INF-11
   ============================================================ */

window.DIAGNOSTICS_MUITO_ALTA = {

  /* ============================================================
     INF-02 — Windows
  ============================================================ */
  'INF-02': {
    id: 'D-INF-02',
    moduloId: 'INF-02',
    itens: [
      {
        id: 'D-INF-02-01',
        tipo: 'multipla_escolha',
        subtopico: 'Copiar x mover',
        pergunta: 'Você seleciona o arquivo "relatorio.docx" na pasta Documentos, pressiona Ctrl+X e depois, na pasta Área de Trabalho, pressiona Ctrl+V. O que aconteceu com o arquivo?',
        alternativas: [
          { id: 'A', texto: 'Foi copiado: existem agora duas versões do arquivo.' },
          { id: 'B', texto: 'Foi movido: saiu de Documentos e foi para a Área de Trabalho.' },
          { id: 'C', texto: 'Foi excluído permanentemente.' },
          { id: 'D', texto: 'Foi enviado para a Lixeira.' }
        ],
        gabarito: 'B',
        explicacao: 'Ctrl+X recorta (retira da origem) e Ctrl+V cola (insere no destino). O arquivo foi MOVIDO — não existe mais em Documentos. Se fosse Ctrl+C e Ctrl+V, haveria duas cópias (original + duplicata). Ctrl+X nunca envia para a Lixeira — apenas move.'
      },
      {
        id: 'D-INF-02-02',
        tipo: 'multipla_escolha',
        subtopico: 'Lixeira x exclusão definitiva',
        pergunta: 'Um usuário seleciona um arquivo no Explorador de Arquivos e pressiona Shift+Delete. O que acontece?',
        alternativas: [
          { id: 'A', texto: 'O arquivo vai para a Lixeira e pode ser restaurado.' },
          { id: 'B', texto: 'O arquivo é excluído permanentemente, sem passar pela Lixeira.' },
          { id: 'C', texto: 'O arquivo é copiado para a área de transferência.' },
          { id: 'D', texto: 'O arquivo é renomeado automaticamente.' }
        ],
        gabarito: 'B',
        explicacao: 'Delete simples envia para a Lixeira (recuperável). Shift+Delete exclui PERMANENTEMENTE — não há como restaurar pelo Windows. Essa é uma pegadinha clássica: o Shift "pula" a Lixeira. Atenção: arquivos de pendrives geralmente não vão para a Lixeira mesmo com Delete simples.'
      },
      {
        id: 'D-INF-02-03',
        tipo: 'verdadeiro_falso',
        subtopico: 'Lixeira',
        pergunta: 'Arquivos excluídos de um pendrive (unidade removível) com a tecla Delete vão para a Lixeira e podem ser restaurados por ela.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. Arquivos de pendrives e de unidades de rede geralmente NÃO vão para a Lixeira. A Lixeira é configurada, por padrão, apenas para unidades locais (C:). Ao excluir um arquivo do pendrive, ele é removido diretamente. Para recuperá-lo seria necessário software específico de recuperação.'
      },
      {
        id: 'D-INF-02-04',
        tipo: 'autoavaliacao',
        subtopico: 'Regras gerais',
        pergunta: 'Você consegue distinguir, com segurança: copiar × mover, Lixeira × exclusão definitiva, unidade local × unidade removível, arquivo × atalho, conta administrador × conta padrão?',
        resposta: 'COPIAR (Ctrl+C): duplica — original permanece. MOVER (Ctrl+X): transfere — sai da origem. LIXEIRA × EXCLUSÃO: Delete envia à Lixeira (recuperável); Shift+Delete apaga permanentemente. UNIDADE LOCAL × REMOVÍVEL: local usa Lixeira; pendrive geralmente não. ARQUIVO × ATALHO: atalho (.lnk) aponta para o original; apagar o atalho não apaga o arquivo. ADMINISTRADOR × PADRÃO: admin tem controle total (instala programas, altera configurações); padrão tem uso limitado.'
      }
    ]
  },

  /* ============================================================
     INF-03 — Word
  ============================================================ */
  'INF-03': {
    id: 'D-INF-03',
    moduloId: 'INF-03',
    itens: [
      {
        id: 'D-INF-03-01',
        tipo: 'multipla_escolha',
        subtopico: 'Atalhos',
        pergunta: 'No Microsoft Word em PORTUGUÊS, qual é a função da combinação Ctrl+S?',
        alternativas: [
          { id: 'A', texto: 'Salvar o documento.' },
          { id: 'B', texto: 'Sublinhar o texto selecionado.' },
          { id: 'C', texto: 'Selecionar todo o texto.' },
          { id: 'D', texto: 'Fechar o documento.' }
        ],
        gabarito: 'B',
        explicacao: 'No Word em PORTUGUÊS, Ctrl+S = SUBLINHADO e Ctrl+B = SALVAR. No Word em INGLÊS é o contrário: Ctrl+S = save (salvar) e Ctrl+B = bold (negrito). A banca adora essa pegadinha bilíngue. Para selecionar tudo: Ctrl+T. Para fechar: Ctrl+W.'
      },
      {
        id: 'D-INF-03-02',
        tipo: 'multipla_escolha',
        subtopico: 'Quebra de página x quebra de seção',
        pergunta: 'Um documento do Word precisa ter orientação retrato nas primeiras páginas e paisagem nas demais, mantendo o mesmo arquivo. Qual recurso permite isso?',
        alternativas: [
          { id: 'A', texto: 'Quebra de página (Ctrl+Enter).' },
          { id: 'B', texto: 'Quebra de seção.' },
          { id: 'C', texto: 'Inserir cabeçalho e rodapé.' },
          { id: 'D', texto: 'Aplicar negrito nas páginas.' }
        ],
        gabarito: 'B',
        explicacao: 'QUEBRA DE SEÇÃO divide o documento em blocos independentes — permite ter orientações diferentes (retrato/paisagem), margens diferentes, cabeçalhos diferentes. A QUEBRA DE PÁGINA (Ctrl+Enter) apenas inicia nova página, mantendo a mesma configuração. Para mesclar orientações no mesmo arquivo, é preciso quebra de seção.'
      },
      {
        id: 'D-INF-03-03',
        tipo: 'verdadeiro_falso',
        subtopico: 'Salvar x exportar',
        pergunta: 'Ao exportar um documento do Word para PDF, o arquivo .docx original é substituído pelo PDF — não é possível continuar editando depois.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. EXPORTAR gera uma CÓPIA em outro formato (PDF) e MANTÉM o arquivo original (.docx). Você continua podendo editar o .docx normalmente. A banca explora a confusão: exportar ≠ substituir. Recomendação: sempre salve em .docx primeiro e depois exporte para PDF.'
      },
      {
        id: 'D-INF-03-04',
        tipo: 'autoavaliacao',
        subtopico: 'Regras gerais',
        pergunta: 'Você domina: diferença entre Salvar / Salvar como / Exportar, quebra de página × quebra de seção, atalhos do Word em português, cabeçalho/rodapé, estilos e sumário automático?',
        resposta: 'SALVAR (Ctrl+B em PT): grava no mesmo local/formato. SALVAR COMO (F12): escolhe novo nome/local/formato — original preservado. EXPORTAR: gera cópia em outro formato (PDF). QUEBRA DE PÁGINA (Ctrl+Enter): nova página, mesma configuração. QUEBRA DE SEÇÃO: bloco independente — permite orientações, margens e cabeçalhos diferentes. ATALHOS PT: Ctrl+N (negrito), Ctrl+I (itálico), Ctrl+S (sublinhado), Ctrl+B (salvar), Ctrl+E (centralizar), Ctrl+J (justificar). ESTILOS (Título 1, Título 2) geram SUMÁRIO AUTOMÁTICO. CABEÇALHO/RODAPÉ aparecem em todas as páginas (ou por seção).'
      }
    ]
  },

  /* ============================================================
     INF-04 — Excel
  ============================================================ */
  'INF-04': {
    id: 'D-INF-04',
    moduloId: 'INF-04',
    itens: [
      {
        id: 'D-INF-04-01',
        tipo: 'multipla_escolha',
        subtopico: 'Referências relativas e absolutas',
        pergunta: 'Na célula C1 há a fórmula =A1*$B$1. Ao copiar essa fórmula para a célula C2, ela se torna:',
        alternativas: [
          { id: 'A', texto: '=A1*$B$1' },
          { id: 'B', texto: '=A2*$B$1' },
          { id: 'C', texto: '=A2*$B$2' },
          { id: 'D', texto: '=A1*$B$2' }
        ],
        gabarito: 'B',
        explicacao: 'A1 é referência RELATIVA — ao descer uma linha (C1 → C2), vira A2. $B$1 é ABSOLUTA — o "$" trava e NÃO muda, permanece $B$1. Resultado: =A2*$B$1. A parte relativa se ajusta; a absoluta permanece fixa. É a base para multiplicar valores por uma taxa fixa.'
      },
      {
        id: 'D-INF-04-02',
        tipo: 'multipla_escolha',
        subtopico: 'Ordem de cálculo',
        pergunta: 'Qual o resultado da fórmula =2+3*4 no Excel?',
        alternativas: [
          { id: 'A', texto: '20' },
          { id: 'B', texto: '14' },
          { id: 'C', texto: '24' },
          { id: 'D', texto: '9' }
        ],
        gabarito: 'B',
        explicacao: 'A ORDEM de cálculo é: 1º parênteses; 2º potência; 3º multiplicação/divisão; 4º soma/subtração. Em =2+3*4, primeiro 3*4=12, depois 2+12=14. Se fosse =(2+3)*4, o resultado seria 20. Os parênteses alteram a ordem — a banca cobra essa diferença.'
      },
      {
        id: 'D-INF-04-03',
        tipo: 'verdadeiro_falso',
        subtopico: 'Funções',
        pergunta: 'As funções CONT.NÚM e CONT.VALORES retornam sempre o mesmo resultado quando aplicadas ao mesmo intervalo.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. CONT.NÚM conta apenas células com NÚMEROS — ignora texto e vazias. CONT.VALORES conta todas as células NÃO VAZIAS — inclui números, textos e datas. Se o intervalo tiver 6 números e 2 textos, CONT.NÚM = 6 e CONT.VALORES = 8. São funções diferentes.'
      },
      {
        id: 'D-INF-04-04',
        tipo: 'autoavaliacao',
        subtopico: 'Regras gerais',
        pergunta: 'Você domina: referências relativas (A1) × absolutas ($A$1) × mistas ($A1 ou A$1), ordem de cálculo, funções essenciais (SOMA, MÉDIA, SE, CONT.SE), e mensagens de erro (#DIV/0!, #VALOR!, #REF!)?',
        resposta: 'RELATIVA (A1): muda ao copiar. ABSOLUTA ($A$1): NÃO muda — o $ trava. MISTA ($A1 ou A$1): trava apenas coluna OU linha. ORDEM: parênteses → potência → multiplicação/divisão → soma/subtração. FUNÇÕES: SOMA, MÉDIA, MÁXIMO, MÍNIMO, CONT.NÚM (só números), CONT.VALORES (não vazias), SE (retorna valor), CONT.SE (conta células). ERROS: #DIV/0! (divisão por zero), #VALOR! (tipo errado), #REF! (referência excluída), #N/A (valor não disponível). Atalho F4 alterna entre A1 → $A$1 → A$1 → $A1.'
      }
    ]
  },

  /* ============================================================
     INF-07 — Internet e Navegadores
  ============================================================ */
  'INF-07': {
    id: 'D-INF-07',
    moduloId: 'INF-07',
    itens: [
      {
        id: 'D-INF-07-01',
        tipo: 'multipla_escolha',
        subtopico: 'Internet x Web',
        pergunta: 'Sobre a diferença entre Internet e Web, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'São sinônimos — designam a mesma coisa.' },
          { id: 'B', texto: 'A Internet é a infraestrutura mundial de redes; a Web é um dos serviços que rodam sobre ela.' },
          { id: 'C', texto: 'A Web é a infraestrutura; a Internet é o serviço.' },
          { id: 'D', texto: 'A Internet só existe quando há navegador aberto.' }
        ],
        gabarito: 'B',
        explicacao: 'INTERNET: infraestrutura física e lógica mundial — conecta bilhões de dispositivos. WEB (WWW): um dos SERVIÇOS que rodam sobre a Internet — conjunto de páginas acessadas por navegador. Outros serviços: e-mail, FTP, VoIP, streaming. A Internet é o "encanamento"; a Web é "a água que passa por ele".'
      },
      {
        id: 'D-INF-07-02',
        tipo: 'multipla_escolha',
        subtopico: 'Cache x cookies',
        pergunta: 'Qual a diferença entre cache e cookies no navegador?',
        alternativas: [
          { id: 'A', texto: 'São a mesma coisa — apenas nomes diferentes.' },
          { id: 'B', texto: 'Cache guarda cópias locais de páginas e imagens para acelerar o carregamento; cookies armazenam preferências e dados de sessão.' },
          { id: 'C', texto: 'Cookies são mais rápidos que cache.' },
          { id: 'D', texto: 'Cache guarda senhas; cookies guardam imagens.' }
        ],
        gabarito: 'B',
        explicacao: 'CACHE: cópias locais de imagens e páginas — aceleram o carregamento em visitas futuras. COOKIES: pequenos arquivos com dados de sessão, preferências e login — identificam o usuário. Limpar cache libera espaço; limpar cookies desloga e apaga preferências. São coisas diferentes — a banca adora confundir.'
      },
      {
        id: 'D-INF-07-03',
        tipo: 'verdadeiro_falso',
        subtopico: 'Navegação privada',
        pergunta: 'A navegação privada (ou anônima) garante anonimato total na Internet — nem o provedor nem os sites conseguem ver sua atividade.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. A navegação privada NÃO salva histórico, cookies e formulários no DISPOSITIVO local — útil em computadores compartilhados. Mas o provedor de Internet, a rede corporativa e os sites ainda veem sua atividade. Para anonimato real seria necessário VPN ou Tor. A banca adora essa pegadinha.'
      },
      {
        id: 'D-INF-07-04',
        tipo: 'autoavaliacao',
        subtopico: 'Regras gerais',
        pergunta: 'Você domina: diferença Internet × Web, intranet × extranet, HTTP × HTTPS, cache × cookies, navegação privada, atalhos (Ctrl+T, Ctrl+D, Ctrl+H, Ctrl+J) e estrutura de URL?',
        resposta: 'INTERNET: infraestrutura. WEB: serviço sobre a Internet. INTRANET: rede interna privada. EXTRANET: extensão para parceiros externos autorizados. HTTP: sem criptografia. HTTPS: com criptografia (cadeado). CACHE: cópias locais para acelerar. COOKIES: dados de sessão/preferências. PRIVADA: não salva localmente, mas NÃO é anônima. ATALHOS: Ctrl+T (nova aba), Ctrl+D (favorito), Ctrl+H (histórico), Ctrl+J (downloads), Ctrl+Shift+N (anônima no Chrome/Edge). URL: protocolo://domínio/caminho.'
      }
    ]
  },

  /* ============================================================
     INF-11 — Segurança da Informação
  ============================================================ */
  'INF-11': {
    id: 'D-INF-11',
    moduloId: 'INF-11',
    itens: [
      {
        id: 'D-INF-11-01',
        tipo: 'multipla_escolha',
        subtopico: 'Vírus x worm',
        pergunta: 'Sobre a diferença entre vírus e worm, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'São sinônimos — ambos se espalham sem ação do usuário.' },
          { id: 'B', texto: 'O vírus precisa de um arquivo hospedeiro e da ação do usuário; o worm se autorreplica pela rede sem ação do usuário.' },
          { id: 'C', texto: 'O worm precisa de arquivo hospedeiro; o vírus se espalha sozinho.' },
          { id: 'D', texto: 'Ambos precisam ser executados manualmente.' }
        ],
        gabarito: 'B',
        explicacao: 'VÍRUS: precisa de arquivo hospedeiro e da AÇÃO do usuário (executar o arquivo) para se espalhar. WORM: autorreplicante — se espalha pela REDE automaticamente, SEM ação do usuário. O worm é mais perigoso em redes porque se propaga sozinho. Pegadinha clássica em provas.'
      },
      {
        id: 'D-INF-11-02',
        tipo: 'multipla_escolha',
        subtopico: 'Criptografia',
        pergunta: 'Na criptografia ASSIMÉTRICA, como funcionam as chaves?',
        alternativas: [
          { id: 'A', texto: 'A mesma chave cifra e decifra.' },
          { id: 'B', texto: 'A chave pública cifra e a chave privada decifra.' },
          { id: 'C', texto: 'A chave privada cifra e a chave pública decifra.' },
          { id: 'D', texto: 'Não utiliza chaves — apenas senhas.' }
        ],
        gabarito: 'B',
        explicacao: 'ASSIMÉTRICA: par de chaves — a PÚBLICA cifra (pode ser distribuída) e a PRIVADA decifra (só o dono tem). Resolve o problema do compartilhamento seguro. A SIMÉTRICA usa a MESMA chave (mais rápida, mas exige compartilhar a chave). HTTPS, assinatura digital e certificados usam criptografia assimétrica.'
      },
      {
        id: 'D-INF-11-03',
        tipo: 'verdadeiro_falso',
        subtopico: 'Phishing',
        pergunta: 'Phishing é apenas uma forma de spam publicitário — não representa ameaça real, pois não rouba dados.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. SPAM é mensagem não solicitada, geralmente publicitária — incômodo, mas não necessariamente malicioso. PHISHING é mensagem FRAUDULENTA que imita instituição legítima (banco, governo) para ROUBAR DADOS (senhas, CPF, cartão). Toda phishing é uma ameaça séria. A banca explora a confusão.'
      },
      {
        id: 'D-INF-11-04',
        tipo: 'autoavaliacao',
        subtopico: 'Regras gerais',
        pergunta: 'Você domina: princípios CIDA, tipos de malware (vírus, worm, trojan, ransomware, spyware), mecanismos de proteção (antivírus, firewall, MFA), criptografia simétrica × assimétrica, certificado digital e assinatura digital?',
        resposta: 'CIDA: Confidencialidade, Integridade, Disponibilidade, Autenticidade. MALWARE: VÍRUS (ação do usuário + hospedeiro), WORM (autorreplicante), TROJAN (disfarçado, não replica), RANSOMWARE (criptografa e pede resgate), SPYWARE (espiona). PROTEÇÃO: antivírus, firewall, atualizações, senhas fortes + MFA. CRIPTOGRAFIA: SIMÉTRICA (1 chave), ASSIMÉTRICA (2 chaves — pública cifra, privada decifra). CERTIFICADO DIGITAL: garante identidade (ICP-Brasil). ASSINATURA DIGITAL: garante autenticidade e integridade — usa criptografia assimétrica.'
      }
    ]
  }

};
