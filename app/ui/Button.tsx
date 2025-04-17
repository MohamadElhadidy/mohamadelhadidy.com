import clsx from 'clsx';

interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    variant?: 'primary' | 'secondary';
    className?: string;
}

const Button = ({ label, onClick, disabled = false, variant = 'primary', className = '' }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={clsx({
                'button': true,
                'primary__button': variant === 'primary',
                'secondary__button': variant === 'secondary',
            }, className)}>
            {label}
        </button>
    );
};

export default Button;