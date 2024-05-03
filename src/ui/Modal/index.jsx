/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { ReactNode } from 'react';
import cls from './modal.module.scss';

import { classNames } from '../../helpers/classnames';
import { Portal } from '../Portal';


const ANIMATION_DELAY = 200;

export const Modal = ({
    className = "", children, isOpen, onClose,
}) => {
    
    const [isClousing, setIsClousing] = React.useState(false);

    const timeRef = React.useRef();

    const mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClousing,
    };

    const onContentClick = (e) => {
        e.stopPropagation();
    };

    const closeHandler = React.useCallback(() => {
        if (onClose) {
            setIsClousing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClousing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = React.useCallback((e) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    React.useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timeRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div
                    className={cls.overlay}
                    onClick={closeHandler}
                >
                    <div
                        className={cls.content}
                        onClick={onContentClick}
                    >
                    <span className={cls.content_close_btn}onClick={onClose}></span>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
