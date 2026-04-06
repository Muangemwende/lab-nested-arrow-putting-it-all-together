function createLoginTracker(userInfo) {
  let attemptCount = 0;
  const maxAttempts = 3;

  const handleLogin = (passwordAttempt) => {
    // If already locked
    if (attemptCount >= maxAttempts) {
      return "Account locked due to too many failed login attempts";
    }

    if (passwordAttempt === userInfo.password) {
      attemptCount = 0; // reset after success
      return "Login successful!";
    } else {
      attemptCount++;

      // Lock immediately when limit reached
      if (attemptCount >= maxAttempts) {
        return "Account locked due to too many failed login attempts";
      }
      else{
      return `Wrong password. Attempts left: ${maxAttempts - attemptCount}`;
      }
    }
  };

  return handleLogin;
}

// Fix object (comma added)
const user = {
  username: "user1",
  password: "password123"
};

const login = createLoginTracker(user);

//Test
console.log(login("111")); 
console.log(login("password123"));
module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};