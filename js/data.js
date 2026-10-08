/* ========================================================
   DADOS DO ORGANOGRAMA — Agibank
   Cada área tem: nome + descricao (array de parágrafos).
   Para editar um texto, basta mudar as frases dentro das aspas.
   Para quebrar em um novo parágrafo, adicione uma nova linha
   dentro do array, separada por vírgula.
   ======================================================== */
var ORG_DATA = [
  {
    nome: "Clientes",
    areas: [
      {
        nome: "BU Atendimento",
        descricao: [
          "Somos o time que cuida para que a experiência comercial no Agi, seja no atendimento digital, nas ferramentas internas ou nos caixas eletrônicos, aconteça de forma fluida, prática e eficiente. Nosso foco está em simplificar processos, automatizar o que for possível e garantir que cada ponto de contato com o cliente gere valor.",
          "Atuamos nos bastidores com tecnologia, dados e escuta ativa para que quem vende, atende ou usa nossos canais digitais tenha o suporte certo, na hora certa. Desenvolvemos jornadas simples e inteligentes, otimizamos ferramentas como o Salesforce, desenhamos o fluxo dos nossos caixas eletrônicos e cuidamos para que nossos canais, como WhatsApp e URA, ofereçam um atendimento direto ao ponto."
        ]
      },
      {
        nome: "BU Folha de Pagamento",
        descricao: [
          "Nossa gerência atua nos bastidores de dois pilares essenciais para o funcionamento do Agi: as contas correntes e os pagamentos de benefícios INSS. Trabalhamos para garantir que o cliente tenha uma jornada simples, segura e eficiente para usar no dia a dia, ao mesmo tempo em que cuidamos da atualização cadastral e do cumprimento de regras regulatórias.",
          "Também somos o elo entre o Agi e órgãos como o INSS e BACEN, assegurando que milhões de brasileiros recebam seus benefícios com pontualidade e segurança. Nosso compromisso é melhorar processos, conectar sistemas e manter a operação sempre em conformidade, com foco em eficiência, integração e valor para o cliente."
        ]
      },
      {
        nome: "BU Membership",
        descricao: [
          "A Gerência de CRM e Marketing é responsável por fortalecer a marca do Agi, gerar novos negócios por meio de parcerias e construir um relacionamento próximo, inteligente e personalizado com nossos clientes. Atuamos de forma integrada, combinando criatividade, dados e tecnologia para ampliar nossa presença no mercado, conquistar novos clientes e garantir que cada pessoa tenha uma experiência relevante e positiva com o banco."
        ]
      },
      {
        nome: "BU Seguros",
        descricao: [
          "Somos responsáveis por desenvolver, evoluir e gerir o portfólio de seguros do Agi, garantindo que os produtos atendam às necessidades dos clientes e contribuam para os resultados do negócio. Nossa atuação abrange todo o ciclo de vida dos seguros, incluindo definição de estratégias, gestão de performance, acompanhamento de indicadores, relacionamento com seguradoras parceiras e garantia da conformidade regulatória.",
          "Nosso objetivo é oferecer soluções de proteção cada vez mais acessíveis, relevantes e alinhadas às necessidades dos clientes, apoiando o crescimento do negócio de forma segura e responsável."
        ]
      },
      {
        nome: "Rede e Expansão",
        descricao: [
          "Somos o coração da nossa presença comercial. Conectamos o Agi aos clientes, garantindo uma experiência próxima, humana e transformadora nas lojas. Ao mesmo tempo, estruturamos toda a base operacional e estratégica para que essa jornada aconteça com consistência, desde a abertura e manutenção dos pontos físicos até a criação de modelos de vendas, treinamentos e parcerias que ampliam nosso alcance.",
          "Nossa missão é simples e ambiciosa: fortalecer a rede, expandir com inteligência e garantir eficiência em cada atendimento. Trabalhamos para que cada cliente encontre no Agi soluções práticas e digitais, em espaços bem cuidados e preparados, com equipes engajadas e capacitadas para gerar impacto real."
        ]
      }
    ]
  },
  {
    nome: "Controladoria e Riscos",
    areas: [
      {
        nome: "Compras",
        descricao: [
          "A Gerência de Compras é responsável por garantir que todos os processos de aquisição e pagamentos no Agi sejam feitos com qualidade, eficiência e inteligência, conectando diferentes áreas do banco e assegurando que as operações fluam sem interrupções. Nossa atuação vai desde a negociação estratégica com fornecedores até o controle detalhado de contas e compromissos financeiros, sempre com foco em otimizar recursos, gerar valor e sustentar o crescimento da companhia.",
          "Mais do que conduzir compras e pagamentos, trabalhamos para transformar rotinas em processos ágeis, transparentes e confiáveis, fortalecendo a governança e construindo parcerias duradouras. Combinamos análise de dados, visão estratégica e atenção aos detalhes para garantir que cada aquisição esteja alinhada às prioridades do negócio e que cada obrigação financeira seja cumprida com precisão e pontualidade."
        ]
      },
      {
        nome: "Controladoria",
        descricao: [
          "A Gerência de Contabilidade garante a integridade, a transparência e a eficiência dos registros e controles financeiros do banco. Atuamos desde o registro contábil e o controle patrimonial até o desenvolvimento de soluções tecnológicas que automatizam processos e apoiam a gestão financeira do Agi. Nosso trabalho garante que todas as informações estejam corretas, atualizadas e em conformidade com as normas, apoiando a tomada de decisão, o crescimento sustentável e o atendimento às exigências regulatórias."
        ]
      },
      {
        nome: "FP&A e Pricing",
        descricao: [
          "A área de FP&A é responsável por realizar o planejamento financeiro integrado, consolidar resultados e prover análises que apoiem a tomada de decisão estratégica da companhia. Seu propósito é garantir previsibilidade, transparência e clareza sobre a performance financeira, conectando os objetivos de curto e longo prazo com a execução orçamentária e operacional."
        ]
      },
      {
        nome: "Risco Operacional e Controles Internos",
        descricao: [
          "A Gerência de Risco Operacional e Controles Internos atua para garantir a segurança, a integridade e a conformidade das operações do Agi. Trabalhamos de forma integrada com as áreas de negócio, tecnologia e jurídico, identificando riscos, protegendo dados e assegurando que o banco funcione dentro das regras e com responsabilidade. Nosso papel é prevenir problemas antes que aconteçam, fortalecer os processos internos e manter a confiança de clientes, parceiros e reguladores."
        ]
      },
      {
        nome: "Riscos Financeiro e de Capital",
        descricao: [
          "Nossa tarefa é garantir que o crescimento do Agi aconteça com segurança, responsabilidade e visão de futuro. Atuamos como guardiões da solidez da empresa, combinando conhecimento técnico, tecnologia e análises rigorosas para antecipar cenários e proteger nossos resultados. Aqui, traduzimos riscos complexos em decisões inteligentes e estratégicas, sempre em conformidade com as exigências regulatórias."
        ]
      },
      {
        nome: "Tributário",
        descricao: [
          "Somos a área que assegura a conformidade fiscal das empresas do grupo Agi, garantindo que todas as obrigações tributárias sejam cumpridas de forma precisa, segura e dentro dos prazos legais. Atuamos na apuração, registro, declaração e pagamento de tributos, além de manter nossos processos alinhados às constantes atualizações da legislação.",
          "Também somos responsáveis pela organização e análise de documentos fiscais, contribuindo para a transparência das informações e apoiando eventuais auditorias e fiscalizações. Nosso foco é reduzir riscos, aumentar a eficiência e fortalecer a integridade das operações do grupo."
        ]
      }
    ]
  },
  {
    nome: "Crédito",
    areas: [
      {
        nome: "Estratégia de Crédito",
        descricao: [
          "Na Gerência de Estratégia de Crédito, unimos dados, inteligência e sensibilidade para tomar decisões que impactam diretamente a vida financeira dos nossos clientes, com responsabilidade, personalização e foco no crescimento sustentável do Agi. Atuamos em toda a jornada do crédito: da oferta inicial à cobrança, cuidando para que cada decisão seja eficiente para o negócio e justa para as pessoas. Aqui, trabalhamos para garantir que o crédito seja uma solução, nunca um problema, construindo um ecossistema de crédito mais inteligente, personalizado e baseado em dados."
        ]
      },
      {
        nome: "Gestão de Débitos, Portfólio e Legal Analytics",
        descricao: [
          "Transformamos dados em inteligência e acompanhamos a saúde financeira dos nossos produtos com olhar atento e estratégico. Atuamos para garantir que o Agi cresça com sustentabilidade, monitorando o desempenho das carteiras e oferecendo informações confiáveis que orientam decisões importantes para o negócio.",
          "Oferecemos soluções baseadas em fatos, com dados claros que ajudam cada time a agir com mais precisão. Desenvolvemos painéis, relatórios e análises que antecipam problemas e revelam oportunidades. E também promovemos autonomia, fortalecendo o uso inteligente das informações em toda a empresa.",
          "Somos movidos pela curiosidade, pela lógica e pela vontade de fazer a diferença. Nosso compromisso é garantir que os dados certos estejam nas mãos certas, na hora certa, sempre com foco em decisões mais ágeis, estratégias mais sólidas e resultados que impulsionam o Agi rumo ao futuro."
        ]
      },
      {
        nome: "Jurídico",
        descricao: [
          "Somos o time que protege juridicamente o Agi e garante que o banco atue com segurança, responsabilidade e dentro das regras. Cuidamos dos processos judiciais, damos suporte estratégico para as decisões do negócio, elaboramos e revisamos contratos, protegemos ativos como marcas e patentes, e organizamos toda a parte operacional que envolve a atuação jurídica.",
          "Nossa atuação vai desde o acompanhamento de ações judiciais massificadas e casos estratégicos, até o suporte jurídico para projetos internos e operações complexas, incluindo mercado de capitais. Também garantimos que as obrigações legais sejam cumpridas no prazo e que as informações jurídicas estejam organizadas e atualizadas."
        ]
      },
      {
        nome: "Modelagem de Crédito e Machine Learning",
        descricao: [
          "Na Gerência de Data Science do Agibank, unimos análise avançada e engenharia de machine learning para transformar dados em inteligência estratégica. Desenvolvemos modelos de crédito, perda esperada e corporativos, ao mesmo tempo em que estruturamos e sustentamos todo o ciclo de vida de modelos e variáveis. Também exploramos agentes de IA para otimizar processos e apoiar as áreas do banco. Dessa forma, garantimos decisões mais precisas, inovação contínua e impacto direto nos resultados do Agibank."
        ]
      },
      {
        nome: "Ouvidoria",
        descricao: [
          "Somos a equipe que representa o cliente dentro do Agi, atuando com empatia e dedicação para acolher e analisar as reclamações recebidas pelos canais regulatórios como Bacen, Procon, Consumidor.gov e nossa própria Ouvidoria.",
          "Nosso compromisso é garantir análises justas, completas e dentro dos prazos estabelecidos, sempre buscando compreender a jornada do cliente. Mais do que resolver casos, enxergamos cada situação como uma oportunidade de aprimoramento, fortalecendo a confiança e a transparência no relacionamento com o banco.",
          "Nosso objetivo é recuperar a performance regulatória, fortalecer a governança e elevar continuamente a qualidade do atendimento, convidando você a conhecer nosso trabalho e a fazer parte desse processo de melhoria constante."
        ]
      },
      {
        nome: "Prevenção à Fraudes",
        descricao: [
          "Nossa missão é proteger a confiança dos nossos clientes e a segurança das operações no Agi. Atuamos em diferentes frentes, desde a criação de estratégias até a investigação de casos, para identificar riscos, antecipar fraudes e garantir que a experiência do cliente continue fluida, mesmo com controles cada vez mais eficientes.",
          "Aqui, desenvolvemos regras inteligentes, automatizamos processos e equilibramos proteção e experiência."
        ]
      }
    ]
  },
  {
    nome: "Gente e Governança",
    areas: [
      {
        nome: "Cultura e Workplace",
        descricao: [
          "A gente acredita que cultura se constrói todos os dias: na forma como nos comunicamos, no ambiente em que trabalhamos e no orgulho de fazer parte do Agi. A Gerência de Cultura e Workplace existe para garantir que isso aconteça de forma prática, criativa e consistente no dia a dia.",
          "Somos o time que conecta as pessoas ao propósito do Agi, reforça nossos valores e transforma a experiência do colaborador em algo vivo, que vai desde a mensagem que chega até os espaços onde o trabalho acontece. Fazemos isso por meio de uma atuação integrada entre comunicação, marca, criação e gestão dos ambientes, sempre com foco em gerar conexão, engajamento e pertencimento.",
          "Nosso olhar está em cada detalhe: das campanhas e conteúdos que aproximam as pessoas, aos eventos e experiências que fortalecem a cultura, até os ambientes que apoiam o bem-estar e a produtividade. Assim, contribuímos para que o Agi seja um lugar onde as pessoas queiram estar, se desenvolver e crescer.",
          "Além dos times de Cultura e Workplace, essa gerência também lidera as posições de assistência executiva, com as posições das secretarias executivas."
        ]
      },
      {
        nome: "Gestão e Governança",
        descricao: [
          "Proporcionamos os meios para que cada área entregue os resultados esperados pelo Agi. Isso sempre é realizado através das pessoas, dos processos e das rotinas. Nosso objetivo é construir o caminho ideal para a execução das tarefas e a entrega dos melhores resultados. Com foco no desenvolvimento de talentos, na força dos dados e na parceria com as lideranças, promovemos uma cultura de alta performance e decisões mais inteligentes. Através das áreas de Consultoria de Gente e Gestão, Desenvolvimento Humano e Organizacional, Governança e Remuneração e People Analytics, impulsionamos jornadas de crescimento consistentes e um Agi cada vez mais preparado para o futuro.",
          "Nossa atuação envolve apoiar líderes e equipes com soluções estratégicas em gestão de pessoas, conduzir ciclos de crescimento que dão direção e protagonismo aos colaboradores, estruturar políticas de governança e remuneração que reforçam justiça e sustentabilidade, além de transformar dados em inteligência aplicada por meio de People Analytics. Com isso, fortalecemos a tomada de decisão, impulsionamos engajamento e conectamos o crescimento individual ao sucesso coletivo da organização."
        ]
      },
      {
        nome: "Recrutamento",
        descricao: [
          "Somos a porta de entrada para os talentos que vão transformar o Agi. Nosso papel é conectar as pessoas certas às oportunidades certas, no momento certo, garantindo aderência entre perfil, cultura e propósito.",
          "Atuamos em todas as etapas do processo seletivo, do primeiro contato à chegada do novo colaborador, assegurando uma experiência fluida, humana e alinhada aos nossos valores. Vamos além do preenchimento de vagas: construímos conexões que fortalecem as áreas, impulsionam resultados e sustentam o crescimento da companhia."
        ]
      },
      {
        nome: "Serviços de Gestão de Pessoas e Administrativo",
        descricao: [
          "Unimos precisão técnica e olhar humano para garantir uma jornada do colaborador segura e uma operação administrativa eficiente. Nossa gerência é responsável por processos críticos como admissões, folha de pagamento, benefícios, ponto eletrônico, medicina e segurança do trabalho, gestão de saúde e qualidade de vida, comissionamentos e subsídios documentais para processos trabalhistas.",
          "Também gerenciamos frotas, cartões corporativos, viagens, reembolsos, protestos e contratos com fornecedores relacionados a essas frentes. Cuidamos ainda das relações trabalhistas e sindicais, promovendo melhorias contínuas com foco em controle, automação e inteligência operacional. Estamos em movimento constante, evoluindo com tecnologia, Inteligência Artificial, integração de plataformas e uso de dados que fortalecem decisões e liberam tempo para o que mais importa: cuidar das pessoas e apoiar o crescimento do Agi."
        ]
      }
    ]
  },
  {
    nome: "Produtos",
    areas: [
      {
        nome: "BU Consignado Privado",
        descricao: [
          "Somos especialistas em facilitar o acesso ao crédito de forma inteligente, segura e simples, seja para quem trabalha no setor público ou privado, para aposentados do INSS ou para quem quer proteger o que importa com seguros pensados para a vida real. Atuamos com diferentes públicos e soluções, sempre com um olhar atento aos detalhes, às regras do mercado e à experiência do cliente.",
          "Nosso trabalho combina estratégia, análise de dados, inovação e muita responsabilidade. Buscamos formas cada vez mais eficazes de oferecer crédito com menos burocracia, mais agilidade e total conformidade. Também estamos lado a lado das áreas comerciais e de tecnologia, impulsionando melhorias e criando novas ofertas que realmente atendam às necessidades das pessoas."
        ]
      },
      {
        nome: "BU Consignado Público + INSS",
        descricao: []
      },
      {
        nome: "BU Consumer Banking",
        descricao: [
          "Aqui, criamos soluções digitais que transformam a maneira como as pessoas se relacionam com o dinheiro. Nossa atuação une design centrado no usuário, estratégia de canais e meios de pagamento para entregar experiências simples, inteligentes e seguras. Estamos por trás do App, do WhatsApp, OCRM e App do consultor nas lojas e de toda a jornada transacional como Pix, Open Finance e cartões. Pensamos em cada detalhe da interface, do fluxo e da funcionalidade para garantir que nossos clientes tenham uma experiência fluida e eficiente em todos os pontos de contato."
        ]
      },
      {
        nome: "BU Crédito Pessoal",
        descricao: [
          "Nossa missão é garantir que o crédito pessoal do Agi chegue às mãos certas, com agilidade, segurança e uma jornada simples para quem precisa. Atuamos em frentes complementares que cuidam desde os clientes que recebem benefício do INSS até os trabalhadores do setor público e privado, além de acompanhar de perto os clientes que estão pensando em sair do banco.",
          "Trabalhamos com profundidade nos dados e com empatia nas decisões, pensando em ofertas que cabem no bolso e fazem sentido para cada realidade, buscando novas oportunidades de crédito com responsabilidade e evoluindo nossos produtos, processos e canais com inteligência, colaboração e foco em resultados sustentáveis."
        ]
      },
      {
        nome: "BU Meios de Pagamento",
        descricao: [
          "Somos responsáveis por garantir o funcionamento eficiente, seguro e regulatório de produtos essenciais para a jornada financeira dos clientes, como conta corrente, cadastro, cartões, Pix, Open Finance, boletos e TEDs. Atuamos na gestão e evolução desses produtos, monitorando indicadores, promovendo melhorias contínuas e assegurando uma experiência simples e confiável.",
          "Além disso, trabalhamos de forma integrada com diversas áreas do banco para fortalecer processos, garantir conformidade, otimizar resultados e impulsionar a inovação."
        ]
      },
      {
        nome: "Operações",
        descricao: [
          "Somos o time que faz o banco funcionar com segurança, agilidade e precisão, nos bastidores e na linha de frente. Nossa missão é garantir que as transações aconteçam corretamente, que os processos de crédito, cartões, seguros, conta corrente, banco pagador e cadastro fluam com eficiência e que qualquer problema seja resolvido rapidamente, antes que afete nossos clientes. Trabalhamos com foco absoluto nos detalhes, conectando áreas, automatizando tarefas e melhorando rotinas para que tudo funcione como deve ser. Do controle das contas à formalização de contratos, da análise de dados à correção de falhas financeiras críticas, estamos presentes em cada ponto da jornada operacional com uma atuação firme e silenciosa, mas essencial."
        ]
      }
    ]
  },
  {
    nome: "Tecnologia",
    areas: [
      {
        nome: "Dados e IA",
        descricao: [
          "Somos o time que cuida dos bastidores dos dados no Agi. Nossa missão é garantir que todas as informações que circulam pelo banco estejam organizadas, seguras e prontas para uso. Criamos a estrutura que permite que outras áreas encontrem os dados certos, na hora certa, para tomar decisões mais inteligentes."
        ]
      },
      {
        nome: "Engenharia de Software",
        descricao: [
          "Somos o time que transforma estratégia em tecnologia no Agi. Aqui, conectamos o que o negócio precisa com soluções digitais seguras, eficientes e escaláveis, que impactam diretamente a vida dos nossos clientes e o crescimento do banco. Atuamos em diversas frentes, garantindo que nossos produtos, canais e sistemas funcionem de forma integrada, com foco em simplicidade, segurança e experiência.",
          "Nossa estrutura é composta por tribos e áreas especializadas que cuidam de toda a jornada do cliente e dos bastidores tecnológicos que fazem o banco funcionar:",
          "• Tribo Canais: cuidamos do app, dos sistemas internos e de todas as plataformas digitais que conectam o Agi aos clientes e ao time comercial. Garantimos que tudo funcione de forma fluida, moderna e com a melhor experiência possível.",
          "• Tribo Comercial & Marketing: traduzimos as necessidades comerciais em soluções digitais concretas, trabalhando lado a lado com as áreas de negócios para impulsionar resultados com tecnologia.",
          "• Tribo Consignado: somos responsáveis por sustentar e evoluir os produtos de crédito consignado, garantindo segurança, eficiência e experiência digital ao longo de toda a jornada.",
          "• Tribo CP & Cross: cuidamos dos bastidores do Crédito Pessoal e dos processos de formalização, integrando sistemas e garantindo que tudo funcione de forma ágil e automatizada.",
          "• Tribo Ciclo de Crédito: atuamos na retaguarda dos sistemas de concessão de crédito, prevenção a fraudes, recuperação de clientes e combate a crimes financeiros, garantindo segurança e eficiência operacional.",
          "• Tribo Seguros & Banco Pagador: sustentamos as plataformas de seguros e os sistemas que conectam o Agi ao INSS, garantindo processos seguros, confiáveis e preparados para o futuro.",
          "Nossa missão é garantir que a tecnologia do Agi acompanhe e impulsione o crescimento do negócio, com soluções que combinam eficiência técnica, segurança, inovação e foco total na experiência dos nossos clientes."
        ]
      },
      {
        nome: "Engenharia e Arquitetura de Software",
        descricao: [
          "Somos a espinha dorsal tecnológica do Agi. Nosso papel é garantir que os sistemas que sustentam as operações bancárias, tanto internas quanto externas, funcionem com precisão, segurança e eficiência. Atuamos em três grandes frentes que se complementam e formam o núcleo da operação digital do banco: Transacional, Corporativo e Core.",
          "A Tribo Transacional é responsável por assegurar que as movimentações do dia a dia dos nossos clientes ocorram de forma fluida e confiável. Cuidamos de tudo o que envolve o uso do dinheiro, como cartões, saques, Pix, boletos e Open Finance, garantindo uma experiência segura, moderna e sem fricções.",
          "A Tribo Corporativo cuida dos bastidores do banco. Sustentamos os sistemas que apoiam áreas como Financeiro, Contabilidade, Fiscal, Jurídico e RH, promovendo automação, integração e conformidade regulatória. Nosso foco é transformar dados e processos internos em entregas eficientes e precisas.",
          "Já a Tribo Core é o coração da operação bancária. Somos responsáveis por sustentar e evoluir os sistemas transacionais que movem a conta corrente, os empréstimos e as transferências dos nossos clientes. Atuamos tanto com tecnologias modernas quanto com plataformas legadas, garantindo estabilidade enquanto preparamos a arquitetura do futuro.",
          "Juntos, somos uma gerência que une excelência técnica, visão estratégica e foco total no cliente. Trabalhamos para manter o motor do banco funcionando, e evoluindo, com solidez, agilidade e inovação. Nosso compromisso é sustentar o crescimento do Agi com tecnologia robusta, escalável e preparada para os desafios de um mercado cada vez mais digital e dinâmico."
        ]
      },
      {
        nome: "Infraestrutura, Operações e Governança",
        descricao: [
          "Somos o time que garante que toda a engrenagem tecnológica do banco funcione com segurança, eficiência e prontidão para o crescimento. Atuamos nos bastidores, mas com impacto direto em cada clique do cliente e em cada decisão dos times internos. Nossa missão é manter a infraestrutura moderna, os sistemas estáveis, os dados protegidos e os colaboradores bem assistidos, sempre com foco em disponibilidade, automação e excelência operacional.",
          "Essa gerência reúne áreas estratégicas que se complementam:",
          "• Arquitetura e Qualidade, que define os pilares técnicos para a construção de soluções escaláveis, seguras e sustentáveis, conectando estratégia e execução com foco em performance e boas práticas de desenvolvimento.",
          "• Infra e SRE, que garante a resiliência dos ambientes de produção, o uso inteligente de cloud, automação, observabilidade e estabilidade das operações mesmo em cenários de alta demanda.",
          "• Operações de TI, que cuida do suporte aos colaboradores, da conectividade entre as unidades, do controle de incidentes e mudanças e da segurança da rede, promovendo agilidade e confiabilidade no dia a dia.",
          "Aqui, vivemos o desafio constante de evoluir a tecnologia do Agi para que ela seja invisível na operação e essencial na estratégia. Estamos modernizando sistemas, adotando inteligência artificial, reforçando a cibersegurança, otimizando custos e ampliando a automação com foco no crescimento sustentável da companhia. Mais do que garantir que tudo funcione, nosso papel é preparar o Agi para o futuro, com uma base tecnológica sólida, segura e sempre em evolução."
        ]
      },
      {
        nome: "Segurança da Informação",
        descricao: [
          "No Agi, cuidar da segurança vai muito além de proteger sistemas: é garantir que a tecnologia seja um pilar confiável para o crescimento do banco e para a tranquilidade dos nossos clientes. Somos o time responsável por manter o Agi sempre um passo à frente dos riscos digitais, atuando de forma integrada para proteger dados, sistemas e operações em todos os ambientes, da nuvem à infraestrutura interna.",
          "Nossa atuação é ampla e estratégica, envolvendo desde a construção de ambientes seguros até a detecção de ameaças em tempo real, o fortalecimento dos processos de identidade e acesso, e o uso de inteligência para antecipar vulnerabilidades.",
          "Fazemos isso por meio de quatro áreas especializadas:",
          "• Cyber Security: definimos soluções de segurança para nuvem e ambientes Microsoft, monitoramos riscos e atuamos rapidamente em incidentes, garantindo a proteção em todos os níveis.",
          "• Security Operations Center (SOC): monitoramos 24x7 os ambientes digitais do Agi, identificando, analisando e respondendo a ameaças com agilidade e precisão.",
          "• Operations Security: simulamos ataques, buscamos vulnerabilidades e desenhamos soluções de segurança desde a origem dos projetos, antecipando riscos antes que eles se tornem problemas reais.",
          "• Information Security: protegemos os dados e controlamos os acessos de forma inteligente e eficiente, aplicando políticas, boas práticas e soluções tecnológicas para garantir a segurança das informações do Agi e de nossos clientes.",
          "Nosso compromisso é claro: construir e evoluir uma estrutura de segurança cada vez mais moderna, automatizada e inteligente, capaz de acompanhar o ritmo do negócio e os desafios do cenário digital. Assim, garantimos que o Agi siga crescendo de forma segura, confiável e preparada para o futuro."
        ]
