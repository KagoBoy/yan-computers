import { Component } from '@angular/core';
import { IProduto} from '../produtos';
import { ProdutosService } from '../produtos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  produtos: IProduto[] | undefined;

  constructor(
    private produtosService: ProdutosService,
    private router: ActivatedRoute
  ){ }

  ngOnInit():void {
    const produtos = this.produtosService.getAll();
    this.router.queryParamMap.subscribe(parms => {
      const descricao = parms.get("descricao")?.toLowerCase();

      if(descricao){
        this.produtos = produtos.filter(produto => produto.descricao.toLowerCase().includes(descricao))
        return;
      }
      this.produtos = produtos;
    });
  }

}
