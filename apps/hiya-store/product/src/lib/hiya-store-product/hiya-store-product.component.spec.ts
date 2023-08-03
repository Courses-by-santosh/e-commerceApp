import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HiyaStoreProductComponent } from './hiya-store-product.component';

describe('HiyaStoreProductComponent', () => {
  let component: HiyaStoreProductComponent;
  let fixture: ComponentFixture<HiyaStoreProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiyaStoreProductComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HiyaStoreProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
