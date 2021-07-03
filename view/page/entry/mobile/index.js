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
        this.initLoadPageHash();
        window.addEventListener("hashchange", this.initLoadPageHash);
    }

    componentWillUnmount() {
        window.removeEventListener("hashchange", this.initLoadPageHash);
    }

    initLoadPageHash = () => {
        if (this.isShowModal) return

        const pageType = loadPageHashVar('page');
        const articleId = loadPageHashVar('article');
        const examinationId = loadPageHashVar('examination');

        if (pageType === 'article' || pageType === 'article') {
            if (articleId) this.showArticleHandle(articleId)
            if (examinationId) this.showExaminationHandle(examinationId)
        }
    }

    onClickItemHandle = (id, page = 'article') => {
        if (page === 'article') return window.location.hash = addQueryToPageHash({ page, article: id });
        if (page === 'examination') return window.location.hash = addQueryToPageHash({ page, examination: id });
    }

    showArticleHandle = id => {
        toast.show()
        import('./article').then(async ({ Article }) => {
            toast.destroy()
            this.isShowModal = true

            const article = new FullscreenIframe(Article, { id });
            const result = await article.show();
            this.isShowModal = false
            window.history.back();

            if (result instanceof Error) return

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
            window.location.hash = ''

            console.log('result', result)
        })
    }

    render() {
        return <List
            onClickHandle={this.onClickItemHandle}
        />
    }
}
