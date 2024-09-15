import m from 'mithril'

const state   = { count: 0 }

const actions = {
  increment: () => state.count += 1,
  decrement: () => state.count -= 1
}

const Counter = {
  oninit() {
    // document.getElementById('r1_1').textContent = state.count
    setInterval(() => {
      actions.increment()
      document.getElementById('r1_1').textContent = state.count
      document.getElementById('r1_2').innerText = state.count
      document.getElementById('r1_3').innerHTML = state.count
      document.getElementById('r2').style.width = state.count + 'px'
      document.getElementById('r2').setAttribute('count', state.count)
      // m.redraw()
    }, 2000)
  },
  view: () => {
    return (
      <div>
        <button onclick={actions.increment}>+</button>
        <button onclick={actions.decrement}>-</button>
        <h2>Not work:</h2>
        <div>textContent:<span id="r1_1">{state.count}</span></div>
        <div>innerText:<span id="r1_2">{state.count}</span></div>
        <div>innerHTML:<span id="r1_3">{state.count}</span></div>
        <h2>Control group:</h2>
        <div>{state.count}</div>
        <h2>Style works:</h2>
        <div count={state.count} id="r2" style={{
          backgroundColor: 'black',
          width: state.count + 'px'
        }}>.</div>
        <div count={state.count} style={{
          'background-color': 'gray',
          width: state.count + 'px'
        }}>.</div>
      </div>
    )
  }
}

m.mount(document.getElementById("app"), {
  view: () => <Counter></Counter>
})