export default class Examination extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
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
