export default function createStore(reducer) {
  let state;
  
  function dispatch(action) {
    state=reducer()
  }
}

function render() {
  const container = document.getElementById('container');
}
