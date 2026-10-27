# Auditoria técnica do Conexão 2027

Data: 26 de outubro de 2026.

## Resultado

Projeto estático concluído e validado nos testes descritos abaixo. Foram corrigidas as falhas encontradas na implementação e na prévia. Não houve publicação, criação de conta, cadastro de domínio ou geração de URL pública.

A entrega contém 17 arquivos: HTML, CSS, JavaScript, README, este relatório e 12 imagens originais. A pasta está incluída integralmente em `conexao-2027.zip`.

## Escopo e fontes

- Imagens oficiais anexadas ao Projeto Conexão 2027, na associação aprovada de 01 a 12.
- Textos brasileiros revisados e aprovados na conversa.
- Traduções aprovadas e substituições da revisão editorial posterior, incluindo a mensagem completa final de O Farol.
- Documento de referência `conexao 2027.docx`, já examinado no projeto: Cartografia Intuitiva como reflexão, sem previsão.
- Somente HTML, CSS, JavaScript puro, imagens locais e recursos nativos do navegador.

Não houve mudança editorial nos textos aprovados. A apresentação mantém três parágrafos em cada mensagem principal e todos os campos do verso.

## Ambiente e métodos

1. Verificação de arquivos, caminhos e sintaxe do JavaScript.
2. Comparação SHA-256 dos 12 PNGs entregues com os anexos originais.
3. Prévia HTTP privada de teste e interação real no Chrome: cliques, seleção de idioma, botões e teclado.
4. Abertura das 12 cartas com animação normal, seguida de conferência dos três idiomas em cada uma: 36 combinações.
5. Comparação de uma impressão digital dos sete campos renderizados no DOM com os dados de conteúdo incorporados. Todas as 36 combinações coincidiram integralmente.
6. Bancada local de QA com o site dentro de um iframe em quatro larguras reais de layout: 320, 430, 768 e 1280 pixels. O navegador desktop reserva aproximadamente 15 pixels para a barra vertical; a área útil medida foi 305, 415, 753 e 1265 pixels.
7. Testes adicionais de impressão, movimento reduzido, toque simulado, estrutura de acessibilidade e contraste.

A bancada e suas instrumentações não fazem parte da entrega nem introduzem dependências no site.

## Validação funcional

| Item | Evidência e resultado |
| --- | --- |
| `index.html` abre | Apresentação, orientação, grade e leitura abriram na prévia HTTP |
| CSS conectado | `estilo.css` apareceu entre as folhas carregadas e produziu a interface esperada |
| JavaScript conectado | Fluxo de etapas, geração da grade e conteúdo completo funcionaram; sintaxe aprovada em `node --check` |
| 12 imagens carregam | Todas completaram o carregamento com largura natural de 1024 pixels |
| Associação oficial | IDs, nomes, arquivos e conteúdo conferidos nos 12 registros |
| Frentes sem identificação indutora | Botões da grade exibem apenas os PNGs; nenhum título, número, palavra-chave ou significado é exibido |
| Virada de cada carta | 12 aberturas com rotação horizontal concluídas; duração CSS de 0,7 segundo |
| Verso correspondente | Nome, palavras-chave e cinco seções corretos nas 36 combinações |
| Três idiomas | `pt-BR`, `en-US` e `es-419` atualizam conteúdo, títulos, interface, avisos e alternativas de imagem |
| Idioma antes da escolha | Testado na apresentação, orientação e grade |
| Idioma após a escolha | Testado em todas as cartas, preservando o ID selecionado e sem navegação/reload |
| Clique | Ativação pelos botões da interface e pelas 12 cartas |
| Escolher outra carta | Retorno à grade, marcação anterior preservada e foco devolvido à carta anterior |
| Recomeçar | Limpa a escolha e retorna à apresentação; mantém idioma e preferência de acessibilidade |
| Teclado | Tab, Shift+Tab, Enter, Espaço e Escape verificados |
| Conteúdo rolável | Região de leitura mantém todo o texto no DOM; rolagem chega à frase final |
| Console da aplicação | Nenhum erro associado ao código/URL do site nos testes finais |
| Caminhos locais | HTML, CSS, JS e 12 caminhos de imagem existem; âncora de salto aponta para ID existente |
| Dependências externas | Nenhuma em execução: sem imports, CDN, fontes remotas ou chamadas de rede programáticas |

## Conteúdo e idiomas

Foram incluídos 12 registros, cada um com objetos `pt`, `en` e `es`. Os sete campos estão presentes e preenchidos em todas as 36 versões.

| Idioma | Palavras na mensagem principal | Palavras na explicação sobre percepção |
| --- | --- | --- |
| Português brasileiro | 116–123 | 57–61 |
| Inglês americano | 121–138 | 61–66 |
| Espanhol latino-americano | 119–132 | 59–65 |

Contagem por separação em espaços, considerando os três parágrafos como uma mensagem. As variações de tamanho não provocam redução automática da fonte.

As correções editoriais finais das cartas 01, 02, 04, 07, 08, 09, 10, 11 e 12 estão incorporadas nas traduções. As cartas 03 e 05 mantêm as versões aprovadas sem substituições posteriores.

Em todas as explicações, o conteúdo esclarece que a imagem não conhece o futuro, a escolha não revela verdade oculta, a atração pode envolver memória/percepção/emoção/expectativas/experiências, o significado depende da reflexão pessoal e a mensagem não substitui orientação profissional.

A revisão de conteúdo não identificou promessa de acontecimentos, previsão, diagnóstico, horóscopo ou afirmação sobrenatural. Ocorrências de palavras como “futuro”, “garantia” e “promessa” aparecem em negações ou ressalvas, não como previsões.

## Responsividade e leitura

Foram executados 32 cenários de layout: em cada uma das quatro larguras, apresentação nos três idiomas, orientação, grade e leitura de O Farol nos três idiomas.

| Tela nominal | Grade | Leitura |
| --- | --- | --- |
| 320 × 740 | Duas colunas | Coluna única; texto rolável, sem sobra horizontal |
| 430 × 932 | Duas colunas | Coluna única; ações após a área de leitura |
| 768 × 1024 | Três colunas | Imagem escolhida e mensagem lado a lado |
| 1280 × 900 | Quatro colunas | Imagem, ações e verso com largura confortável |

Nenhum dos 32 cenários finais apresentou rolagem lateral. As regiões internas de texto também não apresentaram largura de conteúdo superior à sua área útil.

Na leitura, a altura do texto pode ser superior à área visível: esse é o comportamento previsto. `overflow-y: auto` permite acesso a todas as seções; a instrução de rolagem permanece fora da área interna. Não há truncamento, limite de linhas ou ocultação editorial de conteúdo.

As imagens usam `object-fit: contain` e proporção 2:3. A moldura é preservada integralmente na grade e na carta escolhida. A sobreposição decorativa da apresentação não altera os arquivos.

## Acessibilidade

- Botões HTML reais e seletor de idioma nativo.
- Link “Pular para o conteúdo”.
- Foco visível e foco transferido ao título da etapa ou da carta.
- Região de leitura focável e rolável.
- `aria-current` nas etapas e `aria-pressed` na escolha.
- Mensagens de estado com `role="status"` e `aria-live="polite"`.
- Face traseira com `inert` e `aria-hidden` durante a animação, evitando leitura antecipada.
- Imagem frontal decorativa da virada oculta dos leitores de tela; conteúdo textual acessível após a abertura.
- Descrições alternativas visuais específicas, traduzidas e sem título oficial ou interpretação simbólica antes da escolha.
- Hierarquia de títulos e idioma do documento atualizados.
- Controles principais com altura mínima de 44–48 pixels.
- Alternativa explícita de abertura sem animação.
- CSS e JavaScript preparados para `prefers-reduced-motion`.

A árvore de acessibilidade do navegador confirmou títulos, nomes dos controles, imagens, conteúdo e exclusão das etapas ocultas. Não foi realizada uma sessão com NVDA, JAWS ou VoiceOver, portanto este relatório não equivale a uma certificação de conformidade WCAG.

### Contraste das combinações principais

Cálculo pela luminância relativa sRGB, usando o tom mais claro relevante do fundo escuro.

| Uso | Contraste aproximado |
| --- | --- |
| Texto secundário claro sobre fundo escuro | 7,53:1 |
| Dourado claro sobre fundo escuro | 7,22:1 |
| Corpo do verso sobre marfim | 10,99:1 |
| Títulos pequenos do verso sobre marfim | 6,53:1 |
| Explicação sobre percepção sobre marfim | 6,63:1 |
| Texto escuro do botão principal sobre dourado | 8,65:1 |

Essas combinações superam 4,5:1 para texto normal. Elementos decorativos não comunicam informação obrigatória.

## Impressão

O botão utiliza `window.print()`. A chamada foi observada no fluxo normal e confirmada por instrumentação de teste, uma chamada por acionamento.

As regras de `@media print` foram aplicadas na bancada de QA para inspecionar a apresentação de impressão nos três idiomas. A mensagem de O Farol manteve as cinco seções, palavras-chave e frase final. Na área de impressão, a altura visível e a altura total do conteúdo coincidiram: 686 pixels em português e 706 pixels em inglês e espanhol, na largura usada pelo teste. `overflow` passou a `visible`; as transformações 3D foram removidas.

Cabeçalho, navegação, grade, imagem, botões e instruções de rolagem ficaram ocultos. Texto escuro sobre fundo branco e margens A4 estão definidos no CSS.

**Limite:** a interface nativa de prévia/PDF não ficou disponível para inspeção completa no navegador remoto. Não foi gerado um PDF final nem acionada uma impressora física. A paginação final depende das configurações do navegador e da impressora e deve ser conferida na prévia local antes da impressão.

## Toque e movimento reduzido

O site usa o evento nativo `click` em botões, compatível com ativação por mouse, teclado e toque. Não depende de hover, arraste ou eventos exclusivos de mouse.

Uma sequência simulada de `touchstart`, `touchend` e ativação por `click` abriu a carta correta em largura de celular. Isso valida o fluxo de ativação, mas não equivale a testar eventos confiáveis em um aparelho físico.

A preferência de movimento reduzido foi simulada antes da inicialização por uma resposta positiva de `matchMedia`. A opção sem animação foi marcada automaticamente; a carta abriu com duração computada de `0s`. O checkbox manual também foi testado com resultado imediato. A regra CSS `@media (prefers-reduced-motion: reduce)` está presente e remove transições e animações.

**Limite:** não houve teste físico em Android/iPhone nem alteração real da preferência do sistema operacional. O fluxo foi validado em layout móvel e simulação de preferência no Chrome.

## Abertura local e ausência de rede

Todos os caminhos de execução são relativos. Não há módulos JavaScript, `fetch`, XHR, WebSocket, fontes remotas ou dependências de servidor. Essa organização permite a abertura direta da pasta extraída em navegadores modernos.

**Limite de verificação:** o navegador remoto bloqueia navegações `file://` por política do ambiente. A abertura direta por duplo clique não pôde ser executada nesse navegador. Os testes funcionais ocorreram por HTTP local; a compatibilidade com abertura direta foi revisada pela estrutura e pelo código. O README oferece também um servidor local opcional.

## Privacidade e segurança de conteúdo

Não há login, cadastro, pagamento, formulário, coleta de nome/e-mail, analytics, pixels, cookies definidos pelo site, armazenamento local, IndexedDB, banco de dados ou API externa.

A escolha, o idioma e a preferência manual ficam apenas em variáveis na memória da página. Textos são inseridos por `textContent`, sem interpretação de HTML. Os únicos controles de entrada são idioma e preferência de animação.

A afirmação de ausência de coleta refere-se ao código entregue. Um eventual provedor de hospedagem pode manter seus próprios registros técnicos; nenhum foi contratado ou configurado nesta entrega.

## Problemas encontrados e corrigidos

| Problema | Correção |
| --- | --- |
| A prévia inicial não seguia links simbólicos de imagens | Substituição apenas na bancada de teste por cópias reais dos PNGs; a entrega já usa arquivos reais |
| Sobra horizontal de aproximadamente 1 pixel no celular estreito | Redução da largura da composição decorativa da apresentação; 32 cenários posteriores sem sobra lateral |
| Alternativas de imagem inicialmente genéricas | Descrições visuais individuais nos três idiomas, preservando a ausência de títulos e significados antes da escolha |
| Cabeçalho da etapa de leitura sem título de nível principal | Inclusão de `h1` na etapa, sem mudança no conteúdo aprovado |

Nenhum defeito funcional conhecido permaneceu nos cenários executados. Os limites de ambiente e cobertura estão registrados acima e não foram apresentados como testes físicos concluídos.

## Integridade das imagens

Os 12 arquivos são PNG RGBA de 1024 × 1536 pixels, proporção 2:3, orientação vertical. Total: 50.595.916 bytes. A comparação SHA-256 confirmou igualdade com cada original anexado: 12 de 12.

| Arquivo | SHA-256 | Original preservado |
| --- | --- | --- |
| `01-a-ponte.png` | `5d19568d4fa929e15c0094fbba0dbb2896db0365c5e9d2279128fd2bb2a1d2a8` | Sim |
| `02-a-semente.png` | `e5a12aa516633e1defad6464e16f907b947b30455e251a0a831cd3d7cf25b355` | Sim |
| `03-a-janela.png` | `bdf6227d0d42a2dea6df4e3f51549ad9956fb17ad2534426bb9cbc3bd979500a` | Sim |
| `04-a-montanha.png` | `a1fef7bccd559e1b17ec509f9723fbf2a05eccde17701208107c2b6f0fc146ab` | Sim |
| `05-o-rio.png` | `fceb21877e860a13515bedf1d9cccf5e486a532e8748a33e730f023baecc2e65` | Sim |
| `06-a-chave.png` | `42c3f0f176931262fe07ba9f6e793dd976b732cb2db3e5298cb8d1f284e81667` | Sim |
| `07-a-fogueira.png` | `0eae8901bc3a55957f43602dc1fca8e562d5eddd7eecfa09a27aa84cf50684ee` | Sim |
| `08-o-jardim.png` | `8ed07a2dd2acf4619889497665aa7abed8ad0f09e2afc4c1ae264a12ac96fba5` | Sim |
| `09-a-bussola.png` | `d2114234afb44775f978cd2b94e943ac8d8880da0b89ad669c98b503573abb6a` | Sim |
| `10-a-concha.png` | `c4064096c3a628cb558dc66de1e44c2c306c8aa6d884a5fce892ade29e16a970` | Sim |
| `11-o-farol.png` | `b0af0c50c204c7c37e504b6253d5d0351e49ebf9204e83250f5842dfda9f6ac2` | Sim |
| `12-a-arvore.png` | `051d75dc6e99766c65b3abffc808aee3b9ee8923cd0c388136f3e341f987025c` | Sim |

## Pacote final

A entrega foi limitada à estrutura solicitada, sem ferramentas de QA, dependências, arquivos de configuração de hospedagem ou credenciais. O ZIP foi submetido à verificação de integridade CRC e à conferência de seus 17 caminhos. Os PNGs contidos no ZIP foram comparados novamente com os originais.

O README explica abertura local, manutenção de imagens e textos, preservação dos três idiomas, testes e publicação futura em GitHub Pages, Netlify ou Vercel. Nenhuma dessas publicações foi executada.
