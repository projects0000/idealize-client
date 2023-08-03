import {CircleSpinnerOverlay } from 'react-spinner-overlay';

const Overlay = (props)=>{
    return(
        <CircleSpinnerOverlay
          loading={props.loading}
          outerBorderWidth={4}
          innerBorderWidth={10}
          color="#ffffff"
          overlayColor="rgba(0, 0, 0, 0.9)"
        />
    )
}

export default Overlay;