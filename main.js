'use strict'
const assert = require('assert');

class BankAccount {
    constructor (accountNumber, owner){
            this.accountNumber = accountNumber;
            this.owner = owner;
            this.transactions =[]; 
    }

    balance() {
        // returns balance of account - must create transaction class first      
    }
}


class Transaction {
  constructor(amount, payee) {
    this.amount = amount;
    this.payee = payee;
    this.date = new Date();
  }
}





// tests below
if (typeof describe === 'function'){
    describe('#testing account creation', function(){
      it('should create a new account correctly', function(){
        
        const acct1 = new BankAccount('xx4432', 'James Doe');
        assert.equal(acct1.owner, 'James Doe');
        assert.equal(acct1.accountNumber, 'xx4432');
        assert.equal(acct1.transactions.length, 0);
      });
    });
  
    describe('Ship', function(){
      it('should have a name, a type, an ability and an empty crew upon instantiation', function(){
        let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
        assert.equal(mav.name, 'Mars Ascent Vehicle');
        assert.equal(mav.type, 'MAV');
        assert.equal(mav.ability, 'Ascend into low orbit');
        assert.equal(mav.crew.length, 0);
      });
  
      it('can return a mission statement correctly', function(){
        let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
        const crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
        let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
        const crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');
        assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
        assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");
  
        crewMember1.enterShip(mav);
        assert.equal(mav.missionStatement(), "Ascend into low orbit");
  
        crewMember2.enterShip(hermes);
        assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
      });
    });
  }
  