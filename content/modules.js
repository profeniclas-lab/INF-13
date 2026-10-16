/* ============================================================
   MÓDULOS — Informática para Concursos
   Blocos:
     FUND = Fundamentos e Hardware
     SO   = Sistemas Operacionais
     ESCR = Ferramentas de Escritório
     REDE = Internet, Redes e Comunicação
     SEG  = Segurança e Dados
     APLI = Aplicação Prática
   Prioridades: muito_alta, alta, media, condicional
   ============================================================ */

window.MODULES = [

  /* ============ BLOCO FUND — FUNDAMENTOS E HARDWARE ============ */
  {
    id: 'INF-01',
    area: 'FUND',
    titulo: 'Fundamentos da Informática e Hardware',
    prioridade: 'alta',
    subtopicos: [
      'Conceitos de informática, dados, informação e processamento',
      'Hardware, software, firmware e peopleware',
      'Processador, memória RAM, armazenamento e placa-mãe',
      'HD, SSD, pendrive, cartões de memória e armazenamento óptico',
      'Periféricos de entrada, saída e entrada/saída',
      'Unidades de informação: bit, byte, KB, MB, GB e TB',
      'Memória volátil e não volátil'
    ]
  },
  {
    id: 'INF-14',
    area: 'FUND',
    titulo: 'Software, Aplicativos e Ferramentas de Produtividade',
    prioridade: 'media',
    subtopicos: [
      'Software de sistema, aplicativo e utilitário',
      'Instalação, atualização, configuração e desinstalação',
      'Compatibilidade, formatos de arquivos e aplicativos padrão',
      'Compactação e descompactação de arquivos',
      'Captura de tela, impressão e compartilhamento',
      'Ferramentas de colaboração e produtividade',
      'Recursos de acessibilidade e produtividade'
    ]
  },

  /* ============ BLOCO SO — SISTEMAS OPERACIONAIS ============ */
  {
    id: 'INF-02',
    area: 'SO',
    titulo: 'Sistemas Operacionais: Windows',
    prioridade: 'muito_alta',
    subtopicos: [
      'Funções de um sistema operacional',
      'Área de trabalho, menu Iniciar, barra de tarefas, janelas e configurações',
      'Explorador de Arquivos, unidades, diretórios e pastas',
      'Copiar, mover, renomear, excluir, restaurar e pesquisar arquivos',
      'Extensões, tipos de arquivo, atalhos e lixeira',
      'Contas de usuário, permissões e noções de gerenciamento',
      'Configurações, ferramentas administrativas e recursos básicos',
      'Atalhos de teclado e diferenças relevantes entre versões'
    ]
  },
  {
    id: 'INF-15',
    area: 'SO',
    titulo: 'Linux e Outros Ambientes',
    prioridade: 'condicional',
    subtopicos: [
      'Conceitos de software livre e código aberto',
      'Distribuições e ambientes gráficos Linux',
      'Arquivos, diretórios, permissões e usuários',
      'Noções de terminal e comandos básicos',
      'Diferenças conceituais entre Windows e Linux'
    ]
  },

  /* ============ BLOCO ESCR — FERRAMENTAS DE ESCRITÓRIO ============ */
  {
    id: 'INF-03',
    area: 'ESCR',
    titulo: 'Microsoft Word e Processadores de Texto',
    prioridade: 'muito_alta',
    subtopicos: [
      'Criação, edição, salvamento e impressão de documentos',
      'Formatação de fontes, parágrafos, alinhamentos, margens e espaçamento',
      'Listas, tabelas, imagens, cabeçalhos, rodapés e numeração de páginas',
      'Quebras de página e de seção',
      'Localizar, substituir, corretor ortográfico e revisão',
      'Estilos, sumário automático, comentários e controle de alterações',
      'Exportação para PDF: diferenças entre salvar e exportar',
      'Atalhos de teclado e reconhecimento de comandos'
    ]
  },
  {
    id: 'INF-04',
    area: 'ESCR',
    titulo: 'Microsoft Excel e Planilhas Eletrônicas',
    prioridade: 'muito_alta',
    subtopicos: [
      'Pastas de trabalho, planilhas, linhas, colunas, células e intervalos',
      'Tipos de dados, referências relativas, absolutas e mistas',
      'Fórmulas, operadores e ordem de cálculo',
      'Funções básicas: SOMA, MÉDIA, MÁXIMO, MÍNIMO, CONT.NÚM',
      'Funções condicionais e de contagem: SE e CONT.SE',
      'Ordenação, filtros, formatação condicional e validação de dados',
      'Gráficos, tabelas e tabelas dinâmicas',
      'Erros em fórmulas, leitura de resultados e atalhos',
      'Diferenças entre Excel e outros programas de planilha'
    ]
  },
  {
    id: 'INF-05',
    area: 'ESCR',
    titulo: 'PowerPoint e Apresentações',
    prioridade: 'alta',
    subtopicos: [
      'Slides, temas, layouts e modelos',
      'Inserção e formatação de textos, imagens, formas, tabelas e gráficos',
      'Transições entre slides e animações de objetos',
      'Modo de apresentação, notas do apresentador e impressão',
      'Exportação e formatos de arquivo',
      'Diferença entre transição e animação',
      'Recursos correspondentes do LibreOffice Impress'
    ]
  },
  {
    id: 'INF-06',
    area: 'ESCR',
    titulo: 'LibreOffice e Compatibilidade entre Suítes',
    prioridade: 'condicional',
    subtopicos: [
      'Writer, Calc e Impress',
      'Edição de textos, planilhas e apresentações',
      'Formatos ODT, ODS, ODP e compatibilidade com Microsoft Office',
      'Diferenças de interface, nomes de comandos e atalhos',
      'Importação, exportação e conversão de arquivos',
      'Comparação com Word, Excel e PowerPoint'
    ]
  },

  /* ============ BLOCO REDE — INTERNET, REDES E COMUNICAÇÃO ============ */
  {
    id: 'INF-07',
    area: 'REDE',
    titulo: 'Internet, Web e Navegadores',
    prioridade: 'muito_alta',
    subtopicos: [
      'Diferença entre internet, Web, intranet e extranet',
      'Navegadores: Edge, Chrome, Firefox e outros previstos',
      'Abas, favoritos, histórico, downloads, cache e cookies',
      'Endereços URL, links, navegação privada e configurações',
      'Mecanismos de busca e técnicas básicas de pesquisa',
      'HTTPS, certificados e indicadores de conexão segura',
      'Upload, download, formulários e navegação em sites',
      'Sincronização e gerenciamento de perfis'
    ]
  },
  {
    id: 'INF-08',
    area: 'REDE',
    titulo: 'Correio Eletrônico e Comunicação Digital',
    prioridade: 'alta',
    subtopicos: [
      'Remetente, destinatário, assunto, corpo e anexos',
      'Campos Para, Cc e Cco',
      'Responder, responder a todos, encaminhar, arquivar e excluir',
      'Spam, phishing e cuidados com anexos e links',
      'Webmail, Outlook e Thunderbird',
      'Protocolos SMTP, POP3 e IMAP',
      'Agenda, contatos, reuniões e videoconferências'
    ]
  },
  {
    id: 'INF-09',
    area: 'REDE',
    titulo: 'Redes de Computadores',
    prioridade: 'media',
    subtopicos: [
      'Conceitos de rede, cliente, servidor e compartilhamento',
      'LAN, MAN, WAN e redes sem fio',
      'Wi-Fi, Ethernet, modem, roteador, switch e ponto de acesso',
      'Endereços IP e noções de IPv4 e IPv6',
      'DNS, DHCP e conceitos básicos de protocolos',
      'Velocidade, largura de banda, latência e conectividade',
      'Modelo TCP/IP e modelo OSI (nível introdutório)',
      'Compartilhamento de arquivos, impressoras e recursos de rede'
    ]
  },
  {
    id: 'INF-10',
    area: 'REDE',
    titulo: 'Computação em Nuvem e Colaboração',
    prioridade: 'alta',
    subtopicos: [
      'Conceito de computação em nuvem e armazenamento remoto',
      'Serviços de armazenamento e sincronização de arquivos',
      'Compartilhamento, permissões e colaboração simultânea',
      'Arquivo local, sincronizado e disponível somente on-line',
      'Noções de SaaS, PaaS e IaaS',
      'Microsoft 365, OneDrive, Google Drive e ferramentas similares',
      'Cuidados com links compartilhados e acesso a documentos'
    ]
  },

  /* ============ BLOCO SEG — SEGURANÇA E DADOS ============ */
  {
    id: 'INF-11',
    area: 'SEG',
    titulo: 'Segurança da Informação',
    prioridade: 'muito_alta',
    subtopicos: [
      'Confidencialidade, integridade, disponibilidade e autenticidade',
      'Ameaças, vulnerabilidades, riscos e medidas de proteção',
      'Vírus, worms, cavalos de Troia, ransomware e spyware',
      'Antivírus, firewall, atualizações e proteção de dispositivos',
      'Phishing, engenharia social e mensagens fraudulentas',
      'Senhas fortes, gerenciadores de senhas e autenticação multifator',
      'Criptografia, certificados digitais e assinatura digital',
      'Privacidade, controle de acesso e boas práticas no trabalho'
    ]
  },
  {
    id: 'INF-12',
    area: 'SEG',
    titulo: 'Backup, Recuperação e Gerenciamento de Dados',
    prioridade: 'alta',
    subtopicos: [
      'Finalidade e importância do backup',
      'Cópias completas, incrementais e diferenciais',
      'Mídias locais, armazenamento externo e nuvem',
      'Restauração e recuperação de arquivos',
      'Sincronização versus backup',
      'Organização, nomenclatura, extensões e versionamento de arquivos',
      'Lixeira, exclusão e cuidados com perda de dados'
    ]
  },
  {
    id: 'INF-13',
    area: 'SEG',
    titulo: 'PDF, Digitalização e Documentos Digitais',
    prioridade: 'media',
    subtopicos: [
      'Diferenças entre documentos editáveis e PDF',
      'Criação, conversão, impressão e organização de PDFs',
      'Digitalização, OCR e reconhecimento de texto',
      'Assinatura eletrônica e assinatura digital',
      'Noções de certificados digitais e autenticação em serviços oficiais',
      'Cuidados com documentos sensíveis e compartilhamento'
    ]
  },

  /* ============ BLOCO APLI — APLICAÇÃO PRÁTICA ============ */
  {
    id: 'INF-16',
    area: 'APLI',
    titulo: 'Informática Aplicada ao Trabalho Administrativo',
    prioridade: 'media',
    subtopicos: [
      'Produção e formatação de documentos',
      'Planilhas para controles, cadastros e cálculos',
      'Organização de arquivos e pastas de um setor',
      'Envio seguro de documentos por e-mail',
      'Compartilhamento de arquivos e permissões',
      'Escolha da ferramenta adequada para cada tarefa',
      'Questões integradas que simulam situações comuns de escritório'
    ]
  }

];
