import { MyTestPipe } from './my-test.pipe';

describe('MyTestPipe', () => {
  it('create an instance', () => {
    const pipe = new MyTestPipe();
    expect(pipe).toBeTruthy();
  });
});
