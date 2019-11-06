"use strict";
/* global describe */
/* global it */
/* global assert */
/* global Employee */
/* global nameComparator */
/* global SalComparator */
/* global hireDateComparator */



describe("nameComparator", function() {

    let employees = [
        new Employee("George", 40000, 1996, 11, 5),
        new Employee("Dave", 50000, 2000, 1, 3),
        new Employee("Richard", 45000, 2001, 2, 7)
    ];
    it("Compares Employees by name", function() {
        assert.equal(employees.sort(nameComparator)[0].name, "Dave");
    });
});

describe("SalaryComparator", function() {

    let employees = [
        new Employee("George", 40000, 1996, 11, 5),
        new Employee("Dave", 50000, 2000, 1, 3),
        new Employee("Richard", 45000, 2001, 2, 7)
    ];
    it("Compares Employees by salary", function() {
        assert.equal(employees.sort(SalComparator)[1].salary, 45000);
    });
});


describe("HireDateComparator", function() {

    let employees = [
        new Employee("George", 40000, 1996, 11, 5),
        new Employee("Dave", 50000, 2000, 1, 3),
        new Employee("Richard", 45000, 2001, 2, 7),
        new Employee("Mahmoud", 45000, 1950, 2, 7)

    ];
    it("Compares Employees by HireDate", function() {
        assert.equal(employees.sort(hireDateComparator)[0].name, "Mahmoud");
    });
});