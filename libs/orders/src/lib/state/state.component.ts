import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateService } from './state.service';

@Component({
  selector: 'org-state',
  standalone: true,
  imports: [CommonModule],
  providers: [StateService],
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StateComponent {
  status$ = this.stateService.status$;

  constructor(public stateService: StateService) {}

  updateStatus(status: string) {
    this.stateService.updateStatus(status);
  }
}
