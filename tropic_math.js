class tropicNumber{
    constructor(x){
        this.value = x;
    }

    add(x){
        this.value = Math.min(this.value, x);
        return this;
    }

    multiply(x){
        this.value += x;
        return this;
    }
    
    divide(x){
        this.value -= x;
        return this;
    }

    power(n){
        return this.value * n;
    }
}

class tropicVariable {
    //Takes a tropic number
    constructor(x, degree){
        this.value = x;
        this.degree = degree || 1;
    }

    compute(){
        var x = this.value;
        return x.power(this.degree);
    }

    multiply(x){
        var number = new tropicNumber(x.value.value + this.value.value);
        return number;
    }
}

class tropicTerm {
    constructor(variables, coefficient){
        this.variables = variables || [];
        this.coefficient = coefficient || new tropicNumber(1);
    }

    compute(){
        var ret = new tropicVariable(0);
        for(var x of this.variables){
            ret.multiply(x);
        }
        return new tropicNumber(ret.multiply(this.coefficient).value);
    }
}

class tropicBinomial {

}

//A polynomial object representing a list of tropicTerms.
class tropicPolynomial {
    constructor(tropicTerms){
        this.tropicTerms = tropicTerms || [];
    }

    compute() {
        var ret = new tropicNumber(Number.POSITIVE_INFINITY);
        for(var term of tropicTerms){
            ret.add(term.compute());
        }

        return ret;
    }
}

class tropicMatrix {
    
}