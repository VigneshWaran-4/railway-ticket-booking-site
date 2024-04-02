document.getElementById('ticket-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    var date = document.getElementById('date').value;
    var selectedClass = document.getElementById('class').value;
    var passengers = document.getElementById('passengers').value;
    var seat = document.getElementById('seat').value;
  
    var bookingInfo = `
      <p><strong>From:</strong> ${from}</p>
      <p><strong>To:</strong> ${to}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Class:</strong> ${selectedClass}</p>
      <p><strong>Passengers:</strong> ${passengers}</p>
      <p><strong>Seat Selection:</strong> ${seat}</p>
    `;
  
    document.getElementById('booking-info').innerHTML = bookingInfo;
  });
  