import { Candidate } from './candidate';

describe('Candidate', () => {
  it('should create an instance', () => {
    expect(new Candidate(0,"","",0,0,0)).toBeTruthy();
  });
});
