const Person = require('./06-person');

describe('Test for person', () => {
  let person;

  beforeEach(() => {
    person = new Person('Nicolas', 45, 1.7);
  });

  test('Should return down', () => {
    person.weight = 45;
    const imc = person.calcIMC();
    expect(imc).toBe('down');
  });

  test('Should return normal', () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
