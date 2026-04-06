function createLoginTracker(userInfo){
  let attemptCount = 0;
  const handleLogin = (passwordAttempt) => {
    attemptCount ++;
    if(passwordAttempt === userInfo.password){
      return `log in successfully ${attemptCount}`;
    }
    else{
      return`wrong password ${attemptCount}`;
    }
  };
  return handleLogin;
};
const user = {
  username: "user1",
  password: "password123"
};
const login = createLoginTracker(user);
console.log(login("password123"));
module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};