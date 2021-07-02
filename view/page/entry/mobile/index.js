import Header from './components/header'
import List from './components/list'

export class MobileComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return <>
            <Header />
            <List />
        </>
    }
}
