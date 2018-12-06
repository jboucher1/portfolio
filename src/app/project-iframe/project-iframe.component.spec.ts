import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectIframeComponent } from './project-iframe.component';

describe('ProjectIframeComponent', () => {
  let component: ProjectIframeComponent;
  let fixture: ComponentFixture<ProjectIframeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectIframeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
