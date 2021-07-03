import { loadPageHashVar } from './../../../../utils/url-helper';
import CommonlyInputText from './../../../../components/mobile/commonly-input-text'
import CommonlyBottomOperate from './../../../../components/mobile/commonly-bottom-operate'
import Button from './../../../../components/button'

import Preview from './preview'

export class Article extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '标题',
            content: '内容内容',
            related: new Array(3).fill(''),
            isPreview: true,
        }
    }

    componentDidMount() {
        window.addEventListener("hashchange", this.initLoadPageHash);
    }

    componentWillUnmount() {
        window.removeEventListener("hashchange", this.initLoadPageHash);
    }

    initLoadPageHash = () => {
        const articleId = loadPageHashVar('article');
        const { reject } = this.props;

        if (!articleId) {
            reject();
        }
    }

    cancelHandle = () => {
        const { reject } = this.props;
        reject();
    }

    confirmHandle = () => {
        const { resolve } = this.props;
        resolve();
    }

    editHandle = () => {
        this.setState({ isPreview: true })
    }

    deleteHandle = () => { }

    bottomOperateFilter = element => {
        return true
    }

    render() {
        const { title, content, related, isPreview } = this.state;

        if (isPreview) return <Preview
            title={title}
            content={content}
            related={related}
            editHandle={() => this.setState({ isPreview: false })}
            deleteHandle={this.deleteHandle}
            cancelHandle={this.cancelHandle}
        />

        return (
            <div className="article">
                <div className="article-title">
                    <input type="text" placeholder="标题"
                        value={title}
                        onChange={({ target: { value } }) => this.setState({ title: value })}
                    />
                </div>

                <div className="article-category">分类</div>

                <div className="article-content">
                    <CommonlyInputText
                        value={content || ''}
                        onChangeHandle={value => this.setState({ content: value })}
                        isMultipleInput
                        isAutoHeight
                        minHeight={320}
                        placeholder='文章内容'
                    />
                </div>

                <div className="article-linked">
                    <div className="article-linked-item article-linked-add">
                        <Button key='article-linked-add'>新增关联</Button>
                    </div>
                    {related.map((i, k) => (
                        <div className="article-linked-item" key={k}>
                            <div className="linked-item-container flex-start-center">
                                <div className="linked-item-descript flex-rest">关联标题</div>
                                <div className="linked-item-preview flex-center">删除</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ height: '425px' }} />
                <CommonlyBottomOperate
                    leftElement={[{
                        key: 'edit',
                        cilckHandle: this.editHandle,
                        element: '暂存'
                    }, {
                        key: 'delete',
                        cilckHandle: this.deleteHandle,
                        element: '删除'
                    }].filter(this.bottomOperateFilter)}
                    rightElement={[{
                        cilckHandle: this.cancelHandle,
                        element: '返回'
                    }]}
                />
            </div >
        )
    }
}
