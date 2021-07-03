export class CategoryMind extends React.Component {
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
            <div className="category-mind"
                onClick={this.confirmHandle}
            >category-mind</div>
        )
    }
}
