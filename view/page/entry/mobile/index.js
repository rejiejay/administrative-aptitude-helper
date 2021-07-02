import FullscreenIframe from './../../../components/fullscreen-iframe';
import toast from './../../../components/toast';

import List from './list'

export class MobileComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    onClickHandle = id => {
        console.log(id);
    }

    showArticleHandle = id => { }

    showExaminationHandle = id => { }

    render() {
        return <>
            <List
                onClickHandle={this.onClickHandle}
            />
        </>
    }
}
