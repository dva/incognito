const msg = 'Incognito'

async function init () {
  if ('storage' in navigator && 'estimate' in navigator.storage) {
    const { usage, quota } = await navigator.storage.estimate()
    console.log(`Using ${usage} out of ${quota} bytes.`)

    if (quota < 120000000) {
      document.getElementById('root').textContent = msg
    } else {
      document.getElementById('root').textContent = `Not ${msg}`
    }
  } else {
    document.getElementById('root').textContent = '🤷'
  }
}

init()
