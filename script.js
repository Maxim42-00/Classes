class Person
{
    constructor(_name, _lastname, _age)
    {
        this._name=_name;
        this._lastname=_lastname;
        this._age=_age;
    }
    get name()
    {
        return this._name;
    }

    get lastname()
    {
        return this._lastname;
    }

    get age()
    {
        return this._age;
    }

    set name(_name)
    {
        this._name = _name;
    }

    set lastname(_lastname)
    {
        this._lastname = _lastname;
    }

    set age(_age)
    {
        this._age = _age;
    }
};

class User extends Person
{
    constructor(_name, _lastname, _age, _account)
    {
        super(_name, _lastname, _age);
        this._account = _account;
    }

    bill(_account)
    {
        this._account = _account;
    }
};

class Worker extends Person
{
    constructor(_name, _lastname, _age, _account, _salary)
    {
        super(_name, _lastname, _age, _account);
        this._salary = _salary;
    }

    promotion(addon)
    {
        this._salary += addon;
    }
};