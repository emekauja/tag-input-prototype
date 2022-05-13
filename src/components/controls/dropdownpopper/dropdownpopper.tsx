/**
 * This component serves as our reusable dropdown popper
 * It leverages the concept of Imperative design where we can pass JSX.Element's as props,
 * and the parent component displays them with no form of styling
 */

import { ReactElement, useCallback, useEffect, useRef, useState } from 'react';

import { usePopper } from 'react-popper';

import { useOnOutsideClick } from 'src/hooks/useOnOutsideClick';

type Placement =
  | 'auto'
  | 'auto-start'
  | 'auto-end'
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'left'
  | 'left-start'
  | 'left-end';
type Strategy = 'absolute' | 'fixed';
interface IDropdownPopperProps {
  reference: ReactElement;
  dropdown: ReactElement;
  automatic?: boolean;
  show?: boolean;
  placement?: Placement;
  strategy?: Strategy;
  useReferenceMinWidth?: boolean;
  setShow?: (value: boolean) => void;
}

export const DropdownPopper = ({
  reference,
  dropdown,
  automatic,
  show,
  setShow,
  placement = 'bottom-start',
  strategy = 'fixed',
  useReferenceMinWidth,
}: IDropdownPopperProps) => {
  const parentRef = useRef<HTMLSpanElement | null>(null);
  const [open, setOpen] = useState(automatic ? false : show);
  const [referenceElement, setReferenceElement] =
    useState<HTMLSpanElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLSpanElement | null>(
    null
  );
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
    strategy,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 10],
        },
      },
      /* {
           name: 'preventOverflow',
           options: {
             padding: 32,
           },
         }, */
    ],
  });

  // update open state whenever show changes
  useEffect(() => {
    if (!automatic) {
      setOpen(show);
    }
  }, [show, automatic]);

  // handler for when *body* is clicked
  const handleOutsideClick = useCallback(() => {
    if (automatic) {
      setOpen(false);
      return;
    }
    if (setShow) setShow(false);
  }, [automatic, setShow]);
  useOnOutsideClick(parentRef, handleOutsideClick);

  // callback when reference element is clicked
  const handleReferenceClick = useCallback(() => {
    if (automatic) {
      setOpen(!open);
    }
  }, [automatic, open]);

  const child = referenceElement?.children[0];
  const referenceWidth = child ? child?.clientWidth : 'auto';

  return (
    <span ref={parentRef}>
      <span ref={setReferenceElement} onClick={handleReferenceClick}>
        {reference}
      </span>

      {open ? (
        <span
          ref={setPopperElement}
          style={{
            ...styles.popper,
            zIndex: 9999,
            minWidth: useReferenceMinWidth ? referenceWidth : 'auto',
          }}
          {...attributes.popper}
        >
          {dropdown}
        </span>
      ) : null}
    </span>
  );
};

DropdownPopper.defaultProps = {
  automatic: true,
  show: false,
};
