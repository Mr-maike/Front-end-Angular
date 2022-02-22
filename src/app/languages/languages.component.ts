import { Component, OnInit } from '@angular/core';
import jobsdata from '../api/jobs.json';

interface Trabalho{
  id: number;
  linguagem: string;
  frameworkFront: string;
  frameworkBack: string;
  vaga: string;
  descricao: string;
  salario: number;
}

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  jobs:Trabalho[] = jobsdata;

}
