// Flavourlist data array for filling in info box
var flavourListData = [];

// DOM Ready =============================================================
$(document).ready(function() {

  // Populate the flavour table on initial page load
  populateTable();

  // flavour_name link click
  $('#flavourList table tbody').on('click', 'td a.linkshowflavour', showFlavourInfo);

  // Add Flavour button click
  $('#btnAddFlavour').on('click', addFlavour);

  // Delete User link click
  $('#flavourList table tbody').on('click', 'td a.linkdeleteflavour', deleteFlavour);

});

// Functions =============================================================

// Fill table with data
function populateTable() {

  // Empty content string
  var tableContent = '';

  // jQuery AJAX call for JSON
  $.getJSON( '/users/flavourlist', function( data ) {

    // Stick our flavour data array into a flavourlist variable in the global object
    flavourListData = data;

    // For each item in our JSON, add a table row and cells to the content string
    $.each(data, function(){
      tableContent += '<tr>';
      tableContent += '<td><a href="#" class="linkshowflavour" rel="' + this.flavour_name + '">' + this.flavour_name + '</a></td>';
      tableContent += '<td>' + this.supplier + '</td>';
      tableContent += '<td><a href="#" class="linkdeleteflavour" rel="' + this._id + '">delete</a></td>';
      tableContent += '</tr>';
    });

    // Inject the whole content string into our existing HTML table
    $('#flavourList table tbody').html(tableContent);
  });
};

// Show Flavour Info
function showFlavourInfo(event) {

    // Prevent Link from Firing
    event.preventDefault();
  
    // Retrieve flavour_name from link rel attribute
    var thisFlavourName = $(this).attr('rel');
  
    // Get Index of object based on id value
    var arrayPosition = flavourListData.map(function(arrayItem) { return arrayItem.flavour_name; }).indexOf(thisFlavourName);

    // Get our Flavour Object
    var thisFlavourObject = flavourListData[arrayPosition];

    //Populate Info Box
    $('#flavourInfoType').text(thisFlavourObject.product_type);
    $('#flavourInfoQuantity').text(thisFlavourObject.quantity_per_unit);
    $('#flavourInfoPrice').text(thisFlavourObject.price);
};

// Add Flavour
function addFlavour(event) {
    event.preventDefault();
  
    // Super basic validation - increase errorCount variable if any fields are blank
    var errorCount = 0;
    $('#addFlavour input').each(function(index, val) {
      if($(this).val() === '') { errorCount++; }
    });
  
    // Check and make sure errorCount's still at zero
    if(errorCount === 0) {
  
      // If it is, compile all flavour info into one object
      var newFlavour = {
        'flavour_name': $('#addFlavour fieldset input#inputFlavourName').val(),
        'supplier': $('#addFlavour fieldset input#inputFlavourSupplier').val(),
        'product_type': $('#addFlavour fieldset input#inputFlavourProductType').val(),
        'quantity_per_unit': $('#addFlavour fieldset input#inputFlavourQuantityPerUnit').val(),
        'price': $('#addFlavour fieldset input#inputFlavourPrice').val(),
      }
  
      // Use AJAX to post the object to our addflavour service
      $.ajax({
        type: 'POST',
        data: newFlavour,
        url: '/users/addflavour',
        dataType: 'JSON'
      }).done(function( response ) {
  
        // Check for successful (blank) response
        if (response.msg === '') {
  
          // Clear the form inputs
          $('#addFlavour fieldset input').val('');
  
          // Update the table
          populateTable();
  
        }
        else {
  
          // If something goes wrong, alert the error message that our service returned
          alert('Error: ' + response.msg);
  
        }
      });
    }
    else {
      // If errorCount is more than 0, error out
      alert('Please fill in all fields');
      return false;
    }
  };

// Delete Flavour
function deleteFlavour(event) {

    event.preventDefault();
  
    // Pop up a confirmation dialog
    var confirmation = confirm('Are you sure you want to delete this flavour?');
  
    // Check and make sure the flavour confirmed
    if (confirmation === true) {
  
      // If they did, do our delete
      $.ajax({
        type: 'DELETE',
        url: '/users/deleteflavour/' + $(this).attr('rel')
      }).done(function( response ) {
  
        // Check for a successful (blank) response
        if (response.msg === '') {
        }
        else {
          alert('Error: ' + response.msg);
        }
  
        // Update the table
        populateTable();
  
      });
  
    }
    else {
  
      // If they said no to the confirm, do nothing
      return false;
  
    }
  
  };