// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
  cats.push(name)
}

function destructivelyPrependCat(name) {
  cats.unshift(name)
}

function destructivelyRemoveLastCat(name) {
  cats.pop(name)
}

function destructivelyRemoveFirstCat(name) {
  cats.shift(name)
}

function appendCat(name) {
  const copyCats = cats.slice()
  copyCats.push(name)
  return copyCats
}

function prependCat(name) {
  const copyCats = cats.slice()
  copyCats.unshift(name)
  return copyCats
}

function removeLastCat(name) {
  const copyCats = cats.slice()
  copyCats.pop(name)
  return copyCats
}

function removeFirstCat(name) {
  const copyCats = cats.slice()
  copyCats.shift(name)
  return copyCats
}
