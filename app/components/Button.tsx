import clsx from 'clsx';
import Spinner from '@components/Spinner';

interface ButtonProps {
    label: string;
    onClick?: () => void;
    href?: string;
    disabled?: boolean;
    variant?: 'primary' | 'secondary';
    className?: string;
    loading?: boolean;
}

const Button = ({ label, onClick, href, disabled = false, variant = 'primary', className = '' , loading = false}: ButtonProps) => {
    
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {

    if (disabled || loading) {
        event.preventDefault();
        return;
    }

    if (onClick) {
        onClick();
    }

    if (href) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
};

    return (
        <button
            onClick={handleClick}
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