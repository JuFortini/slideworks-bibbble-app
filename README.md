## Escolha do Framework

À princípio, olhando o design no Figma, eu percebi que havia uma aba "Team" e, visto que isso poderia envolver u

## Getting Started

Como eu vou trabalhar com Typescript, nas configurações iniciais, eu o instalei e troquei as extensões dos arquivos, além de criar a pasta src e incluir a pasta pages dentro dela. Troquei todo o conteúdo da Home por um <strong>Hello World!</strong> e rodei o app para começar a visualizar as mudanças.
- Problema: o arquivo tsconfig.json apresentou um erro que eu nunca tinha experimentado em '"resolveJsonModule": true', onde dizia que essa opção não podia ser especificada sem uma estratégia de resolução do módulo como 'node'. Eu segui o link da descrição do erro https://www.typescriptlang.org/tsconfig#resolveJsonModule, mas era uma página que descrevia a função do resolveJsonModule e não a origem do erro em si. Então, usando como base um app anterior que eu desenvolvi e o que descrição pedia, eu especifiquei a estratégia de resolução como 'node', incluindo uma linha de código acima como '"moduleResolution": "node"' e o problema foi resolvido.

Em seguida, eu identifiquei no Figma as fontes que foram usadas (Roboto e Inter) e as baixei no Google Fonts. Criei o arquivo '_document.tsx' para poder atualizar o 'Head' com as novas fontes e adicionar um favicon para ficar mais legal a apresentação. <br />
O próximo passo foi instalar o ChakraUI para começar a estilização inicial da página. Novamente no Figma, eu identifiquei as cores mais usadas e fontes, para atualizar os o tema pré-definido do ChakraUI. Atualizei o app com o Provider do ChakraUI e atualizei as definições importando o novo tema. <br />

## Header

Começando a desenvolver o Header, eu criei uma pasta pensando em separar a Navbar como um segundo componente dentro do Header. Determinei a altura do Header em um display block, fiz o download da logo como .svg e comecei por ela. Eu costumo colocar backgrounds coloridos para me ajudarem a perceber os limites de cada item, dessa forma, eu perebi que seria melhor criar uma div com display flex com as margens de acordo com o tamanho à esquerda da logo e depois organizar todos os componentes dentro dela. <br />
Próximo passo foi criar a Navbar que à princípio eu criei os itens com Link importado do next mesmo, mas ainda vou avaliar outras opções. Além disso, eu instalei o react-icons, que eu estou mais acostumada, para usar no ícone da lupa. <br />
Agora sim, eu nomeei os itens corretamente na Navbar e completei o que seriam as referências para as páginas. Apesar de ser uma página estática, eu quis criar de forma automatizada o formato negrito para as páginas ativas. Para isso eu pensei em criar cada item da Navbar como um componente e esse seria testado se é o componente ativo ou não, como eu já havia feito antes em um app anterior. Então, eu criei então o componente "NavLink.tsx" e nele uma função que verificaria se a rota da url é a mesma passada pelo href, se sim, o item seria mostrado em negrito. Então, eu substituí os itens que a princípio eu tinha criado como Link do Next mesmo. O app que eu estava utilizando como base era mais complexo do que precisava, então, com o auxílio da própria documentação do next https://nextjs.org/docs/api-reference/next/router, eu tornei um pouco mais simples, de acordo com demanda para esse app. <br />
Nesta etapa, eu criei a página 'About' para testar apenas com o Header e um título. Desta forma, eu percebi que seria mais prático tornar o Divider como parte do Header, visto que antes eu havia deixado como um componente separado.
- Observação: deixei a página 'About' que eu usei para teste ativa, caso queiram testar.




