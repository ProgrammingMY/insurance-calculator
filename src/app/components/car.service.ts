import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class CarService {
    private cars = [
        {
            make: 'Perodua',
            model: 'BEZZA',
            year: '2023',
            variant: '1.3X AUTO',
        },
        {
            make: 'Perodua',
            model: 'BEZZA',
            year: '2023',
            variant: '1.3AV AUTO',
        },{
            make: 'Perodua',
            model: 'BEZZA',
            year: '2023',
            variant: '1.0G AUTO',
        },{
            make: 'Perodua',
            model: 'BEZZA',
            year: '2023',
            variant: '1.0G MANUAL',
        },{
            make: 'Perodua',
            model: 'MYVI',
            year: '2023',
            variant: '1300 PREMIUM X',
        },{
            make: 'Perodua',
            model: 'MYVI',
            year: '2023',
            variant: '1500 AV',
        },{
            make: 'Perodua',
            model: 'MYVI',
            year: '2023',
            variant: '1300 G',
        },{
            make: 'Proton',
            model: 'S70',
            year: '2023',
            variant: '1.5 PREMIUM',
        },{
            make: 'Proton',
            model: 'S70',
            year: '2023',
            variant: '1.5 EXCECUTIVE',
        },{
            make: 'Proton',
            model: 'S70',
            year: '2023',
            variant: '1.5 FLAGSHIP X',
        },{
            make: 'Proton',
            model: 'S70',
            year: '2023',
            variant: '1.5 FLAGSHIP',
        },{
            make: 'Proton',
            model: 'SAGA',
            year: '2023',
            variant: '1.3 R3 LIMITED EDITION',
        },{
            make: 'Proton',
            model: 'SAGA',
            year: '2023',
            variant: '1.3 STANDARD',
        },{
            make: 'Proton',
            model: 'SAGA',
            year: '2023',
            variant: '1.3 PREMIUM',
        },
    ]

    getModels(make: string) {
        // make it unique
        return Array.from(new Set(this.cars.filter(car => car.make === make).map(car => car.model)));
    }

    getYears(make: string, model: string) {
        return this.cars.filter(car => car.make === make && car.model === model);
    }

    getVariants(make: string, model: string, year: string) {
        return this.cars.filter(car => car.make === make && car.model === model && car.year === year);
    }
    
}