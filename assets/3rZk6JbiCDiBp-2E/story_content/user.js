function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Dl8xaShBCA":
        Script1();
        break;
      case "68BjMBHLVzi":
        Script2();
        break;
      case "5rm58ycb3fG":
        Script3();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('6IgB1kbQqjV');
const duration = 750;
const easing = 'ease-out';
const id = '5tiopw7U8WS';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('5ecJf4eJIs7');
const duration = 750;
const easing = 'ease-out';
const id = '6QA6jp8qhq4';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5rfVN3rElDS');
const duration = 750;
const easing = 'ease-out';
const id = '60fsJrdqSSb';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
