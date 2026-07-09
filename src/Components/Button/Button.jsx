import Button_Icon from '../../assets/button-icon.png';

const Button = ({text}) => {
    return (
        <button className="text-sm text-primary flex items-center gap-1">
            {text}
            <img src={Button_Icon} alt="arrow-right" />
        </button>
    );
};

export default Button;