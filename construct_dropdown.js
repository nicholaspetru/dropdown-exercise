buildDropdownGroup(MENU, $('#dropdown_container'))

$('p').click(function() {
  alert($( this ).context.innerText)
});

function buildDropdownGroup(dropdown_group, container) {
  dropdown_group.map(function(item) {
    var item_block = $('<div>').addClass('item_block')
    $('<p>').text(item.title).appendTo(item_block)
    item_block.appendTo(container)
    handleSubmenu(item, item_block)
  })
}

function handleSubmenu(dropdown_item, parent) {
  if (dropdown_item.submenu) {
    var submenu_container = $('<div>').addClass('submenu_container')
    buildDropdownGroup(dropdown_item.submenu, submenu_container)
    submenu_container.appendTo(parent)
  }
}
