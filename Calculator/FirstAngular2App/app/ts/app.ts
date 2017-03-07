/// <reference path="../../node_modules/angular2/bundles/typings/es6-shim/es6-shim.d.ts" />
/// <reference path="../../node_modules/angular2/bundles/typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from "angular2/angular2";

@Component(
    {

        selector: 'calculator'
    })
@View({
        templateUrl: 'Calculator.html'
})
  
class Calculator {
    
    operand_a: string;
    operand_b: string;
    operator: string;
    result: string;
    decimalFlag: boolean;
    
    constructor() {
        this.operand_a = '0';
        this.operand_b = '0';
        this.operator = '';
        this.result = '0';
        this.decimalFlag = false;
    }
    assignOperand(temp: string)
    {
        if (this.operand_a == "0") {
            this.operand_a = "";
        }
        if (this.operand_b == "0")
        {
            this.operand_b = "";
        }
        
        if (this.operator == "")
        {
            if(temp != "." || (!this.decimalFlag))
                this.operand_a += temp;
        }
        else
        {
            if (temp != "." || (!this.decimalFlag))
                this.operand_b += temp;
        }

        if (temp == ".")
            this.decimalFlag = true;

        this.display();
    }
    assignOperator(temp: string)
    {
        this.operator = temp;
        this.decimalFlag = false;
        this.display();
    }
    clear()
    {
        this.operand_a = '0';
        this.operand_b = '0';
        this.operator = '';
        this.result = '0';
        this.decimalFlag = false;
    }
    evaluate()
    {
        if (this.operator == "^")
            this.power();
        else
            this.result = eval(parseFloat(this.operand_a) + this.operator + parseFloat(this.operand_b));
        
        this.clearVarOnly();
    }
    display()
    {
        this.result = this.operand_a + this.operator + this.operand_b;
    }
    sqrt()
    {
        this.result = Math.sqrt(parseFloat(this.operand_a)).toString();
        this.clearVarOnly();
    }
    power() {
        this.result = Math.pow(parseFloat(this.operand_a), parseFloat(this.operand_b)).toString();
        this.clearVarOnly();
    }
    clearVarOnly()
    {
        this.operand_a = '0';
        this.operand_b = '0';
        this.operator = '';
        this.decimalFlag = false;
    }
}
bootstrap(Calculator);