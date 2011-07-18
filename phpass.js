
if (Drupal.jsEnabled) {
  $(document).ready(
    function() {
      $('div.user-admin-hash-radios input[@type=radio]').click(function () {
        value = this.value == 'phpass' ? 1 : 0;
        $('div.user-admin-hash-settings')[['hide', 'show'][value]]();
      });
    }
  );
}
