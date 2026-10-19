/* ============================================================
   DIAGNÓSTICOS — Módulos de prioridade MÉDIA
   Preenchidos: INF-09, INF-13, INF-14, INF-16
   Próximo lote: INF-06, INF-15 (condicional)
   ============================================================ */

window.DIAGNOSTICS_MEDIA = {

  /* ============================================================
     INF-09 — Redes de Computadores
  ============================================================ */
  'INF-09': {
    id: 'D-INF-09',
    moduloId: 'INF-09',
    itens: [
      {
        id: 'D-INF-09-01',
        tipo: 'multipla_escolha',
        subtopico: 'LAN x MAN x WAN',
        pergunta: 'Uma rede que interliga computadores de uma mesma casa ou escritório é classificada como:',
        alternativas: [
          { id: 'A', texto: 'LAN (Local Area Network).' },
          { id: 'B', texto: 'MAN (Metropolitan Area Network).' },
          { id: 'C', texto: 'WAN (Wide Area Network).' },
          { id: 'D', texto: 'PAN (Personal Area Network).' }
        ],
        gabarito: 'A',
        explicacao: 'LAN: rede LOCAL de curta distância — casa, escritório, escola. MAN: rede metropolitana — abrange uma cidade. WAN: rede ampla — países e continentes (a Internet é a maior WAN). PAN: rede pessoal — Bluetooth, por exemplo. A banca cobra a classificação pela abrangência.'
      },
      {
        id: 'D-INF-09-02',
        tipo: 'multipla_escolha',
        subtopico: 'Modem x roteador x switch',
        pergunta: 'Em uma rede doméstica, qual equipamento é responsável por DISTRIBUIR a conexão de Internet entre os dispositivos (Wi-Fi e cabo)?',
        alternativas: [
          { id: 'A', texto: 'Modem.' },
          { id: 'B', texto: 'Roteador.' },
          { id: 'C', texto: 'Switch.' },
          { id: 'D', texto: 'Ponto de acesso (Access Point).' }
        ],
        gabarito: 'B',
        explicacao: 'ROTEADOR: conecta redes diferentes — distribui a Internet entre os dispositivos (Wi-Fi + cabo), atribui IPs, faz NAT. MODEM: converte o sinal da operadora em sinal digital — sozinho não distribui. SWITCH: conecta dispositivos dentro da MESMA rede (LAN), não distribui Internet entre redes. ACCESS POINT: apenas fornece Wi-Fi, sem distribuir entre redes. A banca confunde modem × roteador — atenção!'
      },
      {
        id: 'D-INF-09-03',
        tipo: 'verdadeiro_falso',
        subtopico: 'DNS x DHCP',
        pergunta: 'DNS é o protocolo responsável por distribuir endereços IP automaticamente aos dispositivos que entram na rede.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. Quem DISTRIBUI IPs automaticamente é o DHCP (Dynamic Host Configuration Protocol). O DNS (Domain Name System) TRADUZ nomes em IPs — "www.google.com" → "142.250.79.46". DNS é a "agenda telefônica"; DHCP é o "balcão de cadastro". A banca adora trocar as funções dos dois.'
      },
      {
        id: 'D-INF-09-04',
        tipo: 'autoavaliacao',
        subtopico: 'Regras gerais',
        pergunta: 'Você domina: LAN × MAN × WAN, modem × roteador × switch, IPv4 × IPv6, DNS × DHCP, largura de banda × latência, TCP × UDP?',
        resposta: 'LAN (local), MAN (metropolitana), WAN (ampla). MODEM: converte sinal. ROTEADOR: distribui e conecta redes. SWITCH: conecta dispositivos na mesma rede. IPv4 (32 bits, 192.168.0.1) × IPv6 (128 bits, 2001:db8::1). DNS: nome → IP. DHCP: IP automático. LARGURA DE BANDA: capacidade (Mbps). LATÊNCIA: tempo (ms). TCP: confiável, orientado a conexão. UDP: rápido, sem garantia.'
      }
    ]
  },

  /* ============================================================
     INF-13 — PDF, Digitalização e Documentos Digitais
  ============================================================ */
  'INF-13': {
    id: 'D-INF-13',
    moduloId: 'INF-13',
    itens: [
      {
        id: 'D-INF-13-01',
        tipo: 'multipla_escolha',
        subtopico: 'Digitalização x OCR',
        pergunta: 'Após digitalizar um documento em papel e salvá-lo em PDF, o usuário tenta selecionar e copiar o texto, mas não consegue — só consegue ver a imagem. O que faltou aplicar?',
        alternativas: [
          { id: 'A', texto: 'Crase.' },
          { id: 'B', texto: 'OCR (Reconhecimento Óptico de Caracteres).' },
          { id: 'C', texto: 'Backup.' },
          { id: 'D', texto: 'Criptografia.' }
        ],
        gabarito: 'B',
        explicacao: 'OCR (Optical Character Recognition): converte a IMAGEM digitalizada em TEXTO editável e pesquisável. Sem OCR, o PDF digitalizado é apenas uma imagem — você vê, mas não seleciona nem copia. A DIGITALIZAÇÃO em si apenas gera a imagem; o OCR é a etapa seguinte que reconhece os caracteres.'
      },
      {
        id: 'D-INF-13-02',
        tipo: 'multipla_escolha',
        subtopico: 'Assinatura eletrônica x digital',
        pergunta: 'Sobre a diferença entre assinatura eletrônica e assinatura digital, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'São sinônimos — ambas usam criptografia.' },
          { id: 'B', texto: 'Assinatura digital é um TIPO de assinatura eletrônica que usa criptografia assimétrica e certificado digital; assinatura eletrônica é qualquer forma eletrônica de manifestar concordância.' },
          { id: 'C', texto: 'Assinatura eletrônica é mais segura que a digital.' },
          { id: 'D', texto: 'Assinatura eletrônica exige certificado ICP-Brasil.' }
        ],
        gabarito: 'B',
        explicacao: 'ASSINATURA ELETRÔNICA: qualquer forma eletrônica de manifestar concordância — inclui "clique aqui", aceite on-line, assinatura digitalizada. NÃO exige criptografia. ASSINATURA DIGITAL: tipo específico de assinatura eletrônica que usa CRIPTOGRAFIA ASSIMÉTRICA + CERTIFICADO DIGITAL. Garante autenticidade, integridade e não repúdio. Toda digital é eletrônica, mas nem toda eletrônica é digital.'
      },
      {
        id: 'D-INF-13-03',
        tipo: 'verdadeiro_falso',
        subtopico: 'PDF x editável',
        pergunta: 'PDF é um formato editável como o .docx: pode ser modificado livremente no Word sem perder o layout original.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. O PDF foi criado justamente para TRAVAR o layout — o documento aparece igual em qualquer dispositivo. Editá-lo exige ferramentas específicas e costuma alterar formatação. O .docx é o formato EDITÁVEL por natureza. Ao enviar um documento formal (contrato, ofício), use PDF para preservar o layout.'
      },
      {
        id: 'D-INF-13-04',
        tipo: 'autoavaliacao',
        subtopico: 'Regras gerais',
        pergunta: 'Você domina: diferença editável × PDF, digitalização × OCR, assinatura eletrônica × digital, certificado digital, PDF/A, cuidados com documentos sensíveis?',
        resposta: 'EDITÁVEL (.docx) × PDF: .docx é modificável; PDF preserva o layout. DIGITALIZAÇÃO: papel → imagem. OCR: imagem → texto editável. ASSINATURA ELETRÔNICA: qualquer forma eletrônica. ASSINATURA DIGITAL: usa criptografia + certificado — mais segura. CERTIFICADO DIGITAL: e-CPF, e-CNPJ (ICP-Brasil). PDF/A: arquivamento de longo prazo. CUIDADOS: senha em PDFs sensíveis, verificar destinatário, não enviar por canais inseguros, usar assinatura digital para documentos formais.'
      }
    ]
  },

  /* ============================================================
     INF-14 — Software, Aplicativos e Ferramentas
  ============================================================ */
  'INF-14': {
    id: 'D-INF-14',
    moduloId: 'INF-14',
    itens: [
      {
        id: 'D-INF-14-01',
        tipo: 'multipla_escolha',
        subtopico: 'Classificação de software',
        pergunta: 'O Windows 11, o antivírus e o Word são, respectivamente, exemplos de:',
        alternativas: [
          { id: 'A', texto: 'Software aplicativo, software utilitário e software de sistema.' },
          { id: 'B', texto: 'Software de sistema, software utilitário e software aplicativo.' },
          { id: 'C', texto: 'Software utilitário, software de sistema e software aplicativo.' },
          { id: 'D', texto: 'Software aplicativo, software de sistema e software utilitário.' }
        ],
        gabarito: 'B',
        explicacao: 'WINDOWS: SOFTWARE DE SISTEMA — gerencia hardware e serve de base para os demais. ANTIVÍRUS: SOFTWARE UTILITÁRIO — ferramenta de manutenção e proteção. WORD: SOFTWARE APLICATIVO — realiza tarefas do usuário. A banca costuma classificar errado — cuidado com a ordem.'
      },
      {
        id: 'D-INF-14-02',
        tipo: 'multipla_escolha',
        subtopico: 'Atualização x upgrade',
        pergunta: 'Sobre a diferença entre atualização (update) e upgrade, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'São sinônimos.' },
          { id: 'B', texto: 'Atualização corrige bugs e vulnerabilidades da versão atual; upgrade muda para uma versão superior, geralmente com novos recursos.' },
          { id: 'C', texto: 'Upgrade corrige bugs; atualização adiciona recursos.' },
          { id: 'D', texto: 'Ambos se referem apenas a hardware.' }
        ],
        gabarito: 'B',
        explicacao: 'ATUALIZAÇÃO (update): corrige falhas e vulnerabilidades da versão atual — mantém a mesma versão, geralmente gratuita e recomendada por segurança. UPGRADE: muda para uma VERSÃO SUPERIOR — pode trazer recursos novos e pode ser paga. Ex.: Windows 10 → 11 é upgrade. Correção de segurança do Windows 11 é atualização.'
      },
      {
        id: 'D-INF-14-03',
        tipo: 'verdadeiro_falso',
        subtopico: 'Compactação',
        pergunta: 'Os formatos ZIP, RAR e 7z são todos utilizados para compactar arquivos, reduzindo seu tamanho para armazenamento ou envio.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. ZIP: formato universal, nativo do Windows e Mac. RAR: formato do WinRAR — geralmente compacta mais, mas exige programa específico. 7z: formato do 7-Zip — código aberto, alta compressão. Todos reduzem o tamanho. Compactar NÃO criptografa — proteção extra exige senha (que alguns formatos permitem).'
      },
      {
        id: 'D-INF-14-04',
        tipo: 'autoavaliacao',
        subtopico: 'Regras gerais',
        pergunta: 'Você domina: software de sistema × aplicativo × utilitário, instalar × atualizar × upgrade × desinstalar, formatos ZIP/RAR/7z, atalhos de captura (Print Screen, Alt+Print Screen, Win+Shift+S)?',
        resposta: 'SISTEMA: gerencia hardware (Windows, Linux). APLICATIVO: tarefas do usuário (Word, Chrome). UTILITÁRIO: manutenção (antivírus, compactador). INSTALAR: setup.exe/.msi. ATUALIZAR: corrige bugs. UPGRADE: nova versão. DESINSTALAR: via Painel de Controle (não apagar pasta). COMPACTAÇÃO: .zip (nativo), .rar (WinRAR), .7z (7-Zip). CAPTURA: Print Screen (tela toda), Alt+Print Screen (janela ativa), Win+Shift+S (recorte).'
      }
    ]
  },

  /* ============================================================
     INF-16 — Informática Aplicada ao Trabalho Administrativo
  ============================================================ */
  'INF-16': {
    id: 'D-INF-16',
    moduloId: 'INF-16',
    itens: [
      {
        id: 'D-INF-16-01',
        tipo: 'multipla_escolha',
        subtopico: 'Escolha da ferramenta',
        pergunta: 'Um servidor precisa criar uma planilha de controle de despesas mensais, com cálculo de totais e subtotais por categoria. Qual ferramenta é a MAIS ADEQUADA?',
        alternativas: [
          { id: 'A', texto: 'Word.' },
          { id: 'B', texto: 'Excel.' },
          { id: 'C', texto: 'PowerPoint.' },
          { id: 'D', texto: 'Bloco de Notas.' }
        ],
        gabarito: 'B',
        explicacao: 'EXCEL: ideal para cálculos, tabelas, controles e listas. Funções como SOMA, CONT.SE e tabelas dinâmicas resolvem exatamente esse cenário. WORD: para textos. POWERPOINT: para apresentações. BLOCO DE NOTAS: apenas texto puro. Regra: se envolve NÚMEROS e CÁLCULO → Excel.'
      },
      {
        id: 'D-INF-16-02',
        tipo: 'multipla_escolha',
        subtopico: 'Envio seguro',
        pergunta: 'Um servidor precisa enviar um contrato em PDF para 50 fornecedores, preservando a privacidade dos e-mails. Qual campo deve usar?',
        alternativas: [
          { id: 'A', texto: 'Para (destinatário principal), listando todos os e-mails.' },
          { id: 'B', texto: 'Cc (com cópia), listando todos os e-mails.' },
          { id: 'C', texto: 'Cco (com cópia oculta), listando todos os e-mails.' },
          { id: 'D', texto: 'Assunto, com os e-mails no corpo da mensagem.' }
        ],
        gabarito: 'C',
        explicacao: 'CCO (Com Cópia Oculta): os destinatários NÃO se veem entre si. Ideal para listas grandes — preserva a privacidade dos endereços. "Para" e "Cc" expõem os e-mails de todos. Boas práticas: PDF em vez de .docx (preserva layout), Cco para listas, assunto claro, verificar destinatários.'
      },
      {
        id: 'D-INF-16-03',
        tipo: 'verdadeiro_falso',
        subtopico: 'Backup x compartilhamento',
        pergunta: 'Compartilhar uma planilha na nuvem com a equipe já é suficiente como backup — não é necessário manter cópia de segurança separada.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. COMPARTILHAMENTO na nuvem é conveniência — não é backup. Se um membro da equipe apagar o arquivo (ou se um ransomware criptografar), a nuvem também é afetada. BACKUP é uma cópia SEPARADA em outra mídia (HD externo, outra nuvem). Estratégia 3-2-1: 3 cópias, 2 mídias, 1 fora do local. A banca explora essa confusão.'
      },
      {
        id: 'D-INF-16-04',
        tipo: 'autoavaliacao',
        subtopico: 'Regras gerais',
        pergunta: 'Você consegue aplicar, em cenários reais de trabalho administrativo: escolha da ferramenta certa, envio seguro de documentos (PDF, Cco, senha), compartilhamento com permissões, organização de arquivos, backup 3-2-1?',
        resposta: 'FERRAMENTA: texto → Word; cálculo → Excel; apresentação → PowerPoint; colaboração → nuvem. ENVIO: PDF para leitura (preserva layout); .docx para edição; Cco para listas grandes; senha em documentos sensíveis; verificar destinatários. COMPARTILHAMENTO: prefira link RESTRITO; revise permissões (visualizador, comentarista, editor). ORGANIZAÇÃO: estrutura lógica (ano/mês/assunto), nomenclatura padronizada, versionamento. BACKUP: 3-2-1 — separado do compartilhamento.'
      }
    ]
  }

};
