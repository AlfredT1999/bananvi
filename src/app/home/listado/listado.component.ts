import { Component } from '@angular/core';
import ISaladTypeModel from 'src/app/models/salads/ISaladTypeModel';
import { SaladHandlerService } from 'src/app/services/salad-handler.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  isHidden: boolean = false
  res$!: any
  listSalads: ISaladTypeModel[] = []

  constructor(private saladService: SaladHandlerService) {
    
  }

  ngOnInit(): void {
    this.getAllSalads()
  }
  
  open() {
    this.isHidden = !this.isHidden
  }

  async getAllSalads() {
    try {
      this.res$ = await this.saladService.GetAllSalads()
      this.res$.subscribe((data: any) => {
        this.listSalads = data.object
      })
    } 
    catch (err) {
      console.error(err);
      return 
    }
  }
}
