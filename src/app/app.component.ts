import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  public appTitle = 'ng-demo-project';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/home']);
  }
}
