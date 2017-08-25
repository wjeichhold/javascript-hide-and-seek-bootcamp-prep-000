function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function deepestChild() {
  return document.querySelector("#grand-node div div div div");
  }

function increaseRankBy(n) {
  var rankedList = document.querySelectorAll("ul.ranked-list li")
  for (var i = 0; i < rankedList.length; i++) {
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + n
  }
}
