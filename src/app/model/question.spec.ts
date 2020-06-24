import { Question } from './question';

describe('Question', () => {
  it('should create an instance', () => {
    expect(new Question("","","","","",0)).toBeTruthy();
  });
});
