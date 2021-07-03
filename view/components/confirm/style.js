import jsxStyle from './../jsx-style/index'

const content = (zIndex = 99) => `
    position        : fixed;
    width           : 100%;
    height          : 100%;
    top             : 0px;
    left            : 0px;
    z-index         : ${zIndex};
    background-color: #fff;

    display  : -webkit-box;
    display  : -moz-box;
    display  : -ms-flexbox;
    display  : -webkit-flex;
    display  : flex;

    flex-direction: column;
    align-items   : center;
`

const mask = {
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%',
    opacity: '0'
}

const container = {
    border: '1px solid #ddd',
    position: 'relative',
    background: '#fff',
    borderRadius: '5px',
    overflow: 'hidden'
}

const title = {
    padding: '15px 25px',
    fontSize: '16px',
    color: '#303133',
    borderBottom: '1px solid #ddd'
}

const operating = {
    ...jsxStyle.basicFlex.startCenter
}

const confirm = {
    height: '45px',
    padding: '0px 15px',
    borderRight: '1px solid #ddd',
    ...jsxStyle.basicFlex.center,
    ...jsxStyle.basicFlex.rest
}

const cancel = {
    height: '45px',
    padding: '0px 15px',
    ...jsxStyle.basicFlex.center,
    ...jsxStyle.basicFlex.rest
}


const style = {
    content,
    mask,
    container,
    title,
    operating,
    confirm,
    cancel
}

export default style
