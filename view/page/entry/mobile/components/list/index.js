import RenderHelper from './../../../../../utils/render-helper'

export default class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}

        this.clientHeight = document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight
        this.clientWidth = document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth
    }

    searchHandle = () => { }

    clearSearch = () => { }

    render() {
        const { clientHeight } = this
        const minItemHeight = clientHeight - 147

        return (
            <div className="mobile-device-list">
                <div className="list-item">
                    <div className="list-item-container" style={{ minHeight: `${minItemHeight}px` }} >
                        <div className="list-item-title">title</div>
                        <div className="list-item-content">{RenderHelper.htmlStringToParagraph('content')}</div>
                    </div>
                </div>

                <div className="mobile-load">
                    <div className="mobile-load-container flex-center">加载更多 (0/0)</div>
                </div>
            </div>
        )
    }
}
