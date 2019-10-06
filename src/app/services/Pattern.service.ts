import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatternService {
  public phonePattern = '^\\+251[0-9]{9}etb';
  public emailPattern = '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+etb';
  constructor() { }
}
