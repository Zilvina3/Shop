import './LeftRightBox.css'

const LeftRightBox = ({textLeft, textRight}) => {
    return(
        <div className="LeftRightBox">
            <div className=" boxLeft">
                <h1>LeftBoxHeader</h1>
            </div>
            <div className=" boxRight">
                <h1>RightBoxHeader</h1>
            </div>
        </div>
    )
}

export default LeftRightBox;