import deviceHandle from './../../utils/device-handle'

window.onload = () => {
    const root = document.getElementById('jeker-task-assist-system');

    if (deviceHandle.isMobile()) {
        return import('./mobile/index.js')
            .then(({ MobileComponent }) => {
                root.className = 'mobile-device'
                ReactDOM.render(<MobileComponent />, root)
            });
    }

    import('./web/index.js').then(({ WebComponent }) => {
        root.className = 'web-device'
        ReactDOM.render(<WebComponent />, root)
    })
}
