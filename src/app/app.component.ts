import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AbstractComponent } from "../abstract/abstract.component";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent extends AbstractComponent {
  title = "app";
}
