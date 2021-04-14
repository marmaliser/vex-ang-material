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
import { MatRadioChange } from '@angular/material/radio';
import { aioTableLabels } from 'src/static-data/aio-table-data';

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
  patientFormGroup: FormGroup;
  insuranceFormGroup: FormGroup;
  diagnosisFormGroup: FormGroup;
  summeryFormGroup: FormGroup;
  customDiagnosis = false;

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

    this.patientFormGroup = this.fb.group({
      patientFirstName: ['', Validators.required],
      patientLastName: ['', Validators.required],
      patientAddress: ['', Validators.required],
      patientCity: ['', Validators.required],
      patientState: ['', Validators.required],
      patientZipCode: ['', Validators.required],
      patientPhoneNumber: ['', Validators.required],
      patientEmail: ['', [Validators.required, Validators.email]],
      patientSex: ['', Validators.required],
      patientSsn: ['', Validators.required],
      patientDob: ['', Validators.required],
      guardianName: ['', Validators.required],
      guardianEmail: ['', [Validators.required, Validators.email]],
      groupHomeName: ['', Validators.required],
    });

    this.insuranceFormGroup = this.fb.group({
      insurerNamePrimary: ['', Validators.required],
      insurerPhoneNumberPrimary: ['', Validators.required],
      insurerSubscriberNamePrimary: [''],
      insurerEmployeePlanNamePrimary: ['', Validators.required],
      insurerPolicyNumberPrimary: ['', Validators.required],
      insurerGroupNumberPrimary: ['', Validators.required],
      insurerProviderIdNumberPrimary: ['', Validators.required],
      insurerNameSecondary: [''],
      insurerPhoneNumberSecondary: [''],
      insurerSubscriberNameSecondary: [''],
      insurerEmployeePlanNameSecondary: [''],
      insurerPolicyNumberSecondary: [''],
      insurerGroupNumberSecondary: [''],
      insurerProviderIdNumberSecondary: [''],
    });

    this.diagnosisFormGroup = this.fb.group({
      diagnosisRadio: ['', Validators.required],
    });

    this.summeryFormGroup = this.fb.group({});
  }

  physicianSelectionChange(event: MatSelectChange) {
    if (event.value) {
      this.physicianCreateMode = false;
      this.physicianFormGroup.removeControl('physicianName');
      this.physicianFormGroup.removeControl('physicianEmail');
      this.physicianFormGroup.removeControl('physicianNpi');
      this.physicianFormGroup.get('physicianSelect').setValidators([Validators.required]);
      this.physicianFormGroup.get('physicianSelect').updateValueAndValidity();
    } else {
      this.physicianCreateMode = true;
      this.physicianFormGroup.addControl('physicianName', new FormControl('', Validators.required));
      this.physicianFormGroup.addControl('physicianEmail', new FormControl('', [Validators.required, Validators.email]));
      this.physicianFormGroup.addControl('physicianNpi', new FormControl('', Validators.required));
      this.physicianFormGroup.get('physicianSelect').clearValidators();
      this.physicianFormGroup.get('physicianSelect').updateValueAndValidity();
    }
  }

  surgeonSelectionChange(event: MatSelectChange) {
    if (event.value) {
      this.surgeonCreateMode = false;
      this.surgeonFormGroup.removeControl('surgeonName');
      this.surgeonFormGroup.removeControl('surgeonEmail');
      this.surgeonFormGroup.removeControl('surgeonNpi');
      this.surgeonFormGroup.get('surgeonSelect').setValidators([Validators.required]);
      this.surgeonFormGroup.get('surgeonSelect').updateValueAndValidity();
    } else {
      this.surgeonCreateMode = true;
      this.surgeonFormGroup.addControl('surgeonName', new FormControl('', Validators.required));
      this.surgeonFormGroup.addControl('surgeonEmail', new FormControl('', [Validators.required, Validators.email]));
      this.surgeonFormGroup.addControl('surgeonNpi', new FormControl('', Validators.required));
      this.surgeonFormGroup.get('surgeonSelect').clearValidators();
      this.surgeonFormGroup.get('surgeonSelect').updateValueAndValidity();
    }
  }

  diagnosisRadioChange(event: MatRadioChange) {
    if (event.value) {
      this.customDiagnosis = false;
      this.diagnosisFormGroup.removeControl('diagnosisInput');
      this.diagnosisFormGroup.removeControl('diagnosisInput');
      this.diagnosisFormGroup.get('diagnosisRadio').setValidators([Validators.required]);
      this.diagnosisFormGroup.get('diagnosisRadio').updateValueAndValidity();
    } else {
      this.customDiagnosis = true;
      this.diagnosisFormGroup.addControl('diagnosisInput', new FormControl('', Validators.required));
      this.diagnosisFormGroup.get('diagnosisRadio').clearValidators();
      this.diagnosisFormGroup.get('diagnosisRadio').updateValueAndValidity();
    }
  }

  isAllValid(): boolean {
    return (
      this.physicianFormGroup.valid &&
      this.surgeonFormGroup.valid &&
      this.patientFormGroup.valid &&
      this.insuranceFormGroup.valid &&
      this.diagnosisFormGroup.valid &&
      this.summeryFormGroup.valid
    );
  }

  save() {
    if (this.mode === 'create') {
      this.createCustomer();
    } else if (this.mode === 'update') {
      this.updateCustomer();
    }
  }

  createCustomer() {
    const customer = new Customer({
      imageSrc: 'assets/img/avatars/1.png',
      firstName: this.patientFormGroup.value.patientFirstName,
      lastName: this.patientFormGroup.value.patientLastName,
      street: this.patientFormGroup.value.patientAddress,
      zipcode: this.patientFormGroup.value.patientZipCode,
      city: this.patientFormGroup.value.patientCity,
      phoneNumber: this.patientFormGroup.value.patientPhoneNumber,
      mail: this.patientFormGroup.value.patientEmail,
      labels: [aioTableLabels[0], aioTableLabels[2]],
    });

    this.dialogRef.close(customer);
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
