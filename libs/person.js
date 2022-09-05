const Person = class {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  hello() {
    return 'hello'
  }
}

module.exports = Person
