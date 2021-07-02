import { loadPageHashVar } from './../../../../utils/url-helper';

export class Article extends React.Component {
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
        const { reject } = this.props;

        if (!articleId) {
            reject();
        }
    }

    confirmHandle = () => {
        const { resolve } = this.props;
        resolve();
    }

    render() {
        return (
            <div className="article"
                onClick={this.confirmHandle}
            >article</div>
        )
    }
}
