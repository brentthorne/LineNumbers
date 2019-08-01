$(document).ready(function(){

//add lineNum class to all desired elements
$("h1").addClass("lineNum");
$("h2").addClass("lineNum");
$("h3").addClass("lineNum");
$("h4").addClass("lineNum");
$("h5").addClass("lineNum");
$("h6").addClass("lineNum");
$("p").addClass("lineNum");
$(".figure").addClass("lineNum");
$('table').addClass('lineNum');
$(".sourceCode").addClass('lineNum');

// remove from unwanted elements
$('p.caption').removeClass('lineNum');

// add new class to count the figures
$(".figure").each(function(i, obj) {
	var figureClass = "figure"+ +i;
  $(this).addClass(figureClass);
});

$("table").each(function(i, obj) {
	var tableClass = "table"+ +i;
  $(this).addClass(tableClass);
});

$("caption").each(function(i, obj) {
	var captionClass = "caption"+ +i;
  $(this).addClass(captionClass);
});

$(".sourceCode").each(function(i, obj) {
	var sourceCodeClass = ""+ +i;
  $(this).addClass(sourceCodeClass);
});

// find elements with class 'lineNum';
// calculate line height & line numbers;
// add elements to '.margin' based on calculations
$('.lineNum').each(function (i, obj) {
	var tmpElement = $(this);
  var itemType = tmpElement.prop('nodeName');
  var itemLabel = "margin_"+itemType;
  var height = tmpElement.height();
  var lineHeight = tmpElement.css("line-height").replace(/[^-\d\.]/g, '');
  var lineNumbers = height / lineHeight;
  var lineNumbersRound = lineNumbers.toFixed();
  var classes = $(tmpElement).attr('class');
  var textInsert = "<span></span> <br>".repeat(lineNumbersRound);
  var textInsertDivEmpty = "<br>".repeat(lineNumbersRound);
  var textInsertDiv = "<span></span>"+textInsertDivEmpty;
  var textInsertTabEmpty = "<br>".repeat(lineNumbersRound);
  var textInsertTab = "<span></span>"+textInsertTabEmpty;
  var newClasses = itemLabel +" "+ classes;
  
  if (itemType == "DIV") {
  $('.margin').append("<div class='margNumDiv'><p class='"+newClasses+"'>"+textInsertDiv+"</p></div>");
  } else {	
  if (itemType == "TABLE") {
    $('.margin').append("<div class='margNumDiv'><p class='"+newClasses+"'>"+textInsertTab+"</p></div>");
  } else {
  	$('.margin').append("<div class='margNumDiv'><p class='"+newClasses+"'>"+textInsert+"</p></div>");
  }
  }
});

// change the size of the .margin_DIV to match
// height of the figures
$(".margin_DIV").each(function(i, obj) {
	var getFigNumber = "div.figure"+i;
  var figHeight = $(getFigNumber).css("height");
  $(this).css("height",figHeight);
});

$(".margin_TABLE").each(function(i, obj) {
	var getTabNumber = "table.table"+i;
  var tabHeight = $(getTabNumber).css("height");
  $(this).css("height", tabHeight);
});

});
