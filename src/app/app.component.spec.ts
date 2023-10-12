import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { provideRouter } from "@angular/router";
import { getTranslocoTestingModule } from "./get-transloco-testing-module";

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [AppComponent, getTranslocoTestingModule()],
    providers: [provideRouter([])],
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render logo', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const navbarBrand = compiled.querySelector('.navbar-brand')!;
    expect(navbarBrand).toBeTruthy();

    const img = navbarBrand.querySelector('img')!;
    expect(img).toBeTruthy();
    expect(img.src).toContain('/assets/images/logo.svg');
  });
});
