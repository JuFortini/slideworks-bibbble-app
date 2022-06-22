## Escolha do Framework

À princípio, olhando o design no Figma, eu percebi que havia uma aba "Team" e, visto que isso poderia envolver u

## Getting Started

Como eu vou trabalhar com Typescript, nas configurações iniciais, eu o instalei e troquei as extensões dos arquivos, além de criar a pasta src e incluir a pasta pages dentro dela. Troquei todo o conteúdo da Home por um <strong>Hello World!</strong> e rodei o app para começar a visualizar as mudanças.
- Problema: o arquivo tsconfig.json apresentou um erro que eu nunca tinha experimentado em '"resolveJsonModule": true', onde dizia que essa opção não podia ser especificada sem uma estratégia de resolução do módulo como 'node'. Eu segui o link da descrição do erro https://www.typescriptlang.org/tsconfig#resolveJsonModule, mas era uma página que descrevia a função do resolveJsonModule e não a origem do erro em si. Então, usando como base um app anterior que eu desenvolvi e o que descrição pedia, eu especifiquei a estratégia de resolução como 'node', incluindo uma linha de código acima como '"moduleResolution": "node"' e o problema foi resolvido.

Em seguida, eu identifiquei no Figma as fontes que foram usadas (Roboto e Inter) e as selecionei no Google Fonts. Criei o arquivo '_document.tsx' para poder atualizar o 'Head' com as novas fontes e adicionar um favicon para ficar mais legal a apresentação. <br />
O próximo passo foi instalar o ChakraUI para começar a estilização inicial da página. Novamente no Figma, eu identifiquei as cores mais usadas e fontes, para atualizar os o tema pré-definido do ChakraUI. Atualizei o app com o Provider do ChakraUI e atualizei as definições importando o novo tema. <br />

## Header

Começando a desenvolver o Header, eu criei uma pasta pensando em separar a Navbar como um segundo componente dentro do Header. Determinei a altura do Header em um display block, fiz o download da logo como .svg e comecei por ela. Eu costumo colocar backgrounds coloridos para me ajudarem a perceber os limites de cada item, dessa forma, eu perebi que seria melhor criar uma div com display flex com as margens de acordo com o tamanho à esquerda da logo e depois organizar todos os componentes dentro dela. <br />
Próximo passo foi criar a Navbar que à princípio eu criei os itens com Link importado do next mesmo, mas ainda vou avaliar outras opções. Além disso, eu instalei o react-icons, que eu estou mais acostumada, para usar no ícone da lupa. <br />
Agora sim, eu nomeei os itens corretamente na Navbar e completei o que seriam as referências para as páginas. Apesar de ser uma página estática, eu quis criar de forma automatizada o formato negrito para as páginas ativas. Para isso eu pensei em criar cada item da Navbar como um componente e esse seria testado se é o componente ativo ou não, como eu já havia feito antes em um app anterior. Então, eu criei então o componente "NavLink.tsx" e nele uma função que verificaria se a rota da url é a mesma passada pelo href, se sim, o item seria mostrado em negrito. Então, eu substituí os itens que a princípio eu tinha criado como Link do next. O app que eu estava utilizando como base era mais complexo do que precisava, então, com o auxílio da própria documentação do next https://nextjs.org/docs/api-reference/next/router, eu tornei um pouco mais simples, de acordo com demanda para esse app. <br />
Nesta etapa, eu criei a página 'About' para testar apenas com o Header e um título. Desta forma, eu percebi que seria mais prático tornar o Divider como parte do Header, visto que antes eu havia deixado como um componente separado.
- Observação: deixei a página 'About' que eu usei para teste ativa, caso queiram testar.

## Footer

Determinei o componente Footer como uma div com display block e dentro eu criei uma outra div com display flex direcionando como coluna e com uma margem de acordo com o layout do Figma. Nela eu imaginei 3 caixas: a logo do LibSlide; o Divider; e uma caixa abaixo onde teriam duas caixas dentro, uma com o termos e políticas e outra com as redes sociais que eu poderia alinhar usando um display flex. <br />
Ao colocar o componente Divider, eu percebi que a altura de 1 pixel que eu estava determinado era inútil no Chakra, que por padrão já era 1px e se eu precisasse aumentar deveria mexer na borda e não na altura. Na documentação não está muito especificada essa parte, então tive que optar por tentativa e erro e usar o auxílio do inspect no navegador para ver o que estava sendo considerado no elemento. Então eu fiz essa alteração para o Divider do Header também. <br />
Percebi uma nova fonte no Footer, DM Sans, então eu retornei ao Google Fonts e atualizei as fontes. <br />

## Main

Para o conteúdo principal, eu criei os cards dos livros como um componente e quando eu der um GET no conteúdo da api, seja criado um card para cada conteúdo. Eu fiz isso recentemente em um projeto, então estava mais ou menos fresco na minha cabeça. <br />
Eu dispus os cards em uma grid, com um espaçamento vertical fixo e horizontal variável de acordo com o tamanho da página. Determinei uma largura máxima para os cards, de forma que de acordo com a largura da página eles vão se reajustar sem perder a qualidade da sua apresentação. <br />
- Problema: eu pensei em fazer um template-columns com 4 colunas, mas seria algo fixo e nada responsivo, portanto eu tinha que fazer algo que se ajustasse. Para dispor os cards de forma responsiva, o ChakraUI na sua documentação, indica utilizar uma largura mínima para cada item do grid, dessa forma eles se rearranjam de acordo com a largura da página respeitando esse limite. Determinei então um tamanho mínimo, mas assim eles não ficavam com espaço igualmente distribuído entre os cards e eles ficavam dispostos como justificados à esquerda e eu queria mais como um 'space-between' e o mais óbvio, que era justificar os itens com um 'space-between' não funcionava. Tive bastante problema para ajustar isso, porque a documentação do ChakraUI não explica muito bem como usar o template-columns. Então olhando no inspect do navegador, eu percebi que a largura máxima que eu tinha preenchido era apresentada lá como um 'grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr))', voltei na documentação e lá dizia que o Chakra fazia isso quando se determinava a largura mínima. Então eu pensei em mexer nos argumentos e determinar uma largura máxima também, ao invés de 1fr, porque ao botar 1fr, ele divide todo o espaço e ocupa toda a fração pertecente a ele, não deixando espaço vazio para o elemento se locomover. Determinei então a largura máxima igual à largura mínima porque assim ele não ocuparia nenhum espaço além do que ele precisava, e justifiquei com o 'space-between' pra ficar com espaçamento igual entre os cards.

