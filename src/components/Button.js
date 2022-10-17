const Button = ({ img, text, onClick }) => (
    <div onClick={onClick} className='LoginBtn'>
        <img src={img} />
        <span className="buttonText">{text}</span>
    </div>
)

export default Button