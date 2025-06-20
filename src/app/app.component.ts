import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateformComponent } from '../templateform/templateform.component';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TemplateformComponent,ReactiveFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';
}
