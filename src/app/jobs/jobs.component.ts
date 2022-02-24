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
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  jobs:Trabalho[] = jobsdata;

}
