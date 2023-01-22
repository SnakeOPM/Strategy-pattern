const fs = require("fs");
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
 

class Starting_point{
    get_strategy(){
        let res : string = '';
        readline.question('Type strategy name:\n 1. sort and print\n 2. don\'t sort and print\n', name => {
            console.log(`strategy ${name} choosed!`);

            res = name;
            var first100 : Array<number> = [];
            
        fs.readFile('hello.txt', 'utf8', (err, data) => {
            if (err) throw err;

            const numbers = data.split('\n');
            const numberArray = numbers.map(Number);
            first100 = numberArray.slice(0, 100);

            switch (res){
                case '1':
                    let work1 = new Filter;
                    console.log(work1.do_work(first100))
                    break;
                case '2':
                    let work2 = new DoArray;
                    console.log(work2.do_work(first100))
                    break;
                default:
                    console.log('no such file or method');
                    break;
                }
            
          });
            readline.close();
          });
    }
}

abstract class BasedWork{
    abstract do_work(data: Array<any>)
}

class DoArray extends BasedWork{
    do_work(data: any[]) {
        return data;
    }
}

class Filter extends BasedWork{
    do_work(data: any[]) {
        let filtred: Array<number> = []; 
        for (let i of data){
            if (i > 10){
                filtred.push(i)
            }
        }
        console.log(filtred)
        return filtred
    } 
}

let start = new Starting_point();
start.get_strategy();