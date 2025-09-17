class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    return `
      <p><strong>Name:</strong> ${this.name}</p>
      <p><strong>Age:</strong> ${this.age}</p>
    `;
  }

  getRole() {
    return "Person";
  }
}

class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  displayInfo() {
    return `
      ${super.displayInfo()}
      <p><strong>Course:</strong> ${this.course}</p>
    `;
  }

  getRole() {
    return "Student";
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  displayInfo() {
    return `
      ${super.displayInfo()}
      <p><strong>Subject:</strong> ${this.subject}</p>
    `;
  }

  getRole() {
    return "Teacher";
  }
}

const people = [
  new Student("Alice", 20, "Computer Science"),
  new Student("Bob", 21, "Mechanical Engineering"),
  new Teacher("Mr. John", 40, "Mathematics"),
  new Teacher("Ms. Smith", 35, "Physics")
];

const listDiv = document.getElementById("list");
const detailsDiv = document.getElementById("details");

people.forEach((person) => {
  const personDiv = document.createElement("div");
  personDiv.className = "person-name";
  personDiv.textContent = person.name;

  personDiv.addEventListener("click", () => {
    detailsDiv.innerHTML = `
      <p><strong>Role:</strong> ${person.getRole()}</p>
      ${person.displayInfo()}
    `;
  });

  listDiv.appendChild(personDiv);
});
