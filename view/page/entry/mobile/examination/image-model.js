export class ImageModel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const { resolve, src } = this.props;
        return (
            <div className="examination-question-model"
                onClick={resolve}
            >
                <img
                    src={src}
                    alt="examination-question"
                />
            </div>

        )
    }
}
