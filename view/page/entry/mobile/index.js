import FullscreenIframe from './../../../components/fullscreen-iframe';
import toast from './../../../components/toast';
import { loadPageHashVar, addQueryToPageHash } from './../../../utils/url-helper';

import List from './list'

export class MobileComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}

        this.isShowModal = false
    }

    componentDidMount() {
        window.addEventListener("hashchange", this.initLoadPageHash);
    }

    componentWillUnmount() {
        window.removeEventListener("hashchange", this.initLoadPageHash);
    }

    initLoadPageHash = () => {
        if (this.isShowModal) return

        const articleId = loadPageHashVar('article');
        const examinationId = loadPageHashVar('examination');

        if (articleId) this.showArticleHandle(articleId)
        if (examinationId) this.showArticleHandle(examinationId)
    }

    onClickItemHandle = id => {
        window.location.hash = addQueryToPageHash({ article: id });
        // window.location.hash = addQueryToPageHash({ examination: id });
    }

    showArticleHandle = id => {
        toast.show()
        import('./article').then(async ({ Article }) => {
            toast.destroy()
            this.isShowModal = true

            const article = new FullscreenIframe(Article, { id });
            const result = await article.show();

            if (result instanceof Error) return
            this.isShowModal = false

            console.log('result', result)
        })
    }

    showExaminationHandle = id => {
        toast.show()
        import('./examination').then(async ({ Examination }) => {
            toast.destroy()
            this.isShowModal = true

            const examination = new FullscreenIframe(Examination, { id });
            const result = await examination.show();

            if (result instanceof Error) return
            this.isShowModal = false

            console.log('result', result)
        })
    }

    render() {
        return <List
            onClickHandle={this.onClickItemHandle}
        />
    }
}
