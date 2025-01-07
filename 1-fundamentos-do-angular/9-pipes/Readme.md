## Pipes

### Como funcionam:

- Os pipes transformam um texto ou um conteudo
  sem alterar a instancia original do elemento

```
component.ts

    pessoa = {
        nome: 'Nome',
        idade: 20,
    }

component.html

    <div>{{ pessoa.nome | uppercase }}</div>
    
    // NESTE CASO O RESULTADO SERA 'NOME'
    // POREM, pessoa.nome IRA CONTINUAR A
    // MANTER O SEU VALOR COMO 'Nome'

```

- Podemos, tambem, encadear pipes, adicionando, por exemplo,
  um pipe `json` e um pipe `uppercase` apos para transformar
  todas palavras do json transformado em uppercase

```html
    <div>{{ pessoa | json | uppercase }}</div>
```

- Os pipes so ficam disponiveis devido ao `CommonModule` do angular,
  que traz funcoes como ngFor, ngIf, etc. 

### Pipes comuns do angular:

- uppercase: transforma para uppercase algum texto
- lowercase: transforma para lowercase algum texto
- titlecase: faz um Captalize do texto
- json: mostra os dados como um json (para debugar, por exemplo)
- slice: tem a mesma funcionalidade da funçao slice do javascript
  - pode ser usado com strings, arrays e diretivas
- date: transforma as datas para um formato desejado (passado por parametro)

### Criando Pipes

- Para criar um pipe, devemos passar como parametro o valor que ele irá
  receber para transformar, e, se necessário, parâmetros adicionais
- A nomenclatura de um arquivo de pipe será sempre NOME.pipe.ts
- Ele é uma classe que irá implementar `PipeTransform`, que contém
  a função de transform
- Além disso, devemos usar o decorator `@Pipe` para defini-lo como um pipe.
- Ex.:

```ts
//example.pipe.ts

  import {Pipe, PipeTransform} from "@angular/core";
  
  @Pipe({
    name: 'example',
  })
  export class ExamplePipe implements PipeTransform {
      transform(value: string, parameter: number): string {
        if (!value) {
          return '';
        }
        if (value.length <= parameter) {
          return value;
        }
        return `${value.slice(0, parameter)}...`;
      }
  }
```

### Utilizando o date Pipe

- O pipe `date` possui algumas configurações:
  - `value`: a data nos formatos:
    - ISO8601 (string): `2024-10-21T21:00:00.000Z`
    - ISO8601 (string): `2024-10-21T21:00:00.000`
      - OBS.: o `z` no final da string indica qual fuso horário está sendo usado
    - Objeto (Date): `Mon Oct 21 2024 18:00:00 GMT-0300 (Brasilia Standard Time)`
      - OBS.: formado pela instancia de `new Date`
    - Timestamp (number): `1729544400000`
      - OBS.: é a quantidade de milisegundos desde uma data fixada
  - `format`: formata o value conforme o que é recebido:
    - Formatações Padrões:
      - `short`: 21/10/2024 21:00
      - `medium`: 21 de out. de 2024 21:00:00
      - `long`: 21 de outubro de 2024 21:00:00 GMT+0
      - `full`: segunda-feira, 21 de outubro de 2024 21:00:00 GMT+00:00
    - Formatações Customizadas:
      - Podem ser formadas frases, colocando os textos normais dentro de
        aspas simples e os valores conforme a documentação.
      - `dd`: dia do mes (0 a 31)
      - `MM`: mes do ano (0 a 12)
      - `YYYY`: ano
      - `hh`: hora 
      - `mm`: minuto
      - `ss`: segundo
      - `YY`: ano simplificado
      - `EEEE`: dia da semana
      - `MMMM`: mes literal
      - `ZZZZ`: Fuso Horario
  - `timezone`: define o fuso horário da data:
    - `"+0000"`: GMT+00:00
    - `"-0300"`: GMT-03:00
  - `locale`: define o formato do local da data:
    - `"pt-BR"`: portugues do Brasil
    - `"en-US"`: ingles do EUA

- Alem das configurações de pipe, o mesmo possui um provider
  para configurações globais:
  
```ts
import {DATE_PIPE_DEFAULT_OPTIONS} from "@angular/common";
import {LOCALE_ID} from "@angular/core";
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from "@angular/common";

registerLocaleData(localePt, 'pt-BR');

@ngModule({
    //...
    providers: [
      {
        provide: DATE_PIPE_DEFAULT_OPTIONS,
        useValue: {
          dateFormat: "dd/MM/YYYY",
          timezone: "+0000",
        }
      },
      {
        provide: LOCALE_ID,
        useValue: 'pt-BR',
      }
    ]
})

```