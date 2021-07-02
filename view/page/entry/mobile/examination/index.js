export default class Examination extends React.Component {
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
        const examinationId = loadPageHashVar('examination');
        const { reject } = this.props;

        if (!examinationId) {
            reject();
        }
    }

    confirmHandle = () => {
        const { resolve } = this.props;
        resolve();
    }

    render() {
        return (
            <div className="examination"
                onClick={this.confirmHandle}
            >examination</div>
        )
    }
}
