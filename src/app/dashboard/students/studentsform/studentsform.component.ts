import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentsform',
  templateUrl: './studentsform.component.html',
  styleUrls: ['./studentsform.component.scss'],
})
export class StudentsformComponent implements OnInit {
  form: {
    name: '';
    age: 0;
    responsable: '';
    classroom: 0;
  };
  classrooms: any = [
    {
      id: 1,
      name: 'teste',
    },
  ];
  constructor() {}
  // - nome;
  // - Idade;
  // - Foto;
  // - Nome do responsável;
  // - Turma (dropdown);
  ngOnInit(): void {}
  onSubmit() {}
}
