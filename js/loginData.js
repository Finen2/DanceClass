// Arrays of login data.
var currentPage = window.location.pathname.split('/').pop(); // Split will split the path into different obijects

const users = [
    {
    firstName: 'Stina',
    lastName: 'Larsson',
    age: '14',
    email: 'st@kaka.se',
    account:'student',
    password: 'kaka1234',
    classes: 'street,balle,breackDance',
    refPage: (currentPage === 'index.html' || currentPage === '') ? 'html/student.html' : 'student.html'
    },
    {
    firstName: 'Emmi',
    lastName: 'Rojas',
    age: '34',
    email: 'er@kaka.se',
    account: 'teacher',
    password: 'kaka1234',
    classes: 'street,balle,breackDance',
    refPage: (currentPage === 'index.html' || currentPage === '') ? 'html/teacher.html' : 'teacher.html'
    }
];

/*
  var promise = {
  'var'  : 'text',
  'array': [1, 2, 3, 4]
  };
*/
