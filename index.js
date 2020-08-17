function shoppingListFunctions() {  
  // add new items
  $("#js-shopping-list-form").submit(function(event) {
    event.preventDefault();
    let newItem = $(this).find("#shopping-list-entry").val();
    $(".shopping-list").append(`<li>
        <span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
    $("#js-shopping-list-form").trigger("reset");
  });

  // toggle checked items
  $(".shopping-list").on('click', '.shopping-item-toggle', function (event) {
    $(this).closest(".shopping-item-controls").prev("span").toggleClass("shopping-item__checked");
  });

  // delete items
  $(".shopping-list").on('click', '.shopping-item-delete', function(event){
    $(this).closest("li").remove();
  });
}

$(shoppingListFunctions);