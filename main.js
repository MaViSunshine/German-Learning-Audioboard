document.getElementById('null').onclick = nullPlay
document.getElementById('eins').onclick = einsPlay
document.getElementById('zwei').onclick = zweiPlay
document.getElementById('drei').onclick = dreiPlay
document.getElementById('vier').onclick = vierPlay
document.getElementById('funf').onclick = funfPlay
document.getElementById('sechs').onclick = sechsPlay
document.getElementById('sieben').onclick = siebenPlay
document.getElementById('acht').onclick = achtPlay
document.getElementById('neun').onclick = neunPlay
document.getElementById('zehn').onclick = zehnPlay
document.getElementById('elf').onclick = elfPlay
document.getElementById('zwolf').onclick = zwolfPlay
document.getElementById('dreizehn').onclick = dreizehnPlay
document.getElementById('vierzehn').onclick = vierzehnPlay
document.getElementById('funfzehn').onclick = funfzehnPlay
document.getElementById('sechszehn').onclick = sechszehnPlay
document.getElementById('siebzehn').onclick = siebsehnPlay
document.getElementById('achtzehn').onclick = achtzehnPlay
document.getElementById('neunzehn').onclick = neunzehnPlay
document.getElementById('zwanzig').onclick = zwanzigPlay

function nullPlay(){
    document.querySelector('#sayWord').innerHTML = speak("null")
  }
   function einsPlay(){
    document.querySelector('#sayWord').innerHTML = speak("eins")
  }
  function zweiPlay(){
    document.querySelector('#sayWord').innerHTML = speak("zwei")
  }
  function dreiPlay(){
    document.querySelector('#sayWord').innerHTML = speak("drei")
  }
  function vierPlay(){
    document.querySelector('#sayWord').innerHTML = speak("vier")
  }
  function funfPlay(){
    document.querySelector('#sayWord').innerHTML = speak("funf")
  }
  function sechsPlay(){
    document.querySelector('#sayWord').innerHTML = speak("sechs")
  }
  function siebenPlay(){
    document.querySelector('#sayWord').innerHTML = speak("sieben")
  }
  function achtPlay(){
    document.querySelector('#sayWord').innerHTML = speak("acht")
  }
  function neunPlay(){
    document.querySelector('#sayWord').innerHTML = speak("neun")
  }
  function zehnPlay(){
    document.querySelector('#sayWord').innerHTML = speak("zehn")
  }
  function elfPlay(){
    document.querySelector('#sayWord').innerHTML = speak("elf")
  }

  function zwolfPlay(){
    document.querySelector('#sayWord').innerHTML = speak("zwolf")
  }
  function dreizehnPlay(){
    document.querySelector('#sayWord').innerHTML = speak("dreizehn")
  }
  function vierzehnPlay(){
    document.querySelector('#sayWord').innerHTML = speak("vierzehn")
  }
  function funfzehnPlay(){
    document.querySelector('#sayWord').innerHTML = speak("funfzehn")
  }
  function sechszehnPlay(){
    document.querySelector('#sayWord').innerHTML = speak("sechszehn")
  }
  function siebsehnPlay(){
    document.querySelector('#sayWord').innerHTML = speak("siebsehn")
  }
  function achtzehnPlay(){
    document.querySelector('#sayWord').innerHTML = speak("achtzehn")
  }
  function neunzehnPlay(){
    document.querySelector('#sayWord').innerHTML = speak("neunzehn")
  }
  function zwanzigPlay(){
    document.querySelector('#sayWord').innerHTML = speak("zwanzig")
  }


  function speak(sayThis){
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'de-DE';
  utter.text = sayThis;
  utter.volume = 0.5;
  
  // speak
  window.speechSynthesis.speak(utter);
  }


