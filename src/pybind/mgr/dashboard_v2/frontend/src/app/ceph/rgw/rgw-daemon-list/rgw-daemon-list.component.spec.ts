import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableModule } from '../../../shared/datatable/datatable.module';
import { RgwDaemonService } from '../services/rgw-daemon.service';
import { RgwDaemonListComponent } from './rgw-daemon-list.component';

describe('RgwDaemonListComponent', () => {
  let component: RgwDaemonListComponent;
  let fixture: ComponentFixture<RgwDaemonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RgwDaemonListComponent ],
      imports: [
        DataTableModule,
        HttpClientTestingModule,
        HttpClientModule
      ],
      providers: [ RgwDaemonService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RgwDaemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
