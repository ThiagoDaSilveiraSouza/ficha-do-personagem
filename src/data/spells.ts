import { SpellType } from "../interfaces";

export const spells: SpellType[] = [
  {
    id: "1",
    name: "Acalmar Emoções",
    school: "encantamento",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, S",
    duration: "até 1 minuto",
    concentration: true,
    material: "Você tenta suprimir emoções fortes em um grupo de pessoas. Cada humanoide em uma esfera de 6 metros de raio, centrada em um ponto que você escolher dentro do alcance, deve realizar um teste de resistência de Carisma; uma criatura pode escolher falhar nesse teste, se desejar. Se uma criatura falhar na resistência, escolha um dentre os dois efeitos a seguir.",
    description: "Alternativamente, você pode tornar um alvo indiferente às criaturas que você escolher que forem hostis a ele. Essa indiferença acaba se o alvo for atacado ou ferido por uma magia ou se ele testemunhar qualquer dos seus amigos sendo ferido. Quando a magia terminar, a criatura se tornará hostil novamente, a não ser que o Mestre diga o contrário.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "3",
        name: "clérigo"
      }
    ],
    "nivel": "2"
  },
  {
    id: "2",
    name: "Adivinhação",
    school: "adivinhação",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S, M",
    duration: "instantânea",
    concentration: false,
    material: "Material: incenso e uma oferenda apropriada para sacrifício à sua religião, juntos valendo, no mínimo, 25 po, consumidos pela magia.",
    description: "Se você conjurar a magia duas ou mais vezes antes de completar seu próximo descanso longo, existe uma chance cumulativa de 25 por cento de cada conjuração, depois da primeira que você fez, ter um resultado aleatório. O Mestre faz essa jogada secretamente.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      }
    ],
    "nivel": "4"
  },
  {
    id: "3",
    name: "Ajuda",
    school: "abjuração",
    castTime: "1 ação",
    range: "9 metros",
    components: "V, S, M",
    duration: "8 horas",
    concentration: false,
    material: "Material: uma pequena fita de tecido branco.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, os pontos de vida dos alvos aumentam em 5 pontos adicionais para cada nível do espaço acima do o 2°.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "7",
        name: "paladino"
      }
    ],
    "nivel": "2"
  },
  {
    id: "4",
    name: "Alarme",
    school: "abjuração",
    castTime: "1 minuto",
    range: "9 metros",
    components: "V, S, M",
    duration: "8 horas",
    concentration: false,
    material: "Material: um pequeno sino e um pequeno fio de prata.",
    description: "Um alarme audível produz o som de um sino de mão por 10 minutos num raio de 18 metros.",
    classesList: [
      {
        id: "6",
        name: "mago"
      },
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "1"
  },
  {
    id: "5",
    name: "Aliado Planar",
    school: "conjuração",
    castTime: "10 minutos",
    range: "18 metros",
    components: "V, S",
    duration: "instantânea",
    concentration: false,
    material: "Você suplica a uma entidade transcendental por ajuda. O ser deve ser conhecido por você: seu deus, um primordial, um príncipe demônio ou algum outro ser de poder cósmico. Essa entidade envia um celestial, um corruptor ou um elemental leal a ela para ajudar você, fazendo a criatura aparecer em um espaço desocupado dentro do alcance. Se você conhecer o nome de uma criatura especifica, você pode falar o nome quando conjurar essa magia para requisitar essa criatura, do contrário, você pode receber uma criatura diferente de qualquer forma (à escolha do Mestre).",
    description: "Uma criatura convidada para se juntar ao seu grupo, conta como um membro dele, recebendo sua parte total na premiação de pontos de experiência.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      }
    ],
    "nivel": "6"
  },
  {
    id: "6",
    name: "Aljava Veloz",
    school: "transmutação",
    castTime: "1 ação bônus",
    range: "toque",
    components: "V, S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: uma aljava contendo, pelo menos, uma munição.",
    description: "Em cada um dos seus turnos, até a magia acabar, você pode usar uma ação bônus para realizar dois ataques com uma arma que use munição de uma aljava. Cada vez que você fizer tais ataques à distância, sua aljava, magicamente, repõe a munição que você usou com uma munição não-mágica similar. Qualquer munição criada por essa magia se desintegra quando a magia acaba. Se a aljava não estiver mais com você, a magia acaba.",
    classesList: [
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "5"
  },
  {
    id: "7",
    name: "Alterar Forma",
    school: "transmutação",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S, M",
    duration: "até 1 hora",
    concentration: true,
    material: "Material: uma argola de jade valendo, no mínimo, 1.500 po, que você deve colocar na sua cabeça antes de conjurar a magia.",
    description: "Pela duração da magia, você pode usar sua ação para assumir uma forma diferente, seguindo as mesmas restrições e regras da forma anterior, com uma exceção: se sua nova forma tiver mais pontos de vida que sua forma atual, seus pontos de vida mantem o valor atual.",
    classesList: [
      {
        id: "4",
        name: "druida"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "9"
  },
  {
    id: "8",
    name: "Alterar-se",
    school: "transmutação",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S",
    duration: "até 1 hora",
    concentration: true,
    material: "Você assume uma forma diferente. Quando conjurar essa magia, escolha uma das seguintes opções, o efeito durará pela duração da magia. Enquanto a magia durar, você pode terminar uma opção com uma ação para ganhar os benefícios de uma diferente.",
    description: "Armas Naturais. Você faz crescerem garras, presas, espinhos, chifres ou armas naturais diferentes, à sua escolha. Seus ataques desarmados causam 1d6 de dano de concussão, perfurante ou cortante, como apropriado para a arma natural que você escolheu, e você é proficiente com seus ataques desarmados. Finalmente, a arma natural é mágica e você tem +1 de bônus nas jogadas de ataque e dano que você fizer com ela.",
    classesList: [
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "2"
  },
  {
    id: "9",
    name: "Amizade",
    school: "encantamento",
    castTime: "1 ação",
    range: "pessoal",
    components: "S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: uma pequena quantidade de maquiagem aplicada ao rosto durante a conjuração da magia.",
    description: "Pela duração, você terá vantagem em todos os testes de Carisma direcionados a uma criatura, à sua escolha, que não seja hostil a você. Quando a magia acabar, a criatura perceberá que você usou maia para influenciar o humor dela, e ficará hostil a você. Uma criatura propensa a violência irá atacar você. Outra criatura pode buscar outras formas de retaliação (a critério do Mestre), dependendo da natureza da sua interação com ela.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "0"
  },
  {
    id: "10",
    name: "Amizade Animal",
    school: "encantamento",
    castTime: "1 ação",
    range: "9 metros",
    components: "V, S, M",
    duration: "24 horas",
    concentration: false,
    material: "Material: um punhado de comida.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, você pode afetar uma besta adicional para cada nível do espaço acima do 1°.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "1"
  },
  {
    id: "11",
    name: "Ampliar Plantas",
    school: "transmutação",
    castTime: "1 ação ou 8 horas",
    range: "45 metros",
    components: "V, S",
    duration: "instantânea",
    concentration: false,
    material: "Essa magia canaliza vitalidade nas plantas dentro de uma área especifica. Existem dois usos possíveis para essa magia, concedendo ou benefícios imediatos ou a longo prazo.",
    description: "Você pode excluir uma ou mais áreas de qualquer tamanho, dentro da área da magia, para não ser afetada. Se você conjurar essa magia ao longo de 8 horas, você fertiliza a terra. Todas as plantas num raio de 800 metros, centrado no ponto dentro do alcance, ficam enriquecidas por 1 ano. As plantas fornecerão o dobro da quantidade normal de comida quando colhidas.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "3"
  },
  {
    id: "12",
    name: "Âncora Planar",
    school: "abjuração",
    castTime: "1 hora",
    range: "18 metros",
    components: "V, S, M",
    duration: "24 horas",
    concentration: false,
    material: "Material: uma joia valendo, no mínimo, 1.000 po, consumida pela magia.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de nível superior, a duração aumenta para 10 dias com um espaço de 6° nível, para 30 dias com um espaço de 7° nível, para 180 dias com um espaço de 8° nível e para um ano com um espaço de magia de 9° nível.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "5"
  },
  {
    id: "13",
    name: "Andar Na Água",
    school: "transmutação",
    castTime: "1 ação",
    range: "9 metros",
    components: "V, S, M",
    duration: "1 hora",
    concentration: false,
    material: "Material: uma rolha.",
    description: "Se você afetar uma criatura submersa em um líquido, a magia ergue o alvo para a superfície do líquido a uma taxa de 18 metros por rodada.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "3"
  },
  {
    id: "14",
    name: "Animar Mortos",
    school: "necromancia",
    castTime: "1 minuto",
    range: "3 metros",
    components: "V, S, M",
    duration: "instantânea",
    concentration: false,
    material: "Material: uma gota de sangue, um pedaço de carne e uma punhado de pó de osso.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, você pode animar ou recuperar o controle de duas criaturas mortas-vivas para cada nível do espaço acima do 3°. Cada uma dessas criaturas deve vir de um corpo ou pilha de ossos diferente.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "3"
  },
  {
    id: "15",
    name: "Animar Objetos",
    school: "transmutação",
    castTime: "1 ação",
    range: "36 metros",
    components: "V, S",
    duration: "até 1 minuto",
    concentration: true,
    material: "Objetos ganham vida ao seu comando. Escolha até dez objetos não-mágicos dentro do alcance, que não estejam sendo vestidos ou carregados. Alvos Médios contam como dois objetos, alvos Grandes contam como quatro objetos e alvos Enormes contam como oito objetos. Você não pode animar um objeto maior que Enorme. Cada alvo se anima e torna-se uma criatura sob seu controle até o final da magia ou até ser reduzido a 0 pontos de vida.",
    description: "Com uma ação bônus, você pode comandar mentalmente qualquer criatura que você criar com essa magia se a criatura estiver a até 150 metros de você (se você controla várias criaturas, você pode comandar qualquer ou todas elas ao mesmo tempo, emitindo o mesmo comando para cada uma). Você decide qual ação a criatura irá fazer e para onde ela irá se mover durante o próximo turno dela, ou você pode emitir um comando geral, como para guardar uma câmara ou corredor especifico. Se você não der nenhum comando, as criaturas apenas se defenderão contra criaturas hostis. Uma vez que receba uma ordem, a criatura continuará a segui-la até a tarefa estar concluída.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "5"
  },
  {
    id: "16",
    name: "Antipatia/Simpatia",
    school: "encantamento",
    castTime: "1 hora",
    range: "18 metros",
    components: "V, S, M",
    duration: "10 dias",
    concentration: false,
    material: "Material: ou um pedaço de alume embebido em vinagre para o efeito de antipatia, ou uma gota de mel para o efeito de simpatia.",
    description: "Uma criatura que obtenha sucesso na resistência contra esse efeito ficará imune a ele por 1 minuto, depois desse tempo, ela pode ser afetada novamente.",
    classesList: [
      {
        id: "4",
        name: "druida"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "8"
  },
  {
    id: "17",
    name: "Aprimorar Habilidade",
    school: "transmutação",
    castTime: "1 ação",
    range: "toque",
    components: "V, S, M",
    duration: "até 1 hora",
    concentration: true,
    material: "Material: pelo ou penas de uma besta.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, você pode afetar uma criatura adicional para cada nível do espaço acima do 2°.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "5",
        name: "feiticeiro"
      }
    ],
    "nivel": "2"
  },
  {
    id: "18",
    name: "Aprisionamento",
    school: "abjuração",
    castTime: "1 minuto",
    range: "9 metros",
    components: "V, S, M",
    duration: "até ser dissipada",
    concentration: false,
    material: "Material: um pergaminho de representação ou uma estatueta esculpida para se parecer com o alvo e um componente especial, que varia de acordo com a versão da magia que você escolher, valendo, no mínimo, 500 po por Dado de Vida.",
    description: "Você pode usar um componente especial em particular para criar apenas uma prisão por vez. Se você conjurar essa magia novamente usando o mesmo componente, o alvo da primeira conjuração é, imediatamente, liberado do vínculo.",
    classesList: [
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "9"
  },
  {
    id: "19",
    name: "Arca Secreta de Leomund",
    school: "conjuração",
    castTime: "1 ação",
    range: "toque",
    components: "V, S, M",
    duration: "instantânea",
    concentration: false,
    material: "Material: um baú requintado, de 90 cm por 60 cm por 60 cm, construído com materiais raros valendo, no mínimo, 5.000 po e uma réplica Miúda feita do mesmo material valendo, no mínimo, 50 po.",
    description: "Após 60 dias, existe 5 por cento de chance, cumulativa, por dia do efeito da magia terminar. Esse efeito termina se você conjurar essa magia novamente, se a pequena réplica do baú for destruída ou se você decidir terminar a magia usando uma ação. Se a magia terminar enquanto o baú maior estiver no Plano Etéreo, ele estará irremediavelmente perdido.",
    classesList: [
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "4"
  },
  {
    id: "20",
    name: "Área Escorregadia",
    school: "conjuração",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, S, M",
    duration: "1 minuto",
    concentration: false,
    material: "Material: um pouco de pele de porco ou manteiga.",
    description: "Quando a graxa aparece, cada criatura de pé na área deve ser bem sucedida num teste de resistência de Destreza ou cairá no chão. Uma criatura que entre na área ou termine seu turno nela, deve ser bem sucedido num teste de resistência de Destreza ou cairá no chão.",
    classesList: [
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "1"
  },
  {
    id: "21",
    name: "Arma Elemental",
    school: "transmutação",
    castTime: "1 ação",
    range: "toque",
    components: "V, S",
    duration: "até 1 hora",
    concentration: true,
    material: "Uma arma não-mágica que você tocar se torna uma arma mágica. Escolha um dos tipos de dano a seguir: ácido, elétrico, frio, fogo ou trovejante. Pela duração, a arma tem +1 de bônus nas jogadas de ataque e causa 1d4 de dano extra, do tipo de elemento escolhido, ao atingir.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 5° ou 6° nível, o bônus nas jogadas de ataque aumenta pra +2 e o dano extra aumenta para 2d4. Quando você usar um espaço de magia de 7° nível ou superior, o bônus aumenta para +3 e o dano extra aumenta para 3d4.",
    classesList: [
      {
        id: "7",
        name: "paladino"
      }
    ],
    "nivel": "3"
  },
  {
    id: "22",
    name: "Arma Espiritual",
    school: "evocação",
    castTime: "1 ação bônus",
    range: "18 metros",
    components: "V, S",
    duration: "1 minuto",
    concentration: false,
    material: "Você cria uma arma espectral flutuante, dentro do alcance, que permanece pela duração ou até você conjurar essa magia novamente. Quando você conjura essa magia, você pode realizar um ataque corpo-a-corpo com magia contra uma criatura a 1,5 metro da arma. Se atingir, o alvo sofre dano de energia igual a 1d8 + seu modificador de habilidade de conjuração.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o dano aumenta em 1d8 para cada dois níveis do espaço acima do 2°.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      }
    ],
    "nivel": "2"
  },
  {
    id: "23",
    name: "Arma Mágica",
    school: "transmutação",
    castTime: "1 ação bônus",
    range: "toque",
    components: "V, S",
    duration: "até 1 hora",
    concentration: true,
    material: "Você toca uma arma não-mágica. Até a magia acabar, a arma se torna uma arma mágica com +1 de bônus nas jogadas de ataque e jogadas de dano.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o bônus aumenta para +2. Quando você usar um espaço de magia de 6° nível ou superior, o bônus aumenta para +3.",
    classesList: [
      {
        id: "6",
        name: "mago"
      },
      {
        id: "7",
        name: "paladino"
      }
    ],
    "nivel": "2"
  },
  {
    id: "24",
    name: "Armadura Arcana",
    school: "abjuração",
    castTime: "1 ação",
    range: "toque",
    components: "V, S, M",
    duration: "8 horas",
    concentration: false,
    material: "Material: um pedaço de couro curado.",
    description: "Você toca uma criatura voluntária que não esteja vestindo armadura e uma energia mágica protetora a envolve até a magia acabar. A CA base do alvo se torna 13 + o modificador de Destreza dele. A magia acaba se o alvo colocar uma armadura ou se você dissipa-la usando uma ação.",
    classesList: [
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "1"
  },
  {
    id: "25",
    name: "Armadura de Agathys",
    school: "abjuração",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S, M",
    duration: "1 hora",
    concentration: false,
    material: "Material: um copo de água.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, tanto os pontos de vida temporários quanto o dano de frio aumentam em 5 para cada nível do espaço acima do 1°.",
    classesList: [
      {
        id: "2",
        name: "bruxo"
      }
    ],
    "nivel": "1"
  },
  {
    id: "26",
    name: "Arrombar",
    school: "transmutação",
    castTime: "1 ação",
    range: "18 metros",
    components: "V",
    duration: "instantânea",
    concentration: false,
    material: "Escolha um objeto que você possa ver, dentro do alcance. O objeto pode ser uma porta, uma caixa, um baú ou um par de algemas, um cadeado ou outro objeto que contenha um meio mundano ou mágico que previne o acesso.",
    description: "Quando você conjurar essa magia, uma batida forte, audível a até 90 metros de distância, emana do objeto alvo.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "2"
  },
  {
    id: "27",
    name: "Assassino Fantasmagórico",
    school: "ilusão",
    castTime: "1 ação",
    range: "36 metros",
    components: "V, S",
    duration: "até 1 minuto",
    concentration: true,
    material: "Você mexe com os pesadelos de uma criatura que você possa ver, dentro do alcance, e cria uma manifestação ilusória dos seus medos mais profundos, visível apenas para a criatura. O alvo deve realizar um teste de resistência de Sabedoria. Se falhar na resistência, ele ficará amedrontado pela duração. No final de cada turno do alvo, antes da magia acabar, ele deve ser bem sucedido num teste de resistência de Sabedoria ou sofrerá 4d10 de dano psíquico. Se passar na resistência, a magia acaba.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 5° nível ou superior, o dano aumenta em 1d10 para cada nível do espaço acima do 4°.",
    classesList: [
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "4"
  },
  {
    id: "28",
    name: "Ataque Certeiro",
    school: "adivinhação",
    castTime: "1 ação",
    range: "9 metros",
    components: "S",
    duration: "até 1 rodada",
    concentration: true,
    material: "Você estende sua mão e aponta o dedo para um alvo no alcance. Sua magia garante a você uma breve intuição sobre as defesas do alvo. No seu próximo turno, você terá vantagem na primeira jogada de ataque contra o alvo, considerando que essa magia não tenha acabado.",
    description: "Você estende sua mão e aponta o dedo para um alvo no alcance. Sua magia garante a você uma breve intuição sobre as defesas do alvo. No seu próximo turno, você terá vantagem na primeira jogada de ataque contra o alvo, considerando que essa magia não tenha acabado.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "0"
  },
  {
    id: "29",
    name: "Ataque Visual",
    school: "necromancia",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S",
    duration: "até 1 minuto",
    concentration: true,
    material: "Pela duração da magia, seus olhos tornam-se manchas vazias imbuídas com poder terrível. Uma criatura, à sua escolha, a até de 18 metros de você que você puder ver, deve ser bem sucedida num teste de resistência de Sabedoria ou será afetada por um dos efeitos a seguir, à sua escolha, pela duração. A cada um dos seus turnos, até a magia acabar, você pode usar sua ação para afetar outra criatura, mas não pode afetar uma criatura novamente se ela tiver sido bem sucedida no teste de resistência contra essa conjuração de ataque visual.",
    description: "Adoecer. O alvo tem desvantagem nas jogadas de ataque e testes de habilidade. No final de cada um dos turnos dele, ele pode realizar outro teste de resistência de Sabedoria. Se for bem sucedido, o efeito termina.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "6"
  },
  {
    id: "30",
    name: "Augúrio",
    school: "adivinhação",
    castTime: "1 minuto",
    range: "pessoal",
    components: "V, S, M",
    duration: "instantânea",
    concentration: false,
    material: "Material: varetas, ossos ou objetos similarmente marcados valendo, no mínimo, 25 po.",
    description: "Se você conjurar a magia duas ou mais vezes antes de completar seu próximo descanso longo, existe uma chance cumulativa de 25 por cento de cada conjuração, depois da primeira que você fez, ter um resultado aleatório. O Mestre faz essa jogada secretamente.",
    classesList: [],
    "nivel": "2"
  },
  {
    id: "31",
    name: "Aumentar/Reduzir",
    school: "transmutação",
    castTime: "1 ação",
    range: "9 metros",
    components: "V, S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: um pouco de pó de ferro.",
    description: "Reduzir. O tamanho do alvo é reduzido à metade em todas as dimensões e seu peso é reduzido a um oitavo do normal. Essa redução diminui o tamanho do alvo em uma categoria – de Médio para Pequeno, por exemplo. Até o fim da magia, o alvo tem desvantagem em testes de Força e testes de resistência de Força. O tamanho das armas do alvo diminuem para se adequar ao seu novo tamanho. Quando essas armas são reduzidas, os ataques do alvo com elas causam 1d4 de dano a menos (isso não pode reduzir o dano a menos de 1).",
    classesList: [
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "2"
  },
  {
    id: "32",
    name: "Aura de Pureza",
    school: "abjuração",
    castTime: "1 ação",
    range: "pessoal",
    components: "V",
    duration: "até 10 minutos",
    concentration: true,
    material: "Energia purificante irradia de você em uma aura com 9 metros de raio. Até a magia acabar, a aura se move mantendo-se centrada em você. Todas as criaturas não- hostis na aura (incluindo você) não podem ficar doentes, tem resistência a dano de veneno e tem vantagem em testes de resistência contra efeitos que deixem ela com qualquer das condições a seguir: amedrontado, atordoado, cego, enfeitiçado, envenenado, paralisado e surdo.",
    description: "Energia purificante irradia de você em uma aura com 9 metros de raio. Até a magia acabar, a aura se move mantendo-se centrada em você. Todas as criaturas não- hostis na aura (incluindo você) não podem ficar doentes, tem resistência a dano de veneno e tem vantagem em testes de resistência contra efeitos que deixem ela com qualquer das condições a seguir: amedrontado, atordoado, cego, enfeitiçado, envenenado, paralisado e surdo.",
    classesList: [
      {
        id: "7",
        name: "paladino"
      }
    ],
    "nivel": "4"
  },
  {
    id: "33",
    name: "Aura de Vida",
    school: "abjuração",
    castTime: "1 ação",
    range: "pessoal",
    components: "V",
    duration: "até 10 minutos",
    concentration: true,
    material: "Energia de prevenção vital irradia de você em uma aura com 9 metros de raio. Até a magia acabar, a aura se move mantendo-se centrada em você. Todas as criaturas não- hostis na aura (incluindo você) tem resistência a dano necrótico e seu máximo de pontos de vida não pode ser reduzido. Além disso, uma criatura viva não-hostil, recupera 1 ponto de vida quando começa seu turno na aura com 0 pontos de vida.",
    description: "Energia de prevenção vital irradia de você em uma aura com 9 metros de raio. Até a magia acabar, a aura se move mantendo-se centrada em você. Todas as criaturas não- hostis na aura (incluindo você) tem resistência a dano necrótico e seu máximo de pontos de vida não pode ser reduzido. Além disso, uma criatura viva não-hostil, recupera 1 ponto de vida quando começa seu turno na aura com 0 pontos de vida.",
    classesList: [
      {
        id: "7",
        name: "paladino"
      }
    ],
    "nivel": "4"
  },
  {
    id: "34",
    name: "Aura de Vitalidade",
    school: "evocação",
    castTime: "1 ação",
    range: "pessoal",
    components: "V",
    duration: "até 1 minuto",
    concentration: true,
    material: "Energia curativa irradia de você em uma aura com 9 metros de raio. Até a magia acabar, a aura se move mantendo-se centrada em você. Você pode usar uma ação bônus para fazer com que uma criatura na aura (incluindo você) recupere 2d6 pontos de vida.",
    description: "Energia curativa irradia de você em uma aura com 9 metros de raio. Até a magia acabar, a aura se move mantendo-se centrada em você. Você pode usar uma ação bônus para fazer com que uma criatura na aura (incluindo você) recupere 2d6 pontos de vida.",
    classesList: [
      {
        id: "7",
        name: "paladino"
      }
    ],
    "nivel": "3"
  },
  {
    id: "35",
    name: "Aura Mágica de Nystul",
    school: "ilusão",
    castTime: "1 ação",
    range: "toque",
    components: "V, S, M",
    duration: "24 horas",
    concentration: false,
    material: "Material: um pequeno quadrado de seda.",
    description: "Máscara. Você modifica a forma como o alvo aparece para magias e efeitos que detectam tipos de criaturas, como o Sentido Divino do paladino ou o gatilho de um magia símbolo. Você escolhe o tipo de criatura e outras magias e efeitos mágicos consideram o alvo como se ele fosse uma criatura desse tipo ou tendência.",
    classesList: [
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "2"
  },
  {
    id: "36",
    name: "Aura Sagrada",
    school: "abjuração",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: um minúsculo relicário valendo, no mínimo, 1.000 po, contendo uma relíquia sagrada, como um pedaço de tecido do robe de um santo ou um pedaço de pergaminho de um texto religioso.",
    description: "Luz divina emana de você e adere em uma aureola suave num raio de 9 metros, em volta de você. As criaturas de sua escolha, no raio, quando você conjurar essa magia, emitem penumbra num raio de 1,5 metro e tem vantagem em todos os testes de resistência e as outras criaturas tem desvantagem nas jogadas de ataque contra elas, até a magia acabar. Além disso, quando um corruptor ou morto-vivo atingir uma criatura afetada com um ataque corpo-a-corpo, a aura lampeja com luz plena. O atacante deve ser bem sucedido num teste de resistência de Constituição ou ficara cego até a magia acabar.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      }
    ],
    "nivel": "8"
  },
  {
    id: "37",
    name: "Auxílio Divino",
    school: "evocação",
    castTime: "1 ação bônus",
    range: "pessoal",
    components: "V, S",
    duration: "até 1 minuto",
    concentration: true,
    material: "Sua oração fortalece você com radiação divina. Até o fim da magia, seus ataques com arma causam 1d4 de dano radiante extra ao atingirem.",
    description: "Sua oração fortalece você com radiação divina. Até o fim da magia, seus ataques com arma causam 1d4 de dano radiante extra ao atingirem.",
    classesList: [
      {
        id: "7",
        name: "paladino"
      }
    ],
    "nivel": "1"
  },
  {
    id: "38",
    name: "Banimento",
    school: "abjuração",
    castTime: "1 ação",
    range: "9 metros",
    components: "V, S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: um item desagradável ao alvo.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 5° nível ou superior, você pode afetar uma criatura adicional para cada nível do espaço acima do 4°.",
    classesList: [
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      },
      {
        id: "7",
        name: "paladino"
      }
    ],
    "nivel": "4"
  },
  {
    id: "39",
    name: "Banquete dos Heróis",
    school: "conjuração",
    castTime: "10 minutos",
    range: "9 metros",
    components: "V, S, M",
    duration: "instantânea",
    concentration: false,
    material: "Material: uma tigela encrustada de gemas valendo, no mínimo, 1.000 po, que é consumida pela magia.",
    description: "Uma criatura que participe do banquete ganha diversos benefícios. A criatura é curada de todas as doenças e venenos, torna-se imune a veneno e a ser amedrontada e faz todos os seus testes de resistência com vantagem. Seu máximo de pontos de vida também aumenta em 2d10 e ela ganha a mesma quantidade de pontos de vida. Esses benefícios duram por 24 horas.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "4",
        name: "druida"
      }
    ],
    "nivel": "6"
  },
  {
    id: "40",
    name: "Barreira de Lâminas",
    school: "evocação",
    castTime: "1 ação",
    range: "24 metros",
    components: "V, S",
    duration: "até 10 minutos",
    concentration: true,
    material: "Você cria uma muralha vertical de lâminas giratórias, afiadas como navalhas, feitas de energia mágica. A muralha aparece dentro do alcance e permanece pela duração. Você pode fazer uma muralha reta de até 30 metros de comprimento por 6 metros de altura e 1,5 metro de largura ou uma muralha anelar com até 18 metros de diâmetro, 6 metros de altura e 1,5 metro de largura. A muralha confere três-quartos de cobertura a criaturas atrás dela e seu espaço é terreno difícil.",
    description: "Quando uma criatura entrar a área da muralha pela primeira vez em um turno, ou começar seu turno nela, a criatura deve realizar um teste de resistência de Destreza. Se falhar, a criatura sofrerá 6d10 de dano cortante. Em um sucesso, a criatura sofre metade desse dano.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      }
    ],
    "nivel": "6"
  },
  {
    id: "41",
    name: "Bênção",
    school: "encantamento",
    castTime: "1 ação",
    range: "9 metros",
    components: "V, S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: um borrifo de água benta.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, você pode afetar uma criatura adicional para cada nível do espaço acima do 1°.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "7",
        name: "paladino"
      }
    ],
    "nivel": "1"
  },
  {
    id: "42",
    name: "Boca Encantada",
    school: "ilusão",
    castTime: "1 minuto",
    range: "9 metros",
    components: "V, S, M",
    duration: "até ser dissipada",
    concentration: false,
    material: "Material: um pedaço de favo de mel e pó de jade valendo, no mínimo, 10 po, consumidos pela magia.",
    description: "A circunstância de ativação pode ser tão genérica ou tão detalhada quando você quiser, apesar de ela precisar ser baseada em condições visuais ou audíveis que ocorram a até 9 metros do objeto. Por exemplo, você pode instruir a boca a falar quando uma criatura se aproximar a menos de 9 metros do objeto ou quando um sino de prata tocar a menos de 9 metros dela.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "2"
  },
  {
    id: "43",
    name: "Bola de Fogo",
    school: "evocação",
    castTime: "1 ação",
    range: "45 metros",
    components: "V, S, M",
    duration: "instantânea",
    concentration: false,
    material: "Material: uma minúscula bola de guano de morcego e enxofre.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 3°.",
    classesList: [
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "3"
  },
  {
    id: "44",
    name: "Bola de Fogo Controlável",
    school: "evocação",
    castTime: "1 ação",
    range: "45 metros",
    components: "V, S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: uma minúscula bola de guano de morcego e enxofre.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 8° nível ou superior, o dano base aumenta e 1d6 para cada nível do espaço acima do 7°.",
    classesList: [
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "7"
  },
  {
    id: "45",
    name: "Bom Fruto",
    school: "transmutação",
    castTime: "1 ação",
    range: "toque",
    components: "V, S, M",
    duration: "instantânea",
    concentration: false,
    material: "Material: um raminho de visco.",
    description: "Os frutos perdem seu potencial se não forem consumidos dentro de 24 horas da conjuração dessa magia.",
    classesList: [
      {
        id: "4",
        name: "druida"
      },
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "1"
  },
  {
    id: "46",
    name: "Bordão Místico",
    school: "transmutação",
    castTime: "1 ação bônus",
    range: "toque",
    components: "V, S, M",
    duration: "1 minuto",
    concentration: false,
    material: "Material: visco, uma folha de trevo e uma clava ou bordão.",
    description: "A madeira de uma clava ou bordão, que você esteja segurando, é imbuída com o poder da natureza. Pela duração, você pode usar sua habilidade de conjuração ao invés da sua Força para as jogadas de ataque e dano corpo-a-corpo usando essa arma, e o dado de dano da arma se torna um d8. A arma também se torna mágica, se ela já não for. A magia acaba se você conjura-la novamente ou se você soltar a arma.",
    classesList: [
      {
        id: "4",
        name: "druida"
      }
    ],
    "nivel": "0"
  },
  {
    id: "47",
    name: "Braços de Hadar",
    school: "conjuração",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S",
    duration: "instantânea",
    concentration: false,
    material: "Você invoca o poder de Hadar, o Faminto Sombrio. Tentáculos de energia negra brotam de você e golpeiam todas as criaturas a até 3 metros de você. Cada criatura na área deve realizar um teste de resistência de Força. Se falhar, o alvo sofre 2d6 de dano necrótico e não pode fazer reações até o próximo turno dela. Em um sucesso, uma criatura sofre metade do dano e não sofre qualquer outro efeito.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 1°.",
    classesList: [
      {
        id: "2",
        name: "bruxo"
      }
    ],
    "nivel": "1"
  },
  {
    id: "48",
    name: "Bruxaria",
    school: "encantamento",
    castTime: "1 ação bônus",
    range: "18 metros",
    components: "V, S, M",
    duration: "até 1 hora",
    concentration: true,
    material: "Material: o olho petrificado de um tritão.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 3° ou 4° nível, você poderá manter sua concentração na magia por até 8 horas. Quando você usar um espaço de magia de 5° nível ou superior, você poderá manter sua concentração na magia por até 24 horas.",
    classesList: [
      {
        id: "2",
        name: "bruxo"
      }
    ],
    "nivel": "1"
  },
  {
    id: "49",
    name: "Caminhar Em Árvores",
    school: "conjuração",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S",
    duration: "até 1 minuto",
    concentration: true,
    material: "Você adquire a habilidade de entrar em uma árvore e se mover de dentro dela para dentro de outra árvore de mesmo tipo à até 150 metros. Ambas as árvores devem estar vivas e ter, pelo menos, o mesmo tamanho que você. Você deve usar 1,5 metro de deslocamento para entrar numa árvore. Você, instantaneamente, sabe a localização de todas as outras árvores de mesmo tipo à 150 metros e, como parte do movimento usado para entrar na árvore, pode tanto passar por uma dessas árvores quanto sair da árvore em que você está. Você aparece no espaço que você quiser a 1,5 metro da árvore destino, usando outro movimento de 1,5 metro. Se você não tiver movimento restante, você aparece a 1,5 metro da árvore que você terminou seu movimento.",
    description: "Você pode usar esse habilidade de transporte uma vez por rodada pela duração. Você deve terminar cada turno fora da árvore.",
    classesList: [
      {
        id: "4",
        name: "druida"
      },
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "5"
  },
  {
    id: "50",
    name: "Caminhar No Vento",
    school: "transmutação",
    castTime: "1 minuto",
    range: "9 metros",
    components: "V, S, M",
    duration: "8 horas",
    concentration: false,
    material: "Material: fogo e água benta.",
    description: "Se uma criatura estiver na forma de nuvem e voando quando o efeito acabar, a criatura descerá a 18 metros por rodada por 1 minuto, até aterrissar na solo, o que é feito com segurança. Se ela não puder aterrissar em 1 minuto, a criatura cairá a distância restante.",
    classesList: [
      {
        id: "4",
        name: "druida"
      }
    ],
    "nivel": "6"
  },
  {
    id: "51",
    name: "Campo Antimagia",
    school: "abjuração",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S, M",
    duration: "até 1 hora",
    concentration: true,
    material: "Material: um punhado de pó de ferro ou limalhas de ferro.",
    description: "Dissipar Magia. Magias e efeitos mágicos como dissipar magia, não surtem efeito sob esfera. Da mesma forma, esferas criadas por magias de campo antimagia diferentes não se anulam.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "8"
  },
  {
    id: "52",
    name: "Cão Fiel de Mordenkainen",
    school: "conjuração",
    castTime: "1 ação",
    range: "9 metros",
    components: "V, S, M",
    duration: "8 horas",
    concentration: false,
    material: "Material: um minúsculo apito de prata, um pedaço de osso e um fio.",
    description: "No começo de cada um dos seus turnos, o cão tenta morder uma criatura a 1,5 metro dele que seja hostil a você. O bônus de ataque do cão é igual ao seu modificador de habilidade de conjuração + seu bônus de proficiência. Se atingir, ele causa 4d8 de dano perfurante.",
    classesList: [
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "4"
  },
  {
    id: "53",
    name: "Carne Para Pedra",
    school: "transmutação",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: uma pitada de cal, água e terra.",
    description: "Se você mantiver sua concentração nessa magia durante toda a duração possível, a criatura é transformada em pedra até o efeito ser removido.",
    classesList: [
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "6"
  },
  {
    id: "54",
    name: "Cativar",
    school: "encantamento",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, S",
    duration: "1 minuto",
    concentration: false,
    material: "Você tece um cordão de palavras distrativas, fazendo as criaturas, à sua escolha, que você puder ver dentro do alcance e que puderem ouvir você, realizarem um teste de resistência de Sabedoria. Qualquer criatura que não puder ser enfeitiçada, passa automaticamente nesse teste de resistência e, se você ou seus companheiros estiverem lutando com a criatura, ela terá vantagem na resistência. Se falhar na resistência, a criatura terá desvantagem em testes de Sabedoria (Percepção) feitos para notar qualquer criatura além de você, até a magia acabar ou até o alvo não poder mais ouvir você. A magia acaba se você estiver incapacitado ou incapaz de falar.",
    description: "Você tece um cordão de palavras distrativas, fazendo as criaturas, à sua escolha, que você puder ver dentro do alcance e que puderem ouvir você, realizarem um teste de resistência de Sabedoria. Qualquer criatura que não puder ser enfeitiçada, passa automaticamente nesse teste de resistência e, se você ou seus companheiros estiverem lutando com a criatura, ela terá vantagem na resistência. Se falhar na resistência, a criatura terá desvantagem em testes de Sabedoria (Percepção) feitos para notar qualquer criatura além de você, até a magia acabar ou até o alvo não poder mais ouvir você. A magia acaba se você estiver incapacitado ou incapaz de falar.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "2",
        name: "bruxo"
      }
    ],
    "nivel": "2"
  },
  {
    id: "55",
    name: "Cegueira/Surdez",
    school: "necromancia",
    castTime: "1 ação",
    range: "9 metros",
    components: "V",
    duration: "1 minuto",
    concentration: false,
    material: "Você pode cegar ou ensurdecer um oponente. Escolha uma criatura que você possa ver dentro do alcance para fazer um teste de resistência de Constituição. Se ela falhar, ficará ou cega ou surda (à sua escolha) pela duração. No final de cada um dos turnos dele, o alvo pode realizar um teste de resistência de Constituição. Se obtiver sucesso, a magia termina.",
    description: "Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 3° nível ou superior, você pode afetar uma criatura adicional para cada nível de espaço acima do 2°.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "2"
  },
  {
    id: "56",
    name: "Chama Contínua",
    school: "evocação",
    castTime: "1 ação",
    range: "toque",
    components: "V, S, M",
    duration: "até ser dissipada",
    concentration: false,
    material: "Material: pó de rubi no valor de 50 po, consumido pela magia.",
    description: "Uma chama, que produz iluminação equivalente a uma tocha, surge de um objeto que você tocar. O efeito é parecido com o de uma chama normal, mas ele não produz calor e não consome oxigênio. Uma chama continua pode ser coberta ou escondida, mas não sufocada ou extinta.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "2"
  },
  {
    id: "57",
    name: "Chama Sagrada",
    school: "evocação",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, S",
    duration: "instantânea",
    concentration: false,
    material: "Radiação similar a uma chama desce sobre uma criatura que você possa ver, dentro do alcance. O alvo deve ser bem sucedido num teste de resistência de Destreza ou sofrerá 1d8 de dano radiante. O alvo não recebe qualquer benefício de cobertura contra esse teste de resistência.",
    description: "O dano da magia aumenta em 1d8 quando você alcança o 5° nível (2d8), 11° nível (3d8) e 17° nível (4d8).",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      }
    ],
    "nivel": "0"
  },
  {
    id: "58",
    name: "Chicote de Espinhos",
    school: "transmutação",
    castTime: "1 ação",
    range: "9 metros",
    components: "V, S, M",
    duration: "instantânea",
    concentration: false,
    material: "Material: uma muda de uma planta com espinhos.",
    description: "O dano dessa magia aumenta em 1d6 quando você alcança o 5° nível (2d6), 11° nível (3d6) e 17° nível (4d6).",
    classesList: [
      {
        id: "4",
        name: "druida"
      }
    ],
    "nivel": "0"
  },
  {
    id: "59",
    name: "Chuva de Meteoros",
    school: "evocação",
    castTime: "1 ação",
    range: "1,5 quilômetro",
    components: "V, S",
    duration: "instantânea",
    concentration: false,
    material: "Esferas de fogo incandescentes atingem o solo em quatro pontos diferentes que você possa ver, dentro do alcance. Cada criatura numa esfera de 12 metros de raio, centrada em cada ponto escolhido por você, deve realizar um teste de resistência de Destreza. A esfera se espalha, dobrando esquinas. Uma criatura sofre 20d6 de dano de fogo e 20d6 de dano de concussão se falhar na resistência ou metade desse dano se obtiver sucesso. Uma criatura na área de mais de uma explosão de chamas é afetada apenas uma vez.",
    description: "A magia causa dano aos objetos na área e incendeia objetos inflamáveis que não estejam sendo vestidos ou carregados.",
    classesList: [
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "9"
  },
  {
    id: "60",
    name: "Círculo da Morte",
    school: "necromancia",
    castTime: "1 ação",
    range: "45 metros",
    components: "V, S, M",
    duration: "instantânea",
    concentration: false,
    material: "Material: o pó de uma pérola negra esmagada valendo, no mínimo, 500 po.",
    description: "Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 7° nível ou superior, o dano aumenta em 2d6 para cada nível do espaço acima do 6°.",
    classesList: [
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "6"
  },
  {
    id: "61",
    name: "Círculo de Poder",
    school: "abjuração",
    castTime: "1 ação",
    range: "pessoal",
    components: "V",
    duration: "até 10 minutos",
    concentration: true,
    material: "Energia divina irradia de você, distorcendo e espalhando energia mágica a até 9 metros de você. Até a magia acabar, a esfera se move com você, centrada em você. Pela duração, cada criatura amigável na área (incluindo você) tem vantagem em testes de resistência contra magias e outros efeitos mágicos. Além disso, quando uma criatura afetada for bem sucedida num teste de resistência contra uma magia ou efeito mágico realizado para sofrer apenas metade do dano, ao invés disso, ela não sofrerá dano nenhum se passar na resistência.",
    description: "Energia divina irradia de você, distorcendo e espalhando energia mágica a até 9 metros de você. Até a magia acabar, a esfera se move com você, centrada em você. Pela duração, cada criatura amigável na área (incluindo você) tem vantagem em testes de resistência contra magias e outros efeitos mágicos. Além disso, quando uma criatura afetada for bem sucedida num teste de resistência contra uma magia ou efeito mágico realizado para sofrer apenas metade do dano, ao invés disso, ela não sofrerá dano nenhum se passar na resistência.",
    classesList: [
      {
        id: "7",
        name: "paladino"
      }
    ],
    "nivel": "5"
  },
  {
    id: "62",
    name: "Círculo de Teletransporte",
    school: "conjuração",
    castTime: "1 minuto",
    range: "3 metros",
    components: "V, M",
    duration: "1 rodada",
    concentration: false,
    material: "Material: giz e tintas raros infundidos com pedras preciosas no valor de 50 po, consumidos pela magia.",
    description: "Você pode criar um círculo de teletransporte permanente ao conjurar essa magia no mesmo local a cada dia por um ano. Você não precisa usar o círculo para se teletransportar quando você conjurar a magia desse modo.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "5"
  },
  {
    id: "63",
    name: "Círculo Mágico",
    school: "abjuração",
    castTime: "1 minuto",
    range: "3 metros",
    components: "V, S, M",
    duration: "1 hora",
    concentration: false,
    material: "Material: água benta ou pó de prata e ferro valendo, no mínimo, 100 po, consumidos pela magia.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, a duração aumenta em 1 hora para cada nível do espaço acima do 3°.",
    classesList: [
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "6",
        name: "mago"
      },
      {
        id: "7",
        name: "paladino"
      }
    ],
    "nivel": "3"
  },
  {
    id: "64",
    name: "Clarividência",
    school: "adivinhação",
    castTime: "10 minutos",
    range: "1,5 quilômetro",
    components: "V, S, M",
    duration: "até 10 minutos",
    concentration: true,
    material: "Material: um foco valendo, no mínimo, 100 po, também um chifre cravejado de joias para ouvir ou um olho de vidro para ver.",
    description: "Uma criatura que puder ver o sensor (como uma criatura beneficiada por ver o invisível ou visão verdadeira) vê um globo luminoso e intangível do tamanho do seu olho.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "3"
  },
  {
    id: "65",
    name: "Clone",
    school: "necromancia",
    castTime: "1 hora",
    range: "toque",
    components: "V, S, M",
    duration: "instantânea",
    concentration: false,
    material: "Material: um diamante valendo, no mínimo, 1.000 po e, no mínimo 3 centímetros cúbicos de carne da criatura que será clonada, consumida pela magia, e um receptáculo valendo, no mínimo, 2.000 po que tenha uma tampa selada e seja grande o suficiente para comportar uma criatura Média, como uma urna enorme, um caixão, um cisto cheio de lama no solo ou um recipiente de cristal cheio de água salgada.",
    description: "A qualquer momento, após o clone amadurecer, se a criatura original morrer, sua alma é transferida para o clone, considerando que a alma está livre e deseje retornar. O clone é fisicamente idêntico ao original e tem a mesma personalidade, memórias e habilidades, mas não possui qualquer equipamento do original. O físico da criatura original permanece, se ainda existir, se tornando inerte e não podendo, consequentemente, ser trazido de volta à vida, já que a alma da criatura está em outro lugar.",
    classesList: [
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "8"
  },
  {
    id: "66",
    name: "Coluna de Chamas",
    school: "evocação",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, S, M",
    duration: "instantânea",
    concentration: false,
    material: "Material: uma pitada de enxofre.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 6° nível ou superior, o dano de fogo ou o dano radiante (à sua escolha) aumenta em 1d6 por nível do espaço acima do 5°.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      }
    ],
    "nivel": "5"
  },
  {
    id: "67",
    name: "Comando",
    school: "encantamento",
    castTime: "1 ação",
    range: "18 metros",
    components: "V",
    duration: "1 rodada",
    concentration: false,
    material: "Você pronuncia uma palavra de comando para uma criatura que você possa ver dentro do alcance. O alvo deve ser bem sucedido num teste de resistência de Sabedoria ou seguirá seu comando no próximo turno dele. A magia não tem efeito se o alvo for um morto-vivo, se ele não entender seu idioma ou se o comando for diretamente nocivo a ele.",
    description: "Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 2° nível ou superior, você pode afetar uma criatura adicional para cada nível do espaço acima do 1°. As criaturas devem estar a 9 metros entre si para serem afetadas.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "7",
        name: "paladino"
      }
    ],
    "nivel": "1"
  },
  {
    id: "68",
    name: "Compreender Idiomas",
    school: "adivinhação",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S, M",
    duration: "1 hora",
    concentration: false,
    material: "Material: um pitada de fuligem e sal.",
    description: "Essa magia não decifra mensagens secretas em textos ou glifos, como um selo arcano, que não seja parte de um idioma escrito.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "1"
  },
  {
    id: "69",
    name: "Compulsão",
    school: "encantamento",
    castTime: "1 ação",
    range: "9 metros",
    components: "V, S",
    duration: "até 1 minuto",
    concentration: true,
    material: "Criaturas, à sua escolha, que você puder ver dentro do alcance e que puderem ouvir você, devem realizar um teste de resistência de Sabedoria. Um alvo passa automaticamente nesse teste de resistência se ele não puder ser enfeitiçado. Se falhar no teste, um alvo é afetado por essa magia. Até a magia acabar, você pode usar uma ação bônus em cada um dos seus turnos, para designar uma direção horizontal a você. Cada criatura afetada deve se mover, da melhor forma possível, para essa direção no próximo turno dela. Ela pode realizar sua ação antes de se mover. Depois de se mover dessa forma, ela pode realizar outra resistência de Sabedoria para tentar acabar com o efeito.",
    description: "Um alvo não é obrigado a se mover em direção de um perigo obviamente mortal, como uma fogueira ou abismo, mas ele vai provocar ataques de oportunidade por se mover na direção designada.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      }
    ],
    "nivel": "4"
  },
  {
    id: "70",
    name: "Comunhão",
    school: "adivinhação",
    castTime: "1 minuto",
    range: "pessoal",
    components: "V, S, M",
    duration: "1 minuto",
    concentration: false,
    material: "Material: incenso e um frasco de água benta ou profana.",
    description: "Se você conjurar essa magia duas ou mais vezes antes de terminar um descanso longo, existe uma chance cumulativa de 25 por cento de cada conjuração, depois da primeira que você fez, ter um resultado aleatório. O Mestre faz essa jogada secretamente.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      }
    ],
    "nivel": "5"
  },
  {
    id: "71",
    name: "Comunhão com a Natureza",
    school: "adivinhação",
    castTime: "1 minuto",
    range: "pessoal",
    components: "V, S",
    duration: "instantânea",
    concentration: false,
    material: "Você, momentaneamente, se torna uno com a natureza e ganha conhecimento do território ao seu redor. Ao ar livre, a magia lhe oferece conhecimento do terreno a até 4,5 quilômetros de você. Em cavernas e outros formações subterrâneas naturais, o raio é limitado a 150 metros. A magia não funciona onde a natureza foi substituída por construções, como em masmorras ou cidades.",
    description: "Por exemplo, você poderia determinar a localização de um morto-vivo poderoso na área, a localização da maior fonte de água potável e a localização de quaisquer cidades próximas.",
    classesList: [
      {
        id: "4",
        name: "druida"
      },
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "5"
  },
  {
    id: "72",
    name: "Cone de Frio",
    school: "evocação",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S, M",
    duration: "instantânea",
    concentration: false,
    material: "Material: um pequeno cristal ou cone de vidro.",
    description: "Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 6° nível ou superior, o dano aumenta em 1d8 para cada nível do espaço acima do 5°.",
    classesList: [
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "5"
  },
  {
    id: "73",
    name: "Confusão",
    school: "encantamento",
    castTime: "1 ação",
    range: "27 metros",
    components: "V, S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: três cascas de noz.",
    description: "Um alvo afetado não pode realizar reações e deve rolar um d10 no início de cada um dos seus turnos para determinar seu comportamento nesse turno.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "4"
  },
  {
    id: "74",
    name: "Conhecimento Lendário",
    school: "adivinhação",
    castTime: "10 minutos",
    range: "pessoal",
    components: "V, S, M",
    duration: "instantânea",
    concentration: false,
    material: "Material: incenso valendo, no mínimo, 250 po, consumido pela magia e quatro tiras de marfim valendo, no mínimo, 50 po cada.",
    description: "A informação que você aprende é precisa, mas pode ser redigida em linguagem figurada. Por exemplo, se você possuir um misterioso machado mágico na mão, a magia pode proporcionar essa informação: “Ai do malfeitor cuja mão toca o machado, até mesmo seu cabo corta a mão dos malignos. Só um verdadeiro Filho da Pedra, adorador e adorado de Moradin, pode despertar os verdadeiros poderes do machado e apenas com a palavra sagrada Rudnogg nos lábios.”",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "5"
  },
  {
    id: "75",
    name: "Conjurar Animais",
    school: "conjuração",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, S",
    duration: "até 1 hora",
    concentration: true,
    material: "Você invoca espíritos feéricos, que assumem formas de bestas, que aparecem em espaços desocupados, que você possa ver dentro do alcance. Escolha uma das opções a seguir para aparecer:",
    description: "Em Níveis Superiores. Se você conjurar essa magia usando certos espaços de magia superiores, você escolhe uma das opções de invocação acima e mais criaturas aparecem: o dobro delas com um espaço de 5° nível, o triplo delas com um espaço de 7° nível e o quadruplo delas com um espaço de 9° nível.",
    classesList: [
      {
        id: "4",
        name: "druida"
      },
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "3"
  },
  {
    id: "76",
    name: "Conjurar Celestial",
    school: "conjuração",
    castTime: "1 minuto",
    range: "27 metros",
    components: "V, S",
    duration: "até 1 hora",
    concentration: true,
    material: "Você invoca um celestial de nível de desafio 4 ou inferior, que aparece num espaço desocupado, que você possa ver dentro do alcance. O celestial desaparece se cair a 0 pontos de vida ou quando a magia acabar.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 9° nível, você invoca um celestial de nível de desafio 5 ou inferior.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      }
    ],
    "nivel": "7"
  },
  {
    id: "77",
    name: "Conjurar Elementais Menores",
    school: "conjuração",
    castTime: "1 minuto",
    range: "27 metros",
    components: "V, S",
    duration: "até 1 hora",
    concentration: true,
    material: "Você invoca elementais que aparecem em espaços desocupados, que você possa ver dentro do alcance. Você escolhe uma das opções a seguir para aparecer:",
    description: "Em Níveis Superiores. Se você conjurar essa magia usando certos espaços de magia superiores, você escolhe uma das opções de invocação acima e mais criaturas aparecem: o dobro delas com um espaço de 6° nível e o triplo delas com um espaço de 8° nível.",
    classesList: [
      {
        id: "4",
        name: "druida"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "4"
  },
  {
    id: "78",
    name: "Conjurar Elemental",
    school: "conjuração",
    castTime: "1 minuto",
    range: "27 metros",
    components: "V, S, M",
    duration: "até 1 hora",
    concentration: true,
    material: "Material: incenso aceso para ar, argila mole para terra, enxofre e fósforo para fogo ou água e areia para água.",
    description: "Se sua concentração for interrompida, o elemental não desaparece. Ao invés disso, você perde o controle sobre o elemental e ele se torna hostil a você e aos seus companheiros, e irá atacar. Um elemental fora de controle não pode ser dispensado e desaparece 1 hora depois de você ter o invocado.",
    classesList: [
      {
        id: "4",
        name: "druida"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "5"
  },
  {
    id: "79",
    name: "Conjurar Fada",
    school: "conjuração",
    castTime: "1 minuto",
    range: "27 metros",
    components: "V, S",
    duration: "até 1 hora",
    concentration: true,
    material: "Você invoca uma criatura feérica de nível de desafio 6 ou inferior ou um espírito feérico que assume a forma de uma besta de nível de desafio 6 ou inferior. Ela aparece num espaço desocupado, que você possa ver dentro do alcance. A criatura feérica desaparece se cair a 0 pontos de vida ou quando a magia acabar.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 7° nível ou superior, o nível de desafio aumenta em 1 para cada nível do espaço acima do 6°.",
    classesList: [
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "4",
        name: "druida"
      }
    ],
    "nivel": "6"
  },
  {
    id: "80",
    name: "Conjurar Rajada",
    school: "conjuração",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S, M",
    duration: "instantânea",
    concentration: false,
    material: "Material: uma munição ou arma de arremesso.",
    description: "Você arremessa uma arma não-mágica ou dispara uma munição não-mágica no ar para criar um cone de armas idênticas que se lançam a frente e então desaparecem. Cada criatura num cone de 18 metros, deve ser bem sucedida num teste de resistência de Destreza. Uma criatura sofre 3d8 de dano se falhar na resistência, ou metade desse dano num sucesso. O tipo do dano é o mesmo da arma ou munição usada como componente.",
    classesList: [
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "3"
  },
  {
    id: "81",
    name: "Conjurar Saraivada",
    school: "conjuração",
    castTime: "1 ação",
    range: "45 metros",
    components: "V, S, M",
    duration: "instantânea",
    concentration: false,
    material: "Material: uma munição ou arma de arremesso.",
    description: "Você dispara uma munição não-mágica de uma arma à distância ou arremessa uma arma não-mágica no ar e escolhe um ponto dentro do alcance. Centenas de duplicatas da munição ou arma caem em uma saraivada vinda de cima e então desaparecem. Cada criatura num cilindro com 12 metros de raio e 6 metros de altura centrado no ponto, deve realizar um teste de resistência de Destreza. Uma criatura sofre 8d8 de dano se falhar na resistência, ou metade desse dano num sucesso. O tipo do dano é o mesmo da munição ou arma.",
    classesList: [
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "5"
  },
  {
    id: "82",
    name: "Conjurar Seres da Floresta",
    school: "conjuração",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, S, M",
    duration: "até 1 hora",
    concentration: true,
    material: "Material: um fruto sagrado por criatura invocada.",
    description: "Em Níveis Superiores. Se você conjurar essa magia usando certos espaços de magia superiores, você escolhe uma das opções de invocação acima e mais criaturas aparecem: o dobro delas com um espaço de 6° nível e o triplo delas com um espaço de 8° nível.",
    classesList: [
      {
        id: "4",
        name: "druida"
      },
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "4"
  },
  {
    id: "83",
    name: "Consagrar",
    school: "evocação",
    castTime: "24 horas",
    range: "toque",
    components: "V, S, M",
    duration: "até ser dissipada",
    concentration: false,
    material: "Material: ervas, óleos e incenso valendo, no mínimo, 1.000 po, consumidos pela magia.",
    description: "Vulnerabilidade à Energia. As criaturas afetadas na área tem vulnerabilidade a um tipo de dano, à sua escolha, exceto de concussão, cortante ou perfurante.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      }
    ],
    "nivel": "5"
  },
  {
    id: "84",
    name: "Consertar",
    school: "transmutação",
    castTime: "1 minuto",
    range: "toque",
    components: "V, S, M",
    duration: "instantânea",
    concentration: false,
    material: "Material: dois ímãs.",
    description: "Essa magia pode reparar fisicamente um item mágico ou constructo, mas a magia não irá restaurar a magia em tais objetos.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "0"
  },
  {
    id: "85",
    name: "Constrição",
    school: "conjuração",
    castTime: "1 ação",
    range: "27 metros",
    components: "V, S",
    duration: "até 1 minuto",
    concentration: true,
    material: "Ervas e vinhas poderosas brotam do solo num quadrado de 6 metros a partir de um ponto dentro do alcance. Pela duração, essas plantas transformam o solo na área em terreno difícil.",
    description: "Quando a magia termina, as plantas conjuradas murcharão.",
    classesList: [
      {
        id: "4",
        name: "druida"
      }
    ],
    "nivel": "1"
  },
  {
    id: "86",
    name: "Contato Extraplanar",
    school: "adivinhação",
    castTime: "1 minuto",
    range: "pessoal",
    components: "V",
    duration: "1 minuto",
    concentration: false,
    material: "Você contata mentalmente um semideus, o espírito de um sábio morto há muito tempo ou alguma outra entidade misteriosa de outro plano. Contatar esse extraplanar inteligente pode distorcer ou até mesmo arruinar com sua mente. Quando você conjurar essa magia, faça um teste de resistência de Inteligência CD 15. Se falhar, você sofre 6d6 de dano psíquico e fica insano até terminar um descanso longo. Enquanto estiver insano, você não pode realizar ações, não entende o que as outras criaturas dizem, não pode ler e fala apenas coisas sem sentido. Conjurar a magia restauração maior em você acaba com esse efeito.",
    description: "Se obtiver sucesso no teste de resistência, você pode fazer até cinco perguntas à entidade. Você deve fazer suas perguntas antes da magia acabar. O Mestre responde cada pergunta com uma única palavra, como “sim”, “não”, “talvez”, “nunca”, “irrelevante” ou “incerto” (se a entidade não souber a resposta para a pergunta). Em caso de uma resposta de única palavra puder levar ao engano, o Mestre pode, ao invés disso, oferecer uma frase curta como resposta.",
    classesList: [
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "5"
  },
  {
    id: "87",
    name: "Contingência",
    school: "evocação",
    castTime: "10 minutos",
    range: "pessoal",
    components: "V, S, M",
    duration: "10 dias",
    concentration: false,
    material: "Material: uma estátua sua esculpida em marfim e decorada com gemas valendo, no mínimo, 1.500 po.",
    description: "A magia contingente afeta apenas você, mesmo que ela normalmente possa afetar outros alvos. Você pode ter apenas uma contingência ativa por vez. Se você conjurar essa magia novamente, o efeito da outra magia contingência termina. Além disso, a contingência também termina em você se os componentes materiais dela não estiverem mais com você.",
    classesList: [
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "6"
  },
  {
    id: "88",
    name: "Contramágica",
    school: "abjuração",
    castTime: "1 reação",
    range: "18 metros",
    components: "S",
    duration: "instantânea",
    concentration: false,
    material: "Reação que você realiza quando vê uma criatura a até 18 metros conjurando uma magia.",
    description: "Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 4° nível ou superior, a magia interrompida não vai gerar efeito se o nível dela for menor ou igual ao nível do espaço de magia que você usar.",
    classesList: [
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "3"
  },
  {
    id: "89",
    name: "Controlar a Água",
    school: "transmutação",
    castTime: "1 ação",
    range: "90 metros",
    components: "V, S, M",
    duration: "até 10 minutos",
    concentration: true,
    material: "Material: uma gota de água e uma pitada de poeira.",
    description: "A primeira vez a cada turno que um objeto entrar no vórtice, o objeto sofre 2d8 de dano de concussão; esse dano se repete a cada rodada que ele permanecer no vórtice.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "4"
  },
  {
    id: "90",
    name: "Controlar o Clima",
    school: "transmutação",
    castTime: "10 minutos",
    range: "pessoal",
    components: "V, S, M",
    duration: "até 8 horas",
    concentration: true,
    material: "Material: incenso aceso e pedaços de terra e madeira misturados em água.",
    description: "Quando você altera as condições climáticas, encontre a condição atual nas tabelas a seguir e mude em um estágio, para cima ou para baixo. Quando mudar o vento, você pode mudar a direção do mesmo.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "8"
  },
  {
    id: "91",
    name: "Convocar Familiar",
    school: "conjuração",
    castTime: "1 hora",
    range: "3 metros",
    components: "V, S, M",
    duration: "instantânea",
    concentration: false,
    material: "Material: carvão, incenso e ervas no valor de 10 po, que devem ser consumidos pelo fogo em um braseiro de bronze.",
    description: "Finalmente, quando você conjura uma magia com alcance de toque, seu familiar pode transmitir a magia, como se ele tivesse conjurado ela. Seu familiar precisa estar a até 30 metros de você e deve usar a reação dele para transmitir a magia quando você a conjurar. Se a magia necessitar de uma jogada de ataque, você usa seu modificador de ataque para essa jogada.",
    classesList: [
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "1"
  },
  {
    id: "92",
    name: "Convocar Montaria",
    school: "conjuração",
    castTime: "10 minutos",
    range: "9 metros",
    components: "V, S",
    duration: "instantânea",
    concentration: false,
    material: "Você convoca um espírito que assume a forma de uma montaria excepcionalmente inteligente, forte e leal, criando uma ligação duradoura com ela. Aparecendo em um espaço desocupado dentro do alcance, a montaria adquire a forma que você escolher, como um cavalo de guerra, um pônei, um camelo, um alce ou um mastim. (Seu Mestre pode permitir outros animais para serem convocados como montarias.) A montaria tem as estatísticas da forma escolhida, no entanto, ele é um celestial, corruptor ou fada (à sua escolha) ao invés do seu tipo normal. Além disso, se sua montaria tiver Inteligência 5 ou menor, a Inteligência dela se torna 6 e ela ganha a capacidade de compreender um idioma, à sua escolha, que você fala.",
    description: "Você não pode ter mais de uma montaria ligada por essa magia por vez. Com uma ação, você pode liberar a montaria da ligação a qualquer momento, fazendo-a desaparecer.",
    classesList: [
      {
        id: "7",
        name: "paladino"
      }
    ],
    "nivel": "2"
  },
  {
    id: "93",
    name: "Convocar Relâmpagos",
    school: "conjuração",
    castTime: "1 ação",
    range: "36 metros",
    components: "V, S",
    duration: "até 10 minutos",
    concentration: true,
    material: "Uma nuvem tempestuosa aparece em formato cilíndrico com 3 metros de altura e 18 metros de raio, centrada num ponto que você possa ver, 30 metros acima de você. A magia falha se você não puder ver um ponto no ar em que a nuvem possa aparecer (por exemplo, se você estiver em uma sala que não possa comportar a nuvem).",
    description: "Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o dano aumenta em 1d10 para cada nível do espaço acima do 3°.",
    classesList: [
      {
        id: "4",
        name: "druida"
      }
    ],
    "nivel": "3"
  },
  {
    id: "94",
    name: "Cordão de Flechas",
    school: "transmutação",
    castTime: "1 ação",
    range: "1,5 metro",
    components: "V, S, M",
    duration: "8 horas",
    concentration: false,
    material: "Material: quatro ou mais flechas ou virotes.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, a quantidade de munições que você pode afetar aumenta em dois para cada nível do espaço acima do 2°.",
    classesList: [
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "2"
  },
  {
    id: "95",
    name: "Coroa da Loucura",
    school: "encantamento",
    castTime: "1 ação",
    range: "36 metros",
    components: "V, S",
    duration: "até 1 minuto",
    concentration: true,
    material: "Um humanoide, à sua escolha, que você possa ver dentro do alcance, deve ser bem sucedido num teste de resistência de Sabedoria ou ficará enfeitiçado por você pela duração. Enquanto o alvo estiver enfeitiçado dessa forma, uma coroa retorcida de ferro denteado aparece na cabeça dele e a loucura brilha em seus olhos.",
    description: "Nos seus turnos subsequentes, você deve usar sua ação para manter o controle sobre o alvo, ou a magia termina. Igualmente, o alvo pode realizar um teste de resistência de Sabedoria no final de cada um dos turnos dele. Se obtiver sucesso, a magia termina.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "2"
  },
  {
    id: "96",
    name: "Corrente de Relâmpagos",
    school: "evocação",
    castTime: "1 ação",
    range: "45 metros",
    components: "V, S, M",
    duration: "instantânea",
    concentration: false,
    material: "Material: um pouco de pelo; um pedaço de âmbar, vidro ou um bastão de cristal; e três pinos de prata.",
    description: "Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 7° nível ou superior, um raio adicional salta do alvo primário para outro alvo para cada nível do espaço acima do 6°.",
    classesList: [
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "6"
  },
  {
    id: "97",
    name: "Crescer Espinhos",
    school: "transmutação",
    castTime: "1 ação",
    range: "45 metros",
    components: "V, S, M",
    duration: "até 10 minutos",
    concentration: true,
    material: "Material: sete espinhos afiados ou sete gravetos, todos com uma ponta afiada.",
    description: "A transformação do terreno é camuflada para parecer natural. Qualquer criatura que não puder ver a área no momento que a magia for conjurada, deve realizar um teste de Sabedoria (Percepção) contra a CD da magia para reconhecer o terreno como perigoso, antes de adentra-lo.",
    classesList: [
      {
        id: "4",
        name: "druida"
      },
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "2"
  },
  {
    id: "98",
    name: "Criação",
    school: "ilusão",
    castTime: "1 minuto",
    range: "9 metros",
    components: "V, S, M",
    duration: "especial",
    concentration: false,
    material: "Material: um pequeno pedaço de material do mesmo tipo do item que você planeja criar.",
    description: "A duração depende do material do objeto. Se o objeto for composto por diversos materiais, use o de menor duração.",
    classesList: [
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "5"
  },
  {
    id: "99",
    name: "Criar Alimentos",
    school: "conjuração",
    castTime: "1 ação",
    range: "9 metros",
    components: "V, S",
    duration: "instantânea",
    concentration: false,
    material: "Você cria 25 quilos de comida e 100 litros de água no solo ou em um recipiente dentro do alcance, suficiente para sustentar até quinze humanoide ou cinco montarias por 24 horas. A comida é insossa, porém, nutritiva e estraga se não for consumida após 24 horas. A água é limpa e não fica ruim.",
    description: "Você cria 25 quilos de comida e 100 litros de água no solo ou em um recipiente dentro do alcance, suficiente para sustentar até quinze humanoide ou cinco montarias por 24 horas. A comida é insossa, porém, nutritiva e estraga se não for consumida após 24 horas. A água é limpa e não fica ruim.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "7",
        name: "paladino"
      }
    ],
    "nivel": "3"
  },
  {
    id: "100",
    name: "Criar Chamas",
    school: "conjuração",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S",
    duration: "10 minutos",
    concentration: false,
    material: "Uma chama tremulante aparece na sua mão. A chama permanece ai pela duração e não machuca nem você nem seu equipamento. A chama emite luz plena num raio de 3 metros e penumbra por 3 metros adicionais. A magia acaba se você dissipa-la usando uma ação ou se conjura-la novamente.",
    description: "O dano dessa magia aumenta em 1d8 quando você alcança o 5° nível (2d8), 11° nível (3d8) e 17° nível (4d8).",
    classesList: [
      {
        id: "4",
        name: "druida"
      }
    ],
    "nivel": "0"
  },
  {
    id: "101",
    name: "Criar Mortos-Vivos",
    school: "necromancia",
    castTime: "1 minuto",
    range: "3 metros",
    components: "V, S, M",
    duration: "instantânea",
    concentration: false,
    material: "Material: um pote de barro cheio de terra de sepultura, um pote de barro cheio de água salobra, e uma ônix negra no valor de 150 po, para cada corpo.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 7° nível, você pode animar ou recuperar o controle de quatro carniçais. Quando você conjura essa magia usando um espaço de magia de 8° nível, você pode animar ou recuperar o controle de cinco carniçais ou dois lívidos ou aparições. Quando você conjurar essa magia usando um espaço de magia de 9° nível, você pode animar ou recuperar o controle de seis carniçais, três lívidos ou aparições ou duas múmias.",
    classesList: [
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "6"
  },
  {
    id: "102",
    name: "Criar ou Destruir Água",
    school: "transmutação",
    castTime: "1 ação",
    range: "9 metros",
    components: "V, S, M",
    duration: "instantânea",
    concentration: false,
    material: "Material: uma gota de água se estiver criando ou alguns grãos de areia se estiver destruindo.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, você pode criar ou destruir 30 litros de água adicionais, ou o tamanho do cubo aumenta em 1,5 metro, para cada nível do espaço acima do 1°.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "4",
        name: "druida"
      }
    ],
    "nivel": "1"
  },
  {
    id: "103",
    name: "Criar Passagem",
    school: "transmutação",
    castTime: "1 ação",
    range: "9 metros",
    components: "V, S, M",
    duration: "1 hora",
    concentration: false,
    material: "Material: algumas sementes de gergelim.",
    description: "Quando a abertura desaparecer, qualquer criatura ou objeto que ainda estiver dentro da passagem criada pela magia é ejetada em segurança para o espaço desocupado mais próximo da superfície onde a magia foi conjurada.",
    classesList: [
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "5"
  },
  {
    id: "104",
    name: "Cúpula Antivida",
    school: "abjuração",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S",
    duration: "até 1 hora",
    concentration: true,
    material: "Uma barreira cintilante se estende de você até 3 metros de raio, e se move com você, permanecendo centrada em você e restringindo criaturas diferentes de mortos-vivos e constructos. A barreira mantem-se pela duração.",
    description: "Se você se mover forçando uma criatura afetada a atravessar a barreira, a magia termina.",
    classesList: [],
    "nivel": "5"
  },
  {
    id: "105",
    name: "Cura Completa",
    school: "evocação",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, S",
    duration: "instantânea",
    concentration: false,
    material: "Escolha uma criatura que você possa ver, dentro do alcance. Um surto de energia positiva banha a criatura, fazendo-a recuperar 70 pontos de vida. Essa magia também acaba com efeitos de cegueira, surdez e qualquer doença que estejam afetando o alvo. Essa magia não tem efeito em constructos ou mortos-vivos.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 7° nível ou superior, a quantidade de cura aumenta em 10 para cada nível do espaço acima do 6°.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "4",
        name: "druida"
      }
    ],
    "nivel": "6"
  },
  {
    id: "106",
    name: "Cura Completa Em Massa",
    school: "evocação",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, S",
    duration: "instantânea",
    concentration: false,
    material: "Uma inundação de energia curativa emerge de você para as criaturas feridas ao seu redor. Você restaura até 700 pontos de vida, divididos, à sua escolha, entre qualquer quantidade de criaturas que você possa ver, dentro do alcance. As criaturas curadas por essa magia também são curadas de todas as doenças e qualquer efeito que as deixou cegas ou surdas. Essa magia não afeta mortos- vivos ou constructos.",
    description: "Uma inundação de energia curativa emerge de você para as criaturas feridas ao seu redor. Você restaura até 700 pontos de vida, divididos, à sua escolha, entre qualquer quantidade de criaturas que você possa ver, dentro do alcance. As criaturas curadas por essa magia também são curadas de todas as doenças e qualquer efeito que as deixou cegas ou surdas. Essa magia não afeta mortos- vivos ou constructos.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      }
    ],
    "nivel": "9"
  },
  {
    id: "107",
    name: "Curar Ferimentos",
    school: "evocação",
    castTime: "1 ação",
    range: "toque",
    components: "V, S",
    duration: "instantânea",
    concentration: false,
    material: "Uma criatura que você tocar recupera uma quantidade de pontos de vida igual a 1d8 + seu modificador de habilidade de conjuração. Essa magia não produz efeito em mortos-vivos ou constructos.",
    description: "Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 2° nível ou superior, a cura aumenta em 1d8 para cada nível do espaço acima do 1°.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "7",
        name: "paladino"
      },
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "1"
  },
  {
    id: "108",
    name: "Curar Ferimentos Em Massa",
    school: "evocação",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, S",
    duration: "instantânea",
    concentration: false,
    material: "Uma onda de energia curativa emerge de um ponto, à sua escolha, dentro do alcance. Escolha até seis criaturas numa esfera de 9 metros de raio, centrada nesse ponto. Cada alvo recupera uma quantidade de pontos de vida igual a 3d8 + seu modificador de habilidade de conjuração. A magia não afeta mortos-vivos ou constructos.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 6° nível ou superior, a cura aumenta em 1d8 para cada nível do espaço acima do 5°.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "4",
        name: "druida"
      }
    ],
    "nivel": "5"
  },
  {
    id: "109",
    name: "Dança Irresistível de Otto",
    school: "encantamento",
    castTime: "1 ação",
    range: "9 metros",
    components: "V",
    duration: "até 1 minuto",
    concentration: true,
    material: "Escolha uma criatura que você possa ver, dentro do alcance. O alvo começa a dançar comicamente no lugar: rodopiando, batendo os pés e saltitando pela duração. As criaturas que não podem ser enfeitiçadas são imunes a essa magia.",
    description: "Uma criatura dançando deve usar todo o seu movimento para dançar sem abandonar seu espaço e tem desvantagem nos testes de resistência de Destreza e nas jogadas de ataque. Enquanto o alvo estiver sob efeito dessa magia, as outras criaturas terão vantagem nas jogadas de ataque contra ele. Com uma ação, uma criatura dançando pode realizar um teste de resistência de Sabedoria para recuperar controle sobre si mesmo. Num sucesso na resistência, a magia acaba.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "6"
  },
  {
    id: "110",
    name: "Dedo da Morte",
    school: "necromancia",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, S",
    duration: "instantânea",
    concentration: false,
    material: "Você envia energia negativa na direção de uma criatura que você possa ver, dentro do alcance, causando dores severas nela. O alvo deve realizar um teste de resistência de Constituição. Ele sofre 7d8 + 30 de dano necrótico se falhar na resistência, ou metade desse dano se obtiver sucesso.",
    description: "Um humanoide morto por essa magia, se ergue no início do seu próximo turno como um zumbi que está permanentemente sob seu controle, seguindo suas ordens verbais da melhor forma possível.",
    classesList: [
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "7"
  },
  {
    id: "111",
    name: "Desejo",
    school: "conjuração",
    castTime: "1 ação",
    range: "pessoal",
    components: "V",
    duration: "instantânea",
    concentration: false,
    material: "Desejo é a magia mais poderosa que uma criatura mortal pode conjurar. Apenas ao falar em voz alta, você pode alterar os próprios fundamentos da realidade, de acordo com seus desejos.",
    description: "O estresse da conjuração dessa magia para produzir qualquer efeito diferente de copiar outra magia enfraquece você. Após enfrentar esse estresse, a cada vez que você conjurar uma magia, antes de terminar um descanso longo, você sofrerá 1d10 de dano necrótico por nível da magia. Esse dano não pode ser reduzido ou prevenido de forma alguma. Além disso, sua Força cai para 3, se ela já não for 3 ou inferior, por 2d4 dias. Para cada dia desses que você permanecer descansando e não fizer nada além de atividades leves, seu tempo de recuperação é reduzido em 2 dias. Finalmente, existe 33 por cento de chance de você se tornar incapaz de conjurar desejo novamente se você sofrer esse estresse.",
    classesList: [
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "9"
  },
  {
    id: "112",
    name: "Desintegrar",
    school: "transmutação",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, S, M",
    duration: "instantânea",
    concentration: false,
    material: "Material: um ímã e uma pitada de poeira.",
    description: "Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 7° nível ou superior, o dano aumenta em 3d6 para cada nível do espaço acima do 6°.",
    classesList: [
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "6"
  },
  {
    id: "113",
    name: "Despedaçar",
    school: "evocação",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, S, M",
    duration: "instantânea",
    concentration: false,
    material: "Material: uma lasca de mica.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, o dano aumenta em 1d8 para cada nível do espaço acima do 2°.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "2"
  },
  {
    id: "114",
    name: "Despertar",
    school: "transmutação",
    castTime: "8 horas",
    range: "toque",
    components: "V, S, M",
    duration: "instantânea",
    concentration: false,
    material: "Material: uma ágata valendo, no mínimo, 1.000 po que será consumida pela magia.",
    description: "A besta ou planta desperta estará enfeitiçada por você por 30 dias ou até você ou seus companheiros fazerem qualquer coisa nociva contra ela. Quando a condição enfeitiçado terminar, a criatura desperta pode escolher permanecer amigável a você, baseado em como ela foi tratada enquanto estava enfeitiçada.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "4",
        name: "druida"
      }
    ],
    "nivel": "5"
  },
  {
    id: "115",
    name: "Despistar",
    school: "ilusão",
    castTime: "1 ação",
    range: "pessoal",
    components: "S",
    duration: "até 1 hora",
    concentration: true,
    material: "Você fica invisível ao mesmo tempo que uma cópia ilusória sua aparece onde você estava. A cópia permanece pela duração, mas a invisibilidade acaba se você atacar ou conjurar uma magia.",
    description: "Você pode usar sua ação para mover a cópia ilusória até o dobro do seu deslocamento e fazê-la gesticular, falar e se comportar da forma que você quiser. Você pode ver através dos olhos e ouvir através dos ouvidos da cópia como se você estivesse localizado onde ela está. Em cada um dos seus turnos, com uma ação bônus, você pode trocar o uso dos sentidos dela pelo seu ou voltar novamente. Enquanto você está usando os sentidos dela, você fica cego e surdo ao que está a sua volta.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "5"
  },
  {
    id: "116",
    name: "Destruição Banidora",
    school: "abjuração",
    castTime: "1 ação bônus",
    range: "pessoal",
    components: "V",
    duration: "até 1 minuto",
    concentration: true,
    material: "Da próxima vez que você atingir uma criatura com um ataque com arma, antes do fim da magia, seu ataque crepita com energia e o ataque causa 5d6 de dano de energia extra ao alvo. Além disso, se esse ataque reduzir o alvo a 50 pontos de vida ou menos, você a bane. Se o alvo for nativo de um plano de existência diferente do que você está, o alvo desaparece, retornando ao seu plano natal. Se o alvo for nativo do plano que você está, a criatura é enviada para um semiplano inofensivo. Enquanto estiver lá, a criatura estará incapacitada. Ela permanece lá até a magia acabar, a partir desse ponto, o alvo reaparece no espaço em que ela deixou ou no espaço desocupado mais próximo, se o espaço dela estiver ocupado.",
    description: "Da próxima vez que você atingir uma criatura com um ataque com arma, antes do fim da magia, seu ataque crepita com energia e o ataque causa 5d6 de dano de energia extra ao alvo. Além disso, se esse ataque reduzir o alvo a 50 pontos de vida ou menos, você a bane. Se o alvo for nativo de um plano de existência diferente do que você está, o alvo desaparece, retornando ao seu plano natal. Se o alvo for nativo do plano que você está, a criatura é enviada para um semiplano inofensivo. Enquanto estiver lá, a criatura estará incapacitada. Ela permanece lá até a magia acabar, a partir desse ponto, o alvo reaparece no espaço em que ela deixou ou no espaço desocupado mais próximo, se o espaço dela estiver ocupado.",
    classesList: [
      {
        id: "7",
        name: "paladino"
      }
    ],
    "nivel": "5"
  },
  {
    id: "117",
    name: "Destruição Cegante",
    school: "evocação",
    castTime: "1 ação bônus",
    range: "pessoal",
    components: "V",
    duration: "até 1 minuto",
    concentration: true,
    material: "Da próxima vez que você atingir uma criatura com um ataque com arma, antes do fim da magia, sua arma emite uma luz intensa, e o ataque causa 3d8 de dano radiante extra ao alvo. Além disso, o alvo deve ser bem sucedido num teste de resistência de Constituição ou ficará cego até a magia acabar.",
    description: "Uma criatura cega por essa magia realiza outro teste de resistência de Constituição no final de cada um dos turnos dela. Se obtiver sucesso, não estará mais cega.",
    classesList: [
      {
        id: "7",
        name: "paladino"
      }
    ],
    "nivel": "3"
  },
  {
    id: "118",
    name: "Destruição Colérica",
    school: "evocação",
    castTime: "1 ação bônus",
    range: "pessoal",
    components: "V",
    duration: "até 1 minuto",
    concentration: true,
    material: "Da próxima vez que você atingir com um ataque corpo-a- corpo com arma enquanto essa magia durar, seu ataque causará 1d6 de dano psíquico extra. Além disso, se o alvo for uma criatura, ele deve realizar um teste de resistência de Sabedoria ou ficará amedrontado por você até a magia acabar. Com uma ação, a criatura pode realizar um teste de resistência de Sabedoria contra a CD da magia para se manter resoluto e terminar a magia.",
    description: "Da próxima vez que você atingir com um ataque corpo-a- corpo com arma enquanto essa magia durar, seu ataque causará 1d6 de dano psíquico extra. Além disso, se o alvo for uma criatura, ele deve realizar um teste de resistência de Sabedoria ou ficará amedrontado por você até a magia acabar. Com uma ação, a criatura pode realizar um teste de resistência de Sabedoria contra a CD da magia para se manter resoluto e terminar a magia.",
    classesList: [
      {
        id: "7",
        name: "paladino"
      }
    ],
    "nivel": "1"
  },
  {
    id: "119",
    name: "Destruição Estonteante",
    school: "evocação",
    castTime: "1 ação bônus",
    range: "pessoal",
    components: "V",
    duration: "até 1 minuto",
    concentration: true,
    material: "Da próxima vez que você atingir uma criatura com um ataque corpo-a-corpo com arma, antes do fim da magia, sua arma penetra tanto no corpo quanto na mente e o ataque causa 4d6 de dano psíquico adicional ao alvo. O alvo deve realizar um teste de resistência de Sabedoria. Se falhar na resistência, ele terá desvantagem nas jogadas de ataque e testes de habilidade e não poderá efetuar reações até o final do próximo turno dele.",
    description: "Da próxima vez que você atingir uma criatura com um ataque corpo-a-corpo com arma, antes do fim da magia, sua arma penetra tanto no corpo quanto na mente e o ataque causa 4d6 de dano psíquico adicional ao alvo. O alvo deve realizar um teste de resistência de Sabedoria. Se falhar na resistência, ele terá desvantagem nas jogadas de ataque e testes de habilidade e não poderá efetuar reações até o final do próximo turno dele.",
    classesList: [
      {
        id: "7",
        name: "paladino"
      }
    ],
    "nivel": "4"
  },
  {
    id: "120",
    name: "Destruição Lancinante",
    school: "evocação",
    castTime: "1 ação bônus",
    range: "pessoal",
    components: "V",
    duration: "até 1 minuto",
    concentration: true,
    material: "Da próxima vez que você atingir uma criatura com um ataque corpo-a-corpo com arma enquanto essa magia durar, sua arma flameja com intensas chamas brancas e o ataque causa 1d6 de dano de fogo extra ao alvo, fazendo-o incendiar pelas chamas. No início de cada turno dele, até a arma acabar, o alvo deve realizar um teste de resistência de Constituição. Se falhar na resistência, ele sofre 1d6 de dano de fogo. Se passar na resistência, a magia acaba. Se o alvo ou uma criatura a 1,5 metro dele usar uma ação para apagar as chamas ou se algum outro efeito extinguir as chamas (como submergir o alvo em água), a magia acaba.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o dano extra inicial causado por esse ataque aumenta em 1d6 para cada nível do espaço acima do 1°.",
    classesList: [
      {
        id: "7",
        name: "paladino"
      }
    ],
    "nivel": "1"
  },
  {
    id: "121",
    name: "Destruição Trovejante",
    school: "evocação",
    castTime: "1 ação bônus",
    range: "pessoal",
    components: "V",
    duration: "até 1 minuto",
    concentration: true,
    material: "Da primeira vez que você atingir um ataque corpo-a-corpo com arma enquanto essa magia durar, sua arma é rodeada por trovões que são audíveis a até 90 metros de você e o ataque causa 2d6 de dano trovejante extra no alvo. Além disso, se o alvo for uma criatura, ele deve ser bem sucedido num teste de resistência de Força ou será empurrado 3 metros para longe de você e cairá no chão.",
    description: "Da primeira vez que você atingir um ataque corpo-a-corpo com arma enquanto essa magia durar, sua arma é rodeada por trovões que são audíveis a até 90 metros de você e o ataque causa 2d6 de dano trovejante extra no alvo. Além disso, se o alvo for uma criatura, ele deve ser bem sucedido num teste de resistência de Força ou será empurrado 3 metros para longe de você e cairá no chão.",
    classesList: [
      {
        id: "7",
        name: "paladino"
      }
    ],
    "nivel": "1"
  },
  {
    id: "122",
    name: "Detectar Magia",
    school: "adivinhação",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S",
    duration: "até 10 minutos",
    concentration: true,
    material: "Pela duração, você sente a presença de magia a até 9 metros de você. Se você sentir magia dessa forma, você pode usar sua ação para ver uma aura suave em volta de qualquer criatura ou objeto visível, na área que carrega magia, e você descobre a escolha de magia, se houver uma.",
    description: "A magia pode penetrar a maioria das barreiras, mas é bloqueada por 30 centímetros de rocha, 2,5 centímetros de metal comum, uma fina camada de chumbo, ou 90 centímetros de madeira ou terra.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      },
      {
        id: "7",
        name: "paladino"
      },
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "1"
  },
  {
    id: "123",
    name: "Detectar o Bem e Mal",
    school: "adivinhação",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S",
    duration: "até 10 minutos",
    concentration: true,
    material: "Pela duração, você sabe se existe uma aberração, celestial, corruptor, elemental, fada ou morto-vivo, a até 9 metros de você, assim como onde a criatura está localizada. Similarmente, você sabe se existe um local ou objeto, a até 9 metros de você, que tenha sido consagrado ou profanado magicamente.",
    description: "A magia pode penetrar a maioria das barreiras, mas é bloqueada por 30 centímetros de rocha, 2,5 centímetros de metal comum, uma fina camada de chumbo, ou 90 centímetros de madeira ou terra.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "7",
        name: "paladino"
      }
    ],
    "nivel": "1"
  },
  {
    id: "124",
    name: "Detectar Pensamentos",
    school: "adivinhação",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: um pedaço de cobre.",
    description: "Uma vez que você tenha detectado a presença de uma criatura dessa forma, você pode ler os pensamentos dela pelo resto da duração, como descrito acima, mesmo que você não possa vê-la, mas ela ainda precisa estar dentro do alcance.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "2"
  },
  {
    id: "125",
    name: "Detectar Veneno e Doença",
    school: "adivinhação",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S, M",
    duration: "até 10 minutos",
    concentration: true,
    material: "Material: uma folha de teixo.",
    description: "A magia pode penetrar a maioria das barreiras, mas é bloqueada por 30 centímetros de rocha, 2,5 centímetros de metal comum, uma fina camada de chumbo, ou 90 centímetros de madeira ou terra.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "7",
        name: "paladino"
      },
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "1"
  },
  {
    id: "126",
    name: "Dificultar Detecção",
    school: "abjuração",
    castTime: "1 ação",
    range: "toque",
    components: "V, S, M",
    duration: "8 horas",
    concentration: false,
    material: "Material: um pouco de pó de diamante valendo 25 po polvilhado sobre o alvo, consumido pela magia.",
    description: "Pela duração, você esconde um alvo que você tocar de magias de adivinhação. O alvo pode ser uma criatura voluntária, um local ou um objeto com não mais de 3 metros em qualquer dimensão. O alvo não pode ser alvo de magias de adivinhação ou percebido através de sensores mágicos de vidência.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "6",
        name: "mago"
      },
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "3"
  },
  {
    id: "127",
    name: "Disco Flutuante de Tenser",
    school: "conjuração",
    castTime: "1 ação",
    range: "9 metros",
    components: "V, S, M",
    duration: "1 hora",
    concentration: false,
    material: "Material: uma gota de mercúrio.",
    description: "Se você se afastar mais de 30 metros do disco (tipicamente por ele não poder rodear um obstáculo para seguir você), a magia acaba.",
    classesList: [
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "1"
  },
  {
    id: "128",
    name: "Disfarçar-se",
    school: "ilusão",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S",
    duration: "1 hora",
    concentration: false,
    material: "Você faz com que você mesmo – incluindo suas roupas, armadura, armas e outros pertences no seu personagem – pareça diferente até a magia acabar ou até você usar sua ação para dispensa-la. Você pode se parecer 30 centímetros mais baixo ou mais alto, e pode parecer magro, gordo ou entre ambos. Você não pode mudar o tipo do seu corpo, portanto, você deve adotar uma forma que tenha a mesma disposição básica de membros. No mais, a extensão da sua ilusão cabe a você.",
    description: "Para perceber que você está disfarçado, uma criatura pode usar a ação dela para inspecionar sua aparência e deve ser bem sucedida em um teste de Inteligência (Investigação) contra a CD da sua magia.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "1"
  },
  {
    id: "129",
    name: "Dissipar Magia",
    school: "abjuração",
    castTime: "1 ação",
    range: "36 metros",
    components: "V, S",
    duration: "instantânea",
    concentration: false,
    material: "Escolha uma criatura, objeto ou efeito mágico dentro do alcance. Qualquer magia de 3° nível ou inferior no alvo, termina. Para cada magia de 4° nível ou superior no alvo, realize um teste de habilidade usando sua habilidade de conjuração. A CD é igual a 10 + o nível da magia. Se obtiver sucesso, a magia termina.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, você dissipa automaticamente os efeitos de magias no alvo se o nível da magia for igual ou inferior ao nível do espaço de magia que você usar.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      },
      {
        id: "7",
        name: "paladino"
      }
    ],
    "nivel": "3"
  },
  {
    id: "130",
    name: "Dissipar o Bem e Mal",
    school: "abjuração",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: água benta ou pó de prata e ferro.",
    description: "Demissão. Com sua ação, faça um ataque corpo-a- corpo com magia contra um celestial, corruptor, elemental, fada ou morto-vivo que você possa alcançar. Se atingir, você pode tentar guiar a criatura de volta ao seu plano natal. A criatura deve ser bem sucedida num teste de resistência de Carisma ou será enviada de volta ao seu plano natal (se já não for aqui). Se elas não estiverem em seus planos de origem, mortos-vivos serão enviados para Umbra e fadas serão enviadas para Faéria.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "7",
        name: "paladino"
      }
    ],
    "nivel": "5"
  },
  {
    id: "131",
    name: "Doença Plena",
    school: "necromancia",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, S",
    duration: "instantânea",
    concentration: false,
    material: "Você introduz uma doença virulenta em uma criatura que você puder ver, dentro do alcance. O alvo deve realizar um teste de resistência de Constituição. Se falhar na resistência, ele sofre 14d6 de dano necrótico ou metade desse dano se obtiver sucesso na resistência. O dano não pode reduzir os pontos de vida do alvo abaixo de 1. Se o alvo falhar no teste de resistência, seu máximo de pontos de vida é reduzidos por 1 hora em uma quantidade igual ao dano necrótico causado. Qualquer efeito que remova uma doença permitirá que o máximo de pontos de vida do alvo volte ao normal antes do período indicado.",
    description: "Você introduz uma doença virulenta em uma criatura que você puder ver, dentro do alcance. O alvo deve realizar um teste de resistência de Constituição. Se falhar na resistência, ele sofre 14d6 de dano necrótico ou metade desse dano se obtiver sucesso na resistência. O dano não pode reduzir os pontos de vida do alvo abaixo de 1. Se o alvo falhar no teste de resistência, seu máximo de pontos de vida é reduzidos por 1 hora em uma quantidade igual ao dano necrótico causado. Qualquer efeito que remova uma doença permitirá que o máximo de pontos de vida do alvo volte ao normal antes do período indicado.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      }
    ],
    "nivel": "6"
  },
  {
    id: "132",
    name: "Dominar Besta",
    school: "encantamento",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, S",
    duration: "até 1 minuto",
    concentration: true,
    material: "Você tenta seduzir uma besta que você possa ver dentro do alcance. Ela deve ser bem sucedida num teste de resistência de Sabedoria ou ficará enfeitiçada por você pela duração. Se você ou criaturas amigáveis a você estiverem lutando com ela, ela terá vantagem no teste de resistência.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 5° nível, a duração será concentração, até 10 minutos. Quando você usar um espaço de magia de 6° nível, a duração será concentração, até 1 hora. Quando você usar um espaço de magia de 7° nível, a duração será concentração, até 8 horas.",
    classesList: [
      {
        id: "4",
        name: "druida"
      },
      {
        id: "5",
        name: "feiticeiro"
      }
    ],
    "nivel": "4"
  },
  {
    id: "133",
    name: "Dominar Monstro",
    school: "encantamento",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, S",
    duration: "até 1 hora",
    concentration: true,
    material: "Você tenta seduzir uma criatura que você possa ver dentro do alcance. Ela deve ser bem sucedida num teste de resistência de Sabedoria ou ficará enfeitiçada por você pela duração. Se você ou criaturas amigáveis a você estiverem lutando com ela, ela terá vantagem no teste de resistência.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 9° nível, a duração será concentração, até 8 horas.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "8"
  },
  {
    id: "134",
    name: "Dominar Pessoa",
    school: "encantamento",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, S",
    duration: "até 1 minuto",
    concentration: true,
    material: "Você tenta seduzir um humanoide que você possa ver dentro do alcance. Ele deve ser bem sucedido num teste de resistência de Sabedoria ou ficará enfeitiçado por você pela duração. Se você ou criaturas amigáveis a você estiverem lutando com ele, ele terá vantagem no teste de resistência.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 6° nível, a duração será concentração, até 10 minutos. Quando você usar um espaço de magia de 7° nível, a duração será concentração, até 1 hora. Quando você usar um espaço de magia de 8° nível, a duração será concentração, até 8 horas.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "5"
  },
  {
    id: "135",
    name: "Druidismo",
    school: "transmutação",
    castTime: "1 ação",
    range: "9 metros",
    components: "V, S",
    duration: "instantânea",
    concentration: false,
    material: "Sussurrando para os espíritos da natureza, você cria um dos seguintes efeitos, dentro do alcance:",
    description: "Sussurrando para os espíritos da natureza, você cria um dos seguintes efeitos, dentro do alcance:",
    classesList: [
      {
        id: "4",
        name: "druida"
      }
    ],
    "nivel": "0"
  },
  {
    id: "136",
    name: "Duelo Compelido",
    school: "encantamento",
    castTime: "1 ação bônus",
    range: "9 metros",
    components: "V",
    duration: "até 1 minuto",
    concentration: true,
    material: "Você tenta compelir uma criatura a duelar com você. Uma criatura que você possa ver, dentro do alcance, deve realizar um teste de resistência de Sabedoria. Se falhar, a criatura é atraída por você, compelida pela sua exigência divina. Pela duração, ela tem desvantagem nas jogadas de ataque contra criaturas diferentes de você e deve realizar um teste de resistência de Sabedoria cada vez que tentar se mover para um espaço que esteja a mais de 9 metros de você; se ela passar no teste de resistência, essa magia não restringirá o movimento do alvo nesse turno.",
    description: "A magia termina se você atacar qualquer outra criatura, se você conjurar uma magia que afete uma criatura hostil diferente do alvo, se uma criatura amigável a você causar dano ou conjurar uma magia nociva nele ou se você terminar seu turno a mais de 9 metros do alvo.",
    classesList: [
      {
        id: "7",
        name: "paladino"
      }
    ],
    "nivel": "1"
  },
  {
    id: "137",
    name: "Encarnação Fantasmagórica",
    school: "ilusão",
    castTime: "1 ação",
    range: "36 metros",
    components: "V, S",
    duration: "até 1 minuto",
    concentration: true,
    material: "Baseado nos mais profundos medos de um grupo de criaturas, você cria criaturas ilusórias nas mentes delas, visíveis apenas por elas. Cada criatura numa esfera com 9 metros de raio centrada num ponto, à sua escolha, dentro do alcance, deve realizar um teste de resistência de Sabedoria. Se falhar na resistência, uma criatura ficará amedrontada pela duração. A ilusão invoca os medos mais profundos da criatura, manifestando seus piores pesadelos como uma ameaça implacável. No final de cada turno da criatura amedrontada, ela deve ser bem sucedida num teste de resistência de Sabedoria ou sofrerá 4d10 de dano psíquico. Se obtiver sucesso na resistência, a magia termina para essa criatura.",
    description: "Baseado nos mais profundos medos de um grupo de criaturas, você cria criaturas ilusórias nas mentes delas, visíveis apenas por elas. Cada criatura numa esfera com 9 metros de raio centrada num ponto, à sua escolha, dentro do alcance, deve realizar um teste de resistência de Sabedoria. Se falhar na resistência, uma criatura ficará amedrontada pela duração. A ilusão invoca os medos mais profundos da criatura, manifestando seus piores pesadelos como uma ameaça implacável. No final de cada turno da criatura amedrontada, ela deve ser bem sucedida num teste de resistência de Sabedoria ou sofrerá 4d10 de dano psíquico. Se obtiver sucesso na resistência, a magia termina para essa criatura.",
    classesList: [
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "9"
  },
  {
    id: "138",
    name: "Encontrar Armadilhas",
    school: "adivinhação",
    castTime: "1 ação",
    range: "36 metros",
    components: "V, S",
    duration: "instantânea",
    concentration: false,
    material: "Você sente a presença de qualquer armadilha dentro do alcance a qual você tenha linha de visão. Uma armadilha, para os propósitos dessa magia, inclui qualquer coisa que possa causar um efeito repentino ou inesperado em você, considerado nocivo ou indesejável, que foi especificamente planejado para ser por seu criador. Portanto, a magia sentirá a área afetada pela magia alarme, um glifo de vigilância ou uma armadilha mecânica de fosso, mas ela não revelará uma fragilidade natural no piso, um teto instável ou um sumidouro escondido. Essa magia apenas revela que existe uma magia presente. Você não descobre a localização de cada armadilha, mas você também descobre a natureza genérica do perigo representando pela armadilha que você sentiu.",
    description: "Você sente a presença de qualquer armadilha dentro do alcance a qual você tenha linha de visão. Uma armadilha, para os propósitos dessa magia, inclui qualquer coisa que possa causar um efeito repentino ou inesperado em você, considerado nocivo ou indesejável, que foi especificamente planejado para ser por seu criador. Portanto, a magia sentirá a área afetada pela magia alarme, um glifo de vigilância ou uma armadilha mecânica de fosso, mas ela não revelará uma fragilidade natural no piso, um teto instável ou um sumidouro escondido. Essa magia apenas revela que existe uma magia presente. Você não descobre a localização de cada armadilha, mas você também descobre a natureza genérica do perigo representando pela armadilha que você sentiu.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "2"
  },
  {
    id: "139",
    name: "Encontrar o Caminho",
    school: "adivinhação",
    castTime: "1 minuto",
    range: "pessoal",
    components: "V, S, M",
    duration: "até 1 dia",
    concentration: true,
    material: "Material: um conjunto de ferramentas de adivinhação – como ossos, bastões de marfim, dentes ou runas esculpidas – no valor de 100 po e um objeto do lugar que você deseja encontrar.",
    description: "Pela duração, contanto que você esteja no mesmo plano de existência do destino, você saberá o quão longe ele está e em que direção ele se encontra. Enquanto estiver viajando, sempre que você se deparar com uma escolha de trajetória no caminho, você automaticamente determina qual trajetória tem a rota mais curta e direta (mas não necessariamente a rota mais segura) para o destino.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "4",
        name: "druida"
      }
    ],
    "nivel": "6"
  },
  {
    id: "140",
    name: "Enfeitiçar Pessoa",
    school: "encantamento",
    castTime: "1 ação",
    range: "9 metros",
    components: "V, S",
    duration: "1 hora",
    concentration: false,
    material: "Você tenta enfeitiçar um humanoide que você possa ver dentro do alcance. Ele deve realizar um teste de resistência de Sabedoria, e recebe vantagem nesse teste se você ou seus companheiros estiverem lutando com ele. Se ele falhar, ficará enfeitiçado por você até a magia acabar ou até você ou seus companheiros fizerem qualquer coisa nociva contra ele. A criatura enfeitiçada reconhece você como um conhecido amigável. Quando a magia acabar, a criatura saberá que foi enfeitiçada por você.",
    description: "Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 2° nível ou superior, você pode afetar uma criatura adicional para cada nível do espaço acima do 1°. As criaturas devem estar a até 9 metros umas das outras quando você for afeta-las.",
    classesList: [
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "1"
  },
  {
    id: "141",
    name: "Enfraquecer Intelecto",
    school: "encantamento",
    castTime: "1 ação",
    range: "45 metros",
    components: "V, S, M",
    duration: "instantânea",
    concentration: false,
    material: "Material: um punhado de barro, cristal, vidro ou esferas minerais.",
    description: "Ao final de cada 30 dias, a criatura pode repetir seu teste de resistência contra essa magia. Se ela obtiver sucesso no teste de resistência, a magia termina. Essa magia também pode ser terminada através de restauração maior, cura completa ou desejo.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "8"
  },
  {
    id: "142",
    name: "Enviar Mensagem",
    school: "evocação",
    castTime: "1 ação",
    range: "ilimitado",
    components: "V, S, M",
    duration: "1 rodada",
    concentration: false,
    material: "Material: um pequeno e fino pedaço de fio de cobre.",
    description: "Você pode enviar a mensagem através de qualquer distância e, até mesmo, para outro plano de existência, mas se o alvo estiver em um plano diferente do seu, existe 5 por cento de chance da mensagem não chegar.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "3"
  },
  {
    id: "143",
    name: "Escrita Ilusória",
    school: "ilusão",
    castTime: "1 minuto",
    range: "toque",
    components: "S, M",
    duration: "10 dias",
    concentration: false,
    material: "Material: uma tinta à base de chumbo valendo, no mínimo, 10 po, que é consumida pela magia.",
    description: "Uma criatura com visão verdadeira pode ler a mensagem escondida.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "1"
  },
  {
    id: "144",
    name: "Escudo Arcano",
    school: "abjuração",
    castTime: "1 reação",
    range: "pessoal",
    components: "V, S",
    duration: "1 rodada",
    concentration: false,
    material: "Reação que você faz quando é atingido por um ataque ou alvo da magia mísseis mágicos.",
    description: "Uma barreira de energia invisível aparece e protege você. Até o início do seu próximo turno, você recebe +5 de bônus na CA, incluindo contra o ataque que desencadeou a magia, e você não sofre dano de mísseis mágicos.",
    classesList: [
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "1"
  },
  {
    id: "145",
    name: "Escudo da Fé",
    school: "abjuração",
    castTime: "1 ação bônus",
    range: "18 metros",
    components: "V, S, M",
    duration: "até 10 minutos",
    concentration: true,
    material: "Material: um pequeno pergaminho com alguns textos sagrados escritos nele.",
    description: "Um campo cintilante aparece ao redor de uma criatura, à sua escolha, dentro do alcance, concedendo +2 de bônus na CA pela duração.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "7",
        name: "paladino"
      }
    ],
    "nivel": "1"
  },
  {
    id: "146",
    name: "Escudo de Fogo",
    school: "evocação",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S, M",
    duration: "10 minutos",
    concentration: false,
    material: "Material: um pouco de fósforo ou um vaga- lume.",
    description: "Além disso, sempre que uma criatura a 1,5 metro de você atingir você com um ataque corpo-a-corpo, o escudo expele chamas. O atacante sofre 2d8 de dano de fogo do escudo quente ou 2d8 de dano de frio do escudo frio.",
    classesList: [
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "4"
  },
  {
    id: "147",
    name: "Escuridão",
    school: "evocação",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, M",
    duration: "até 10 minutos",
    concentration: true,
    material: "Material: pelo de morcego e uma gota de piche ou pedaço de carvão.",
    description: "Se qualquer área dessa magia sobrepor uma área de luz criada por uma magia de 2° ou inferior, a magia que criou a luz será dissipada.",
    classesList: [
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "2"
  },
  {
    id: "148",
    name: "Esfera Congelante de Otiluke",
    school: "evocação",
    castTime: "1 ação",
    range: "90 metros",
    components: "V, S, M",
    duration: "instantânea",
    concentration: false,
    material: "Material: uma pequena esfera de cristal.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 7° nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 6°.",
    classesList: [
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "6"
  },
  {
    id: "149",
    name: "Esfera Flamejante",
    school: "conjuração",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: um pouco de seco, uma pitada de enxofre e uma camada de pó de ferro.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 2°.",
    classesList: [
      {
        id: "4",
        name: "druida"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "2"
  },
  {
    id: "150",
    name: "Esfera Resiliente de Otiluke",
    school: "evocação",
    castTime: "1 ação",
    range: "9 metros",
    components: "V, S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: uma peça hemisférica de cristal transparente e uma peça hemisférica que combine de goma arábica.",
    description: "A magia desintegrar lançada no globo o destruirá sem causar ferimentos a nada dentro dele.",
    classesList: [
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "4"
  },
  {
    id: "151",
    name: "Espada de Mordenkainen",
    school: "evocação",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: espada de platina em miniatura com cabo e pomo de cobre e zinco valendo, no mínimo, 250 po.",
    description: "Quando a espada aparece, você realiza um ataque com magia contra um alvo, à sua escolha, a 1,5 metro da espada. Se atingir, o alvo sofre 3d10 de dano de energia. Até a magia acabar, você pode usar uma ação bônus, em cada um dos seus turnos, para mover a espada até 6 metros para um local que você possa ver e repetir esse ataque contra o mesmo alvo ou um diferente.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "7"
  },
  {
    id: "152",
    name: "Espíritos Guardiões",
    school: "conjuração",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S, M",
    duration: "até 10 minutos",
    concentration: true,
    material: "Material: um símbolo sagrado.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o dano aumenta em 1d8 para cada nível do espaço acima do 3°.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      }
    ],
    "nivel": "3"
  },
  {
    id: "153",
    name: "Espirro Ácido",
    school: "conjuração",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, S",
    duration: "instantânea",
    concentration: false,
    material: "Você arremessa uma bolha de ácido. Escolha uma criatura dentro do alcance, ou escolha duas criaturas dentro do alcance que estejam a 1,5 metro uma da outra. Um alvo deve ser bem sucedido num teste de resistência de Destreza ou sofrerá 1d6 de dano ácido.",
    description: "O dano dessa magia aumenta em 1d6 quando você alcança o 5° nível (2d6), 11° nível (3d6) e 17° nível (4d6).",
    classesList: [
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "0"
  },
  {
    id: "154",
    name: "Esquentar Metal",
    school: "transmutação",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: um pedaço de ferro e uma chama.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, o dano aumenta em 1d8 para cada nível do espaço acima do 2°.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "4",
        name: "druida"
      }
    ],
    "nivel": "2"
  },
  {
    id: "155",
    name: "Estabilizar",
    school: "necromancia",
    castTime: "1 ação",
    range: "toque",
    components: "V, S",
    duration: "instantânea",
    concentration: false,
    material: "Você toca uma criatura viva que esteja com 0 pontos de vida. A criatura é estabilizada. Essa magia não afeta mortos-vivos ou constructos.",
    description: "Você toca uma criatura viva que esteja com 0 pontos de vida. A criatura é estabilizada. Essa magia não afeta mortos-vivos ou constructos.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      }
    ],
    "nivel": "0"
  },
  {
    id: "156",
    name: "Explosão Solar",
    school: "evocação",
    castTime: "1 ação",
    range: "45 metros",
    components: "V, S, M",
    duration: "instantânea",
    concentration: false,
    material: "Material: fogo e um pedaço de pedra do sol.",
    description: "Essa magia dissipa qualquer escuridão na área dela que tenha sido criada por um magia.",
    classesList: [
      {
        id: "4",
        name: "druida"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "8"
  },
  {
    id: "157",
    name: "Fabricar",
    school: "transmutação",
    castTime: "10 minutos",
    range: "36 metros",
    components: "V, S",
    duration: "instantânea",
    concentration: false,
    material: "Você converte matéria-prima em produtos do mesmo material. Por exemplo, você pode construir uma ponte de madeira usando um amontoado de árvores, uma corda de um pedaço de cânhamo e roupas usando linho ou lã.",
    description: "Criaturas ou itens mágicos não podem ser criados ou transmutados por essa magia. Você também não pode usá-la para criar itens que, geralmente, requerem um alto grau de perícia, como joalheria, armas, vidros ou armaduras, a não ser que você tenha proficiência com o tipo de ferramenta de artesanato usada para construir tais objetos.",
    classesList: [
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "4"
  },
  {
    id: "158",
    name: "Falar com Animais",
    school: "adivinhação",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S",
    duration: "10 minutos",
    concentration: false,
    material: "Você adquire a habilidade de compreender e se comunicar verbalmente com bestas, pela duração. O conhecimento e consciência de muitas bestas é limitado pela inteligência delas mas, no mínimo, as bestas poderão dar informações a você sobre os locais e monstros próximos, incluindo tudo que eles possam perceber ou tenham percebido no dia anterior. Você pode tentar persuadir uma besta a lhe prestar um favor, à critério do Mestre.",
    description: "Você adquire a habilidade de compreender e se comunicar verbalmente com bestas, pela duração. O conhecimento e consciência de muitas bestas é limitado pela inteligência delas mas, no mínimo, as bestas poderão dar informações a você sobre os locais e monstros próximos, incluindo tudo que eles possam perceber ou tenham percebido no dia anterior. Você pode tentar persuadir uma besta a lhe prestar um favor, à critério do Mestre.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "1"
  },
  {
    id: "159",
    name: "Falar com Os Mortos",
    school: "necromancia",
    castTime: "1 ação",
    range: "3 metros",
    components: "V, S, M",
    duration: "10 minutos",
    concentration: false,
    material: "Material: incenso aceso.",
    description: "Até a magia acabar, você pode fazer ao corpo até cinco perguntas. O corpo sabe apenas o que ele sabia em vida, incluindo o idioma que ele conhecia. As respostas normalmente são breves, enigmáticas ou repetitivas e o corpo não está sob nenhuma compulsão que o obrigue a oferecer respostas verdadeiras se você for hostil a ele ou se ele reconhecer você como um inimigo. Essa magia não traz a alma da criatura de volta ao corpo, apenas anima seu espírito. Portanto, o corpo não pode aprender novas informações, não compreende nada que tenha acontecido depois da sua morte e não pode especular sobre eventos futuros.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "3",
        name: "clérigo"
      }
    ],
    "nivel": "3"
  },
  {
    id: "160",
    name: "Falar com Plantas",
    school: "adivinhação",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S",
    duration: "10 minutos",
    concentration: false,
    material: "Você imbui as plantas a até 9 metros de você com consciência e animação limitadas, dando-lhes a habilidade de se comunicar com você e seguir seus comandos simples. Você pode perguntar as plantas sobre eventos na área da magia, acontecidos desde o dia anterior, recebendo informações sobre criaturas que passaram, clima e outras circunstâncias.",
    description: "Se uma criatura planta estiver na área, você pode se comunicar com ela se você partilhar um idioma em comum, mas você não recebe qualquer habilidade mágica para influencia-la. Essa magia pode fazer as plantas criadas pela magia constrição soltarem uma criatura impedida.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "4",
        name: "druida"
      }
    ],
    "nivel": "1"
  },
  {
    id: "161",
    name: "Flecha Ácida de Melf",
    school: "evocação",
    castTime: "1 ação",
    range: "36 metros",
    components: "V, S, M",
    duration: "instantânea",
    concentration: false,
    material: "Material: folha de ruibarbo em pó e o estômago de uma víbora.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, o dano (tanto inicial quanto posterior) aumenta em 1d4 para cada nível do espaço acima do 2°.",
    classesList: [
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "2"
  },
  {
    id: "162",
    name: "Flecha Relampejante",
    school: "transmutação",
    castTime: "1 ação bônus",
    range: "pessoal",
    components: "V, S",
    duration: "até 1 minuto",
    concentration: true,
    material: "Da próxima vez que você realizar um ataque com uma arma à distância enquanto a magia durar, a munição da arma ou a própria arma, se ela for uma arma de arremesso, se transforma num relâmpago. Realize uma jogada de ataque normal. O alvo sofre 4d8 de dano elétrico se atingir ou metade desse dano se errar, ao invés do dano normal da arma.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o dano de ambos os efeitos da magia aumenta em 1d8 para cada nível do espaço acima do 3°.",
    classesList: [
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "3"
  },
  {
    id: "163",
    name: "Fogo das Fadas",
    school: "evocação",
    castTime: "1 ação",
    range: "18 metros",
    components: "V",
    duration: "até 1 minuto",
    concentration: true,
    material: "Cada objeto num cubo de 6 metros dentro do alcance fica delineado com luz azul, verde ou violeta (à sua escolha). Qualquer criatura na área, quando a magia é conjurada, também fica delineada com luz, se falhar num teste de resistência de Destreza. Pela duração, os objetos e criaturas afetadas emitem penumbra num raio de 3 metros.",
    description: "Qualquer jogada de ataque contra uma criatura afetada ou objeto tem vantagem, se o atacante puder ver o alvo e, a criatura afetada ou objeto não recebe benefício por estar invisível.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "4",
        name: "druida"
      }
    ],
    "nivel": "1"
  },
  {
    id: "164",
    name: "Fome de Hadar",
    school: "conjuração",
    castTime: "1 ação",
    range: "45 metros",
    components: "V, S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: um tentáculo de polvo em conserva.",
    description: "O vazio cria uma dobra no tecido do espaço e a área é de terreno difícil. Qualquer criatura que começar seu turno na área sofre 2d6 de dano de frio. Qualquer criatura que terminar seu turno na área, deve ser bem sucedida num teste de resistência de Destreza ou sofrerá 2d6 de dano de ácido, à medida que tentáculos leitosos extraterrestres se esfregam contra ela.",
    classesList: [
      {
        id: "2",
        name: "bruxo"
      }
    ],
    "nivel": "3"
  },
  {
    id: "165",
    name: "Força Fantasmagórica",
    school: "ilusão",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: um pouco de lã.",
    description: "Um alvo afetado está tão convencido da realidade do fantasma que pode até mesmo sofrer dano da ilusão. Um fantasma criado para se parecer com uma criatura pode atacar o alvo. Similarmente, um fantasma criado para se parecer com fogo, um poço de ácido ou lava, podem queimar o alvo. A cada rodada, no seu turno, o fantasma pode causar 1d6 de dano psíquico no alvo, se ele estiver na área do fantasma ou a 1,5 metro dele, considerando que a ilusão é de uma criatura ou perigo que, logicamente, possa causar dano, como por atacar. O alvo entende o dano como sendo de um tipo apropriado para a ilusão.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "2"
  },
  {
    id: "166",
    name: "Forjar Morte",
    school: "necromancia",
    castTime: "1 ação",
    range: "toque",
    components: "V, S, M",
    duration: "1 hora",
    concentration: false,
    material: "Material: uma pitada de terra de cemitério.",
    description: "Pela duração da magia, ou até você usar uma ação para tocar o alvo e dissipar a magia, o alvo aparenta estar morto para todas as inspeções externas e para magias usadas para determinar a condição do alvo. O alvo está cego e incapacitado e seu deslocamento cai para 0. O alvo tem resistência a todos os danos, exceto dano psíquico. Se o alvo estava doente ou envenenado quando você conjurou a magia, ou ficou doente ou envenenado durante o período em que estava sob efeito da magia, a doença e veneno não terá qualquer efeito até a magia terminar.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "3"
  },
  {
    id: "167",
    name: "Forma Etérea",
    school: "transmutação",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S",
    duration: "até 8 horas",
    concentration: false,
    material: "Você dá um passo para dentro das fronteiras do Plano Etéreo, na área em que ele se sobrepõem com o seu plano atual. Você se mantem na Fronteira Etérea pela duração ou até você usar sua ação para dissipar a magia. Durante esse período, você pode se mover para qualquer direção. Se você se mover para cima ou para baixo, cada passo de deslocamento custa um passo extra. Você pode ver e ouvir o plano que você se originou, mas tudo parece cinzento e você não pode ver nada além de 18 metros de você.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 8° nível ou superior, você pode afetar até três criaturas voluntária (incluindo você) para cada nível do espaço acima do 7°. As criaturas devem estar a até 3 metros de você quando você conjurar a magia.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "7"
  },
  {
    id: "168",
    name: "Forma Gasosa",
    school: "transmutação",
    castTime: "1 ação",
    range: "toque",
    components: "V, S, M",
    duration: "até 1 hora",
    concentration: true,
    material: "Material: um pouco de gaze e um pouco de fumaça.",
    description: "Enquanto estiver na forma de uma nuvem nebulosa, o alvo não pode falar ou manipular objetos e, quaisquer objetos que ele estava carregando ou segurando não pode ser derrubado, usado ou, de outra forma, interagido. O alvo não pode atacar ou conjurar magias.",
    classesList: [
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "3"
  },
  {
    id: "169",
    name: "Formas Animais",
    school: "transmutação",
    castTime: "1 ação",
    range: "9 metros",
    components: "V, S",
    duration: "até 24 horas",
    concentration: true,
    material: "Sua magia transforma você em bestas. Escolha qualquer quantidade de criaturas voluntárias que você possa ver, o alcance. Você muda cada alvo para a forma de uma besta Grande ou menor, com um nível de desafio de 4 ou inferior. Nos turnos subsequentes, você pode usar sua ação para mudar uma criatura afetada para uma nova forma.",
    description: "O equipamento do alvo mescla-se a sua nova forma. O alvo não pode ativar, empunhar ou, de outra forma, se beneficiar de qualquer de seus equipamentos.",
    classesList: [
      {
        id: "4",
        name: "druida"
      }
    ],
    "nivel": "8"
  },
  {
    id: "170",
    name: "Glifo de Vigilância",
    school: "abjuração",
    castTime: "1 hora",
    range: "toque",
    components: "V, S, M",
    duration: "até ser dissipada ou ativada",
    concentration: false,
    material: "Material: incenso e pó de diamante valendo, no mínimo, 200 po, consumidos pela magia.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o dano do glifo de runas explosivas aumenta em 1d8 para cada nível do espaço acima do 3°. Se você criar um glifo de magia, você pode armazenar qualquer magia do mesmo nível, ou inferior, do espaço que você usar para o glifo de vigilância.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "3"
  },
  {
    id: "171",
    name: "Globo de Invulnerabilidade",
    school: "abjuração",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: uma perola de vidro ou cristal que se despedaça quando a magia termina.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 7° nível ou superior, a barreira bloqueia magias de um nível superior para cada nível do espaço acima do 6°.",
    classesList: [
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "6"
  },
  {
    id: "172",
    name: "Globos de Luz",
    school: "evocação",
    castTime: "1 ação",
    range: "36 metros",
    components: "V, S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: um pouco de fósforo ou wychwood ou um inseto luminoso.",
    description: "Com uma ação bônus, no seu turno, você pode mover as luzes, até 18 metros, para um novo local dentro do alcance. Uma luz deve estar a, pelo menos, 6 metros de outra luz criada por essa magia e uma luz some se exceder o alcance da magia.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "0"
  },
  {
    id: "173",
    name: "Golpe Constritor",
    school: "conjuração",
    castTime: "1 ação bônus",
    range: "pessoal",
    components: "V",
    duration: "até 1 minuto",
    concentration: true,
    material: "Da próxima vez que você atingir uma criatura com um ataque com arma, antes do final da magia, um emaranhado maciço de vinhas espinhentas aparecem no local do impacto e o alvo deve ser bem sucedido num teste de resistência de Força ou ficará impedido pelas vinhas mágicas, até o fim da magia. Uma criatura Grande ou maior tem vantagem no seu teste de resistência. Se o alvo for bem sucedido na resistência, as vinhas murcharão.",
    description: "Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 1°.",
    classesList: [
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "1"
  },
  {
    id: "174",
    name: "Guardião da Fé",
    school: "conjuração",
    castTime: "1 ação",
    range: "9 metros",
    components: "V",
    duration: "8 horas",
    concentration: false,
    material: "Um guardião espectral Grande aparece e flutua, pela duração, em um espaço desocupado, à sua escolha, que você possa ver dentro do alcance. O guardião ocupa esse espaço e é indistinto, exceto por uma espada reluzente e um escudo brasonado com o símbolo da sua divindade.",
    description: "Qualquer criatura hostil a você que se mover para um espaço a até 3 metros do guardião pela primeira vez em um turno, deve ser bem sucedida num teste de resistência de Destreza. A criatura sofre 20 de dano radiante se falhar na resistência ou metade desse dano se obtiver sucesso. O guardião desaparece após ter causado um total de 60 de dano.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      }
    ],
    "nivel": "4"
  },
  {
    id: "175",
    name: "Heroísmo",
    school: "encantamento",
    castTime: "1 ação",
    range: "toque",
    components: "V, S",
    duration: "até 1 minuto",
    concentration: true,
    material: "Uma criatura voluntária que você tocar é imbuída com bravura. Até a magia acabar, a criatura é imune a ser amedrontada e ganha pontos de vida temporários igual ao seu modificador de habilidade de conjuração, no início de cada turno dela. Quando a magia acabar, o alvo perde qualquer ponto de vida temporário restante dessa magia.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, você pode afetar uma criatura adicional para cada nível do espaço acima do 1°.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "7",
        name: "paladino"
      }
    ],
    "nivel": "1"
  },
  {
    id: "176",
    name: "Identificação",
    school: "adivinhação",
    castTime: "1 minuto",
    range: "toque",
    components: "V, S, M",
    duration: "instantânea",
    concentration: false,
    material: "Material: uma perola valendo, no mínimo, 100 po e uma pena de coruja.",
    description: "Se você, ao invés, tocar uma criatura durante toda a conjuração, você descobre quais magias, se houver alguma, estão afetando-a atualmente.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "1"
  },
  {
    id: "177",
    name: "Idiomas",
    school: "adivinhação",
    castTime: "1 ação",
    range: "toque",
    components: "V, M",
    duration: "1 hora",
    concentration: false,
    material: "Material: uma pequena estátua de argila de um zigurate.",
    description: "Essa magia garante a criatura que você tocar a habilidade de compreender e falar o idioma que ela ouvir. Além disso, quando o alvo fala, qualquer criatura que saiba, pelo menos, um idioma pode ouvir o alvo e compreender o que ele diz.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "3"
  },
  {
    id: "178",
    name: "Ilusão Menor",
    school: "ilusão",
    castTime: "1 ação",
    range: "9 metros",
    components: "V, M",
    duration: "1 minuto",
    concentration: false,
    material: "Material: um pouco de lã.",
    description: "Se você criar uma imagem de um objeto – como uma cadeira, pegadas de lama ou um pequeno baú – ela não pode ter mais de 1,5 metro cúbico. A imagem não pode produzir som, luz, cheiro ou qualquer outro efeito sensorial. Interação física com a imagem revelará que ela é uma ilusão, já que as coisas podem atravessa-la. Se uma criatura usar sua ação para examinar a imagem, ela pode determinar que ela é uma ilusão se obtiver sucesso num teste de Inteligência (Investigação) contra a CD da magia. Se uma criatura discernir a ilusão como sendo isso, a ilusão se tornará suave para a criatura.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "0"
  },
  {
    id: "179",
    name: "Ilusão Programada",
    school: "ilusão",
    castTime: "1 ação",
    range: "36 metros",
    components: "V, S, M",
    duration: "até ser dissipada",
    concentration: false,
    material: "Material: um pouco de lã e pó de jade valendo, no mínimo, 25 po.",
    description: "Interação física com a imagem revelará ela como sendo uma ilusão, já que as coisas podem atravessa-la. Uma criatura que usar sua ação para examinar a imagem, pode determinar que ela é uma ilusão sendo bem sucedida num teste de Inteligência (Investigação) contra a CD da magia para desacredita-la. Se a criatura discernir a ilusão como ela é, a criatura poderá ver através da imagem e qualquer barulho que ela fizer soará oco para a criatura.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "6"
  },
  {
    id: "180",
    name: "Imagem Maior",
    school: "ilusão",
    castTime: "1 ação",
    range: "36 metros",
    components: "V, S, M",
    duration: "até 10 minutos",
    concentration: true,
    material: "Material: um pedaço de lã.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 6° nível ou superior, a magia irá durar até ser dissipada, sem necessitar da sua concentração.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "3"
  },
  {
    id: "181",
    name: "Imagem Silenciosa",
    school: "ilusão",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, S, M",
    duration: "até 10 minutos",
    concentration: true,
    material: "Material: um pouco de lã.",
    description: "Interação física com a imagem, revelará que ela é uma ilusão, já que as coisas podem passar através dela. Uma criatura que usar sua ação para examinar a imagem, pode determinar que ela é uma ilusão com um teste de Inteligência (Investigação) bem sucedido contra a CD da magia. Se uma criatura discernir a ilusão como sendo isso, a criatura poderá ver através da imagem.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "1"
  },
  {
    id: "182",
    name: "Imobilizar Monstro",
    school: "encantamento",
    castTime: "1 ação",
    range: "27 metros",
    components: "V, S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: uma pequena peça de ferro reta.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 6° nível ou superior, você pode afetar uma criatura adicional para cada nível de magia acima do 5°. As criaturas devem estar a 9 metros entre si para serem afetadas.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "5"
  },
  {
    id: "183",
    name: "Imobilizar Pessoa",
    school: "encantamento",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: uma pequena peça de ferro reta.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, você pode afetar um humanoide adicional para cada nível de magia acima do 2°. Os humanoides devem estar a 9 metros entre si para serem afetados.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "2"
  },
  {
    id: "184",
    name: "Infligir Ferimentos",
    school: "necromancia",
    castTime: "1 ação",
    range: "toque",
    components: "V, S",
    duration: "instantânea",
    concentration: false,
    material: "Faça um ataque corpo-a-corpo com magia contra uma criatura dentro do alcance. Se atingir, o alvo sofre 3d10 de dano necrótico.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o dano aumenta em 1d10 para cada nível acima do 1°.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      }
    ],
    "nivel": "1"
  },
  {
    id: "185",
    name: "Inseto Gigante",
    school: "transmutação",
    castTime: "1 ação",
    range: "9 metros",
    components: "V, S",
    duration: "até 10 minutos",
    concentration: true,
    material: "Você transforma até dez centopeias, três aranhas, cinco vespas ou um escorpião, dentro do alcance, em versões gigantes das suas formas naturais, pela duração. Uma centopeia se torna uma centopeia gigante, uma aranha se torna uma aranha gigante, uma vespa se torna uma vespa gigante e um escorpião se torna um escorpião gigante.",
    description: "O Mestre pode permitir que você escolha alvos diferentes. Por exemplo, se você transformar uma abelha, sua versão gigante poderia ter as mesmas estatísticas da vespa gigante.",
    classesList: [
      {
        id: "4",
        name: "druida"
      }
    ],
    "nivel": "4"
  },
  {
    id: "186",
    name: "Inverter a Gravidade",
    school: "transmutação",
    castTime: "1 ação",
    range: "30 metros",
    components: "V, S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: um ímã e limalhas de ferro.",
    description: "No final da duração, objetos e criaturas afetadas caem de volta para baixo.",
    classesList: [
      {
        id: "4",
        name: "druida"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "7"
  },
  {
    id: "187",
    name: "Invisibilidade",
    school: "ilusão",
    castTime: "1 ação",
    range: "toque",
    components: "V, S, M",
    duration: "até 1 hora",
    concentration: true,
    material: "Material: uma pestana envolta em goma- arábica.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, você pode afetar um alvo adicional para cada nível do espaço acima do 2°.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "2"
  },
  {
    id: "188",
    name: "Invisibilidade Maior",
    school: "ilusão",
    castTime: "1 ação",
    range: "toque",
    components: "V, S",
    duration: "até 1 minuto",
    concentration: true,
    material: "Você ou uma criatura que você possa tocar, se torna invisível até a magia acabar. Qualquer coisa que o alvo estiver vestindo ou carregando fica invisível enquanto estiver de posse do alvo.",
    description: "Você ou uma criatura que você possa tocar, se torna invisível até a magia acabar. Qualquer coisa que o alvo estiver vestindo ou carregando fica invisível enquanto estiver de posse do alvo.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "4"
  },
  {
    id: "189",
    name: "Invocação Instantânea de Drawmij",
    school: "conjuração",
    castTime: "1 minuto",
    range: "toque",
    components: "V, S, M",
    duration: "até ser dissipada",
    concentration: false,
    material: "Material: uma safira no valor de 1.000 po.",
    description: "Dissipar magia ou um efeito similar aplicado com sucesso na safira, termina o efeito da magia.",
    classesList: [
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "6"
  },
  {
    id: "190",
    name: "Isolamento",
    school: "transmutação",
    castTime: "1 ação",
    range: "toque",
    components: "V, S, M",
    duration: "até ser dissipada",
    concentration: false,
    material: "Material: um composto de pós de diamante, esmeralda, rubi e safira valendo, no mínimo, 5.000 po, consumidos pela magia.",
    description: "Você pode determinar uma condição para que a magia termine prematuramente. A condição pode ser qualquer coisa, à sua escolha, mas deve ocorrer ou ser visível a até 1,5 quilômetro do alvo. Exemplos incluem “depois de 1.000 anos” ou “quando o tarrasque despertar”. Essa magia também acaba se o alvo sofrer qualquer dano.",
    classesList: [
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "7"
  },
  {
    id: "191",
    name: "Labirinto",
    school: "conjuração",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, S",
    duration: "até 10 minutos",
    concentration: true,
    material: "Você bane uma criatura que você possa ver, dentro do alcance, para um semiplano labiríntico. O alvo permanece lá pela duração ou até escapar do labirinto.",
    description: "Quando a magia termina, o alvo reaparece no espaço que ela estava ou, se o espaço estiver ocupado, no espaço desocupado mais próximo.",
    classesList: [
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "8"
  },
  {
    id: "192",
    name: "Lâmina Flamejante",
    school: "evocação",
    castTime: "1 ação bônus",
    range: "pessoal",
    components: "V, S, M",
    duration: "até 10 minutos",
    concentration: true,
    material: "Material: folha de sumagre.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o dano aumenta em 1d6 para cada dois níveis do espaço acima do 2°.",
    classesList: [
      {
        id: "4",
        name: "druida"
      }
    ],
    "nivel": "2"
  },
  {
    id: "193",
    name: "Lentidão",
    school: "transmutação",
    castTime: "1 ação",
    range: "36 metros",
    components: "V, S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: uma gota de melaço.",
    description: "Uma criatura afetada por essa magia faz outro teste de resistência de Sabedoria no final do turno dela. Se passar na resistência, o efeito acaba nela.",
    classesList: [
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "3"
  },
  {
    id: "194",
    name: "Leque Cromático",
    school: "ilusão",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S, M",
    duration: "1 rodada",
    concentration: false,
    material: "Material: um punhado de pó ou areia nas cores vermelha, amarela e azul.",
    description: "Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 2° nível ou superior, jogue 2d10 adicionais para cada nível do espaço acima do 1°.",
    classesList: [
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "1"
  },
  {
    id: "195",
    name: "Levitação",
    school: "transmutação",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, S, M",
    duration: "até 10 minutos",
    concentration: true,
    material: "Material: uma pequena presilha de couro ou um pedaço de fio dourado dobrado em forma de copo com uma haste longa em uma extremidade.",
    description: "Quando a magia acaba, o alvo flutua suavemente até o chão, se ele ainda estiver no ar.",
    classesList: [
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "2"
  },
  {
    id: "196",
    name: "Ligação Telepática de Rary",
    school: "adivinhação",
    castTime: "1 ação",
    range: "9 metros",
    components: "V, S, M",
    duration: "1 hora",
    concentration: false,
    material: "Material: pedaços de cascas de ovos de dois tipos diferentes de criatura.",
    description: "Até a magia acabar, os alvos podem se comunicar telepaticamente através do elo, independentemente de terem ou não um idioma em comum. A comunicação é possível a qualquer distância, apesar de não se estender a outros planos de existência.",
    classesList: [
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "5"
  },
  {
    id: "197",
    name: "Limpar a Mente",
    school: "abjuração",
    castTime: "1 ação",
    range: "toque",
    components: "V, S",
    duration: "24 horas",
    concentration: false,
    material: "Até a magia acabar, uma criatura voluntária que você tocar fica imune a dano psíquico, a qualquer efeito que poderia sentir suas emoções ou ler seus pensamentos, a magias de adivinhação e a condição enfeitiçado. A magia pode até mesmo evitar a magia desejo e magias ou efeitos de poder similar usados para afetar a mente do alvo ou para adquirir informações sobre ele.",
    description: "Até a magia acabar, uma criatura voluntária que você tocar fica imune a dano psíquico, a qualquer efeito que poderia sentir suas emoções ou ler seus pensamentos, a magias de adivinhação e a condição enfeitiçado. A magia pode até mesmo evitar a magia desejo e magias ou efeitos de poder similar usados para afetar a mente do alvo ou para adquirir informações sobre ele.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "8"
  },
  {
    id: "198",
    name: "Localizar Animais ou Plantas",
    school: "adivinhação",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S, M",
    duration: "instantânea",
    concentration: false,
    material: "Material: um pouco de pelo de um cão de caça.",
    description: "Descreva ou nomeie um tipo especifico de besta ou planta. Concentre-se na voz da natureza ao seu redor, você descobre a direção e distância da criatura ou planta mais próxima desse tipo dentro de 7,5 quilômetros, se houver alguma presente.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "2"
  },
  {
    id: "199",
    name: "Localizar Criatura",
    school: "adivinhação",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S, M",
    duration: "até 1 hora",
    concentration: true,
    material: "Material: um pouco de pelo de um cão de caça.",
    description: "Essa magia não pode localizar uma criatura se água corrente de, pelo menos 3 metros de largura, bloquear o caminho direito entre você e a criatura.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "6",
        name: "mago"
      },
      {
        id: "7",
        name: "paladino"
      },
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "4"
  },
  {
    id: "200",
    name: "Localizar Objeto",
    school: "adivinhação",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S, M",
    duration: "até 10 minutos",
    concentration: true,
    material: "Material: um galho bifurcado.",
    description: "Essa magia não pode localizar um objeto se qualquer espessura de chumbo, até mesmo uma folha fina, bloquear o caminho direto entre você e o objeto.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "6",
        name: "mago"
      },
      {
        id: "7",
        name: "paladino"
      },
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "2"
  },
  {
    id: "201",
    name: "Loquacidade",
    school: "transmutação",
    castTime: "1 ação",
    range: "pessoal",
    components: "V",
    duration: "1 hora",
    concentration: false,
    material: "Até o fim da magia, quando você realizar um teste de Carisma, você pode substituir o número rolado por você por um 15. Além disso, não importa o que você diga, magias que determinam se você está dizendo a verdade indicarão que você está sendo sincero.",
    description: "Até o fim da magia, quando você realizar um teste de Carisma, você pode substituir o número rolado por você por um 15. Além disso, não importa o que você diga, magias que determinam se você está dizendo a verdade indicarão que você está sendo sincero.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "2",
        name: "bruxo"
      }
    ],
    "nivel": "8"
  },
  {
    id: "202",
    name: "Lufada de Vento",
    school: "evocação",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: uma semente de legume.",
    description: "Com uma ação bônus, em cada um dos seus turnos, antes da magia acabar, você pode mudar a direção à qual a linha é soprada de você.",
    classesList: [
      {
        id: "4",
        name: "druida"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "2"
  },
  {
    id: "203",
    name: "Luz",
    school: "evocação",
    castTime: "1 ação",
    range: "toque",
    components: "V, M",
    duration: "1 hora",
    concentration: false,
    material: "Material: um vaga-lume ou musgo fosforescente.",
    description: "Se você tentar afetar um objeto segurado ou vestido por uma criatura hostil, a criatura deve ser bem sucedida num teste de Destreza para evitar a magia.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "0"
  },
  {
    id: "204",
    name: "Luz do Dia",
    school: "evocação",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, S",
    duration: "1 hora",
    concentration: false,
    material: "Uma esfera de luz, com 18 metros de raio, se espalha a partir de um ponto, à sua escolha, dentro do alcance. A esfera produz luz plena num raio de 18 metros e penumbra por 18 metros adicionais.",
    description: "Se qualquer área dessa magia sobrepor uma área de escuridão criada por uma magia de 3° ou inferior, a magia que criou a escuridão será dissipada.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "7",
        name: "paladino"
      },
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "3"
  },
  {
    id: "205",
    name: "Malogro",
    school: "necromancia",
    castTime: "1 ação",
    range: "9 metros",
    components: "V, S",
    duration: "instantânea",
    concentration: false,
    material: "Energia necromântica inunda uma criatura, à sua escolha, que você possa ver dentro do alcance, drenando sua umidade e vitalidade. O alvo deve realizar um teste de resistência de Concentração. O alvo sofre 8d8 de dano necrótico se falhar no teste, ou metade desse dano se obtiver sucesso. Essa magia não surte efeito em mortos- vivos ou constructos.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 5° nível ou superior, o dano aumenta em 1d8 para cada nível do espaço acima do 4°.",
    classesList: [
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "4"
  },
  {
    id: "206",
    name: "Mansão Magnífica de Mordenkainen",
    school: "conjuração",
    castTime: "1 minuto",
    range: "90 metros",
    components: "V, S, M",
    duration: "24 horas",
    concentration: false,
    material: "Material: um portal em miniatura esculpido em marfim, um pedaço de mármore polido e uma pequena colher de prata, cada item valendo, no mínimo, 5 po.",
    description: "Você pode criar qualquer projeto de piso que quiser, mas o espaço não pode exceder 50 cubos, cada cubo tendo 3 metros de cada lado. O local é mobiliado e decorado como você desejar. Ele contém comida suficiente para servir nove banquetes para até 100 pessoas. Uma equipe de 100 servos quase-transparentes atende todos que entrarem. Você decide a aparência visual dos servos e o vestuário deles. Eles são completamente obedientes as suas ordens. Cada servo pode realizar qualquer tarefa que um servo humano comum poderia fazer, mas eles não podem atacar ou realizar qualquer ação que poderia causar maleficio direto a outra criatura. Portanto, os servos podem buscar coisas, limpar, remendar, dobrar roupas, acender lareiras, servir comida, despejar vinho e assim por diante. Os servos podem ir a qualquer lugar na mansão, mas não podem deixa-la. Mobília e outros objetos criados por essa magia viram fumaça se forem removidos da mansão. Quando a magia acabar, qualquer criatura dentro do espaço extradimensional é expelida para o espaço vago mais próximo da entrada.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "7"
  },
  {
    id: "207",
    name: "Manto do Cruzado",
    school: "evocação",
    castTime: "1 ação",
    range: "pessoal",
    components: "V",
    duration: "até 1 minuto",
    concentration: true,
    material: "Poder sagrado irradia de você em uma aura de 9 metros de raio, despertando a audácia nas criaturas amigáveis. Até o final da magia, a aura se move, se mantendo centrada em você. Enquanto estiver na aura, cada criatura não-hostil (incluindo você) causa 1d4 de dano radiante extra quando atingir com ataques com arma.",
    description: "Poder sagrado irradia de você em uma aura de 9 metros de raio, despertando a audácia nas criaturas amigáveis. Até o final da magia, a aura se move, se mantendo centrada em você. Enquanto estiver na aura, cada criatura não-hostil (incluindo você) causa 1d4 de dano radiante extra quando atingir com ataques com arma.",
    classesList: [
      {
        id: "7",
        name: "paladino"
      }
    ],
    "nivel": "3"
  },
  {
    id: "208",
    name: "Mão de Bigby",
    school: "evocação",
    castTime: "1 ação",
    range: "36 metros",
    components: "V, S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: uma casca de ovo e uma luva de couro de cobra.",
    description: "Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 6° nível ou superior, o dano da opção punho cerrado aumenta em 2d8 e o dano da mão esmagadora aumenta em 2d6 para cada nível do espaço acima do 5°.",
    classesList: [
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "5"
  },
  {
    id: "209",
    name: "Mãos Flamejantes",
    school: "evocação",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S",
    duration: "instantânea",
    concentration: false,
    material: "Enquanto você mantiver suas mãos com os polegares juntos e os dedos abertos, uma fino leque de chamas emerge das pontas dos seus dedos erguidos. Cada criatura num cone de 4,5 metros deve realizar um teste de resistência de Destreza. Uma criatura sofre 3d6 de dano de fogo se falhar no teste, ou metade desse dano se obtiver sucesso.",
    description: "Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 1°.",
    classesList: [
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "1"
  },
  {
    id: "210",
    name: "Mãos Mágicas",
    school: "conjuração",
    castTime: "1 ação",
    range: "9 metros",
    components: "V, S",
    duration: "1 minuto",
    concentration: false,
    material: "Uma mão espectral flutuante aparece num ponto, à sua escolha, dentro do alcance. A mão permanece pela duração ou até você dissipa-la com uma ação. A mão some se estiver a mais de 9 metros de você ou se você conjurar essa magia novamente.",
    description: "A mão não pode atacar, ativar itens mágicos ou carregar mais de 5 quilos.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "0"
  },
  {
    id: "211",
    name: "Marca da Punição",
    school: "evocação",
    castTime: "1 ação bônus",
    range: "pessoal",
    components: "V",
    duration: "até 1 minuto",
    concentration: true,
    material: "Da próxima vez que você atingir uma criatura com um ataque com arma, antes do fim da magia, a arma cintilará com radiação astral quando você golpear. O ataque causa 2d6 de dano radiante extra ao alvo, que se torna visível, se estava invisível, e o alvo emite penumbra em um raio de 1,5 metro e não pode ficar invisível até a magia acabar.",
    description: "Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 3° nível ou superior, o dano extra aumenta em 1d6 para cada nível do espaço acima do 2°.",
    classesList: [
      {
        id: "7",
        name: "paladino"
      }
    ],
    "nivel": "2"
  },
  {
    id: "212",
    name: "Marca do Caçador",
    school: "adivinhação",
    castTime: "1 ação bônus",
    range: "27 metros",
    components: "V",
    duration: "até 1 hora",
    concentration: true,
    material: "Você escolhe uma criatura que possa ver, dentro do alcance e a marca misticamente como sua presa. Até a magia acabar, você causa 1d6 de dano extra ao alvo sempre que você o atingir com um ataque com arma e você tem vantagem em quaisquer testes de Sabedoria (Percepção) ou Sabedoria (Sobrevivência) feitos para encontrá-la. Se o alvo cair a 0 pontos de vida antes da magia acabar, você pode usar uma ação bônus, no seu turno subsequente para marcar uma nova criatura.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 3° ou 4° nível, você poderá manter sua concentração na magia por até 8 horas. Quando você usar um espaço de magia de 5° nível ou superior, você poderá manter sua concentração na magia por até 24 horas.",
    classesList: [
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "1"
  },
  {
    id: "213",
    name: "Medo",
    school: "ilusão",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: uma pena branca ou o coração de uma galinha.",
    description: "Enquanto estiver amedrontada por essa magia, uma criatura deve usar a ação de Disparada e fugir de você pela rota mais curta disponível em cada um dos turnos dela, a não ser que não haja lugar para onde se mover. Se a criatura terminar o turno dela em um local onde ela não tenha linha de visão sua, a criatura pode realizar um teste de resistência de Sabedoria. Se obtiver sucesso, a magia termina naquela criatura.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "3"
  },
  {
    id: "214",
    name: "Mensageiro Animal",
    school: "encantamento",
    castTime: "1 ação",
    range: "9 metros",
    components: "V, S, M",
    duration: "24 horas",
    concentration: false,
    material: "Material: um punhado de comida.",
    description: "Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 3° nível ou superior, a duração da magia aumenta em 48 horas para cada nível do espaço acima do 2°.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "2"
  },
  {
    id: "215",
    name: "Mensagem",
    school: "transmutação",
    castTime: "1 ação",
    range: "36 metros",
    components: "V, S, M",
    duration: "1 rodada",
    concentration: false,
    material: "Material: um pedaço curto de fio de cobre.",
    description: "Você pode conjurar essa magia através de objetos sólidos se você tiver familiaridade com o alvo. Silêncio mágico, 30 centímetros de rocha, 2,5 centímetros de metal comum, uma fina camada de chumbo, ou 90 centímetros de madeira ou terra bloqueiam a magia. A magia não precisa seguir uma linha reta e pode viajar livremente, dobrando esquinas ou através de aberturas.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "0"
  },
  {
    id: "216",
    name: "Mesclar-se Às Rochas",
    school: "transmutação",
    castTime: "1 ação",
    range: "toque",
    components: "V, S",
    duration: "8 horas",
    concentration: false,
    material: "Você entra em um objeto ou superfície rochoso, grande o suficiente para comportar seu corpo inteiro, mesclando-se, junto com todo o equipamento que você esteja carregando, com a rocha pela duração. Usando seu movimento, você entra na rocha num ponto que você possa tocar. Nada da sua presença ficará visível ou, de outra forma, detectável por sentidos não-mágicos.",
    description: "Pequenos danos físicos a rocha não ferem você, mas destruição parcial ou uma mudança no formato (fazendo que você já não caiba mais dentro dela) expelirá você causando-lhe 6d6 de dano de concussão. A destruição completa da rocha (ou transmutação em uma substância diferente) expelirá você causando-lhe 50 de dano de concussão. Se você for expelido, você ficará caído no chão em um espaço desocupado perto de onde você entrou da primeira vez.",
    classesList: [],
    "nivel": "3"
  },
  {
    id: "217",
    name: "Metamorfose",
    school: "transmutação",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, S, M",
    duration: "até 1 hora",
    concentration: true,
    material: "Material: um casulo de lagarta.",
    description: "O equipamento do alvo mescla-se a sua nova forma. O alvo não pode ativar, empunhar ou, de outra forma, se beneficiar de qualquer de seus equipamentos.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "4"
  },
  {
    id: "218",
    name: "Metamorfose Verdadeira",
    school: "transmutação",
    castTime: "1 ação",
    range: "9 metros",
    components: "V, S, M",
    duration: "até 1 hora",
    concentration: true,
    material: "Material: uma gota de mercúrio, uma porção de goma arábica e um pouco de fumaça.",
    description: "Criatura em Objeto. Se você transformar uma criatura em um objeto, ela se transformará, junto com tudo que estiver vestindo ou carregando, nessa forma. As estatísticas da criatura tornam-se as do objeto e a criatura não se lembrará do tempo que passou nessa forma, depois da magia acabar e ela retornar a sua forma normal.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "9"
  },
  {
    id: "219",
    name: "Miragem",
    school: "ilusão",
    castTime: "10 minutos",
    range: "visão",
    components: "V, S",
    duration: "10 dias",
    concentration: false,
    material: "Você faz um terreno em uma área de até 1,5 quilômetro quadrados pareça, soe, cheire e, até, sinta com outro tipo de terreno natural. Os formatos gerais do terreno permanecem os mesmos, no entanto. Campos abertos ou uma estrada podem ser modificados para se assemelharem a um pântano, colina, fenda ou algum outro tipo de terreno difícil ou intransponível. Uma lagoa pode ser modificada para se parecer com um prado, um precipício com um declive suave ou um barranco pedregoso com uma estrada larga e lisa.",
    description: "Criaturas com visão verdadeira podem ver através da ilusão a verdadeira forma do terreno; porém, todos os outros elementos da ilusão permanecem, então, mesmo que a criatura esteja ciente da presença da ilusão, ela ainda interage fisicamente com a ilusão.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "7"
  },
  {
    id: "220",
    name: "Missão",
    school: "encantamento",
    castTime: "1 minuto",
    range: "18 metros",
    components: "V",
    duration: "30 dias",
    concentration: false,
    material: "Você impõe um comando mágico a uma criatura que você possa ver, dentro do alcance, forçando-a a fazer algum serviço ou reprimindo-a por alguma ação ou curso de atividade, como você decidir. Se a criatura puder compreender você, ela deve ser bem sucedida num teste de resistência de Sabedoria ou ficará enfeitiçada por você pela duração. Enquanto a criatura estiver enfeitiçada por você, ela sofrerá 5d6 de dano psíquico toda vez que ela agir de maneira diretamente contrária às suas instruções, mas não mais de uma vez por dia. Uma criatura que não puder compreender você não é afetada por essa magia.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 7° ou 8° nível, a duração será 1 ano. Quando você conjurar essa magia usando um espaço de magia de 9° nível, a magia dura até ser terminada por uma das magias mencionadas acima.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "6",
        name: "mago"
      },
      {
        id: "7",
        name: "paladino"
      }
    ],
    "nivel": "5"
  },
  {
    id: "221",
    name: "Mísseis Mágicos",
    school: "evocação",
    castTime: "1 ação",
    range: "36 metros",
    components: "V, S",
    duration: "instantânea",
    concentration: false,
    material: "Você cria três dardos brilhantes de energia mística. Cada dardo atinge uma criatura, à sua escolha, que você possa ver, dentro do alcance. Um dardo causa 1d4 + 1 de dano de energia ao alvo. Todos os dardos atingem simultaneamente e você pode direciona-los para atingir uma criatura ou várias.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, a magia cria um dardo adicional para cada nível do espaço acima do 1°.",
    classesList: [
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "1"
  },
  {
    id: "222",
    name: "Modificar Memória",
    school: "encantamento",
    castTime: "1 ação",
    range: "9 metros",
    components: "V, S",
    duration: "até 1 minuto",
    concentration: true,
    material: "Você tenta modelar as memórias de outra criatura. Uma criatura que você possa ver, deve realizar um teste de resistência de Sabedoria. Se você estiver lutando com a criatura, ela terá vantagem no teste de resistência. Se falhar na resistência, o alvo fica enfeitiçado por você pela duração. O alvo enfeitiçado está incapacitado e não sabe o que está acontecendo seu redor, apesar de ainda poder ouvir você. Se ele sofrer qualquer dano ou for alvo de outra magia, essa magia acaba, e nenhuma das memórias do alvo é modificada.",
    description: "Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 6° nível ou superior, você pode alterar a memória do alvo de um evento que aconteceu a até 7 dias atrás (6° nível), 30 dias atrás (7° nível), 1 ano atrás (8° nível) ou em qualquer momento do passado da criatura (9° nível).",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "5"
  },
  {
    id: "223",
    name: "Moldar Rochas",
    school: "transmutação",
    castTime: "1 ação",
    range: "toque",
    components: "V, S, M",
    duration: "instantânea",
    concentration: false,
    material: "Material: barro mole, que deve ser trabalhado aproximadamente com a forma desejada para o objeto de pedra.",
    description: "Você toca um objeto de pedra de tamanho Médio ou menor, ou uma seção de rocha com não mais de 1,5 metro em qualquer dimensão e modela-a em qualquer forma que sirva aos seus propósitos. Então, por exemplo, você poderia modelar uma pedra grande em uma arma, ídolo ou caixão, ou fazer uma pequena passagem através de um muro, contanto que o muro não tenha mais de 1,5 metro de espessura. Você poderia, também, modelar uma porta de pedra ou sua moldura para selar a porta. O objeto que você cria pode ter até duas dobradiças e um trinco, mas detalhes mecânicos mais complexos não são possíveis.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "4"
  },
  {
    id: "224",
    name: "Montaria Fantasmagórica",
    school: "ilusão",
    castTime: "1 minuto",
    range: "9 metros",
    components: "V, S",
    duration: "1 hora",
    concentration: false,
    material: "Uma criatura Grande, quase-real, similar a um cavalo, aparece no solo em um espaço desocupado, à sua escolha, dentro do alcance. Você decide a aparência da criatura, mas ela é equipada com sela, estribo e arreio. Qualquer equipamento criado por essa magia vira fumaça caso se afaste a mais de 3 metros da montaria.",
    description: "Pela duração, você ou a criatura que você escolher, pode cavalgar a montaria. A criatura usa as estatísticas de um cavalo de montaria, exceto por seu deslocamento ser de 30 metros e poder viajar 15 quilômetros em uma hora, ou 20 quilômetros em um ritmo rápido. Quando a magia acaba, a montaria desaparece gradualmente, dando ao cavaleiro 1 minuto para desmontar. A magia acaba se você usar uma ação para dissipa-la ou se a montaria sofrer qualquer dano.",
    classesList: [
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "3"
  },
  {
    id: "225",
    name: "Mover Terra",
    school: "transmutação",
    castTime: "1 ação",
    range: "36 metros",
    components: "V, S, M",
    duration: "até 2 horas",
    concentration: true,
    material: "Material: uma lâmina de ferro e uma pequena sacola contendo uma mistura de solos – argila, barro e areia.",
    description: "Similarmente, essa magia não afeta diretamente o crescimento da vegetação. A terra movida carrega quaisquer plantas no caminho junto com ela.",
    classesList: [
      {
        id: "4",
        name: "druida"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "6"
  },
  {
    id: "226",
    name: "Movimentação Livre",
    school: "abjuração",
    castTime: "1 ação",
    range: "toque",
    components: "V, S, M",
    duration: "1 hora",
    concentration: false,
    material: "Material: uma fita de couro, enrolada no braço ou apêndice similar.",
    description: "O alvo também pode gastar 1,5 metro de deslocamento para escapar, automaticamente, de impedimentos não- mágicos, como algemas ou o agarrão de uma criatura. Finalmente, estar submerso não impõe penalidades no deslocamento ou ataques do alvo.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "4"
  },
  {
    id: "227",
    name: "Muralha de Energia",
    school: "evocação",
    castTime: "1 ação",
    range: "36 metros",
    components: "V, S, M",
    duration: "até 10 minutos",
    concentration: true,
    material: "Material: um pouco de pó feito de uma gema transparente esmagada.",
    description: "Nada pode passar fisicamente através da muralha. Ela é imune a todos os danos e não pode ser dissipada por dissipar magia. A magia desintegrar destrói a muralha instantaneamente, no entanto. A muralha também se estende ao Plano Etéreo, bloqueando a viagem etérea através dela.",
    classesList: [
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "5"
  },
  {
    id: "228",
    name: "Muralha de Espinhos",
    school: "conjuração",
    castTime: "1 ação",
    range: "36 metros",
    components: "V, S, M",
    duration: "até 10 minutos",
    concentration: true,
    material: "Material: um punhado de espinhos.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 7° nível ou superior, ambos os tipos de dano aumentam em 1d8 para cada nível do espaço acima do 6°.",
    classesList: [
      {
        id: "4",
        name: "druida"
      }
    ],
    "nivel": "6"
  },
  {
    id: "229",
    name: "Muralha de Fogo",
    school: "evocação",
    castTime: "1 ação",
    range: "36 metros",
    components: "V, S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: um pequeno pedaço de fósforo.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 5° nível ou superior, o dano aumenta em 1d8 para cada nível do espaço acima do 4°.",
    classesList: [
      {
        id: "4",
        name: "druida"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "4"
  },
  {
    id: "230",
    name: "Muralha de Gelo",
    school: "evocação",
    castTime: "1 ação",
    range: "36 metros",
    components: "V, S, M",
    duration: "até 10 minutos",
    concentration: true,
    material: "Material: um pequeno pedaço de quartzo.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 7° nível ou superior, o dano causado quando ela aparece aumenta em 2d6 e o dano por atravessar através da camada de ar gelado aumenta em 1d6 para cada nível do espaço acima do 6°.",
    classesList: [
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "6"
  },
  {
    id: "231",
    name: "Muralha de Pedra",
    school: "conjuração",
    castTime: "1 ação",
    range: "36 metros",
    components: "V, S, M",
    duration: "até 10 minutos",
    concentration: true,
    material: "Material: um pequeno bloco de granito.",
    description: "Se você mantiver sua concentração nessa magia por toda a duração, a muralha se tornará permanente e não poderá ser dissipada. Do contrário, a muralha desaparece quando a magia acabar.",
    classesList: [
      {
        id: "4",
        name: "druida"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "5"
  },
  {
    id: "232",
    name: "Muralha de Vento",
    school: "evocação",
    castTime: "1 ação",
    range: "36 metros",
    components: "V, S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: um leque minúsculo e uma pena de origem exótica.",
    description: "Os ventos fortes mantem névoa, fumaça e outros gases afastados. Criaturas ou objetos voadores Pequenos ou menores, não podem atravessar a muralha. Materiais leves e soltos trazidos para a muralha são arremessados para cima. Flechas, virotes e outros projéteis ordinários disparados contra alvos além da muralha são defletidos para cima e erram automaticamente. (Pedras arremessadas por gigantes ou armas de cerco e projéteis similares, não são afetados.) As criaturas em forma gasosa não podem atravessa-la.",
    classesList: [
      {
        id: "4",
        name: "druida"
      },
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "3"
  },
  {
    id: "233",
    name: "Muralha Prismática",
    school: "abjuração",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, S",
    duration: "10 minutos",
    concentration: false,
    material: "Uma plano cintilante multicolorido de luzes forma uma parece vertical opaca – de até 27 metros de comprimento, 9 metros de altura e 2,5 centímetros de espessura – centrada num ponto que você possa ver, dentro do alcance. Alternativamente, você pode moldar a muralha numa esfera de 9 metros de diâmetro centrada num ponto, à sua escolha, dentro do alcance. A muralha permanece no lugar pela duração. Se você posicionar a muralha de forma que ela passaria através do espaço ocupado por uma criatura, a magia falha e sua ação e o espaço de magia são desperdiçados.",
    description: "7. Violeta. Se falhar na resistência, o alvo ficará cego. Ele deve realizar um teste de resistência de Sabedoria no início do seu próximo turno. Um sucesso na resistência acaba com a cegueira. Se falhar na resistência, a criatura é transportada para outro plano de existência, escolhido pelo Mestre, e não estará mais cego. (Tipicamente, uma criatura que esteja em um plano que não seja o seu plano natal é banida para lá, enquanto que outras criaturas geralmente são enviadas para os Planos Astral ou Etéreo.) Essa camada é destruída pela magia dissipar magia ou por uma magia similar de nível equivalente ou superior que possa acabar com magias e efeitos mágicos.",
    classesList: [
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "9"
  },
  {
    id: "234",
    name: "Nevasca",
    school: "conjuração",
    castTime: "1 ação",
    range: "45 metros",
    components: "V, S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: um punhado de poeira e algumas gotas de água.",
    description: "Se um, criatura estiver se concentrando na área da magia, a criatura deve realizar um teste de resistência de Constituição contra a CD da magia, ou perderá a concentração.",
    classesList: [
      {
        id: "4",
        name: "druida"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "3"
  },
  {
    id: "235",
    name: "Névoa Fétida",
    school: "conjuração",
    castTime: "1 ação",
    range: "27 metros",
    components: "V, S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: um ovo podre ou várias folhas de repolho.",
    description: "Um vento moderado (pelo menos 15 quilômetros por hora) dispersará a névoa depois de 4 rodadas. Um vento forte (pelo menos 30 quilômetros por hora) dispersará a névoa após 1 rodada.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "3"
  },
  {
    id: "236",
    name: "Névoa Mortal",
    school: "conjuração",
    castTime: "1 ação",
    range: "36 metros",
    components: "V, S",
    duration: "até 10 minutos",
    concentration: true,
    material: "Você cria uma esfera de nevoeiro venenoso de cor amarelo-esverdeado, com 6 metros de raio, centrado em um ponto, à sua escolha, dentro do alcance. O nevoeiro se espalha, dobrando esquinas. Ele permanece pela duração ou até um vento forte dispersar o nevoeiro, terminando a magia. Sua área é de escuridão densa.",
    description: "Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 6° nível ou superior, o dano aumenta em 1d8 para cada nível do espaço acima do 5°.",
    classesList: [
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "5"
  },
  {
    id: "237",
    name: "Névoa Obscurecente",
    school: "conjuração",
    castTime: "1 ação",
    range: "36 metros",
    components: "V, S",
    duration: "até 1 hora",
    concentration: true,
    material: "Você cria uma esfera de 6 metros de raio de névoa, centrada num ponto, dentro do alcance. A esfera se espalha, dobrando esquinas, e a área dela é de escuridão densa. Ela permanece pela duração ou até um vento moderado ou mais rápido (pelo menos 15 quilômetros por hora) dispersa-la.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o raio da névoa aumenta em 6 metros para cada nível do espaço acima do 1°.",
    classesList: [
      {
        id: "4",
        name: "druida"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      },
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "1"
  },
  {
    id: "238",
    name: "Nublar",
    school: "ilusão",
    castTime: "1 ação",
    range: "pessoal",
    components: "V",
    duration: "até 1 minuto",
    concentration: true,
    material: "Seu corpo se torna turvo, mudando e oscilando para todos que puderem ver você. Pela duração, qualquer criatura terá desvantagem nas jogadas de ataque contra você. Um atacante é imune a esse efeito se não depender de visão, como os que tenham percepção às cegas ou os que puderem ver através de ilusões, como os com visão verdadeira.",
    description: "Seu corpo se torna turvo, mudando e oscilando para todos que puderem ver você. Pela duração, qualquer criatura terá desvantagem nas jogadas de ataque contra você. Um atacante é imune a esse efeito se não depender de visão, como os que tenham percepção às cegas ou os que puderem ver através de ilusões, como os com visão verdadeira.",
    classesList: [
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "2"
  },
  {
    id: "239",
    name: "Nuvem de Adagas",
    school: "conjuração",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: uma lasca de vidro.",
    description: "Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 3° nível ou superior, o dano aumenta em 2d4 para cada nível do espaço acima do 2°.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "2"
  },
  {
    id: "240",
    name: "Nuvem Incendiária",
    school: "conjuração",
    castTime: "1 ação",
    range: "45 metros",
    components: "V, S",
    duration: "até 1 minuto",
    concentration: true,
    material: "Uma nuvem de fumaça rodopiante que dispara brasas incandescentes aparece numa esfera de 6 metros centrada num ponto, dentro do alcance. A nuvem se espalha, dobrando esquinas, e gera escuridão densa. Ela permanece pela duração ou até que um vento de velocidade moderada ou mais forte (pelo menos 15 quilômetros por hora) a disperse.",
    description: "A nuvem se afasta 3 metros de você numa direção, que você escolheu, no começo de cada um dos seus turnos.",
    classesList: [
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "8"
  },
  {
    id: "241",
    name: "Olho Arcano",
    school: "adivinhação",
    castTime: "1 ação",
    range: "9 metros",
    components: "V, S, M",
    duration: "até 1 hora",
    concentration: true,
    material: "Material: um punhado de pelo de morcego.",
    description: "Com uma ação, você pode mover o olho até 9 metros em qualquer direção. Não existe limite de quão longe de você o olho pode se mover, mas ele não pode entrar em outro plano de existência. Uma barreira solida bloqueia o movimento do olho, mas o olho pode passar através de aberturas de até 3 centímetros de diâmetro.",
    classesList: [
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "4"
  },
  {
    id: "242",
    name: "Onda Destrutiva",
    school: "evocação",
    castTime: "1 ação",
    range: "pessoal",
    components: "V",
    duration: "instantânea",
    concentration: false,
    material: "Você golpeia o chão, criando uma explosão de energia divina que se propaga de você. Cada criatura, à sua escolha, a até 9 metros de você, deve ser bem sucedida em um teste de resistência de Constituição ou sofrerá 5d5 de dano trovejante, assim como 5d6 de dano radiante ou necrótico (à sua escolha), e será derrubada no chão. Uma criatura que obtenha sucesso no teste de resistência sofre metade desse dano e não é derrubada no chão.",
    description: "Você golpeia o chão, criando uma explosão de energia divina que se propaga de você. Cada criatura, à sua escolha, a até 9 metros de você, deve ser bem sucedida em um teste de resistência de Constituição ou sofrerá 5d5 de dano trovejante, assim como 5d6 de dano radiante ou necrótico (à sua escolha), e será derrubada no chão. Uma criatura que obtenha sucesso no teste de resistência sofre metade desse dano e não é derrubada no chão.",
    classesList: [
      {
        id: "7",
        name: "paladino"
      }
    ],
    "nivel": "5"
  },
  {
    id: "243",
    name: "Onda Trovejante",
    school: "evocação",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S",
    duration: "instantânea",
    concentration: false,
    material: "Uma onda de força trovejante varre tudo a partir de você. Cada criatura num cubo de 4,5 metros originado em você, deve realizar um teste de resistência de Constituição. Se falhar na resistência, uma criatura sofrerá 2d8 de dano trovejante e será empurrada 3 metros para longe de você. Se obtive sucesso na resistência, a criatura sofrerá metade desse dano e não será empurrada.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o dano aumenta em 1d8 para cada nível acima do 1°.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "1"
  },
  {
    id: "244",
    name: "Oração Curativa",
    school: "evocação",
    castTime: "10 minutos",
    range: "9 metros",
    components: "V",
    duration: "instantânea",
    concentration: false,
    material: "Até seis criaturas, à sua escolha, que você possa ver, dentro do alcance, recuperam uma quantidade de pontos de vida igual a 2d8 + seu modificador de habilidade de conjuração, cada uma. Essa magia não afeta mortos-vivos ou constructos.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, a cura aumenta em 1d8 para cada nível do espaço acima do 2°.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      }
    ],
    "nivel": "2"
  },
  {
    id: "245",
    name: "Orbe Cromática",
    school: "evocação",
    castTime: "1 ação",
    range: "27 metros",
    components: "V, S, M",
    duration: "instantânea",
    concentration: false,
    material: "Material: um diamante valendo, no mínimo, 50 po.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o dano aumenta em 1d8 para cada nível do espaço acima do 1°.",
    classesList: [
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "1"
  },
  {
    id: "246",
    name: "Orientação",
    school: "adivinhação",
    castTime: "1 ação",
    range: "toque",
    components: "V, S",
    duration: "até 1 minuto",
    concentration: true,
    material: "Você toca uma criatura voluntária. Uma vez, antes da magia acabar, o alvo pode rolar um d4 e adicionar o número rolado a um teste de habilidade a escolha dele. Ele pode rolar o dado antes ou depois de realizar o teste de habilidade. Após isso, a magia termina.",
    description: "Você toca uma criatura voluntária. Uma vez, antes da magia acabar, o alvo pode rolar um d4 e adicionar o número rolado a um teste de habilidade a escolha dele. Ele pode rolar o dado antes ou depois de realizar o teste de habilidade. Após isso, a magia termina.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "4",
        name: "druida"
      }
    ],
    "nivel": "0"
  },
  {
    id: "247",
    name: "Padrão Hipnótico",
    school: "ilusão",
    castTime: "1 ação",
    range: "36 metros",
    components: "S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: uma vareta brilhante de incenso ou um frasco de cristal cheio de material fosforescente.",
    description: "A magia acaba em uma criatura afetada se ela sofrer dano ou se alguém usar uma ação para agitar a criatura para tira-la de seu estupor.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "3"
  },
  {
    id: "248",
    name: "Palavra Curativa",
    school: "evocação",
    castTime: "1 ação bônus",
    range: "18 metros",
    components: "V",
    duration: "instantânea",
    concentration: false,
    material: "Uma criatura, à sua escolha, que você possa ver dentro do alcance recupera uma quantidade de pontos de vida igual a 1d4 + seu modificador de habilidade de conjuração. Essa magia não tem efeito em mortos-vivos ou constructos",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, a cura aumenta em 1d4 para cada nível do espaço acima do 1°.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "4",
        name: "druida"
      }
    ],
    "nivel": "1"
  },
  {
    id: "249",
    name: "Palavra Curativa Em Massa",
    school: "evocação",
    castTime: "1 ação bônus",
    range: "18 metros",
    components: "V",
    duration: "instantânea",
    concentration: false,
    material: "À medida que você brada palavras de restauração, até seis criaturas, à sua escolha, que você possa ver, dentro do alcance, recuperam uma quantidade de pontos de vida igual a 1d4 + seu modificador de habilidade de conjuração. Essa magia não afeta mortos-vivos ou constructos.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, a cura aumenta em 1d4 para cada nível do espaço acima do 3°.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "3",
        name: "clérigo"
      }
    ],
    "nivel": "3"
  },
  {
    id: "250",
    name: "Palavra de Poder Atordoar",
    school: "encantamento",
    castTime: "1 ação",
    range: "18 metros",
    components: "V",
    duration: "instantânea",
    concentration: false,
    material: "Você pronuncia uma palavra de poder que pode oprimir a mente de uma criatura que você possa ver, dentro do alcance, deixando-a estupefata. Se o alvo escolhido estiver com 150 pontos de vida ou menos, ele ficará atordoado. Do contrário, essa magia não produz efeito.",
    description: "O alvo atordoado deve realizar um teste de resistência de Constituição no final de cada um dos turnos dele. Se obtiver sucesso na resistência, o efeito de atordoamento termina.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "8"
  },
  {
    id: "251",
    name: "Palavra de Poder Curar",
    school: "evocação",
    castTime: "1 ação",
    range: "toque",
    components: "V, S",
    duration: "instantânea",
    concentration: false,
    material: "Uma onda de energia curativa inunda a criatura tocada. O alvo recupera todos os seus pontos de vida. Se a criatura estiver enfeitiçada, amedrontada, paralisada ou atordoada, a condição termina. Se a criatura estiver caída, ela pode usar a reação dela para se levantar. Essa magia não afeta mortos-vivos ou constructos.",
    description: "Uma onda de energia curativa inunda a criatura tocada. O alvo recupera todos os seus pontos de vida. Se a criatura estiver enfeitiçada, amedrontada, paralisada ou atordoada, a condição termina. Se a criatura estiver caída, ela pode usar a reação dela para se levantar. Essa magia não afeta mortos-vivos ou constructos.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      }
    ],
    "nivel": "9"
  },
  {
    id: "252",
    name: "Palavra de Poder Matar",
    school: "encantamento",
    castTime: "1 ação",
    range: "18 metros",
    components: "V",
    duration: "instantânea",
    concentration: false,
    material: "Você profere uma palavra de poder que pode compelir uma criatura que você possa ver, dentro do alcance, a morrer instantaneamente. Se o alvo escolhido estiver com 100 pontos de vida ou menos, ele morre. Do contrário, essa magia não produz efeito.",
    description: "Você profere uma palavra de poder que pode compelir uma criatura que você possa ver, dentro do alcance, a morrer instantaneamente. Se o alvo escolhido estiver com 100 pontos de vida ou menos, ele morre. Do contrário, essa magia não produz efeito.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "9"
  },
  {
    id: "253",
    name: "Palavra de Recordação",
    school: "conjuração",
    castTime: "1 ação",
    range: "1,5 metro",
    components: "V",
    duration: "instantânea",
    concentration: false,
    material: "Você e até cinco criaturas voluntária a 1,5 metro de você, instantaneamente são teletransportadas para um santuário previamente designado. Você e qualquer criatura que se teletransportar com você, aparece no espaço desocupado mais próximo do ponto que você designou quando preparou seu santuário (veja abaixo). Se você conjurar essa magia sem ter preparado um santuário primeiro, a magia não funciona.",
    description: "Você deve designar um santuário na conjuração dessa magia dentro de um local, como um templo dedicado ou fortemente ligado a sua divindade. Se você tentar conjurar essa magia dessa forma em uma área que não seja dedicada à sua divindade, a magia não funciona.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      }
    ],
    "nivel": "6"
  },
  {
    id: "254",
    name: "Palavra Divina",
    school: "evocação",
    castTime: "1 ação bônus",
    range: "9 metros",
    components: "V",
    duration: "instantânea",
    concentration: false,
    material: "Você profere uma palavra divina, imbuída com o poder que moldou o mundo na aurora da criação. Escolha qualquer quantidade de criaturas que você possa ver dentro do alcance. Cada criatura que puder ouvir você deve realizar um teste de resistência de Carisma. Ao falhar na resistência, uma criatura sofre um efeito baseado nos seus pontos de vida atuais:",
    description: "Independentemente dos seus pontos de vida atuais, um celestial, corruptor, elemental ou fada que falhar na sua resistência é obrigado a voltar para o plano de origem dele (se já não for aqui) e não pode retornar para o plano atual por 24 horas através de nenhum meio inferior à magia desejo.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      }
    ],
    "nivel": "7"
  },
  {
    id: "255",
    name: "Parar o Tempo",
    school: "transmutação",
    castTime: "1 ação",
    range: "pessoal",
    components: "V",
    duration: "instantânea",
    concentration: false,
    material: "Você, por um breve momento, para o fluxo do tempo pra tudo, menos pra você. Nenhum tempo se passa para as outras criaturas, enquanto você realiza 1d4 + 1 turnos de uma vez, durante os quais você pode usar ações e se mover normalmente.",
    description: "Essa magia termina se uma das ações que você fizer durante esse período ou qualquer efeito que você criar, afetar uma criatura diferente de você ou um objeto que esteja sendo vestido ou carregado por outro que não você. Além disso, a magia termina se você se mover para um lugar a mais de 300 metros do local onde você conjurou essa magia.",
    classesList: [
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "9"
  },
  {
    id: "256",
    name: "Passo Nebuloso",
    school: "conjuração",
    castTime: "1 ação bônus",
    range: "pessoal",
    components: "V",
    duration: "instantânea",
    concentration: false,
    material: "Brevemente envolto por uma neblina prateada, você se teletransporta a até 9 metros para um espaço desocupado que você possa ver.",
    description: "Brevemente envolto por uma neblina prateada, você se teletransporta a até 9 metros para um espaço desocupado que você possa ver.",
    classesList: [
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "2"
  },
  {
    id: "257",
    name: "Passos Longos",
    school: "transmutação",
    castTime: "1 ação",
    range: "toque",
    components: "V, S, M",
    duration: "1 hora",
    concentration: false,
    material: "Material: um pouco de barro.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, você pode afetar uma criatura adicional para cada nível do espaço acima do 1°.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "6",
        name: "mago"
      },
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "1"
  },
  {
    id: "258",
    name: "Passos Sem Pegadas",
    school: "abjuração",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S, M",
    duration: "até 1 hora",
    concentration: true,
    material: "Material: cinzas de uma folha de visco queimada e um ramo de pinheiro.",
    description: "Um véu de sombras e silencia irradia de você, encobrindo você e seus companheiros contra detecção. Pela duração, cada criatura, à sua escolha, a até 9 metros de você (incluindo você) recebe +10 de bônus em testes de Destreza (Furtividade) e não pode ser rastreada, exceto por meio mágicos. Uma criatura que receber esse bônus não deixa quaisquer pegadas ou outros vestígios da sua passagem.",
    classesList: [
      {
        id: "4",
        name: "druida"
      },
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "2"
  },
  {
    id: "259",
    name: "Patas de Aranha",
    school: "transmutação",
    castTime: "1 ação",
    range: "toque",
    components: "V, S, M",
    duration: "até 1 hora",
    concentration: true,
    material: "Material: uma gota de betume e uma aranha.",
    description: "Até a magia acabar, uma criatura voluntária que você tocar, recebe a habilidade de se mover para cima, para baixo e através de superfícies verticais e de cabeça para baixo pelos tetos, enquanto deixa suas mãos livres. O alvo também ganha deslocamento de escalada igual a seu deslocamento de caminhada.",
    classesList: [
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "2"
  },
  {
    id: "260",
    name: "Pele de Árvore",
    school: "transmutação",
    castTime: "1 ação",
    range: "toque",
    components: "V, S, M",
    duration: "até 1 hora",
    concentration: true,
    material: "Material: um pedaço de casca de carvalho.",
    description: "Você toca uma criatura voluntária. Até o fim da magia, a pele da criatura fica rígida, similar a casca de um carvalho, e a CA do alvo não pode ser inferior a 16, independentemente do tipo de armadura que ela esteja vestindo.",
    classesList: [
      {
        id: "4",
        name: "druida"
      },
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "2"
  },
  {
    id: "261",
    name: "Pele de Pedra",
    school: "abjuração",
    castTime: "1 ação",
    range: "toque",
    components: "V, S, M",
    duration: "até 1 hora",
    concentration: true,
    material: "Material: pó de diamante no valor de 100 po, consumido pela magia.",
    description: "Essa magia transforma a pele de uma criatura voluntária que você tocar em rocha sólida. Até a magia acabar, o alvo tem resistência a dano de concussão, cortante e perfurante não-mágico.",
    classesList: [
      {
        id: "4",
        name: "druida"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      },
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "4"
  },
  {
    id: "262",
    name: "Pequena Cabana de Leomund",
    school: "evocação",
    castTime: "1 minuto",
    range: "pessoal",
    components: "V, S, M",
    duration: "8 horas",
    concentration: false,
    material: "Material: uma pequena conta de cristal.",
    description: "Até a magia acabar, você pode comandar o interior para que fique mal iluminado ou escuro. O domo é opaco do lado de fora, de qualquer cor que você desejar, mas é transparente do lado de dentro.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "3"
  },
  {
    id: "263",
    name: "Perdição",
    school: "encantamento",
    castTime: "1 ação",
    range: "9 metros",
    components: "V, S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: uma gota de sangue.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, você pode afetar uma criatura adicional para cada nível do espaço acima do 1°.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "3",
        name: "clérigo"
      }
    ],
    "nivel": "1"
  },
  {
    id: "264",
    name: "Piscar",
    school: "transmutação",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S",
    duration: "1 minuto",
    concentration: false,
    material: "Role um d20 no final de cada um dos seus turnos pela duração da magia. Com um resultado de 11 ou maior, você desaparece do seu plano de existência atual e reaparece no Plano Etéreo (a magia falha e a conjuração é perdida se você já estiver nesse plano). No início do seu próximo turno e quando a magia terminar, se você estiver no Plano Etéreo, você retorna a um espaço desocupado de sua escolha que você possa ver a até 3 metros do espaço em que você desapareceu. Se não houver um espaço disponível dentro do alcance, você reaparece no espaço desocupado mais próximo (escolhido aleatoriamente, se existir mais de um espaço a mesma distância). Você pode dissipar a magia com uma ação.",
    description: "Quando estiver no Plano Etéreo, você pode ver e ouvir o plano de onde você veio, que aparece em tons de cinza, e você não pode ver nada além de 18 metros. Você só pode afetar ou ser afetado por outras criaturas no Plano Etéreo. As criaturas que não estiverem lá não podem notar você nem interagir com você, a não ser que elas tenham uma habilidade que as permita.",
    classesList: [
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "3"
  },
  {
    id: "265",
    name: "Porta Dimensional",
    school: "conjuração",
    castTime: "1 ação",
    range: "150 metros",
    components: "V",
    duration: "instantânea",
    concentration: false,
    material: "Você se teletransporte da sua posição atual para qualquer local dentro do alcance. Você aparece exatamente no local desejado. Pode ser um lugar que você possa ver, um que você possa visualizar ou um que você possa descrever indicando a distância e direção, como “60 metros diretamente pra baixo” ou “90 metros, subindo para noroeste num ângulo de 45 graus”.",
    description: "Se você aparecer em um lugar que já esteja ocupado por um objeto ou uma criatura, você e qualquer criatura viajando com você, sofrem 4d6 de dano de energia cada um e a magia falha em teletransportar vocês.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "4"
  },
  {
    id: "266",
    name: "Portal",
    school: "conjuração",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: um diamante valendo, no mínimo, 5.000 po.",
    description: "Quando você conjurar essa magia, você pode falar o nome de uma criatura especifica (um pseudônimo, título ou apelido não funcionará). Se essa criatura estiver em um plano diferente do que você está, o portal se abre na vizinhança imediata da criatura nomeada e suga a criatura para dentro do portal, fazendo-a aparecer no espaço desocupado mais próximo do seu lado do portal. Você não adquire qualquer poder especial sobre a criatura e ela está livre para agir como o Mestre julgar apropriado. Ela pode ir embora, atacar você ou ajudar você.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "9"
  },
  {
    id: "267",
    name: "Portal Arcano",
    school: "conjuração",
    castTime: "1 ação",
    range: "150 metros",
    components: "V, S",
    duration: "até 10 minutos",
    concentration: true,
    material: "Você cria portais de teletransporte conectados que permanecem abertos pela duração. Escolha dois pontos no solo que você possa ver, um ponto a até 3 metros de você e outro a até 150 metros de você. Um portal circular, com 3 metros de diâmetro, se abre em cada ponto. Se o portal se abriria num local ocupado por uma criatura, a magia falha e a conjuração é perdida.",
    description: "Qualquer criatura ou objeto que adentrar o portal, sairá pelo outro portal, como se ambos estivessem adjacentes um ao outro; atravessar um portal do lado que não é um portal não tem efeito. A névoa que preenche cada portal é opaca e bloqueia a visão através dele. No seu turno, você pode girar os anéis, com uma ação bônus, fazendo o lado ativo ficar em uma direção diferente.",
    classesList: [
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "6"
  },
  {
    id: "268",
    name: "Praga",
    school: "necromancia",
    castTime: "1 ação",
    range: "toque",
    components: "V, S",
    duration: "7 dias",
    concentration: false,
    material: "Seu toque inflige uma doença. Faça um ataque de magia corpo-a-corpo contra uma criatura ao seu alcance. Se atingir, você aflige a criatura com uma doença, de sua escolha, entre qualquer um das descritas abaixo. No final de cada turno do alvo, ele deve realizar um teste de resistência de Constituição. Após obter três falhas nesses testes de resistência, o efeito da doença permanece pela duração e a criatura para de fazer testes de resistência. Após obter três sucessos nesses testes de resistência, a criatura se recupera da doença e a magia termina.",
    description: "Tremedeira. A criatura é acometida por espasmos. A criatura tem desvantagem em testes de Destreza, testes de resistência de Destreza e jogadas de ataque que usem Destreza.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "4",
        name: "druida"
      }
    ],
    "nivel": "5"
  },
  {
    id: "269",
    name: "Praga de Insetos",
    school: "conjuração",
    castTime: "1 ação",
    range: "90 metros",
    components: "V, S, M",
    duration: "até 10 minutos",
    concentration: true,
    material: "Material: alguns grãos de açúcar, alguns miolos de grão e uma mancha de gordura.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 6° nível ou superior, o dano aumenta em 1d10 para cada nível do espaço acima do 5°.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "5",
        name: "feiticeiro"
      }
    ],
    "nivel": "5"
  },
  {
    id: "270",
    name: "Prestidigitação",
    school: "transmutação",
    castTime: "1 ação",
    range: "3 metros",
    components: "V, S",
    duration: "até 1 hora",
    concentration: false,
    material: "Essa magia é um truque mágico simples que conjuradores iniciantes usam para praticar. Você cria um dos seguintes efeitos mágicos dentro do alcance:",
    description: "Se você conjurar essa magia diversas vezes, você pode ter até três dos seus efeitos não-instantâneos ativos, ao mesmo tempo, e você pode dissipar um desses efeitos com uma ação.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "0"
  },
  {
    id: "271",
    name: "Prisão de Energia",
    school: "evocação",
    castTime: "1 ação",
    range: "30 metros",
    components: "V, S, M",
    duration: "1 hora",
    concentration: false,
    material: "Material: pó de rubi no valor de 1.500 po.",
    description: "Essa magia não pode ser dissipada por dissipar magia.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "7"
  },
  {
    id: "272",
    name: "Proibição",
    school: "abjuração",
    castTime: "10 minutos",
    range: "toque",
    components: "V, S, M",
    duration: "1 dia",
    concentration: false,
    material: "Material: uma borrifada de água benta, incensos raros e pó de rubi valendo, no mínimo,\n1.000 po.",
    description: "A área da magia não pode sobrepor a área de outra magia proibição. Se você conjurar proibição a cada dia por 30 dias no mesmo local, a magia durará até ser dissipada, e os componentes materiais serão consumidos apenas na última conjuração.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      }
    ],
    "nivel": "6"
  },
  {
    id: "273",
    name: "Projeção Astral",
    school: "necromancia",
    castTime: "1 hora",
    range: "3 metros",
    components: "V, S, M",
    duration: "especial",
    concentration: false,
    material: "Material: para cada criatura que você afetar com essa magia, você deve fornecer um jacinto valendo, no mínimo, 1.000 po e uma barra de prata com ornamentos esculpidos valendo, no mínimo, 100 po, todos consumidos pela magia.",
    description: "Se você retornar para o seu corpo prematuramente, seus companheiros permanecem nas suas formas astrais e devem encontrar seus próprios meios de voltar para seus corpos, geralmente caindo a 0 pontos de vida.",
    classesList: [
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "9"
  },
  {
    id: "274",
    name: "Projetar Imagem",
    school: "ilusão",
    castTime: "1 ação",
    range: "750 quilômetros",
    components: "V, S, M",
    duration: "até 1 dia",
    concentration: true,
    material: "Material: uma pequena réplica sua feita com materiais valendo, no mínimo, 5 po.",
    description: "Interação física com a imagem revelará ela como sendo uma ilusão, já que as coisas podem atravessa-la. Uma criatura que usar sua ação para examinar a imagem, pode determinar que ela é uma ilusão sendo bem sucedida num teste de Inteligência (Investigação) contra a CD da magia para desacredita-la. Se a criatura discernir a ilusão como ela é, a criatura poderá ver através da imagem e qualquer barulho que ela fizer soará oco para a criatura.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "7"
  },
  {
    id: "275",
    name: "Proteção contra a Morte",
    school: "abjuração",
    castTime: "1 ação",
    range: "toque",
    components: "V, S",
    duration: "8 horas",
    concentration: false,
    material: "Você toca uma criatura e concede a ela uma certa proteção contra a morte.",
    description: "Se a magia ainda estiver funcionando quando o alvo for afetado por um efeito que poderia mata-lo instantaneamente sem causar dano, o efeito, ao invés disso, não funciona no alvo e a magia termina.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "7",
        name: "paladino"
      }
    ],
    "nivel": "4"
  },
  {
    id: "276",
    name: "Proteção contra Energia",
    school: "abjuração",
    castTime: "1 ação",
    range: "toque",
    components: "V, S",
    duration: "até 1 hora",
    concentration: true,
    material: "Pela duração, a criatura voluntária que você tocar terá resistência a um tipo de dano de sua escolha: ácido, elétrico, fogo, frio ou trovejante.",
    description: "Pela duração, a criatura voluntária que você tocar terá resistência a um tipo de dano de sua escolha: ácido, elétrico, fogo, frio ou trovejante.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      },
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "3"
  },
  {
    id: "277",
    name: "Proteção contra Lâminas",
    school: "abjuração",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S",
    duration: "1 rodada",
    concentration: false,
    material: "Você estende suas mãos e desenha um símbolo de proteção no ar. Até o final do seu próximo turno, você terá resistência contra dano de concussão, cortante e perfurante causado por ataques com armas.",
    description: "Você estende suas mãos e desenha um símbolo de proteção no ar. Até o final do seu próximo turno, você terá resistência contra dano de concussão, cortante e perfurante causado por ataques com armas.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "0"
  },
  {
    id: "278",
    name: "Proteção contra o Bem e Mal",
    school: "abjuração",
    castTime: "1 ação",
    range: "toque",
    components: "V, S, M",
    duration: "até 10 minutos",
    concentration: true,
    material: "Material: água benta ou pó de prata e ferro, consumidos pela magia.",
    description: "A proteção garante diversos benefícios. As criaturas desse tipo tem desvantagem nas jogadas de ataque contra o alvo. O alvo não pode ser enfeitiçado, amedrontado ou possuído por elas. Se o alvo já estiver enfeitiçado, amedrontado ou possuído por uma dessas criaturas, o alvo terá vantagem em qualquer novo teste de resistência contra o efeito relevante.",
    classesList: [
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "6",
        name: "mago"
      },
      {
        id: "7",
        name: "paladino"
      }
    ],
    "nivel": "1"
  },
  {
    id: "279",
    name: "Proteção contra Veneno",
    school: "abjuração",
    castTime: "1 ação",
    range: "toque",
    components: "V, S",
    duration: "1 hora",
    concentration: false,
    material: "Você toca uma criatura. Se ela estiver envenenada, você neutraliza o veneno. Se mais de um veneno estiver afligindo o alvo, você neutraliza um veneno, que você saiba estar presente, ou neutraliza um aleatório.",
    description: "Pela duração, o alvo terá vantagem em testes de resistência para não envenenado e terá resistência a dano de veneno.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "7",
        name: "paladino"
      },
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "2"
  },
  {
    id: "280",
    name: "Proteger Fortaleza",
    school: "abjuração",
    castTime: "10 minutos",
    range: "toque",
    components: "V, S, M",
    duration: "24 horas",
    concentration: false,
    material: "Material: incenso aceso, uma porção de enxofre e óleo, uma corda amarrada, uma porção de sangue de tribulo brutal e um pequeno bastão de prata valendo, no mínimo, 10 po.",
    description: "Outros Efeitos de Magia. Você pode colocar, à sua escolha, um dos seguintes efeitos mágicos dentro da área protegida de uma fortaleza.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "6"
  },
  {
    id: "281",
    name: "Purificar Alimentos",
    school: "transmutação",
    castTime: "1 ação",
    range: "3 metros",
    components: "V, S",
    duration: "instantânea",
    concentration: false,
    material: "Toda comida e bebida não-mágica dentro de uma esfera de 1,5 metro de raio centrada num ponto, à sua escolha, dentro do alcance é purificada e se livrada de venenos ou doenças.",
    description: "Toda comida e bebida não-mágica dentro de uma esfera de 1,5 metro de raio centrada num ponto, à sua escolha, dentro do alcance é purificada e se livrada de venenos ou doenças.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "7",
        name: "paladino"
      }
    ],
    "nivel": "1"
  },
  {
    id: "282",
    name: "Queda Suave",
    school: "transmutação",
    castTime: "1 reação",
    range: "18 metros",
    components: "V, M",
    duration: "1 minuto",
    concentration: false,
    material: "Reação que você realiza quando você ou uma criatura a até 18 metros cair.",
    description: "Escolha até cinco criaturas caindo, dentro do alcance. A taxa de descendência de uma criatura caindo é reduzida para 18 metros por rodada, até o fim da magia. Se a criatura aterrissar antes da magia acabar, ela não sofre nenhum dano de queda, pode aterrissar em pé e a magia termina para essa criatura.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "1"
  },
  {
    id: "283",
    name: "Raio Adoecente",
    school: "necromancia",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, S",
    duration: "instantânea",
    concentration: false,
    material: "Um raio adoecente de energia esverdeada chicoteia na direção de uma criatura dentro do alcance. Faça um ataque à distância com magia contra o alvo. Se atingir, o alvo sofrerá 2d8 de dano de veneno e deve realizar um teste de resistência de Constituição. Se falhar na resistência, ele também ficará envenenado até o final do seu próximo turno.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o dano da magia aumenta em 1d8 para cada nível do espaço acima do 1°.",
    classesList: [
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "1"
  },
  {
    id: "284",
    name: "Raio Ardente",
    school: "evocação",
    castTime: "1 ação",
    range: "36 metros",
    components: "V, S",
    duration: "instantânea",
    concentration: false,
    material: "Você cria três raios de fogo e os arremessa em alvos dentro do alcance. Você pode arremessa-los em um alvo ou em vários.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, você cria um raio adicional para cada nível do espaço acima do 2°.",
    classesList: [
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "2"
  },
  {
    id: "285",
    name: "Raio de Bruxa",
    school: "evocação",
    castTime: "1 ação",
    range: "9 metros",
    components: "V, S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: um galho de uma árvore que tenha sido atingida por um relâmpago.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o dano inicial aumenta em 1d12 para cada nível do espaço acima do 1°.",
    classesList: [
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "1"
  },
  {
    id: "286",
    name: "Raio de Fogo",
    school: "evocação",
    castTime: "1 ação",
    range: "36 metros",
    components: "V, S",
    duration: "instantânea",
    concentration: false,
    material: "Você arremessa um cisco de fogo em uma criatura ou objeto dentro do alcance. Faça um ataque à distância com magia contra o alvo. Se atingir, o alvo sofre 1d10 de dano de fogo. Um objeto inflamável atingido por essa magia, incendeia se não estiver sendo vestido ou carregado.",
    description: "O dano dessa magia aumenta em 1d10 quando você alcança o 5° nível (2d10), 11° nível (3d10) e 17° nível (4d10).",
    classesList: [
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "0"
  },
  {
    id: "287",
    name: "Raio de Gelo",
    school: "evocação",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, S",
    duration: "instantânea",
    concentration: false,
    material: "Um raio frigido de luz azul clara parte em direção de uma criatura, dentro do alcance. Realize um ataque à distância com magia contra o alvo. Se atingir, ele sofre 1d8 de dano de frio e seu deslocamento é reduzido em 3 metros até o começo do seu próximo turno.",
    description: "O dano da magia aumenta em 1d8 quando você alcança o 5° nível (2d8), 11° nível (3d8) e 17° nível (4d8).",
    classesList: [
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "0"
  },
  {
    id: "288",
    name: "Raio do Enfraquecimento",
    school: "necromancia",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, S",
    duration: "até 1 minuto",
    concentration: true,
    material: "Um raio negro de energia enervante parte do seu dedo em direção de uma criatura, dentro do alcance. Faça um ataque à distância com magia contra o alvo. Se atingir, o alvo causará metade do dano com ataques com armas que usem Força, até a magia acabar.",
    description: "No final de cada um dos turnos do alvo, ele pode realizar um teste de resistência de Constituição contra a magia. Se obtiver sucesso, a magia acaba.",
    classesList: [
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "2"
  },
  {
    id: "289",
    name: "Raio Guiador",
    school: "evocação",
    castTime: "1 ação",
    range: "36 metros",
    components: "V, S",
    duration: "1 rodada",
    concentration: false,
    material: "Um lampejo de luz se lança em direção de uma criatura, à sua escolha, dentro do alcance. Realize um ataque à distância com magia contra o alvo. Se atingir, o alvo sofre\n4d6 de dano radiante e, a próxima jogada de ataque contra esse alvo, antes do final do seu próximo turno, terá vantagem, graças a penumbra mística cintilando no alvo, até então.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 1°.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      }
    ],
    "nivel": "1"
  },
  {
    id: "290",
    name: "Raio Lunar",
    school: "evocação",
    castTime: "1 ação",
    range: "36 metros",
    components: "V, S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: várias sementes de qualquer planta lunar e um pedaço de feldspato opalescente.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, o dano aumenta em 1d10 para cada nível do espaço acima do 2°.",
    classesList: [
      {
        id: "4",
        name: "druida"
      }
    ],
    "nivel": "2"
  },
  {
    id: "291",
    name: "Raio Solar",
    school: "evocação",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: uma lente de aumento.",
    description: "Pela duração, uma fagulha de radiação luminosa brilha na sua mão. Ela emite luz plena num raio de 9 metros e penumbra por 9 metros adicionais. Essa luz é luz do sol.",
    classesList: [
      {
        id: "4",
        name: "druida"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "6"
  },
  {
    id: "292",
    name: "Rajada de Veneno",
    school: "conjuração",
    castTime: "1 ação",
    range: "3 metros",
    components: "V, S",
    duration: "instantânea",
    concentration: false,
    material: "Você ergue sua mão em direção de uma criatura que você possa ver, dentro do alcance e projeta um sopro de gás tóxico da sua palma. A criatura deve ser bem sucedida num teste de resistência de Constituição ou sofrerá 1d12 de dano de veneno.",
    description: "O dano dessa magia aumenta em 1d12 quando você alcança o 5° nível (2d12), 11° nível (3d12) e 17° nível (4d12).",
    classesList: [
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "0"
  },
  {
    id: "293",
    name: "Rajada Mística",
    school: "evocação",
    castTime: "1 ação",
    range: "36 metros",
    components: "V, S",
    duration: "instantânea",
    concentration: false,
    material: "Um feixe de energia crepitante vai em direção a uma criatura dentro do alcance. Realize uma jogada de ataque à distância com magia contra o alvo. Se atingir, o alvo sofre 1d10 de dano de energia.",
    description: "A magia cria mais de um feixe quando você alcança níveis elevados: dois feixes no 5° nível, três feixes no 11° nível e quatro feixes no 17° nível. Você pode direcionar os feixes para o mesmo alvo ou para alvos diferentes. Realize jogadas de ataque separadas para cada feixe.",
    classesList: [
      {
        id: "2",
        name: "bruxo"
      }
    ],
    "nivel": "0"
  },
  {
    id: "294",
    name: "Rajada Prismática",
    school: "evocação",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S",
    duration: "instantânea",
    concentration: false,
    material: "Oito raios de luz multicoloridos lampejam da sua mão. Cada raio é uma cor diferente e tem poderes e propósitos diferentes. Cada criatura em um cone de 18 metros deve realizar um teste de resistência de Destreza. Para cada alvo, role um d8 para determinar qual cor de raio afetou ele.",
    description: "8. Especial. O alvo é atingido por dois raios. Role mais duas vezes e jogue novamente qualquer 8.",
    classesList: [
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "7"
  },
  {
    id: "295",
    name: "Recipiente Arcano",
    school: "necromancia",
    castTime: "1 minuto",
    range: "pessoal",
    components: "V, S, M",
    duration: "até ser dissipada",
    concentration: false,
    material: "Material: uma gema, cristal, relicário ou algum outro tipo de recipiente ornamental valendo, no mínimo, 500 po.",
    description: "Quando a magia acabar, o recipiente é destruído.",
    classesList: [
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "6"
  },
  {
    id: "296",
    name: "Recuo Acelerado",
    school: "transmutação",
    castTime: "1 ação bônus",
    range: "pessoal",
    components: "V, S",
    duration: "até 10 minutos",
    concentration: true,
    material: "Essa magia permite que você se mova a um ritmo incrível. Quando você conjura essa magia e, a partir de então, com uma ação bônus em cada um dos seus turnos, até a magia acabar, você pode realizar a ação de Disparada.",
    description: "Essa magia permite que você se mova a um ritmo incrível. Quando você conjura essa magia e, a partir de então, com uma ação bônus em cada um dos seus turnos, até a magia acabar, você pode realizar a ação de Disparada.",
    classesList: [
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "1"
  },
  {
    id: "297",
    name: "Reencarnação",
    school: "transmutação",
    castTime: "1 hora",
    range: "toque",
    components: "V, S, M",
    duration: "instantânea",
    concentration: false,
    material: "Material: óleos e unguentos raros valendo, no mínimo, 1.000 po, consumidos pela magia.",
    description: "A magia forma um novo corpo para que a criatura habite, o que, provavelmente, fará com que a raça da criatura mude. O Mestre rola um d100 e consulta a tabela seguinte para determinar qual forma a criatura terá quando voltar a vida, ou o Mestre pode escolher uma forma.",
    classesList: [
      {
        id: "4",
        name: "druida"
      }
    ],
    "nivel": "5"
  },
  {
    id: "298",
    name: "Reflexos",
    school: "ilusão",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S",
    duration: "1 minuto",
    concentration: false,
    material: "Três duplicatas ilusórias de você aparecem no seu espaço. Até a magia acabar, as duplicatas se movem com você e copiam as suas ações, trocando de posição, tornando impossível rastrear qual imagem é real. Você pode usar sua ação para dissipar as duplicatas ilusórias.",
    description: "Uma criatura não pode ser afetada por essa magia se não puder enxergar, se ela contar com outros sentidos além da visão, como percepção às cegas, ou se ela puder perceber ilusões como falsas, como com visão verdadeira.",
    classesList: [
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "2"
  },
  {
    id: "299",
    name: "Regeneração",
    school: "transmutação",
    castTime: "1 minuto",
    range: "toque",
    components: "V, S, M",
    duration: "1 hora",
    concentration: false,
    material: "Material: uma conta de oração e água benta.",
    description: "Os membro decepados do corpo do alvo (dedos, pernas, rabos e assim por diante), se tiver algum, são restaurados após 2 minutos. Se você tiver a parte decepada e segura- la contra o topo, a magia, instantaneamente, faz com que o membro se grude ao toco.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "4",
        name: "druida"
      }
    ],
    "nivel": "7"
  },
  {
    id: "300",
    name: "Relâmpago",
    school: "evocação",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S, M",
    duration: "instantânea",
    concentration: false,
    material: "Material: um pouco de pelo e uma haste de âmbar, cristal ou vidro.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 3°.",
    classesList: [
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "3"
  },
  {
    id: "301",
    name: "Remover Maldição",
    school: "abjuração",
    castTime: "1 ação",
    range: "toque",
    components: "V, S",
    duration: "instantânea",
    concentration: false,
    material: "Ao seu toque, todas as maldições afetando uma criatura ou objeto terminam. Se o objeto for um item mágico amaldiçoado, sua maldição persiste, mas a magia rompe a sintonia do portador com o objeto, então permitindo que ele o remova ou descarte.",
    description: "Ao seu toque, todas as maldições afetando uma criatura ou objeto terminam. Se o objeto for um item mágico amaldiçoado, sua maldição persiste, mas a magia rompe a sintonia do portador com o objeto, então permitindo que ele o remova ou descarte.",
    classesList: [
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "6",
        name: "mago"
      },
      {
        id: "7",
        name: "paladino"
      }
    ],
    "nivel": "3"
  },
  {
    id: "302",
    name: "Repouso Tranquilo",
    school: "necromancia",
    castTime: "1 ação",
    range: "toque",
    components: "V, S, M",
    duration: "10 dias",
    concentration: false,
    material: "Material: uma pitada de sal e uma peça de cobre colocada em cada um dos olhos do corpo, que devem permanecer ai pela duração.",
    description: "Você toca um corpo ou outros restos mortais. Pela duração, o alvo estará protegido de decomposição e não pode se tornar um morto-vivo. A magia também estende, efetivamente, o limite de tempo para que o alvo seja trazido de volta a vida, já que os dias passados sob a influência dessa magia não contam no tempo limite de tais magias, como reviver os mortos.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "2"
  },
  {
    id: "303",
    name: "Repreensão Infernal",
    school: "evocação",
    castTime: "1 reação",
    range: "18 metros",
    components: "V, S",
    duration: "instantânea",
    concentration: false,
    material: "Reação que você faz em resposta ao sofre dano de uma criatura a até 18 metros de você e que você possa ver.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o dano aumenta em 1d10 para cada nível do espaço acima do 1°.",
    classesList: [
      {
        id: "2",
        name: "bruxo"
      }
    ],
    "nivel": "1"
  },
  {
    id: "304",
    name: "Resistência",
    school: "abjuração",
    castTime: "1 ação",
    range: "toque",
    components: "V, S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: um manto em miniatura.",
    description: "Você toca uma criatura voluntária. Uma vez, antes da magia acabar, o alvo pode rolar um d4 e adicionar o valor jogado a um teste de resistência de sua escolha. Ele pode rolar o dado antes ou depois de realizar o teste de resistência. Então, a magia termina.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "4",
        name: "druida"
      }
    ],
    "nivel": "0"
  },
  {
    id: "305",
    name: "Respirar Na Água",
    school: "transmutação",
    castTime: "1 ação",
    range: "9 metros",
    components: "V, S, M",
    duration: "24 horas",
    concentration: false,
    material: "Material: um pedaço de cana ou palha.",
    description: "Essa magia concede a até dez criaturas voluntária que você possa ver, dentro do alcance, a habilidade de respirar embaixo d’água até a magia acabar. As criaturas afetadas também mantem sua forma normal de respiração.",
    classesList: [
      {
        id: "4",
        name: "druida"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      },
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "3"
  },
  {
    id: "306",
    name: "Ressurreição",
    school: "necromancia",
    castTime: "1 hora",
    range: "toque",
    components: "V, S, M",
    duration: "instantânea",
    concentration: false,
    material: "Material: um diamante valendo, no mínimo, 1.000 po, consumido pela magia.",
    description: "Conjurar essa magia para trazer de volta a vida uma criatura que tenha morrido a um ano ou mais tempo é extremamente desgastante para você. Até você terminar um descanso longo, você não pode conjurar magias novamente e terá desvantagem em todas as jogadas de ataque, testes de habilidade e testes de resistência.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "3",
        name: "clérigo"
      }
    ],
    "nivel": "7"
  },
  {
    id: "307",
    name: "Ressurreição Verdadeira",
    school: "necromancia",
    castTime: "1 hora",
    range: "toque",
    components: "V, S, M",
    duration: "instantânea",
    concentration: false,
    material: "Material: um borrifo de água benta e diamantes valendo, no mínimo, 25.000 po, consumidos pela magia.",
    description: "Essa magia pode, até mesmo, prover um novo corpo, se o original não existir mais, nesse caso, você deve falar o nome da criatura. Ela aparece em um espaço desocupado, à sua escolha, a até 3 metros de você.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "4",
        name: "druida"
      }
    ],
    "nivel": "9"
  },
  {
    id: "308",
    name: "Restauração Maior",
    school: "abjuração",
    castTime: "1 ação",
    range: "toque",
    components: "V, S, M",
    duration: "instantânea",
    concentration: false,
    material: "Material: pó de diamante valendo, no mínimo, 100 po, consumido pela magia.",
    description: "Você imbui uma criatura que você toca, com energia positiva para desfazer um efeito debilitante. Você pode reduzir a exaustão do alvo em um nível ou remover um dos seguintes do alvo:",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "4",
        name: "druida"
      }
    ],
    "nivel": "5"
  },
  {
    id: "309",
    name: "Restauração Menor",
    school: "abjuração",
    castTime: "1 ação",
    range: "toque",
    components: "V, S",
    duration: "instantânea",
    concentration: false,
    material: "Você toca uma criatura e pode, ou acabar com uma doença ou uma condição que a esteja afligindo. A condição pode ser cega, surda, paralisada ou envenenada.",
    description: "Você toca uma criatura e pode, ou acabar com uma doença ou uma condição que a esteja afligindo. A condição pode ser cega, surda, paralisada ou envenenada.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "7",
        name: "paladino"
      },
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "2"
  },
  {
    id: "310",
    name: "Reviver Os Mortos",
    school: "necromancia",
    castTime: "1 hora",
    range: "toque",
    components: "V, S, M",
    duration: "instantânea",
    concentration: false,
    material: "Material: um diamante valendo, no mínimo, 500 po, consumido pela magia.",
    description: "Voltar dos mortos é um calvário. O alvo sofre –4 de penalidade em todas as suas jogadas de ataque, testes de resistência e testes de habilidade. A cada vez que o alvo terminar um descanso longo, as penalidades são reduzidas em 1, até desaparecerem.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "7",
        name: "paladino"
      }
    ],
    "nivel": "5"
  },
  {
    id: "311",
    name: "Revivificar",
    school: "necromancia",
    castTime: "1 ação",
    range: "toque",
    components: "V, S, M",
    duration: "instantânea",
    concentration: false,
    material: "Material: um diamante no valor de 300 po, consumido pela magia.",
    description: "Você toca uma criatura que tenha morrido dentro do último minuto. Essa criatura volta a vida com 1 ponto de vida. Essa magia não pode trazer de volta a vida criaturas que tenham morrido de velhice nem pode restaurar quaisquer partes do corpo perdidas.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "7",
        name: "paladino"
      }
    ],
    "nivel": "3"
  },
  {
    id: "312",
    name: "Riso Histérico de Tasha",
    school: "encantamento",
    castTime: "1 ação",
    range: "9 metros",
    components: "V, S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: pequenas tortas e uma pena que é balançada no ar.",
    description: "Ao final de cada um dos turnos dela e, toda vez que sofrer dano, o alvo pode realizar outro teste de resistência de Sabedoria. O alvo terá vantagem no teste de resistência se ele for garantido por ele ter sofrido dano. Se obtiver sucesso, a magia acaba.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "1"
  },
  {
    id: "313",
    name: "Rogar Maldição",
    school: "necromancia",
    castTime: "1 ação",
    range: "toque",
    components: "V, S",
    duration: "até 1 minuto",
    concentration: true,
    material: "Você toca uma criatura e a criatura deve ser bem sucedida em um teste de resistência de Sabedoria ou será amaldiçoada pela duração da magia. Quando você conjura essa magia, escolha a natureza da maldição dentre as seguintes opções:",
    description: "Você toca uma criatura e a criatura deve ser bem sucedida em um teste de resistência de Sabedoria ou será amaldiçoada pela duração da magia. Quando você conjura essa magia, escolha a natureza da maldição dentre as seguintes opções:",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "3"
  },
  {
    id: "314",
    name: "Salto",
    school: "transmutação",
    castTime: "1 ação",
    range: "toque",
    components: "V, S, M",
    duration: "1 minuto",
    concentration: false,
    material: "Material: uma perna de gafanhoto.",
    description: "Você toca uma criatura. A distância de salto da criatura é triplicada até a magia acabar.",
    classesList: [
      {
        id: "4",
        name: "druida"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      },
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "1"
  },
  {
    id: "315",
    name: "Santuário",
    school: "abjuração",
    castTime: "1 ação bônus",
    range: "9 metros",
    components: "V, S, M",
    duration: "1 minuto",
    concentration: false,
    material: "Material: um pequeno espelho de prata.",
    description: "Se a criatura protegida realizar um ataque ou conjurar uma magia que afete uma criatura inimiga, essa magia acaba.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      }
    ],
    "nivel": "1"
  },
  {
    id: "316",
    name: "Santuário Particular de Mordenkainen",
    school: "abjuração",
    castTime: "10 minutos",
    range: "36 metros",
    components: "V, S, M",
    duration: "24 horas",
    concentration: false,
    material: "Material: uma folha de chumbo, um pedaço de vidro opaco, um chumaço de algodão ou pano e pó de crisólita.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 5° nível ou superior, você pode aumentar o tamanho do cubo em 30 metros de cada lado para cada nível do espaço acima do 4°. Então, você poderia proteger um cubo de até 60 metros de lado usando um espaço de magia de 5° nível.",
    classesList: [
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "4"
  },
  {
    id: "317",
    name: "Saraivada de Espinhos",
    school: "conjuração",
    castTime: "1 ação bônus",
    range: "pessoal",
    components: "V",
    duration: "até 1 minuto",
    concentration: true,
    material: "Da próxima vez que você atingir uma criatura com um ataque à distância com arma, antes da magia acabar, essa magia cria uma chuva de espinhos que brota da sua arma à distância ou munição. Além do efeito normal do ataque, o alvo do ataque e cada criatura a até 1,5 metro dele, devem realizar um teste de resistência de Destreza. Uma criatura sofre 1d10 de dano perfurante se falhar na resistência ou metade desse dano se obtiver sucesso.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o dano aumenta em 1d10 para cada nível do espaço acima do 1° (até o máximo de 6d10).",
    classesList: [
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "1"
  },
  {
    id: "318",
    name: "Semiplano",
    school: "conjuração",
    castTime: "1 ação",
    range: "18 metros",
    components: "V",
    duration: "1 hora",
    concentration: false,
    material: "Você cria uma porta umbral em uma superfície sólida e lisa que você possa ver, dentro do alcance. A porta é grande o suficiente para permitir a passagem de criaturas Médias sem dificuldade. Quando aberta, a porta levará a um semiplano que parece uma sala vazia de 9 metros quadrados de dimensão, feita de madeira ou pedra. Quando a magia termina, a porta desaparece e, qualquer criatura ou objeto dentro do semiplano, permanecerá preso lá, a medida que a porta desaparece do outro lado.",
    description: "Cada vez que você conjura essa magia, você pode criar um novo semiplano ou fazer a porta umbral se conectar a um semiplano que você tenha criado em uma conjuração anterior dessa magia. Além disso, se você conhecer a natureza e conteúdo do semiplano criado através da conjuração dessa magia por outra criatura, você pode fazer com que a porta umbral se conecte a esse semiplano.",
    classesList: [
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "8"
  },
  {
    id: "319",
    name: "Sentido Bestial",
    school: "adivinhação",
    castTime: "1 ação",
    range: "toque",
    components: "S",
    duration: "até 1 hora",
    concentration: true,
    material: "Você toca uma besta voluntária. Pela duração da magia, você pode usar sua ação para ver através dos olhos e ouvir através dos ouvidos da besta e continua a fazê-lo até você usar sua ação para retornar aos seus sentidos normais.",
    description: "Enquanto estiver utilizando os sentidos da besta, você ganha os benefícios de qualquer sentido especial possuído pela criatura, no entanto, você estará cego e surdo em relação aos seus próprios sentidos.",
    classesList: [
      {
        id: "4",
        name: "druida"
      },
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "2"
  },
  {
    id: "320",
    name: "Servo Invisível",
    school: "conjuração",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, S, M",
    duration: "1 hora",
    concentration: false,
    material: "Material: um pedaço de barbante e um pouco de madeira.",
    description: "Se você comandar o servo a realizar uma tarefa que poderia afasta-lo a mais de 18 metros de você, a magia termina.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "1"
  },
  {
    id: "321",
    name: "Sexto Sentido",
    school: "adivinhação",
    castTime: "1 minuto",
    range: "toque",
    components: "V, S, M",
    duration: "8 horas",
    concentration: false,
    material: "Material: uma pena de colibri.",
    description: "Essa magia termina imediatamente, se você conjura-la novamente antes da duração acabar.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "9"
  },
  {
    id: "322",
    name: "Silêncio",
    school: "ilusão",
    castTime: "1 ação",
    range: "36 metros",
    components: "V, S",
    duration: "até 10 minutos",
    concentration: true,
    material: "Pela duração, nenhum som pode ser criado dentro ou atravessar uma esfera de 6 metros de raio centrada num ponto, à sua escolha, dentro do alcance. Qualquer criatura ou objeto totalmente dentro da esfera é imune a dano trovejante e as criaturas estarão surdas enquanto estiverem completamente dentro dela. Conjurar magias que inclua a componente verbal é impossível ai.",
    description: "Pela duração, nenhum som pode ser criado dentro ou atravessar uma esfera de 6 metros de raio centrada num ponto, à sua escolha, dentro do alcance. Qualquer criatura ou objeto totalmente dentro da esfera é imune a dano trovejante e as criaturas estarão surdas enquanto estiverem completamente dentro dela. Conjurar magias que inclua a componente verbal é impossível ai.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "2"
  },
  {
    id: "323",
    name: "Símbolo",
    school: "abjuração",
    castTime: "1 minuto",
    range: "toque",
    components: "V, S, M",
    duration: "até ser dissipada ou ativada",
    concentration: false,
    material: "Material: mercúrio, fósforo e pó de diamante e opala, com um valor total de, no mínimo, 1.000 po, consumidos pela magia.",
    description: "Sono. Cada alvo deve realizar um teste de resistência de Sabedoria e cairá inconsciente por 10 minutos se falhar na resistência. Uma criatura acorda se sofrer dano ou se alguém usar sua ação para sacudi-la e estapeá-la até ela acordar.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "7"
  },
  {
    id: "324",
    name: "Similaridade",
    school: "ilusão",
    castTime: "1 ação",
    range: "9 metros",
    components: "V, S",
    duration: "8 horas",
    concentration: false,
    material: "Essa magia permite que você mude a aparência de qualquer quantidade de criaturas que você possa ver, dentro do alcance. Você dá a cada alvo que você escolheu uma nova aparência ilusória. Um alvo involuntário pode realizar um teste de resistência de Carisma, se for bem sucedido, a magia não o afetará.",
    description: "Uma criatura pode usar a ação dela para inspecionar um alvo e fazer um teste de Inteligência (Investigação) contra a CD da sua magia. Se for bem sucedido, ele estará ciente de que o alvo está disfarçado.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "5"
  },
  {
    id: "325",
    name: "Simulacro",
    school: "ilusão",
    castTime: "12 horas",
    range: "toque",
    components: "V, S, M",
    duration: "até ser dissipada",
    concentration: false,
    material: "Material: neve ou gelo em quantidade suficiente para fazer uma cópia em tamanho real da criatura duplicada; algum cabelo, recortes de unha ou outro pedaço do corpo da criatura, colocado dentro da neve ou gelo; e pó de rubi no valor de 1.500 po, polvilhado sobre a duplicata e consumido pela magia.",
    description: "Se você conjurar essa magia novamente, qualquer duplicata atualmente ativa, que você criou com essa magia, é instantaneamente destruída.",
    classesList: [
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "7"
  },
  {
    id: "326",
    name: "Sinal de Esperança",
    school: "abjuração",
    castTime: "1 ação",
    range: "9 metros",
    components: "V, S",
    duration: "até 1 minuto",
    concentration: true,
    material: "Essa magia confere esperança e vitalidade. Escolha qualquer quantidade de criaturas dentro do alcance. Pela duração, cada alvo tem vantagem em testes de resistência de Sabedoria e testes de resistência contra a morte e recuperam o máximo de pontos de vida possível em qualquer cura.",
    description: "Essa magia confere esperança e vitalidade. Escolha qualquer quantidade de criaturas dentro do alcance. Pela duração, cada alvo tem vantagem em testes de resistência de Sabedoria e testes de resistência contra a morte e recuperam o máximo de pontos de vida possível em qualquer cura.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      }
    ],
    "nivel": "3"
  },
  {
    id: "327",
    name: "Sonho",
    school: "ilusão",
    castTime: "1 minuto",
    range: "especial",
    components: "V, S, M",
    duration: "8 horas",
    concentration: false,
    material: "Material: um punhado de areia, um pouco de tinta e uma pena de escrita arrancada de um pássaro adormecido.",
    description: "Se você tiver uma parte do corpo, mecha de cabelo, recorte de unha ou porção similar do corpo do alvo, o alvo realiza seu teste de resistência com desvantagem.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "5"
  },
  {
    id: "328",
    name: "Sono",
    school: "encantamento",
    castTime: "1 ação",
    range: "36 metros",
    components: "V, S, M",
    duration: "1 minuto",
    concentration: false,
    material: "Material: um punhado de areia fina, pétalas de rosas ou um grilo.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2º nível ou superior, jogue 2d8 adicionais para cada nível do espaço acima do 1°.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "1"
  },
  {
    id: "329",
    name: "Sugestão",
    school: "encantamento",
    castTime: "1 ação",
    range: "9 metros",
    components: "V, M",
    duration: "até 8 horas",
    concentration: true,
    material: "Material: uma língua de cobra e, ou um pedaço de favo de mel ou uma gota de azeite doce.",
    description: "Se você ou um dos seus companheiros causar dano a uma criatura afetada por essa magia, a magia termina.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "2"
  },
  {
    id: "330",
    name: "Sugestão Em Massa",
    school: "encantamento",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, M",
    duration: "24 horas",
    concentration: false,
    material: "Material: uma língua de cobra e, ou um pedaço de favo de mel ou uma gota de azeite doce.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 7° nível, a duração será de 10 dias. Quando você usar um espaço de magia de 8° nível, a duração será de 30 dias. Quando você usar um espaço de magia de 9° nível, a duração será de 1 ano e 1 dia.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "6"
  },
  {
    id: "331",
    name: "Sussurros Dissonantes",
    school: "encantamento",
    castTime: "1 ação",
    range: "18 metros",
    components: "V",
    duration: "instantânea",
    concentration: false,
    material: "Você sussurra uma melodia dissonante que apenas uma criatura, à sua escolha, dentro do alcance pode ouvir, causando-lhe uma terrível dor. O alvo deve realizar um teste de resistência de Sabedoria. Se falhar na resistência, ele sofrerá 3d6 de dano psíquico e deve, imediatamente, usar sua reação, se disponível, para se mover para o mais longe possível de você. A criatura não se moverá para um terreno obviamente perigoso, como uma fogueira ou abismo. Se obtiver sucesso na resistência, o alvo sofre metade do dano e não precisa se afastar de você. Uma criatura surda obtém sucesso automaticamente na sua resistência.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 1°.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      }
    ],
    "nivel": "1"
  },
  {
    id: "332",
    name: "Taumaturgia",
    school: "transmutação",
    castTime: "1 ação",
    range: "9 metros",
    components: "V",
    duration: "até 1 minuto",
    concentration: false,
    material: "Você manifesta pequenas maravilhas, um sinal de poder sobrenatural, dentro do alcance. Você cria um dos seguintes efeitos mágicos dentro do alcance:",
    description: "Se você conjurar essa magia diversas vezes, você pode ter até três dos efeitos de 1 minuto ativos por vez, e você pode dissipar um desses efeitos com uma ação.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      }
    ],
    "nivel": "0"
  },
  {
    id: "333",
    name: "Teia",
    school: "conjuração",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, S, M",
    duration: "até 1 hora",
    concentration: true,
    material: "Material: um pedaço de teia de aranha.",
    description: "As teias são inflamáveis. Qualquer cubo de 1,5 metro de teia exposto ao fogo, é consumida por ele em 1 rodada, causando 2d4 de dano de fogo a qualquer criatura que começar seu turno nas chamas.",
    classesList: [
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "2"
  },
  {
    id: "334",
    name: "Telecinésia",
    school: "transmutação",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, S",
    duration: "até 10 minutos",
    concentration: true,
    material: "Você adquire a habilidade de mover ou manipular criaturas ou objetos através do pensamento. Quando você conjura a magia e, com sua ação a cada turno, pela duração, você pode exercer sua vontade sobre uma criatura ou objeto que você possa ver, dentro do alcance, causando os efeitos apropriados abaixo. Você pode afetar o mesmo alvo rodada após rodada, ou escolher um novo a qualquer momento. Se você mudar de alvos, o alvo anterior não será mais afetado pela magia.",
    description: "Você pode exercer um controle refinado sobre os objetos com seu agarrão telecinético, como manipular ferramentas simples, abrir uma porta ou um recipiente, guardar ou recuperar um item de um recipiente aberto ou derramar o conteúdo de um frasco.",
    classesList: [
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "5"
  },
  {
    id: "335",
    name: "Telepatia",
    school: "adivinhação",
    castTime: "1 ação",
    range: "ilimitado",
    components: "V, S, M",
    duration: "24 horas",
    concentration: false,
    material: "Material: um par de anéis de prata unidos.",
    description: "Até a magia acabar, você e o alvo podem, instantaneamente, compartilhar palavras, imagens, sons e outras mensagens sensoriais uma com a outra através da ligação e o alvo reconhece que é você a criatura que está se comunicando com ele. A magia permite que uma criatura com valor de Inteligência mínimo de 1 compreenda o sentido das suas palavras e capta o sentido geral de qualquer mensagem sensorial que você enviar.",
    classesList: [
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "8"
  },
  {
    id: "336",
    name: "Teletransporte",
    school: "conjuração",
    castTime: "1 ação",
    range: "3 metros",
    components: "V",
    duration: "instantânea",
    concentration: false,
    material: "Essa magia, instantaneamente, transporta você e até oito criaturas voluntárias, à sua escolha, que você possa ver dentro do alcance ou um único objeto que você possa ver no alcance, para um destino que você selecionou. Se você for afetar um objeto, ele deve ser capaz de caber inteiro dentro de um cubo de 3 metros e não pode estar sendo empunhado ou carregado por uma criatura involuntária.",
    description: "destino que você escolher deve ser conhecido por você e deve ser no mesmo plano de existência que você está. Sua familiaridade com o destino determina se você chegará nele com sucesso. O Mestre rola um d100 e consulta a tabela.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "7"
  },
  {
    id: "337",
    name: "Teletransporte Por Árvores",
    school: "conjuração",
    castTime: "1 ação",
    range: "3 metros",
    components: "V, S",
    duration: "1 rodada",
    concentration: false,
    material: "Essa magia cria uma ligação mágica entre uma planta inanimada Grande ou maior, dentro do alcance, e outra planta a qualquer distância, no mesmo plano de existência. Você deve ter visto ou tocado a planta de destino, pelo menos uma vez antes. Pela duração, qualquer criatura pode entrar na planta alvo e sair da planta destino usando 1,5 metro de movimento.",
    description: "Essa magia cria uma ligação mágica entre uma planta inanimada Grande ou maior, dentro do alcance, e outra planta a qualquer distância, no mesmo plano de existência. Você deve ter visto ou tocado a planta de destino, pelo menos uma vez antes. Pela duração, qualquer criatura pode entrar na planta alvo e sair da planta destino usando 1,5 metro de movimento.",
    classesList: [
      {
        id: "4",
        name: "druida"
      }
    ],
    "nivel": "6"
  },
  {
    id: "338",
    name: "Tempestade da Vingança",
    school: "conjuração",
    castTime: "1 ação",
    range: "visão",
    components: "V, S",
    duration: "até 1 minuto",
    concentration: true,
    material: "Uma agitada nuvem tempestuosa se forma, centrada num ponto que você possa ver e se espalha num raio de 108 metros. Relâmpagos riscam a área, trovões ressoam e ventos fortes silvam. Cada criatura embaixo da nuvem (a não mais de 1.500 metros abaixo da nuvem) quando ela aparece deve realizar um teste de resistência de Constituição. Com uma falha na resistência, uma criatura sofre 2d6 de dano trovejante e ficará surda por 5 minutos.",
    description: "Rodada 5-10. Ventos e chuva gelados atacam a área abaixo da nuvem. A área se torna terreno difícil e de escuridão densa. Cada criatura sofre 1d6 de dano de frio. Ataques com armas à distância na área são impossíveis. O vento e chuva contam como uma distração grave com os propósitos de manter a concentração em magias. Finalmente, ventos fortes (entre 30 e 75 quilômetros por hora) automaticamente dispersam nevoa, neblina e fenômenos similares na área, independentemente de serem mundanos ou mágicos.",
    classesList: [
      {
        id: "4",
        name: "druida"
      }
    ],
    "nivel": "9"
  },
  {
    id: "339",
    name: "Tempestade de Fogo",
    school: "evocação",
    castTime: "1 ação",
    range: "45 metros",
    components: "V, S",
    duration: "instantânea",
    concentration: false,
    material: "Uma tempestade feita de camadas de chamas crepitantes aparece num local, à sua escolha, dentro do alcance. A área da tempestade consiste de até dez cubos de 3 metros, que você pode organizar como desejar. Cada cubo deve ter, pelo menos, uma face adjacente a face de outro cubo. Cada criatura na área deve realizar um teste de resistência de Destreza. Ela sofre 7d10 de dano de fogo se falhar na resistência, ou metade desse dano se obtiver sucesso.",
    description: "O fogo causa dano aos objetos na área e incendeia objetos inflamáveis que não estejam sendo vestidos ou carregados. Se desejar, a vida vegetal na área pode não ser afetada por essa magia.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "5",
        name: "feiticeiro"
      }
    ],
    "nivel": "7"
  },
  {
    id: "340",
    name: "Tempestade de Gelo",
    school: "evocação",
    castTime: "1 ação",
    range: "90 metros",
    components: "V, S, M",
    duration: "instantânea",
    concentration: false,
    material: "Material: um pouco de poeira e algumas gotas de água.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 5° nível ou superior, o dano de concussão aumenta em 1d8 para cada nível do espaço acima do 4°.",
    classesList: [
      {
        id: "4",
        name: "druida"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "4"
  },
  {
    id: "341",
    name: "Tentáculos Negros de Evard",
    school: "conjuração",
    castTime: "1 ação",
    range: "27 metros",
    components: "V, S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: um pedaço de tentáculo de um polvo gigante ou lula gigante.",
    description: "Uma criatura impedida pelos tentáculos pode usar sua ação para realizar um teste de Força ou Destreza (à escolha dela) contra a CD da sua magia. Se ela obtiver sucesso, ela se libertará.",
    classesList: [
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "4"
  },
  {
    id: "342",
    name: "Terremoto",
    school: "evocação",
    castTime: "1 ação",
    range: "150 metros",
    components: "V, S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: um pouco de poeira, uma pedra e um pedaço de barro.",
    description: "Estruturas. O tremor causa 50 de dano de concussão a qualquer estrutura em contato com o solo na área, quando você conjurar a magia e, no início de cada turno até a magia terminar. Se a estrutura cair a 0 pontos de vida, ela desmorona e, potencialmente, fere criaturas próximas. Uma criatura a uma distância inferior a metade da altura da estrutura deve realizar um teste de resistência de Destreza. Se falhar na resistência, a criatura sofrerá 5d6 de dano de concussão, cairá no chão e estará soterrada nos escombros, precisando de um teste de Força (Atletismo) com CD 20, usando uma ação, para escapar. O Mestre pode ajustar a CD para cima ou para baixo, dependendo da natureza dos escombros. Se obtiver sucesso na resistência, a criatura sofre metade do dano e não estará caída ou soterrada.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "5",
        name: "feiticeiro"
      }
    ],
    "nivel": "8"
  },
  {
    id: "343",
    name: "Terreno Alucinógeno",
    school: "ilusão",
    castTime: "10 minutos",
    range: "90 metros",
    components: "V, S, M",
    duration: "24 horas",
    concentration: false,
    material: "Material: uma pedra, um galho e um pouco de planta verde.",
    description: "As características táteis do terreno são inalteradas, portanto, as criaturas que adentrarem na área estão susceptíveis de ver através da ilusão. Se a diferença não for obvia ao toque, uma criatura que examine a ilusão cuidadosamente, pode realizar um teste de Inteligência (Investigação) contra a CD da magia para desacredita-la. Uma criatura que discernir a ilusão do que ela é, a enxerga como uma imagem vaga sobrepondo o terreno.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "4"
  },
  {
    id: "344",
    name: "Toque Arrepiante",
    school: "necromancia",
    castTime: "1 ação",
    range: "36 metros",
    components: "V, S",
    duration: "1 rodada",
    concentration: false,
    material: "Você cria uma mão esquelética fantasmagórica no espaço de uma criatura, dentro do alcance. Realize um ataque à distância com magia contra a criatura para afeta-la com o frio sepulcral. Se atingir, a criatura sofre 1d8 de dano necrótico e não poderá recuperar pontos de vida até o início do seu próximo turno. Até lá, a mão ficará presa ao alvo.",
    description: "O dano dessa magia aumenta em 1d8 quando você alcança o 5° nível (2d8), 11° nível (3d8) e 17° nível (4d8).",
    classesList: [
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "0"
  },
  {
    id: "345",
    name: "Toque Chocante",
    school: "evocação",
    castTime: "1 ação",
    range: "toque",
    components: "V, S",
    duration: "instantânea",
    concentration: false,
    material: "Eletricidade surge da sua mão para transmitir um choque em uma criatura que você tentar tocar. Faça um ataque corpo-a-corpo com magia contra o alvo. Você tem vantagem na jogada de ataque se o alvo estiver vestindo qualquer armadura de metal. Se atingir, o alvo sofre 1d8 de dano elétrico e não pode usar reações até o início do próximo turno dele.",
    description: "O dano da magia aumenta em 1d8 quando você alcança o 5° nível (2d8), 11° nível (3d8) e 17° nível (4d8).",
    classesList: [
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "0"
  },
  {
    id: "346",
    name: "Toque Vampírico",
    school: "necromancia",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S",
    duration: "até 1 minuto",
    concentration: true,
    material: "O toque da sua mão coberta de sombras pode drenar a força vital dos outros para curar seus ferimentos. Realize um ataque corpo-a-corpo com magia contra uma criatura ao seu alcance. Se atingir, o alvo sofre 3d6 de dano necrótico e você recupera pontos de vida igual à metade do dano necrótico causado. Até a magia acabar, você pode realizar o ataque novamente, no seu turno, com uma ação.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 3°.",
    classesList: [
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "3"
  },
  {
    id: "347",
    name: "Tranca Arcana",
    school: "abjuração",
    castTime: "1 ação",
    range: "toque",
    components: "V, S, M",
    duration: "até ser dissipada",
    concentration: false,
    material: "Material: pó de ouro valendo, no mínimo, 25 po, consumido pela magia.",
    description: "Enquanto estiver sob efeito dessa magia, o objeto é mais difícil de quebrar ou de forçar para abrir; a CD para quebra-lo ou de arromba-lo aumenta em 10.",
    classesList: [
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "2"
  },
  {
    id: "348",
    name: "Truque de Corda",
    school: "transmutação",
    castTime: "1 ação",
    range: "toque",
    components: "V, S, M",
    duration: "1 hora",
    concentration: false,
    material: "Material: pó de extrato de milho e um laço de pergaminho trançado.",
    description: "Tudo que estiver dentro do espaço extradimensional cai quando a magia acabar.",
    classesList: [
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "2"
  },
  {
    id: "349",
    name: "Tsunami",
    school: "conjuração",
    castTime: "1 minuto",
    range: "visão",
    components: "V, S",
    duration: "até 6 rodadas",
    concentration: true,
    material: "Uma muralha de água aparece do nada num ponto, à sua escolha, dentro do alcance. Você pode fazer a muralha ter até 90 metros de comprimento, 90 metro de altura e 15 metros de espessura. A muralha permanece pela duração.",
    description: "Uma criatura pega pela muralha, pode se mover nadando. Devido à força da onda, no entanto, a criatura deve realizar um teste de Força (Atletismo) contra a CD da magia para conseguir se mover. Se ela falhar no teste, não conseguirá se mover. Uma criatura que se mova para fora da área, cairá no chão.",
    classesList: [
      {
        id: "4",
        name: "druida"
      }
    ],
    "nivel": "8"
  },
  {
    id: "350",
    name: "Velocidade",
    school: "transmutação",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, S, M",
    duration: "até 1 minuto",
    concentration: true,
    material: "Material: uma raspa de raiz de alcaçuz.",
    description: "Quando a magia acabar, o alvo não poderá se mover ou realizar ações até depois do seu próximo turno, à medida que uma onda de letargia toma conta dele.",
    classesList: [
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "3"
  },
  {
    id: "351",
    name: "Ver o Invisível",
    school: "adivinhação",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S, M",
    duration: "1 hora",
    concentration: false,
    material: "Material: um pouco de talco e um pó de prata polvilhado.",
    description: "Pela duração, você vê criaturas e objetos invisíveis como se eles fossem visíveis e você pode ver no Plano Etéreo. Criaturas e objetos etéreos parecem espectrais e translúcidos.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "2"
  },
  {
    id: "352",
    name: "Viagem Planar",
    school: "conjuração",
    castTime: "1 ação",
    range: "toque",
    components: "V, S, M",
    duration: "instantânea",
    concentration: false,
    material: "Material: uma haste metálica bifurcada valendo, no mínimo, 250 po, sintonizada com um plano de existência em particular.",
    description: "Você pode usar essa magia para banir uma criatura involuntária para outro plano. Escolha uma criatura ao seu alcance e realize um ataque corpo-a-corpo com magia contra ela. Se atingir, a criatura deve realizar um teste de resistência de Carisma. Se a criatura falhar na resistência, ela é transportada para um local aleatório no plano de existência que você especificou. Uma criatura, uma vez transportada, deve encontrar seu próprio meio de retornar para seu plano de existência atual.",
    classesList: [
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "7"
  },
  {
    id: "353",
    name: "Vidência",
    school: "adivinhação",
    castTime: "10 minutos",
    range: "pessoal",
    components: "V, S, M",
    duration: "até 10 minutos",
    concentration: true,
    material: "Material: um foco valendo, no mínimo, 1.000 po, como uma bola de cristal, espelho de prata ou fonte cheia de água benta.",
    description: "Ao invés de focar em uma criatura, você pode escolher um local que você já tenha visto antes como alvo dessa magia. Quando fizer isso, o sensor aparece no local e não se move.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "4",
        name: "druida"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "5"
  },
  {
    id: "354",
    name: "Vínculo Protetor",
    school: "abjuração",
    castTime: "1 ação",
    range: "toque",
    components: "V, S, M",
    duration: "1 hora",
    concentration: false,
    material: "Material: um par de anéis de platina valendo, no mínimo, 50 po cada, que você e o alvo devem usar pela duração.",
    description: "A magia acaba se você cair a 0 pontos de vida ou se você e o alvo ficarem separados a mais de 18 metros. Ela também termina se a magia for conjurada novamente em quaisquer das criaturas conectadas. Você também pode dissipar a magia com uma ação.",
    classesList: [
      {
        id: "3",
        name: "clérigo"
      }
    ],
    "nivel": "2"
  },
  {
    id: "355",
    name: "Vinha Esmagadora",
    school: "conjuração",
    castTime: "1 ação bônus",
    range: "9 metros",
    components: "V, S",
    duration: "até 1 minuto",
    concentration: true,
    material: "Você conjura uma vinha que brota do chão em um espaço desocupado, à sua escolha, que você possa ver dentro do alcance. Quando você conjura essa magia, você pode direcionar a vinha para que ela enlace uma criatura a até 9 metros dela que você possa ver. Essa criatura deve ser bem sucedida num teste de resistência de Destreza ou será arrastada 6 metros na direção da vinha.",
    description: "Até o fim da magia, você pode direcionar a vinha para enlaçar a mesma criatura ou uma diferente, com uma ação bônus, em cada um dos seus turnos.",
    classesList: [
      {
        id: "4",
        name: "druida"
      },
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "4"
  },
  {
    id: "356",
    name: "Visão da Verdade",
    school: "adivinhação",
    castTime: "1 ação",
    range: "toque",
    components: "V, S, M",
    duration: "1 hora",
    concentration: false,
    material: "Material: unguento para os olhos no valor de 25 po; ele é feito de pó de cogumelo, açafrão e gordura; e é consumido pela magia.",
    description: "Essa magia concede a uma criatura voluntária tocada a habilidade de ver as coisas como elas realmente são. Pela duração, a criatura terá visão verdadeira, percebendo portas secretas escondidas por magia e podendo ver no Plano Etéreo, tudo num alcance de até 36 metros.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "6"
  },
  {
    id: "357",
    name: "Visão No Escuro",
    school: "transmutação",
    castTime: "1 ação",
    range: "toque",
    components: "V, S, M",
    duration: "8 horas",
    concentration: false,
    material: "Material: ou um pedaço de cenoura seca ou uma ágata.",
    description: "Você toca uma criatura voluntária para conceder a ela a habilidade de ver nas trevas. Pela duração, a criatura terá visão no escuro com alcance de 18 metros.",
    classesList: [
      {
        id: "4",
        name: "druida"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      },
      {
        id: "8",
        name: "patrulheiro"
      }
    ],
    "nivel": "2"
  },
  {
    id: "358",
    name: "Vitalidade Falsa",
    school: "necromancia",
    castTime: "1 ação",
    range: "pessoal",
    components: "V, S, M",
    duration: "1 hora",
    concentration: false,
    material: "Material: uma pequena quantidade de álcool ou bebidas destiladas.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, você ganha 5 pontos de vida temporários adicionais para cada nível do espaço de magia acima do 1°.",
    classesList: [
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "1"
  },
  {
    id: "359",
    name: "Voo",
    school: "transmutação",
    castTime: "1 ação",
    range: "toque",
    components: "V, S, M",
    duration: "até 10 minutos",
    concentration: true,
    material: "Material: uma pena da asa de qualquer pássaro.",
    description: "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, você pode afetar uma criatura adicional para cada nível do espaço acima do 3°.",
    classesList: [
      {
        id: "2",
        name: "bruxo"
      },
      {
        id: "5",
        name: "feiticeiro"
      },
      {
        id: "6",
        name: "mago"
      }
    ],
    "nivel": "3"
  },
  {
    id: "360",
    name: "Zombaria Viciosa",
    school: "encantamento",
    castTime: "1 ação",
    range: "18 metros",
    components: "V",
    duration: "instantânea",
    concentration: false,
    material: "Você libera uma série de insultos atados com encantamentos sutis numa criatura que você possa ver, dentro do alcance. Se o alvo puder ouvir você (apesar de não precisar compreende-lo), ele deve ser bem sucedido num teste de resistência de Sabedoria ou sofrerá 1d4 de dano psíquico e terá desvantagem na próxima jogada de ataque que ele fizer antes do final do próximo turno dele.",
    description: "O dano dessa magia aumenta em 1d4 quando você alcança o 5° nível (2d4), 11° nível (3d4) e 17° nível (4d4).",
    classesList: [
      {
        id: "1",
        name: "bardo"
      }
    ],
    "nivel": "0"
  },
  {
    id: "361",
    name: "Zona da Verdade",
    school: "encantamento",
    castTime: "1 ação",
    range: "18 metros",
    components: "V, S",
    duration: "10 minutos",
    concentration: false,
    material: "Você cria uma zona mágica protegida contra enganação, numa esfera com 4,5 metros de raio, centrada num ponto, à sua escolha, dentro do alcance. Até a magia acabar, uma criatura que entrar na área da magia pela primeira vez num turno ou começar seu turno nela, deve realizar um teste de resistência de Carisma. Se falhar na resistência, a criatura não poderá mentir deliberadamente enquanto estiver no raio. Você saberá cada criatura que passou ou falhou nesse teste de resistência.",
    description: "Uma criatura afetada está ciente da magia e pode, portanto, evitar responder perguntas as quais ela normalmente responderia com uma mentira. Tais criaturas podem ser evasivas em suas respostas, contanto que permaneçam dentro dos limites da verdade.",
    classesList: [
      {
        id: "1",
        name: "bardo"
      },
      {
        id: "3",
        name: "clérigo"
      },
      {
        id: "7",
        name: "paladino"
      }
    ],
    "nivel": "2"
  }
]