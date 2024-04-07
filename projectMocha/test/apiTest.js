import { expect } from "chai";
import crudController from "../app/crudController.cjs";

describe("API Crud operations UNIT testing", function() {
    describe("Customer Profile Creation using CRUD Operations", function() {
        it("Inserts into DB and gets success message", function() {
            crudController.addOperation('2','Ranga','Girish', function(result) {
                expect(result).to.equal('success');
            });
        });
        it("Gets from DB using ID and gets success message", function() {
            crudController.readOperationWithID('1', function(result) {
                expect(result).to.equal('Vyanktesh');
            });
        });
        it("Gets from DB using Invalid ID and gets Error message", function() {
            crudController.readOperationWithID('5', function(result) {
                expect(result).to.equal('err');
            });
        });
        it("Gets from DB using using Try Read with ID and Succesful", function() {
            crudController.tryreadOperationWithID('1', function(result) {
                expect(result[0]).to.equal('1');
                expect(result[1]).to.equal('Vyanktesh');
                expect(result[2]).to.equal('Chinmay');
            });
        });
        it("Gets from DB using using Try Read with ID and ERROR", function() {
            crudController.tryreadOperationWithID('5', function(result) {
                expect(result).to.equal('err');
            });
        });
    });
});
