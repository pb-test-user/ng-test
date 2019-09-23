import { TestBed } from '@angular/core/testing';

import { PostsResolver } from './posts.service';

describe('PostsResolver', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostsResolver = TestBed.get(PostsResolver);
    expect(service).toBeTruthy();
  });
});
