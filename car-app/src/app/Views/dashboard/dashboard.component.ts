import { Component, inject, OnInit } from '@angular/core';
import { StateServiceService } from '../../Core/Services/state_service/state-service.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  private readonly stateService = inject(StateServiceService);
  state = '';

  ngOnInit(): void {
    this.stateService._stateSubject.subscribe((data: string) => {
      this.state = data;
      console.log('state', this.stateService.getStateSubjectVal());
    });
  }
}
