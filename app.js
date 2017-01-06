function Student(firstName, favoriteColor) {
  this.firstName = firstName;
  this.favoriteColor = favoriteColor;
}

/**
 * 1. Use the Student constructor function to create variables
 * that represent you and your coding partner(s).
 */var addStudent = new Student ("Bill", "Blue");
   var addOtherStudent = new Student ("Ahkillah","Purple");

/**
  * 2. Create a function that takes one argument. That argument will
  * represent a single student object. The function will log the student's
  * name.
  */
    function studentName(student){
      console.log(student.firstName);

    }
    studentName(addStudent);
    studentName(addOtherStudent);
/***** SWITCH PROGRAMMERS *****/

/**
  * 3. Create a function that takes one argument. That argument will
  * represent a single student object. The function will log the student's
  * favoriteColor.
  */
  function studentFavoriteColor(student) {
    console.log(student.favoriteColor);
  }

  studentFavoriteColor(addOtherStudent);
/**
  * 4. Put both students created in Step 1 into an array called students.
  */

var students = [addOtherStudent, addStudent];
console.log(students);

/***** SWITCH PROGRAMMERS *****/

/**
 * 5. Loop over the students array and invoke both functions from Step 2 and
 * Step 3. You should see console logs for each students firstName and favoriteColor.
 */
 students.forEach(function(Student){
   console.log("Name and Color: ");
     studentName(Student);
     studentFavoriteColor(Student);
 });
