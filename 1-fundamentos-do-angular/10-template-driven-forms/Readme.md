## Template Driven Forms

- É usada para formulários com validações mais simples,
  tratando o dado com o ngModel
- Usando a diretiva ngModel, teremos acesso a varios métodos
  da diretiva, como `valid`, `touched`, `dirty`, `value`, etc.
- Ex.:

```html
(component.html)

    <input ngModel #inputFormControl="ngModel" minlength="5" required><br><br>
    
    <!--TODOS VALORES RETORNADOS SÃO ATUALIZADOS A CADA MUDANÇA DEVIDO AO NGMODEL-->
    
    <!--Retorna se o campo é valido baseado nas condições do input-->
    Valid: {{inputFormControl.valid}} <br>
    <!--Retorna se o campo foi clicado dentro depois fora em algum momento-->
    Touched: {{inputFormControl.touched}} <br>
    <!--Retorna se o campo ja foi preenchido alguma vez-->
    Dirty: {{inputFormControl.dirty}} <br>
    <!--Retorna o valor do formulario-->
    Value: {{inputFormControl.value}} <br>
    <!--Retorna um observable com VALID ou INVALID dependendo das condições-->
    Status Changes (async): {{inputFormControl.statusChanges | async}} <br>
    <!--Retorna um observable com o valor do formulário-->
    Value Changes (async): {{inputFormControl.valueChanges | async}} <br>

(component.ts)

    // PODEMOS SALVAR EM TEMPO REAL OS VALORES DO INPUT
    // EM UMA VARIAVEL OU EM UM ARRAY OU ATÉ EM UM OBJETO

    @ViewChild('inputFormControl') inputFormControl!: NgModel;
    
    form = {
        input: '',
        status: false
    }
    ngAfterViewInit(): void {
    
        if(this.inputFormControl.valueChanges){
            this.inputFormControl.valueChanges.subscribe(
                value => {
                    this.form.input = value;
                }
            )
        }
        if(this.inputFormControl.statusChanges){
            this.inputFormControl.statusChanges.subscribe(
                status => {
                    if(status && status === "INVALID"){
                        this.form.status = false;
                    }
                    else{
                        this.form.status = true;
                    }
                    console.log(this.form);
                }
            )
        }
    }
```

- Podemos também criar mensagens de erros dedicadas para as validações
- Podemos também alternar classes dependendo do status do formControl
- Ex.:

```angular181html
    <input ngModel #inputFormControl="ngModel" minlength="5" required><br>
    <div *ngIf="inputFormControl.invalid && inputFormControl.touched"
         [ngClass]="inputFormControl.valid ? 'valid' : 'invalid'">
        <div *ngIf="inputFormControl.hasError('required')">
            O campo nome é obrigatório
        </div>
        <div *ngIf="inputFormControl.hasError('minlength')">
            O campo nome deve ter pelo menos 5 caracteres
        </div>
    </div>
```

