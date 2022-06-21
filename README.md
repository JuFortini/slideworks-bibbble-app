## Escolha do Framework

À princípio, olhando o design no Figma, eu percebi que havia uma aba "Team" e, visto que isso poderia envolver u

## Getting Started

Como eu vou trabalhar com Typescript, nas configurações iniciais, eu o instalei e troquei as extensões dos arquivos, além de criar a pasta src e incluir a pasta pages dentro dela. Troquei todo o conteúdo da Home por um <strong>Hello World!</strong> e rodei o app para começar a visualizar as mudanças.
- Problema: o arquivo tsconfig.json apresentou um erro que eu nunca tinha experimentado em '"resolveJsonModule": true', onde dizia que essa opção não podia ser especificada sem uma estratégia de resolução do módulo como 'node'. Eu segui o link da descrição do erro https://www.typescriptlang.org/tsconfig#resolveJsonModule, mas era uma página que descrevia a função do resolveJsonModule e não a origem do erro em si. Então, usando como base um app anterior que eu desenvolvi e o que descrição pedia, eu especifiquei a estratégia de resolução como 'node', incluindo uma linha de código acima como '"moduleResolution": "node"' e o problema foi resolvido.

Em seguida, eu identifiquei no Figma as fontes que foram usadas (Roboto e Inter) e as baixei no Google Fonts. Criei o arquivo '_document.tsx' para poder atualizar o 'Head' com as novas fontes e adicionar um favicon para ficar mais legal a apresentação. <br />
O próximo passo foi instalar o ChakraUI para começar a estilização inicial da página. Novamente no Figma, eu identifiquei as cores mais usadas e fontes, para atualizar os o tema pré-definido do ChakraUI. Atualizei o app com o Provider do ChakraUI e atualizei as definições importando o novo tema. <br />




