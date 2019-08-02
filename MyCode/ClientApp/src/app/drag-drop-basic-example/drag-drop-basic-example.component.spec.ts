import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropBasicExampleComponent } from './drag-drop-basic-example.component';

describe('DragDropBasicExampleComponent', () => {
  let component: DragDropBasicExampleComponent;
  let fixture: ComponentFixture<DragDropBasicExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragDropBasicExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropBasicExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
