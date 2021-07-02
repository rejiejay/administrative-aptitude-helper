export class Article extends React.Component {
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
            <div className="article"
                onClick={this.confirmHandle}
            >article</div>
        )
    }
}
