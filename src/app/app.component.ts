import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'signup-form';
  cryList = ["USD"];
  placess = new FormControl();

  fevoritPlaceList: string[] = ['J&K', 'Mummbai', 'Delhi', 'MP', 'Rameshwaram', 'Tirupati'];
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();
  cityList: string[] = ["Singrauli","Jablapur","Bhopal","Indore"];
  stateList: string[] = ["Madhya Pradesh","Uttar Pradesh", "CG","Bihar","Orisa"];

}
