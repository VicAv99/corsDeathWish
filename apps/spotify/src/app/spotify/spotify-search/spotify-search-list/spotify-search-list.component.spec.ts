import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifySearchListComponent } from './spotify-search-list.component';

describe('SpotifySearchListComponent', () => {
  let component: SpotifySearchListComponent;
  let fixture: ComponentFixture<SpotifySearchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifySearchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifySearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
