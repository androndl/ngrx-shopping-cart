import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';
import { HttpTestingController } from '@angular/common/http/testing';
import { Product } from '../models/product.model';

// describes the test group
describe('DataService', () => {
  let service: ProductService;
  let httpTestingController: HttpTestingController;
  let testProducts: Product[] = [
    { id: '1', name: 'Product 1', price: 10, quantity: 1 },
    { id: '2', name: 'Product 2', price: 21, quantity: 1 },
    { id: '3', name: 'Product 3', price: 6, quantity: 1 },
    { id: '4', name: 'Product 4', price: 12, quantity: 1 },
  ];
  // Called before each test specification
  beforeEach(() => {
    // configured environment for testing
    TestBed.configureTestingModule({
      imports: [],
    });
    service = TestBed.inject(ProductService);
    // To mock HTTP Requests
    httpTestingController = TestBed.get(HttpTestingController);

    service = TestBed.get(ProductService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created the service', () => {
    expect(service).toBeTruthy();
  });

  it('#getProducts should return the expected data', (done) => {
    service.getProducts().subscribe((data: Array<Product>) => {
      expect(data).toEqual(testProducts);
      expect(data.length).toBeGreaterThan(0);
      done();
    });
  });

});
