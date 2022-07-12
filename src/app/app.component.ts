import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-portfolioLC';

  public sobreMi:boolean = false
  public skills:boolean = false

    constructor (){

    }

    ngOnInit(): void {

    }

    mostrarSobreMi(){
      this.sobreMi = true
      this.skills = false
    }

    mostrarSkills() {
      this.skills = true;
      this.sobreMi = false
    }
}
