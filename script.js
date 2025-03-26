// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Set launch date (4 days from now)
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 4);
    
    // Countdown timer
    function updateCountdown() {
      const currentTime = new Date();
      const difference = launchDate - currentTime;
      
      // Check if launch date has passed
      if (difference <= 0) {
        document.getElementById('days').innerText = '00';
        document.getElementById('hours').innerText = '00';
        document.getElementById('minutes').innerText = '00';
        document.getElementById('seconds').innerText = '00';
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      document.getElementById('days').innerText = days < 10 ? '0' + days : days;
      document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
      document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
      document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
    }
    
    // Initial call
    updateCountdown();
    
    // Update countdown every second
    setInterval(updateCountdown, 1000);
    
    // Language switcher
    const langButtons = document.querySelectorAll('.lang-btn');
    
    // Set Malayalam as default language
    document.body.setAttribute('data-lang', 'ml');
    
    langButtons.forEach(button => {
      button.addEventListener('click', function() {
        const language = this.getAttribute('data-lang');
        document.body.setAttribute('data-lang', language);
        
        // Update active class
        langButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
      });
    });
    
    // Email subscription form
    const subscribeForm = document.getElementById('subscribe-form');
    const successMessage = document.querySelector('.success-message');
    
    subscribeForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get email value
      const email = document.getElementById('email').value;
      
      // Basic email validation
      if (!email || !email.includes('@') || !email.includes('.')) {
        alert(document.body.getAttribute('data-lang') === 'en' ? 
              'Please enter a valid email address.' : 
              'ദയവായി ഒരു സാധുവായ ഇമെയിൽ വിലാസം നൽകുക.');
        return;
      }
      
      // Simulate form submission
      setTimeout(() => {
        subscribeForm.style.display = 'none';
        successMessage.style.display = 'block';
        
        // Reset form after some time
        setTimeout(() => {
          subscribeForm.reset();
          subscribeForm.style.display = 'flex';
          successMessage.style.display = 'none';
        }, 5000);
      }, 1000);
    });
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
});