import { Component } from '@angular/core';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavigationComponent,
    HeroComponent,
    ServicesSectionComponent,
    PortfolioComponent,
    ContactFormComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  constructor() {}
}
