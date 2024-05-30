interface PropsInterface {
    isOpen: boolean,
    onClose: any,
    children: React.ReactNode
}

export default function Dialog ({isOpen, onClose, children}: PropsInterface) {

    const handleOverlayClick = (event: any) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return(
        <div className={`dialog-overlay ${isOpen ? '' : 'invisible'}`} onClick={handleOverlayClick}>
            <div className="dialog-content">
                {children}
            </div>
        </div>
    )
}