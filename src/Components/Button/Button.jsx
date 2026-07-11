import Button_Icon from '../../assets/button-icon.png';

const Button = ({text, onClick}) => {
    return (
        <button className="text-sm text-primary flex items-center gap-1" onClick={onClick}>
            {text}
            <img src={Button_Icon} alt="arrow-right" />
        </button>
    );
};

export default Button;