var employee1 = null;
var salary1 = null;

// Об'єкт "Співробітник"
function Employee(surname, name, gender, age) {
  this.surname = surname;
  this.name = name;
  this.gender = gender;
  this.age = age;
}

// Об'єкт "Зарплата"
function Salary(position, rate) {
  this.position = position;
  this.rate = rate;

  this.calculateSalary = function () {
      return this.rate * 160; // Припустимо, що робочий місяць має 160 годин
  };

  this.changeRate = function (newRate) {
      this.rate = newRate;
  };

  this.displayInfo = function () {
      console.log(`Position: ${this.position}, Rate: ${this.rate}`);
  };
}

// Копіювання властивостей і методів
function copyProperties(target, source) {
  for (let key in source) {
      if (source.hasOwnProperty(key)) {
          target[key] = source[key];
      }
  }
}

// Додавання методу в прототип "Співробітник"
Employee.prototype.showData = function () {
  console.log(`Surname: ${this.surname}, Name: ${this.name}, Gender: ${this.gender}, Age: ${this.age}`);
};

// Об'єкт "Керівник"
function Manager(surname, name, gender, age, department) {
  Employee.call(this, surname, name, gender, age);
  this.department = department;

  // Перевизначення методу "Показати дані"
  this.showData = function () {
      console.log(`Surname: ${this.surname}, Name: ${this.name}, Gender: ${this.gender}, Age: ${this.age}, Department: ${this.department}`);
  };
}

// Копіювання методів для "Керівник"
copyProperties(Manager.prototype, Employee.prototype);

// Клас "СпівробітникКлас"
class EmployeeClass {
  constructor(surname, name, gender, age) {
      this.surname = surname;
      this.name = name;
      this.gender = gender;
      this.age = age;
  }

  showData() {
      console.log(`Surname: ${this.surname}, Name: ${this.name}, Gender: ${this.gender}, Age: ${this.age}`);
  }
}

// Клас "КерівникКлас"
class ManagerClass extends EmployeeClass {
  constructor(surname, name, gender, age, department) {
      super(surname, name, gender, age);
      this.department = department;
  }

  showData() {
    super.showData()  
    console.log(` Department: ${this.department}`);
  }
}


// Код для завдань
function executeTask1() {
    alert('Виконання завдання 1');
    employee1 = new Employee('Doe', 'John', 'Male', 30);
    employee1.showData();
}

function executeTask2() {
    alert('Виконання завдання 2');
    salary1 = new Salary('Developer', 25);
    console.log(`Calculated Salary: ${salary1.calculateSalary()}`);
    salary1.changeRate(30);
    console.log(`Updated Rate: ${salary1.rate}`);
    salary1.displayInfo();
}

function executeTask3() {
    alert('Виконання завдання 3');
    let employee2 = new Employee('', '', '', '');
    copyProperties(employee2, employee1);
    copyProperties(employee2, employee1);
    console.log('Copied Employee:', employee2);
}

function executeTask4() {
    alert('Виконання завдання 4');
    Employee.prototype.showData.call(employee1);
}

function executeTask5() {
    alert('Виконання завдання 5');
    let manager1 = new Manager('Smith', 'Jane', 'Female', 35, 'IT');
    manager1.showData();
}

function executeTask6() {
    alert('Виконання завдання 6');
    let employee3 = new EmployeeClass('Brown', 'Bob', 'Male', 28);
    employee3.showData();
    
    let manager2 = new ManagerClass('Johnson', 'Alice', 'Female', 40, 'HR');
    manager2.showData();
}
