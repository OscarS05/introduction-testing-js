describe('group 1', () => {
  beforeAll(() => {
    console.log('beforeAll');
  });
  afterAll(() => {
    console.log('afterAll');
  });
  beforeEach(() => {
    console.log('beforeEach');
  });
  afterEach(() => {
    console.log('afterEach');
  });

  test('Case 1', () => {
    console.log('case 1');
    expect(1 + 1).toBe(2);
  });
  test('Case 2', () => {
    console.log('case 2');
    expect(1 + 2).toBe(2);
  });

  describe('group 1.2', () => {
    beforeAll(() => {
      console.log('beforeAll 1.2');
    });
    test('Case 3', () => {
      console.log('case 3');
      expect(1 + 3).toBe(2);
    });
    test('Case 4', () => {
      console.log('case 4');
      expect(1 + 4).toBe(5);
    });
  });
});
