const LIMIT = 99;
const MIN = 1;
$(document).ready(function () {
  $(".mini-minus").click(function () {
    var $input = $(this).parent().find("input");
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? MIN : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $(".mini-plus").click(function () {
    var $input = $(this).parent().find("input");
    $input.val(parseInt($input.val()) + ((parseInt($input.val()) < LIMIT) ? 1 : 0));
    $input.change();
    return false;
  });
});
