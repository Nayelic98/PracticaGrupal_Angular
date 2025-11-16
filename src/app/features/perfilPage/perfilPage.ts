import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-perfil-page',
  standalone: true,
  imports: [],
  templateUrl: './perfilPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerfilPage {
  name = signal("Nayeli");
  lastName = signal("Barbecho");
  age = signal(21);

  getFullName() {
    return `${this.name()} ${this.lastName()} con edad ${this.age()} años`;
  }

  changeData() {
    this.name.set("Luis");
    this.lastName.set("Gonzales");
    this.age.set(45);
  }

  resetData() {
    this.name.set("Nayeli");
    this.lastName.set("Barbecho");
    this.age.set(21);
  }

  changeAge() {
    this.age.set(18);
  }

  getFullNameUpperCase() {
    return `${this.name()} ${this.lastName()}`.toUpperCase();
  }
}
