import { Component, OnInit } from '@angular/core';
import { FinancialService } from 'src/app/services/financial.service';

@Component({
  selector: 'app-financial-form',
  templateUrl: './financial-form.component.html',
  styleUrls: ['./financial-form.component.css']
})
export class FinancialFormComponent implements OnInit {

  valor = 0;
  parcela = 0;
  total = 0;
  constructor(private financialService: FinancialService) { }

  ngOnInit(): void {
  }

  calculate(): void {
    this.financialService.post({ valor: this.valor, parcela: this.parcela})
      .subscribe(
        data => {
          this.total = data;
        },
        error => {
          this.total = 0;
        });
  }

}
