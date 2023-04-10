import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ISalad from 'src/app/models/salads/ISalad';
import { SaladHandlerService } from 'src/app/services/salad-handler.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  isHidden: boolean = false
  res$!: any
  idParam: string | null = this.activatedRoute.snapshot.paramMap.get("id");
  salad!: ISalad 
  cartOfSalads: ISalad[] = []
  cartTotal: number = 1
  disable: boolean = false

  constructor(private activatedRoute: ActivatedRoute, public saladService: SaladHandlerService) {
    
  }

  ngOnInit(): void {
    this.getSalad()
  }

  async getSalad() {
    try {
      this.res$ = await this.saladService.GetSalad(this.idParam as string)
      this.res$.subscribe((data: any) => {
        this.salad = data.object[0]
        console.log(this.salad);
      })
    } 
    catch (err) {
      console.error(err);
      return 
    }
  }

  addToCart() {
    debugger
    this.cartOfSalads.some(element => {
      if(element.id === this.salad.id) {
        this.disable = true
      }
    })

    if(!this.disable) {
      this.cartOfSalads.push(this.salad)
      this.saladService.totalCartPrice = this.salad.saladTypePrice
    }
  }

  removeFromCart(id:string | undefined) {
    this.cartOfSalads = this.cartOfSalads.filter(q => q.id !== id)

    if(this.cartOfSalads.length === 0) {
      this.isHidden = !this.isHidden
      this.saladService.totalCartPrice = 0 
      this.disable = false
    }
  }

  open() {
    this.isHidden = !this.isHidden
    
    if(this.isHidden) {
      this.addToCart()
    }
  }

  incrementQuantity() {
    if(this.cartTotal > 5) return

    this.cartTotal = this.cartTotal + 1
    this.cartOfSalads.map(salad => {
      this.saladService.totalCartPrice = this.saladService.totalCartPrice + salad.saladTypePrice
    })
  }

  decrementQuantity() {
    if(this.cartTotal < 2) return

    this.cartTotal = this.cartTotal - 1
    this.cartOfSalads.map(salad => {
      this.saladService.totalCartPrice = this.saladService.totalCartPrice - salad.saladTypePrice
    })
  }
}
