import { Component } from '@angular/core';
import { Country } from './modules/country/Country';
import { InfoCountryService } from './services/InfoCountry';
import { LoggerService } from './services/loggerService';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    // providers: [InfoCountryService, LoggerService],
})
export class AppComponent {
    countries!: Country[];

    constructor(private infoCountryService: InfoCountryService) {}

    ngOnInit(): void {
        this.getInfoCountry();
    }

    getInfoCountry() {
        this.infoCountryService.getInfoCountry().subscribe(country => this.countries = country.slice(0, 10));
    }
}
