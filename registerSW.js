if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/Crobotic/sw.js', { scope: '/Crobotic/' })})}