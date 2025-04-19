import clsx from 'clsx';
import Spinner from './Spinner';

interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    variant?: 'primary' | 'secondary';
    className?: string;
    loading?: boolean;
}

const Button = ({ label, onClick, disabled = false, variant = 'primary', className = '' , loading = false}: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={clsx({
                'button': true,
                'primary__button': variant === 'primary',
                'secondary__button': variant === 'secondary',
            }, className)}>
            {loading ?  <Spinner /> : label}
        </button>
    );
};

export default Button;