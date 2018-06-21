import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(public messageService: MessageService) { }

  getHeroes(): Observable <Hero[]>{
    this.messageService.add('Hero fetched');
    return of(HEROES);
  }

}
