/* eslint-disable no-undef */
const Car = require('./car')

function foo() {
  return 'the foo'
}

// Test away!
describe('our first tests', () => {
  test('sanity', () => {
    expect(5).toBe(5)
    expect(5).toBe(3 + 2)
    expect(5).toBeDefined()
  })

  test('objects', () => {
    const o = { a: 1 }
    const oo = { a: 1 }
    const ooo = oo
    expect(o).toBe(o)
    expect(oo).toBe(ooo)
  })
  test('objects again', () => {
    expect({ a: 1 }).toEqual({ a: 1 })
  })
})
describe('foo function', () => {
  test('foo returns the foo', () => {
    expect(foo()).toBe('the foo')
    expect(foo()).toHaveLength(7)

  })
})
describe('car class', () => {
  let prius
  beforeEach(() => {
    prius = new Car('toyota', 'prius')
  })
  test('it is defined', () => {
    expect(Car).toBeDefined()
    expect(Car).toBeInstanceOf(Function)
  })
  test('has model and make', () => {
    expect(prius).toHaveProperty('make', 'toyota')
    expect(prius).toHaveProperty('model', 'prius')
    expect(prius.make).toBeDefined()
    expect(prius.model).toBeDefined()
    expect(prius.make).toBe('toyota')
    expect(prius.model).toBe('prius')
    expect(prius).toMatchObject({ make: 'toyota', model: 'prius' })
  })
  test('new cars start with the odemeter at zero', () => {
    const camry = new Car('toyota', 'camry', 0)
    expect(camry).toHaveProperty('make', 'toyota')
    expect(camry).toHaveProperty('odometer', 0)
  })
  test('cars have a drive method', () => {
    expect(prius.drive).toBeDefined()
    expect(prius.drive).toBe(Car.prototype.drive)
  })
  test('drive method takes distance and increases odometer by that disaster', () => {
    prius.drive(10)
    expect(prius.odometer).toBe(10)
    prius.drive(5)
    expect(prius.odometer).toBe(15)
  })
  test('driveAsync method returns the updated odometer ', async () => {
    let updateOdometer = await prius.driveAsync(7)
    expect(updateOdometer).toBe(7)
    updateOdometer = await prius.driveAsync(5)
    expect(updateOdometer).toBe(12)

  })
})