import FullscreenIframe from './../../../components/fullscreen-iframe';
import toast from './../../../components/toast';

import List from './list'

export class MobileComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    onClickItemHandle = id => {
        console.log(id);
        this.showArticleHandle(id)
        this.showExaminationHandle(id)
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
        return <>
            <List
                onClickHandle={this.onClickItemHandle}
            />
        </>
    }
}
