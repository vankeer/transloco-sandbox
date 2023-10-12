// Note: the require inside the try-catch is necessary because ng test already imports setup-jest!
try {
  require('jest-preset-angular/setup-jest');
} catch (error) {
  console.log('The TestBed has already been initialized');
}
