const budgetOfPeople = [
        { name: 'John', age: 21, budget: 23000 },
        { name: 'Steve', age: 32, budget: 40000 },
        { name: 'Martin', age: 16, budget: 2700 },
];

function getBudget(obj) {
        let sum = 0;
        for (const arrayObj of obj) {
                sum += arrayObj.budget;
        }
        return sum;
}

getBudget(budgetOfPeople);
