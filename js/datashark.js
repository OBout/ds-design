function save(formId) {
  console.log("saving", formId);
  var form = document.getElementById(formId);
  console.log(form);
  var formData = new FormData(form);
    console.log(formData);
  for (var pair of formData.entries()) {
    console.log(pair[0] + ": " + pair[1]);
  }

  // Close the modal
  var modal = bootstrap.Modal.getInstance(
    document.getElementById(formId + "modal")
  );
  modal.hide();
}
