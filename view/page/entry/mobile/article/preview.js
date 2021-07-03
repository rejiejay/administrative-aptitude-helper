import CommonlyBottomOperate from './../../../../components/mobile/commonly-bottom-operate'
import RenderHelper from './../../../../utils/render-helper'

export default class Preview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {
            title,
            content,
            related,
            editHandle,
            deleteHandle,
            cancelHandle
        } = this.props;
        return (
            <div className="article-preview">
                <div className="article-title">{title}</div>

                <div className="article-category">分类</div>

                <div className="article-content">{RenderHelper.htmlStringToParagraph(content)}</div>

                <div className="article-linked">
                    {related.map((i, k) => (
                        <div className="article-linked-item" key={k}>
                            <div className="linked-item-container flex-start-center">
                                <div className="linked-item-descript flex-rest">关联标题</div>
                                <div className="linked-item-preview flex-center">预览</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ height: '50px' }} />
                <CommonlyBottomOperate
                    leftElement={[{
                        key: 'edit',
                        cilckHandle: editHandle,
                        element: '编辑'
                    }, {
                        key: 'delete',
                        cilckHandle: deleteHandle,
                        element: '删除'
                    }]}
                    rightElement={[{
                        cilckHandle: cancelHandle,
                        element: '返回'
                    }]}
                />
            </div>
        )
    }
}
