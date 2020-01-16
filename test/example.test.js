import checkResult from './checkResult.js';
const test = QUnit.test;

QUnit.module('checkResult');

//rock draw test
test('draw', assert => {
    //Arrange 
    const input = 'rock';
    const expected = 'draw';
    //act
    const result = checkResult(input, 'rock');

    //assert
    assert.equal(result, expected);
    }
);

//rock win test

test('win', assert => {
    //Arrange 
    const input = 'rock';
    const expected = 'win';
    //act
    const result = checkResult(input, 'scissors');

    //assert
    assert.equal(result, expected);
    }
);

//rock lose test


test('lose', assert => {
    //Arrange 
    const input = 'rock';
    const expected = 'lose';
    //act
    const result = checkResult(input, 'paper');
   
    //assert
    assert.equal(result, expected);
    }
);

//paper draw test
test('draw', assert => {
    //Arrange 
    const input = 'paper';
    const expected = 'draw';
    //act
    const result = checkResult(input, 'paper');
    
    //assert
    assert.equal(result, expected);
    }
);

//paper win test
test('win', assert => {
    //Arrange 
    const input = 'paper';
    const expected = 'win';
    //act
    const result = checkResult(input, 'rock');
    
    //assert
    assert.equal(result, expected);
    }
);

//paper lose test
test('lose', assert => {
    //Arrange 
    const input = 'paper';
    const expected = 'lose';
    //act
    const result = checkResult(input, 'scissors');
    
    //assert
    assert.equal(result, expected);
    }
);

//scissors draw test
test('draw', assert => {
    //Arrange 
    const input = 'scissors';
    const expected = 'draw';
    //act
    const result = checkResult(input, 'scissors');
    
    //assert
    assert.equal(result, expected);
    }
);
//scissors win test
test('win', assert => {
    //Arrange 
    const input = 'scissors';
    const expected = 'win';
    //act
    const result = checkResult(input, 'paper');
    
    //assert
    assert.equal(result, expected);
}
);

//scissors lose test
test('lose', assert => {
    //Arrange 
    const input = 'scissors';
    const expected = 'lose';
    //act
    const result = checkResult(input, 'rock');
    
    //assert
    assert.equal(result, expected);
    }
);

