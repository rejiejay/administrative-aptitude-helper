const htmlStringToParagraph = (htmlString = '') => htmlString
    .split('\n')
    .map((item, i) => <p key={i}>{item}</p>);

const RenderHelper = {
    htmlStringToParagraph,
}

export default RenderHelper
