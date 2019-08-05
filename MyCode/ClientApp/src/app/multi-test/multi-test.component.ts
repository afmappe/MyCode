import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription, timer } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-multi-test',
  templateUrl: './multi-test.component.html',
  styleUrls: ['./multi-test.component.scss']
})
export class MultiTestComponent implements OnInit, OnDestroy, AfterViewInit {

  form: FormGroup;
  sub: Subscription;

  days: number;
  hours: number;
  minutes: number;
  seconds: number;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) { }

  public get items(): any {
    return this.form.get('items');
  }

  public get totalItems(): number {
    const formArray = this.items as FormArray;
    return formArray.length;
  }

  public getFormItems(): any {
    const items = this.items as FormGroup;
    return items.controls;
  }

  public getValues(index: number): string {
    const items: FormGroup[] = this.getFormItems();
    const text = items[index];
    return text.get('text').value;
  }

  public getLastIndex(): number {
    const items: FormGroup[] = this.getFormItems();
    const index: number = items.length - 1;
    return index;
  }

  ngOnInit() {
    this.initForm();

    const t = timer(1000, 1000);
    this.sub = t.subscribe(tick => {
      this.dateDiff();
    });

  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
      this.sub = null;
    }
  }

  onError(): void {
    this.toastr.error('Hello World', 'Hello Title')
      .onTap
      .pipe(delay(1))
      .subscribe(() => this.toasterClickedHandler());;
  }

  toasterClickedHandler() {
    console.log('Toastr clicked');
  }

  public addItem(): void {

    const items: FormGroup[] = this.getFormItems();
    const index: number = items.length - 1;
    const text = items[index];

    if (items.some(x => x.value === text.value) || index === 0) {
      const item: FormGroup = this.formBuilder.group({
        text: new FormControl(text.value)
      });

      items.push(item);
      this.onClearText();

    }
  }

  public dateDiff(): void {

    const day = 86400000; //(24 * 3600 * 1000)
    const week = 604800000; //(24 * 3600 * 1000 * 7)

    const d1: Date = new Date('Sep, 06, 2019');
    const d2: Date = new Date();

    const t1: number = d1.getTime();
    const t2: number = d2.getTime();

    let delta = Math.abs(t1 - t2) / 1000;

    // calculate (and subtract) whole days
    this.days = Math.floor(delta / 86400);
    delta -= this.days * 86400;

    // calculate (and subtract) whole hours
    this.hours = Math.floor(delta / 3600) % 24;
    delta -= this.hours * 3600;

    // calculate (and subtract) whole minutes
    this.minutes = Math.floor(delta / 60) % 60;
    delta -= this.minutes * 60;

    // what's left is seconds
    this.seconds = Math.trunc(delta % 60);  // in theory the modulus is not required

  }

  public onClearText(): void {
    const items: FormGroup[] = this.getFormItems();
    const index: number = items.length - 1;
    const text = items[index];
    text.get('text').setValue('');
  }

  public removeItem(index: number): void {
    const formArray = this.items as FormArray;
    formArray.removeAt(index);
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      items: this.formBuilder.array([])
    });
    const items: FormGroup[] = this.getFormItems();
    const item: FormGroup = this.formBuilder.group({
      text: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$')])
    });
    items.push(item);
  }

}
