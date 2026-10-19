/* ============================================================
   AULAS — Módulos de prioridade MÉDIA
   Preenchidos: INF-09, INF-13, INF-14, INF-16
   Próximo lote: INF-06, INF-15 (condicional)
   ============================================================ */

window.LESSONS_MEDIA = {

  /* ============================================================
     INF-09 — Redes de Computadores
  ============================================================ */
  'INF-09': {
    id: 'L-INF-09',
    moduloId: 'INF-09',
    objetivo: 'Compreender os conceitos fundamentais de redes de computadores: cliente, servidor e compartilhamento; classificação por abrangência (LAN, MAN, WAN); equipamentos (modem, roteador, switch, ponto de acesso); endereços IP (IPv4 e IPv6); DNS e DHCP; velocidade, largura de banda e latência; compartilhamento de arquivos e impressoras.',
    prerequisitos: ['INF-07'],

    introducao: 'Redes é um módulo de frequência média em concursos. Não exige profundidade técnica, mas cobra conceitos: diferença entre LAN, MAN e WAN; função de cada equipamento (modem, roteador, switch); o que é IP, DNS e DHCP; e o significado de largura de banda e latência. É um módulo muito interpretativo e que dialoga com Internet (INF-07) e Segurança (INF-11).',

    explicacaoSimples: 'Rede é um conjunto de computadores conectados que trocam informações. Dependendo do tamanho, chama-se LAN (rede local — uma casa, um escritório), MAN (rede metropolitana — uma cidade) ou WAN (rede ampla — países, continentes; a Internet é a maior WAN). Cada dispositivo tem um endereço (IP). O DNS traduz nomes em IPs. O DHCP distribui IPs automaticamente. O roteador conecta redes diferentes; o switch conecta dispositivos na mesma rede; o modem converte o sinal da operadora.',

    explicacaoTecnica: 'REDE: conjunto de dispositivos conectados que compartilham recursos. CLIENTE: solicita serviços (navegador, celular). SERVIDOR: fornece serviços (hospeda sites, arquivos, e-mail). CLASSIFICAÇÃO POR ABRANGÊNCIA: LAN (Local Area Network) — rede local de curta distância (casa, escritório, escola). MAN (Metropolitan Area Network) — abrange uma cidade. WAN (Wide Area Network) — abrange países e continentes (a Internet é a maior WAN). PAN (Personal Area Network) — rede pessoal (Bluetooth, por exemplo). EQUIPAMENTOS: MODEM — modula/demodula o sinal da operadora (converte sinal analógico em digital e vice-versa). ROTEADOR — conecta redes diferentes (sua rede doméstica à Internet), distribui IPs, faz NAT e firewall básico. SWITCH — conecta dispositivos DENTRO da mesma rede (LAN), encaminha dados por endereço MAC. HUB — equipamento antigo, replica dados para todos os dispositivos (obsoleto). PONTO DE ACESSO (Access Point) — fornece Wi-Fi, conecta dispositivos sem fio à rede cabeada. CABO: Ethernet (par trançado — CAT5e, CAT6), fibra óptica. WI-FI: padrão IEEE 802.11 (a/b/g/n/ac/ax). ENDEREÇO IP: identificação única de cada dispositivo na rede. IPv4 — formato 192.168.0.1 (32 bits, cerca de 4,3 bilhões de endereços — já esgotados). IPv6 — formato 2001:0db8:85a3::8a2e:0370:7334 (128 bits, praticamente ilimitado). IP público × IP privado. DNS (Domain Name System): traduz nomes de domínio (www.exemplo.com) em endereços IP (192.168.0.1). DHCP (Dynamic Host Configuration Protocol): distribui IPs automaticamente na rede. LARGURA DE BANDA: capacidade máxima de transmissão (Mbps — megabits por segundo). LATÊNCIA: tempo de resposta (atraso) — medida em milissegundos (ms). VELOCIDADE: combinação de banda + latência. PROTOCOLOS: TCP/IP (base da Internet). TCP — orientado a conexão, confiável. UDP — sem conexão, rápido (streaming, jogos). HTTP/HTTPS, FTP, SMTP, POP3, IMAP, DNS, DHCP. MODELO OSI: 7 camadas (física, enlace, rede, transporte, sessão, apresentação, aplicação). MODELO TCP/IP: 4 camadas (acesso à rede, Internet, transporte, aplicação). COMPARTILHAMENTO: arquivos, impressoras, pastas em rede.',

    exemplos: [
      'LAN: rede da sua casa — computador, celular, impressora conectados ao mesmo roteador.',
      'MAN: rede que interliga repartições públicas de uma cidade.',
      'WAN: Internet — conecta o mundo inteiro.',
      'PAN: fone Bluetooth conectado ao celular.',
      'Modem: converte o sinal da operadora (fibra, cabo, telefone) em sinal digital.',
      'Roteador: distribui Internet para todos os dispositivos da casa (Wi-Fi + cabo).',
      'Switch: conecta vários computadores via cabo no mesmo escritório.',
      'IP: 192.168.0.1 (IPv4) ou 2001:db8::1 (IPv6).',
      'DNS: converte "www.google.com" em "142.250.79.46".',
      'DHCP: quando você conecta no Wi-Fi, ele te entrega um IP automaticamente.',
      'Largura de banda: 100 Mbps. Latência: 20 ms.'
    ],

    comparacoes: [
      { termoA: 'LAN', termoB: 'WAN', diferenca: 'LAN (Local Area Network): rede LOCAL de curta distância — casa, escritório, escola. Alta velocidade, baixa latência, geralmente cabeada ou Wi-Fi. WAN (Wide Area Network): rede AMPLA — abrange países e continentes. A Internet é a maior WAN. Velocidade menor (por distância), latência maior, usa links das operadoras. Entre as duas: MAN (rede metropolitana — cidade).' },
      { termoA: 'Modem', termoB: 'Roteador', diferenca: 'MODEM: modula/demodula o sinal da operadora — converte o sinal da fibra/cabo/telefone em sinal digital interpretável pelo computador. Sem ele, não há conexão. ROTEADOR: conecta redes diferentes — distribui a Internet entre os dispositivos da casa (Wi-Fi + cabo), atribui IPs, faz NAT. É comum o aparelho das operadoras ser "modem + roteador" combinados (roteador wireless).' },
      { termoA: 'Switch', termoB: 'Roteador', diferenca: 'SWITCH: conecta dispositivos DENTRO da mesma rede (LAN) — encaminha dados via endereço MAC. Não distribui Internet entre redes diferentes. ROTEADOR: conecta REDES DIFERENTES (sua LAN à Internet), distribui IPs e faz o tráfego entre redes. Em casa: um roteador basta. Em escritório: um roteador + um switch para conectar muitos computadores.' },
      { termoA: 'IPv4', termoB: 'IPv6', diferenca: 'IPv4: 32 bits — formato 192.168.0.1 — cerca de 4,3 bilhões de endereços (esgotados em 2011). IPv6: 128 bits — formato 2001:db8::1 — praticamente ilimitado (3,4 × 10³⁸ endereços). O IPv6 foi criado para resolver o esgotamento do IPv4.' },
      { termoA: 'DNS', termoB: 'DHCP', diferenca: 'DNS (Domain Name System): traduz NOMES em IPs. Ex.: "www.google.com" → "142.250.79.46". É a "agenda telefônica" da Internet. DHCP (Dynamic Host Configuration Protocol): DISTRIBUI IPs automaticamente aos dispositivos que se conectam à rede. É o "balcão de cadastro" que te dá um crachá (IP) ao entrar.' },
      { termoA: 'Largura de banda', termoB: 'Latência', diferenca: 'LARGURA DE BANDA: capacidade MÁXIMA de transmissão — quanto dado cabe por segundo (Mbps). É a "largura da estrada". LATÊNCIA: TEMPO DE RESPOSTA — quanto tempo o dado leva para ir e voltar (ms). É o "tempo de viagem". Estrada larga (banda alta) com muito trânsito (latência alta) não resolve — precisa das duas coisas.' },
      { termoA: 'TCP', termoB: 'UDP', diferenca: 'TCP: orientado a CONEXÃO — confiável, garante entrega e ordem dos pacotes. Usado em navegação, e-mail, download. UDP: sem conexão — rápido, mas sem garantia de entrega. Usado em streaming, jogos on-line, VoIP. Se um pacote UDP se perde, ele não é reenviado — prioriza-se velocidade.' }
    ],

    aplicacaoEmConcurso: 'Redes aparece com frequência média. As bancas cobram: diferença LAN × MAN × WAN, função de modem / roteador / switch, IPv4 × IPv6, DNS × DHCP, largura de banda × latência, TCP × UDP. Também cobram compartilhamento de arquivos e impressoras em rede. Interpretação de conceitos.',

    pegadinhas: [
      'Achar que modem e roteador são a mesma coisa — são equipamentos diferentes (embora possam vir combinados).',
      'Achar que switch distribui Internet — quem distribui entre redes é o roteador.',
      'Confundir DNS (traduz nomes) com DHCP (distribui IPs).',
      'Achar que IPv6 é só uma versão nova do IPv4 — é um formato completamente diferente, com 128 bits.',
      'Confundir largura de banda (capacidade) com latência (tempo).',
      'Achar que Internet é uma WAN — a Internet é A maior WAN (mas WAN é o conceito, não o nome).',
      'Achar que LAN é sempre sem fio — pode ser cabeada, Wi-Fi ou mista.',
      'Achar que switch é mais moderno que roteador — são funções diferentes, um não substitui o outro.'
    ],

    errosComuns: [
      'Decorar siglas sem entender a função de cada equipamento.',
      'Confundir modem com roteador.',
      'Não saber diferenciar DNS de DHCP.',
      'Achar que "mais Mbps" sempre significa "mais rápido" — depende da latência.'
    ],

    resumo: [
      'LAN (local), MAN (metropolitana), WAN (ampla).',
      'Modem: converte sinal. Roteador: distribui e conecta redes. Switch: conecta dispositivos na mesma rede. Access Point: fornece Wi-Fi.',
      'IPv4: 32 bits (192.168.0.1). IPv6: 128 bits (2001:db8::1).',
      'DNS: nome → IP. DHCP: IP automático.',
      'Largura de banda: capacidade. Latência: tempo.',
      'TCP: confiável. UDP: rápido, sem garantia.',
      'Wi-Fi: IEEE 802.11 (a/b/g/n/ac/ax).',
      'Compartilhamento em rede: arquivos, pastas, impressoras.'
    ],

    modoProfessor: {
      explicarMaisSimples: 'Rede é o conjunto de computadores conectados. Se é pequena (casa, escritório), é LAN. Se é ampla (países), é WAN. Cada equipamento tem uma função: modem converte sinal; roteador distribui Internet; switch conecta dispositivos. Cada dispositivo tem um IP; o DNS traduz nomes em IPs; o DHCP entrega IPs automaticamente.',
      outroExemplo: 'Você chega em casa, liga o celular, conecta no Wi-Fi. O roteador entrega um IP via DHCP. Você abre o navegador e digita "www.google.com" — o DNS converte o nome em IP. O TCP/IP cuida da transmissão. A latência é o "tempo de resposta" — quanto menor, mais ágil a navegação.',
      compararConceitos: 'LAN × MAN × WAN. Modem × Roteador × Switch. IPv4 × IPv6. DNS × DHCP. Banda × Latência. TCP × UDP.',
      mostrarPegadinha: 'Cuidado: "quanto mais Mbps, mais rápida a navegação" — NÃO necessariamente. Velocidade percebida depende de banda E latência. Banda alta + latência alta = navegação travada. É como uma estrada larga com trânsito intenso.',
      comoApareceEmConcurso: 'Interpretação de conceitos e situações. Frequência média.',
      fazerPergunta: {
        pergunta: 'Qual a diferença entre DNS e DHCP?',
        resposta: 'DNS traduz NOMES em IPs ("www.google.com" → "142.250.79.46") — é a "agenda telefônica" da Internet. DHCP DISTRIBUI IPs automaticamente aos dispositivos que entram na rede — é o "balcão de cadastro". São funções diferentes: DNS resolve nomes; DHCP atribui endereços.'
      }
    }
  },

  /* ============================================================
     INF-13 — PDF, Digitalização e Documentos Digitais
  ============================================================ */
  'INF-13': {
    id: 'L-INF-13',
    moduloId: 'INF-13',
    objetivo: 'Compreender a diferença entre documentos editáveis e PDF; dominar criação, conversão, impressão e organização de PDFs; entender digitalização, OCR e reconhecimento de texto; diferenciar assinatura eletrônica de assinatura digital; compreender certificados digitais; adotar boas práticas de segurança no compartilhamento de documentos sensíveis.',
    prerequisitos: ['INF-03'],

    introducao: 'PDF é um tema de frequência média em concursos, mas aparece com regularidade em provas que cobram documentos eletrônicos e assinatura digital. As bancas cobram: diferença entre editável e PDF, o que é OCR, diferença entre assinatura eletrônica e assinatura digital, o que é certificado digital, e cuidados com documentos sensíveis.',

    explicacaoSimples: 'PDF é um formato "travado" — o layout fica fixo em qualquer dispositivo. Um arquivo do Word (.docx) pode abrir diferente em cada computador, mas o PDF preserva o visual. Digitalizar é transformar papel em imagem digital. OCR é o recurso que transforma essa imagem em texto editável. Assinatura eletrônica é qualquer forma eletrônica de assinar (até uma foto da assinatura); assinatura digital usa criptografia e certificado — é a versão mais segura.',

    explicacaoTecnica: 'PDF (Portable Document Format): formato criado pela Adobe que preserva o layout original independentemente de sistema operacional, fonte ou dispositivo. Vantagens: fidelidade visual, portabilidade, segurança. Recursos: senha de abertura, restrição de edição/impressão, assinatura digital, marca d\'água. Diferença: DOCX é editável; PDF é predominantemente para distribuição. PDF/A é a versão para arquivamento de longo prazo. DIGITALIZAÇÃO: transformar documento físico em imagem digital via scanner ou celular. OCR (Optical Character Recognition — Reconhecimento Óptico de Caracteres): converte a IMAGEM em TEXTO EDITÁVEL/PESQUISÁVEL — sem OCR, o PDF digitalizado é apenas imagem. ASSINATURA ELETRÔNICA: qualquer forma eletrônica de manifestar concordância — inclui desde um simples "clique aqui" ou "aceito" até assinatura digitalizada. ASSINATURA DIGITAL: tipo ESPECÍFICO de assinatura eletrônica que usa CRIPTOGRAFIA ASSIMÉTRICA + CERTIFICADO DIGITAL — garante autenticidade, integridade e não repúdio. Toda assinatura digital é eletrônica, mas nem toda eletrônica é digital. CERTIFICADO DIGITAL: documento eletrônico que vincula uma identidade a uma chave pública — emitido por Autoridade Certificadora (AC). ICP-Brasil é a infraestrutura oficial brasileira. Usado em: assinatura digital, HTTPS, e-mails seguros, autenticação em serviços oficiais (gov.br). CUIDADOS: compartilhar PDFs sensíveis com senha; verificar destinatário; não enviar documentos pessoais por canais inseguros.',

    exemplos: [
      'PDF: preserva layout em qualquer dispositivo.',
      'DOCX: editável no Word. PDF: majoritariamente para distribuição.',
      'PDF com senha: pede senha para abrir.',
      'PDF com restrição: permite abrir, mas não editar nem imprimir.',
      'OCR: transforma imagem digitalizada em texto pesquisável.',
      'Digitalização sem OCR: você vê a imagem, mas não consegue copiar o texto.',
      'Assinatura eletrônica simples: "Li e aceito" em um site.',
      'Assinatura digital: usa certificado ICP-Brasil e criptografia.',
      'Certificado digital: e-CPF, e-CNPJ — emitidos por AC credenciada.',
      'gov.br: usa autenticação com níveis (bronze, prata, ouro — ouro exige certificado ou biometria).'
    ],

    comparacoes: [
      { termoA: 'Documento editável (.docx)', termoB: 'PDF', diferenca: 'EDITÁVEL (.docx): pode ser modificado no Word ou programa compatível. O layout pode variar entre dispositivos/fontes. PDF: layout FIXO, preservado em qualquer dispositivo. Difícil de editar (embora existam ferramentas). Ideal para distribuição, impressão e documentos oficiais. Ao enviar um documento que precisa manter o visual original, use PDF.' },
      { termoA: 'Digitalização', termoB: 'OCR', diferenca: 'DIGITALIZAÇÃO: transformar documento físico em IMAGEM digital (via scanner ou celular). Resultado: imagem do documento — não é texto editável. OCR (Reconhecimento Óptico de Caracteres): converte a IMAGEM em TEXTO editável e pesquisável. Sem OCR, o PDF digitalizado é só imagem. Com OCR, você pode selecionar, copiar e buscar o texto.' },
      { termoA: 'Assinatura eletrônica', termoB: 'Assinatura digital', diferenca: 'ELETRÔNICA: qualquer forma eletrônica de manifestar concordância — inclui "clique aqui", aceite on-line, assinatura digitalizada. Não necessariamente usa criptografia. DIGITAL: tipo específico de assinatura eletrônica que usa CRIPTOGRAFIA ASSIMÉTRICA + CERTIFICADO DIGITAL. Garante autenticidade, integridade e não repúdio. Toda assinatura digital é eletrônica; nem toda eletrônica é digital.' },
      { termoA: 'PDF comum', termoB: 'PDF/A', diferenca: 'PDF comum: formato padrão — preserva layout. PDF/A: versão específica para ARQUIVAMENTO de longo prazo — inclui todas as informações necessárias para reproduzir o documento no futuro (fontes embutidas, sem dependência externa). Usado em arquivos públicos e documentos que precisam durar décadas.' },
      { termoA: 'e-CPF / e-CNPJ', termoB: 'Certificado de servidor', diferenca: 'e-CPF / e-CNPJ: certificado digital de PESSOA FÍSICA ou JURÍDICA — usado para assinar documentos, acessar sistemas, emitir notas. Certificado de servidor (SSL/TLS): usado por sites para HTTPS — garante que o site é quem diz ser. São certificados diferentes, com finalidades diferentes.' }
    ],

    aplicacaoEmConcurso: 'PDF aparece com frequência média. As bancas cobram: diferença entre editável e PDF, função do OCR, diferença entre assinatura eletrônica e digital, o que é certificado digital, cuidados com documentos sensíveis. Interpretação de conceitos e situações práticas.',

    pegadinhas: [
      'Achar que digitalização automaticamente cria texto editável — só com OCR.',
      'Achar que assinatura eletrônica e assinatura digital são sinônimos — digital é um TIPO de eletrônica.',
      'Achar que PDF não pode ser editado — pode, com ferramentas específicas (mas não é o padrão).',
      'Achar que renomear um .docx para .pdf converte o arquivo — não converte, apenas muda a extensão.',
      'Achar que certificado digital e senha comum são a mesma coisa — certificado usa criptografia.',
      'Achar que qualquer PDF é seguro — depende de senha, restrições e assinatura.'
    ],

    errosComuns: [
      'Confundir digitalização com OCR.',
      'Confundir assinatura eletrônica com digital.',
      'Achar que PDF é sempre imutável.',
      'Não conhecer o papel do certificado digital.'
    ],

    resumo: [
      'PDF: layout fixo, portátil, ideal para distribuição e impressão.',
      '.docx é editável; PDF preserva layout.',
      'Digitalização: papel → imagem. OCR: imagem → texto editável.',
      'Assinatura eletrônica: qualquer forma eletrônica (inclui clique, aceite).',
      'Assinatura digital: usa criptografia + certificado — mais segura.',
      'Certificado digital: e-CPF, e-CNPJ (ICP-Brasil).',
      'PDF/A: arquivamento de longo prazo.',
      'Cuidados: senha, restrições, assinatura digital para documentos sensíveis.'
    ],

    modoProfessor: {
      explicarMaisSimples: 'PDF é um "documento travado" — o layout fica igual em qualquer lugar. Digitalizar é fotografar o papel; OCR é transformar a foto em texto editável. Assinatura eletrônica é qualquer assinatura por meio eletrônico; assinatura digital usa criptografia e certificado — é a versão mais segura.',
      outroExemplo: 'Você escaneia um contrato em papel. O resultado é uma imagem — se alguém tentar copiar o texto, não consegue (é imagem). Se você aplicar OCR, o texto passa a ser selecionável e pesquisável. Se você assinar com certificado digital, qualquer alteração invalida a assinatura — garantia de integridade.',
      compararConceitos: 'Editável × PDF. Digitalização × OCR. Eletrônica × Digital. PDF × PDF/A. e-CPF × Certificado de servidor.',
      mostrarPegadinha: 'Cuidado: "digitalizei o documento, então o texto já é pesquisável" — FALSO. Sem OCR, a digitalização gera apenas IMAGEM. O OCR é o recurso que transforma imagem em texto editável.',
      comoApareceEmConcurso: 'Interpretação de conceitos e situações. Frequência média.',
      fazerPergunta: {
        pergunta: 'Qual a diferença entre assinatura eletrônica e assinatura digital?',
        resposta: 'ASSINATURA ELETRÔNICA: qualquer forma eletrônica de manifestar concordância — desde um "clique aqui" ou aceite on-line até uma assinatura digitalizada. NÃO exige criptografia. ASSINATURA DIGITAL: tipo específico de assinatura eletrônica que usa CRIPTOGRAFIA ASSIMÉTRICA + CERTIFICADO DIGITAL — garante autenticidade, integridade e não repúdio. Toda assinatura digital é eletrônica, mas nem toda eletrônica é digital.'
      }
    }
  },

  /* ============================================================
     INF-14 — Software, Aplicativos e Ferramentas de Produtividade
  ============================================================ */
  'INF-14': {
    id: 'L-INF-14',
    moduloId: 'INF-14',
    objetivo: 'Compreender a classificação de softwares (sistema, aplicativo, utilitário); processos de instalação, atualização, configuração e desinstalação; compatibilidade e formatos de arquivo; compactação e descompactação (ZIP, RAR, 7z); captura de tela, impressão e compartilhamento; ferramentas de colaboração; recursos de acessibilidade.',
    prerequisitos: ['INF-01'],

    introducao: 'Software e ferramentas de produtividade é um módulo de frequência média em concursos. As bancas cobram a classificação dos softwares, o que faz cada tipo de programa, formatos de compactação, atalhos de captura de tela, e a diferença entre instalar, atualizar e desinstalar. Também cobram conceitos de acessibilidade.',

    explicacaoSimples: 'Software é a parte lógica do computador. Existem três grandes grupos: SOFTWARE DE SISTEMA (faz o PC funcionar — Windows, Linux, drivers); SOFTWARE APLICATIVO (faz o que você quer — Word, Excel, navegador); UTILITÁRIO (ferramentas de manutenção — antivírus, compactador, limpeza de disco). Compactar é reduzir o tamanho de arquivos para economizar espaço e facilitar o envio por e-mail.',

    explicacaoTecnica: 'CLASSIFICAÇÃO DE SOFTWARE: SOFTWARE DE SISTEMA — gerencia o hardware e fornece base para os aplicativos (sistemas operacionais, drivers, firmware). SOFTWARE APLICATIVO — realiza tarefas do usuário (Word, Excel, navegador, jogos). SOFTWARE UTILITÁRIO — ferramentas de manutenção e suporte (antivírus, desfragmentador, compactadores, backup). Alguns autores tratam "utilitário" como subcategoria de aplicativo. INSTALAÇÃO: copiar arquivos e configurar o programa no sistema (.exe, .msi). UPDATE (ATUALIZAÇÃO): corrige bugs e vulnerabilidades — importante para segurança. UPGRADE: nova versão com novos recursos (pode ser paga). DESINSTALAÇÃO: remover o programa — sempre use o painel de controle/desinstalador, não apague a pasta. COMPATIBILIDADE: um programa pode exigir versão mínima do SO. COMPACTAÇÃO: reduz o tamanho de arquivos. Formatos: ZIP (padrão universal, nativo do Windows), RAR (WinRAR — proprietário), 7z (7-Zip — código aberto, alta compressão), TAR.GZ (Linux). Compactar NÃO criptografa por si só — alguns formatos permitem senha. CAPTURA DE TELA: Print Screen (tela toda), Alt+Print Screen (janela ativa), Win+Shift+S (recorte no Windows 10/11), Snipping Tool (ferramenta nativa). IMPRESSÃO: Ctrl+P — impressora física, PDF, XPS. Compartilhamento: rede, e-mail, nuvem. FERRAMENTAS DE COLABORAÇÃO: Microsoft Teams, Zoom, Google Meet, Slack. ACESSIBILIDADE: Lupa (Win + "+"), Narrador, Alto Contraste, Teclado Virtual, Legendas Ocultas, Reconhecimento de Fala.',

    exemplos: [
      'Software de sistema: Windows 11, Linux, drivers.',
      'Software aplicativo: Word, Excel, Chrome, WhatsApp.',
      'Software utilitário: antivírus, WinRAR, 7-Zip, CCleaner.',
      'Instalação: "setup.exe", "instalar.msi".',
      'Atualização: Windows Update — corrige falhas e vulnerabilidades.',
      'Desinstalação: Painel de Controle → Programas → Desinstalar.',
      'Compactação: .zip (padrão), .rar (WinRAR), .7z (7-Zip).',
      'Print Screen: captura toda a tela. Alt+Print Screen: janela ativa. Win+Shift+S: recorte.',
      'Ctrl+P: imprimir (ou salvar como PDF).',
      'Lupa: Win + "+". Narrador: Win + Ctrl + Enter.',
      'Colaboração: Teams, Zoom, Meet, Slack.'
    ],

    comparacoes: [
      { termoA: 'Software de sistema', termoB: 'Software aplicativo', diferenca: 'SISTEMA: gerencia hardware e serve de BASE para os demais — Windows, Linux, drivers, firmware. Sem ele, o computador não funciona. APLICATIVO: realiza tarefas do usuário — Word, Excel, navegador, jogos. Precisa do sistema operacional para rodar. O sistema é a "fundação"; o aplicativo é o "morador".' },
      { termoA: 'Atualização (update)', termoB: 'Upgrade', diferenca: 'ATUALIZAÇÃO (update): corrige bugs e VULNERABILIDADES da versão atual — geralmente gratuita e recomendada por segurança. UPGRADE: nova VERSÃO com recursos adicionais — pode ser gratuita ou paga (ex.: Windows 10 → Windows 11). Atualização mantém a versão; upgrade muda a versão.' },
      { termoA: 'Instalar', termoB: 'Desinstalar', diferenca: 'INSTALAR: copiar arquivos e registrar o programa no sistema — geralmente via setup.exe ou .msi. DESINSTALAR: remover o programa corretamente via Painel de Controle (ou desinstalador do próprio programa) — apaga arquivos e limpa registros. NUNCA apague a pasta do programa manualmente — deixa resíduos no sistema.' },
      { termoA: 'ZIP', termoB: 'RAR', diferenca: 'ZIP: formato universal, nativo do Windows e Mac — abre sem instalar nada. RAR: formato do WinRAR — geralmente compacta mais, mas exige o programa para extrair (ou ferramentas compatíveis). Ambos podem ter senha. 7z é outra alternativa (código aberto, alta compressão).' },
      { termoA: 'Print Screen', termoB: 'Alt+Print Screen', diferenca: 'PRINT SCREEN: captura a TELA TODA. ALT+PRINT SCREEN: captura apenas a JANELA ATIVA. WIN+SHIFT+S (Windows 10/11): abre a ferramenta de recorte — permite selecionar uma área específica. Todos copiam para a área de transferência; depois você cola (Ctrl+V) em um editor de imagem ou documento.' }
    ],

    aplicacaoEmConcurso: 'Software é tema de frequência média. As bancas cobram: classificação (sistema, aplicativo, utilitário), diferença instalar × atualizar × upgrade, formatos de compactação (ZIP, RAR, 7z), atalhos de captura de tela, ferramentas de acessibilidade do Windows. Interpretação de conceitos.',

    pegadinhas: [
      'Achar que antivírus é software aplicativo — é utilitário.',
      'Achar que atualização e upgrade são sinônimos — são conceitos diferentes.',
      'Achar que compactar é criptografar — compactação reduz tamanho; criptografia protege conteúdo.',
      'Achar que ZIP e RAR são sinônimos — são formatos diferentes.',
      'Achar que apagar a pasta do programa é desinstalar — não é.',
      'Achar que Print Screen captura só a janela ativa — só Alt+Print Screen faz isso.',
      'Achar que "software livre" é sempre gratuito — livre refere-se à liberdade, não ao preço.'
    ],

    errosComuns: [
      'Confundir as três categorias de software.',
      'Não saber a diferença entre atualização e upgrade.',
      'Não conhecer formatos de compactação.',
      'Não saber atalhos de acessibilidade.'
    ],

    resumo: [
      'Software: sistema (Windows, Linux), aplicativo (Word, Chrome), utilitário (antivírus, compactador).',
      'Instalar: setup.exe/.msi. Atualizar: corrigir bugs. Upgrade: nova versão. Desinstalar: via Painel de Controle.',
      'Compactação: ZIP (nativo), RAR (WinRAR), 7z (7-Zip), TAR.GZ (Linux).',
      'Print Screen: tela toda. Alt+Print Screen: janela ativa. Win+Shift+S: recorte.',
      'Ctrl+P: imprimir. PDF como saída é possível.',
      'Acessibilidade: Lupa (Win + "+"), Narrador, Alto Contraste.',
      'Colaboração: Teams, Zoom, Meet, Slack.'
    ],

    modoProfessor: {
      explicarMaisSimples: 'Software é a parte lógica do PC. Três tipos: SISTEMA (faz o PC funcionar — Windows), APLICATIVO (faz o que você quer — Word, Chrome), UTILITÁRIO (manutenção — antivírus, compactador). Atualização corrige falhas; upgrade muda a versão. Compactação reduz tamanho (ZIP, RAR, 7z).',
      outroExemplo: 'Você baixa uma pasta de fotos de 100 MB. Compacta em ZIP → vira 80 MB. Envia por e-mail (agora cabe no limite). Quem recebe descompacta e vê as fotos intactas. Se colocar senha no ZIP, fica protegido — mas isso é proteção, não compactação.',
      compararConceitos: 'Sistema × Aplicativo × Utilitário. Instalar × Atualizar × Upgrade × Desinstalar. ZIP × RAR × 7z. Print Screen × Alt+Print Screen × Win+Shift+S.',
      mostrarPegadinha: 'Cuidado: "atualização e upgrade são a mesma coisa" — FALSO. Atualização (update) corrige bugs e falhas de segurança da versão atual. Upgrade muda para uma versão superior (ex.: Windows 10 → 11). A banca cobra essa diferença.',
      comoApareceEmConcurso: 'Interpretação de conceitos. Frequência média.',
      fazerPergunta: {
        pergunta: 'Qual a diferença entre atualização e upgrade?',
        resposta: 'ATUALIZAÇÃO (update): corrige bugs e vulnerabilidades da versão atual — mantém a mesma versão, geralmente gratuita e recomendada. UPGRADE: muda para uma versão superior (ex.: Windows 10 → Windows 11) — pode trazer recursos novos e pode ser paga. Atualização = "consertar"; upgrade = "subir de nível".'
      }
    }
  },

  /* ============================================================
     INF-16 — Informática Aplicada ao Trabalho Administrativo
  ============================================================ */
  'INF-16': {
    id: 'L-INF-16',
    moduloId: 'INF-16',
    objetivo: 'Aplicar os conhecimentos de Informática em situações reais do trabalho administrativo: produção e formatação de documentos, planilhas para controle e cálculo, organização de arquivos e pastas, envio seguro de documentos, compartilhamento com permissões, escolha da ferramenta adequada e resolução de questões integradas que simulam o cotidiano de escritório.',
    prerequisitos: ['INF-02', 'INF-03', 'INF-04', 'INF-07', 'INF-11'],

    introducao: 'Informática Aplicada é o módulo-síntese — ele reúne tudo o que você aprendeu em Windows, Word, Excel, Internet e Segurança. É o tipo de conteúdo que as bancas modernas cobram com questões contextualizadas ("o servidor precisa enviar um relatório por e-mail... qual o procedimento correto?"). Aqui não basta saber o conceito — é preciso ESCOLHER a ferramenta adequada e entender o RESULTADO de cada ação.',

    explicacaoSimples: 'Pense no trabalho administrativo como uma rotina: você recebe uma demanda, escolhe a ferramenta certa, executa, compartilha com segurança e organiza. Cada tarefa exige uma ferramenta específica: fazer texto → Word; fazer conta/planilha → Excel; apresentar → PowerPoint; enviar → e-mail; armazenar/compartilhar → nuvem; proteger → backup + senha + MFA. A banca cobra justamente a escolha certa e o procedimento correto.',

    explicacaoTecnica: 'PRODUÇÃO DE DOCUMENTOS: usar estilos (Título 1, Título 2) para gerar sumário automático; cabeçalho/rodapé com numeração de página; exportar para PDF antes de enviar; salvar .docx para continuar editando. PLANILHAS: usar fórmulas com referências corretas (relativa × absoluta); funções SE e CONT.SE para cálculos condicionais; validar dados para evitar erros; tabelas dinâmicas para resumos; formatação condicional para destacar. ORGANIZAÇÃO DE ARQUIVOS: estrutura lógica (Ano → Mês → Assunto); nomenclatura padronizada ("relatorio_2025_01_v1.docx"); versionamento (_v1, _v2); evitar "Documento1.docx". ENVIO SEGURO: anexar PDF em vez de .docx editável; usar senha em documentos sensíveis; verificar destinatário antes de enviar; evitar "responder a todos" desnecessariamente; usar Cco em listas grandes. COMPARTILHAMENTO: preferir links restritos (só convidados) a links públicos; revisar permissões periodicamente; separar pastas de leitura × edição. ESCOLHA DA FERRAMENTA: texto longo → Word; tabela com cálculo → Excel; apresentação → PowerPoint; envio formal → e-mail/ofício; colaboração simultânea → Google Docs / Microsoft 365; armazenamento/backup → nuvem + HD externo. QUESTÕES INTEGRADAS: combinam interpretação + ferramenta + procedimento + segurança — exigem leitura atenta do cenário.',

    exemplos: [
      'Tarefa: relatório mensal com sumário. Word com estilos + sumário automático + exportar PDF.',
      'Tarefa: planilha de despesas com total por categoria. Excel com SOMA, CONT.SE e tabela dinâmica.',
      'Tarefa: apresentar projeto para a chefia. PowerPoint com tema consistente + exportar para PDF.',
      'Tarefa: enviar contrato assinado. Digitalizar + assinatura digital (ICP-Brasil) + PDF com senha + e-mail com Cco.',
      'Tarefa: compartilhar planilha com equipe. OneDrive/Google Drive com permissão "editor" para a equipe, "visualizador" para os demais.',
      'Tarefa: guardar cópia de segurança. Estratégia 3-2-1 (3 cópias, 2 mídias, 1 fora do local).',
      'Cenário de prova: "O servidor precisa enviar 200 e-mails personalizados" → use Cco para preservar a privacidade.',
      'Cenário: "documento precisa chegar idêntico ao original" → exporte para PDF antes de enviar.'
    ],

    comparacoes: [
      { termoA: 'Word para texto', termoB: 'Excel para planilha', diferenca: 'WORD: ideal para documentos textuais — cartas, relatórios, ofícios, contratos. Recursos: estilos, sumário, cabeçalho, revisão, exportação para PDF. EXCEL: ideal para cálculos, tabelas, controles, listas. Recursos: fórmulas, funções (SE, CONT.SE), tabelas dinâmicas, gráficos. Regra prática: se envolve MUITO TEXTO → Word; se envolve NÚMEROS e CÁLCULO → Excel.' },
      { termoA: 'Enviar .docx', termoB: 'Enviar .pdf', diferenca: '.DOCX: mantém editabilidade, mas o layout pode variar entre dispositivos — ideal quando o destinatário vai editar. .PDF: layout fixo em qualquer dispositivo — ideal para envio, impressão, contratos e documentos formais. Recomendação: envie .pdf para quem só vai ler/imprimir; envie .docx para quem precisa editar.' },
      { termoA: 'Compartilhar link público', termoB: 'Compartilhar link restrito', diferenca: 'PÚBLICO: qualquer pessoa com o link acessa — risco de vazamento. RESTRITO: só convidados acessam — mais seguro. No trabalho administrativo, PREFIRA sempre "restrito" para documentos sensíveis (dados pessoais, contratos, informações internas). Use público somente para materiais abertos (folders, avisos).' },
      { termoA: 'Backup', termoB: 'Compartilhamento', diferenca: 'BACKUP: cópia de segurança separada — protege contra perda. COMPARTILHAMENTO: dar acesso a outras pessoas — é conveniência, não proteção. Compartilhar na nuvem NÃO é backup — se você apagar localmente, apaga na nuvem também. Faça backup separado (HD externo, outra nuvem).' },
      { termoA: 'Ferramenta correta', termoB: 'Ferramenta favorita', diferenca: 'CORRETA: a que resolve a tarefa com eficiência e segurança — planilha para cálculo, PDF para envio formal, senha para dados sensíveis. FAVORITA: a que você gosta de usar — pode não ser a mais adequada. A banca cobra a ESCOLHA CORRETA — não o gosto pessoal.' }
    ],

    aplicacaoEmConcurso: 'Informática Aplicada é um módulo moderno, muito cobrado em provas contextualizadas. As bancas apresentam um CENÁRIO do trabalho administrativo e pedem a melhor solução — qual ferramenta usar, qual formato de arquivo enviar, como compartilhar com segurança, como organizar arquivos, como fazer backup. Exige integração com todos os módulos anteriores.',

    pegadinhas: [
      'Achar que enviar .docx é sempre melhor — depende do destinatário. Para leitura → PDF.',
      'Achar que compartilhar na nuvem é backup — não é.',
      'Achar que link público é sempre seguro — pode vazar.',
      'Usar "responder a todos" em listas grandes — expõe e-mails desnecessariamente.',
      'Achar que "salvar na nuvem" já é backup — sincronização não é backup.',
      'Não padronizar nomes de arquivos — dificulta busca e organização.',
      'Escolher ferramenta errada para a tarefa — usar Word para tabela com cálculo, por exemplo.',
      'Enviar documentos sensíveis sem senha e por canais inseguros.'
    ],

    errosComuns: [
      'Não integrar conhecimentos de módulos diferentes.',
      'Não considerar a segurança em cada decisão.',
      'Ignorar boas práticas de organização e nomenclatura.',
      'Não entender o papel do PDF no envio formal.'
    ],

    resumo: [
      'Cada tarefa exige a ferramenta certa: Word, Excel, PowerPoint, e-mail, nuvem.',
      'Envio formal → PDF. Edição → .docx.',
      'Compartilhamento: prefira restrito; revise permissões.',
      'Backup 3-2-1 — separado do compartilhamento.',
      'Cco em listas grandes — preserva privacidade.',
      'Organização: estrutura lógica + nomes padronizados + versionamento.',
      'Segurança em tudo: senha, MFA, backup, links restritos.',
      'Questões integradas cobram a MELHOR solução para o cenário.'
    ],

    modoProfessor: {
      explicarMaisSimples: 'Trabalho administrativo é rotina: você recebe uma tarefa, escolhe a ferramenta certa e executa com segurança. Texto → Word. Planilha → Excel. Apresentação → PowerPoint. Envio → e-mail. Guardar → nuvem + backup. Proteger → senha + MFA + links restritos. A banca cobra a ESCOLHA CORRETA em cada cenário.',
      outroExemplo: 'Você precisa enviar um contrato assinado para o cliente. Procedimento correto: (1) digitalizar o contrato; (2) assinar digitalmente (ICP-Brasil); (3) exportar para PDF; (4) proteger com senha; (5) enviar por e-mail, verificando o destinatário; (6) guardar cópia em backup (HD + nuvem). Esse é o raciocínio que a banca cobra.',
      compararConceitos: 'Word × Excel. .docx × .pdf. Público × Restrito. Backup × Compartilhamento. Ferramenta correta × favorita.',
      mostrarPegadinha: 'Cuidado: em questões contextualizadas, o "mais confortável" nem sempre é o "correto". Por exemplo: "o servidor enviou por WhatsApp porque é mais rápido" — pode ser inadequado para documentos oficiais. A banca cobra a MELHOR prática, não a mais prática.',
      comoApareceEmConcurso: 'Questões contextualizadas, modernas. Frequência média-alta.',
      fazerPergunta: {
        pergunta: 'O servidor precisa enviar um relatório em PDF para 50 pessoas de setores diferentes. Qual o procedimento correto?',
        resposta: 'PROCEDIMENTO CORRETO: (1) exportar o relatório para PDF (preserva layout); (2) se contiver dados sensíveis, proteger com senha; (3) enviar por e-mail; (4) colocar os destinatários em Cco (para não expor os e-mails uns dos outros); (5) usar assunto claro ("Relatório mensal — janeiro/2025"); (6) verificar se os destinatários corretos foram incluídos; (7) guardar cópia no backup. NUNCA usar "Para" ou "Cc" com listas grandes, pois expõe os endereços.'
      }
    }
  }

};
