import {Component} from '@angular/core';
import {DashboardService} from './dashboard.service';

@Component({
	selector: 'DashboardComponent',
	templateUrl: './dashboard.component.html',
	providers: [DashboardService],
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
	rows: any;

	constructor(private dashboardService: DashboardService) {
	}

	ngOnInit() {
		this.dashboardService.getAllData().subscribe(data => {
			this.loadRows(data);
		});
	}
  loadRows(response) {
    this.rows = response.data;
  }
}
