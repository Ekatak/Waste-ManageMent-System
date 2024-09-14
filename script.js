document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simulate login functionality
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    if (username === 'user' && password === 'password') {
      alert('Login successful!'); // Replace with your login logic
      // Redirect user to dashboard or homepage
    } else {
      alert('Invalid username or password. Please try again.'); // Replace with your error handling logic
    }
  });
  