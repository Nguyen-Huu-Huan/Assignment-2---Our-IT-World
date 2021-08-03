function underline(target) {
  var target_reformat = '.underline_'+target;
  var target_anchor = '.a_'+target;
  var line = document.querySelector(target_reformat);
  var anchor = document.querySelector(target_anchor);
  anchor.style.color = "#4568f5";
  line.style.visibility = "visible";
  anchor.style.fontWeight = "bold";
  line.style.animation = "line_extend 0.2s";
  line.style.transform = "scaleX(2)";
}
function no_underline(target) {
  var target_reformat = '.underline_'+target;
  var target_anchor = '.a_'+target;
  var line = document.querySelector(target_reformat);
  var anchor = document.querySelector(target_anchor);
  line.style.animation = "line_shrink 0.3s";
  line.style.transform = "scaleX(0)";
  anchor.style.color = "purple";
  anchor.style.fontWeight = "normal";
}
var all_content = document.querySelectorAll('.aboutus-content>div');
var all_focus = document.querySelectorAll('.focus');

function active(target) {
  all_content.forEach((item, i) => {
    var content_children = "#"+item.id+">h2";
    document.querySelector(content_children).style.color = "black";
  });
  all_focus.forEach((item, i) => {
    var focus_children = "."+item.class;
    item.style.visibility = "hidden";
  });
  var target_id_reformat = '#'+target+">h2";
  var highlight_element = document.querySelector(target_id_reformat);
  var target_class_reformat = '.'+target;
  document.querySelector(target_class_reformat).addEventListener("click", function(){
    window.location.href = '#'+target;
  });
  var target_focus = '.focus-icon-'+target;
  var focus = document.querySelector(target_focus);
  highlight_element.style.color = "red";
  highlight_element.style.transition = "0.5s ease-in-out";
  focus.style.visibility = "visible";
}
