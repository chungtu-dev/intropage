import React from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const ButtonTooltip = () => {
    return (
        <>
      {/* {['top', 'right', 'bottom', 'left'].map((placement) => ( */}
      {['bottom'].map((placement) => (
        <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={
            <Tooltip id={`tooltip-${placement}`}>
              Contact with me for more infomation
            </Tooltip>
          }
        >
          <Button variant="secondary" className='connect'>Connect</Button>
        </OverlayTrigger>
      ))}
    </>
    );
};

export default ButtonTooltip;