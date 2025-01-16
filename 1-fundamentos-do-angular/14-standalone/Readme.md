## Modularização Padrão do Angular

- São criados módulos estrategicamente, de modo que componentes do módulo são utilizados
  e apenas os componentes necessários são exportados do módulo (apenas os que precisam ser
  utilizados em outros locais).
- Tende a deixar o código bagunçado por depender de um padrão.
- Para fazer roteamento e lazy loading, acaba se tornando um código mais complexo, e com
  mais tendencia a ficar bagunçado.
- Para refatorar o código se torna custoso, pois as migrações podem se tornar confusas.

## Modularização SCAM - Single Component Angular Module

- É um sistema parecido com o Standalone.
- Este padrão foi criado antes da criação do standalone.
- A ideia deste padrão é deixar o componente independente, com um módulo por componente.
  - É importado o que é usado neste componente dentro do seu módulo.
  - É exportado o componente para ser usado em qualquer lugar.
- Acaba tendo mais código para fazer este padrão.
- O arquivo de Bundle acaba ficando muito grande, pois algumas coisas são carregadas
  sem precisar ser utilizadas.

## Standalone Project

- Cada componente, pipe, service, etc. é indepentende.
- Não possuimos o arquivo de app.module.ts
- Possuimos um arquivo de app.routes.ts
- O que é carregado através do bootstrap da aplicação é o app.component.ts

### Componentes Standalone

- Para usar um componente standalone dentro de outro, devemos importá-lo
  dentro do componente que deve ser utilizado.
- Dentro do seu import, podemos tambem importar módulos.
- O componente é ao mesmo tempo um componente e um módulo.

### Usando NgIf, NgFor, Pipes, ...

- Podem ser utilizadas importações separadas no componente.
- Pode ser importado o CommonModule, que possui todas diretivas e os Pipes.

### Criando um Pipe Standalone

- Ao criar o pipe, devemos definir o standalone como true.

### Criando uma Diretiva Standalone

- Ao criar a diretiva, devemos definir o standalone como true.

### Injeção de Dependencia com Standalone

- Funciona exatamente igual a injeção de dependencia modularizada.

### Modulos ou Standalone

- O standalone possui suas vantagens por ter mais liberdade na programação
  e nao precisar de dependencia de modulos, alem de gerar bundles menores.

#### Importante: ***Use APENAS componentes standalone ou APENAS componentes com módulos, isso evita a confusão e simplifica o código

