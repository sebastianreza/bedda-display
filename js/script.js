function moveText(direction) {
  var container = document.querySelector('.recipes, .products');
  var containerHeight = container.clientHeight;
  var contentHeight = container.scrollHeight;
  var step = 355;

  if (direction === 'down') {
      // Calculate the maximum allowable scroll position to stop scrolling down
      var maxScrollTop = contentHeight - containerHeight;
      var newScrollTop = container.scrollTop + step;
      // Ensure that the new scroll position does not exceed the maximum
      container.scrollTop = Math.min(newScrollTop, maxScrollTop);
  } else if (direction === 'up') {
      var newScrollTop = container.scrollTop - step;
      // Ensure that the new scroll position does not go below 0
      container.scrollTop = Math.max(newScrollTop, 0);
  }
}

