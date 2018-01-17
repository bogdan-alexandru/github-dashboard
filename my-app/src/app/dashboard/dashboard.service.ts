import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DashboardService {

	constructor(private http: HttpClient) {
	}

	getAllData() {
		const url = 'http://localhost:3000/dashboard';
		return this.http.get(url)
			.map((response)  => response);
	}

}
