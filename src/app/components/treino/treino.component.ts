import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DadosTreino } from "../../models/dadostreino.model";
import { LutadoresService } from "../../services/lutadores-ranqueados.service";
import { FormBuilder, FormControl, FormControlName, FormGroup, NgControl, Validators } from "@angular/forms";

@Component({
    selector: 'app-treino',
    templateUrl: './treino.component.html',
    styleUrls: ['./treino.component.scss']
})

export class TreinoComponent implements OnInit {

    nome!: string;
    rank!: string;
    imagem!: string;
    imagemTreino: string = "/assets/imagens/training.gif";
    id!: number;
    valorPremio: number = 0;
    valorTreino: number = 0;
    progresso!: string;

    form: FormGroup = this._fb.group({
        fighterName: ['', [Validators.required, Validators.minLength(3)]]
    })

    constructor(private service: LutadoresService, private router: Router, private _fb: FormBuilder) {

    }

    ngOnInit(): void {
    }


    treinar() {
        const dadosTreino: DadosTreino = {
            nome: this.form.get('fighterName')?.value,
            rank: this.rank,
            imagem: this.imagem,
            id: this.id,
            valorPremio: this.valorPremio,
            valorTreino: this.valorTreino
        };

        this.service.adicionar(dadosTreino).subscribe(resultado => {
            console.log(resultado);
            this.router.navigateByUrl('ranking');
        },
            error => console.log(error));
    }

    aumentar() {

        this.valorTreino += 50;

        if (this.imagemTreino == "/assets/imagens/training.gif") {
            this.imagemTreino = "/assets/imagens/training2.gif"

        } else {
            this.imagemTreino = "/assets/imagens/training.gif"
        };


        if (this.valorTreino < 250) {

            this.imagem = '/assets/imagens/base_form.gif';
            this.valorPremio += 10;
            this.rank = "F"
            this.progresso = "Você ainda está na forma base.";

        } else if (this.valorTreino >= 250 && this.valorTreino < 1000) {

            this.imagem = '/assets/imagens/ssj1.gif';
            this.progresso = "Você atingiu o nível Super Saiyajin 1! Recompensa por treino aumentada!"
            this.valorPremio += 100;
            this.rank = "E"

        } else if (this.valorTreino >= 1000 && this.valorTreino < 2000) {
            this.imagem = '/assets/imagens/ssj2.gif';
            this.progresso = "Você atingiu o nível Super Saiyajin 2! Recompensa por treino aumentada!"
            this.valorPremio += 200;
            this.rank = "D"

        } else if (this.valorTreino >= 2000 && this.valorTreino < 3000) {
            this.imagem = '/assets/imagens/ssj3.gif';
            this.progresso = "Você atingiu o nível Super Saiyajin 3! Recompensa por treino aumentada!"
            this.valorPremio += 300;
            this.rank = "C"

        } else if (this.valorTreino >= 3000 && this.valorTreino < 4000) {
            this.imagem = '/assets/imagens/ssj4.gif';
            this.progresso = "Você atingiu o nível Super Saiyajin 4! Recompensa por treino aumentada!"
            this.valorPremio += 400;
            this.rank = "B"

        } else if (this.valorTreino >= 4000 && this.valorTreino < 8000) {
            this.imagem = '/assets/imagens/ssjgod.gif';
            this.progresso = "Você atingiu o nível Super Saiyajin Deus! Recompensa por treino aumentada!"
            this.valorPremio += 500;
            this.rank = "A"

        } else if (this.valorTreino >= 8000 && this.valorTreino < 12000) {
            this.imagem = '/assets/imagens/ssjblue.gif';
            this.progresso = "Você atingiu o nível Super Saiyajin Blue! Recompensa por treino aumentada!"
            this.valorPremio += 700;
            this.rank = "S"

        } else if (this.valorTreino >= 12000) {
            this.imagem = '/assets/imagens/ui.gif';
            this.progresso = "Você alcançou o instinto superior! Recompensa por prêmio aumentada!"
            this.valorPremio += 8000;
            this.rank = "Z"

        }
    }


}


