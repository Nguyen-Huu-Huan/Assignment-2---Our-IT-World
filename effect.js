function underline(target) {
  var target_reformat = '.underline_'+target;
  var target_anchor = '.a_'+target;
  var line = document.querySelector(target_reformat);
  var anchor = document.querySelector(target_anchor);
  anchor.style.color = "#4568f5";
  line.style.display = "block";
  anchor.style.fontWeight = "bold";
  line.style.animation = "line_extend 0.2s";
  line.style.transform = "scaleX(2)";
}
function no_underline(target) {
  var target_reformat = '.underline_'+target;
  var target_anchor = '.a_'+target;
  var line = document.querySelector(target_reformat);
  var anchor = document.querySelector(target_anchor);
  line.style.animation = "line_shrink 0.2s";
  line.style.transform = "scaleX(0)";
  anchor.style.color = "purple";
  anchor.style.fontWeight = "normal";
}
var all_content = document.querySelectorAll('.aboutus-content>div');
function active(target) {
  all_content.forEach((item, i) => {
    var content_children = "#"+item.id+">h2";
    document.querySelector(content_children).style.background = "white";
  });
  var target_reformat = '#'+target+">h2";
  var highlight_element = document.querySelector(target_reformat);
  highlight_element.style.background = "#03fcbe";
  highlight_element.style.transition = "0.5s ease-in-out";
}
