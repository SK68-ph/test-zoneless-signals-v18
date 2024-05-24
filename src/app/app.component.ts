import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentBComponent } from "./componentB/componentB.component";
import { ComponentAComponent } from "./componentA/componentA.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ComponentBComponent, ComponentAComponent]
})
export class AppComponent {
  title = 'signals-v18';
}
