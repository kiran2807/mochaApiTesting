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
    });
});
