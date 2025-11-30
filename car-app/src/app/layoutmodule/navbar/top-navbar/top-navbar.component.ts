import { StateServiceService } from './../../../Core/Services/state_service/state-service.service';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-navbar',
  standalone: false,
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.scss',
})
export class TopNavbarComponent implements OnInit{
  private readonly stateService = inject(StateServiceService);
  getState(event: string) {
    this.stateService.getStateSubject(event);
  }
  state = '';

  ngOnInit(): void {
    this.stateService._stateSubject.subscribe((data: string) => {
      this.state = data;
      console.log('state', this.stateService.getStateSubjectVal());
    });
  }
}
