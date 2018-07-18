function takeANumber(katzDeliLine, name){
  for (let i = 0; i < katzDeliLine.length; i++){
    if (katzDeliLine[i] === name){
      return i + 1
    }
  }
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0)
    return "There is nobody waiting to be served!"
  let serving = katzDeliLine(shift)
  return serving
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0)
    return "The line is currently empty."
  string = "The line is currently: ";
  for (let i = 0; i < katzDeliLine.length; i++){
    string += i + 1
    string += ". " + katzDeliLine[i] + ", "
  }
  string += katzDeliLine.length
  string += ". " + katzDeliLine[katzDeliLine.length-1]
  return string
}
