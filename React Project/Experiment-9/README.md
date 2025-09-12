# Person Class Hierarchy with Student and Teacher Subclasses – Experiment 9

## Introduction
This experiment demonstrates **object-oriented programming (OOP)** concepts in JavaScript using ES6 classes. It creates a class hierarchy with inheritance, method overriding, and polymorphism - essential patterns for building structured, maintainable applications.

## Core OOP Concepts Demonstrated
### Inheritance
- **Base Class**: `Person` with common properties (name, age)
- **Subclasses**: `Student` and `Teacher` extend `Person`
- **Code Reuse**: Subclasses inherit properties and methods from parent

### Encapsulation
- **Properties**: Data stored within class instances
- **Methods**: Behaviors encapsulated within each class

### Polymorphism
- **Method Overriding**: Subclasses override `displayInfo()` and `getRole()`
- **Same Interface**: Different implementations through inherited methods

## Class Hierarchy
Person (Base Class)
├── name: string
├── age: number
├── displayInfo(): string
├── getRole(): string
│
├── Student (Subclass)
│   ├── grade: string
│   ├── course: string
│   ├── displayInfo(): string (overridden)
│   ├── getRole(): string (overridden)
│   └── study(): string (unique method)
│
└── Teacher (Subclass)
    ├── subject: string
    ├── department: string
    ├── displayInfo(): string (overridden)
    ├── getRole(): string (overridden)
    └── teach(): string (unique method)

## Code Explanation

### Base Class Setup
- **Person class**: Base class with `name`, `age` properties
- **Core methods**: `displayInfo()` returns basic details, `getRole()` returns "Person"

### Student Subclass
- **Extends Person**: Inherits all Person properties/methods
- **Additional properties**: `grade`, `course` (academic-specific)
- **Method overriding**: Custom `displayInfo()` includes academic details
- **Unique method**: `study()` - student-specific behavior

### Teacher Subclass  
- **Extends Person**: Inherits from Person class
- **Additional properties**: `subject`, `department` (professional-specific)
- **Method overriding**: Custom `displayInfo()` includes teaching details
- **Unique method**: `teach()` - teacher-specific behavior

### Key Techniques
- **super()**: Calls parent constructor to initialize inherited properties
- **super.method()**: Extends parent methods instead of replacing them
- **Method overriding**: Subclasses provide specialized implementations
- **Polymorphism**: Different objects responding to same method calls differently

### Demonstration
- Creates instances of Student and Teacher
- Shows inherited and overridden methods working
- Demonstrates polymorphism with array of different person types
- Validates inheritance with instanceof checks

## Execution Instructions
### Running the Application
To execute this Person class hierarchy demonstration, run the following command in your terminal:
- cd Experiment-9
- node Person.js

## Key JavaScript Features
- **ES6 Classes**: Modern class syntax with constructor and methods
- **extends**: Creates inheritance between classes
- **super**: Accesses parent class constructor and methods
- **Method Overriding**: Subclasses provide custom implementations
- **instanceof**: Type checking for class inheritance

## Real-World Applications
-Educational Systems
- Human Resources
- Enterprise Applications


## What I Learned
### Technical Skills
- Implementing classical inheritance in JavaScript
- Method overriding and polymorphism patterns
- Using `super()` for parent constructor calls
- Creating specialized class hierarchies

### Practical Applications
- Building scalable class architectures
- Creating maintainable code through inheritance
- Implementing role-based systems
- Developing extensible software systems

## Output Demonstration
The code successfully demonstrates:
- Inheritance through `instanceof` checks
- Method overriding with customized information
- Polymorphism handling different object types
- Unique methods specific to each subclass
- Proper constructor chaining with `super()`