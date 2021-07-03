/**
 * Confirm 对外方法
 */
import style from './style.js'

export default class Confirm {
    constructor(message, className = '', zIndex = 99) {
        this.div = document.createElement('div');
        this.div.setAttribute('style', style.content(zIndex))
        this.div.className = `components-modal flex-center ${className}`;

        this.renderElement = (resolve, reject) => <>
            <div style={style.mask} />
            <div style={style.container}>
                <div style={style.title}>{message || 'please confirm operation'}</div>
                <div style={style.operating}>
                    <div style={style.confirm} onClick={resolve}>确认</div>
                    <div style={style.cancel} onClick={reject}>取消</div>
                </div>
            </div>
        </>
    }

    destroy = () => {
        document.body.removeChild(this.div);
        ReactDOM.unmountComponentAtNode(this.div);
    }

    show() {
        const div = this.div
        const renderElement = this.renderElement
        const destroy = this.destroy

        return new Promise((resolve, reject) => {
            const resolveHandle = result => {
                resolve(result)
                destroy()
            }
            const rejectHandle = message => {
                reject(new Error(message))
                destroy()
            }
            document.body.appendChild(div)
            ReactDOM.render(renderElement(resolveHandle, rejectHandle), div);
        })
            .catch(error => error);
    }
}

