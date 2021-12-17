import { Component, OnInit} from '@angular/core';
import { Meta,Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  defaultImage =  '/assets/img/coringa.png';
  semente1 = `/assets/img/folha1.png`;
  semente2 = `assets/img/folha2.png`;
  semente3 = `/assets/img/folha3.png`;
  smartphone = `assets/img/smartphone.png`;

  constructor(private meta: Meta,private title: Title) {
      this.meta.addTags([
        {name: 'description', content: 'PDS Digital Desenvolve mais do que sites com qualidade e de alta performance do mercado atual, nós transformamos seus sonhos em realidade.'},
        {name: 'author', content: 'Jonathas Borges Cavalcante'},
        {name: 'keywords', content: 'Angular, performance, web designer'},
        {name: 'robots', content: 'index, follow'}
      ]);
      this.setTitle('pdsdigital');
    }

    public setTitle( newTitle: string) {
      this.title.setTitle( newTitle );
    }

  ngOnInit(): void {
  }

}
