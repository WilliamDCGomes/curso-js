/*console.log(0 || false || null || 'William Douglas' || true);

const corBackgroundUsuario = '';
const corBackgroundPadrao = 'Azul';

console.log(corBackgroundUsuario || corBackgroundPadrao);


const data = new Date();


console.log(Intl.DateTimeFormat('pt-BR').format(data));


//[3,2,3]
//[2,2,1,1,1,2,2]
var majorityElement = function(nums) {
    const values = [];

    for(let i in nums) {
        if(i === 0) {
            values.push({value: nums[i], count: 1});
        }
        else if(values.findIndex(v => v.value === nums[i]) >= 0) {
            values.find(v => v.value === nums[i]).count++;
        }
        else {
            values.push({value: nums[i], count: 1});
        }
    }

    values.sort((a, b) => b.count - a.count);

    return values[0].value;
};

console.log(majorityElement([6,5,5]));


var majorityElementOf = function(nums) {
    const values = [];

    for(let i of nums) {
        if(values.length === 0) {
            values.push({value: i, count: 1});
        }
        else if(values.findIndex(v => v.value === i) >= 0) {
            values.find(v => v.value === i).count++;
        }
        else {
            values.push({value: i, count: 1});
        }
    }

    values.sort((a, b) => b.count - a.count);

    return values[0].value;
};

console.log(majorityElementOf([2,2,1,1,1,2,2]));

const list = [2,2,1,1,1,2,2];
list.forEach(l => console.log(l));

*/
var removeDuplicates = function(nums) {
    const values = [];
    let emptyTimes = 0;
    let validValues = 0;

    for(let i of nums) {
        if(values.length === 0) {
            values.push(i);
        }
        else if(values.findIndex(v => v === i) < 0) {
            values.push(i);
        }
        else {
            emptyTimes++;
        }
    }

    validValues = values.length;

    for(let i = 0; i < emptyTimes; i++) {
        values.push('_');
    }

    for (let i = 0; i < values.length; i++) {
        nums[i] = values[i];
    }    

    return `${validValues}, nums = [${values}]`;
};

console.log(`Result: ${removeDuplicates([0,0,1,1,1,2,2,3,3,4])}`);