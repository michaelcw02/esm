module.export([["a2",()=>a2],["a0",()=>a0],["update",()=>update]]);let [a0, a2] = [0, 2]
function update(...args) {
  module.runSetters([a0, /*hole*/, a2] = args)
  return a0 + a2
}