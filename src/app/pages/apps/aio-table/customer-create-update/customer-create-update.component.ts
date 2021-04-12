import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Customer } from '../interfaces/customer.model';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icClose from '@iconify/icons-ic/twotone-close';
import icPrint from '@iconify/icons-ic/twotone-print';
import icDownload from '@iconify/icons-ic/twotone-cloud-download';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icPerson from '@iconify/icons-ic/twotone-person';
import icMyLocation from '@iconify/icons-ic/twotone-my-location';
import icLocationCity from '@iconify/icons-ic/twotone-location-city';
import icEditLocation from '@iconify/icons-ic/twotone-edit-location';
import { MatSelect, MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'vex-customer-create-update',
  templateUrl: './customer-create-update.component.html',
  styleUrls: ['./customer-create-update.component.scss'],
})
export class CustomerCreateUpdateComponent implements OnInit {
  static id = 100;

  physicianFormGroup: FormGroup;
  physicianCreateMode = false;
  surgeonFormGroup: FormGroup;
  surgeonCreateMode = false;
  mode: 'create' | 'update' = 'create';

  icMoreVert = icMoreVert;
  icClose = icClose;

  icPrint = icPrint;
  icDownload = icDownload;
  icDelete = icDelete;

  icPerson = icPerson;
  icMyLocation = icMyLocation;
  icLocationCity = icLocationCity;
  icEditLocation = icEditLocation;
  icPhone = icPhone;
  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<CustomerCreateUpdateComponent>,
    private fb: FormBuilder
  ) {}

  physicianSelectionChange(event: MatSelectChange) {
    if (event.value == 'null') {
      this.physicianCreateMode = true;
      this.physicianFormGroup.addControl('physicianName', new FormControl('', Validators.required));
      this.physicianFormGroup.addControl('physicianEmail', new FormControl('', [Validators.required, Validators.email]));
      this.physicianFormGroup.addControl('physicianNpi', new FormControl('', Validators.required));
    } else {
      this.physicianCreateMode = false;
      this.physicianFormGroup.removeControl('physicianName');
      this.physicianFormGroup.removeControl('physicianEmail');
      this.physicianFormGroup.removeControl('physicianNpi');
    }
  }

  surgeonSelectionChange(event: MatSelectChange) {
    if (event.value == 'null') {
      this.surgeonCreateMode = true;
      this.surgeonFormGroup.addControl('surgeonName', new FormControl('', Validators.required));
      this.surgeonFormGroup.addControl('surgeonEmail', new FormControl('', [Validators.required, Validators.email]));
      this.surgeonFormGroup.addControl('surgeonNpi', new FormControl('', Validators.required));
    } else {
      this.surgeonCreateMode = false;
      this.surgeonFormGroup.removeControl('surgeonName');
      this.surgeonFormGroup.removeControl('surgeonEmail');
      this.surgeonFormGroup.removeControl('surgeonNpi');
    }
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as Customer;
    }
    this.physicianFormGroup = this.fb.group({
      physicianSelect: ['', Validators.required],
    });
    this.surgeonFormGroup = this.fb.group({
      surgeonSelect: ['', Validators.required],
      surgeonHospital: ['', Validators.required],
      surgeonComments: ['', Validators.required],
      surgeryDatepicker: ['', Validators.required],
    });
  }

  save() {
    if (this.mode === 'create') {
      this.createCustomer();
    } else if (this.mode === 'update') {
      this.updateCustomer();
    }
  }

  createCustomer() {
    // const customer = this.form.value;
    // if (!customer.imageSrc) {
    //   customer.imageSrc = 'assets/img/avatars/1.png';
    // }
    // this.dialogRef.close(customer);
  }

  updateCustomer() {
    // // const customer = this.form.value;
    // customer.id = this.defaults.id;
    // this.dialogRef.close(customer);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
