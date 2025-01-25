// imports and applies the jest extensions
import 'tsarch/dist/jest';

// imports the files entrypoint
import { filesOfProject } from 'tsarch';

describe('Account Arch test', () => {
  jest.setTimeout(600000);

  describe('entities', () => {
    it('should not import any files outside the entities folder', async () => {
      const violations = await filesOfProject()
        .inFolder('src/account/domain/entities')
        .shouldNot()
        .matchPattern('*.ts')
        .check();

      expect(violations).toHaveLength(0);
    });
  });

  describe('services', () => {
    it('should not depend on files in the adapters folder', async () => {
      const violations = await filesOfProject()
        .inFolder('src/account/application/services')
        .shouldNot()
        .dependOnFiles()
        .inFolder('src/account/adapters')
        .check();

      expect(violations).toHaveLength(0);
    });
  });

  describe('in adapters', () => {
    it('should not depend on in/out ports or domain models', async () => {
      const violations = await filesOfProject()
        .inFolder('src/account/adapters/in')
        .shouldNot()
        .dependOnFiles()
        .inFolder('src/account/application')
        .inFolder('src/account/adapters')
        .inFolder('src/account/domain')
        .check();

      expect(violations).toHaveLength(0);
    });
  });
});
