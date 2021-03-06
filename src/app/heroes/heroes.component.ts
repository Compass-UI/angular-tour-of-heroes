import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero :Hero[];
  heroes;
  constructor(private heroService: HeroService) { }
  getHeroes(){
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes()
      .subscribe(
        (heros) => this.heroes = heros
      );
  }
  ngOnInit() {
    this.getHeroes();
  }
  selectedHero: Hero;
  onSelect(hero: Hero){
    this.selectedHero = hero;
  }
}
