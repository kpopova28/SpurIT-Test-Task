let hideButton = document.getElementsByClassName('collapsible__action--visible')[0];
let showButton = document.getElementsByClassName('collapsible__action--hidden')[0];
let content = document.getElementsByClassName('collapsible__content')[0];
let button = document.getElementsByClassName('collapsible__button')[0];
let action = 1;

let visibleTextAnimation = [
  {opacity: 0}, {opacity: 1}
]
let hiddenTextAnimation = [
  {opacity: 1}, {opacity: 0}
]
let visibleShowButtonAnimation = [
  {visibility: 'visible'}, {visibility: 'hidden'}
]
let hiddenShowButtonAnimation = [
  {visibility: 'hidden'}, {visibility: 'visible'}
]
let visibleHideButtonAnimation = [
  { visibility: 'hidden'}, { visibility: 'visible' }
]
let hiddenHideButtonAnimation = [
  { visibility: 'visible'}, { visibility: 'hidden' }
]
let timing = {
  duration: 10,
  iterations: 1,
  fill: 'forwards'
}

function ShowText(){
  showButton.animate(
    visibleShowButtonAnimation,
    timing
  );
  hideButton.animate(
    visibleHideButtonAnimation,
    timing
  );
  content.animate(
    visibleTextAnimation,
    timing
  );
  action = 2;
}

function HideText(){
  showButton.animate(
    hiddenShowButtonAnimation,
    timing
  );
  hideButton.animate(
    hiddenHideButtonAnimation,
    timing
  );
  content.animate(
    hiddenTextAnimation,
    timing
  );
  action = 1;
}

document.addEventListener('DOMContentLoaded', function(){
  hideButton.style.position = 'absolute';
  HideText();
});

button.addEventListener('click', function(){
  if(action == 1){
    ShowText();
  }
  else{
    HideText();
  }
});
