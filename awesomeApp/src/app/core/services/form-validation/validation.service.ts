import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  static getValidationMessgae(validatorName: string, validatorValue?: any, label?: string) {
    const config = {
      required: `${label} is required`
    };
    return config[validatorName]
  }
}
