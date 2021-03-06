import { loadPageHashVar } from './../../../../utils/url-helper';
import CommonlyInputText from './../../../../components/mobile/commonly-input-text'
import CommonlyBottomOperate from './../../../../components/mobile/commonly-bottom-operate'
import FullscreenIframe from './../../../../components/fullscreen-iframe';
import toast from './../../../../components/toast';

export class Examination extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: '',
            src: '',
            related: new Array(3).fill(''),
        }
    }

    componentDidMount() {
        window.addEventListener("hashchange", this.initLoadPageHash);
    }

    componentWillUnmount() {
        window.removeEventListener("hashchange", this.initLoadPageHash);
    }

    initLoadPageHash = () => {
        const examinationId = loadPageHashVar('examination');
        const { reject } = this.props;

        if (!examinationId) {
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

    editHandle = () => { }

    deleteHandle = () => { }

    showImage = () => {
        const { src } = this.state;
        toast.show()
        import('./image-model.js').then(async ({ ImageModel }) => {
            toast.destroy()

            const imageModel = new FullscreenIframe(ImageModel, { src });
            await imageModel.show();
        })
    }

    render() {
        const { title, content, related, src } = this.state;

        return (
            <div className="examination">
                <div className="examination-title">
                    <input type="text" placeholder="标题"
                        value={title}
                        onChange={({ target: { value } }) => this.setState({ title: value })}
                    />
                </div>

                <div className="examination-category">分类</div>

                <div className="examination-content">
                    <CommonlyInputText
                        value={content || ''}
                        onChangeHandle={value => this.setState({ content: value })}
                        isMultipleInput
                        isAutoHeight
                        minHeight={250}
                        placeholder='文章内容'
                    />
                </div>

                {src && <div className="examination-question">
                    <img
                        onClick={this.showImage}
                        src={src}
                        alt="examination-question"
                    />
                </div>}

                <div className="examination-linked">
                    {related.map((i, k) => (
                        <div className="examination-linked-item" key={k}>
                            <div className="linked-item-container flex-start-center">
                                <div className="linked-item-descript flex-rest">关联标题</div>
                                <div className="linked-item-preview flex-center">预览</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ height: '425px' }} />
                <CommonlyBottomOperate
                    leftElement={[{
                        key: 'edit',
                        cilckHandle: this.editHandle,
                        element: '编辑'
                    }, {
                        key: 'delete',
                        cilckHandle: this.deleteHandle,
                        element: '删除'
                    }]}
                    rightElement={[{
                        cilckHandle: this.cancelHandle,
                        element: '返回'
                    }]}
                />
            </div >
        )
    }
}
