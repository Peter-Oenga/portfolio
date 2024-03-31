
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var formData = new FormData(this);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', this.action, true);
    xhr.setRequestHeader('Accept', 'application/json');

    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;

      var loading = document.getElementById('loading');
      var errorMessage = document.getElementById('error-message');
      var sentMessage = document.getElementById('sent-message');

      if (xhr.status === 200) {
        loading.style.display = 'none';
        errorMessage.style.display = 'none';
        sentMessage.style.display = 'block';
        document.getElementById('contact-form').reset(); // Reset the form

        // Hide the success message after 5 seconds (5000 milliseconds)
        setTimeout(function() {
          sentMessage.style.display = 'none';
        }, 5000);
      } else {
        loading.style.display = 'none';
        errorMessage.style.display = 'block';
        sentMessage.style.display = 'none';
      }
    };

    xhr.send(formData);
  });

