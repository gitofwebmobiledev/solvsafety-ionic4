import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-action',
  templateUrl: './add-action.page.html',
  styleUrls: ['./add-action.page.scss'],
})
export class AddActionPage implements OnInit {
	report = {
		description: '',
		type: '',
		date: '',
	};

  constructor() { }

  ngOnInit() {
  }

  onSave() {

  }

  onCancel() {

  }

}
