import { Project } from './project';

describe('Project', () => {
  it('should create an instance', () => {
    expect(new Project(0,"","","","","")).toBeTruthy();
  });
});
