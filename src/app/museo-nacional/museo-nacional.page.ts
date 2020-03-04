import { Component, OnInit } from '@angular/core';
// import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-museo-nacional',
  templateUrl: './museo-nacional.page.html',
  styleUrls: ['./museo-nacional.page.scss'],
})
export class MuseoNacionalPage implements OnInit {

  public exposiciones = [
    {
      title: 'Expo1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      textoAlternativo:'texto alternativo imagen expo 1',
      image: 'assets/Exposiciones/Expo1.jpg'
    },
    {
      title: 'Expo2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      textoAlternativo:'texto alternativo imagen expo 2',
      image: 'assets/Exposiciones/Expo2.jpg'
    },
    {
      title: 'Expo3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      textoAlternativo:'texto alternativo imagen expo 3',
      image: 'assets/Exposiciones/Expo3.jpg'
    },
    {
      title: 'Expo4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      textoAlternativo:'texto alternativo imagen expo 4',
      image: 'assets/Exposiciones/Expo4.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {


  }

  // beforeChange($event: NgbTabChangeEvent) {
  //   // dont do anything if id matches
  //   if ($event.nextId === 'tab-4') {
  //     $event.preventDefault();
  //   }
  // }
}
