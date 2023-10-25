import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

const jestConfig = {
  preset: 'jest-preset-angular',
  transformIgnorePatterns: ['node_modules/(?!.*\\.m?js$)'],
  // transform: {
  //   '^.+\\.(ts|js|html|svg)$': [
  //     'jest-preset-angular',
  //     {
  //       tsconfig: '<rootDir>/tsconfig.spec.json',
  //       stringifyContentPathRegex: '\\.(html|svg)$',
  //       isolatedModules: true,
  //       useESM: true,
  //     },
  //   ],
  // },
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' }),
    flat: '<rootDir>/node_modules/flat/index.js',
  },
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  roots: ['<rootDir>'],
  modulePaths: ['<rootDir>'],
  moduleDirectories: ['node_modules'],
  globals: {
    'ts-jest': {
      allowSyntheticDefaultImports: true,
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
      isolatedModules: true,
      resolveJsonModule: true,
    },
  },
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  testPathIgnorePatterns: ['<rootDir>\/node_modules\/'],
};

export default jestConfig;
