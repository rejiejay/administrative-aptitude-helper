import List from './components/list'

export class MobileComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    onClickHandle = id => {
        console.log(id);
    }

    render() {
        return <>
            <List
                onClickHandle={this.onClickHandle}
            />
        </>
    }
}
