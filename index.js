function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name)+1} in line.`
}
function nowServing(katzDeliLine){
  if (katzDeliLine.length===0){
    return 'There is nobody waiting to be served!'
  }
  else {
    var person = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${person}.`
  }
}
function currentLine(katzDeliLine){
  var output = 'The line is currently: '
  for (var i = 0; i < katzDeliLine.length;i++){
    output = output + (i+1) + '. ' + katzDeliLine[i] + ', '
  }
}