/* Conexão 2027 — conteúdo aprovado. Arquivo clássico: funciona também via file://. */
"use strict";

// CONTEÚDO DAS CARTAS: manter pt, en e es em cada registro.
const CARTAS = [
  {
    "id": "01",
    "image": "imagens/01-a-ponte.png",
    "pt": {
      "title": "A Ponte",
      "keywords": "travessia · aproximação · diálogo · limites",
      "message": [
        "Entre o lugar que você conhece e aquilo que deseja experimentar, pode existir uma travessia. A ponte convida a observar o que aproxima essas margens: uma conversa adiada, um aprendizado ou um pedido de ajuda.",
        "Antes de avançar, considere a estrutura que sustenta a passagem. Há disponibilidade dos dois lados? O diálogo permite escuta e respeito? Aproximar-se pode ser importante, mas preservar uma distância também pode ser uma escolha cuidadosa.",
        "Ao pensar em 2027, observe quais conexões deseja construir e quais limites precisa comunicar. Você não precisa atravessar tudo de uma vez. Um gesto possível pode iniciar um encontro ou ajudar a encerrar uma etapa. O sentido dessa passagem depende da sua história e das condições que encontra."
      ],
      "question": "Que significado teria, para você, aproximar essas duas margens?",
      "exercise": "Escreva o que representa cada margem de uma situação atual. Anote uma aproximação possível e um limite que deseja preservar. Escolha um pequeno gesto que respeite ambos.",
      "perception": "A imagem não conhece o futuro, e sua escolha não revela uma verdade oculta. A atração pode envolver memória, percepção, emoção, expectativa e experiências pessoais. Observe o que a ponte desperta em você, sem presumir que precisa atravessá-la. O significado é construído pela sua reflexão. Use a mensagem como apoio à observação; ela não substitui orientação profissional.",
      "sentence": "Uma aproximação pode respeitar meus limites."
    },
    "en": {
      "title": "The Bridge",
      "keywords": "crossing · connection · dialogue · boundaries",
      "message": [
        "Between what is familiar and what you want to experience, there may be a crossing to make. The bridge invites you to notice what could bring these two shores closer: a postponed conversation, something to learn, or a request for help.",
        "Before moving forward, consider what supports the crossing. Is there willingness on both sides? Is there room for listening and respect? Moving closer can matter, but keeping some distance can also be a thoughtful choice.",
        "As you think about 2027, notice which connections you want to build and which boundaries you need to communicate. You do not have to cross all at once. One manageable gesture may open a conversation or help bring a chapter to a close. What this crossing means depends on your history and the circumstances you encounter."
      ],
      "question": "What would bringing these two shores closer mean to you?",
      "exercise": "Write down what each shore represents in a current situation. Note one possible way to connect and one boundary you want to maintain. Choose a small gesture that respects both.",
      "perception": "The image does not know the future, and your choice does not reveal a hidden truth. Its appeal may involve memory, perception, emotion, expectations, and personal experiences. Notice what the bridge brings up for you without assuming you need to cross it. Meaning takes shape through your own reflection. Use this message to support observation; it does not replace professional guidance.",
      "sentence": "I can move closer while honoring my boundaries."
    },
    "es": {
      "title": "El Puente",
      "keywords": "travesía · acercamiento · diálogo · límites",
      "message": [
        "Entre lo que ya conoces y aquello que deseas experimentar, puede haber una travesía. El puente te invita a observar qué podría acercar esas dos orillas: una conversación pendiente, un aprendizaje o una petición de ayuda.",
        "Antes de avanzar, considera qué sostiene el paso. ¿Hay disposición de ambos lados? ¿El diálogo permite escuchar y respetar? Acercarte puede ser importante, pero mantener cierta distancia también puede ser una decisión cuidadosa.",
        "Al pensar en 2027, observa qué conexiones deseas construir y qué límites necesitas comunicar. No tienes que cruzar de una sola vez. Un pequeño gesto a tu alcance puede propiciar un encuentro o ayudarte a cerrar una etapa. El sentido de este paso depende de tu historia y de las condiciones que encuentres."
      ],
      "question": "¿Qué significaría para ti acercar esas dos orillas?",
      "exercise": "Escribe qué representa cada orilla en una situación actual. Anota una forma posible de acercarte y un límite que deseas mantener. Elige un pequeño gesto que respete ambos.",
      "perception": "La imagen no conoce el futuro y tu elección no revela una verdad oculta. La atracción puede involucrar memoria, percepción, emoción, expectativas y experiencias personales. Observa qué despierta el puente en ti, sin suponer que debes cruzarlo. El significado se construye a través de tu propia reflexión. Usa este mensaje como apoyo para observar; no sustituye la orientación profesional.",
      "sentence": "Puedo acercarme sin dejar de respetar mis límites."
    }
  },
  {
    "id": "02",
    "image": "imagens/02-a-semente.png",
    "pt": {
      "title": "A Semente",
      "keywords": "potencial · começo · paciência · desenvolvimento",
      "message": [
        "Uma semente guarda possibilidades, mas seu desenvolvimento depende das condições que encontra. Esta imagem convida você a reconhecer algo pequeno que deseja cultivar: um hábito, um projeto ou uma forma mais cuidadosa de viver.",
        "Antes de cobrar resultados, observe o solo disponível. Há tempo e energia para esse começo? O que precisa ser preparado? Parte do desenvolvimento acontece longe dos olhos, como o aprendizado que ainda não se transforma em resultado visível.",
        "Ao pensar em 2027, escolha um cultivo possível. Começar discretamente permite conhecer melhor o processo e ajustar os cuidados. Paciência pode caminhar junto com observação: vale acompanhar o que muda, buscar apoio e reconsiderar uma tentativa quando necessário. Nenhuma semente oferece garantia de florescimento."
      ],
      "question": "Como você percebe o valor de um começo antes de haver resultados visíveis?",
      "exercise": "Escolha um hábito ou projeto que deseja iniciar. Defina uma ação de até dez minutos e um momento para realizá-la. Depois, registre o que aprendeu, mesmo que o resultado ainda seja discreto.",
      "perception": "A imagem não conhece o futuro, e sua escolha não revela uma verdade oculta. A atração pode envolver memória, percepção, emoção, expectativa e experiências pessoais. Observe que começo a semente faz você lembrar, sem associá-la a uma garantia de crescimento. O significado é construído pela sua reflexão. Esta mensagem oferece um ponto de observação e não substitui orientação profissional.",
      "sentence": "Meu cuidado pode começar antes dos resultados."
    },
    "en": {
      "title": "The Seed",
      "keywords": "potential · beginnings · patience · development",
      "message": [
        "A seed holds possibilities, but its development depends on the conditions it encounters. This image invites you to recognize something small you want to nurture: a habit, a project, or a more caring way of living.",
        "Before expecting results, consider the soil available. Do you have time and energy for this beginning? What needs preparation? Some development happens out of sight, like learning that has not yet produced a visible result.",
        "As you think about 2027, choose something you can realistically nurture. Starting small allows you to understand the process better and adjust your care. Patience can go hand in hand with observation: notice what changes, seek support, and reconsider an attempt when needed. No seed comes with a guarantee that it will bloom."
      ],
      "question": "How do you recognize the value of a beginning before there are visible results?",
      "exercise": "Choose a habit or project you want to start. Define an action that takes no more than ten minutes and decide when to do it. Afterward, write down what you learned, even if the result is still modest.",
      "perception": "The image does not know the future, and your choice does not reveal a hidden truth. Its appeal may involve memory, perception, emotion, expectations, and personal experiences. Notice what beginning the seed brings to mind without taking it as a guarantee of growth. Meaning takes shape through your own reflection. This message offers a perspective for observation and does not replace professional guidance.",
      "sentence": "My care can begin before results appear."
    },
    "es": {
      "title": "La Semilla",
      "keywords": "potencial · comienzo · paciencia · desarrollo",
      "message": [
        "Una semilla guarda posibilidades, pero su desarrollo depende de las condiciones que encuentra. Esta imagen te invita a reconocer algo pequeño que deseas cultivar: un hábito, un proyecto o una forma más cuidadosa de vivir.",
        "Antes de exigir resultados, observa el suelo disponible. ¿Hay tiempo y energía para este comienzo? ¿Qué necesitas preparar? Parte del desarrollo ocurre fuera de la vista, como un aprendizaje que todavía no se convierte en un resultado visible.",
        "Al pensar en 2027, elige algo que puedas cultivar. Comenzar con discreción te permite conocer mejor el proceso y ajustar los cuidados. La paciencia puede ir de la mano de la observación: presta atención a lo que cambia, busca apoyo y reconsidera un intento cuando sea necesario. Ninguna semilla garantiza que llegará a florecer."
      ],
      "question": "¿Cómo reconoces el valor de un comienzo antes de que haya resultados visibles?",
      "exercise": "Elige un hábito o proyecto que deseas iniciar. Define una acción de hasta diez minutos y un momento para realizarla. Después, escribe qué aprendiste, aunque el resultado todavía sea pequeño.",
      "perception": "La imagen no conoce el futuro y tu elección no revela una verdad oculta. La atracción puede involucrar memoria, percepción, emoción, expectativas y experiencias personales. Observa qué comienzo te recuerda la semilla, sin asociarla con una garantía de crecimiento. El significado se construye a través de tu propia reflexión. Este mensaje ofrece un punto de observación y no sustituye la orientación profesional.",
      "sentence": "Mi cuidado puede comenzar antes de los resultados."
    }
  },
  {
    "id": "03",
    "image": "imagens/03-a-janela.png",
    "pt": {
      "title": "A Janela",
      "keywords": "perspectiva · abertura · curiosidade · possibilidades",
      "message": [
        "Uma janela oferece uma vista, e toda vista mostra apenas parte da paisagem. Esta imagem convida você a perceber de onde está olhando para uma situação e quais detalhes permanecem fora do seu campo de visão.",
        "Experiências anteriores, desejos e receios podem influenciar sua interpretação. Abrir espaço para outra perspectiva pode significar ouvir alguém, formular uma pergunta ou procurar uma informação que falta. Sua impressão inicial pode ser examinada com curiosidade.",
        "Ao imaginar 2027, experimente olhar além da primeira leitura. Talvez você reconheça uma possibilidade pouco explorada ou compreenda melhor uma escolha já feita. Ampliar a observação não exige aceitar todas as opiniões. Você pode conhecer outros pontos de vista e decidir quais fazem sentido para sua realidade."
      ],
      "question": "O que ainda fica fora do seu campo de visão nesta situação?",
      "exercise": "Descreva uma situação em duas frases, separando os fatos da sua interpretação. Escreva outra leitura possível. Formule uma pergunta que ajude a investigar o que ainda não sabe.",
      "perception": "A imagem não conhece o futuro, e sua escolha não revela uma verdade oculta. A atração pode envolver memória, percepção, emoção, expectativa e experiências pessoais. Observe qual detalhe da janela chamou sua atenção e que associações ele provoca. O significado é construído pela sua reflexão, sem uma interpretação obrigatória. A mensagem pode apoiar esse processo, mas não substitui orientação profissional.",
      "sentence": "Um novo ângulo pode ampliar meu olhar."
    },
    "en": {
      "title": "The Window",
      "keywords": "perspective · openness · curiosity · possibilities",
      "message": [
        "A window offers a view, and every view shows only part of the landscape. This image invites you to notice the perspective from which you are looking at a situation and which details remain outside your field of vision.",
        "Past experiences, wishes, and fears can influence your interpretation. Making room for another perspective may mean listening to someone, asking a question, or finding missing information. You can examine your first impression with curiosity.",
        "As you imagine 2027, try looking beyond your initial interpretation. You may recognize an unexplored possibility or better understand a choice you have already made. Broadening your view does not require accepting every opinion. You can explore other viewpoints and decide which ones make sense in your circumstances."
      ],
      "question": "What remains outside your field of vision in this situation?",
      "exercise": "Describe a situation in two sentences, separating the facts from your interpretation. Write down another possible interpretation. Ask a question that could help you explore what you do not yet know.",
      "perception": "The image does not know the future, and your choice does not reveal a hidden truth. Its appeal may involve memory, perception, emotion, expectations, and personal experiences. Notice which detail of the window caught your attention and what associations it brings up. Meaning takes shape through your own reflection, with no required interpretation. This message can support that process but does not replace professional guidance.",
      "sentence": "A new angle can broaden my view."
    },
    "es": {
      "title": "La Ventana",
      "keywords": "perspectiva · apertura · curiosidad · posibilidades",
      "message": [
        "Una ventana ofrece una vista, y toda vista muestra solo una parte del paisaje. Esta imagen te invita a reconocer desde dónde estás mirando una situación y qué detalles quedan fuera de tu campo de visión.",
        "Las experiencias anteriores, los deseos y los temores pueden influir en tu interpretación. Dar espacio a otra perspectiva puede significar escuchar a alguien, hacer una pregunta o buscar información que falta. Puedes examinar tu primera impresión con curiosidad.",
        "Al imaginar 2027, intenta mirar más allá de la primera lectura. Tal vez reconozcas una posibilidad poco explorada o comprendas mejor una decisión que ya tomaste. Ampliar la mirada no exige aceptar todas las opiniones. Puedes conocer otros puntos de vista y decidir cuáles tienen sentido en tu realidad."
      ],
      "question": "¿Qué sigue fuera de tu campo de visión en esta situación?",
      "exercise": "Describe una situación en dos frases, separando los hechos de tu interpretación. Escribe otra lectura posible. Formula una pregunta que te ayude a investigar lo que todavía no sabes.",
      "perception": "La imagen no conoce el futuro y tu elección no revela una verdad oculta. La atracción puede involucrar memoria, percepción, emoción, expectativas y experiencias personales. Observa qué detalle de la ventana llamó tu atención y qué asociaciones despierta. El significado se construye a través de tu propia reflexión, sin una interpretación obligatoria. El mensaje puede acompañar este proceso, pero no sustituye la orientación profesional.",
      "sentence": "Un nuevo ángulo puede ampliar mi mirada."
    }
  },
  {
    "id": "04",
    "image": "imagens/04-a-montanha.png",
    "pt": {
      "title": "A Montanha",
      "keywords": "desafio · esforço · perspectiva · força interior",
      "message": [
        "Diante de uma montanha, a distância até o alto pode ocupar todo o olhar. A caminhada, porém, acontece no trecho que os pés conseguem percorrer. Esta imagem convida você a observar um desafio e o esforço que ele pede.",
        "Que habilidades precisam de prática? Onde será necessário descansar ou buscar companhia? Reconhecer recursos e limites pode ajudar a encontrar uma força interior feita também de experiência, discernimento e disposição para aprender.",
        "Para 2027, considere dividir um objetivo em etapas possíveis. Ao longo do percurso, uma pausa pode oferecer uma visão mais ampla do caminho e do próprio destino. Persistir pode incluir mudar a rota ou reconsiderar a subida. Vale compreender por que esse objetivo importa antes de dedicar suas forças a ele."
      ],
      "question": "O que faz esse desafio valer o esforço para você?",
      "exercise": "Divida um objetivo em três etapas. Escolha a primeira e defina uma ação possível para esta semana. Reserve um momento para avaliar o esforço e decidir se o percurso precisa de ajustes.",
      "perception": "A imagem não conhece o futuro, e sua escolha não revela uma verdade oculta. A atração pode envolver memória, percepção, emoção, expectativa e experiências pessoais. Observe se a montanha lembra desafio, amplitude ou cansaço, sem concluir que precisa superar alguma coisa. O significado é construído pela sua reflexão. Esta mensagem não mede sua capacidade nem substitui orientação profissional.",
      "sentence": "Minha força também inclui reconhecer meus limites."
    },
    "en": {
      "title": "The Mountain",
      "keywords": "challenge · effort · perspective · inner strength",
      "message": [
        "When you face a mountain, the distance to the top can fill your entire view. Yet the walk unfolds one manageable stretch at a time. This image invites you to consider a challenge and the effort it asks of you.",
        "Which skills need practice? Where will you need rest or company? Recognizing your resources and limits can help you find an inner strength shaped by experience, discernment, and a willingness to learn.",
        "For 2027, consider breaking a goal into manageable stages. Along the way, a pause may offer a broader view of both the path and your destination. Persistence can include changing course or reconsidering the climb. It is worth understanding why this goal matters before devoting your energy to it."
      ],
      "question": "What makes this challenge worth the effort for you?",
      "exercise": "Break a goal into three stages. Choose the first and define a manageable action for this week. Set aside time to assess the effort involved and decide whether the route needs adjusting.",
      "perception": "The image does not know the future, and your choice does not reveal a hidden truth. Its appeal may involve memory, perception, emotion, expectations, and personal experiences. Notice whether the mountain brings to mind challenge, a wider view, or fatigue without concluding that you must overcome something. Meaning takes shape through your own reflection. This message does not measure your ability or replace professional guidance.",
      "sentence": "My strength includes recognizing my limits."
    },
    "es": {
      "title": "La Montaña",
      "keywords": "desafío · esfuerzo · perspectiva · fuerza interior",
      "message": [
        "Frente a una montaña, la distancia hasta la cima puede ocupar toda tu mirada. Sin embargo, la caminata ocurre en el tramo que tus pies pueden recorrer. Esta imagen te invita a observar un desafío y el esfuerzo que requiere.",
        "¿Qué habilidades necesitan práctica? ¿En qué momentos necesitarás descansar o buscar compañía? Reconocer tus recursos y límites puede ayudarte a encontrar una fuerza interior que también se nutre de experiencia, discernimiento y disposición para aprender.",
        "Para 2027, considera dividir un objetivo en etapas posibles. Durante el recorrido, una pausa puede ofrecerte una visión más amplia del camino y del destino elegido. Persistir puede incluir cambiar de ruta o reconsiderar la subida. Vale la pena comprender por qué importa ese objetivo antes de dedicarle tus fuerzas."
      ],
      "question": "¿Qué hace que este desafío valga el esfuerzo para ti?",
      "exercise": "Divide un objetivo en tres etapas. Elige la primera y define una acción posible para esta semana. Reserva un momento para evaluar el esfuerzo y decidir si el recorrido necesita ajustes.",
      "perception": "La imagen no conoce el futuro y tu elección no revela una verdad oculta. La atracción puede involucrar memoria, percepción, emoción, expectativas y experiencias personales. Observa si la montaña te recuerda desafío, amplitud o cansancio, sin concluir que debes superar algo. El significado se construye a través de tu propia reflexión. Este mensaje no mide tu capacidad ni sustituye la orientación profesional.",
      "sentence": "Mi fuerza también incluye reconocer mis límites."
    }
  },
  {
    "id": "05",
    "image": "imagens/05-o-rio.png",
    "pt": {
      "title": "O Rio",
      "keywords": "fluxo · adaptação · continuidade · mudança",
      "message": [
        "O rio encontra curvas, pedras e mudanças de terreno. Sua imagem convida você a observar como responde quando a realidade altera seus planos. Há momentos em que insistir ajuda e outros em que ajustar o percurso permite continuar com mais cuidado.",
        "Adaptar-se envolve perceber o que mudou e escolher uma resposta possível. Isso pode incluir preservar um compromisso, modificar uma rotina ou reconhecer que certas condições estão fora do seu controle.",
        "Ao pensar em 2027, observe onde sua vida pede movimento e onde precisa de margens mais firmes. Experimente uma mudança pequena e acompanhe seus efeitos. Você pode manter uma intenção importante enquanto revê a maneira de realizá-la. Um desvio merece ser compreendido antes de receber o nome de fracasso."
      ],
      "question": "O que você deseja preservar enquanto ajusta seu percurso?",
      "exercise": "Escolha um plano que encontrou uma dificuldade. Anote o que mudou e uma alternativa que dependa de você. Experimente um primeiro ajuste e observe se ele ajuda a continuar.",
      "perception": "A imagem não conhece o futuro, e sua escolha não revela uma verdade oculta. A atração pode envolver memória, percepção, emoção, expectativa e experiências pessoais. Observe o que o movimento da água desperta, sem interpretá-lo como uma ordem para seguir ou desistir. O significado é construído pela sua reflexão. Esta mensagem pode estimular a observação, mas não substitui orientação profissional.",
      "sentence": "Há espaço para ajustar meu percurso."
    },
    "en": {
      "title": "The River",
      "keywords": "flow · adaptation · continuity · change",
      "message": [
        "A river encounters bends, rocks, and changes in terrain. Its image invites you to notice how you respond when reality changes your plans. There are times when persistence helps and others when adjusting your course allows you to continue with greater care.",
        "Adapting involves noticing what has changed and choosing a workable response. That may include keeping a commitment, changing a routine, or recognizing that some conditions are beyond your control.",
        "As you think about 2027, notice where your life calls for movement and where it needs firmer banks. Try a small change and follow its effects. You can hold on to an important intention while reconsidering how to carry it out. A detour deserves to be understood before it is called a failure."
      ],
      "question": "What do you want to preserve as you adjust your course?",
      "exercise": "Choose a plan that has run into a difficulty. Write down what changed and one alternative within your control. Try an initial adjustment and notice whether it helps you continue.",
      "perception": "The image does not know the future, and your choice does not reveal a hidden truth. Its appeal may involve memory, perception, emotion, expectations, and personal experiences. Notice what the moving water brings up without interpreting it as an instruction to continue or give up. Meaning takes shape through your own reflection. This message can encourage observation but does not replace professional guidance.",
      "sentence": "There is room to adjust my course."
    },
    "es": {
      "title": "El Río",
      "keywords": "flujo · adaptación · continuidad · cambio",
      "message": [
        "El río encuentra curvas, piedras y cambios en el terreno. Su imagen te invita a observar cómo respondes cuando la realidad modifica tus planes. Hay momentos en que insistir ayuda y otros en que ajustar el recorrido te permite continuar con más cuidado.",
        "Adaptarte implica reconocer qué cambió y elegir una respuesta posible. Esto puede incluir mantener un compromiso, modificar una rutina o reconocer que ciertas condiciones están fuera de tu control.",
        "Al pensar en 2027, observa dónde tu vida necesita movimiento y dónde requiere orillas más firmes. Prueba un pequeño cambio y presta atención a sus efectos. Puedes mantener una intención importante mientras revisas la manera de llevarla a cabo. Un desvío merece ser comprendido antes de recibir el nombre de fracaso."
      ],
      "question": "¿Qué deseas conservar mientras ajustas tu recorrido?",
      "exercise": "Elige un plan que haya encontrado una dificultad. Anota qué cambió y una alternativa que dependa de ti. Prueba un primer ajuste y observa si te ayuda a continuar.",
      "perception": "La imagen no conoce el futuro y tu elección no revela una verdad oculta. La atracción puede involucrar memoria, percepción, emoción, expectativas y experiencias personales. Observa qué despierta el movimiento del agua, sin interpretarlo como una orden de continuar o desistir. El significado se construye a través de tu propia reflexión. Este mensaje puede estimular la observación, pero no sustituye la orientación profesional.",
      "sentence": "Hay espacio para ajustar mi recorrido."
    }
  },
  {
    "id": "06",
    "image": "imagens/06-a-chave.png",
    "pt": {
      "title": "A Chave",
      "keywords": "acesso · decisão · descoberta · responsabilidade",
      "message": [
        "Uma chave chama a atenção para aquilo que pode ser aberto e para a responsabilidade de escolher uma entrada. Esta imagem convida você a reconhecer recursos que já possui e condições que ainda precisa construir.",
        "Uma habilidade esquecida, uma informação confiável ou uma conversa podem ampliar suas opções. Antes de procurar uma solução extraordinária, observe o que está ao alcance e o que merece ser investigado com mais cuidado.",
        "Para 2027, pense em uma decisão que pede clareza. Qual porta você está considerando? O que sabe sobre ela e quais consequências precisa avaliar? Você pode explorar uma possibilidade, reunir informações e decidir depois. Ter acesso não cria obrigação de entrar. Também é possível reconhecer que uma abertura não combina com suas necessidades atuais."
      ],
      "question": "O que você precisa compreender antes de escolher essa entrada?",
      "exercise": "Escreva uma decisão que está considerando. Liste um recurso disponível, uma informação que falta e uma consequência possível. Escolha uma forma simples de buscar a informação antes de decidir.",
      "perception": "A imagem não conhece o futuro, e sua escolha não revela uma verdade oculta. A atração pode envolver memória, percepção, emoção, expectativa e experiências pessoais. Observe que possibilidade a chave faz você imaginar, sem tratá-la como autorização para agir. O significado é construído pela sua reflexão. A mensagem oferece um ponto de partida para pensar e não substitui orientação profissional.",
      "sentence": "Posso conhecer a porta antes de escolher entrar."
    },
    "en": {
      "title": "The Key",
      "keywords": "access · decision · discovery · responsibility",
      "message": [
        "A key draws attention to what can be opened and to the responsibility involved in choosing a doorway. This image invites you to recognize resources you already have and conditions you still need to put in place.",
        "A forgotten skill, reliable information, or a conversation may expand your options. Before searching for an extraordinary solution, notice what is within reach and what deserves a closer look.",
        "For 2027, think about a decision that calls for clarity. Which door are you considering? What do you know about it, and which consequences do you need to weigh? You can explore a possibility, gather information, and decide later. Having access does not oblige you to enter. You may also recognize that an opening does not suit your current needs."
      ],
      "question": "What do you need to understand before choosing this doorway?",
      "exercise": "Write down a decision you are considering. List one available resource, one piece of missing information, and one possible consequence. Choose a simple way to find the information before deciding.",
      "perception": "The image does not know the future, and your choice does not reveal a hidden truth. Its appeal may involve memory, perception, emotion, expectations, and personal experiences. Notice what possibility the key brings to mind without treating it as permission to act. Meaning takes shape through your own reflection. This message offers a starting point for thinking and does not replace professional guidance.",
      "sentence": "I can explore the doorway before choosing to enter."
    },
    "es": {
      "title": "La Llave",
      "keywords": "acceso · decisión · descubrimiento · responsabilidad",
      "message": [
        "Una llave llama la atención sobre aquello que puede abrirse y sobre la responsabilidad de elegir una entrada. Esta imagen te invita a reconocer los recursos que ya tienes y las condiciones que todavía necesitas crear.",
        "Una habilidad olvidada, información confiable o una conversación pueden ampliar tus opciones. Antes de buscar una solución extraordinaria, observa qué está a tu alcance y qué merece ser investigado con más cuidado.",
        "Para 2027, piensa en una decisión que necesita claridad. ¿Qué puerta estás considerando? ¿Qué sabes de ella y qué consecuencias necesitas evaluar? Puedes explorar una posibilidad, reunir información y decidir después. Tener acceso no te obliga a entrar. También puedes reconocer que una apertura no se ajusta a tus necesidades actuales."
      ],
      "question": "¿Qué necesitas comprender antes de elegir esta entrada?",
      "exercise": "Escribe una decisión que estás considerando. Anota un recurso disponible, un dato que te falta y una consecuencia posible. Elige una forma sencilla de buscar esa información antes de decidir.",
      "perception": "La imagen no conoce el futuro y tu elección no revela una verdad oculta. La atracción puede involucrar memoria, percepción, emoción, expectativas y experiencias personales. Observa qué posibilidad te hace imaginar la llave, sin tratarla como una autorización para actuar. El significado se construye a través de tu propia reflexión. El mensaje ofrece un punto de partida para pensar y no sustituye la orientación profesional.",
      "sentence": "Puedo explorar la puerta antes de elegir entrar."
    }
  },
  {
    "id": "07",
    "image": "imagens/07-a-fogueira.png",
    "pt": {
      "title": "A Fogueira",
      "keywords": "energia · presença · calor humano · transformação",
      "message": [
        "Uma fogueira pode aquecer um encontro e tornar os rostos mais próximos. Sua imagem convida você a observar o que alimenta sua disposição e quais presenças tornam a convivência mais acolhedora.",
        "O fogo também pede atenção e medida. Que atividades despertam interesse? Quais compromissos consomem mais do que você consegue oferecer? Reconhecer esses movimentos pode ajudar a transformar a maneira como distribui sua energia e participa dos encontros.",
        "Ao pensar em 2027, considere o que deseja manter aceso com cuidado: uma criação, uma amizade ou um prazer cotidiano. Entusiasmo ganha espaço quando há descanso e responsabilidades compartilhadas. Você pode oferecer presença sem sustentar sozinho o calor de todos. Uma chama tranquila também pode ter valor, sem precisar crescer continuamente."
      ],
      "question": "Como você percebe a troca de energia nos encontros de que participa?",
      "exercise": "Lembre de um encontro recente e anote como se sentiu antes e depois. Identifique algo que tornou a experiência acolhedora ou cansativa. Escolha um pequeno ajuste para uma próxima ocasião.",
      "perception": "A imagem não conhece o futuro, e sua escolha não revela uma verdade oculta. A atração pode envolver memória, percepção, emoção, expectativa e experiências pessoais. Observe se o fogo evoca companhia, entusiasmo ou excesso, sem transformar essa impressão em uma conclusão sobre você. O significado é construído pela sua reflexão. Esta mensagem não avalia sua saúde nem substitui orientação profissional.",
      "sentence": "Minha presença pode aquecer sem me consumir."
    },
    "en": {
      "title": "The Campfire",
      "keywords": "energy · presence · human warmth · transformation",
      "message": [
        "A campfire can warm a gathering and draw people closer. Its image invites you to notice what nourishes your energy and whose presence makes time together feel more welcoming.",
        "Fire also calls for attention and moderation. Which activities spark your interest? Which commitments take more than you can give? Recognizing these patterns may help you change how you distribute your energy and participate in gatherings.",
        "As you think about 2027, consider what you want to keep alight with care: a creative endeavor, a friendship, or an everyday pleasure. There is more room for enthusiasm when rest and shared responsibilities are part of life. You can be present without keeping everyone warm on your own. A quiet flame can have value without having to grow continually."
      ],
      "question": "How do you experience the give-and-take of energy when you spend time with others?",
      "exercise": "Think of a recent gathering and write down how you felt before and afterward. Identify something that made the experience welcoming or tiring. Choose one small adjustment for the next occasion.",
      "perception": "The image does not know the future, and your choice does not reveal a hidden truth. Its appeal may involve memory, perception, emotion, expectations, and personal experiences. Notice whether the fire evokes company, enthusiasm, or excess without turning that impression into a conclusion about yourself. Meaning takes shape through your own reflection. This message does not assess your health or replace professional guidance.",
      "sentence": "My presence can bring warmth without consuming me."
    },
    "es": {
      "title": "La Fogata",
      "keywords": "energía · presencia · calidez humana · transformación",
      "message": [
        "Una fogata puede dar calidez a un encuentro y acercar a las personas. Su imagen te invita a observar qué alimenta tu ánimo y qué presencias hacen más acogedora la convivencia.",
        "El fuego también requiere atención y medida. ¿Qué actividades despiertan tu interés? ¿Qué compromisos consumen más de lo que puedes ofrecer? Reconocer estos movimientos puede ayudarte a transformar la manera en que distribuyes tu energía y participas en los encuentros.",
        "Al pensar en 2027, considera qué deseas mantener encendido con cuidado: una creación, una amistad o un placer cotidiano. El entusiasmo encuentra espacio cuando hay descanso y responsabilidades compartidas. Puedes ofrecer tu presencia sin sostener por tu cuenta el calor de todos. Una llama tranquila también puede tener valor, sin necesidad de crecer constantemente."
      ],
      "question": "¿Cómo percibes el intercambio de energía en los encuentros en los que participas?",
      "exercise": "Recuerda un encuentro reciente y anota cómo te sentiste antes y después. Identifica algo que hizo que la experiencia fuera acogedora o agotadora. Elige un pequeño ajuste para una próxima ocasión.",
      "perception": "La imagen no conoce el futuro y tu elección no revela una verdad oculta. La atracción puede involucrar memoria, percepción, emoción, expectativas y experiencias personales. Observa si el fuego evoca compañía, entusiasmo o exceso, sin convertir esa impresión en una conclusión sobre ti. El significado se construye a través de tu propia reflexión. Este mensaje no evalúa tu salud ni sustituye la orientación profesional.",
      "sentence": "Mi presencia puede dar calidez sin consumirme."
    }
  },
  {
    "id": "08",
    "image": "imagens/08-o-jardim.png",
    "pt": {
      "title": "O Jardim",
      "keywords": "cuidado · cultivo · reciprocidade · crescimento",
      "message": [
        "Um jardim reúne formas de vida com necessidades diferentes. Algumas pedem mais luz; outras, sombra e intervalos maiores de cuidado. Esta imagem convida você a observar as relações, os hábitos e os espaços que compõem seus dias.",
        "O que recebe atenção suficiente? O que continua sendo mantido apenas por costume? Cultivar envolve acompanhar mudanças, retirar excessos e reconhecer que nem tudo pode ocupar o mesmo lugar ou receber o mesmo cuidado.",
        "Para 2027, pense na qualidade do ambiente que deseja construir ao seu redor. Pequenos gestos repetidos podem favorecer a convivência, mas relações também dependem da participação de outras pessoas. Observe onde há reciprocidade e onde é necessário conversar sobre expectativas. Você pode cuidar sem assumir sozinho a responsabilidade pelo crescimento de tudo."
      ],
      "question": "Como o cuidado circula nos espaços e nas relações da sua vida?",
      "exercise": "Escolha uma relação ou um espaço compartilhado. Anote um cuidado que você oferece e outro que recebe. Identifique algo que gostaria de combinar com quem participa desse convívio.",
      "perception": "A imagem não conhece o futuro, e sua escolha não revela uma verdade oculta. A atração pode envolver memória, percepção, emoção, expectativa e experiências pessoais. Observe quais elementos do jardim chamam sua atenção, sem usá-los para julgar suas relações. O significado é construído pela sua reflexão. A mensagem pode ajudar a formular perguntas sobre sua experiência e não substitui orientação profissional.",
      "sentence": "O cuidado pode ser compartilhado."
    },
    "en": {
      "title": "The Garden",
      "keywords": "care · cultivation · reciprocity · growth",
      "message": [
        "A garden brings together living things with different needs. Some need more light; others need shade and less frequent care. This image invites you to notice the relationships, habits, and spaces that make up your days.",
        "What receives enough attention? What are you still maintaining simply out of habit? Cultivation involves following changes, clearing away excess, and recognizing that not everything can occupy the same place or receive the same care.",
        "For 2027, think about the kind of environment you want to create around you. Small, repeated gestures can nurture life together, but relationships also depend on the participation of others. Notice where care is mutual and where expectations need to be discussed. You can care without taking sole responsibility for everything that grows."
      ],
      "question": "How does care move through the spaces and relationships in your life?",
      "exercise": "Choose a relationship or a shared space. Write down one form of care you offer and one you receive. Identify something you would like to agree on with the people involved.",
      "perception": "The image does not know the future, and your choice does not reveal a hidden truth. Its appeal may involve memory, perception, emotion, expectations, and personal experiences. Notice which elements of the garden draw your attention without using them to judge your relationships. Meaning takes shape through your own reflection. This message can help you ask questions about your experience and does not replace professional guidance.",
      "sentence": "Care can be shared."
    },
    "es": {
      "title": "El Jardín",
      "keywords": "cuidado · cultivo · reciprocidad · crecimiento",
      "message": [
        "Un jardín reúne formas de vida con necesidades diferentes. Algunas requieren más luz; otras, sombra y cuidados menos frecuentes. Esta imagen te invita a observar las relaciones, los hábitos y los espacios que forman parte de tus días.",
        "¿Qué recibe suficiente atención? ¿Qué sigues manteniendo solo por costumbre? Cultivar implica acompañar los cambios, retirar los excesos y reconocer que no todo puede ocupar el mismo lugar o recibir el mismo cuidado.",
        "Para 2027, piensa en la calidad del ambiente que deseas construir a tu alrededor. Los pequeños gestos repetidos pueden favorecer la convivencia, pero las relaciones también dependen de la participación de otras personas. Observa dónde hay reciprocidad y dónde hace falta conversar sobre las expectativas. Puedes cuidar sin asumir por tu cuenta la responsabilidad del crecimiento de todo."
      ],
      "question": "¿Cómo circula el cuidado en los espacios y las relaciones de tu vida?",
      "exercise": "Elige una relación o un espacio compartido. Anota un cuidado que ofreces y otro que recibes. Identifica algo que te gustaría acordar con quienes participan en esa convivencia.",
      "perception": "La imagen no conoce el futuro y tu elección no revela una verdad oculta. La atracción puede involucrar memoria, percepción, emoción, expectativas y experiencias personales. Observa qué elementos del jardín llaman tu atención, sin usarlos para juzgar tus relaciones. El significado se construye a través de tu propia reflexión. El mensaje puede ayudarte a formular preguntas sobre tu experiencia y no sustituye la orientación profesional.",
      "sentence": "El cuidado puede ser compartido."
    }
  },
  {
    "id": "09",
    "image": "imagens/09-a-bussola.png",
    "pt": {
      "title": "A Bússola",
      "keywords": "direção · valores · discernimento · escolha",
      "message": [
        "Uma bússola oferece uma referência de direção, enquanto o destino depende de quem caminha. Esta imagem convida você a reconhecer os critérios que deseja levar para suas próximas escolhas.",
        "Segurança, liberdade, afeto e aprendizado podem ter pesos diferentes em cada momento. Quando muitas opiniões se cruzam, vale observar quais ajudam a compreender a situação e quais dificultam ouvir suas próprias prioridades. Seus valores também podem ser revistos à luz da experiência.",
        "Ao olhar para 2027, escolha alguns princípios que façam sentido na prática. Compare suas opções com eles e com as condições reais: tempo disponível, consequências e compromissos. Você pode acolher uma primeira impressão e conferir os fatos antes de agir. Rever a direção com novas informações faz parte de escolher com autonomia."
      ],
      "question": "Que critérios você deseja reconhecer nas escolhas que faz?",
      "exercise": "Escreva dois valores importantes para você. Escolha uma decisão cotidiana e observe como cada alternativa se relaciona com esses valores. Registre um fato que ainda precisa conferir antes de escolher.",
      "perception": "A imagem não conhece o futuro, e sua escolha não revela uma verdade oculta. A atração pode envolver memória, percepção, emoção, expectativa e experiências pessoais. Observe o que direção significa para você e compare suas impressões com fatos disponíveis. O significado é construído pela sua reflexão. A mensagem pode apoiar perguntas sobre suas escolhas, mas não substitui orientação profissional.",
      "sentence": "Meus valores podem orientar escolhas conscientes."
    },
    "en": {
      "title": "The Compass",
      "keywords": "direction · values · discernment · choice",
      "message": [
        "A compass provides a reference for direction, while the destination depends on the person walking. This image invites you to recognize the criteria you want to bring to your next choices.",
        "Security, freedom, affection, and learning can carry different weight at different times. When many opinions intersect, notice which ones help you understand the situation and which make it harder to hear your own priorities. Your values, too, can be reconsidered in light of experience.",
        "As you look toward 2027, choose a few principles that make sense in practice. Compare your options with them and with real conditions: available time, consequences, and commitments. You can acknowledge a first impression and check the facts before acting. Reassessing your direction with new information is part of choosing for yourself."
      ],
      "question": "What criteria would you like to see reflected in the choices you make?",
      "exercise": "Write down two values that matter to you. Choose an everyday decision and notice how each option relates to those values. Note one fact you still need to check before choosing.",
      "perception": "The image does not know the future, and your choice does not reveal a hidden truth. Its appeal may involve memory, perception, emotion, expectations, and personal experiences. Notice what direction means to you and compare your impressions with the available facts. Meaning takes shape through your own reflection. This message can support questions about your choices but does not replace professional guidance.",
      "sentence": "My values can guide conscious choices."
    },
    "es": {
      "title": "La Brújula",
      "keywords": "dirección · valores · discernimiento · elección",
      "message": [
        "Una brújula ofrece una referencia de dirección, mientras que el destino depende de quien camina. Esta imagen te invita a reconocer los criterios que deseas llevar a tus próximas elecciones.",
        "La seguridad, la libertad, el afecto y el aprendizaje pueden tener un peso diferente en cada momento. Cuando se cruzan muchas opiniones, vale la pena observar cuáles ayudan a comprender la situación y cuáles dificultan escuchar tus propias prioridades. Tus valores también pueden revisarse a la luz de la experiencia.",
        "Al mirar hacia 2027, elige algunos principios que tengan sentido en la práctica. Compara tus opciones con ellos y con las condiciones reales: tiempo disponible, consecuencias y compromisos. Puedes reconocer una primera impresión y verificar los hechos antes de actuar. Revisar la dirección con nueva información forma parte de elegir con autonomía."
      ],
      "question": "¿Qué criterios te gustaría ver reflejados en las elecciones que haces?",
      "exercise": "Escribe dos valores importantes para ti. Elige una decisión cotidiana y observa cómo se relaciona cada alternativa con esos valores. Anota un hecho que todavía necesitas verificar antes de elegir.",
      "perception": "La imagen no conoce el futuro y tu elección no revela una verdad oculta. La atracción puede involucrar memoria, percepción, emoción, expectativas y experiencias personales. Observa qué significa la dirección para ti y compara tus impresiones con los hechos disponibles. El significado se construye a través de tu propia reflexión. El mensaje puede acompañar preguntas sobre tus elecciones, pero no sustituye la orientación profesional.",
      "sentence": "Mis valores pueden orientar elecciones conscientes."
    }
  },
  {
    "id": "10",
    "image": "imagens/10-a-concha.png",
    "pt": {
      "title": "A Concha",
      "keywords": "escuta · silêncio · proteção · memória · interioridade",
      "message": [
        "A concha oferece uma imagem de abrigo e atenção ao que é mais discreto. Ela convida você a criar um intervalo entre os estímulos que chegam e a resposta que escolhe oferecer.",
        "Nesse espaço, talvez perceba um desejo pouco ouvido, uma lembrança ou a necessidade de descansar. Memórias podem ganhar novos sentidos quando observadas no presente, sem que seja preciso explicar tudo ou compartilhar o que prefere preservar.",
        "Ao pensar em 2027, considere como deseja equilibrar convivência e privacidade. Quais conversas merecem abertura? Onde um pouco de silêncio ajudaria a organizar sua experiência? Recolher-se por um momento pode ser uma forma de cuidado. Você pode pedir tempo, escolher o que deseja contar e voltar ao encontro quando se sentir disponível."
      ],
      "question": "O que você percebe em si quando encontra um pouco de silêncio?",
      "exercise": "Reserve dois minutos em um lugar confortável, com menos estímulos. Observe o que chama sua atenção, sem tentar provocar lembranças ou sensações. Depois, escreva uma frase sobre algo de que precisa hoje.",
      "perception": "A imagem não conhece o futuro, e sua escolha não revela uma verdade oculta. A atração pode envolver memória, percepção, emoção, expectativa e experiências pessoais. Observe o que a concha evoca, sem procurar lembranças escondidas ou supor mensagens secretas. O significado é construído pela sua reflexão. A mensagem oferece espaço para observar sua experiência e não substitui orientação profissional.",
      "sentence": "Posso me dar tempo para escutar."
    },
    "en": {
      "title": "The Seashell",
      "keywords": "listening · silence · protection · memory · inner life",
      "message": [
        "The seashell offers an image of shelter and quiet attention to what might otherwise go unnoticed. It invites you to create a pause between what reaches you and the response you choose to offer.",
        "In that space, you may notice a wish you have given little attention to, a memory, or a need for rest. Memories can take on new meaning when considered in the present, without requiring you to explain everything or share what you prefer to keep private.",
        "As you think about 2027, consider how you want to balance time with others and privacy. Which conversations invite openness? Where might a little silence help you make sense of your experience? Taking a moment to yourself can be a form of care. You can ask for time, choose what to share, and reconnect when you feel ready."
      ],
      "question": "What do you notice within yourself when you find a little silence?",
      "exercise": "Set aside two minutes in a comfortable place with fewer distractions. Notice what catches your attention without trying to bring up memories or sensations. Then write one sentence about something you need today.",
      "perception": "The image does not know the future, and your choice does not reveal a hidden truth. Its appeal may involve memory, perception, emotion, expectations, and personal experiences. Notice what the seashell evokes without searching for hidden memories or assuming there are secret messages. Meaning takes shape through your own reflection. This message offers space to observe your experience and does not replace professional guidance.",
      "sentence": "I can give myself time to listen."
    },
    "es": {
      "title": "La Concha",
      "keywords": "escucha · silencio · protección · memoria · interioridad",
      "message": [
        "La concha ofrece una imagen de refugio y atención a lo más sutil. Te invita a crear una pausa entre los estímulos que llegan y la respuesta que eliges dar.",
        "En ese espacio, tal vez percibas un deseo poco escuchado, un recuerdo o la necesidad de descansar. Los recuerdos pueden adquirir nuevos sentidos al observarlos desde el presente, sin que necesites explicarlo todo o compartir lo que prefieres resguardar.",
        "Al pensar en 2027, considera cómo deseas equilibrar la convivencia y la privacidad. ¿Qué conversaciones merecen apertura? ¿Dónde podría un poco de silencio ayudarte a ordenar tu experiencia? Tomarte un momento a solas puede ser una forma de cuidado. Puedes pedir tiempo, elegir qué deseas contar y volver a compartir con otras personas cuando sientas que es el momento."
      ],
      "question": "¿Qué percibes en ti cuando encuentras un poco de silencio?",
      "exercise": "Reserva dos minutos en un lugar cómodo, con menos estímulos. Observa qué llama tu atención, sin intentar provocar recuerdos o sensaciones. Después, escribe una frase sobre algo que necesitas hoy.",
      "perception": "La imagen no conoce el futuro y tu elección no revela una verdad oculta. La atracción puede involucrar memoria, percepción, emoción, expectativas y experiencias personales. Observa qué evoca la concha, sin buscar recuerdos escondidos ni suponer mensajes secretos. El significado se construye a través de tu propia reflexión. El mensaje ofrece espacio para observar tu experiencia y no sustituye la orientación profesional.",
      "sentence": "Puedo darme tiempo para escuchar."
    }
  },
  {
    "id": "11",
    "image": "imagens/11-o-farol.png",
    "pt": {
      "title": "O Farol",
      "keywords": "clareza · orientação · presença · esperança",
      "message": [
        "Um farol ilumina parte do caminho sem eliminar a noite ou conduzir a embarcação. Esta imagem convida você a reconhecer referências que ajudam quando há dúvidas: pessoas confiáveis, informações verificáveis e experiências que merecem ser lembradas.",
        "Buscar orientação pode ampliar a clareza, especialmente quando há espaço para perguntas e discordâncias. Nenhuma referência precisa responder por toda a viagem. Vale reconhecer o alcance e os limites do apoio que você recebe.",
        "Para 2027, observe quais presenças ajudam a sustentar uma esperança possível, ligada ao que pode ser cuidado no presente. Se você costuma orientar outras pessoas, considere também suas necessidades. Há valor em iluminar apenas o trecho atual. A incerteza pode permanecer enquanto você reúne condições para escolher o próximo movimento."
      ],
      "question": "O que torna uma referência confiável para você em momentos de incerteza?",
      "exercise": "Escreva uma dúvida atual e formule uma pergunta específica sobre ela. Identifique uma pessoa ou fonte adequada para buscar esclarecimento. Anote também o que essa referência talvez não consiga responder.",
      "perception": "A imagem não conhece o futuro, e sua escolha não revela uma verdade oculta. A atração pode envolver memória, percepção, emoção, expectativa e experiências pessoais. Observe se o farol lembra apoio, esperança ou responsabilidade, sem entendê-lo como promessa de segurança. O significado é construído pela sua reflexão. A mensagem pode ajudar a reconhecer perguntas, mas não substitui orientação profissional.",
      "sentence": "Posso buscar clareza para o trecho de agora."
    },
    "en": {
      "title": "The Lighthouse",
      "keywords": "clarity · guidance · presence · hope",
      "message": [
        "A lighthouse lights part of the way without dispelling the night or steering the boat. This image invites you to recognize sources of guidance that help when doubts arise: trustworthy people, verifiable information, and experiences worth remembering.",
        "Seeking guidance can bring greater clarity, especially when there is room for questions and disagreement. No source of guidance needs to have answers for the entire journey. It helps to recognize both the reach and the limits of the support you receive.",
        "For 2027, notice whose presence helps sustain a grounded sense of hope, connected to what you can care for in the present. If you often guide others, consider your own needs as well. There is value in lighting just the current stretch. Uncertainty may remain as you gather what you need to choose your next move."
      ],
      "question": "What makes a source of guidance trustworthy to you in uncertain moments?",
      "exercise": "Write down something you are currently unsure about and formulate a specific question. Identify an appropriate person or source to consult for clarification. Also note what that source may not be able to answer.",
      "perception": "The image does not know the future, and your choice does not reveal a hidden truth. Its appeal may involve memory, perception, emotion, expectations, and personal experiences. Notice whether the lighthouse brings to mind support, hope, or responsibility without taking it as a promise of safety. Meaning takes shape through your own reflection. This message can help you identify questions but does not replace professional guidance.",
      "sentence": "I can seek clarity for this part of the journey."
    },
    "es": {
      "title": "El Faro",
      "keywords": "claridad · orientación · presencia · esperanza",
      "message": [
        "Un faro ilumina parte del camino sin disipar la noche ni dirigir la embarcación. Esta imagen te invita a reconocer referencias que ayudan cuando surgen dudas: personas confiables, información verificable y experiencias que vale la pena recordar.",
        "Buscar orientación puede aportar más claridad, especialmente cuando hay espacio para preguntas y desacuerdos. Ninguna fuente de orientación tiene que ofrecer respuestas para todo el viaje. Vale la pena reconocer el alcance y los límites del apoyo que recibes.",
        "Para 2027, observa qué presencias te ayudan a sostener una esperanza posible, vinculada con lo que puedes cuidar en el presente. Si sueles orientar a otras personas, considera también tus propias necesidades. Hay valor en iluminar solo el tramo actual. La incertidumbre puede permanecer mientras reúnes lo que necesitas para elegir tu próximo paso."
      ],
      "question": "¿Qué hace que una referencia sea confiable para ti en momentos de incertidumbre?",
      "exercise": "Escribe una duda actual y formula una pregunta específica sobre ella. Identifica una persona o fuente adecuada para buscar una aclaración. Anota también qué podría quedar fuera del alcance de esa referencia.",
      "perception": "La imagen no conoce el futuro y tu elección no revela una verdad oculta. La atracción puede involucrar memoria, percepción, emoción, expectativas y experiencias personales. Observa si el faro te recuerda apoyo, esperanza o responsabilidad, sin entenderlo como una promesa de seguridad. El significado se construye a través de tu propia reflexión. El mensaje puede ayudarte a identificar preguntas, pero no sustituye la orientación profesional.",
      "sentence": "Puedo buscar claridad para el tramo de ahora."
    }
  },
  {
    "id": "12",
    "image": "imagens/12-a-arvore.png",
    "pt": {
      "title": "A Árvore",
      "keywords": "raízes · estabilidade · tempo · crescimento · integração",
      "message": [
        "Uma árvore reúne raízes que sustentam, um tronco marcado pelo tempo e ramos que procuram espaço. Esta imagem convida você a reconhecer o que deseja conservar da sua história e o que precisa ser atualizado.",
        "Há aprendizados, vínculos e costumes que oferecem apoio. Outros podem pedir distância ou uma nova forma de convivência. Integrar a própria trajetória pode incluir gratidão, perguntas e escolhas diferentes das que foram possíveis antes.",
        "Ao pensar em 2027, observe quais bases ajudam você a experimentar mudanças sem perder de vista suas necessidades. Descanso, companhia e condições materiais também fazem parte dessa sustentação. Você pode escolher um ramo para desenvolver e acompanhar o conjunto. O crescimento acontece ao longo do tempo, com ritmos que nem sempre correspondem às expectativas."
      ],
      "question": "Como você deseja levar sua história para as mudanças que considera hoje?",
      "exercise": "Escreva três apoios reais da sua vida e uma mudança desejada. Escolha um desses apoios e descreva como ele pode ajudar no primeiro passo. Defina uma ação pequena que respeite suas condições atuais.",
      "perception": "A imagem não conhece o futuro, e sua escolha não revela uma verdade oculta. A atração pode envolver memória, percepção, emoção, expectativa e experiências pessoais. Observe suas associações com raízes, tronco e ramos, sem presumir que tenham um significado universal. O significado é construído pela sua reflexão. Esta mensagem pode acompanhar essa observação, mas não substitui orientação profissional.",
      "sentence": "Minhas raízes podem acompanhar minhas mudanças."
    },
    "en": {
      "title": "The Tree",
      "keywords": "roots · stability · time · growth · integration",
      "message": [
        "A tree brings together supporting roots, a trunk marked by time, and branches reaching for space. This image invites you to recognize what you want to preserve from your history and what needs updating.",
        "Some lessons, connections, and customs offer support. Others may call for distance or a different way of relating. Integrating your own journey can include gratitude, questions, and choices that differ from what was possible before.",
        "As you think about 2027, notice which foundations help you explore change while keeping your needs in view. Rest, company, and material conditions are also part of that support. You can choose one branch to develop while remaining attentive to the whole. Growth unfolds over time, at a pace that does not always match expectations."
      ],
      "question": "How would you like to carry your history into the changes you are considering today?",
      "exercise": "Write down three real sources of support in your life and one change you want to make. Choose one of those supports and describe how it could help with the first step. Define a small action that respects your current circumstances.",
      "perception": "The image does not know the future, and your choice does not reveal a hidden truth. Its appeal may involve memory, perception, emotion, expectations, and personal experiences. Notice your associations with roots, trunk, and branches without assuming they have a universal meaning. Meaning takes shape through your own reflection. This message can accompany that observation but does not replace professional guidance.",
      "sentence": "My roots can remain with me as I change."
    },
    "es": {
      "title": "El Árbol",
      "keywords": "raíces · estabilidad · tiempo · crecimiento · integración",
      "message": [
        "Un árbol reúne raíces que sostienen, un tronco marcado por el tiempo y ramas que buscan espacio. Esta imagen te invita a reconocer qué deseas conservar de tu historia y qué necesita actualizarse.",
        "Hay aprendizajes, vínculos y costumbres que ofrecen apoyo. Otros pueden requerir distancia o una nueva forma de convivencia. Integrar tu propia trayectoria puede incluir gratitud, preguntas y elecciones diferentes de las que fueron posibles antes.",
        "Al pensar en 2027, observa qué bases te ayudan a experimentar cambios sin perder de vista tus necesidades. El descanso, la compañía y las condiciones materiales también forman parte de ese sostén. Puedes elegir una rama para desarrollar sin dejar de atender al conjunto. El crecimiento ocurre a lo largo del tiempo, con ritmos que no siempre corresponden a las expectativas."
      ],
      "question": "¿Cómo te gustaría integrar tu historia en los cambios que hoy estás considerando?",
      "exercise": "Escribe tres apoyos reales de tu vida y un cambio que deseas hacer. Elige uno de esos apoyos y describe cómo podría ayudarte con el primer paso. Define una pequeña acción que respete tus condiciones actuales.",
      "perception": "La imagen no conoce el futuro y tu elección no revela una verdad oculta. La atracción puede involucrar memoria, percepción, emoción, expectativas y experiencias personales. Observa tus asociaciones con las raíces, el tronco y las ramas, sin suponer que tienen un significado universal. El significado se construye a través de tu propia reflexión. Este mensaje puede acompañar esa observación, pero no sustituye la orientación profesional.",
      "sentence": "Mis raíces pueden acompañar mis cambios."
    }
  }
];

// Descrições visuais acessíveis: sem nomes oficiais, números ou interpretações simbólicas.
const DESCRICOES = {
  "pt": [
    "Paisagem com arco de pedra sobre a água, entre céu azul-escuro e luz dourada, em moldura ornamental.",
    "Broto iluminado entre raízes e terra, com luz dourada vinda do alto e moldura ornamental.",
    "Abertura em arco com cortinas e vista para água e montanhas, em moldura dourada ornamental.",
    "Pico rochoso iluminado, nuvens e caminho sinuoso em primeiro plano, em moldura dourada ornamental.",
    "Água sinuosa entre pedras, pequenas quedas e montanhas ao fundo, em moldura dourada ornamental.",
    "Objeto metálico dourado e vertical diante de portas em arco, com uma abertura luminosa e moldura ornamental.",
    "Chamas alaranjadas no centro de um círculo de pedras, sob céu noturno e moldura dourada ornamental.",
    "Flores, degraus e um espelho d’água com flores flutuantes, em moldura dourada ornamental.",
    "Instrumento circular dourado com pontas alongadas, suspenso sobre uma paisagem, em moldura ornamental.",
    "Forma espiralada clara com pérolas junto à água, sob luz celeste e moldura dourada ornamental.",
    "Torre sobre rochas no mar, com feixes de luz atravessando o céu noturno e moldura dourada ornamental.",
    "Tronco entrelaçado, copa ampla e raízes visíveis sob luz dourada, em moldura ornamental."
  ],
  "en": [
    "A landscape with a stone arch over water, between a dark blue sky and golden light, in an ornamental frame.",
    "A lit sprout among roots and soil, with golden light from above and an ornamental frame.",
    "An arched opening with curtains overlooking water and mountains, in an ornamental gold frame.",
    "A lit rocky peak, clouds, and a winding foreground path, in an ornamental gold frame.",
    "Winding water among rocks and small waterfalls, with mountains beyond, in an ornamental gold frame.",
    "A vertical gold metal object before arched doors, with a glowing opening and an ornamental frame.",
    "Orange flames within a ring of stones, beneath a night sky and an ornamental gold frame.",
    "Flowers, steps, and a pond with floating blossoms, in an ornamental gold frame.",
    "A round gold instrument with elongated points, suspended above a landscape, in an ornamental frame.",
    "A pale spiral form and pearls beside water, beneath celestial light and an ornamental gold frame.",
    "A tower on rocks in the sea, with beams of light crossing the night sky and an ornamental gold frame.",
    "An intertwined trunk, broad canopy, and visible roots in golden light, in an ornamental frame."
  ],
  "es": [
    "Paisaje con un arco de piedra sobre el agua, entre cielo azul oscuro y luz dorada, en un marco ornamental.",
    "Brote iluminado entre raíces y tierra, con luz dorada desde arriba y un marco ornamental.",
    "Abertura en arco con cortinas y vista al agua y las montañas, en un marco dorado ornamental.",
    "Pico rocoso iluminado, nubes y un sendero sinuoso en primer plano, en un marco dorado ornamental.",
    "Agua que serpentea entre piedras y pequeñas cascadas, con montañas al fondo, en un marco dorado ornamental.",
    "Objeto metálico dorado y vertical frente a puertas en arco, con una abertura luminosa y un marco ornamental.",
    "Llamas anaranjadas dentro de un círculo de piedras, bajo un cielo nocturno y un marco dorado ornamental.",
    "Flores, escalones y un estanque con flores flotantes, en un marco dorado ornamental.",
    "Instrumento circular dorado con puntas alargadas, suspendido sobre un paisaje, en un marco ornamental.",
    "Forma clara en espiral con perlas junto al agua, bajo luz celeste y un marco dorado ornamental.",
    "Torre sobre rocas en el mar, con haces de luz que cruzan el cielo nocturno y un marco dorado ornamental.",
    "Tronco entrelazado, copa amplia y raíces visibles bajo luz dorada, en un marco ornamental."
  ]
};

// INTERFACE: toda nova chave precisa existir nos três idiomas.
const INTERFACE = {
  pt: {
    htmlLang:'pt-BR',pageTitle:'Conexão 2027 — Cartografia intuitiva',
    description:'Conexão 2027 — escolha uma imagem e encontre um convite à reflexão, sem previsões.',
    skip:'Pular para o conteúdo',language:'Idioma',steps:'Etapas',stepHome:'O convite',stepGuide:'A pausa',stepGallery:'A escolha',stepReading:'A reflexão',
    eyebrow:'Uma experiência de cartografia intuitiva',heroLine:'Uma imagem. Um encontro com você.',intro:'Entre cores, formas e símbolos, um convite para observar o presente e pensar no novo ciclo. Escolha uma imagem e abra espaço para a sua própria reflexão.',start:'Começar experiência',homeNote:'Sem previsões. Sem respostas prontas. No seu tempo.',
    guideEyebrow:'Antes de escolher',guideTitle:'Dê um instante ao seu olhar.',guideIntro:'Não é preciso explicar sua preferência. Observe as imagens com curiosidade e permita-se uma pausa.',
    guideOneTitle:'Não existe escolha certa ou errada.',guideOne:'Você pode se aproximar da imagem que fizer sentido para você neste momento.',guideTwoTitle:'Deixe a atenção encontrar uma imagem.',guideTwo:'Observe o conjunto e escolha a imagem que mais desperta sua atenção, sem precisar justificar.',guideThreeTitle:'Esta experiência não prevê o futuro.',guideThree:'As imagens não revelam verdades ocultas nem prometem acontecimentos.',guideFourTitle:'A mensagem é um convite à reflexão.',guideFour:'O significado nasce do seu olhar e da sua história. A experiência não substitui orientação profissional.',viewCards:'Ver as 12 imagens',
    galleryEyebrow:'Um instante de atenção',galleryTitle:'Qual imagem encontra seu olhar?',galleryIntro:'Observe sem pressa. Toque ou clique em uma imagem para abrir sua mensagem.',noAnimation:'Abrir a mensagem sem animação',restart:'Recomeçar',galleryNote:'Sua escolha é um ponto de partida, não uma resposta definitiva.',galleryLabel:'Imagens para escolher',chooseLabel:'Escolher esta imagem',neutralAlt:'Ilustração ornamental com moldura dourada e tons escuros.',
    readingEyebrow:'Sua imagem, sua reflexão',readingIntro:'Leia no seu tempo. A mensagem é um ponto de reflexão; o significado é construído por você.',print:'Imprimir ou salvar minha mensagem',chooseAgain:'Escolher outra carta',scrollHint:'Role dentro da mensagem para ler todas as seções ↓',readingEnd:'Leve uma pergunta com você. Não é preciso encontrar todas as respostas agora.',
    footer:'Um espaço de reflexão. Sem previsões, sem coleta de dados pessoais.',keywords:'Palavras-chave',main:'Mensagem principal',question:'Pergunta reflexiva',exercise:'Exercício prático',perception:'Percepção e escolha intuitiva',sentence:'Frase para guardar',card:'Carta',opened:'Mensagem aberta',changed:'Idioma atualizado',imageError:'Não foi possível carregar uma imagem. Confira a pasta imagens.'
  },
  en: {
    htmlLang:'en-US',pageTitle:'Conexão 2027 — Intuitive mapping',description:'Conexão 2027 — choose an image and find an invitation to reflect, without predictions.',
    skip:'Skip to content',language:'Language',steps:'Steps',stepHome:'The invitation',stepGuide:'The pause',stepGallery:'The choice',stepReading:'The reflection',
    eyebrow:'An intuitive mapping experience',heroLine:'An image. A moment with yourself.',intro:'Through colors, shapes, and symbols, an invitation to notice the present and reflect on a new chapter. Choose an image and make room for your own reflection.',start:'Begin the experience',homeNote:'No predictions. No ready-made answers. At your own pace.',
    guideEyebrow:'Before you choose',guideTitle:'Give your eyes a moment.',guideIntro:'You do not need to explain your preference. Explore the images with curiosity and allow yourself a pause.',
    guideOneTitle:'There is no right or wrong choice.',guideOne:'You can choose the image that feels meaningful to you right now.',guideTwoTitle:'Notice which image draws your attention.',guideTwo:'Take in the collection and choose the image that catches your attention most. No explanation is needed.',guideThreeTitle:'This experience does not predict the future.',guideThree:'The images do not reveal hidden truths or promise future events.',guideFourTitle:'The message is an invitation to reflect.',guideFour:'Meaning grows from your perspective and your history. This experience does not replace professional guidance.',viewCards:'View the 12 images',
    galleryEyebrow:'A moment of attention',galleryTitle:'Which image catches your eye?',galleryIntro:'Take your time. Tap or click an image to open its message.',noAnimation:'Open the message without animation',restart:'Start over',galleryNote:'Your choice is a starting point, not a definitive answer.',galleryLabel:'Images to choose from',chooseLabel:'Choose this image',neutralAlt:'An ornamental illustration with a gold frame and dark tones.',
    readingEyebrow:'Your image, your reflection',readingIntro:'Read at your own pace. The message is a starting point for reflection; you create its meaning.',print:'Print or save my message',chooseAgain:'Choose another card',scrollHint:'Scroll within the message to read every section ↓',readingEnd:'Take a question with you. You do not need to find every answer now.',
    footer:'A space for reflection. No predictions or personal data collection.',keywords:'Keywords',main:'Main message',question:'Reflection question',exercise:'Practical exercise',perception:'Perception and intuitive choice',sentence:'A sentence to keep',card:'Card',opened:'Message opened',changed:'Language updated',imageError:'An image could not be loaded. Check the imagens folder.'
  },
  es: {
    htmlLang:'es-419',pageTitle:'Conexão 2027 — Cartografía intuitiva',description:'Conexão 2027 — elige una imagen y encuentra una invitación a reflexionar, sin predicciones.',
    skip:'Saltar al contenido',language:'Idioma',steps:'Etapas',stepHome:'La invitación',stepGuide:'La pausa',stepGallery:'La elección',stepReading:'La reflexión',
    eyebrow:'Una experiencia de cartografía intuitiva',heroLine:'Una imagen. Un encuentro contigo.',intro:'Entre colores, formas y símbolos, una invitación a observar el presente y pensar en un nuevo ciclo. Elige una imagen y abre espacio para tu propia reflexión.',start:'Comenzar la experiencia',homeNote:'Sin predicciones. Sin respuestas prefabricadas. A tu ritmo.',
    guideEyebrow:'Antes de elegir',guideTitle:'Dale un instante a tu mirada.',guideIntro:'No necesitas explicar tu preferencia. Observa las imágenes con curiosidad y permítete una pausa.',
    guideOneTitle:'No hay una elección correcta o incorrecta.',guideOne:'Puedes acercarte a la imagen que tenga sentido para ti en este momento.',guideTwoTitle:'Deja que tu atención encuentre una imagen.',guideTwo:'Observa el conjunto y elige la imagen que más llame tu atención, sin necesidad de justificarlo.',guideThreeTitle:'Esta experiencia no predice el futuro.',guideThree:'Las imágenes no revelan verdades ocultas ni prometen acontecimientos.',guideFourTitle:'El mensaje es una invitación a reflexionar.',guideFour:'El significado nace de tu mirada y de tu historia. La experiencia no sustituye la orientación profesional.',viewCards:'Ver las 12 imágenes',
    galleryEyebrow:'Un instante de atención',galleryTitle:'¿Qué imagen llama tu atención?',galleryIntro:'Observa sin prisa. Toca o haz clic en una imagen para abrir su mensaje.',noAnimation:'Abrir el mensaje sin animación',restart:'Volver a empezar',galleryNote:'Tu elección es un punto de partida, no una respuesta definitiva.',galleryLabel:'Imágenes para elegir',chooseLabel:'Elegir esta imagen',neutralAlt:'Ilustración ornamental con marco dorado y tonos oscuros.',
    readingEyebrow:'Tu imagen, tu reflexión',readingIntro:'Lee a tu ritmo. El mensaje es un punto de reflexión; tú construyes el significado.',print:'Imprimir o guardar mi mensaje',chooseAgain:'Elegir otra carta',scrollHint:'Desplázate dentro del mensaje para leer todas las secciones ↓',readingEnd:'Llévate una pregunta. No necesitas encontrar todas las respuestas ahora.',
    footer:'Un espacio de reflexión. Sin predicciones ni recopilación de datos personales.',keywords:'Palabras clave',main:'Mensaje principal',question:'Pregunta de reflexión',exercise:'Ejercicio práctico',perception:'Percepción y elección intuitiva',sentence:'Frase para guardar',card:'Carta',opened:'Mensaje abierto',changed:'Idioma actualizado',imageError:'No se pudo cargar una imagen. Revisa la carpeta imagens.'
  }
};

// ESTADO VOLÁTIL: nenhuma informação é enviada ou gravada no dispositivo.
let idioma = 'pt';
let etapa = 'home';
let escolhida = null;
let temporizador = null;
let ultimaEscolha = null;
const movimentoReduzido = window.matchMedia('(prefers-reduced-motion: reduce)');
const $ = id => document.getElementById(id);
const criar = (tag, classe, texto) => {
  const elemento = document.createElement(tag);
  if (classe) elemento.className = classe;
  if (texto !== undefined) elemento.textContent = texto;
  return elemento;
};
const avisar = texto => { $('status').textContent = texto; };

function atualizarInterface() {
  const ui = INTERFACE[idioma];
  document.documentElement.lang = ui.htmlLang;
  document.title = ui.pageTitle;
  document.querySelector('meta[name="description"]').content = ui.description;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = ui[el.dataset.i18n]; });
  $('idioma').setAttribute('aria-label', ui.language);
  $('journey').setAttribute('aria-label', ui.steps);
  $('cards').setAttribute('aria-label', ui.galleryLabel);
  document.querySelectorAll('.card-choice').forEach(btn => {
    btn.setAttribute('aria-label', ui.chooseLabel);
    btn.querySelector('img').alt = DESCRICOES[idioma][Number(btn.dataset.cardId) - 1];
  });
  if (escolhida !== null) {
    const fracao = $('message').scrollTop / Math.max(1, $('message').scrollHeight - $('message').clientHeight);
    renderizarMensagem();
    $('message').scrollTop = fracao * Math.max(0, $('message').scrollHeight - $('message').clientHeight);
  }
}

function criarGrade() {
  const lista = $('cards');
  CARTAS.forEach((carta, i) => {
    const li = criar('li');
    const botao = criar('button', 'card-choice');
    botao.type = 'button';
    botao.dataset.cardId = carta.id;
    botao.setAttribute('aria-label', INTERFACE[idioma].chooseLabel);
    botao.setAttribute('aria-pressed', 'false');
    const imagem = criar('img');
    imagem.src = carta.image;
    imagem.alt = DESCRICOES[idioma][i];
    imagem.width = 1024;
    imagem.height = 1536;
    imagem.loading = 'lazy';
    imagem.decoding = 'async';
    imagem.addEventListener('error', () => {
      botao.disabled = true;
      avisar(INTERFACE[idioma].imageError);
    });
    botao.append(imagem);
    botao.addEventListener('click', () => abrirCarta(i));
    li.append(botao);
    lista.append(li);
  });
}

function mostrarEtapa(novaEtapa, focar = true) {
  etapa = novaEtapa;
  ['home', 'guide', 'gallery', 'reading'].forEach(id => { $(id).hidden = id !== etapa; });
  document.querySelectorAll('[data-step]').forEach(el => {
    if (el.dataset.step === etapa) el.setAttribute('aria-current', 'step');
    else el.removeAttribute('aria-current');
  });
  if (focar) {
    const alvo = etapa === 'reading' ? $('reading-heading') : $(etapa + '-title');
    alvo.setAttribute('tabindex', '-1');
    alvo.focus({preventScroll:true});
  }
  window.scrollTo({top:0,behavior:'instant'});
}

function renderizarMensagem() {
  const carta = CARTAS[escolhida];
  const texto = carta[idioma];
  const ui = INTERFACE[idioma];
  const artigo = $('message');
  artigo.replaceChildren();
  artigo.lang = ui.htmlLang;
  artigo.append(criar('p','card-kicker', 'Conexão 2027 · ' + ui.card + ' ' + carta.id));
  const titulo = criar('h2','card-title',texto.title);
  titulo.id = 'card-title';
  titulo.tabIndex = -1;
  artigo.append(titulo);
  const palavras = criar('p','card-keywords');
  palavras.append(criar('strong','',ui.keywords + ': '), document.createTextNode(texto.keywords));
  artigo.append(palavras);
  const secoes = [
    ['main','main-section',texto.message],
    ['question','question-section',[texto.question]],
    ['exercise','exercise-section',[texto.exercise]],
    ['perception','perception-section',[texto.perception]],
    ['sentence','sentence-section',[texto.sentence]]
  ];
  secoes.forEach(([chave,classe,paragrafos]) => {
    const secao = criar('section','message-section ' + classe);
    const subtitulo = criar('h3','',ui[chave]);
    subtitulo.id = 'section-' + chave;
    secao.setAttribute('aria-labelledby', subtitulo.id);
    secao.append(subtitulo);
    paragrafos.forEach(p => secao.append(criar('p','',p)));
    artigo.append(secao);
  });
  $('chosen-image').src = carta.image;
  $('chosen-image').alt = texto.title + ' — ' + DESCRICOES[idioma][escolhida];
  $('chosen-caption').textContent = carta.id + ' — ' + texto.title;
  $('flip-image').src = carta.image;
}

function concluirVirada(focar = true) {
  clearTimeout(temporizador);
  temporizador = null;
  $('flip-inner').classList.add('is-flipped');
  $('flip-back').inert = false;
  $('flip-back').removeAttribute('aria-hidden');
  if (focar && etapa === 'reading') {
    $('message').scrollTop = 0;
    $('card-title').focus({preventScroll:true});
    avisar(INTERFACE[idioma].opened + ': ' + CARTAS[escolhida][idioma].title);
  }
}

function abrirCarta(indice) {
  clearTimeout(temporizador);
  escolhida = indice;
  ultimaEscolha = indice;
  document.querySelectorAll('.card-choice').forEach((el,i) => el.setAttribute('aria-pressed', String(i === indice)));
  const semMovimento = $('sem-animacao').checked || movimentoReduzido.matches;
  document.body.classList.toggle('no-motion', semMovimento);
  $('flip-inner').classList.remove('is-flipped');
  $('flip-back').inert = true;
  $('flip-back').setAttribute('aria-hidden','true');
  renderizarMensagem();
  $('message').scrollTop = 0;
  mostrarEtapa('reading');
  if (semMovimento) {
    concluirVirada();
  } else {
    // Força o quadro inicial antes da rotação. A face de leitura entra após 0,7 s.
    void $('flip-stage').offsetWidth;
    requestAnimationFrame(() => {
      if (etapa !== 'reading') return;
      $('flip-inner').classList.add('is-flipped');
      temporizador = setTimeout(() => concluirVirada(), 720);
    });
  }
}

function escolherOutra() {
  clearTimeout(temporizador);
  mostrarEtapa('gallery');
  const anterior = document.querySelectorAll('.card-choice')[ultimaEscolha];
  if (anterior) anterior.focus();
}

function recomecar() {
  clearTimeout(temporizador);
  escolhida = null;
  ultimaEscolha = null;
  $('message').replaceChildren();
  $('flip-inner').classList.remove('is-flipped');
  $('flip-back').inert = true;
  $('flip-back').setAttribute('aria-hidden','true');
  document.querySelectorAll('.card-choice').forEach(el => el.setAttribute('aria-pressed','false'));
  avisar('');
  // Recomeçar limpa a escolha e preserva idioma e preferência de acessibilidade.
  mostrarEtapa('home');
}

$('start').addEventListener('click', () => mostrarEtapa('guide'));
$('to-gallery').addEventListener('click', () => mostrarEtapa('gallery'));
$('choose-again').addEventListener('click', escolherOutra);
document.querySelectorAll('.restart').forEach(btn => btn.addEventListener('click', recomecar));
$('idioma').addEventListener('change', event => {
  idioma = event.target.value;
  atualizarInterface();
  avisar(INTERFACE[idioma].changed);
});
$('sem-animacao').checked = movimentoReduzido.matches;
$('sem-animacao').addEventListener('change', () => {
  document.body.classList.toggle('no-motion', $('sem-animacao').checked || movimentoReduzido.matches);
});
movimentoReduzido.addEventListener('change', () => {
  const reduzir = movimentoReduzido.matches || $('sem-animacao').checked;
  document.body.classList.toggle('no-motion', reduzir);
  if (reduzir && etapa === 'reading') concluirVirada(false);
});
$('print').addEventListener('click', () => {
  if (escolhida === null) return;
  concluirVirada(false);
  window.print();
});
window.addEventListener('beforeprint', () => {
  if (escolhida !== null && etapa === 'reading') concluirVirada(false);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && etapa === 'reading') escolherOutra();
});
criarGrade();
atualizarInterface();
