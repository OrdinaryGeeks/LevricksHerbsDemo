import { BioBlurb } from './bio-blurb.model';

describe('BioBlurb', () => {
  it('should create an instance', () => {
    expect(new BioBlurb(0,"",0, 0, false, false,"",0, true, false, false, false, '', '')).toBeTruthy();
  });
});
