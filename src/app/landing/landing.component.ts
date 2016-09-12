import { Component, OnInit, Input } from '@angular/core';
// import { disableDeprecatedForms, provideForms, FormGroup, FormControl, REACTIVE_FORM_DIRECTIVES, Validators, FormBuilder } from '@angular/forms';
import {Headers} from "@angular/http";

import { Speaker } from '../speaker';
import { Lecture } from '../lecture';

import { disableDeprecatedForms, provideForms, FormGroup, FormArray, FormControl, REACTIVE_FORM_DIRECTIVES, Validators, FormBuilder } from '@angular/forms';
import 'rxjs/Rx';


@Component({
  selector: 'landing',
  templateUrl: 'landing.component.html',
  styleUrls: ['landing.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES],
})
export class LandingComponent implements OnInit {
  public myForm: FormGroup;
  lectures: FormArray;
  
  speaker: Speaker;
  errorMessage: string = '';
  isLoading: boolean = true;

  public infoGroup1DueDate: string;
  public infoGroup2DueDate = "11/12/16";
  public infoGroup3DueDate = "12/31/16";

  user:any;
  constructor(private _fb: FormBuilder) {

      // Sample data...tried to get it working hard-coding data at first...then I was going to pull from an actual web server, but didn't want to complicate it at first.
      this.user =  
      {
        "firstname": "First",
        "lastname": "Last",
        "credentials": "Cred",
        "address": {
          "street1": "123 Main St.",
          "street2": "112-323",
          "city": "Corona",
          "zip": "92883",
        "lectures": [
            {
              "title": "1",
              "description": "2",
              "objective": "3",
              "outline": "4",
            },
            {
              "title": "11",
              "description": "22",
              "objective": "33",
              "outline": "44",
            }
          ]
        }
      }

      this.myForm = _fb.group({
        firstname: ['',
            [
              Validators.required,
              Validators.minLength(5)
            ]
          ],
        lastname: ['',[
          Validators.required
        ]],
        credentials: ['',[
          Validators.required
        ]],
        address: this._fb.group({
          street1: [],
          street2: [],
          city: [],
          zipcode: ['',[
            Validators.minLength(5),
            Validators.maxLength(5),
            Validators.pattern('[0-9]+')
          ]]
        }),
        lectures: this.buildArray()
    });

    // this.lectures. .lectures.forEach(
    //   console.log("testleccount")
    //   // lect => this.myForm.controls.lectures.push(this.rebindLectures(lect))
    // )
  }

// // This was my attempt at filling the FormArray with the simulated server data

// rebindLectures(lectObj) {
//   console.log("lectObj", lectObj);
//   return new FormGroup({
//     title: new FormControl(lectObj.title),
//     description: new FormControl(lectObj.description),
//     objective: new FormControl(lectObj.objective),
//     outline: new FormControl(lectObj.outline)
//   });
// }


buildArray(): FormArray {
  this.lectures = this._fb.array([
    this.buildGroup()
  ]);
  return this.lectures;
}

buildGroup(): FormGroup {
  return this._fb.group({
    title: '',
    description: '',
    objective: '',
    outline: ''
  });
}
  addLecture() {
    this.lectures.push(this.buildGroup());
  }
  removeLecture(i: number) {
    console.log("i: " + i);
    this.lectures.removeAt(i);
  }

  ngOnInit() {}

  partialLoad() {
    // Me testing sending data to the form fields

    // // this.myForm.patchValue({name: 'Partial'});
    // this.myForm.patchValue({name: this.people[1].name});
    // console.log("people:" + JSON.parse(JSON.stringify(this.people)));
    // console.log("person 0:" + JSON.parse(JSON.stringify(this.people[0].name)));
  }
  reset() {
    this.myForm.reset();  // Resets everything back to pristine and untouched.
  }
  save(){
    // Haven't implemented this yet
  }

}
