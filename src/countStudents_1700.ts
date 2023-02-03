function countStudents(students: number[], sandwiches: number[]): number {
    let count: number = 0;
    while(students.length>0 && count<students.length) {
        const sandwiche:number = sandwiches[0],
        student:number = students.shift()!;

        if(sandwiche !== student) {
            students.push(student);
            count++;
        }
        else {
            sandwiches.shift();
            count = 0;
        }
    }
    return students.length;
};