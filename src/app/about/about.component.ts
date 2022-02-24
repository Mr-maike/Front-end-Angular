import { Component, OnInit } from '@angular/core';
import aboutData from '../api/about.json';

interface AboutUs{
  nome: string;
  descricao: string;
  cargo: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  about:AboutUs[] = aboutData;

}
