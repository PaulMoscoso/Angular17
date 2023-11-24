import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempletaViewComponent } from './templeta-view.component';

describe('TempletaViewComponent', () => {
  let component: TempletaViewComponent;
  let fixture: ComponentFixture<TempletaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempletaViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TempletaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
