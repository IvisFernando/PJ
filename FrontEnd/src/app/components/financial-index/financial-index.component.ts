import { Component, OnInit } from '@angular/core';
import { FinancialService } from 'src/app/services/financial.service';

@Component({
  selector: 'app-financial-index',
  templateUrl: './financial-index.component.html',
  styleUrls: ['./financial-index.component.css']
})
export class FinancialIndexComponent implements OnInit {

  id = 0;
  customer: Customer;
  message: string = "";
  constructor(private financialService: FinancialService) { }

  ngOnInit(): void {
    this.message = "Nenhum resultado encontrado!";
  }

  getCustomer(): void {

    if (this.id < 1 || this.id > 3 )
    {
      this.message = "Valor inválido!";
    }
    else
    {
      this.message = "";
      this.financialService.get(this.id)
      .subscribe(
        data => {
          this.customer = data;
          console.log(data);
        },
        error => {
          this.message = error;
        });
    }
    
  }

}

export class Customer {
  key: number;
  value: string;
}

