// import {User} from '.';

// const user = new User({name: 'myname',age: 20});

// User.on('change',()=>{
//   console.log('Chnage #1');

// });
// User.on('change',()=> {
//   console.log('Chnage #2');
// });
// User.on('save',()=>{
//   console.log('Save was triggered');
// });
// User.trigger('change')

import { UserForm } from './src/UserForm';

const userForm = new UserForm(document.getElementById('root'));
userForm.render();