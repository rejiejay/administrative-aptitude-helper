import RenderHelper from './../../../../utils/render-helper'
import FullscreenIframe from './../../../../components/fullscreen-iframe';
import toast from './../../../../components/toast';

import Header from './header'

export default class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}

        this.clientHeight = document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight
        this.clientWidth = document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth
    }

    searchHandle = () => { }

    clearSearch = () => { }

    showCategoryMindHandle = () => {
        toast.show()
        import('./../category-mind').then(async ({ CategoryMind }) => {
            toast.destroy()

            const categoryMind = new FullscreenIframe(CategoryMind);
            const result = await categoryMind.show();

            if (result instanceof Error) return

            console.log('result', result)
        })
    }

    render() {
        const { clientHeight } = this
        const minItemHeight = clientHeight - 147
        const { onClickHandle } = this.props;
        const id = 1

        return (
            <div className="mobile-device-list">
                <Header
                    showCategoryMindHandle={this.showCategoryMindHandle}
                />

                {new Array(5).fill('').map((i, k) => (<div className="list-item">
                    <div
                        key={k}
                        className="list-item-container"
                        style={{
                            minHeight: `${minItemHeight}px`
                        }}
                        onClick={() => onClickHandle(id)}
                    >
                        <div className="list-item-title">title</div>
                        <div className="list-item-content">{RenderHelper.htmlStringToParagraph('content')}</div>
                    </div>

                </div>
                ))}

                <div className="mobile-load">
                    <div className="mobile-load-container flex-center">加载更多 (0/0)</div>
                </div>
            </div>
        )
    }
}
