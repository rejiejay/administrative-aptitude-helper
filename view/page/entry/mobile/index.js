import FullscreenIframe from './../../../components/fullscreen-iframe';
import toast from './../../../components/toast';
import { loadPageHashVar, addQueryToPageHash } from './../../../utils/url-helper';

import List from './list'

export class MobileComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        window.addEventListener("hashchange", this.initLoadPageHash);
    }

    componentWillUnmount() {
        window.removeEventListener("hashchange", this.initLoadPageHash);
    }

    initLoadPageHash = () => {
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

            const article = new FullscreenIframe(Article, { id });
            const result = await article.show();

            if (result instanceof Error) return

            console.log('result', result)
        })
    }

    showExaminationHandle = id => {
        toast.show()
        import('./examination').then(async ({ Examination }) => {
            toast.destroy()

            const examination = new FullscreenIframe(Examination, { id });
            const result = await examination.show();

            if (result instanceof Error) return

            console.log('result', result)
        })
    }

    render() {
        return <List
            onClickHandle={this.onClickItemHandle}
        />
    }
}
