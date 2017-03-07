/// <reference path="../../node_modules/angular2/bundles/typings/es6-shim/es6-shim.d.ts" />
/// <reference path="../../node_modules/angular2/bundles/typings/angular2/angular2.d.ts" />
System.register(["angular2/angular2"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var angular2_1;
    var Calculator;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            Calculator = (function () {
                function Calculator() {
                    this.operand_a = '0';
                    this.operand_b = '0';
                    this.operator = '';
                    this.result = '0';
                    this.decimalFlag = false;
                }
                Calculator.prototype.assignOperand = function (temp) {
                    if (this.operand_a == "0") {
                        this.operand_a = "";
                    }
                    if (this.operand_b == "0") {
                        this.operand_b = "";
                    }
                    if (this.operator == "") {
                        if (temp != "." || (!this.decimalFlag))
                            this.operand_a += temp;
                    }
                    else {
                        if (temp != "." || (!this.decimalFlag))
                            this.operand_b += temp;
                    }
                    if (temp == ".")
                        this.decimalFlag = true;
                    this.display();
                };
                Calculator.prototype.assignOperator = function (temp) {
                    this.operator = temp;
                    this.decimalFlag = false;
                    this.display();
                };
                Calculator.prototype.clear = function () {
                    this.operand_a = '0';
                    this.operand_b = '0';
                    this.operator = '';
                    this.result = '0';
                    this.decimalFlag = false;
                };
                Calculator.prototype.evaluate = function () {
                    if (this.operator == "^")
                        this.power();
                    else
                        this.result = eval(parseFloat(this.operand_a) + this.operator + parseFloat(this.operand_b));
                    this.clearVarOnly();
                };
                Calculator.prototype.display = function () {
                    this.result = this.operand_a + this.operator + this.operand_b;
                };
                Calculator.prototype.sqrt = function () {
                    this.result = Math.sqrt(parseFloat(this.operand_a)).toString();
                    this.clearVarOnly();
                };
                Calculator.prototype.power = function () {
                    this.result = Math.pow(parseFloat(this.operand_a), parseFloat(this.operand_b)).toString();
                    this.clearVarOnly();
                };
                Calculator.prototype.clearVarOnly = function () {
                    this.operand_a = '0';
                    this.operand_b = '0';
                    this.operator = '';
                    this.decimalFlag = false;
                };
                Calculator = __decorate([
                    angular2_1.Component({
                        selector: 'calculator'
                    }),
                    angular2_1.View({
                        templateUrl: 'Calculator.html'
                    })
                ], Calculator);
                return Calculator;
            }());
            angular2_1.bootstrap(Calculator);
        }
    }
});
//# sourceMappingURL=app.js.map